/* ============================================================
   CẦU postMessage GIỮA STUDIO VÀ TRANG HARNESS — HOP-DONG §6
   Trình xuất (người D) chèn dòng này vào BẢN COPY của tapNN-full.html:
       <script src="dung/dieu-khien.js"></script>
   Trang harness GỐC của mỗi tập không bao giờ bị sửa.

   Vì sao cần cầu này: gói dự án nằm trên host khác (jsDelivr/Vercel static),
   nên studio KHÔNG thể gọi iframe.contentWindow.__video — khác origin thì
   trình duyệt chặn. Chỉ còn postMessage.

   Không phụ thuộc thư viện. Chạy được cả khi trang harness lỗi nặng.
   ============================================================ */
(function () {
  "use strict";

  var NGUON_VAO = "tgvt-studio";   /* studio -> iframe */
  var NGUON_RA = "tgvt-canh";      /* iframe -> studio */

  /* targetOrigin "*" là có chủ ý: studio có thể chạy ở localhost:5180, ở
     Vercel, hoặc trong file:// khi dev. Tin gửi ra không chứa gì bí mật
     (chỉ số cảnh + giây + chuỗi lỗi), nên không cần khoá origin. */
  function guiRa(tin) {
    tin.nguon = NGUON_RA;
    try {
      (window.parent || window).postMessage(tin, "*");
    } catch (e) {
      /* parent đã đóng — không làm gì được, và cũng không được để ném tiếp */
    }
  }

  function guiLoi(msg) {
    guiRa({ loai: "loi", msg: String(msg) });
  }

  /* Cảnh dựng sai thường KHÔNG hiện lỗi trên màn hình — chỉ hiện ở console.
     Người review phải thấy được, nên chuyển tiếp hết về studio. */
  window.addEventListener("error", function (ev) {
    var m = ev && ev.error && ev.error.stack
      ? ev.error.stack
      : (ev && ev.message ? ev.message : "lỗi JS không rõ") +
        (ev && ev.filename ? " (" + ev.filename + ":" + ev.lineno + ")" : "");
    guiLoi(m);
  });
  window.addEventListener("unhandledrejection", function (ev) {
    var r = ev && ev.reason;
    guiLoi("promise bị bỏ rơi: " + (r && r.stack ? r.stack : r));
  });

  function soCanh() {
    try {
      return typeof window.__deck === "function" ? window.__deck().length : 0;
    } catch (e) {
      return 0;
    }
  }

  window.addEventListener("message", function (ev) {
    var d = ev.data;
    if (!d || d.nguon !== NGUON_VAO) return;
    try {
      if (d.lenh === "deck") {
        if (typeof window.__deck !== "function")
          return guiLoi("trang cảnh không phơi ra __deck() — có phải tapNN-full.html?");
        guiRa({ loai: "deck", deck: window.__deck() });
      } else if (d.lenh === "timeline") {
        if (typeof window.__video !== "function")
          return guiLoi("trang cảnh không phơi ra __video()");
        window.__video(d.tl);
      } else if (d.lenh === "frame") {
        if (typeof window.__frame !== "function")
          return guiLoi("trang cảnh không phơi ra __frame()");
        window.__frame(d.t);
        guiRa({ loai: "da-ve", t: d.t });
      }
    } catch (e) {
      /* Bẫy HOP-DONG §9.3: frame gọi trước timeline thì ST.tl là null và
         __frame ném "Cannot read properties of null". Dịch sang tiếng người
         thay vì để iframe chết im. */
      var m = e && e.message ? e.message : String(e);
      if (d.lenh === "frame" && /of null|of undefined/.test(m))
        m = "gọi frame trước khi nạp timeline (__video chưa được gọi) — " + m;
      guiLoi("lệnh " + d.lenh + " lỗi: " + m + (e && e.stack ? "\n" + e.stack : ""));
    }
  });

  /* san-sang phải gửi KỂ CẢ khi __frame/__deck không tồn tại (so_canh: 0):
     studio cần biết iframe đã nạp để hiện lỗi thay vì treo 8 giây. */
  var daBao = -1;
  function sanSang() {
    var n = soCanh();
    /* Chỉ gửi LẠI khi con số đổi. Nếu bắn hai tin giống nhau thì studio gọi
       __video() hai lần, lần hai ghi đè ST.tl lúc có thể đang vẽ dở.
       (Người dựng D đo được lỗi này ở bản đầu.) */
    if (n === daBao) return;
    daBao = n;
    guiRa({ loai: "san-sang", so_canh: n });
  }
  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", sanSang);
  else sanSang();
  /* Lưới an toàn: các <script src="canh/khoi-N.js"> chèn cảnh ở cuối body nên
     DOMContentLoaded đã đủ, nhưng nếu trình xuất đổi thứ tự thì lần đầu có
     thể đếm được 0 cảnh. Lần này chỉ gửi nếu con số thật sự khác. */
  window.addEventListener("load", sanSang);
})();
