/* ═══════════════════════════════════════════════════════════════════════════
   KHỐI 3 — "cái lịch và cái bóng" · "Chỉ có điều" · "Đóng"
   Bản V3, dựng lại từ đầu ngày 28/11/2026 theo PHẦN 15 của HUONG-DAN-DUNG-CANH.md.

   Nguồn sự thật: `_chia-khoi.json` → khoi[2] = đoạn 36–49 (hiển thị 37–50),
   giây 540,244 → 744,190 · 203,9 giây · 32 câu.

   SỐ LẦN ĐỔI HÌNH = 32 cảnh DANGKY + 19 mốc cắt cứng bên trong cảnh = 51.
   51 / 3,398 phút = 15,0 lần/phút — giữa dải 12–18 của Luật A.
   Bảng mốc cắt cứng nằm ở `canh/nguon-khoi-3.md` mục "Mốc cắt cứng".

   BỐN LUẬT MỚI CỦA PHẦN 15, ÁP Ở ĐÂY:
   · §15.1 tư liệu thật trước: 16/32 cảnh dùng VIDEO THẬT, 11 cảnh dùng ảnh thật.
     Chỉ còn 5 cảnh thuần đồ hoạ, và cả 5 đều là sơ đồ/biểu đồ (ngoại lệ §15.1.3),
     mỗi cảnh vẫn có nền chuyển sắc có chất liệu + một lớp chuyển động thật.
   · §15.2 không cảnh nào là hình khối trừu tượng trên nền trắng trơn.
     Hai cảnh từng bị chủ kênh bác đã dựng lại hẳn:
       – "bốn thanh ngang xám trên trục mũi tên" (các khoảng thời gian hết nhật
         thực) → nay là k3c14: dải Ngân Hà thật (ảnh NPS) + bốn dải sáng vàng
         có quầng, có đầu mút nhoè, trên trục thời gian phát sáng.
       – "bàn tay giơ ngón cái vẽ tay" → nay là k3c30: ảnh rạn thật + biểu
         tượng thumb_up của Material Symbols (Apache 2.0), không vẽ tay.
   · §15.3 VIDEO THẬT: 9 tệp trong `slide/video/`, tất cả < 10 giây và < 6 MB,
     dùng qua VID() của harness. KHÔNG gọi play() ở bất cứ đâu.
   · §15.6 thời gian chuẩn hoá: mọi nhịp trải dài dùng c.u, mọi mốc cắt cứng
     dùng ngưỡng trên c.u, nhịp bám câu dùng c.since(k).
     c.t chỉ dùng cho dao động tuần hoàn (sóng, nhấp nháy, kim đồng hồ) —
     tức là thứ không có "đích" nên không bao giờ bão hoà rồi đứng hẳn.

   LUẬT CŨ: mọi chuyển động là hàm thuần của c.t / c.u. Không CSS animation,
   không hẹn giờ, không vòng lặp khung, không đồng hồ thật, không hàm ngẫu
   nhiên có sẵn lúc vẽ (dùng rn(i,j) tất định).

   CÚ ĐÓNG CỦA CẢ TẬP nằm ở k3c23: cú gài "san hô đẻ theo rằm" cài ở khối 1
   NỔ tại đây bằng VIDEO THẬT của NOAA — một đầu san hô nhả trứng trắng xoá.
   Lời đã sửa: "mỗi năm, đúng vào mấy đêm sau rằm ấy" — nên đồ hoạ pha trăng ở
   k3c26 vẽ RẰM RỒI MẤY ĐÊM SAU, không phải "đêm nào trăng tròn".
   ═══════════════════════════════════════════════════════════════════════════ */
(() => {

const CAU = [
  "Hệ quả vẫn chưa dừng ở ngoài biển, vì nó leo được lên tới chỗ con người.",   /* 00 · đoạn 36 · 540.2→544.9 (4.7s) */
  "Bạn thử lấy Mặt Trăng ra khỏi tờ lịch Việt Nam mà xem.",   /* 01 · đoạn 37 · 545.5→549.1 (3.6s) */
  "Không còn rằm thì không còn Trung thu, vì Trung thu vốn là rằm tháng tám, một ngày được định nghĩa bằng hình dáng Mặt Trăng chứ không dựa vào dấu hiệu nào khác.",   /* 02 · đoạn 37 · 549.4→557.3 (7.9s) */
  "Mà mất tuần trăng thì âm lịch cũng mất theo, nên mùng một và cả ngày Tết đều không còn chỗ nào để đặt vào nữa.",   /* 03 · đoạn 37 · 557.6→563.7 (6.1s) */
  "Riêng ở miền Tây còn một thứ ăn sâu hơn cả tờ lịch, đó là con nước.",   /* 04 · đoạn 38 · 564.2→568.8 (4.6s) */
  "Người đặt dớn, người đi câu, người chờ mùa nước nổi, tất cả đều đếm theo con nước rằm và con nước đầu tháng.",   /* 05 · đoạn 38 · 569.1→575.8 (6.7s) */
  "Đó là cả một hệ thống kinh nghiệm tích qua nhiều đời, mà cái mốc để nó dò theo lại là một vật thể cách ta ba trăm tám mươi tư nghìn bốn trăm ki-lô-mét.",   /* 06 · đoạn 38 · 576.1→583.8 (7.8s) */
  "Mất Mặt Trăng thì hệ thống ấy không hề sai, nhưng nó mất luôn cái mốc để đếm, nên không còn dùng được vào việc gì.",   /* 07 · đoạn 38 · 584.1→590.5 (6.4s) */
  "Rồi tới cái mất cuối cùng, cũng là cái khiến tôi ngậm ngùi nhất, là nhật thực toàn phần.",   /* 08 · đoạn 39 · 591.1→596.4 (5.3s) */
  "Nhìn từ Trái Đất, Mặt Trăng và Mặt Trời to gần như bằng nhau, cùng chiếm khoảng nửa độ trên bầu trời.",   /* 09 · đoạn 39 · 596.6→602.4 (5.8s) */
  "Mặt Trời to hơn Mặt Trăng bốn trăm lần, mà cũng ở xa hơn gần đúng bốn trăm lần, thành ra đĩa này úp vừa khít lên đĩa kia.",   /* 10 · đoạn 39 · 602.6→609.8 (7.1s) */
  "Sự vừa khít đó không phải một định luật của tự nhiên, mà là một trùng hợp rơi đúng vào thời đại chúng ta.",   /* 11 · đoạn 40 · 610.3→616.2 (5.9s) */
  "Ngày xưa Mặt Trăng ở gần hơn nên nó che thừa, và vì nó vẫn đang lùi ra ba phẩy tám cm mỗi năm, rồi sẽ tới lúc nó che không đủ nữa.",   /* 12 · đoạn 40 · 616.5→624.6 (8.1s) */
  "Các tính toán đưa ra những khoảng rất khác nhau, từ vài trăm triệu tới gần một tỉ năm, nên tôi xin không chọn hộ con số nào.",   /* 13 · đoạn 40 · 624.8→631.8 (6.9s) */
  "Nhưng kết luận thì ai cũng giống nhau: loài người đang sống đúng vào quãng ngắn ngủi mà vành lửa ấy còn hiện ra được.",   /* 14 · đoạn 40 · 632.0→638.1 (6.1s) */
  "Chỉ có điều, cả cái chuỗi vừa rồi đều dựa trên một phép trừ mà vũ trụ không cho phép ai làm.",   /* 15 · đoạn 41 · 639.5→644.9 (5.4s) */
  "Mặt Trăng chẳng đi đâu cả.",   /* 16 · đoạn 42 · 645.5→647.8 (2.3s) */
  "Không có cơ chế vật lý nào lấy nó ra khỏi bầu trời của chúng ta, nên xin đừng ai nghe xong tập này rồi tối về mất ngủ.",   /* 17 · đoạn 42 · 648.1→654.8 (6.8s) */
  "Và ngay trong những chỗ đo được, mức chắc chắn cũng không đều nhau đâu.",   /* 18 · đoạn 43 · 655.4→659.5 (4.2s) */
  "Chuyện thuỷ triều teo lại thì gần như không ai cãi, còn lịch âm với nhật thực thì thuần số học, cứ tính là ra.",   /* 19 · đoạn 43 · 659.8→666.1 (6.3s) */
  "Riêng cái trục lắc tới mức nào thì Laskar năm một nghìn chín trăm chín mươi ba và Lissauer năm hai nghìn không trăm mười hai đưa ra hai con số rất khác nhau, tới giờ vẫn chưa bên nào thắng.",   /* 20 · đoạn 43 · 666.3→675.2 (8.9s) */
  "Vậy có bao nhiêu thứ chúng ta vẫn đinh ninh là bản chất của thế giới, thật ra chỉ là thói quen mà thế giới hình thành dưới ảnh hưởng của một vật thể đang lặng lẽ rời đi, mỗi năm một con tem?",   /* 21 · đoạn 44 · 675.8→685.2 (9.4s) */
  "Và tôi thấy thú vị khi nghĩ rằng ở đâu đó ngoài khơi nước Úc, mỗi năm vẫn có một đêm mà cả một rạn san hô dài hàng trăm cây số cùng nhả trứng lên mặt nước trong một lúc.",   /* 22 · đoạn 45 · 686.6→695.1 (8.5s) */
  "Chúng không có mắt, không có não, và cũng chẳng đi đâu được.",   /* 23 · đoạn 46 · 695.7→699.6 (4.0s) */
  "Thứ duy nhất chúng có là một con protein biết nhận ra rằng đêm nay trời sáng hơn đêm qua.",   /* 24 · đoạn 46 · 699.9→705.0 (5.1s) */
  "Vậy mà mỗi năm, đúng vào mấy đêm sau rằm ấy, cả rạn lại hiểu rằng đã đến lúc.",   /* 25 · đoạn 46 · 705.3→710.5 (5.2s) */
  "Chúng ta vẫn quen xem Mặt Trăng như một món trang trí của bầu trời đêm.",   /* 26 · đoạn 47 · 711.0→715.1 (4.1s) */
  "Còn với vô số loài khác trên hành tinh này, nó là cái đồng hồ, là tờ lịch, và là cái máy bơm.",   /* 27 · đoạn 47 · 715.4→721.7 (6.3s) */
  "Và đó, thưa quý vị và các bạn, là cái giá thật của ba phẩy tám cm mỗi năm.",   /* 28 · đoạn 48 · 722.2→727.7 (5.4s) */
  "Hy vọng anh chị em thích tập này, nhớ để lại một lượt thích để chúng tớ biết nhé.",   /* 29 · đoạn 49 · 728.2→733.1 (4.9s) */
  "Còn nếu anh chị em nghĩ ra thêm một thứ nữa sẽ sập mà tập này chưa kịp nhắc tới, thì mời viết xuống bình luận, chúng tớ đọc hết.",   /* 30 · đoạn 49 · 733.4→740.4 (7.0s) */
  "Còn bây giờ, xin chào, và hẹn gặp lại."   /* 31 · đoạn 49 · 740.7→744.2 (3.5s) */
];

/* ─────────── bảng màu (token của tap03-full.html) ─────────── */
const TRANG = "#E8E6DF", DAT = "#C98A4B", BIEN = "#2E6F8E", DEM = "#070B16",
      SANHO = "#E0705A", NHAT = "#F2C14E", GIAY = "#F6F8F5", GIAY2 = "#ECEFEA",
      CHUTOI = "#1C2A22", DO = "#D4523C", LAM = "#8FD2EA", VANG = "#FFD98A";
/* KHÔNG đặt dấu nháy kép vào đây: chuỗi này nằm trong một thuộc tính style="…",
   một dấu " sẽ đóng thuộc tính sớm và cả khai báo font bị vứt đi — lỗi câm, chỉ
   lộ ra khi chụp khung và thấy chữ tiêu đề co lại còn cỡ mặc định 16px. */
const F = "system-ui,-apple-system,Helvetica,Arial,sans-serif";

/* Nền BẮT BUỘC có chất liệu hoặc chuyển sắc (§15.2). Không nền trắng trơn. */
const NENS = {
  giay: "radial-gradient(120% 98% at 30% 18%, #FFFDF6 0%, #F4F0E3 32%, #DFD7C1 70%, #C3B79B 100%)",
  am:   "radial-gradient(114% 94% at 62% 26%, #FFF7E6 0%, #F8EDD6 30%, #E6D6B2 66%, #CBB98F 100%)",
  lanh: "radial-gradient(118% 96% at 28% 22%, #FBFDFE 0%, #E8F2F8 32%, #CBDEEA 68%, #A8C2D2 100%)",
  /* SỬA 28/11 · mức CHẶN. `lanh` ở trên quá trắng: k3c19/k3c20 chụp ra gần như
     trắng bệch, và k3c11/k3c16 cũng bị chê nhạt. `lanh2` là bản ĐẬM HƠN của
     cùng một tông, dùng cho các cảnh sơ đồ nền lạnh. */
  lanh2: "radial-gradient(120% 98% at 28% 20%, #C9DEEB 0%, #A8C8DC 30%, #7BA6C0 66%, #4E7D9A 100%)",
  /* SỬA 28/11 · k3c08: sơ đồ sóng xám-lam trên nền trắng xanh gần như không có
     độ tương phản. Nền mới lấy đỉnh #1B4E68 như bản soát chỉ định. */
  lanhT: "radial-gradient(120% 98% at 30% 20%, #2C6B8C 0%, #1B4E68 34%, #103449 70%, #08202E 100%)",
  /* SỬA 28/11 · k3c11: nền kem gần trắng, chữ xám trên kem, đọc không ra.
     Nền mới đi từ #F0E2C4 xuống #D8C49A như bản soát chỉ định. */
  kem: "radial-gradient(118% 96% at 32% 20%, #E6D8B6 0%, #D9C69A 32%, #C8AF80 68%, #BCA272 100%)",
  dem:  "radial-gradient(124% 112% at 50% 32%, #1A2742 0%, #0E1830 40%, #070C18 78%, #03060E 100%)",
  bien: "radial-gradient(124% 112% at 42% 28%, #205471 0%, #133C55 38%, #08202F 76%, #030C14 100%)"
};

/* ─────────── dựng lớp ─────────── */
const L = (sau, id, html, style) =>
  `<div class="lop" data-sau="${sau}"${id ? ` id="${id}"` : ""}${style ? ` style="${style}"` : ""}>${html || ""}</div>`;
const NEN = (k, id) => L(0, id, "", "background:" + (NENS[k] || k));
const SV = (sau, cls, id) => L(sau, id, `<svg class="${cls}" style="overflow:visible"></svg>`);
const IMG = (id, f, sau, o) => { o = o || {};
  return L(sau, id, `<img src="anh/${f}" alt="" style="${o.pos ? `object-position:${o.pos};` : ""}` +
    `filter:${o.loc || "contrast(1.06) saturate(1.02)"}">`); };
/* ảnh phải thấy TRỌN khung (ví dụ đĩa trăng vuông): bù đúng phần nới -14% của .lop,
   rồi object-fit:contain bên trong hộp đã bù — xem bẫy 11.2 của hợp đồng. */
const FIT = (id, f, sau, o) => { o = o || {};
  return L(sau, id, `<div style="position:absolute;inset:10.9375%"><img src="anh/${f}" alt=""` +
    ` style="position:absolute;inset:0;width:100%;height:100%;object-fit:contain;` +
    `filter:${o.loc || "contrast(1.05) saturate(1.0)"}"></div>`); };
/* ảnh thật làm CHẤT LIỆU nền. Mặc định cũ (blur 48 + brightness .8 + saturate .62)
   biến mọi ảnh thành một vũng xám — đã chụp khung và thấy. Nay nhoè vừa phải và
   GIỮ màu, và chỉ dùng với ảnh vốn có màu (chợ hoa, tranh bãi biển), không dùng
   với ảnh nền đen (ảnh Mặt Trăng trên nền đen nhoè ra chỉ còn một quầng xám). */
const MO = (id, f, sau, o) => { o = o || {};
  return L(sau || 0, id, `<img src="anh/${f}" alt="" style="filter:blur(${o.b || 26}px) ` +
    `brightness(${o.s || 1.0}) saturate(${o.bh || 1.15});transform:scale(1.2)">`); };
/* VIDEO THẬT — dùng VID() của harness, chỉ chèn thêm id để cắt cứng được (§15.3) */
const VI = (id, f, sau, o) => VID(f, sau, o).replace('<div class="lop"', `<div class="lop" id="${id}"`);

/* ─────────── chữ trên HUD ─────────── */
/* VÙNG AN TOÀN 48 px (luật L3 của bản soát). Dòng nguồn cũ đặt ở top:664px, cao
   19,5 px → mép dưới 683,5 px, tức NGOÀI hộp an toàn y ≤ 672. Đo bằng
   getBoundingClientRect() chứ không ước lượng. Nay top:650px → mép dưới 669,5 px.
   Bề ngang cũng kẹp lại: left 66 px, max-width 1166 px → mép phải ≤ 1232 px. */
/* dòng nguồn chỉ MỜ DẦN, không trượt lên: kh() mặc định nhích 12 px theo trục y,
   đủ để đẩy mép dưới ra ngoài hộp an toàn trong 0,4 s đầu — đo được bằng
   getBoundingClientRect() ở mốc đang hoà hình. */
const khn = (id, t, a, b, f) => kh(id, t, a, b, f, 0);
const nguon = (id, s, l) => `<div class="tx nho" id="${id}" style="left:${l === undefined ? 66 : l}px;` +
  `top:650px;max-width:${1232 - (l === undefined ? 66 : l)}px">${s}</div>`;
const the = (id, s, mau, top, co) => `<div class="tx" id="${id}" style="left:0;top:${top === undefined ? 300 : top}px;` +
  `width:1280px;text-align:center;font:300 ${co || 56}px/1.14 ${F};letter-spacing:.26em;` +
  `color:${mau || TRANG};text-shadow:0 2px 24px rgba(3,8,13,.8)">${s}</div>`;
const SOTO = (id, ids, dv, st, px, mau) => `<div class="tx" id="${id}" style="${st}">` +
  `<span class="so" id="${ids}" style="font:800 ${px || 118}px/1 ${F};color:${mau || TRANG};letter-spacing:-.05em;` +
  `text-shadow:0 4px 30px rgba(3,8,13,.75)">0</span>` +
  `<span class="dv" style="color:#B9C6CE">${dv ? "&nbsp;" + dv : ""}</span></div>`;

/* ─────────── tiện ích ─────────── */
const E = id => document.getElementById(id);
const sv = (root, cls) => { const V = root.querySelector("svg." + cls); V.innerHTML = ""; return V; };
/* tiến độ con trong một đoạn [a,b] của c.u — mọi mốc cắt cứng đi qua đây (§15.6) */
const seg = (u, a, b) => cl((u - a) / (b - a), 0, 1);
/* cắt cứng: bật/tắt tức thì một lớp */
const hien = (id, on) => { const e = E(id); if (e) e.style.opacity = on ? 1 : 0; };
/* máy quay theo tiến độ u: [x0,x1,y0,y1,z0,z1] */
const KB = (root, c, u, a) => cam(root, { t: c.t, x: lerp(a[0], a[1], u), y: lerp(a[2], a[3], u),
  z: lerp(a[4], a[5], u), r: a.length > 6 ? lerp(a[6], a[7], u) : 0 });

/* mảng tối chân khung, để chữ nguồn đọc được trên ảnh sáng */
function chan(V, pre, manh) {
  gradL(V, pre + "-ch", 0, 760, 0, 470, [[0, "#04080F", manh === undefined ? .78 : manh], [1, "#04080F", 0]]);
  el("rect", { x: -400, y: 380, width: 2100, height: 700, fill: "url(#" + pre + "-ch)" }, V);
}
/* quầng tối bốn góc — làm đồ hoạ nổi lên khỏi ảnh */
function viND(V, pre, manh) {
  gradR(V, pre + "-vg", 640, 360, 880, [[0, "#000", 0], [.55, "#000", 0], [1, "#04080F", manh === undefined ? .55 : manh]]);
  el("rect", { x: -400, y: -300, width: 2100, height: 1400, fill: "url(#" + pre + "-vg)" }, V);
}

/* ĐĨA MẶT TRĂNG vẽ tay — tất định, có biển tối và vài hố */
function dia(p, cx, cy, r, mau, pre, V) {
  const g = el("g", {}, p);
  gradB(V, pre, [[0, "#FFFFFF", .24], [.55, "#FFFFFF", .05], [1, "#000000", .32]]);
  el("circle", { cx: cx, cy: cy, r: r, fill: mau || TRANG }, g);
  for (let i = 0; i < 9; i++) {
    const a = rn(i, 501) * Math.PI * 2, q = r * (.15 + rn(i, 502) * .62);
    el("circle", { cx: (cx + q * Math.cos(a)).toFixed(1), cy: (cy + q * Math.sin(a)).toFixed(1),
      r: (r * (.05 + rn(i, 503) * .16)).toFixed(1), fill: "#9C9A93",
      opacity: (.18 + rn(i, 504) * .26).toFixed(2) }, g);
  }
  el("circle", { cx: cx, cy: cy, r: r, fill: "url(#" + pre + ")" }, g);
  return g;
}
/* một pha trăng: ph = 0 (sóc) → .5 (rằm) → 1 (sóc) */
function pha(p, cx, cy, r, ph, mau, nen) {
  const g = el("g", {}, p);
  el("circle", { cx: cx, cy: cy, r: r, fill: nen || "#1B2233" }, g);
  const k = Math.cos(ph * Math.PI * 2), sang = ph < .5 ? 1 : 0;
  const d = "M" + cx + "," + (cy - r) + " A" + r + "," + r + " 0 0 " + (sang ? 1 : 0) + " " + cx + "," + (cy + r) +
            " A" + (r * Math.abs(k)).toFixed(2) + "," + r + " 0 0 " + ((k < 0) === (sang === 1) ? 1 : 0) +
            " " + cx + "," + (cy - r) + " Z";
  el("path", { d: d, fill: mau || TRANG }, g);
  return g;
}
/* Trái Đất vẽ tay */
function traiDat(p, cx, cy, r, seed) {
  const g = el("g", {}, p);
  el("circle", { cx: cx, cy: cy, r: r, fill: BIEN }, g);
  for (let i = 0; i < 6; i++) {
    const a = rn(i, seed || 71) * Math.PI * 2, q = r * (.08 + rn(i, (seed || 71) + 1) * .6);
    el("circle", { cx: (cx + q * Math.cos(a)).toFixed(1), cy: (cy + q * Math.sin(a)).toFixed(1),
      r: (r * (.12 + rn(i, (seed || 71) + 2) * .3)).toFixed(1), fill: DAT, opacity: .92 }, g);
  }
  el("circle", { cx: cx, cy: cy, r: r, fill: "none", stroke: "#8FB6C8", "stroke-width": 3 }, g);
  return g;
}
/* biểu tượng thumb_up của Material Symbols Rounded (Apache 2.0) — KHÔNG vẽ tay (§15.4).
   viewBox gốc "0 -960 960 960"; dựng trong một <g> có translate+scale riêng. */
const MS_THUMB = "M860-632q23 0 41.5 18.5T920-572v82q0 11-2.5 25.5T910-439L794-171q-9 21-29.5 36T721-120H314q-25 0-42.5-17.5T254-180v-428q0-11 4.5-22t12.5-19l207-218q14-14 33.5-17t36.5 7q17 10 25.5 28t4.5 37l-38 180h320ZM137-120q-23 0-40-17t-17-40v-398q0-23 17-40t40-17q23 0 40 17t17 40v398q0 23-17 40t-40 17Z";
/* biểu tượng Lucide (ISC) — nét, viewBox "0 0 24 24". Không vẽ tay (§15.4). */
const LU_CMT = ["M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
                "M7 11h10", "M7 15h6", "M7 7h8"];
const LU_EYE = ["M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
                "M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6"];
const LU_BRAIN = ["M12 18V5", "M15 13a4.17 4.17 0 01-3-4 4.17 4.17 0 01-3 4",
                  "M17.707 6.294A3 3 0 1012 5a3 3 0 10-5.707 1.294", "M17.996 5.125a4 4 0 012.526 5.77",
                  "M18 18a4 4 0 002-7.465", "M19.967 17.482a4 4 0 11-7.967.517 4 4 0 11-7.967-.517",
                  "M6 18a4 4 0 01-2-7.465", "M6.004 5.125a4 4 0 00-2.526 5.77"];
const LU_FOOT = ["M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",
                 "M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",
                 "M16 17h4", "M4 13h4"];
/* ─────────── nhãn SVG · SỬA 28/11 theo luật L1 của bản soát ─────────────────
   "mọi thanh, thẻ, trục, ô và glyph tự dựng đều phải mang nhãn của chính nó".
   Mọi nhãn phải nằm trong VÙNG AN TOÀN 48 px: x ∈ [48,1232], y ∈ [48,672] ở MỌI
   mốc c.u — đã đo thật bằng getBoundingClientRect(), không ước lượng. */
function nhanSV(p, x, y, s, mau, co, neo, dam) {
  const t = el("text", { x: x, y: y, fill: mau || "#1B4E68", "font-size": co || 24,
    "font-weight": dam === undefined ? 700 : dam, "font-family": "system-ui",
    "text-anchor": neo || "middle", opacity: 0 }, p);
  t.textContent = s;
  return t;
}
/* dấu ✕ DÀY — veX() của harness chỉ có nét 3,6 px, quá mảnh cho một dấu phủ định
   phải đọc được ngay (bản soát đòi 10 px ở k3c16 và một dấu ✕ "to" ở k3c18). */
function veXday(p, x, y, r, mau, net) {
  const g = el("g", {}, p);
  const d = [["M", x - r, y - r, "L", x + r, y + r], ["M", x + r, y - r, "L", x - r, y + r]];
  d.forEach(a => {
    el("path", { d: a.join(" "), fill: "none", stroke: "#06101C", "stroke-width": (net || 10) + 7,
      "stroke-linecap": "round", opacity: .5 }, g);
    el("path", { d: a.join(" "), fill: "none", stroke: mau, "stroke-width": net || 10,
      "stroke-linecap": "round" }, g);
  });
  return g;
}
/* đĩa nhật thực: đĩa đen + vành sáng. Dùng chung cho k3c12 và cho biểu tượng
   thứ ba của k3c19/k3c20 — bản soát bắt đúng: vòng tròn-gạch-chéo cũ đọc ra là
   biển CẤM, không phải nhật thực. */
function glyphNhatThuc(p, cx, cy, r, pre, V) {
  const g = el("g", {}, p);
  gradB(V || p, pre + "-nt", [[0, NHAT, .62], [.42, NHAT, .22], [1, NHAT, 0]]);
  el("circle", { cx: cx, cy: cy, r: r * 2.2, fill: "url(#" + pre + "-nt)" }, g);
  el("circle", { cx: cx, cy: cy, r: r, fill: NHAT }, g);
  el("circle", { cx: cx, cy: cy, r: r * .8, fill: "#0E1726" }, g);
  return g;
}

/* ─────────── QUẢ CẦU TRÁI ĐẤT / ĐĨA MẶT TRĂNG — KIỂU CHUNG CỦA CẢ TẬP ───────
   SỬA 28/11 theo luật L2 của bản soát: cả tập đang vẽ bốn Mặt Trăng và ba Trái
   Đất khác nhau, trên 20 cảnh. Khối 2 chủ trì và đã chốt: ẢNH NASA THẬT cắt
   tròn, một hàm duy nhất cho cả ba khối — `K2.cau()` (Trái Đất, chất liệu là
   BẢN ĐỒ TRẢI PHẲNG Blue Marble 2002, kể cả khi quả cầu đứng yên) và
   `K2.trang()` (Mặt Trăng, ghép ảnh mặt gần LRO). Khối 3 KHÔNG tự vẽ kiểu
   thứ tư và KHÔNG chép lại hàm — gọi chéo để không bao giờ lệch thông số.
   Năm cảnh của khối 3 đều là hành tinh ĐỨNG YÊN nên không gọi `K2.xoay()`.
   Tiền tố id luôn bắt đầu bằng "k3c…" nên không đụng id của khối 2 (bẫy 16.8).
   RÀO: nếu `window.K2` chưa được xuất ra (khối 2 đang sửa song song) thì rơi
   về hàm vẽ cũ, trang không vỡ — nhưng khi đó cảnh vẫn còn lỗi L2, xem báo cáo. */
const coK2 = () => typeof window !== "undefined" && window.K2 && window.K2.cau && window.K2.trang;
function cauTD(sv, pre, cx, cy, r) {
  if (coK2()) return window.K2.cau(sv, pre, cx, cy, r).g;
  return traiDat(sv, cx, cy, r, 71);
}
function diaMT(sv, pre, cx, cy, r) {
  if (coK2()) return window.K2.trang(sv, pre, cx, cy, r);
  return dia(sv, cx, cy, r, "#CFCCC3", pre + "-cu", sv);
}

/* ─────────── BA THANH "MỨC CHẮC CHẮN" — dùng chung cho k3c19 và k3c20 ───────
   SỬA 28/11 · mức CHẶN. Bản cũ: ba thanh KHÔNG MỘT CHỮ NÀO trên nền trắng bệch,
   và biểu tượng thứ ba (vòng tròn có gạch chéo) đọc ra là biển CẤM chứ không
   phải nhật thực. Hai cảnh liền nhau, 9,9 giây, người xem phải đoán.
   Nay: mỗi thanh có NHÃN CHỮ của chính nó, biểu tượng thứ ba đổi thành đĩa
   nhật thực (đĩa đen có vành sáng, dùng lại glyph của k3c12), nền thanh đổi từ
   trắng #FFFFFF sang #D6E3EC để phần đã đổ đầy nổi lên.
   Hai cảnh gọi CÙNG MỘT HÀM nên không thể lệch nhau được nữa.
   Toạ độ đã ĐO (không ước lượng), kể cả sau khi máy quay đẩy/lia: biểu tượng
   tâm x = 146 · nhãn kết thúc ở x = 326 · thanh x ∈ [352,1150]. Với biên độ
   máy quay z ≤ 1,05 và x = ±12 thì mép trái biểu tượng ra tới x = 74 và mép
   phải thanh tới x = 1188 — vẫn trong hộp an toàn x ∈ [48,1232], y ∈ [48,672]. */
const B3 = { X0: 352, W: 798, YS: [204, 356, 508],
             MAU: [BIEN, "#3F7FA0", "#B9A98C"],
             TEN: ["thuỷ triều", "lịch âm", "nhật thực"],
             MUC: [.30, .26, .22] };
function baThanh(V, pre) {
  const g = el("g", {}, V);
  const nen = [], thanh = [], nhan = [], icon = [];
  B3.YS.forEach((y, i) => {
    nen.push(el("rect", { x: B3.X0, y: y - 23, width: B3.W, height: 46, rx: 23,
      fill: "#D6E3EC", stroke: "#8CAABF", "stroke-width": 1.6, opacity: 0 }, g));
    thanh.push(el("rect", { x: B3.X0, y: y - 23, width: 0, height: 46, rx: 23,
      fill: B3.MAU[i], opacity: .97 }, g));
    nhan.push(nhanSV(g, 326, y + 9, B3.TEN[i], "#17445C", 26, "end", 700));
  });
  /* 1 · sóng = thuỷ triều */
  { const k = el("g", { opacity: 0, transform: "translate(146 " + B3.YS[0] + ")" }, g);
    el("path", { d: "M-34,-11 q17,-17 34,0 q17,17 34,0 M-34,13 q17,-17 34,0 q17,17 34,0",
      fill: "none", stroke: BIEN, "stroke-width": 7, "stroke-linecap": "round" }, k); icon.push(k); }
  /* 2 · hai pha trăng = lịch âm */
  { const k = el("g", { opacity: 0, transform: "translate(146 " + B3.YS[1] + ")" }, g);
    pha(k, -24, 0, 21, .5, "#24303C", "#EDF2F6");
    pha(k, 24, 0, 21, .12, "#24303C", "#EDF2F6"); icon.push(k); }
  /* 3 · ĐĨA NHẬT THỰC, không phải vòng tròn gạch chéo */
  { const k = el("g", { opacity: 0, transform: "translate(146 " + B3.YS[2] + ")" }, g);
    glyphNhatThuc(k, 0, 0, 27, pre + "-e3", V); icon.push(k); }
  return { g: g, nen: nen, thanh: thanh, nhan: nhan, icon: icon };
}

/* vẽ một bộ path Lucide vào một nhóm đã được translate+scale sẵn */
function lucide(p, paths, x, y, k, mau, net) {
  const g = el("g", { transform: "translate(" + x + " " + y + ") scale(" + k + ") translate(-12 -12)" }, p);
  paths.forEach(d => el("path", { d: d, fill: "none", stroke: mau, "stroke-width": net || 2,
    "stroke-linecap": "round", "stroke-linejoin": "round" }, g));
  return g;
}

/* CHẤT LIỆU cho các cảnh sơ đồ nền sáng: những vòng tròn rất nhạt trôi chậm.
   Mục đích là để không khung nào là "hình khối trên nền trắng trơn" (§15.2),
   và để nền luôn có chuyển động dù đồ hoạ chính đã dựng xong. */
function chatLieu(V, pre, mau, n) {
  const g = el("g", {}, V);
  gradR(V, pre + "-cl", 640, 300, 760, [[0, mau || "#9FB8C8", .16], [.6, mau || "#9FB8C8", .07], [1, mau || "#9FB8C8", 0]]);
  el("rect", { x: -400, y: -300, width: 2100, height: 1400, fill: "url(#" + pre + "-cl)" }, g);
  const o = [];
  for (let i = 0; i < (n || 9); i++)
    o.push(el("circle", { cx: 0, cy: 0, r: (70 + rn(i, 401) * 190).toFixed(1), fill: "none",
      stroke: mau || "#9FB8C8", "stroke-width": (1.2 + rn(i, 402) * 2.2).toFixed(1),
      opacity: (.05 + rn(i, 403) * .09).toFixed(3) }, g));
  return t => o.forEach((e, i) => {
    const a = t * (.055 + rn(i, 404) * .07) + rn(i, 405) * 6.3;
    set(e, { cx: (-120 + rn(i, 406) * 1520 + 70 * Math.cos(a)).toFixed(1),
             cy: (-60 + rn(i, 407) * 840 + 54 * Math.sin(a * 1.3)).toFixed(1) });
  });
}

/* ═══════════════════════════════════════════════════════════════════════════
   ĐOẠN 36 — HỆ QUẢ LEO LÊN TỚI CHỖ CON NGƯỜI
   ═══════════════════════════════════════════════════════════════════════════ */

/* k3c01 · câu 00 · 4,7s — VIDEO THẬT: bến sông miền Tây, người xuống ghe.
   Bốn mắt xích mọc dần từ mặt nước lên, nối "ngoài biển" với "chỗ con người". */
DANGKY({ id: "k3c01", steps: 0, say: [CAU[0]],
  /* SỬA 28/11 · NÊN SỬA. Bản soát đòi bỏ lưng người khách quần sọc chiếm một
     phần ba bên phải khung suốt nửa đầu cảnh, và đề nghị đổi `pos` sang 32%.
     ĐO RỒI MỚI SỬA: clip rộng 1280 px nằm trong hộp `.lop` nới -14% (1462 px),
     nên `pos` chỉ dịch được tối đa ~182 px — một mình nó không bỏ được nhân
     vật. Cái cắt thật nằm ở MÁY QUAY. Nên: `pos` 30% CỘNG đẩy sâu vào
     (z 1.34 → 1.16) và giữ khung ở nửa trái (x từ -10 tới 18, không còn -46). */
  html: VI("k3c01-v", "k3-bensong.mp4", 0.3, { tu: 0.4, dai: 7.0, toc: .72, pos: "30% 52%", loc: "contrast(1.06) saturate(1.04) brightness(.94)" }) +
        SV(0.88, "ve") +
        '<div class="hud">' + nguon("k3c01-ng", "Video: Le Monde en Vidéo — chợ nổi Cửu Long · CC BY 3.0") + '</div>',
  anim: root => {
    const V = sv(root, "ve");
    chan(V, "k3c01");
    /* ── SỬA 28/11 · NÊN SỬA ───────────────────────────────────────────────
       Bản cũ: mấy vòng ê-líp RỖNG nở dần trên clip chợ nổi — chụp khung ra thì
       đọc như vết loá ống kính hoặc bong bóng lỗi, không ai hiểu là "hệ quả leo
       lên tới chỗ con người". Vòng tròn không có HƯỚNG nên không nói được chữ
       "leo lên". Nay là MỘT CHUỖI MŨI TÊN CONG nối tiếp nhau, đi từ mặt nước
       dưới trái lên tới người trên ghe phía trên phải — một chuyển động có
       hướng. Mọi toạ độ nằm trong hộp an toàn x ∈ [48,1232], y ∈ [48,672]. */
    const BUOC = [[206, 592], [398, 516], [588, 432], [778, 342], [962, 252]];
    const mat = BUOC.slice(0, 4).map((o, i) => {
      const g = el("g", { opacity: 0 }, V);
      const n = BUOC[i + 1];
      const mx = (o[0] + n[0]) / 2, my = (o[1] + n[1]) / 2 - 54;   /* vồng lên */
      const d = "M" + o[0] + "," + o[1] + " Q" + mx.toFixed(1) + "," + my.toFixed(1) +
                " " + n[0] + "," + n[1];
      const mau = i === 0 ? SANHO : (i === 3 ? NHAT : "#EAF3F8");
      el("path", { d: d, fill: "none", stroke: "#05121C", "stroke-width": 19,
        "stroke-linecap": "round", opacity: .5 }, g);
      const net = el("path", { d: d, fill: "none", stroke: mau, "stroke-width": 9,
        "stroke-linecap": "round" }, g);
      /* đầu mũi tên quay đúng theo hướng đi của khúc cuối */
      const ang = Math.atan2(n[1] - my, n[0] - mx);
      const dau = el("polygon", { fill: mau, points: [[n[0], n[1]],
        [n[0] - 27 * Math.cos(ang - .42), n[1] - 27 * Math.sin(ang - .42)],
        [n[0] - 27 * Math.cos(ang + .42), n[1] - 27 * Math.sin(ang + .42)]]
        .map(q => q[0].toFixed(1) + "," + q[1].toFixed(1)).join(" ") }, g);
      g.__net = net; g.__bong = g.firstChild; g.__dau = dau;
      return g;
    });
    return c => {
      KB(root, c, c.u, [-10, 18, 14, -10, 1.34, 1.16]);
      mat.forEach((g, i) => {
        const a0 = .05 + i * .15;
        const v = ez(seg(c.u, a0, a0 + .08));
        op(g, v.toFixed(3));
        const w = ezo(seg(c.u, a0, a0 + .17));
        veDan(g.__net, w); veDan(g.__bong, w);
        op(g.__dau, (ez(seg(c.u, a0 + .12, a0 + .17)) * .96).toFixed(3));
        set(g, { transform: "translate(0," + (4 * Math.sin(c.t * 1.3 + i)).toFixed(2) + ")" });
      });
      khn("k3c01-ng", c.t, .4, 3.9);
    };
  }});

/* ═══════════════════════════════════════════════════════════════════════════
   ĐOẠN 37 — TỜ LỊCH VIỆT NAM
   ═══════════════════════════════════════════════════════════════════════════ */

/* k3c02 · câu 01 · 3,6s — tờ lịch: 35 pha trăng bị nhấc ra khỏi các ô.
   SƠ ĐỒ (ngoại lệ §15.1.3) nhưng vẫn có: nền chợ hoa Tết thật làm chất liệu,
   nền chuyển sắc, và lớp đồ hoạ chuyển động. */
DANGKY({ id: "k3c02", steps: 0, say: [CAU[1]],
  /* SỬA 28/11 · NÊN SỬA: blur 18 → 8 px để ảnh chợ hoa Tết phía sau còn đọc được. */
  html: NEN("am") + MO("k3c02-mo", "k3-chohoa.jpg", 0.12, { b: 8, bh: 1.3, s: 1.02 }) + SV(0.82, "ve"),
  anim: root => {
    const V = sv(root, "ve");
    /* ── SỬA 28/11 · NÊN SỬA ───────────────────────────────────────────────
       Bản cũ: tấm lịch TRẮNG TRƠN #FFFDF8 chiếm 60 % khung, phẳng, và k3c04
       chín giây sau lại một tấm trắng nữa. Nay: giấy ngà #FBF6E6, có bóng đổ
       thật, có vân giấy, và thu về 46 % khung (hệ số 0,91 trên 648 px → 590 px,
       tức 46,1 % của 1280 px — đo chứ không ước lượng). */
    const to = el("g", { transform: "translate(640 352) scale(.91)" }, V);
    el("rect", { x: -318, y: -204, width: 648, height: 428, rx: 12, fill: "#07121C", opacity: .22 }, to);
    el("rect", { x: -324, y: -212, width: 648, height: 428, rx: 12, fill: "#07121C", opacity: .34 }, to);
    el("rect", { x: -330, y: -220, width: 648, height: 428, rx: 12, fill: "#FBF6E6",
      stroke: "#B6BDB3", "stroke-width": 3 }, to);
    /* vân giấy: những nét ngang rất nhạt, tất định */
    for (let i = 0; i < 26; i++)
      el("line", { x1: -330, y1: (-220 + rn(i, 611) * 428).toFixed(1),
        x2: 318, y2: (-220 + rn(i, 611) * 428 + (rn(i, 612) - .5) * 3).toFixed(1),
        stroke: "#C9BFA4", "stroke-width": (.6 + rn(i, 613) * .9).toFixed(2),
        opacity: (.10 + rn(i, 614) * .14).toFixed(3) }, to);
    el("rect", { x: -330, y: -220, width: 648, height: 62, rx: 12, fill: SANHO }, to);
    el("rect", { x: -330, y: -168, width: 648, height: 9, fill: "#A8402E", opacity: .55 }, to);
    const onhip = [];
    for (let r = 0; r < 5; r++) for (let i = 0; i < 7; i++) {
      const x = -330 + 14 + i * 90, y = -220 + 76 + r * 67;
      el("rect", { x: x, y: y, width: 78, height: 56, rx: 5, fill: r % 2 ? "#F3EEDC" : "#E9E2CC",
        stroke: "#D2C9AE", "stroke-width": 1.6 }, to);
      onhip.push(pha(to, x + 58, y + 40, 11, (r * 7 + i) / 35, "#26303C", "#C6CCC4"));
    }
    /* bàn tay vô hình nhấc trăng ra rồi chỗ trống đỏ lên — khung cuối KHÔNG trắng trơn */
    const trong = [];
    for (let r = 0; r < 5; r++) for (let i = 0; i < 7; i++)
      trong.push(el("rect", { x: -330 + 14 + i * 90 + 44, y: -220 + 76 + r * 67 + 26,
        width: 28, height: 28, rx: 14, fill: "none", stroke: DO, "stroke-width": 2.4,
        "stroke-dasharray": "5 6", opacity: 0 }, to));
    return c => {
      KB(root, c, c.u, [0, 0, -20, 16, 1.2, 1.0]);
      onhip.forEach((g, i) => {
        const a = ezo(seg(c.u, .18 + i * .006, .58 + i * .006));
        set(g, { transform: "translate(" + (14 * a * Math.sin(i * 1.7)).toFixed(1) + "," + (-440 * a).toFixed(1) + ")" });
        op(g, (1 - a).toFixed(3));
      });
      trong.forEach((e, i) => op(e, (.8 * ez(seg(c.u, .34 + i * .006, .50 + i * .006)) *
        (.72 + .28 * Math.sin(c.t * 2.2 + i * .4))).toFixed(3)));
    };
  }});

/* k3c03 · câu 02 · 7,9s — CẮT CỨNG ở u=.50
   A: đèn ông sao Trung thu (ảnh thật) + trăng rằm mọc lên
   B: phố đèn lồng Hội An (ảnh thật) + trăng tắt dần, chữ "TRUNG THU"  (CHỮ #1) */
DANGKY({ id: "k3c03", steps: 0, say: [CAU[2]],
  html: IMG("k3c03-a", "k3-denongsao.jpg", 0.3, { loc: "contrast(1.08) saturate(1.1) brightness(.9)" }) +
        IMG("k3c03-b", "k3-denlong.jpg", 0.3, { loc: "contrast(1.06) saturate(1.08) brightness(.86)" }) +
        SV(0.9, "ve") +
        '<div class="hud">' + the("k3c03-te", "TRUNG THU", "#FFF0D2", 540) +
        nguon("k3c03-n1", "Ảnh: Viethavvh — đèn ông sao, Việt Nam · Phạm vi công cộng") +
        nguon("k3c03-n2", "Ảnh: dronepicr — đèn lồng Hội An, Việt Nam · CC BY 2.0") + '</div>',
  anim: root => {
    const V = sv(root, "ve");
    gradB(V, "k3c03-q", [[0, "#FFF6DC", .8], [.4, "#F7D894", .28], [1, "#F7D894", 0]]);
    const quang = el("circle", { cx: 1012, cy: 166, r: 250, fill: "url(#k3c03-q)", opacity: 0 }, V);
    const trang = diaMT(V, "k3c03", 1012, 166, 88); op(trang, 0);
    const mo = el("rect", { x: -400, y: -300, width: 2100, height: 1400, fill: "#0A1220", opacity: 0 }, V);
    chan(V, "k3c03", .66);
    return c => {
      const A = c.u < .50;
      hien("k3c03-a", A); hien("k3c03-b", !A);
      if (A) KB(root, c, seg(c.u, 0, .50), [26, -28, 12, -16, 1.05, 1.19]);
      else   KB(root, c, seg(c.u, .50, 1), [-30, 24, -14, 12, 1.20, 1.04]);
      const ut = seg(c.u, .06, .34);
      op(trang, (A ? ez(ut) : 1 - ez(seg(c.u, .52, .74))).toFixed(3));
      op(quang, ((A ? ez(ut) : 1 - ez(seg(c.u, .52, .74))) * (.8 + .16 * Math.sin(c.t * 1.5))).toFixed(3));
      set(trang, { transform: "translate(0," + (90 * (1 - ez(ut))).toFixed(1) + ")" });
      op(mo, (.4 * ez(seg(c.u, .56, .66)) * (1 - ez(seg(c.u, .92, .99)))).toFixed(3));
      kh("k3c03-te", c.u * 10, 5.8, 9.4, .5);
      khn("k3c03-n1", c.u * 10, .4, 3.4, .4);
      khn("k3c03-n2", c.u * 10, 5.2, 7.6, .4);
    };
  }});

/* k3c04 · câu 03 · 6,1s — CẮT CỨNG ở u=.52
   A: chợ hoa Tết (ảnh thật) + một tuần trăng chạy ngang rồi tắt dần
   B: tờ lịch rỗng, các ô mất hết số, chữ "MÙNG MỘT"  (CHỮ #2) */
DANGKY({ id: "k3c04", steps: 0, say: [CAU[3]],
  html: IMG("k3c04-a", "k3-chohoa.jpg", 0.3, { loc: "contrast(1.05) saturate(1.1) brightness(.98)" }) +
        IMG("k3c04-b", "k3-chohoa.jpg", 0.3, { loc: "contrast(1.08) saturate(1.14) brightness(.94)" }) +
        SV(0.88, "ve") +
        '<div class="hud">' + the("k3c04-te", "MÙNG MỘT", "#FFF0D2", 556, 52) +
        nguon("k3c04-ng", "Ảnh: trungydang — chợ hoa Tết, Tân Châu, An Giang · CC BY 3.0") + '</div>',
  anim: root => {
    const V = sv(root, "ve");
    /* lớp A: dải tối + 15 pha trăng */
    const gA = el("g", {}, V);
    /* dải pha trăng hạ xuống y = 96..252: bản cũ ở y = 44 bị MÉP TRÊN cắt mất
       nửa dãy khi máy quay đẩy vào (đo được ở mốc c.u = .50). */
    el("rect", { x: -400, y: 96, width: 2100, height: 156, fill: "#0C1522", opacity: .7 }, gA);
    const pA = [];
    for (let i = 0; i < 15; i++) pA.push(pha(gA, 92 + i * 78, 174, 27, i / 15, "#F5F2E8", "#1A2335"));
    /* ── SỬA 28/11 · NÊN SỬA ───────────────────────────────────────────────
       Bản cũ kết bằng MỘT TẤM LỊCH TRẮNG TRƠN nữa, chỉ 9 giây sau tấm lịch
       trắng của k3c02 — trắng bệch và lặp lại ngay. Và một khung rỗng nét đứt
       đọc ra là "đang tải", không phải "không còn chỗ nào để đặt vào" (luật L4).
       Nay ĐỔI HƯỚNG hẳn: giữ ảnh chợ hoa Tết RÕ NÉT và chỉ GẠCH ĐỎ CHÉO qua
       ảnh — một dấu hiệu chủ động, không phải một cái khung trống. */
    const gB = el("g", { opacity: 0 }, V);
    /* nền ảnh là chợ hoa Tết vàng chói; không hạ sáng thì chữ "MÙNG MỘT" trắng
       không đọc nổi — đã chụp khung và thấy. */
    el("rect", { x: -400, y: -300, width: 2100, height: 1400, fill: "#07111C", opacity: .46 }, gB);
    /* và một mảng tối ở chân khung cho riêng chữ "MÙNG MỘT" — chữ ngà trên
       thảm hoa vàng không đọc nổi nếu chỉ phủ đều. */
    gradL(gB, "k3c04-ch", 0, 460, 0, 700, [[0, "#04080F", 0], [1, "#04080F", .82]]);
    el("rect", { x: -400, y: 440, width: 2100, height: 420, fill: "url(#k3c04-ch)" }, gB);
    const to = el("g", {}, gB);
    const oB = [];
    const mkVet = (x1, y1, x2, y2, w) => {
      const g = el("g", {}, to);
      const d = "M" + x1 + "," + y1 + " L" + x2 + "," + y2;
      el("path", { d: d, fill: "none", stroke: "#06101C", "stroke-width": w + 9,
        "stroke-linecap": "round", opacity: .5 }, g);
      const n = el("path", { d: d, fill: "none", stroke: DO, "stroke-width": w,
        "stroke-linecap": "round" }, g);
      g.__net = n; g.__bong = g.firstChild;
      return g;
    };
    const vet = mkVet(150, 132, 1130, 586, 16);
    const vet2 = mkVet(1130, 132, 150, 586, 16);
    return c => {
      const A = c.u < .52;
      hien("k3c04-a", A); hien("k3c04-b", !A);
      op(gA, A ? 1 : 0); op(gB, A ? 0 : 1);
      if (A) KB(root, c, seg(c.u, 0, .52), [-18, 18, 8, -8, 1.02, 1.10]);
      else   KB(root, c, seg(c.u, .52, 1), [18, -18, -12, 12, 1.16, 1.02]);
      pA.forEach((e, i) => {
        const vao = ez(seg(c.u, .03 + i * .008, .11 + i * .008));
        const ra  = ez(seg(c.u, .26 + (14 - i) * .014, .36 + (14 - i) * .014));
        op(e, (vao * (1 - ra)).toFixed(3));
      });
      [vet, vet2].forEach((g, i) => {
        const a0 = .58 + i * .13;
        op(g, ez(seg(c.u, a0, a0 + .05)).toFixed(3));
        const w = ezo(seg(c.u, a0, a0 + .22));
        veDan(g.__net, w); veDan(g.__bong, w);
      });
      kh("k3c04-te", c.u * 10, 7.6, 9.6, .4);
      khn("k3c04-ng", c.u * 10, .4, 4.2, .4);
    };
  }});

/* ═══════════════════════════════════════════════════════════════════════════
   ĐOẠN 38 — CON NƯỚC MIỀN TÂY
   ═══════════════════════════════════════════════════════════════════════════ */

/* k3c05 · câu 04 · 4,6s — VIDEO THẬT: chợ nổi Cửu Long, ghe xuồng trên con nước. */
DANGKY({ id: "k3c05", steps: 0, say: [CAU[4]],
  html: VI("k3c05-v", "k3-chonoi.mp4", 0.3, { tu: 0.3, dai: 8.4, toc: .7, loc: "contrast(1.07) saturate(1.1)" }) +
        SV(0.9, "ve") +
        '<div class="hud">' + nguon("k3c05-ng", "Video: Le Monde en Vidéo — chợ nổi Cửu Long · CC BY 3.0") + '</div>',
  anim: root => {
    const V = sv(root, "ve"); chan(V, "k3c05", .62); viND(V, "k3c05", .4);
    return c => {
      KB(root, c, c.u, [34, -30, -14, 14, 1.04, 1.17]);
      khn("k3c05-ng", c.t, .35, 3.6);
    };
  }});

/* k3c06 · câu 05 · 6,7s — CẮT CỨNG ở u=.48
   A: cái đáy cá trên sông Tiền (ảnh thật) + hai pha trăng mốc
   B: VIDEO THẬT ghe chở hàng, hai nhãn con nước bám theo */
DANGKY({ id: "k3c06", steps: 0, say: [CAU[5]],
  html: IMG("k3c06-a", "k3-don.jpg", 0.26, { loc: "contrast(1.1) saturate(1.0) brightness(.95)" }) +
        VI("k3c06-b", "k3-ghe-song.mp4", 0.3, { tu: 0.2, dai: 7.6, toc: .7, loc: "contrast(1.06) saturate(1.1)" }) +
        SV(0.9, "ve") +
        '<div class="hud">' + nguon("k3c06-n1", "Ảnh: BacLuong — đáy cá trên sông Tiền · Phạm vi công cộng") +
        nguon("k3c06-n2", "Video: Le Monde en Vidéo — chợ nổi Cửu Long · CC BY 3.0") + '</div>',
  anim: root => {
    const V = sv(root, "ve");
    chan(V, "k3c06", .7);
    /* hai mốc: con nước rằm (trăng tròn) và con nước đầu tháng (sóc) */
    const moc = [0, 1].map(i => {
      const g = el("g", { opacity: 0 }, V);
      const x = i ? 940 : 330;
      el("circle", { cx: x, cy: 186, r: 60, fill: "#07121C", opacity: .55 }, g);
      pha(g, x, 186, 44, i ? 0.015 : 0.5, "#FFF6E2", "#1A2434");
      el("circle", { cx: x, cy: 186, r: 52, fill: "none", stroke: i ? LAM : VANG,
        "stroke-width": 3, "stroke-dasharray": "7 9", opacity: .85 }, g);
      el("line", { x1: x, y1: 244, x2: x, y2: 430, stroke: i ? LAM : VANG,
        "stroke-width": 2.6, "stroke-dasharray": "9 8", opacity: .7 }, g);
      return g;
    });
    return c => {
      const A = c.u < .48;
      hien("k3c06-a", A); hien("k3c06-b", !A);
      if (A) KB(root, c, seg(c.u, 0, .48), [-30, 26, 14, -12, 1.18, 1.03]);
      else   KB(root, c, seg(c.u, .48, 1), [28, -26, -12, 12, 1.03, 1.16]);
      moc.forEach((g, i) => {
        op(g, ez(seg(c.u, .14 + i * .22, .30 + i * .22)).toFixed(3));
        set(g, { transform: "translate(0," + (4.5 * Math.sin(c.t * 1.1 + i * 1.4)).toFixed(2) + ")" });
      });
      khn("k3c06-n1", c.u * 10, .4, 3.6, .4);
      khn("k3c06-n2", c.u * 10, 5.0, 7.4, .4);
    };
  }});

/* k3c07 · câu 06 · 7,8s — CẮT CỨNG ở u=.52
   A: đường con nước hai đỉnh mỗi ngày, biên độ phình ở rằm và đầu tháng (trên ảnh sông Bến Tre)
   B: sợi dây nối mặt nước lên tới đĩa trăng, số 384.400 km đếm xong trước khi hết cảnh */
DANGKY({ id: "k3c07", steps: 0, say: [CAU[6]],
  html: IMG("k3c07-a", "k3-bentre.jpg", 0.24, { loc: "contrast(1.08) saturate(1.0) brightness(.84)" }) +
        NEN("dem", "k3c07-b") + SV(0.88, "ve") +
        '<div class="hud">' + nguon("k3c07-ng", "Ảnh: Balon Greyjoy — sông ở Bến Tre · CC0") +
        SOTO("k3c07-so", "k3c07-s", "km", "right:78px;top:150px;text-align:right", 104, "#FFF3DC") + '</div>',
  anim: root => {
    const V = sv(root, "ve");
    /* lớp A */
    const gA = el("g", {}, V);
    el("rect", { x: -400, y: -300, width: 2100, height: 1400, fill: "#061220", opacity: .5 }, gA);
    const X0 = 92, X1 = 1188, Y = 470, AM = 96;
    el("line", { x1: X0, y1: Y, x2: X1, y2: Y, stroke: "#CFE3EF", "stroke-width": 1.6, opacity: .5 }, gA);
    const duongBong = el("path", { d: "", fill: "none", stroke: "#06121E", "stroke-width": 11,
      "stroke-linecap": "round", opacity: .5 }, gA);
    const duong = el("path", { d: "", fill: "none", stroke: LAM, "stroke-width": 5.4,
      "stroke-linecap": "round", opacity: 0 }, gA);
    const mocA = [0, 1].map(i => {
      const g = el("g", { opacity: 0 }, gA);
      const x = i ? X0 + (X1 - X0) * .78 : X0 + (X1 - X0) * .26;
      el("line", { x1: x, y1: Y - 168, x2: x, y2: Y + 150, stroke: VANG,
        "stroke-width": 2.6, "stroke-dasharray": "9 8" }, g);
      pha(g, x, Y - 204, 26, i ? 0.015 : 0.5, "#FFF6E2", "#1C2636");
      return g;
    });
    /* lớp B */
    const gB = el("g", { opacity: 0 }, V);
    sao(gB, 110);
    const song7 = song(gB, 596, 11, 190, "#143A52");
    const song7b = song(gB, 634, 15, 260, "#0A2231");
    const day = el("path", { d: "M560,590 C800,430 960,300 1040,196", fill: "none",
      stroke: VANG, "stroke-width": 3, "stroke-dasharray": "12 10", opacity: 0 }, gB);
    const trangB = diaMT(gB, "k3c07", 1058, 176, 76); op(trangB, 0);
    gradB(gB, "k3c07-q", [[0, "#FFF0CC", .5], [.4, "#F7D894", .16], [1, "#F7D894", 0]]);
    const quangB = el("circle", { cx: 1058, cy: 176, r: 220, fill: "url(#k3c07-q)", opacity: 0 }, gB);
    return c => {
      const A = c.u < .52;
      hien("k3c07-a", A); hien("k3c07-b", !A);
      op(gA, A ? 1 : 0); op(gB, A ? 0 : 1);
      if (A) KB(root, c, seg(c.u, 0, .52), [22, -22, 12, -12, 1.03, 1.14]);
      else   KB(root, c, seg(c.u, .52, 1), [-26, 22, 14, -14, 1.14, 1.0]);
      /* đường triều — dao động theo c.t nên không bao giờ đứng yên */
      let d = "";
      for (let i = 0; i <= 150; i++) {
        const s = i / 150, x = X0 + (X1 - X0) * s;
        const bd = .42 + .58 * Math.pow(Math.abs(Math.cos((s - .26) * Math.PI * 1.92)), 1.4);
        const y = Y - AM * bd * Math.sin((s * 13.4 - c.t * .42) * Math.PI);
        d += (i ? "L" : "M") + x.toFixed(1) + "," + y.toFixed(1);
      }
      set(duong, { d: d }); set(duongBong, { d: d });
      const uv = seg(c.u, .04, .40);
      op(duong, ez(seg(c.u, .04, .12))); veDan(duong, ezo(uv));
      op(duongBong, (ez(seg(c.u, .04, .12)) * .5).toFixed(3)); veDan(duongBong, ezo(uv));
      mocA.forEach((g, i) => op(g, ez(seg(c.u, .26 + i * .1, .38 + i * .1)).toFixed(3)));
      set(song7,  { transform: "translate(" + (-((c.t * 15) % 190)).toFixed(1) + ",0)" });
      set(song7b, { transform: "translate(" + (((c.t * 10) % 260)).toFixed(1) + ",0)" });
      const ud = seg(c.u, .53, .70);
      op(day, ez(seg(c.u, .53, .57)) * .92); veDan(day, ezo(ud));
      set(day, { "stroke-dashoffset": (-c.t * 26).toFixed(1) });
      op(trangB, ez(seg(c.u, .53, .62)));
      op(quangB, (ez(seg(c.u, .53, .66)) * (.82 + .16 * Math.sin(c.t * 1.4))).toFixed(3));
      /* số đếm xong trước khi hết cảnh */
      kh("k3c07-so", A ? -1 : (c.u - .52) * 10, .5, 1e9, .4);
      txt("k3c07-s", soVN(384400 * ezo(seg(c.u, .56, .86))));
      khn("k3c07-ng", c.u * 10, .4, 3.6, .4);
    };
  }});

/* k3c08 · câu 07 · 6,4s — CẮT CỨNG ở u=.50
   A: đường con nước teo dần trên nền giấy (hệ thống vẫn chạy, chỉ là không còn mốc)
   B: ảnh sông thật, đĩa trăng nhạt dần thành một vòng đứt rỗng */
DANGKY({ id: "k3c08", steps: 0, say: [CAU[7]],
  /* SỬA 28/11 · NÊN SỬA: nền `lanh` quá trắng, sơ đồ sóng xám-lam gần như
     không có độ tương phản. Nền đổi sang `lanhT` (đỉnh #1B4E68), đường sóng
     đổi sang #6CF2B4 dày 4 px. Ý giữ nguyên — biên độ co lại, trăng mờ đi. */
  html: NEN("lanhT", "k3c08-a") + IMG("k3c08-b", "k3-bentre.jpg", 0.28, { loc: "contrast(1.05) saturate(.98) brightness(1.02)" }) +
        SV(0.86, "ve") +
        '<div class="hud">' + nguon("k3c08-ng", "Ảnh: Balon Greyjoy — sông ở Bến Tre · CC0") + '</div>',
  anim: root => {
    const V = sv(root, "ve");
    const gA = el("g", {}, V);
    const X0 = 96, X1 = 1184, Y = 372, AM = 112;
    el("line", { x1: X0, y1: Y, x2: X1, y2: Y, stroke: "#9FC8DC", "stroke-width": 1.8,
      "stroke-dasharray": "10 9", opacity: .7 }, gA);
    const khoi = el("path", { d: "", fill: "#6CF2B4", opacity: .16 }, gA);
    const duong = el("path", { d: "", fill: "none", stroke: "#6CF2B4", "stroke-width": 4,
      "stroke-linecap": "round" }, gA);
    /* mốc rằm/đầu tháng mờ đi cùng lúc với biên độ */
    const mocA = [0, 1].map(i => {
      const g = el("g", {}, gA);
      const x = i ? X0 + (X1 - X0) * .78 : X0 + (X1 - X0) * .26;
      el("line", { x1: x, y1: Y - 190, x2: x, y2: Y + 170, stroke: "#CFE6F2",
        "stroke-width": 2.4, "stroke-dasharray": "9 8", opacity: .8 }, g);
      pha(g, x, Y - 220, 24, i ? 0.015 : 0.5, "#F2F7EC", "#15384C");
      return g;
    });
    const gB = el("g", { opacity: 0 }, V);
    chan(V, "k3c08", .55);
    const trangB = diaMT(gB, "k3c08", 968, 206, 84);
    const vong = el("circle", { cx: 968, cy: 206, r: 84, fill: "none", stroke: "#F2F6F8",
      "stroke-width": 3, "stroke-dasharray": "9 10", opacity: 0 }, gB);
    return c => {
      const A = c.u < .50;
      hien("k3c08-a", A); hien("k3c08-b", !A);
      op(gA, A ? 1 : 0); op(gB, A ? 0 : 1);
      if (A) KB(root, c, seg(c.u, 0, .50), [-20, 20, -12, 12, 1.0, 1.09]);
      else   KB(root, c, seg(c.u, .50, 1), [24, -22, 12, -12, 1.14, 1.0]);
      const tep = 1 - .86 * ezo(seg(c.u, .06, .44));
      let d = "";
      for (let i = 0; i <= 150; i++) {
        const s = i / 150, x = X0 + (X1 - X0) * s;
        const y = Y - AM * tep * Math.sin((s * 13.4 - c.t * .5) * Math.PI);
        d += (i ? "L" : "M") + x.toFixed(1) + "," + y.toFixed(1);
      }
      set(duong, { d: d });
      set(khoi, { d: d + "L" + X1 + ",660 L" + X0 + ",660 Z" });
      mocA.forEach(g => op(g, (1 - .85 * ez(seg(c.u, .22, .46))).toFixed(3)));
      const f = ez(seg(c.u, .58, .86));
      op(trangB, (1 - f).toFixed(3));
      set(trangB, { transform: "translate(0," + (-30 * f).toFixed(1) + ")" });
      op(vong, (ez(seg(c.u, .66, .80)) * .8).toFixed(3));
      khn("k3c08-ng", A ? -1 : (c.u - .50) * 10, .5, 3.4, .4);
    };
  }});

/* ═══════════════════════════════════════════════════════════════════════════
   ĐOẠN 39 — NHẬT THỰC TOÀN PHẦN
   ═══════════════════════════════════════════════════════════════════════════ */

/* k3c09 · câu 08 · 5,3s — VIDEO THẬT: nhật thực toàn phần, NASA, phạm vi công cộng. */
DANGKY({ id: "k3c09", steps: 0, say: [CAU[8]],
  html: NEN("dem") +
        VI("k3c09-v", "k3-nhatthuc-toan.mp4", 0.34, { tu: 0.1, dai: 3.6, toc: .65, loc: "contrast(1.1) brightness(1.12)" }) +
        SV(0.9, "ve") +
        '<div class="hud">' + nguon("k3c09-ng", "Video: NASA Armstrong FRC — nhật thực 21/8/2017, bầu trời nước Mỹ · Phạm vi công cộng") + '</div>',
  anim: root => {
    const V = sv(root, "ve");
    const bui = hat(V, 42, "#CFE2F0");
    chan(V, "k3c09", .6);
    return c => {
      KB(root, c, c.u, [-22, 18, 14, -12, 1.3, 1.04]);
      bui.forEach((b, i) => {
        const ph = (c.t * (.04 + rn(i, 201) * .05) + rn(i, 202)) % 1;
        set(b, { cx: (-120 + rn(i, 203) * 1540).toFixed(1), cy: (820 - ph * 980).toFixed(1) });
        op(b, (Math.sin(ph * Math.PI) * .22).toFixed(3));
      });
      khn("k3c09-ng", c.t, .6, 4.1);
    };
  }});

/* k3c10 · câu 09 · 5,8s — CẮT CỨNG ở u=.56
   A: hai đĩa cùng cỡ góc, có thước đo nửa độ (sơ đồ, nền đêm chuyển sắc + trường sao)
   B: VIDEO THẬT nhật thực, thước nửa độ áp lên đúng đĩa */
DANGKY({ id: "k3c10", steps: 0, say: [CAU[9]],
  html: NEN("dem", "k3c10-a") +
        VI("k3c10-b", "k3-nhatthuc-dia.mp4", 0.32, { tu: 0.1, dai: 4.7, toc: .6, loc: "contrast(1.08) brightness(1.08)" }) +
        SV(0.84, "ve") +
        '<div class="hud">' + nguon("k3c10-ng", "Video: NASA Armstrong FRC — nhật thực 21/8/2017, nước Mỹ · Phạm vi công cộng") + '</div>',
  anim: root => {
    const V = sv(root, "ve");
    const gA = el("g", {}, V);
    sao(gA, 110);
    /* ── SỬA 28/11 · NÊN SỬA ─────────────────────────────────────────────────
       Cả cảnh nói hai đĩa "to gần như bằng nhau, cùng chiếm khoảng nửa độ".
       Bản cũ sai ba chỗ, đều thấy khi chụp khung:
         1. hai thanh đo vẽ dần theo HAI mốc lệch nhau (.22–.40 và .30–.48), nên
            ở mọi khung giữa cảnh thanh của Mặt Trăng DÀI HƠN thanh của Mặt Trời.
            Hình nói ngược lời. Nay hai thanh dùng CHUNG một biến tiến độ `ut`.
         2. hai nhãn "0,5°" cũng lệch mốc (.28–.38 và .36–.46), nên gần như không
            khung nào có đủ cả hai nhãn. Nay cùng một mốc.
         3. đĩa Mặt Trăng là mảng trắng đặc viền sắc, đĩa Mặt Trời là gradient
            nhoè mép — bằng nhau về bán kính nhưng mắt đọc ra khác cỡ. Nay cả hai
            dùng CHUNG hằng số R10 và cả hai đều là đĩa ảnh/đĩa đặc có mép rõ.
       Đây là toàn bộ nội dung của cảnh, không được sai một pixel. ───────────── */
    const R10 = 106, XMT = 406, XMS = 880, YC = 322;
    const mt = diaMT(gA, "k3c10", XMT, YC, R10); op(mt, 0);
    gradB(gA, "k3c10-s", [[0, "#FFF6D4", 1], [.62, NHAT, .96], [1, "#EDA52E", .92]]);
    gradB(gA, "k3c10-q", [[0, NHAT, .46], [.4, NHAT, .16], [1, NHAT, 0]]);
    const q = el("circle", { cx: XMS, cy: YC, r: 250, fill: "url(#k3c10-q)", opacity: 0 }, gA);
    const msg = el("g", { opacity: 0 }, gA);
    el("circle", { cx: XMS, cy: YC, r: R10, fill: "url(#k3c10-s)" }, msg);
    /* vành mép rõ, để đĩa Mặt Trời không nhoè ra nhỏ hơn đĩa Mặt Trăng */
    el("circle", { cx: XMS, cy: YC, r: R10, fill: "none", stroke: "#FFE6B4",
      "stroke-width": 2.6, opacity: .8 }, msg);
    const ms = msg;
    /* HAI THANH CÙNG CHIỀU DÀI CHÍNH XÁC, CÙNG ĐỘ CAO: cùng R10, cùng y */
    const thuoc = (x, mau) => el("path", { d: "M" + (x - R10) + ",474 L" + (x - R10) + ",512 " +
      "M" + (x + R10) + ",474 L" + (x + R10) + ",512 M" + (x - R10) + ",493 L" + (x + R10) + ",493",
      fill: "none", stroke: mau, "stroke-width": 3, "stroke-linecap": "round", opacity: 0 }, gA);
    const d1 = thuoc(XMT, "#CFE0EC"), d2 = thuoc(XMS, "#FFE6B4");
    const nhan = (x, s, mau) => { const t = el("text", { x: x, y: 556, fill: mau, "font-size": 27,
      "font-weight": 700, "font-family": "system-ui", "text-anchor": "middle", opacity: 0 }, gA);
      t.textContent = s; return t; };
    const n1 = nhan(XMT, "0,5°", "#CFE0EC"), n2 = nhan(XMS, "0,5°", "#FFE6B4");
    /* lớp B: thước áp lên video */
    const gB = el("g", { opacity: 0 }, V);
    const vong = el("circle", { cx: 640, cy: 330, r: 120, fill: "none", stroke: "#FFE6B4",
      "stroke-width": 2.6, "stroke-dasharray": "10 9", opacity: 0 }, gB);
    const dB = el("path", { d: "M520,520 L520,558 M760,520 L760,558 M520,539 L760,539", fill: "none",
      stroke: "#FFE6B4", "stroke-width": 3, "stroke-linecap": "round", opacity: 0 }, gB);
    const nB = el("text", { x: 640, y: 602, fill: "#FFE6B4", "font-size": 30, "font-weight": 700,
      "font-family": "system-ui", "text-anchor": "middle", opacity: 0 }, gB);
    nB.textContent = "0,5°";
    chan(V, "k3c10", .55);
    return c => {
      const A = c.u < .56;
      hien("k3c10-a", A); hien("k3c10-b", !A);
      op(gA, A ? 1 : 0); op(gB, A ? 0 : 1);
      if (A) KB(root, c, seg(c.u, 0, .56), [0, 0, 12, -14, 1.0, 1.08]);
      else   KB(root, c, seg(c.u, .56, 1), [16, -14, -10, 10, 1.14, 1.0]);
      /* hai đĩa hiện CÙNG LÚC — bản cũ cho Mặt Trăng hiện trước Mặt Trời 0,08 */
      const udia = ez(seg(c.u, .02, .12));
      op(mt, udia); op(ms, udia);
      op(q, (ez(seg(c.u, .06, .22)) * (.8 + .16 * Math.sin(c.t * 1.6))).toFixed(3));
      /* MỘT biến tiến độ cho CẢ HAI thanh và CẢ HAI nhãn */
      const uth = ez(seg(c.u, .22, .32)) * .92, utv = ezo(seg(c.u, .22, .44));
      const unh = ez(seg(c.u, .30, .40));
      op(d1, uth); veDan(d1, utv);
      op(d2, uth); veDan(d2, utv);
      op(n1, unh); op(n2, unh);
      op(vong, (ez(seg(c.u, .60, .70)) * (.6 + .3 * Math.sin(c.t * 2.0))).toFixed(3));
      op(dB, ez(seg(c.u, .64, .74)) * .9); veDan(dB, ezo(seg(c.u, .64, .82)));
      op(nB, ez(seg(c.u, .70, .80)));
      khn("k3c10-ng", A ? -1 : (c.u - .56) * 10, .4, 3.0, .4);
    };
  }});

/* k3c11 · câu 10 · 7,1s — CẮT CỨNG ở u=.60
   A: hai tam giác đồng dạng, nhãn ×400 cho cỡ và cho khoảng cách (sơ đồ, nền giấy có sắc)
   B: VIDEO THẬT vành nhật hoa — "đĩa này úp vừa khít lên đĩa kia" */
DANGKY({ id: "k3c11", steps: 0, say: [CAU[10]],
  /* SỬA 28/11 · NÊN SỬA: nền kem gần trắng + nét xám rất nhạt, chữ "×400" xám
     trên kem — khó đọc. Nền sang `kem` (đậm hơn), nét sơ đồ #4C2E12, "×400"
     đổi sang #C14A2E cỡ 54 px đậm. Và THÊM dòng "Sơ đồ, không theo tỉ lệ"
     — sơ đồ nén tỉ lệ rất mạnh mà bản cũ bỏ dòng đó, trong khi khối 1 đã ghi
     nó ở k1c02; hai khối nay dùng chung một câu chữ. */
  html: NEN("kem", "k3c11-a") + SV(0.16, "nen", "k3c11-a2") +
        VI("k3c11-b", "k3-vanhlua.mp4", 0.32, { tu: 0.2, dai: 7.4, toc: .55, loc: "contrast(1.08) brightness(1.0)" }) +
        SV(0.78, "ve") +
        '<div class="hud">' + nguon("k3c11-ng", "Video: NASA Armstrong FRC — nhật thực 21/8/2017, nước Mỹ · Phạm vi công cộng") +
        '<div class="tx nho" id="k3c11-tl" style="left:66px;top:612px;color:#6B4A22">Sơ đồ, không theo tỉ lệ</div>' + '</div>',
  anim: root => {
    const N = sv(root, "nen"), V = sv(root, "ve");
    const nhip = chatLieu(N, "k3c11", "#8A6A32", 10);
    const gA = el("g", {}, V);
    const EX = 112, EY = 360, D1 = 330, R1 = 25, K = 2.64;
    const D2 = D1 * K, R2 = R1 * K, TG = R1 / D1;
    const X1 = EX + D1, X2 = EX + D2;
    /* con mắt = người quan sát trên Trái Đất */
    const mat = el("g", {}, gA);
    const NET11 = "#4C2E12";
    el("path", { d: "M" + (EX - 46) + "," + EY + " q46,-36 92,0 q-46,36 -92,0 Z", fill: "#FFF8E8",
      stroke: NET11, "stroke-width": 3.4, "stroke-linejoin": "round" }, mat);
    el("circle", { cx: EX, cy: EY, r: 15, fill: NET11 }, mat);
    const quat = el("path", { d: "M" + EX + "," + EY + " L" + (EX + 1180) + "," + (EY - 1180 * TG) +
      " L" + (EX + 1180) + "," + (EY + 1180 * TG) + " Z", fill: NHAT, opacity: 0 }, gA);
    const tia = [1, -1].map(() => el("line", { x1: EX, y1: EY, x2: EX, y2: EY, stroke: NET11,
      "stroke-width": 2.6, "stroke-dasharray": "11 8", opacity: 0 }, gA));
    const mtr = diaMT(gA, "k3c11", X1, EY, R1); op(mtr, 0);
    gradB(gA, "k3c11-s", [[0, "#FFF6D4", 1], [.6, NHAT, .98], [1, "#E8A62E", .95]]);
    const mst = el("circle", { cx: X2, cy: EY, r: R2, fill: "url(#k3c11-s)", opacity: 0 }, gA);
    const nh = (x, y, s) => { const t = el("text", { x: x, y: y, fill: "#C14A2E", "font-family": "system-ui",
      "font-size": 54, "font-weight": 800, "text-anchor": "middle", opacity: 0 }, gA);
      t.textContent = s; return t; };
    /* nhãn "×400" phải nằm trong hộp an toàn: X2 = 112 + 871 = 983, trừ cỡ chữ
       54 px thì mép còn cách xa 1232. Nhãn dưới kéo về giữa hai đĩa. */
    const nco = nh(X2, EY - R2 - 46, "×400"), nxa = nh((X1 + X2) / 2, EY + 224, "×400");
    const thuoc = el("path", { d: "M" + X1 + "," + (EY + 152) + " L" + X1 + "," + (EY + 182) +
      " M" + X2 + "," + (EY + 152) + " L" + X2 + "," + (EY + 182) +
      " M" + X1 + "," + (EY + 167) + " L" + X2 + "," + (EY + 167),
      fill: "none", stroke: NET11, "stroke-width": 2.8, "stroke-linecap": "round", opacity: 0 }, gA);
    const covach = el("path", { d: "M" + (X2 + R2 + 32) + "," + (EY - R2) + " L" + (X2 + R2 + 32) + "," + (EY + R2) +
      " M" + (X2 + R2 + 22) + "," + (EY - R2) + " L" + (X2 + R2 + 42) + "," + (EY - R2) +
      " M" + (X2 + R2 + 22) + "," + (EY + R2) + " L" + (X2 + R2 + 42) + "," + (EY + R2),
      fill: "none", stroke: NET11, "stroke-width": 2.8, "stroke-linecap": "round", opacity: 0 }, gA);
    const gB = el("g", { opacity: 0 }, V);
    chan(V, "k3c11", .5);
    return c => {
      const A = c.u < .60;
      hien("k3c11-a", A); hien("k3c11-a2", A); hien("k3c11-b", !A);
      khn("k3c11-tl", A ? c.u * 10 : -1, .3, 1e9, .4);
      nhip(c.t);
      op(gA, A ? 1 : 0); op(gB, A ? 0 : 1);
      if (A) KB(root, c, seg(c.u, 0, .60), [-44, 32, 0, 0, 1.08, 1.0]);
      else   KB(root, c, seg(c.u, .60, 1), [14, -12, 10, -10, 1.14, 1.0]);
      op(mtr, ez(seg(c.u, .02, .10))); op(mst, ez(seg(c.u, .08, .16)));
      const a = ezo(seg(c.u, .12, .34));
      tia.forEach((e, s) => { const k = s ? -1 : 1;
        set(e, { x2: (EX + 1190 * a).toFixed(1), y2: (EY + k * 1190 * a * TG).toFixed(1) });
        op(e, ez(seg(c.u, .12, .20)) * .9); });
      op(quat, (.15 * ez(seg(c.u, .22, .34))).toFixed(3));
      op(covach, ez(seg(c.u, .28, .36)) * .85);
      op(nco, ez(seg(c.u, .30, .38)));
      op(thuoc, ez(seg(c.u, .40, .48)) * .85);
      op(nxa, ez(seg(c.u, .42, .50)));
      khn("k3c11-ng", A ? -1 : (c.u - .60) * 10, .4, 2.8, .4);
    };
  }});

/* ═══════════════════════════════════════════════════════════════════════════
   ĐOẠN 40 — MỘT SỰ TRÙNG HỢP CỦA ĐÚNG THỜI ĐẠI NÀY
   ═══════════════════════════════════════════════════════════════════════════ */

/* k3c12 · câu 11 · 5,9s — CẮT CỨNG ở u=.46
   A: ảnh nhật thực toàn phần thật (NASA), vòng đo bám lấy đĩa
   B: trên nền Ngân Hà thật, ba trạng thái che: thừa → vừa khít → thiếu,
      cái ở giữa (thời đại chúng ta) sáng lên */
DANGKY({ id: "k3c12", steps: 0, say: [CAU[11]],
  html: IMG("k3c12-a", "k3-nhatthuc.jpg", 0.3, { loc: "contrast(1.16) brightness(1.12)" }) +
        IMG("k3c12-b", "k3-sao.jpg", 0.2, { loc: "contrast(1.1) saturate(1.06) brightness(.6)" }) +
        SV(0.84, "ve") +
        '<div class="hud">' + nguon("k3c12-n1", "Ảnh: NASA / Carla Thomas — nhật thực 21/8/2017, nước Mỹ · Phạm vi công cộng") +
        nguon("k3c12-n2", "Ảnh: NPS / Jacob W. Frank — dải Ngân Hà, Mỹ · Phạm vi công cộng") + '</div>',
  anim: root => {
    const V = sv(root, "ve");
    const gA = el("g", {}, V);
    const vongA = el("circle", { cx: 640, cy: 336, r: 150, fill: "none", stroke: "#FFE6B4",
      "stroke-width": 2.6, "stroke-dasharray": "12 10", opacity: 0 }, gA);
    const gB = el("g", { opacity: 0 }, V);
    el("rect", { x: -400, y: -300, width: 2100, height: 1400, fill: "#060C18", opacity: .42 }, gB);
    /* trục thời gian phát sáng */
    gradL(gB, "k3c12-tr", 120, 0, 1160, 0, [[0, "#1D3348", .2], [.5, VANG, .85], [1, "#1D3348", .2]]);
    el("rect", { x: 120, y: 544, width: 1040, height: 5, rx: 2.5, fill: "url(#k3c12-tr)" }, gB);
    const bo = [[310, 1.44, "#8FA6B6"], [640, 1.0, VANG], [970, .70, "#8FA6B6"]].map((o, i) => {
      const g = el("g", { opacity: 0 }, gB);
      /* quầng Mặt Trời phải SÁNG và RỘNG hơn đĩa Mặt Trăng, nếu không cả ba cái
         chỉ còn là ba đốm tối trên nền tối — đã chụp khung và thấy đúng lỗi đó. */
      gradB(gB, "k3c12-q" + i, [[0, "#FFF3CE", .95], [.3, NHAT, .5], [.62, NHAT, .18], [1, NHAT, 0]]);
      el("circle", { cx: o[0], cy: 324, r: 182, fill: "url(#k3c12-q" + i + ")",
        opacity: i === 1 ? 1 : .62 }, g);
      el("circle", { cx: o[0], cy: 324, r: 74, fill: i === 1 ? "#FFF6D8" : "#F0C86A" }, g);
      /* đĩa Mặt Trăng: tối, có viền sáng, để thấy rõ nó to/nhỏ hơn đĩa Mặt Trời */
      el("circle", { cx: o[0], cy: 324, r: (74 * o[1]).toFixed(1), fill: "#080E1A",
        stroke: "#9FB6C6", "stroke-width": 2.2, opacity: .97 }, g);
      /* vòng đứt giữ nguyên CỠ MẶT TRỜI — chỗ đọc được "che thừa / vừa / thiếu" */
      el("circle", { cx: o[0], cy: 324, r: 74, fill: "none", stroke: o[2],
        "stroke-width": 3, "stroke-dasharray": "10 8", opacity: .95 }, g);
      el("line", { x1: o[0], y1: 436, x2: o[0], y2: 528, stroke: o[2], "stroke-width": 2.4,
        "stroke-dasharray": "7 7", opacity: .6 }, g);
      return g;
    });
    const dau = el("circle", { cx: 640, cy: 546, r: 13, fill: VANG, opacity: 0 }, gB);
    chan(V, "k3c12", .55);
    return c => {
      const A = c.u < .46;
      hien("k3c12-a", A); hien("k3c12-b", !A);
      op(gA, A ? 1 : 0); op(gB, A ? 0 : 1);
      if (A) KB(root, c, seg(c.u, 0, .46), [18, -18, -12, 12, 1.24, 1.04]);
      else   KB(root, c, seg(c.u, .46, 1), [-20, 18, 10, -10, 1.02, 1.11]);
      op(vongA, (ez(seg(c.u, .10, .24)) * (.55 + .3 * Math.sin(c.t * 1.9))).toFixed(3));
      bo.forEach((g, i) => op(g, ez(seg(c.u, .50 + i * .09, .62 + i * .09)).toFixed(3)));
      op(dau, (ez(seg(c.u, .74, .84)) * (.7 + .3 * Math.sin(c.t * 2.6))).toFixed(3));
      set(dau, { r: (12 + 3 * Math.sin(c.t * 2.6)).toFixed(2) });
      khn("k3c12-n1", c.u * 10, .4, 3.0, .4);
      khn("k3c12-n2", c.u * 10, 4.9, 7.2, .4);
    };
  }});

/* k3c13 · câu 12 · 8,1s — HAI MỐC CẮT CỨNG, u=.34 và u=.68
   A: ngày xưa — đĩa trăng che THỪA, trùm hẳn ra ngoài đĩa Mặt Trời
   B: hôm nay — vừa khít, nhật hoa bật ra (video thật)
   C: mai sau — ảnh nhật thực hình khuyên thật, mũi tên lùi ra */
DANGKY({ id: "k3c13", steps: 0, say: [CAU[12]],
  html: NEN("dem", "k3c13-a") +
        VI("k3c13-b", "k3-nhatthuc-toan.mp4", 0.32, { tu: 0.1, dai: 3.6, toc: .5, loc: "contrast(1.1) brightness(1.1)" }) +
        IMG("k3c13-c", "k3-khuyen.jpg", 0.3, { loc: "contrast(1.14) saturate(1.06) brightness(1.06)" }) +
        SV(0.86, "ve") +
        '<div class="hud">' + nguon("k3c13-n1", "Video: NASA Armstrong FRC — nhật thực 21/8/2017, nước Mỹ · Phạm vi công cộng") +
        nguon("k3c13-n2", "Ảnh: Michael Arrighi — nhật thực hình khuyên 20/5/2012 · CC BY 2.0") + '</div>',
  anim: root => {
    const V = sv(root, "ve");
    const gA = el("g", {}, V);
    sao(gA, 90);
    gradB(gA, "k3c13-s", [[0, "#FFF6D8", 1], [.68, NHAT, .98], [1, "#E8A62E", .92]]);
    el("circle", { cx: 640, cy: 336, r: 132, fill: "url(#k3c13-s)" }, gA);
    gradB(gA, "k3c13-q", [[0, "#FFF3CE", .95], [.26, "#FFD98A", .55], [.58, NHAT, .22], [1, NHAT, 0]]);
    el("circle", { cx: 640, cy: 336, r: 430, fill: "url(#k3c13-q)", opacity: 1 }, gA);
    const mtA = el("g", {}, gA);
    el("circle", { cx: 640, cy: 336, r: 132, fill: "#0A0D14" }, mtA);
    /* SỬA 28/11 · GỢI Ý: vòng nét đứt GIỮ CỠ MẶT TRỜI quá mờ (0,25) nên không
       đọc ra được là đĩa trăng đang trùm ra ngoài. Nâng lên 0,7 và đổi sang
       #F2C14E cho tách khỏi quầng trắng. */
    const vienA = el("circle", { cx: 640, cy: 336, r: 132, fill: "none", stroke: "#F2C14E",
      "stroke-width": 5, "stroke-dasharray": "11 9", opacity: 0 }, gA);
    const gC = el("g", { opacity: 0 }, V);
    const mui = el("path", { d: "M880,330 L1096,330", fill: "none", stroke: "#FFE6B4",
      "stroke-width": 4, "stroke-linecap": "round", opacity: 0 }, gC);
    const dau = el("polygon", { points: "1082,308 1142,330 1082,352", fill: "#FFE6B4", opacity: 0 }, gC);
    /* mũi tên cuối bản cũ là một mũi tên TRƠN không gắn với gì — nay có nhãn */
    const nhanC = nhanSV(gC, 988, 404, "rồi sẽ tới lúc che không đủ", "#FFE6B4", 26, "middle", 700);
    nhanC.setAttribute("stroke", "#06101C");
    nhanC.setAttribute("stroke-width", "6");
    nhanC.setAttribute("paint-order", "stroke");
    chan(V, "k3c13", .55);
    return c => {
      const P = c.u < .34 ? 0 : (c.u < .68 ? 1 : 2);
      hien("k3c13-a", P === 0); hien("k3c13-b", P === 1); hien("k3c13-c", P === 2);
      op(gA, P === 0 ? 1 : 0); op(gC, P === 2 ? 1 : 0);
      if (P === 0)      KB(root, c, seg(c.u, 0, .34),  [0, 0, -12, 12, 1.04, 1.14]);
      else if (P === 1) KB(root, c, seg(c.u, .34, .68), [14, -14, 10, -10, 1.1, 1.0]);
      else              KB(root, c, seg(c.u, .68, 1),  [-20, 18, -10, 10, 1.2, 1.02]);
      const k = lerp(1.0, 1.38, ezo(seg(c.u, .04, .30)));
      set(mtA, { transform: "translate(640 336) scale(" + k.toFixed(3) + ") translate(-640 -336)" });
      op(vienA, ez(seg(c.u, .04, .14)) * .95);
      op(mui, ez(seg(c.u, .78, .86)) * .92); veDan(mui, ezo(seg(c.u, .78, .94)));
      op(dau, ez(seg(c.u, .88, .94)) * .92);
      op(nhanC, ez(seg(c.u, .86, .94)).toFixed(3));
      khn("k3c13-n1", P === 1 ? (c.u - .34) * 10 : -1, .3, 2.6, .4);
      khn("k3c13-n2", P === 2 ? (c.u - .68) * 10 : -1, .3, 2.6, .4);
    };
  }});

/* k3c14 · câu 13 · 6,9s — CẢNH DỰNG LẠI HẲN.
   Bản cũ bị chủ kênh bác: "bốn thanh ngang xám trên một trục mũi tên, nền trắng trơn".
   Nay: dải Ngân Hà THẬT (ảnh NPS, phạm vi công cộng) + Ken Burns, phủ một lớp
   chuyển sắc đêm, bốn khoảng ước tính là dải SÁNG có quầng và hai đầu nhoè —
   đúng tinh thần "các nguồn lệch nhau, không ai chốt được số nào".
   CHỦ Ý: không hiện một con số năm nào (tu-lieu.md, mục "chỗ tôi không chắc"). */
DANGKY({ id: "k3c14", steps: 0, say: [CAU[13]],
  html: IMG("k3c14-a", "k3-sao.jpg", 0.2, { loc: "contrast(1.12) saturate(1.1) brightness(.72)" }) +
        SV(0.84, "ve") +
        '<div class="hud">' + nguon("k3c14-ng", "Ảnh nền: NPS / Jacob W. Frank — dải Ngân Hà, Mỹ · Phạm vi công cộng", 430) + '</div>',
  anim: root => {
    const V = sv(root, "ve");
    el("rect", { x: -400, y: -300, width: 2100, height: 1400, fill: "#05091A", opacity: .2 }, V);
    gradL(V, "k3c14-sc", 0, -100, 0, 760, [[0, "#04070F", .42], [.42, "#04070F", .04], [1, "#04070F", .5]]);
    el("rect", { x: -400, y: -300, width: 2100, height: 1400, fill: "url(#k3c14-sc)" }, V);
    const X0 = 148, X1 = 1140, Y0 = 188, DY = 92;
    /* trục thời gian: một dải sáng, không phải một nét xám */
    gradL(V, "k3c14-tr", X0, 0, X1, 0, [[0, VANG, .85], [1, VANG, .1]]);
    el("rect", { x: X0, y: 582, width: X1 - X0, height: 4, rx: 2, fill: "url(#k3c14-tr)" }, V);
    el("path", { d: "M" + (X1 - 20) + ",570 L" + (X1 + 6) + ",584 L" + (X1 - 20) + ",598",
      fill: "none", stroke: VANG, "stroke-width": 3, "stroke-linecap": "round", opacity: .8 }, V);
    for (let i = 0; i < 9; i++)
      el("line", { x1: X0 + i * (X1 - X0) / 8, y1: 582, x2: X0 + i * (X1 - X0) / 8, y2: 596,
        stroke: VANG, "stroke-width": 2, opacity: .34 }, V);
    /* ── SỬA 28/11 · NÊN SỬA (luật L1: "nhãn, hoặc là bỏ") ─────────────────
       Bản cũ: bốn dải trôi trên một trục thời gian KHÔNG CÓ MỘT NHÃN NÀO —
       người xem thấy bốn thanh màu vô nghĩa. Chủ ý "không hiện con số năm nào"
       là đúng và giữ nguyên, nhưng nó không có nghĩa là bỏ luôn nhãn TRỤC.
       Nay: gắn nhãn hai đầu trục bằng đúng hai cụm chính lời dẫn vừa đọc —
       "vài trăm triệu năm" và "gần một tỉ năm" — không bịa thêm con số nào.
       Và bốn dải đổi về CÙNG MỘT MÀU vàng #F2C14E, chỉ khác độ đậm, để khỏi
       gợi ý rằng đó là bốn LOẠI khác nhau (chúng chỉ là bốn ước tính). */
    const MAU = ["#F2C14E", "#F2C14E", "#F2C14E", "#F2C14E"];
    const DAM = [.58, .72, .86, 1.0];
    const q = [[.10, .46], [.17, .40], [.28, .74], [.44, .94]];
    const dai = q.map((o, i) => {
      const g = el("g", { opacity: 0 }, V);
      const y = Y0 + i * DY;
      gradL(V, "k3c14-g" + i, X0 + (X1 - X0) * o[0], 0, X0 + (X1 - X0) * o[1], 0,
        [[0, MAU[i], .15], [.18, MAU[i], .95], [.82, MAU[i], .95], [1, MAU[i], .15]]);
      /* quầng sáng mềm phía sau dải */
      const h = el("rect", { x: 0, y: y - 26, width: 0, height: 52, rx: 26,
        fill: MAU[i], opacity: .18 }, g);
      const r = el("rect", { x: 0, y: y - 11, width: 0, height: 22, rx: 11,
        fill: "url(#k3c14-g" + i + ")" }, g);
      const c1 = el("circle", { cx: 0, cy: y, r: 9, fill: MAU[i], opacity: .9 }, g);
      const c2 = el("circle", { cx: 0, cy: y, r: 9, fill: MAU[i], opacity: .9 }, g);
      g.__h = h; g.__r = r; g.__c1 = c1; g.__c2 = c2; g.__a = o[0]; g.__b = o[1]; g.__y = y;
      g.__dam = DAM[i];
      return g;
    });
    /* NHÃN HAI ĐẦU TRỤC. Đo: trục chạy X0 = 148 → X1 = 1140, nhãn trái căn
       trái tại x = 150, nhãn phải căn phải tại x = 1138 — cả hai nằm trong
       hộp an toàn x ∈ [48,1232]; y = 640 nằm trong y ≤ 672. */
    const nTrai = nhanSV(V, 152, 628, "vài trăm triệu năm", "#FFE6A8", 26, "start", 700);
    const nPhai = nhanSV(V, 1132, 628, "gần một tỉ năm", "#FFE6A8", 26, "end", 700);
    /* dấu "?" cũ ở x = 1186 cỡ 128 px: mép phải ra tới x ≈ 1341 sau khi máy
       quay đẩy — tức RA NGOÀI KHUNG 1280, không chỉ ngoài vùng an toàn. */
    const hoi = el("text", { x: 1120, y: 176, fill: VANG, "font-size": 92, "font-weight": 800,
      "font-family": "system-ui", "text-anchor": "middle", opacity: 0 }, V);
    hoi.textContent = "?";
    chan(V, "k3c14", .6);
    return c => {
      /* biên độ máy quay hạ hẳn: bản cũ [26,-26,-14,14,1.04,1.18] đẩy nhãn trục
         xuống tận y = 729 px, tức LỌT RA NGOÀI khung 720 px ở mốc c.u = 0,90.
         Đo bằng getBoundingClientRect() ở sáu mốc, không ước lượng. */
      KB(root, c, c.u, [10, -10, -6, 6, 1.0, 1.06]);
      dai.forEach((g, i) => {
        const a = ezo(seg(c.u, .04 + i * .13, .34 + i * .13));
        const xa = X0 + (X1 - X0) * g.__a, xb = X0 + (X1 - X0) * lerp(g.__a, g.__b, a);
        const w = Math.max(0, xb - xa);
        set(g.__r, { x: xa.toFixed(1), width: w.toFixed(1) });
        set(g.__h, { x: (xa - 16).toFixed(1), width: (w + 32).toFixed(1) });
        set(g.__c1, { cx: xa.toFixed(1), r: (8 + 2.6 * Math.sin(c.t * 2.1 + i)).toFixed(2) });
        set(g.__c2, { cx: xb.toFixed(1), r: (8 + 2.6 * Math.sin(c.t * 2.1 + i + 1.6)).toFixed(2) });
        op(g, (g.__dam * ez(seg(c.u, .04 + i * .13, .16 + i * .13))).toFixed(3));
      });
      const un14 = ez(seg(c.u, .06, .18));
      op(nTrai, un14.toFixed(3)); op(nPhai, un14.toFixed(3));
      op(hoi, (ez(seg(c.u, .66, .82)) * (.55 + .3 * Math.sin(c.t * 2.1))).toFixed(3));
      khn("k3c14-ng", c.t, .5, 3.9);
    };
  }});

/* k3c15 · câu 14 · 6,1s — CẮT CỨNG ở u=.50
   A: cùng trục ấy, một cửa sổ hẹp sáng lên = quãng loài người đang sống
   B: VIDEO THẬT vành lửa (nhật hoa bật ra) — đóng ý "còn hiện ra được" */
DANGKY({ id: "k3c15", steps: 0, say: [CAU[14]],
  html: IMG("k3c15-a", "k3-sao.jpg", 0.2, { loc: "contrast(1.12) saturate(1.1) brightness(.68)" }) +
        VI("k3c15-b", "k3-vanhlua.mp4", 0.3, { tu: 1.0, dai: 6.6, toc: .5, loc: "contrast(1.1) brightness(1.04)" }) +
        SV(0.84, "ve") +
        '<div class="hud">' + nguon("k3c15-n1", "Ảnh nền: NPS / Jacob W. Frank — dải Ngân Hà, Mỹ · Phạm vi công cộng") +
        nguon("k3c15-n2", "Video: NASA Armstrong FRC — nhật thực 21/8/2017, nước Mỹ · Phạm vi công cộng") + '</div>',
  anim: root => {
    const V = sv(root, "ve");
    const gA = el("g", {}, V);
    el("rect", { x: -400, y: -300, width: 2100, height: 1400, fill: "#05091A", opacity: .5 }, gA);
    const X0 = 148, X1 = 1140, Y = 384;
    gradL(gA, "k3c15-tr", X0, 0, X1, 0, [[0, "#7E93A6", .7], [1, "#7E93A6", .12]]);
    el("rect", { x: X0, y: Y - 2, width: X1 - X0, height: 4, rx: 2, fill: "url(#k3c15-tr)" }, gA);
    gradL(gA, "k3c15-w", 0, Y - 150, 0, Y + 150, [[0, VANG, 0], [.5, VANG, .36], [1, VANG, 0]]);
    const cua = el("rect", { x: 0, y: Y - 150, width: 0, height: 300, fill: "url(#k3c15-w)", opacity: 0 }, gA);
    const vach = [0, 1].map(() => el("line", { x1: 0, y1: Y - 130, x2: 0, y2: Y + 130,
      stroke: VANG, "stroke-width": 3, opacity: 0 }, gA));
    const quet = el("circle", { cx: 0, cy: Y, r: 0, fill: "none", stroke: VANG,
      "stroke-width": 2.4, opacity: 0 }, gA);
    const cham = el("circle", { cx: 0, cy: Y, r: 11, fill: "#FFF3D6", opacity: 0 }, gA);
    chan(V, "k3c15", .55);
    return c => {
      const A = c.u < .50;
      hien("k3c15-a", A); hien("k3c15-b", !A);
      op(gA, A ? 1 : 0);
      if (A) KB(root, c, seg(c.u, 0, .50), [-22, 20, 12, -12, 1.06, 1.16]);
      else   KB(root, c, seg(c.u, .50, 1), [16, -14, -10, 10, 1.1, 1.0]);
      const a = ezo(seg(c.u, .06, .36));
      const xc = X0 + (X1 - X0) * .58, w = 96 * a;
      set(cua, { x: (xc - w / 2).toFixed(1), width: w.toFixed(1) });
      op(cua, (ez(seg(c.u, .06, .16)) * (.82 + .16 * Math.sin(c.t * 2.2))).toFixed(3));
      vach.forEach((e, i) => { const x = xc + (i ? w / 2 : -w / 2);
        set(e, { x1: x.toFixed(1), x2: x.toFixed(1) }); op(e, ez(seg(c.u, .10, .20)) * .85); });
      const b = (c.t * .45) % 1;
      set(quet, { cx: xc.toFixed(1), r: (16 + 130 * b).toFixed(1) });
      op(quet, ((1 - b) * .5 * ez(seg(c.u, .22, .34))).toFixed(3));
      set(cham, { cx: xc.toFixed(1), r: (10 + 3 * Math.sin(c.t * 2.6)).toFixed(2) });
      op(cham, ez(seg(c.u, .18, .28)));
      khn("k3c15-n1", A ? c.u * 10 : -1, .4, 3.0, .4);
      khn("k3c15-n2", A ? -1 : (c.u - .50) * 10, .3, 2.7, .4);
    };
  }});

/* ═══════════════════════════════════════════════════════════════════════════
   ĐOẠN 41–44 — "CHỈ CÓ ĐIỀU"
   ═══════════════════════════════════════════════════════════════════════════ */

/* k3c16 · câu 15 · 5,4s — phép trừ Trái Đất − Mặt Trăng = ? rồi bị gạch đỏ.
   Sơ đồ (ngoại lệ §15.1.3) nhưng có ảnh Mặt Trăng thật làm chất liệu nền. */
DANGKY({ id: "k3c16", steps: 0, say: [CAU[15]],
  html: NEN("dem") + SV(0.2, "nen") + SV(0.82, "ve"),
  anim: root => {
    const N = sv(root, "nen"), V = sv(root, "ve");
    /* ── SỬA 28/11 · NÊN SỬA ─────────────────────────────────────────────────
       Đây là CÂU LUẬN ĐỀ của cả tập ("một phép trừ mà vũ trụ không cho phép ai
       làm") nhưng bản cũ là khung NHẠT NHẤT, PHẲNG NHẤT cả tập: nền xanh-trắng
       gần trắng, một đĩa lam vẽ tay có vệt cam, một đĩa xám, mấy dấu đen, và
       lớp chatLieu() gần như vô hình. Cảnh quan trọng nhất phải là cảnh đậm nhất.
       Nay: nền NENS.dem (đỉnh #1A2742), Trái Đất và Mặt Trăng dùng ẢNH THẬT qua
       hàm chung của cả tập, dấu trừ / dấu bằng / dấu hỏi đổi sang trắng ngà, và
       dấu ✕ đỏ #D4523C dày 10 px VẼ DẦN đè lên cả phép trừ. ─────────────────── */
    const nhip = chatLieu(N, "k3c16", "#7FB6D6", 12);
    const NGA = "#F3EFE2";
    const td = cauTD(V, "k3c16e", 288, 352, 128); op(td, 0);
    const tru = el("rect", { x: 452, y: 338, width: 0, height: 26, rx: 13, fill: NGA }, V);
    const mt = diaMT(V, "k3c16", 716, 352, 70); op(mt, 0);
    const bang = el("path", { d: "M842,308 L910,308 M842,396 L910,396", fill: "none",
      stroke: NGA, "stroke-width": 24, "stroke-linecap": "round", opacity: 0 }, V);
    const hoi = el("text", { x: 1056, y: 420, fill: NGA, "font-size": 158, "font-weight": 800,
      "font-family": "system-ui", "text-anchor": "middle", opacity: 0 }, V);
    hoi.textContent = "?";
    /* dấu ✕ vẽ dần, phủ cả phép trừ. Hai nét là hai <path> riêng để veDan() ăn. */
    const XC = 640, YC = 352, XR = 236, YR = 182;
    const mkX = d => {
      const g = el("g", { opacity: 0 }, V);
      el("path", { d: d, fill: "none", stroke: "#06101C", "stroke-width": 17,
        "stroke-linecap": "round", opacity: .45 }, g);
      const n = el("path", { d: d, fill: "none", stroke: DO, "stroke-width": 10,
        "stroke-linecap": "round" }, g);
      g.__net = n; g.__bong = g.firstChild;
      return g;
    };
    const x1 = mkX("M" + (XC - XR) + "," + (YC - YR) + " L" + (XC + XR) + "," + (YC + YR));
    const x2 = mkX("M" + (XC + XR) + "," + (YC - YR) + " L" + (XC - XR) + "," + (YC + YR));
    return c => {
      KB(root, c, c.u, [-22, 20, 0, 0, 1.0, 1.08]);
      nhip(c.t);
      op(td, ez(seg(c.u, .0, .10)));
      set(tru, { width: (138 * ezo(seg(c.u, .08, .22))).toFixed(1) });
      op(mt, ez(seg(c.u, .14, .24)));
      op(bang, ez(seg(c.u, .22, .32)));
      op(hoi, ez(seg(c.u, .28, .40)) * .95);
      [x1, x2].forEach((g, i) => {
        const a0 = .50 + i * .11;
        op(g, ez(seg(c.u, a0, a0 + .06)).toFixed(3));
        const w = ezo(seg(c.u, a0, a0 + .20));
        veDan(g.__net, w); veDan(g.__bong, w);
      });
    };
  }});

/* k3c17 · câu 16 · 2,3s — ảnh Mặt Trăng thật (LRO), thấy TRỌN đĩa nhờ FIT(). */
DANGKY({ id: "k3c17", steps: 0, say: [CAU[16]],
  html: NEN("dem") + FIT("k3c17-a", "k3-trang.jpg", 0.3, { loc: "contrast(1.08) saturate(.9) brightness(1.06)" }) +
        SV(0.9, "ve") +
        '<div class="hud">' + nguon("k3c17-ng", "Ảnh: NASA / GSFC / Đại học bang Arizona (LRO) · Phạm vi công cộng") + '</div>',
  anim: root => {
    const V = sv(root, "ve");
    gradB(V, "k3c17-q", [[0, "#DCE8F4", .2], [.42, "#9FC2D8", .07], [1, "#9FC2D8", 0]]);
    el("circle", { cx: 640, cy: 352, r: 440, fill: "url(#k3c17-q)" }, V);
    chan(V, "k3c17", .6);
    return c => {
      KB(root, c, c.u, [10, -12, 0, 0, 1.02, 1.1]);
      khn("k3c17-ng", c.t, .2, 1.9);
    };
  }});

/* k3c18 · câu 17 · 6,8s — CẮT CỨNG ở u=.56
   A: một mũi tên đỏ cố kéo Mặt Trăng ra khỏi quỹ đạo, nó bật lại
   B: ảnh trăng rằm sau rặng cây — "tối về cứ ngủ cho ngon" */
DANGKY({ id: "k3c18", steps: 0, say: [CAU[17]],
  html: NEN("lanh", "k3c18-a") + SV(0.16, "nen", "k3c18-a2") +
        IMG("k3c18-b", "k3-trang-canh.jpg", 0.3, { loc: "contrast(1.1) saturate(.92) brightness(1.5)" }) +
        SV(0.82, "ve") +
        '<div class="hud">' + nguon("k3c18-ng", "Ảnh: W. carter · CC0") + '</div>',
  anim: root => {
    const N = sv(root, "nen"), V = sv(root, "ve");
    const nhip = chatLieu(N, "k3c18", "#6E93AB", 10);
    const gA = el("g", {}, V);
    el("ellipse", { cx: 566, cy: 364, rx: 384, ry: 154, fill: "none", stroke: "#A4B1AA",
      "stroke-width": 2.6, "stroke-dasharray": "10 9" }, gA);
    cauTD(gA, "k3c18e", 566, 364, 78);
    const mt = diaMT(gA, "k3c18", 0, 0, 34);
    /* ── SỬA 28/11 · mức CHẶN ───────────────────────────────────────────────
       Bản cũ: một mũi tên đỏ KÉO MẶT TRĂNG VĂNG KHỎI QUỸ ĐẠO, không một dấu
       phủ định nào, trong khi lời đang đọc là "không có cơ chế vật lý nào lấy
       nó ra khỏi bầu trời của chúng ta". Hình nói NGƯỢC HẲN lời.
       Nay: (1) dấu ✕ đỏ dày đè lên mũi tên, hiện ĐÚNG CÙNG NHỊP với mũi tên
       (cùng một biến `vao`, xong trước c.u = .16 — không khung nào có mũi tên
       trơn); (2) mũi tên GÃY LÀM ĐÔI, nửa ngoài rơi xuống và xoay đi; (3) một
       nhãn sơ đồ "KHÔNG XẢY RA" ghim cố định trong vùng an toàn.
       Mũi tên chia làm hai khúc để gãy được: `keoA` khúc trong, `keoB` khúc
       ngoài (mang đầu mũi tên). ───────────────────────────────────────────── */
    const keoA = el("path", { d: "", fill: "none", stroke: DO, "stroke-width": 7,
      "stroke-linecap": "round", opacity: 0 }, gA);
    const keoBg = el("g", { opacity: 0 }, gA);
    const keoB = el("path", { d: "", fill: "none", stroke: DO, "stroke-width": 7,
      "stroke-linecap": "round" }, keoBg);
    const dauk = el("polygon", { points: "0,0 0,0 0,0", fill: DO }, keoBg);
    const xdau = veXday(gA, 0, 0, 58, DO, 11); op(xdau, 0);
    const nhanX = nhanSV(gA, 640, 126, "KHÔNG XẢY RA", DO, 38, "middle", 800);
    nhanX.setAttribute("letter-spacing", "0.12em");
    nhanX.setAttribute("stroke", "#F7FAFC");
    nhanX.setAttribute("stroke-width", "7");
    nhanX.setAttribute("paint-order", "stroke");
    const gB = el("g", { opacity: 0 }, V);
    chan(V, "k3c18", .5);
    return c => {
      const A = c.u < .56;
      hien("k3c18-a", A); hien("k3c18-a2", A); hien("k3c18-b", !A);
      nhip(c.t);
      op(gA, A ? 1 : 0); op(gB, A ? 0 : 1);
      if (A) KB(root, c, seg(c.u, 0, .56), [0, 0, -12, 14, 1.0, 1.09]);
      else   KB(root, c, seg(c.u, .56, 1), [-18, 16, 10, -10, 1.14, 1.02]);
      const th = c.t * 1.05 - .6;
      const keoDan = Math.sin(cl(seg(c.u, .10, .40), 0, 1) * Math.PI) * 110;
      const rx = 384 + keoDan, ry = 154 + keoDan * .4;
      const x = 566 + rx * Math.cos(th), y = 364 + ry * Math.sin(th);
      set(mt, { transform: "translate(" + x.toFixed(1) + "," + y.toFixed(1) + ")" });
      /* đầu mũi tên phải NẰM TRONG KHUNG ở mọi mốc — bản cũ để nó chạy tới
         x ≈ -216 nên nửa mũi tên bị mép trái nuốt mất. Kẹp vào hộp an toàn. */
      const nx = cl(566 + (rx + 196) * Math.cos(th), 96, 1184);
      const ny = cl(364 + (ry + 92) * Math.sin(th), 96, 624);
      const ang = Math.atan2(ny - y, nx - x);
      /* `vao` = mũi tên VÀ dấu ✕ cùng hiện; `gay` = tiến độ gãy đôi rồi rơi.
         Dấu ✕ xong ở c.u = .16, tức trước .35 như bản soát đòi. */
      const vao = ez(seg(c.u, .10, .16));
      const gay = ez(seg(c.u, .36, .54));
      const lx = (a, b, k) => a + (b - a) * k;
      /* khúc trong: từ Mặt Trăng tới 42 % — gãy thì co ngắn lại một chút */
      const m1x = lx(x, nx, .42 - .06 * gay), m1y = lx(y, ny, .42 - .06 * gay);
      set(keoA, { d: "M" + x.toFixed(1) + "," + y.toFixed(1) + " L" + m1x.toFixed(1) + "," + m1y.toFixed(1) });
      op(keoA, (vao * .92).toFixed(3));
      /* khúc ngoài + đầu mũi tên: gãy rời ra, rơi xuống và xoay */
      const m2x = lx(x, nx, .52), m2y = lx(y, ny, .52);
      set(keoB, { d: "M" + m2x.toFixed(1) + "," + m2y.toFixed(1) + " L" + nx.toFixed(1) + "," + ny.toFixed(1) });
      set(dauk, { points: [[nx, ny], [nx - 24 * Math.cos(ang - .4), ny - 24 * Math.sin(ang - .4)],
        [nx - 24 * Math.cos(ang + .4), ny - 24 * Math.sin(ang + .4)]]
        .map(p => p[0].toFixed(1) + "," + p[1].toFixed(1)).join(" ") });
      const roi = 300 * gay * gay, xoay = 54 * gay;
      set(keoBg, { transform: "translate(" + (16 * gay).toFixed(1) + "," + roi.toFixed(1) + ") rotate(" +
        xoay.toFixed(1) + " " + m2x.toFixed(1) + " " + m2y.toFixed(1) + ")" });
      op(keoBg, (vao * .92 * (1 - ez(seg(c.u, .44, .56)))).toFixed(3));
      /* dấu ✕ đè lên mũi tên, theo mũi tên, nhưng KẸP trong vùng an toàn 48 px */
      const cxX = cl(lx(x, nx, .5), 48 + 70, 1232 - 70), cyX = cl(lx(y, ny, .5), 48 + 70, 672 - 70);
      set(xdau, { transform: "translate(" + cxX.toFixed(1) + "," + cyX.toFixed(1) + ") scale(" +
        (.82 + .08 * Math.sin(c.t * 3.1)).toFixed(3) + ")" });
      op(xdau, (vao * (1 - ez(seg(c.u, .50, .56)))).toFixed(3));
      op(nhanX, (vao * (1 - ez(seg(c.u, .50, .56)))).toFixed(3));
      khn("k3c18-ng", A ? -1 : (c.u - .56) * 10, .4, 2.9, .4);
    };
  }});

/* k3c19 · câu 18 · 4,2s — ba mức chắc chắn, chưa đổ đầy.
   Biểu đồ (ngoại lệ §15.1.3) nhưng nền là tranh *Ánh trăng trên bãi Skagen* làm mờ,
   nên không phải "hình khối xám trên nền trắng trơn". */
DANGKY({ id: "k3c19", steps: 0, say: [CAU[18]],
  html: NEN("lanh2") + SV(0.18, "nen") + SV(0.8, "ve"),
  anim: root => {
    const N = sv(root, "nen"), V = sv(root, "ve");
    const nhip = chatLieu(N, "k3c19", "#4E7A94", 10);
    const B = baThanh(V, "k3c19");
    return c => {
      KB(root, c, c.u, [12, -12, -10, 10, 1.0, 1.05]);
      nhip(c.t);
      B.icon.forEach((g, i) => op(g, ez(seg(c.u, .02 + i * .10, .16 + i * .10)).toFixed(3)));
      B.nhan.forEach((t, i) => op(t, ez(seg(c.u, .02 + i * .10, .16 + i * .10)).toFixed(3)));
      B.nen.forEach((e, i) => op(e, ez(seg(c.u, .0 + i * .10, .12 + i * .10)).toFixed(3)));
      B.thanh.forEach((e, i) => set(e, { width:
        (B3.W * B3.MUC[i] * ezo(seg(c.u, .06 + i * .10, .44 + i * .10))).toFixed(1) }));
    };
  }});

/* k3c20 · câu 19 · 6,3s — CẮT CỨNG ở u=.56
   A: hai thanh đầu đổ gần đầy (triều: không ai cãi; lịch âm: số học)
   B: VIDEO THẬT nhật thực + một vòng tiến độ chạy hết — "cứ tính là ra" */
DANGKY({ id: "k3c20", steps: 0, say: [CAU[19]],
  html: NEN("lanh2", "k3c20-a") + SV(0.18, "nen", "k3c20-a2") +
        VI("k3c20-b", "k3-nhatthuc-dia.mp4", 0.3, { tu: 0.1, dai: 4.7, toc: .55, loc: "contrast(1.08) brightness(1.06)" }) +
        SV(0.8, "ve") +
        '<div class="hud">' + nguon("k3c20-ng", "Video: NASA Armstrong FRC — nhật thực 21/8/2017, nước Mỹ · Phạm vi công cộng") + '</div>',
  anim: root => {
    const N = sv(root, "nen"), V = sv(root, "ve");
    const nhip = chatLieu(N, "k3c20", "#4E7A94", 10);
    const gA = el("g", {}, V);
    /* CÙNG MỘT HÀM với k3c19 — hai cảnh liền nhau không thể lệch nhau nữa.
       Ở đây sơ đồ vào cảnh đã đầy sẵn: nhãn, biểu tượng và nền thanh hiện ngay. */
    const B = baThanh(gA, "k3c20");
    B.nen.forEach(e => op(e, 1));
    B.nhan.forEach(t => op(t, 1));
    B.icon.forEach(g => op(g, 1));
    B.thanh.forEach((e, i) => set(e, { width: (B3.W * B3.MUC[i]).toFixed(1) }));
    const gB = el("g", { opacity: 0 }, V);
    const nenV = el("circle", { cx: 640, cy: 336, r: 196, fill: "none", stroke: "#28384A",
      "stroke-width": 7, opacity: 0 }, gB);
    const tien = el("circle", { cx: 640, cy: 336, r: 196, fill: "none", stroke: VANG,
      "stroke-width": 7, "stroke-linecap": "round", opacity: 0,
      transform: "rotate(-90 640 336)" }, gB);
    chan(V, "k3c20", .5);
    return c => {
      const A = c.u < .56;
      hien("k3c20-a", A); hien("k3c20-a2", A); hien("k3c20-b", !A);
      op(gA, A ? 1 : 0); op(gB, A ? 0 : 1);
      nhip(c.t);
      if (A) KB(root, c, seg(c.u, 0, .56), [-12, 12, 10, -10, 1.0, 1.05]);
      else   KB(root, c, seg(c.u, .56, 1), [12, -12, -8, 8, 1.1, 1.0]);
      set(B.thanh[0], { width: (B3.W * lerp(B3.MUC[0], .95, ezo(seg(c.u, .04, .34)))).toFixed(1) });
      set(B.thanh[1], { width: (B3.W * lerp(B3.MUC[1], .99, ezo(seg(c.u, .22, .52)))).toFixed(1) });
      op(nenV, ez(seg(c.u, .58, .66)) * .8);
      op(tien, ez(seg(c.u, .60, .68)) * .95);
      const C = 2 * Math.PI * 196;
      set(tien, { "stroke-dasharray": C.toFixed(1), "stroke-dashoffset": (C * (1 - ezo(seg(c.u, .62, .94)))).toFixed(1) });
      khn("k3c20-ng", A ? -1 : (c.u - .56) * 10, .3, 2.6, .4);
    };
  }});

/* k3c21 · câu 20 · 8,9s — HAI MỐC CẮT CỨNG, u=.34 và u=.70
   A: Trái Đất với trục lắc, trên nền trời sao thật
   B: biểu đồ hai khoảng Laskar 1993 / Lissauer 2012 (nhãn sơ đồ, không phải chữ biên tập)
   C: trở lại Trái Đất, biên độ lắc nhảy giữa hai con số — chưa bên nào thắng */
DANGKY({ id: "k3c21", steps: 0, say: [CAU[20]],
  html: IMG("k3c21-a", "k3-sao.jpg", 0.2, { loc: "contrast(1.1) saturate(1.06) brightness(.56)" }) +
        NEN("dem", "k3c21-b") +
        IMG("k3c21-c", "k3-sao.jpg", 0.2, { loc: "contrast(1.1) saturate(1.06) brightness(.5)" }) +
        SV(0.84, "ve") +
        '<div class="hud">' + nguon("k3c21-ng", "Ảnh nền: NPS / Jacob W. Frank — dải Ngân Hà, Mỹ · Phạm vi công cộng") + '</div>',
  anim: root => {
    const V = sv(root, "ve");
    /* A và C dùng chung quả Trái Đất, chỉ khác vị trí + biên độ */
    const gAC = el("g", {}, V);
    const qin = el("g", { transform: "translate(640 356)" }, gAC);
    cauTD(qin, "k3c21e", 0, 0, 150);
    const trucG = el("g", {}, qin);
    el("line", { x1: 0, y1: -214, x2: 0, y2: 214, stroke: "#FFF0CC", "stroke-width": 6,
      "stroke-linecap": "round" }, trucG);
    el("circle", { cx: 0, cy: -214, r: 9, fill: "#FFF0CC" }, trucG);
    const cung = el("path", { d: "", fill: "none", stroke: VANG, "stroke-width": 3,
      "stroke-dasharray": "8 8", opacity: 0 }, qin);
    /* B: biểu đồ */
    /* ── SỬA 28/11 · NÊN SỬA ───────────────────────────────────────────────
       Hai chỗ, cả hai đều do nhịp chứ không do hình.
       (1) Hai thanh chạy theo hai mốc lệch nhau 0,14 và về đích quá muộn, nên ở
           khung giữa cảnh thanh Lissauer mới tới ~43° trong khi đáng lẽ phải là
           50°. Nay cả hai VỀ ĐÍCH TRƯỚC c.u = .62, còn 0,08 đứng yên để đọc.
           Mép phải thanh Lissauer nằm đúng vạch 50° — đã chụp khung và đo.
       (2) Trục cũ kết ở x = 1176; sau khi máy quay đẩy/lia, nhãn "90°" ra tới
           x = 1246, ngoài hộp an toàn 48 px. Nay trục kết ở x = 1140.
       Ngữ pháp hình đã chốt với khối 2 ngày 28/11: so HAI KHOẢNG đã công bố
       với nhau thì dùng THANH NGANG CÓ TRỤC ĐỘ (cảnh này và k2c25); còn độ
       nghiêng của một cái trục ĐANG LẮC thì dùng vành quạt (k2c18–k2c24).
       Cặp màu lấy đúng của khối 2 để hai cảnh nhận ra nhau, và vì thế nền
       chặng B đổi sang NENS.dem cho hai màu sáng ấy nổi lên. ───────────────── */
    const gB = el("g", { opacity: 0 }, V);
    const X0 = 316, X1 = 1140, Y = 552;
    const px = d => X0 + (X1 - X0) * d / 90;
    el("line", { x1: X0, y1: Y, x2: X1, y2: Y, stroke: "#8DA7B8", "stroke-width": 2.4 }, gB);
    for (let d = 0; d <= 90; d += 15) {
      el("line", { x1: px(d), y1: Y, x2: px(d), y2: Y + 12, stroke: "#8DA7B8", "stroke-width": 2 }, gB);
      const t = el("text", { x: px(d), y: Y + 40, fill: "#AFC4D2", "font-size": 19,
        "font-family": "system-ui", "text-anchor": "middle" }, gB);
      t.textContent = d + "°";
    }
    const thanh = [[0, 85, "#EE7B5E", 424, "Laskar 1993"], [10, 50, "#6FC3E8", 312, "Lissauer 2012"]]
      .map(o => {
        const g = el("g", { opacity: 0 }, gB);
        const r = el("rect", { x: px(o[0]), y: o[3] - 25, width: 0, height: 50, rx: 25,
          fill: o[2], opacity: .92 }, g);
        const t = el("text", { x: px(o[0]), y: o[3] - 44, fill: "#E6EEF4", "font-size": 22,
          "font-family": "system-ui", "font-weight": 700 }, g);
        t.textContent = o[4];
        g.__r = r; g.__a = o[0]; g.__b = o[1];
        return g;
      });
    const qB = el("g", {}, gB);
    cauTD(qB, "k3c21f", 170, 352, 72);
    const trucB = el("g", { transform: "translate(170 352)" }, gB);
    el("line", { x1: 0, y1: -104, x2: 0, y2: 104, stroke: "#FFF0CC", "stroke-width": 5,
      "stroke-linecap": "round" }, trucB);
    chan(V, "k3c21", .55);
    return c => {
      const P = c.u < .34 ? 0 : (c.u < .70 ? 1 : 2);
      hien("k3c21-a", P === 0); hien("k3c21-b", P === 1); hien("k3c21-c", P === 2);
      op(gAC, P === 1 ? 0 : 1); op(gB, P === 1 ? 1 : 0);
      if (P === 0)      KB(root, c, seg(c.u, 0, .34),  [0, 0, 12, -12, 1.14, 1.0]);
      else if (P === 1) KB(root, c, seg(c.u, .34, .70), [16, -16, -8, 8, 1.0, 1.08]);
      else              KB(root, c, seg(c.u, .70, 1),  [-14, 12, -10, 10, 1.02, 1.12]);
      /* biên độ lắc: nhỏ ở A, rồi nhảy giữa 46° và 24° ở C */
      let bien;
      if (P === 0) bien = lerp(10, 30, ez(seg(c.u, .04, .30)));
      else if (P === 2) bien = (Math.sin((c.u - .70) * 26) > 0 ? 46 : 24);
      else bien = 30;
      set(trucG, { transform: "rotate(" + (bien * Math.sin(c.t * 1.15)).toFixed(2) + ")" });
      set(trucB, { transform: "translate(170 352) rotate(" + (22 * Math.sin(c.t * 1.3)).toFixed(2) + ")" });
      const R = 236, ar = bien * Math.PI / 180;
      set(cung, { d: "M" + (R * Math.sin(-ar)).toFixed(1) + "," + (-R * Math.cos(ar)).toFixed(1) +
        " A" + R + "," + R + " 0 0 1 " + (R * Math.sin(ar)).toFixed(1) + "," + (-R * Math.cos(ar)).toFixed(1) });
      op(cung, (P === 2 ? .85 : (P === 0 ? ez(seg(c.u, .16, .28)) * .6 : 0)).toFixed(3));
      thanh.forEach((g, i) => {
        /* cả hai XONG ở c.u = .62, chặng B kết thúc ở .70 — còn 0,08 đứng yên */
        const a = ezo(seg(c.u, .38 + i * .08, .54 + i * .08));
        set(g.__r, { width: ((px(g.__b) - px(g.__a)) * a).toFixed(1) });
        op(g, ez(seg(c.u, .38 + i * .08, .44 + i * .08)).toFixed(3));
      });
      khn("k3c21-ng", P === 0 ? c.u * 10 : -1, .4, 2.8, .4);
    };
  }});

/* k3c22 · câu 21 · 9,4s — CẮT CỨNG ở u=.52
   A: bốn thứ của đời sống buộc vào một đĩa trăng đang trôi ra xa (sơ đồ, nền giấy có sắc + ảnh mờ)
   B: VIDEO THẬT trăng mọc trên sa mạc — "một vật thể đang lặng lẽ rời đi",
      kèm một ô vuông cỡ con tem để so (3,8 cm mỗi năm) */
DANGKY({ id: "k3c22", steps: 0, say: [CAU[21]],
  html: NEN("lanh", "k3c22-a") + SV(0.16, "nen", "k3c22-mo") +
        VI("k3c22-b", "k3-trangmoc.mp4", 0.3, { tu: 0.4, dai: 7.2, toc: .6, loc: "contrast(1.08) saturate(1.06) brightness(1.06)" }) +
        SV(0.8, "ve") +
        '<div class="hud">' + nguon("k3c22-ng", "Video: Vườn quốc gia Joshua Tree, Mỹ (NPS) · Phạm vi công cộng") + '</div>',
  anim: root => {
    const N = sv(root, "nen"), V = sv(root, "ve");
    const nhip = chatLieu(N, "k3c22", "#6E93AB", 11);
    const gA = el("g", {}, V);
    const goc = [[186, 452], [456, 530], [792, 522], [1050, 440]];
    const soi = goc.map(() => el("path", { d: "", fill: "none", stroke: "#8794A0",
      "stroke-width": 2.6, "stroke-dasharray": "9 8", opacity: 0 }, gA));
    const mtA = diaMT(gA, "k3c22", 740, 162, 92);
    const vat = [];
    { const g = el("g", { opacity: 0 }, gA);      /* sóng = con nước */
      el("path", { d: "M-80,0 q40,-34 80,0 q40,34 80,0 M-80,36 q40,-34 80,0 q40,34 80,0",
        fill: "none", stroke: BIEN, "stroke-width": 10, "stroke-linecap": "round" }, g);
      set(g, { transform: "translate(" + goc[0][0] + " " + goc[0][1] + ")" }); vat.push(g); }
    { const g = el("g", { opacity: 0 }, gA);      /* tờ lịch */
      el("rect", { x: -70, y: -58, width: 140, height: 116, rx: 10, fill: "#FFFFFF",
        stroke: "#5D6A72", "stroke-width": 4 }, g);
      el("rect", { x: -70, y: -58, width: 140, height: 30, rx: 10, fill: SANHO }, g);
      pha(g, 0, 14, 25, .5, "#2F3A46", "#E4E7E2");
      set(g, { transform: "translate(" + goc[1][0] + " " + goc[1][1] + ")" }); vat.push(g); }
    { const g = el("g", { opacity: 0 }, gA);      /* nhánh san hô */
      el("ellipse", { cx: 0, cy: 62, rx: 86, ry: 14, fill: "#8E4536", opacity: .32 }, g);
      el("path", { d: "M0,62 L0,6", fill: "none", stroke: "#B2563F", "stroke-width": 20,
        "stroke-linecap": "round" }, g);
      for (let i = 0; i < 5; i++) {
        const a = (-1 + i * .5) * .62;            /* xoè đều sang hai bên */
        el("path", { d: "M0,10 Q" + (46 * Math.sin(a)).toFixed(1) + "," + (-34 - 8 * Math.abs(i - 2)) +
          " " + (94 * Math.sin(a)).toFixed(1) + "," + (-16 - 74 * Math.cos(a)).toFixed(1),
          fill: "none", stroke: i % 2 ? SANHO : "#C96650",
          "stroke-width": (16 - Math.abs(i - 2) * 2).toFixed(1), "stroke-linecap": "round" }, g);
      }
      set(g, { transform: "translate(" + goc[2][0] + " " + goc[2][1] + ")" }); vat.push(g); }
    { const g = el("g", { opacity: 0 }, gA);      /* vành nhật thực */
      gradB(gA, "k3c22-sq", [[0, NHAT, .5], [.45, NHAT, .16], [1, NHAT, 0]]);
      el("circle", { cx: 0, cy: 0, r: 130, fill: "url(#k3c22-sq)" }, g);
      el("circle", { cx: 0, cy: 0, r: 58, fill: NHAT }, g);
      el("circle", { cx: 0, cy: 0, r: 47, fill: "#0E1726" }, g);
      set(g, { transform: "translate(" + goc[3][0] + " " + goc[3][1] + ")" }); vat.push(g); }
    /* B: ô vuông cỡ con tem */
    const gB = el("g", { opacity: 0 }, V);
    const tem = el("g", { opacity: 0 }, gB);
    el("rect", { x: 1010, y: 436, width: 126, height: 148, rx: 5, fill: "#FFF8E8",
      stroke: "#FFE3A6", "stroke-width": 3.4 }, tem);
    for (let i = 0; i < 10; i++) {
      el("circle", { cx: 1010 + i * 14, cy: 436, r: 5, fill: "#06101C" }, tem);
      el("circle", { cx: 1010 + i * 14, cy: 584, r: 5, fill: "#06101C" }, tem);
    }
    pha(tem, 1073, 510, 40, .5, "#C8A95E", "#FFF8E8");
    const muiB = el("path", { d: "M986,510 L812,510", fill: "none", stroke: VANG,
      "stroke-width": 4, "stroke-linecap": "round", opacity: 0 }, gB);
    chan(V, "k3c22", .55);
    return c => {
      const A = c.u < .52;
      hien("k3c22-a", A); hien("k3c22-mo", A); hien("k3c22-b", !A);
      op(gA, A ? 1 : 0); op(gB, A ? 0 : 1);
      if (A) KB(root, c, seg(c.u, 0, .52), [28, -28, -12, 14, 1.0, 1.12]);
      else   KB(root, c, seg(c.u, .52, 1), [-24, 20, 12, -12, 1.16, 1.0]);
      nhip(c.t);
      const e = ezo(seg(c.u, .10, .50)), dx = 180 * e;
      const mx = 740 + dx * .9, my = 162 - dx * .34;
      set(mtA, { transform: "translate(" + (dx * .9).toFixed(1) + "," + (-dx * .34).toFixed(1) +
        ") scale(" + (1 - .2 * e) + ")" });
      vat.forEach((g, i) => op(g, ez(seg(c.u, .03 + i * .07, .12 + i * .07)).toFixed(3)));
      soi.forEach((p, i) => {
        set(p, { d: "M" + goc[i][0] + "," + goc[i][1] + " Q" + ((goc[i][0] + mx) / 2).toFixed(1) + "," +
          ((goc[i][1] + my) / 2 - 92).toFixed(1) + " " + mx.toFixed(1) + "," + my.toFixed(1),
          "stroke-dashoffset": (-c.t * 18).toFixed(1) });
        op(p, (ez(seg(c.u, .07 + i * .07, .16 + i * .07)) * .85).toFixed(3));
      });
      op(tem, ez(seg(c.u, .62, .74)));
      set(tem, { transform: "translate(0," + (3 * Math.sin(c.t * 1.4)).toFixed(2) + ")" });
      op(muiB, ez(seg(c.u, .74, .84)) * .9); veDan(muiB, ezo(seg(c.u, .74, .92)));
      khn("k3c22-ng", A ? -1 : (c.u - .52) * 10, .4, 3.2, .4);
    };
  }});

/* ═══════════════════════════════════════════════════════════════════════════
   ĐOẠN 45–49 — ĐÓNG
   ═══════════════════════════════════════════════════════════════════════════ */

/* k3c23 · câu 22 · 8,5s — CÚ ĐÓNG CỦA CẢ TẬP. CẮT CỨNG ở u=.40
   A: rạn Great Barrier nhìn từ trên (ảnh thật) + một vệt sáng chạy dọc rạn
      — "dài hàng trăm cây số"
   B: VIDEO THẬT của NOAA: cả một đầu san hô nhả trứng trắng xoá lên mặt nước.
      Đây là chỗ cú gài ở khối 1 NỔ. Không chữ, không số — chỉ để hình nói. */
DANGKY({ id: "k3c23", steps: 0, say: [CAU[22]],
  /* ── KHUÔN HÌNH CÚ GÀI — CHỐT VỚI KHỐI 1 ngày 28/11/2026 ─────────────────
     Cú gài ở k1c04 (giây 28–36) và cú nổ ở đây phải mở bằng ĐÚNG MỘT KHUÔN
     HÌNH, nếu không thì mười một phút sau người xem không nhận ra là cùng một
     thứ (luật L10 của bản soát: "cú gài phải gài một KHUÔN HÌNH, không phải
     một chủ đề"). Bốn thông số đã chốt, khối 1 dùng y hệt ở nhịp 2 của k1c04:
         tệp   anh/k3-ran-hardy.jpg  (1920×1080, bản cắt 16:9 duy nhất của cả tập)
         pos   "50% 42%"
         máy   đẩy VÀO, z 1.02 → 1.10, không lia ngang
         cam   biên độ x = ±6
         lọc   saturate(1.0) — giữ nguyên màu xanh ngọc của ảnh gốc làm mốc nhận ra
     Bản cũ để saturate(1.2) và máy quay ĐẨY RA (z 1.24 → 1.03) với x = ±30,
     nên dù cùng tấm ảnh thì khuôn hình vẫn khác hẳn khối 1. */
  html: IMG("k3c23-a", "k3-ran-hardy.jpg", 0.26, { pos: "50% 42%", loc: "contrast(1.08) saturate(1.0) brightness(1.02)" }) +
        VI("k3c23-b", "k3-sanho-de.mp4", 0.34, { tu: 0.2, dai: 8.6, toc: .62, pos: "50% 46%", loc: "contrast(1.1) saturate(1.1) brightness(1.06)" }) +
        SV(0.9, "ve") +
        '<div class="hud">' + nguon("k3c23-n1", "Ảnh: rheins — rạn Hardy, Great Barrier Reef, Úc · CC BY 3.0") +
        nguon("k3c23-n2", "Video: san hô nhả trứng — NOAA, vịnh Mexico · Phạm vi công cộng") + '</div>',
  anim: root => {
    const V = sv(root, "ve");
    const gA = el("g", {}, V);
    /* SỬA 28/11 · GỢI Ý: "dài hàng trăm cây số" mà trên hình chỉ là MỘT NÉT
       KEM TRƠN vạch chéo — không đầu mút, không số, không thước; nó chỉ là một
       cái gạch. Nay là một THANH THƯỚC CÓ HAI ĐẦU MÚT và một nhãn ở giữa.
       Toạ độ kéo vào trong hộp an toàn: x ∈ [150, 1150], y ∈ [168, 462]. */
    const vet = el("path", { d: "M150,462 C380,392 606,330 876,246 C986,212 1066,190 1150,172",
      fill: "none", stroke: "#FFF6DC", "stroke-width": 8, "stroke-linecap": "round", opacity: 0 }, gA);
    const mut = el("path", { d: "M150,428 L150,496 M1150,142 L1150,206", fill: "none",
      stroke: "#FFF6DC", "stroke-width": 7, "stroke-linecap": "round", opacity: 0 }, gA);
    /* nhãn đặt trong một thẻ tối: chữ kem trên mặt rạn xanh ngọc sáng thì
       viền chữ không đủ, đã chụp khung và thấy nó trôi mất. */
    const the23 = el("g", { opacity: 0 }, gA);
    el("rect", { x: 492, y: 268, width: 296, height: 62, rx: 31, fill: "#05141E", opacity: .66 }, the23);
    const nhan23 = nhanSV(the23, 640, 311, "hàng trăm km", "#FFF6DC", 34, "middle", 800);
    op(nhan23, 1);
    const hao = [];
    for (let i = 0; i < 9; i++) hao.push(el("circle", { cx: 0, cy: 0, r: 6, fill: "#FFF6DC", opacity: 0 }, gA));
    /* B: lớp trứng trôi lên thêm, chồng lên video cho dày */
    const gB = el("g", { opacity: 0 }, V);
    const tr = [];
    for (let i = 0; i < 54; i++) tr.push(el("circle", { cx: 0, cy: 0,
      r: (1.4 + rn(i, 111) * 2.8).toFixed(2), fill: "#FFF3E0", opacity: 0 }, gB));
    chan(V, "k3c23", .62);
    return c => {
      const A = c.u < .40;
      hien("k3c23-a", A); hien("k3c23-b", !A);
      op(gA, A ? 1 : 0); op(gB, A ? 0 : 1);
      if (A) KB(root, c, seg(c.u, 0, .40), [-6, 6, 0, 0, 1.02, 1.10]);
      else   KB(root, c, seg(c.u, .40, 1), [22, -24, -12, 12, 1.02, 1.17]);
      op(vet, ez(seg(c.u, .04, .12)) * .92); veDan(vet, ezo(seg(c.u, .04, .30)));
      op(mut, ez(seg(c.u, .06, .14)) * .92);
      op(the23, ez(seg(c.u, .12, .20)).toFixed(3));
      hao.forEach((e, i) => {
        const u = seg(c.u, .06 + i * .012, .36 + i * .012);
        const p = diem(vet, cl(u * (i + 1) / 9, 0, 1));
        set(e, { cx: p[0].toFixed(1), cy: p[1].toFixed(1), r: (4.2 + 1.8 * Math.sin(c.t * 2.5 + i)).toFixed(2) });
        op(e, (ez(u) * .9).toFixed(2));
      });
      tr.forEach((e, i) => {
        const ph = (c.t * (.055 + rn(i, 112) * .05) + rn(i, 113)) % 1;
        set(e, { cx: (-70 + rn(i, 114) * 1440).toFixed(1), cy: (800 - ph * 920).toFixed(1) });
        op(e, (Math.sin(ph * Math.PI) * (.28 + rn(i, 115) * .42)).toFixed(2));
      });
      khn("k3c23-n1", A ? c.u * 10 : -1, .4, 3.0, .4);
      khn("k3c23-n2", A ? -1 : (c.u - .40) * 10, .5, 3.6, .4);
    };
  }});

/* k3c24 · câu 23 · 4,0s — ba thứ san hô KHÔNG có, gạch bỏ từng cái.
   Nền là VIDEO THẬT (rạn đang nhả trứng) làm tối đi — không phải nền trắng trơn. */
DANGKY({ id: "k3c24", steps: 0, say: [CAU[23]],
  html: VI("k3c24-v", "k3-sanho-khoi.mp4", 0.22, { tu: 0.2, dai: 7.0, toc: .5, loc: "contrast(1.05) saturate(.9) brightness(.52)" }) +
        SV(0.84, "ve") +
        '<div class="hud">' + nguon("k3c24-ng", "Biểu tượng: Lucide · ISC &nbsp;·&nbsp; Video: san hô — NOAA, vịnh Mexico · Phạm vi công cộng") + '</div>',
  anim: root => {
    const V = sv(root, "ve");
    el("rect", { x: -400, y: -300, width: 2100, height: 1400, fill: "#04121C", opacity: .34 }, V);
    /* BA BIỂU TƯỢNG LẤY TỪ BỘ LUCIDE (ISC) — mắt, não, dấu chân.
       Bản cũ vẽ tay: "bộ não" ra một cục trắng vô hình thù. Không vẽ tay nữa (§15.4). */
    const XS = [300, 640, 980], CY = 350;
    const g1 = el("g", { opacity: 0 }, V);
    lucide(g1, LU_EYE, XS[0], CY, 7.2, "#F2F8FB", 1.7);
    const g2 = el("g", { opacity: 0 }, V);
    lucide(g2, LU_BRAIN, XS[1], CY, 7.2, "#F2F8FB", 1.7);
    const g3 = el("g", { opacity: 0 }, V);
    lucide(g3, LU_FOOT, XS[2], CY, 7.2, "#F2F8FB", 1.7);
    const gs = [g1, g2, g3];
    const xs = XS.map(x => { const g = veX(V, x, CY, 92, DO); op(g, 0); return g; });
    return c => {
      KB(root, c, c.u, [0, 0, -10, 10, 1.0, 1.1]);
      gs.forEach((g, i) => op(g, ez(seg(c.u, .01 + i * .18, .10 + i * .18)).toFixed(3)));
      xs.forEach((g, i) => {
        op(g, ez(seg(c.u, .08 + i * .18, .16 + i * .18)).toFixed(3));
        set(g, { transform: "rotate(" + (2.4 * Math.sin(c.t * 2.7 + i)).toFixed(2) + " " + XS[i] + " " + CY + ")" });
      });
      khn("k3c24-ng", c.t, .4, 3.0);
    };
  }});

/* k3c25 · câu 24 · 5,1s — CẮT CỨNG ở u=.56
   A: hai đêm cạnh nhau trên nền trời sao thật — đêm sau sáng hơn đêm trước
   B: ảnh polyp thật (NOAA) + một glyph protein phát sáng xanh */
DANGKY({ id: "k3c25", steps: 0, say: [CAU[24]],
  html: IMG("k3c25-a", "k3-sao.jpg", 0.18, { loc: "contrast(1.12) saturate(1.06) brightness(.42)" }) +
        IMG("k3c25-b", "k3-polyp.jpg", 0.3, { loc: "contrast(1.1) saturate(1.1) brightness(.88)" }) +
        SV(0.84, "ve") +
        '<div class="hud">' + nguon("k3c25-n1", "Ảnh nền: NPS / Jacob W. Frank — dải Ngân Hà, Mỹ · Phạm vi công cộng") +
        nguon("k3c25-n2", "Ảnh: polyp san hô — NOAA, vịnh Mexico · Phạm vi công cộng") + '</div>',
  anim: root => {
    const V = sv(root, "ve");
    const gA = el("g", {}, V);
    el("rect", { x: -400, y: -300, width: 2100, height: 1400, fill: "#050B16", opacity: .5 }, gA);
    /* ── SỬA 28/11 · NÊN SỬA ───────────────────────────────────────────────
       Câu là "nhận ra rằng ĐÊM NAY SÁNG HƠN ĐÊM QUA", nhưng hai ô đêm cạnh nhau
       sáng gần như bằng nhau — chênh lệch quá nhỏ để mắt bắt được trong 2 giây.
       Nay kéo giãn hẳn: ô trái brightness(.34), ô phải brightness(.92) áp lên
       chính nhóm, và đĩa trăng bên phải TO HƠN 1,4 LẦN (46 → 64). */
    const SANG = [.34, .92], RT = [46, 64];
    const o = [0, 1].map(i => {
      const g = el("g", { opacity: 0 }, gA);
      const x = 168 + i * 500;
      g.style.filter = "brightness(" + SANG[i] + ")";
      el("rect", { x: x, y: 136, width: 444, height: 444, rx: 16, fill: "#09131F", opacity: .72,
        stroke: "#2B4258", "stroke-width": 3 }, g);
      el("rect", { x: x, y: 406, width: 444, height: 174, fill: "#0E2033", opacity: .85 }, g);
      gradB(gA, "k3c25-q" + i, [[0, "#DCEAF6", .5], [.42, "#B8D2E6", .15], [1, "#B8D2E6", 0]]);
      g.__q = el("circle", { cx: x + 316, cy: 232, r: 196, fill: "url(#k3c25-q" + i + ")", opacity: 0 }, g);
      pha(g, x + 316, 232, RT[i], i ? .5 : .40, "#F4F1E8", "#0F1B2C");
      g.__s = el("rect", { x: x, y: 136, width: 444, height: 444, rx: 16, fill: "#CFE3F2", opacity: 0 }, g);
      return g;
    });
    const gB = el("g", { opacity: 0 }, V);
    gradB(gB, "k3c25-pg", [[0, "#BDF0FF", .6], [.45, "#6FD0F2", .2], [1, "#6FD0F2", 0]]);
    const halo = el("circle", { cx: 640, cy: 388, r: 190, fill: "url(#k3c25-pg)", opacity: 0 }, gB);
    /* GLYPH PROTEIN — bản cũ là một nét xanh nhạt vẽ nguệch, đọc ra như vết
       xước trên ảnh. Nay dùng ĐÚNG hình "hai cánh cửa" đã chốt cho k2c45 của
       khối 2: hai cánh cửa bo góc TÁCH HẲN RA HAI BÊN (biên độ mở 46 % bề
       ngang, hơn mức 40 % tối thiểu) để lọt một chùm sáng xanh xuyên qua.
       Một protein, một hình, hai lần xuất hiện trong tập. */
    const pr = el("g", { opacity: 0 }, gB);
    const prin = el("g", { transform: "translate(640 388)" }, pr);
    const chum = el("rect", { x: -26, y: -150, width: 52, height: 300, rx: 26,
      fill: "#BDF0FF", opacity: .8 }, prin);
    const canh = [-1, 1].map(k => {
      const g = el("g", {}, prin);
      el("rect", { x: k < 0 ? -104 : 8, y: -110, width: 96, height: 220, rx: 22,
        fill: "#0C2A3A", opacity: .92, stroke: "#BDF0FF", "stroke-width": 5 }, g);
      el("circle", { cx: k < 0 ? -26 : 26, cy: 0, r: 8, fill: "#BDF0FF" }, g);
      return g;
    });
    chan(V, "k3c25", .6);
    return c => {
      const A = c.u < .56;
      hien("k3c25-a", A); hien("k3c25-b", !A);
      op(gA, A ? 1 : 0); op(gB, A ? 0 : 1);
      if (A) KB(root, c, seg(c.u, 0, .56), [0, 0, 10, -10, 1.0, 1.07]);
      else   KB(root, c, seg(c.u, .56, 1), [-18, 16, -10, 10, 1.14, 1.02]);
      o.forEach((g, i) => {
        op(g, ez(seg(c.u, .02 + i * .14, .12 + i * .14)).toFixed(3));
        op(g.__q, ((i ? .98 : .4) * ez(seg(c.u, .06 + i * .14, .22 + i * .14))).toFixed(3));
        op(g.__s, ((i ? .11 : .035) * ez(seg(c.u, .06 + i * .14, .22 + i * .14))).toFixed(3));
      });
      op(halo, (ez(seg(c.u, .62, .76)) * (.7 + .26 * Math.sin(c.t * 2.3))).toFixed(3));
      op(pr, ez(seg(c.u, .62, .74)).toFixed(3));
      /* hai cánh cửa MỞ ra 46 % bề ngang; chùm sáng chỉ hiện khi cửa đã mở */
      const mo = ezo(seg(c.u, .70, .92));
      canh.forEach((g, k) => set(g, { transform: "translate(" + ((k ? 1 : -1) * 92 * mo).toFixed(1) + ",0)" }));
      op(chum, (mo * (.72 + .24 * Math.sin(c.t * 2.5))).toFixed(3));
      set(prin, { transform: "translate(640 388) scale(" + (1 + .04 * Math.sin(c.t * 2.5)).toFixed(3) + ")" });
      khn("k3c25-n1", A ? c.u * 10 : -1, .4, 2.6, .4);
      khn("k3c25-n2", A ? -1 : (c.u - .56) * 10, .3, 2.4, .4);
    };
  }});

/* k3c26 · câu 25 · 5,2s — san hô não đang nhả trứng (ảnh NOAA thật).
   ĐỒ HOẠ PHẢI ĐÚNG LỜI MỚI: "đúng vào mấy đêm SAU rằm" — nên dãy pha trăng vẽ
   RẰM rồi BA ĐÊM SAU RẰM (khuyết dần), và cái sáng lên là một trong ba đêm sau,
   KHÔNG phải cái rằm. Bản cũ vẽ "đêm nào trăng tròn" và đã bị sửa lời. */
DANGKY({ id: "k3c26", steps: 0, say: [CAU[25]],
  html: IMG("k3c26-a", "k3-sanho-nao.jpg", 0.3, { loc: "contrast(1.1) saturate(1.08) brightness(1.0)" }) +
        SV(0.9, "ve") +
        '<div class="hud">' + nguon("k3c26-ng", "Ảnh: Emma Hickerson / NOAA — san hô não, vịnh Mexico · Phạm vi công cộng") + '</div>',
  anim: root => {
    const V = sv(root, "ve");
    gradB(V, "k3c26-q", [[0, "#EDF6FF", .34], [.4, "#BCD8EE", .12], [1, "#BCD8EE", 0]]);
    const q = el("circle", { cx: 266, cy: 134, r: 290, fill: "url(#k3c26-q)", opacity: 0 }, V);
    /* dải pha: rằm (0,50) rồi ba đêm sau rằm (0,56 / 0,62 / 0,68) */
    /* ── SỬA 28/11 · GỢI Ý ─────────────────────────────────────────────────
       Bốn pha trăng cũ quá nhỏ (r = 34) và quá giống nhau (.50 .56 .62 .68 —
       bốn đĩa gần tròn như nhau), nhét trong một viên thuốc ở GÓC DƯỚI TRÁI.
       Chủ ý đúng nhưng mắt không đọc ra "khuyết dần". Nay: phóng cụm lên 1,8
       lần (r 34 → 61), đưa lên GIỮA DƯỚI khung, và cường điệu độ khuyết
       (.50 .62 .74 .86). Vòng nhấn dày 4 px, màu #F2C14E.
       Đo hộp: cụm rộng 640 px đặt ở x ∈ [320, 960], cao y ∈ [476, 672] —
       nằm trong vùng an toàn, và không đè lên dòng nguồn ở x = 66. */
    const dai = el("g", { opacity: 0 }, V);
    const X26 = 388, B26 = 168, Y26 = 574;
    el("rect", { x: 320, y: 476, width: 640, height: 194, rx: 97, fill: "#05121C", opacity: .55 }, dai);
    const PH = [.50, .62, .74, .86];
    const ph = PH.map((p, i) => pha(dai, X26 + i * B26, Y26, 61, p, "#FFF6E2", "#1A2434"));
    const vong = el("circle", { cx: X26, cy: Y26, r: 76, fill: "none", stroke: "#F2C14E",
      "stroke-width": 4, opacity: 0 }, dai);
    chan(V, "k3c26", .5);
    return c => {
      KB(root, c, c.u, [-24, 20, 12, -12, 1.16, 1.02]);
      op(q, (ez(seg(c.u, .02, .20)) * (.8 + .18 * Math.sin(c.t * 1.5))).toFixed(3));
      op(dai, ez(seg(c.u, .10, .24)).toFixed(3));
      ph.forEach((g, i) => op(g, (.42 + .58 * ez(seg(c.u, .14 + i * .09, .26 + i * .09))).toFixed(3)));
      /* vòng nhấn trượt từ rằm sang đêm thứ ba sau rằm */
      const k = ezo(seg(c.u, .36, .80));
      set(vong, { cx: (X26 + 3 * B26 * k).toFixed(1), r: (74 + 5 * Math.sin(c.t * 2.6)).toFixed(2) });
      op(vong, (ez(seg(c.u, .34, .44)) * (.8 + .2 * Math.sin(c.t * 2.6))).toFixed(3));
      khn("k3c26-ng", c.t, .4, 3.1);
    };
  }});

/* k3c27 · câu 26 · 4,1s — VIDEO THẬT: trăng mọc trên sa mạc Joshua Tree (NPS). */
DANGKY({ id: "k3c27", steps: 0, say: [CAU[26]],
  html: VI("k3c27-v", "k3-trangmoc.mp4", 0.3, { tu: 1.6, dai: 6.2, toc: .7, loc: "contrast(1.1) saturate(1.1) brightness(1.1)" }) +
        SV(0.9, "ve") +
        '<div class="hud">' + nguon("k3c27-ng", "Video: Vườn quốc gia Joshua Tree, Mỹ (NPS) · Phạm vi công cộng") + '</div>',
  anim: root => {
    const V = sv(root, "ve"); chan(V, "k3c27", .5); viND(V, "k3c27", .36);
    return c => {
      KB(root, c, c.u, [20, -18, -10, 10, 1.03, 1.14]);
      khn("k3c27-ng", c.t, .35, 3.1);
    };
  }});

/* k3c28 · câu 27 · 6,3s — ba cái máy: đồng hồ, tờ lịch, máy bơm.
   Sơ đồ cơ chế (ngoại lệ §15.1.3), nền giấy có chuyển sắc + ảnh tranh làm mờ,
   cả ba vật đều CHẠY THẬT suốt cảnh (kim quay, pha trăng đổi, pít-tông lên xuống). */
DANGKY({ id: "k3c28", steps: 0, say: [CAU[27]],
  html: NEN("am") + SV(0.18, "nen") + SV(0.8, "ve"),
  anim: root => {
    const N = sv(root, "nen"), V = sv(root, "ve");
    const nhip = chatLieu(N, "k3c28", "#A98C56", 11);
    const XS = [292, 640, 988];
    /* 1 · đồng hồ */
    const dh = el("g", { opacity: 0 }, V);
    el("circle", { cx: XS[0], cy: 352, r: 106, fill: "#FFFFFF", stroke: "#3E4A52", "stroke-width": 7 }, dh);
    for (let i = 0; i < 12; i++) {
      const a = i * Math.PI / 6;
      el("line", { x1: (XS[0] + 84 * Math.sin(a)).toFixed(1), y1: (352 - 84 * Math.cos(a)).toFixed(1),
        x2: (XS[0] + 95 * Math.sin(a)).toFixed(1), y2: (352 - 95 * Math.cos(a)).toFixed(1),
        stroke: "#8794A0", "stroke-width": 4, "stroke-linecap": "round" }, dh);
    }
    const kim1 = el("line", { x1: XS[0], y1: 352, x2: XS[0], y2: 294, stroke: "#3E4A52",
      "stroke-width": 8, "stroke-linecap": "round" }, dh);
    const kim2 = el("line", { x1: XS[0], y1: 352, x2: XS[0], y2: 270, stroke: BIEN,
      "stroke-width": 5, "stroke-linecap": "round" }, dh);
    el("circle", { cx: XS[0], cy: 352, r: 9, fill: "#3E4A52" }, dh);
    /* 2 · tờ lịch */
    const li = el("g", { opacity: 0 }, V);
    el("rect", { x: XS[1] - 106, y: 250, width: 212, height: 204, rx: 12, fill: "#FFFFFF",
      stroke: "#3E4A52", "stroke-width": 6 }, li);
    el("rect", { x: XS[1] - 106, y: 250, width: 212, height: 48, rx: 12, fill: SANHO }, li);
    const op4 = [];
    for (let r = 0; r < 3; r++) for (let i = 0; i < 4; i++)
      op4.push(pha(li, XS[1] - 72 + i * 48, 338 + r * 44, 15, 0, "#2F3A46", "#E2E6E0"));
    /* 3 · máy bơm */
    const mb = el("g", { opacity: 0 }, V);
    el("rect", { x: XS[2] - 76, y: 302, width: 152, height: 174, rx: 10, fill: "#FFFFFF",
      stroke: "#3E4A52", "stroke-width": 6 }, mb);
    const nuoc = el("rect", { x: XS[2] - 70, y: 396, width: 140, height: 74, fill: BIEN, opacity: .9 }, mb);
    const can = el("rect", { x: XS[2] - 14, y: 202, width: 28, height: 110, rx: 8, fill: "#3E4A52" }, mb);
    el("rect", { x: XS[2] - 58, y: 184, width: 116, height: 26, rx: 13, fill: "#3E4A52" }, mb);
    return c => {
      KB(root, c, c.u, [-20, 20, -10, 10, 1.0, 1.1]);
      nhip(c.t);
      op(dh, ez(seg(c.u, .01, .09))); op(li, ez(seg(c.u, .20, .28))); op(mb, ez(seg(c.u, .40, .48)));
      set(kim1, { transform: "rotate(" + (c.t * 30).toFixed(1) + " " + XS[0] + " 352)" });
      set(kim2, { transform: "rotate(" + (c.t * 132).toFixed(1) + " " + XS[0] + " 352)" });
      op4.forEach((g, i) => {
        const p = ((c.t * .22 + i / 12) % 1);
        const r = g.lastChild;
        const k = Math.cos(p * Math.PI * 2), sang = p < .5 ? 1 : 0;
        const cx = XS[1] - 72 + (i % 4) * 48, cy = 338 + Math.floor(i / 4) * 44;
        set(r, { d: "M" + cx + "," + (cy - 15) + " A15,15 0 0 " + (sang ? 1 : 0) + " " + cx + "," + (cy + 15) +
          " A" + (15 * Math.abs(k)).toFixed(2) + ",15 0 0 " + ((k < 0) === (sang === 1) ? 1 : 0) +
          " " + cx + "," + (cy - 15) + " Z" });
      });
      const b = (Math.sin(c.t * 2.1) + 1) / 2;
      set(can, { y: (202 + 34 * b).toFixed(1) });
      set(nuoc, { y: (388 + 46 * (1 - b)).toFixed(1), height: (82 - 46 * (1 - b)).toFixed(1) });
    };
  }});

/* k3c29 · câu 28 · 5,4s — tranh *Ánh trăng trên bãi biển Skagen* (Krøyer, 1883, PD),
   kèm một thước 3,8 cm vẽ ra ở chân khung. */
DANGKY({ id: "k3c29", steps: 0, say: [CAU[28]],
  /* SỬA 28/11 · GỢI Ý (luật L5: "thước chỉ đặt lên thứ nó đo được").
     Bản cũ vẽ một cây thước "3,8 cm" lên MẶT CÁT TRONG MỘT BỨC TRANH SƠN DẦU,
     nơi đoạn thước đó dài cỡ một mét cát — tỉ lệ thước không khớp tỉ lệ ảnh.
     Bỏ hẳn thước, chỉ giữ chữ "3,8 cm" trong một thẻ riêng. Và nâng saturate
     từ .74 lên 1.08 để bức tranh Đan Mạch bớt xám so với phần còn lại của tập. */
  html: IMG("k3c29-a", "k3-trangbien.jpg", 0.3, { loc: "contrast(1.14) saturate(1.08) brightness(.9)" }) +
        SV(0.9, "ve") +
        '<div class="hud">' + nguon("k3c29-ng", "Tranh: P. S. Krøyer, 1883 — bãi biển Skagen, Đan Mạch · Phạm vi công cộng") + '</div>',
  anim: root => {
    const V = sv(root, "ve");
    chan(V, "k3c29", .68);
    /* thẻ riêng, không phải thước đặt lên cát */
    const the29 = el("g", { opacity: 0 }, V);
    el("rect", { x: 522, y: 522, width: 236, height: 86, rx: 18, fill: "#06131E", opacity: .68,
      stroke: "#FFE6B4", "stroke-width": 2.4 }, the29);
    const nh = el("text", { x: 640, y: 580, fill: "#FFF1D4", "font-size": 42, "font-weight": 800,
      "font-family": "system-ui", "text-anchor": "middle" }, the29);
    nh.textContent = "3,8 cm";
    const nhn29 = nhanSV(the29, 640, 546, "mỗi năm", "#D9C49A", 19, "middle", 600);
    op(nhn29, 1);
    return c => {
      KB(root, c, c.u, [-30, 26, 14, -12, 1.26, 1.0]);
      op(the29, ez(seg(c.u, .30, .44)).toFixed(3));
      set(the29, { transform: "translate(0," + (3 * Math.sin(c.t * 1.3)).toFixed(2) + ")" });
      khn("k3c29-ng", c.t, .7, 4.2);
    };
  }});

/* k3c30 · câu 29 · 4,9s — NÚT "THÍCH". CẢNH DỰNG LẠI HẲN (§15.4).
   Bản cũ là một bàn tay giơ ngón cái VẼ TAY — chủ kênh đã bác.
   Nay: biểu tượng thumb_up của Material Symbols Rounded (Apache 2.0, Google),
   đặt trong một nút bấm có bóng, trên nền ẢNH RẠN THẬT. Không một nét vẽ tay nào. */
DANGKY({ id: "k3c30", steps: 0, say: [CAU[29]],
  /* SỬA 28/11 · NÊN SỬA: ảnh rạn nền bị đẩy bão hoà tới mức xanh neon — khung
     rực rỡ bất thường duy nhất cả tập, trông như lỗi bộ lọc. saturate về 1,05
     và hue-rotate(10deg) để kéo về lam-lục tự nhiên. */
  html: IMG("k3c30-a", "k3-ran.jpg", 0.24, { loc: "contrast(1.06) saturate(.68) hue-rotate(-10deg) brightness(1.04)" }) +
        SV(0.86, "ve") +
        /* dòng nguồn cũ gộp hai lời ghi công thành MỘT dòng dài 1.147 px, chạy
           gần hết chiều ngang khung (đo bằng getBoundingClientRect()). Rút gọn
           phần biểu tượng, vẫn đủ ghi công theo Apache 2.0. */
        '<div class="hud">' + nguon("k3c30-ng", "Ảnh: Chris Coccaro / NOAA — rạn san hô ở Bonaire, Caribê · Phạm vi công cộng" +
        " &nbsp;·&nbsp; Material Symbols · Apache 2.0") + '</div>',
  anim: root => {
    const V = sv(root, "ve");
    el("rect", { x: -400, y: -300, width: 2100, height: 1400, fill: "#04121C", opacity: .3 }, V);
    viND(V, "k3c30", .5);
    /* vòng sóng lan ra khi bấm */
    const song30 = [0, 1, 2].map(() => el("circle", { cx: 640, cy: 344, r: 0, fill: "none",
      stroke: "#FFFFFF", "stroke-width": 3, opacity: 0 }, V));
    const nut = el("g", {}, V);
    el("rect", { x: 462, y: 196, width: 356, height: 300, rx: 46, fill: "#06131E", opacity: .5 }, nut);
    el("rect", { x: 456, y: 188, width: 356, height: 300, rx: 46, fill: SANHO }, nut);
    el("rect", { x: 456, y: 188, width: 356, height: 96, rx: 46, fill: "#FFFFFF", opacity: .14 }, nut);
    /* biểu tượng Material Symbols: viewBox gốc 0 -960 960 960 */
    const ic = el("g", { transform: "translate(506 448) scale(0.27)" }, nut);
    el("path", { d: MS_THUMB, fill: "#FFFFFF" }, ic);
    const gach = el("rect", { x: 500, y: 532, width: 0, height: 7, rx: 3.5, fill: "#FFFFFF", opacity: .9 }, V);
    return c => {
      KB(root, c, c.u, [16, -14, -10, 10, 1.06, 1.0]);
      /* nút nảy lên rồi bị "bấm" xuống một nhịp */
      const vao = ezo(seg(c.u, .02, .22));
      const nhan = Math.max(0, Math.sin(cl(seg(c.u, .30, .50), 0, 1) * Math.PI));
      const k = (.72 + .28 * vao) * (1 - .11 * nhan);
      set(nut, { transform: "translate(640 344) scale(" + k.toFixed(3) + ") translate(-640 -344)" });
      op(nut, vao.toFixed(3));
      song30.forEach((e, i) => {
        const b = cl(seg(c.u, .34 + i * .13, .80 + i * .13), 0, 1);
        set(e, { r: (120 + 330 * ezo(b)).toFixed(1) });
        op(e, ((1 - b) * .42 * (b > 0 ? 1 : 0)).toFixed(3));
      });
      set(gach, { width: (280 * ezo(seg(c.u, .52, .86))).toFixed(1) });
      khn("k3c30-ng", c.t, .5, 4.0);
    };
  }});

/* k3c31 · câu 30 · 7,0s — CẮT CỨNG ở u=.52
   Bong bóng bình luận bay lên; glyph trong bong bóng là message-square-text
   của Lucide (ISC), không vẽ tay.
   A: trên ảnh rạn nhìn từ trên · B: trên VIDEO THẬT rạn đang nhả trứng */
DANGKY({ id: "k3c31", steps: 0, say: [CAU[30]],
  html: IMG("k3c31-a", "k3-ran-hardy.jpg", 0.22, { pos: "62% 40%", loc: "contrast(1.1) saturate(1.22) brightness(1.06)" }) +
        VI("k3c31-b", "k3-sanho-khoi.mp4", 0.24, { tu: 0.4, dai: 6.8, toc: .5, loc: "contrast(1.06) saturate(1.0) brightness(.72)" }) +
        SV(0.88, "ve") +
        '<div class="hud">' + nguon("k3c31-ng", "Biểu tượng: Lucide · ISC &nbsp;·&nbsp; Video: san hô — NOAA, vịnh Mexico · Phạm vi công cộng") + '</div>',
  anim: root => {
    const V = sv(root, "ve");
    const MAU = [SANHO, BIEN, "#6E8794", "#D08B3C"];
    const bong = [];
    for (let i = 0; i < 12; i++) {
      const g = el("g", { opacity: 0 }, V);
      const mau = MAU[i % 4], S = 2.9 + rn(i, 141) * 1.1;
      el("rect", { x: -14, y: -14, width: 24 * S + 28, height: 24 * S + 28, rx: 20,
        fill: "#05121C", opacity: .32 }, g);
      el("rect", { x: -18, y: -18, width: 24 * S + 28, height: 24 * S + 28, rx: 20, fill: mau, opacity: .95 }, g);
      const gi = el("g", { transform: "translate(" + (-4) + "," + (-4) + ") scale(" + S.toFixed(2) + ")" }, g);
      LU_CMT.forEach(d => el("path", { d: d, fill: "none", stroke: "#FFFFFF",
        "stroke-width": 2, "stroke-linecap": "round", "stroke-linejoin": "round" }, gi));
      bong.push(g);
    }
    chan(V, "k3c31", .55);
    return c => {
      const A = c.u < .52;
      hien("k3c31-a", A); hien("k3c31-b", !A);
      if (A) KB(root, c, seg(c.u, 0, .52), [-22, 20, 12, -12, 1.3, 1.12]);
      else   KB(root, c, seg(c.u, .52, 1), [18, -18, -10, 10, 1.0, 1.12]);
      /* ── SỬA 28/11 · GỢI Ý ─────────────────────────────────────────────
         Bản cũ cho bong bóng rơi lẫn vào MÉP KHUNG và bị cắt ở cả bốn góc —
         trông như lỗi chứ không như chủ ý. Nay vùng sinh bong bóng bị kẹp vào
         x ∈ [120, 1160], y ∈ [100, 600] (bong bóng rộng ~120 px nên mốc trái
         lùi thêm nửa bề rộng), và chúng MỜ DẦN TRƯỚC KHI CHẠM MÉP thay vì bị
         cắt: hệ số `ria` hạ opacity về 0 khi tâm bong bóng tới sát biên. */
      bong.forEach((g, i) => {
        const a = cl(seg(c.u, .01 + i * .072, .54 + i * .072), 0, 1);
        const x = 120 + rn(i, 142) * (1160 - 120 - 120);
        const y = 600 - (600 - 100) * ezo(a);
        set(g, { transform: "translate(" + x.toFixed(1) + "," + y.toFixed(1) + ") rotate(" +
          (5 * Math.sin(c.t * 1.2 + i)).toFixed(2) + ")" });
        const ria = cl((y - 100) / 70, 0, 1) * cl((600 - y) / 40 + 1, 0, 1);
        op(g, (ez(a / .14) * (1 - ez((a - .76) / .24)) * ria).toFixed(3));
      });
      khn("k3c31-ng", c.t, .5, 4.0);
    };
  }});

/* k3c32 · câu 31 · 3,5s — đóng: VIDEO THẬT trăng mọc + bảng tên kênh (CHỮ #3). */
DANGKY({ id: "k3c32", steps: 0, say: [CAU[31]],
  html: VI("k3c32-v", "k3-trangmoc.mp4", 0.3, { tu: 3.4, dai: 4.4, toc: .55, loc: "contrast(1.1) saturate(1.08) brightness(1.0)" }) +
        SV(0.9, "toi") +
        '<div class="hud">' +
        '<div class="tx" id="k3c32-te" style="left:0;top:300px;width:1280px;text-align:center">' +
        '<div style="font:300 48px/1.1 ' + F + ';letter-spacing:.30em;color:#FFFFFF;' +
        'text-shadow:0 2px 22px rgba(3,8,13,.9)">THẾ GIỚI VIỄN TƯỞNG</div>' +
        '<div id="k3c32-ke" style="margin:26px auto 0;height:2px;width:0;background:' + TRANG + '"></div>' +
        '</div>' + nguon("k3c32-ng", "Video: Vườn quốc gia Joshua Tree, Mỹ (NPS) · Phạm vi công cộng") + '</div>',
  anim: root => {
    const T = sv(root, "toi");
    gradL(T, "k3c32-g", 0, -200, 0, 820, [[0, "#06111D", .48], [.5, "#06111D", .3], [1, "#06111D", .66]]);
    el("rect", { x: -400, y: -300, width: 2100, height: 1400, fill: "url(#k3c32-g)" }, T);
    return c => {
      KB(root, c, c.u, [-18, 16, 10, -10, 1.12, 1.0]);
      kh("k3c32-te", c.u * 10, 1.2, 9.6, .5);
      const e = E("k3c32-ke");
      if (e) e.style.width = (300 * ezo(seg(c.u, .20, .58))).toFixed(1) + "px";
      khn("k3c32-ng", c.t, .5, 2.9);
    };
  }});

})();
