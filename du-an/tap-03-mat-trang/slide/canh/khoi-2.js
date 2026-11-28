/* Khối 2 — TẬP 3 "Nếu Mặt Trăng biến mất" — BẢN V3, DỰNG LẠI TỪ ĐẦU 28/11/2026
   CHỈ chủ khối này được ghi file này. Xem slide/HUONG-DAN-DUNG-CANH.md
   ------------------------------------------------------------------
   đoạn 21–36 · 49 câu · giây 255,224 → 538,844 (283,6 s) · 49 cảnh DANGKY
   + 29 mốc CẮT CỨNG bên trong cảnh = 78 lần đổi hình = 16,5 lần/phút
   (bảng mốc cắt nằm ở canh/nguon-khoi-2.md — §11.11 cấm đếm bằng ffmpeg)

   BẢN V3 KHÁC BẢN CŨ Ở ĐÂU (PHẦN 15 của hướng dẫn, chốt 28/11/2026)
   · §15.1 TÌM TRƯỚC VẼ SAU — 22 tệp tư liệu thật (15 ảnh + 7 video) đi trước,
     đồ hoạ tự dựng chỉ còn ở chỗ ý vốn trừu tượng: hiệu lực triều giữa hai
     đầu Trái Đất, luật nghịch đảo bậc ba, phép chia 390³, hai dải nghiêng
     trục Laskar/Lissauer, cơ chế phanh triều, mặt đồng hồ độ dài ngày.
   · §15.2 KHÔNG CẢNH RỖNG — mọi cảnh có ít nhất HAI trong ba: ảnh/video thật ·
     nền chuyển sắc có chất liệu (K2.nen vẽ cả hạt nhiễu tất định) · lớp đồ hoạ
     chuyển động thật. Cảnh "ba vòng tròn trên thanh trượt xám" của bản cũ đã bị
     chủ kênh bác và KHÔNG được dựng lại: chỗ đó (câu 8–10, luật chia hai/chia
     ba lần) nay là ba ô kính trên nền VIDEO dải Ngân Hà thật.
   · §15.3 VIDEO THẬT — 7 tệp trong video/, dùng qua VID(). Không gọi play().
   · §15.6 THỜI GIAN CHUẨN HOÁ — nhịp trải cả cảnh dùng c.u, nhịp bám câu nói
     dùng c.since(k), c.t tuyệt đối chỉ cho nhịp dưới 1,5 giây (chớp, cắt cứng).
     Mọi mốc cắt cứng đặt theo c.u, nên đổi giọng đọc là cảnh tự co giãn.

   MÀU — SẮC NÉT HƠN BẢN CŨ. Bản cũ lọc ảnh ở brightness .26–.46 /
   saturate .5–.72 nên mọi khung xám xịt như nhau. Bản này: brightness
   .58–.86, saturate .92–1.12, và mỗi cụm có một sắc riêng (vàng Mặt Trời ·
   lam thép phép tính · đỏ đất trục nghiêng · lục lam rạn san hô).

   LỜI THOẠI: mảng S trích thẳng từ _chia-khoi.json (bản V3), không gõ tay.
   LUẬT: mọi chuyển động là hàm thuần của c.t / c.u. Không CSS animation,
   không hẹn giờ, không vòng lặp khung, không đồng hồ thật, không số ngẫu
   nhiên lúc vẽ (cần ngẫu nhiên thì rn(i,j), tất định).
   ------------------------------------------------------------------ */
(function () {
"use strict";

const S = [
  ">> Khoan đã.",
  "Mặt Trời nặng gấp bao nhiêu lần Mặt Trăng mà kéo yếu hơn?",
  "Vô lý.",
  "Thôi bạn ơi, thế là bạn lại không biết rồi.",
  "Mặt Trời nặng hơn Mặt Trăng khoảng hai mươi bảy triệu lần, chuyện đó thì đúng.",
  "Có điều thuỷ triều không sinh ra từ sức hút, mà từ cái hiệu giữa hai đầu.",
  "Nửa Trái Đất hướng về phía nó bị kéo mạnh hơn nửa bên kia một chút, và chính cái một chút ấy làm nước phồng lên.",
  "Trong vật lý thì có dăm bảy kiểu xa khác nhau.",
  "Xa kiểu lực hút thì chia hai lần cho khoảng cách, nghĩa là xa gấp đôi là yếu đi bốn lần, ánh sáng cũng vậy.",
  "Nhưng xa kiểu thuỷ triều thì khắc nghiệt hơn hẳn, vì nó chia tới ba lần, xa gấp đôi là yếu đi tám lần.",
  "Mà Mặt Trời thì ở xa hơn Mặt Trăng khoảng ba trăm chín mươi lần.",
  "Lấy ba trăm chín mươi nhân với ba trăm chín mươi rồi nhân ba trăm chín mươi lần nữa, ta được gần sáu mươi triệu.",
  "Đem hai mươi bảy triệu chia cho sáu mươi triệu thì còn khoảng không phẩy bốn năm, nghĩa là lực triều Mặt Trời chưa bằng một nửa Mặt Trăng, khớp đúng tỉ lệ hai phẩy hai lần ở trên.",
  "Thế là hết chuyện:",
  "Mặt Trăng thắng không nhờ to xác, mà nhờ nó ngồi gần.",
  "Nhưng nước mới chỉ là chỗ dễ nhìn thấy nhất thôi.",
  "Trái Đất đang nghiêng hai mươi ba phẩy bốn độ, và chính cái nghiêng đó cho ta bốn mùa, cho mùa gặt và mùa gió.",
  "Năm một nghìn chín trăm chín mươi ba, nhà thiên văn người Pháp Jacques Laskar cùng đồng nghiệp đăng trên tạp chí Nature một mô phỏng khiến cả giới giật mình.",
  "Không có Mặt Trăng ghìm lại, cái trục ấy có thể lắc hỗn loạn trong khoảng từ không đến tám mươi lăm độ.",
  "Nghiêng tới tám mươi lăm độ thì trục gần như nằm ngang, nên mỗi năm sẽ có vài tháng cả một vùng cực phơi hẳn ra Mặt Trời, rồi vài tháng chìm hẳn trong bóng tối, và mùa màng theo nghĩa ta đang hiểu sẽ không còn.",
  "Chỉ có điều, và đây là chỗ rất nhiều video bỏ qua, con số ấy về sau đã bị phản biện.",
  "Năm hai nghìn không trăm mười hai, nhóm của Jack Lissauer ở NASA chạy lại bài toán với nhiều điều kiện ban đầu hơn.",
  "Kết quả họ công bố trên tạp chí Icarus bình tĩnh hơn hẳn: trục của một Trái Đất không Mặt Trăng chủ yếu dao động trong khoảng mười đến năm mươi độ.",
  "Vẫn loạn hơn hai mươi ba phẩy bốn độ rất nhiều, nhưng không còn là cảnh hành tinh lộn nhào như người ta hay kể.",
  "Tôi nêu cả hai, vì đây là cuộc tranh luận chưa ngã ngũ.",
  "Rồi còn chuyện độ dài một ngày, mà ở đây Mặt Trăng đóng vai cái phanh.",
  "Ngay chỗ nó kéo nước phồng lên cũng là chỗ khối nước ấy cọ vào Trái Đất và hãm bớt vòng quay.",
  "Còn cái giá phải trả cho việc hãm đó là ba phẩy tám cm Mặt Trăng bị đẩy ra xa mỗi năm.",
  "Hai chuyện tưởng như rời nhau ấy thật ra chỉ là một.",
  "Theo các mô hình về thời Trái Đất mới có Mặt Trăng, một ngày khi đó chỉ dài chừng năm đến sáu tiếng.",
  "Thế nếu chưa từng có Mặt Trăng, thì hôm nay một ngày dài bao nhiêu?",
  "Trên mạng đang lan một con số rất phổ biến là sáu đến tám tiếng, nhưng tôi đi tìm gốc của nó mà không thấy nghiên cứu nào đứng ra chịu trách nhiệm, nên tôi không dùng.",
  "Nói chắc được thì chỉ chừng này: không có Mặt Trăng thì Trái Đất quay nhanh hơn, gió mạnh hơn, và hai chữ \"một ngày\" mang nghĩa khác hẳn.",
  "Tiếp theo đây tôi sẽ bước sang phần suy đoán, và trong suốt phần đó tôi vẫn luôn phân biệt rõ con số nào đã có người đo được, con số nào là do tôi tự rút ra.",
  "Vậy ta cùng giả sử rằng đêm mai mình ngẩng đầu lên, và trên trời trống không.",
  "Hoá ra ánh sáng mới là cái đổ trước, nước còn đổ sau.",
  "Một đêm rằm sáng hơn đêm không trăng rất nhiều lần.",
  "Với chúng ta thì đó là chuyện của thơ ca, nhưng với nhiều loài vật, đó là cái đồng hồ duy nhất chúng có.",
  "Theo một nghiên cứu đăng trên Nature năm hai nghìn không trăm linh ba, loài bọ hung ở Nam Phi lăn phân về tổ theo đường thẳng.",
  "Chúng giữ được đường thẳng ấy bằng cách đọc ánh trăng phân cực, một tín hiệu yếu hơn ánh nắng phân cực cả triệu lần.",
  "Vào những đêm không trăng, một loài bọ hung khác còn biết chuyển sang định hướng theo dải Ngân Hà, nghĩa là mất trăng thì ít ra chúng vẫn còn phương án hai.",
  "Nhưng loài đáng kể nhất thì chẳng có phương án nào khác.",
  "Ngoài khơi nước Úc, ở rạn Great Barrier, san hô không đẻ lẻ tẻ từng con mà đẻ đồng loạt cả rạn cùng một lúc, vào mấy đêm ngay sau rằm, mỗi năm một lần.",
  "Vậy làm sao chúng biết hôm nay là ngày mấy?",
  "Một nghiên cứu công bố năm hai nghìn không trăm linh bảy đã tìm ra trong san hô một thụ thể ánh sáng tên là cryptochrome, nó mở ra khi gặp ánh sáng xanh.",
  "Và ánh trăng tròn, dù chỉ sáng bằng một phần rất nhỏ ánh nắng, vẫn đủ để mở được nó.",
  "Còn lý do chúng buộc phải đẻ cùng một đêm thì nằm ở chỗ san hô không đi lại được.",
  "Trứng và tinh trùng chỉ có cơ hội gặp nhau nếu cả rạn cùng thả ra một lúc, trong cùng vùng nước.",
  "Lệch nhau vài đêm thì kết quả không phải là đẻ ít đi, mà là cả rạn gần như không có nổi một con non."
];

/* ═══════════════════════ BỘ ĐỒ NGHỀ CỦA KHỐI 2 ═══════════════════════ */
const K2 = {};
/* bảng màu — sáng và no hơn bản cũ một bậc */
const TR = "#F0EEE6",   /* bạc trăng, màu nhấn chính */
      BI = "#2F85AD",   /* nước */
      DA = "#D2924F",   /* đất */
      NH = "#F7C948",   /* Mặt Trời */
      SH = "#EE7B5E",   /* sinh vật, dải Laskar */
      LA = "#6FC3E8",   /* dải Lissauer, đo được */
      DO = "#E2543C",   /* phủ định */
      C2 = "#9FB8C9",   /* chữ phụ */
      C3 = "#6C8699";

/* ---- lớp ẢNH. Mặc định SÁNG hơn bản cũ nhiều (xem đầu file) ---- */
K2.anh = (f, sau, loc, pos, vua) =>
  '<div class="lop" data-sau="' + (sau === undefined ? .42 : sau) + '">' +
  '<img src="anh/' + f + '" alt="" style="object-position:' + (pos || "50% 50%") +
  (vua ? ";object-fit:contain" : "") +
  ';filter:' + (loc || "contrast(1.08) saturate(1.02) brightness(.72)") + '"></div>';

/* ---- lớp VIDEO. Gói VID() của harness, thêm bộ lọc màu ---- */
K2.vid = (f, sau, o) => VID(f, sau === undefined ? .4 : sau, o || {});

/* ---- vignette chàm: gradient CSS TĨNH (không phải animation) ---- */
K2.toi = m =>
  '<div class="lop" data-sau="0.98"><div style="position:absolute;inset:-18%;' +
  'background:radial-gradient(ellipse at 50% 46%,rgba(4,8,20,0) 26%,' +
  'rgba(4,8,20,.46) 66%,rgba(4,8,20,' + (m || ".9") + ') 100%)"></div></div>';

/* ---- nền CHUYỂN SẮC + CHẤT LIỆU. §15.2 đòi nền không được trơn, nên lớp này
       luôn kèm một tấm hạt nhiễu tất định (sinh bằng rn, không Math.random). ---- */
K2.nen = (a, b, c) =>
  '<div class="lop" data-sau="0.06"><div style="position:absolute;inset:-18%;' +
  'background:radial-gradient(ellipse at 54% 40%,' + (a || "#13273D") + ' 0%,' +
  (b || "#081020") + ' 62%,' + (c || "#04070E") + ' 100%)"></div></div>' +
  '<div class="lop" data-sau="0.1"><svg class="hat" viewBox="0 0 1280 720" style="overflow:visible"></svg></div>';
/* gọi MỘT LẦN trong anim(): rải hạt nhiễu vào lớp .hat */
K2.rac = root => {
  const H = root.querySelector("svg.hat"); if (!H) return null;
  H.innerHTML = "";
  for (let i = 0; i < 260; i++)
    el("circle", { cx: (rn(i, 41) * 1700 - 210).toFixed(1), cy: (rn(i, 42) * 1060 - 170).toFixed(1),
      r: (.6 + rn(i, 43) * 2.4).toFixed(2), fill: i % 3 ? "#9FC4DC" : "#D8B98A",
      opacity: (.03 + rn(i, 44) * .09).toFixed(3) }, H);
  return H;
};
K2.ve = sau =>
  '<div class="lop" data-sau="' + (sau === undefined ? .8 : sau) +
  '"><svg class="ve" viewBox="0 0 1280 720" style="overflow:visible"></svg></div>';
K2.troi = sau =>
  '<div class="lop" data-sau="' + (sau === undefined ? .14 : sau) +
  '"><svg class="troi" viewBox="0 0 1280 720" style="overflow:visible"></svg></div>';
/* dòng nguồn / dẫn nghiên cứu, góc dưới phải — luôn đứng một mình (§8) */
K2.nguon = (id, s) =>
  '<div class="tx" id="' + id + '" style="left:auto;right:36px;top:676px;' +
  'font:400 13px/1.35 system-ui;letter-spacing:.012em;color:#8CA6B8;text-align:right;' +
  'text-shadow:0 1px 4px rgba(3,8,13,1),0 2px 12px rgba(3,8,13,.95)">' + s + '</div>';

K2.veDan = (p, u) => {
  p.setAttribute("pathLength", 1000);
  p.setAttribute("stroke-dasharray", "1000");
  p.setAttribute("stroke-dashoffset", (1000 * (1 - cl(u, 0, 1))).toFixed(1));
};
/* CẮT CỨNG trong cảnh: trả 0 trước mốc, 1 từ mốc trở đi.
   Mốc đặt theo TIẾN ĐỘ cảnh (c.u) để đổi giọng đọc là cảnh tự co giãn (§15.6). */
K2.cat = (u, moc) => u < moc ? 0 : 1;

/* ---- quả cầu Trái Đất vẽ tay ---- */
K2.cau = function (sv, pre, cx, cy, r) {
  const g = el("g", {}, sv);
  const cp = el("clipPath", { id: pre + "-cp" }, defsOf(sv));
  el("circle", { cx: cx, cy: cy, r: r }, cp);
  gradR(sv, pre + "-oc", cx - r * .34, cy - r * .38, r * 1.75,
    [[0, "#5CA8C8"], [.42, BI], [.78, "#1C566F"], [1, "#0C2838"]]);
  el("circle", { cx: cx, cy: cy, r: r, fill: "url(#" + pre + "-oc)" }, g);
  /* BẪY đã trả giá ở tập trước: KHÔNG đặt transform lên chính nhóm bị cắt —
     clip-path userSpaceOnUse tính trong hệ toạ độ SAU transform, nên dời nhóm
     là dời cả khuôn cắt. Cắt ở ngoài, cuộn ở trong. */
  const quay = el("g", { "clip-path": "url(#" + pre + "-cp)" }, g);
  const noi = el("g", {}, quay);
  for (let k = 0; k < 2; k++) {
    const gg = el("g", { transform: "translate(" + (k * 2 * r).toFixed(1) + " 0)" }, noi);
    for (let i = 0; i < 13; i++) {
      const x = cx - r + rn(i, 73) * 2 * r, y = cy + (rn(i, 72) - .5) * 1.56 * r;
      const w = (.14 + rn(i, 74) * .26) * r, h = (.09 + rn(i, 75) * .17) * r;
      el("ellipse", { cx: x.toFixed(1), cy: y.toFixed(1), rx: w.toFixed(1), ry: h.toFixed(1),
        fill: DA, opacity: (.66 + rn(i, 76) * .3).toFixed(2),
        transform: "rotate(" + ((rn(i, 77) - .5) * 80).toFixed(1) + " " +
          x.toFixed(1) + " " + y.toFixed(1) + ")" }, gg);
    }
    for (let i = 0; i < 9; i++) {
      const x = cx - r + rn(i, 81) * 2 * r, y = cy + (rn(i, 82) - .5) * 1.6 * r;
      el("ellipse", { cx: x.toFixed(1), cy: y.toFixed(1),
        rx: ((.1 + rn(i, 83) * .2) * r).toFixed(1), ry: ((.04 + rn(i, 84) * .07) * r).toFixed(1),
        fill: "#F2F7FA", opacity: (.18 + rn(i, 85) * .22).toFixed(2) }, gg);
    }
  }
  gradL(sv, pre + "-bg", cx - r, cy, cx + r, cy,
    [[0, "#04060E", 0], [.40, "#04060E", 0], [.66, "#04060E", .54], [1, "#04060E", .93]]);
  const bong = el("circle", { cx: cx, cy: cy, r: r, fill: "url(#" + pre + "-bg)" }, g);
  gradR(sv, pre + "-kq", cx, cy, r * 1.3,
    [[.74, "#9BE0FA", 0], [.93, "#9BE0FA", .34], [1, "#9BE0FA", 0]]);
  const kq = el("circle", { cx: cx, cy: cy, r: r * 1.3, fill: "url(#" + pre + "-kq)" }, g);
  kq.style.mixBlendMode = "screen";
  return { g: g, quay: quay, noi: noi, bong: bong, cx: cx, cy: cy, r: r };
};
K2.xoay = (m, d) => set(m.noi, { transform: "translate(" +
  (-(((d % (2 * m.r)) + 2 * m.r) % (2 * m.r))).toFixed(1) + " 0)" });

/* ---- đĩa Mặt Trăng vẽ tay ---- */
K2.trang = function (sv, pre, cx, cy, r) {
  const g = el("g", {}, sv);
  gradR(sv, pre + "-tr", cx - r * .3, cy - r * .3, r * 1.7,
    [[0, "#FDFCF7"], [.5, TR], [.86, "#C6C2B6"], [1, "#9A968B"]]);
  el("circle", { cx: cx, cy: cy, r: r, fill: "url(#" + pre + "-tr)" }, g);
  for (let i = 0; i < 7; i++)
    el("ellipse", { cx: (cx + (rn(i, 91) - .5) * 1.3 * r).toFixed(1),
      cy: (cy + (rn(i, 92) - .5) * 1.3 * r).toFixed(1),
      rx: ((.1 + rn(i, 93) * .2) * r).toFixed(1), ry: ((.08 + rn(i, 94) * .16) * r).toFixed(1),
      fill: "#A9A598", opacity: .44 }, g);
  for (let i = 0; i < 16; i++)
    el("circle", { cx: (cx + (rn(i, 95) - .5) * 1.7 * r).toFixed(1),
      cy: (cy + (rn(i, 96) - .5) * 1.7 * r).toFixed(1),
      r: ((.015 + rn(i, 97) * .045) * r).toFixed(2),
      fill: "#938F81", opacity: (.32 + rn(i, 98) * .4).toFixed(2) }, g);
  return g;
};

/* ---- đĩa Mặt Trời vẽ tay ---- */
K2.mtroi = function (sv, pre, cx, cy, r) {
  const g = el("g", {}, sv);
  gradR(sv, pre + "-nh", cx, cy, r * 2.6,
    [[.30, "#FFF6D2", .95], [.42, NH, .62], [.7, "#E8943A", .2], [1, NH, 0]]);
  const hao = el("circle", { cx: cx, cy: cy, r: r * 2.6, fill: "url(#" + pre + "-nh)" }, g);
  hao.style.mixBlendMode = "screen";
  gradR(sv, pre + "-dt", cx - r * .2, cy - r * .2, r * 1.3,
    [[0, "#FFFBE4"], [.55, NH], [1, "#E09230"]]);
  el("circle", { cx: cx, cy: cy, r: r, fill: "url(#" + pre + "-dt)" }, g);
  g.__hao = hao;
  return g;
};

/* ---- mũi tên có đầu ---- */
K2.ten = function (p, x1, y1, x2, y2, mau, w) {
  const g = el("g", {}, p);
  const than = el("path", { d: "M" + x1 + "," + y1 + " L" + x2 + "," + y2,
    stroke: mau, "stroke-width": w || 5, fill: "none", "stroke-linecap": "round" }, g);
  const a = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
  const dau = el("polygon", { points: "0,-9 20,0 0,9", fill: mau, opacity: 0,
    transform: "translate(" + x2 + " " + y2 + ") rotate(" + a.toFixed(1) + ")" }, g);
  return { g: g, than: than, dau: dau };
};
/* đặt lại hai đầu một mũi tên đã dựng (dùng khi hình chạy theo t) */
K2.datTen = (a, x1, y1, x2, y2) => {
  set(a.than, { d: "M" + x1.toFixed(1) + "," + y1.toFixed(1) + " L" + x2.toFixed(1) + "," + y2.toFixed(1) });
  set(a.dau, { transform: "translate(" + x2.toFixed(1) + " " + y2.toFixed(1) + ") rotate(" +
    (Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI).toFixed(1) + ")" });
};
/* pha trăng: p=0 trăng non, p=.5 trăng rằm */
K2.pha = (p, cx, cy, r) => {
  const k = Math.cos(2 * Math.PI * p), rx = Math.abs(k) * r;
  const ph = p < .5 ? 1 : 0, s2 = ((k > 0) === (ph === 1)) ? 0 : 1;
  return "M" + cx + "," + (cy - r) + " A" + r + "," + r + " 0 0," + ph + " " + cx + "," + (cy + r) +
         " A" + rx.toFixed(2) + "," + r + " 0 0," + s2 + " " + cx + "," + (cy - r) + " Z";
};
/* điểm trên vành quạt, góc đo từ phương thẳng đứng, nghiêng sang phải */
K2.dq = (cx, cy, R, a) => [cx + R * Math.sin(a * Math.PI / 180),
                           cy - R * Math.cos(a * Math.PI / 180)];
K2.quat = function (p, cx, cy, R, a0, a1, mau, mo, net) {
  const A = K2.dq(cx, cy, R, a0), Bq = K2.dq(cx, cy, R, a1);
  const e = el("path", { d: "M" + cx + "," + cy + " L" + A[0].toFixed(1) + "," + A[1].toFixed(1) +
    " A" + R + "," + R + " 0 " + ((a1 - a0) > 180 ? 1 : 0) + ",1 " +
    Bq[0].toFixed(1) + "," + Bq[1].toFixed(1) + " Z",
    fill: mau, opacity: mo === undefined ? .2 : mo, stroke: mau, "stroke-width": 2.4 }, p);
  if (net) set(e, { "stroke-dasharray": net, fill: "none", opacity: 1 });
  return e;
};
/* lắc tất định, biên độ đúng bằng nửa dải — ba nhịp lệch pha, nhìn như hỗn loạn */
K2.lac = (t, lo, hi, s) => {
  s = s || 1;
  const v = .55 * Math.sin(t * .47 * s + 1.1) + .30 * Math.sin(t * 1.13 * s + 2.7) +
            .15 * Math.sin(t * 2.31 * s + .4);
  return (lo + hi) / 2 + (hi - lo) / 2 * cl(v, -1, 1);
};
K2.truc = (p, cx, cy, L, mau) => el("path", { d: "M" + cx + "," + (cy - L) +
  " L" + cx + "," + (cy + L), stroke: mau || TR, "stroke-width": 3.6, fill: "none",
  "stroke-linecap": "round" }, p);
K2.chuNho = (p, x, y, s, mau, cl2) => { const e = el("text", { x: x, y: y, fill: mau || C2,
  "font-family": "system-ui", "font-size": cl2 || 18, "font-weight": 700,
  "letter-spacing": ".04em", "text-anchor": "middle" }, p); e.textContent = s; return e; };
/* con bọ hung nhìn ngang, gốc toạ độ ở giữa thân, viên phân bên trái */
K2.bo = function (p, s) {
  const g = el("g", {}, p);
  el("circle", { cx: -46, cy: 4, r: 30, fill: "#2A2016", stroke: "#C9D6E0",
    "stroke-width": 2.2 }, g);
  for (let i = 0; i < 9; i++)
    el("circle", { cx: (-46 + (rn(i, 51) - .5) * 42).toFixed(1),
      cy: (4 + (rn(i, 52) - .5) * 42).toFixed(1), r: (2 + rn(i, 53) * 4).toFixed(1),
      fill: "#4A3A28", opacity: .8 }, g);
  el("ellipse", { cx: 6, cy: 0, rx: 28, ry: 20, fill: "#15191F", stroke: "#C9D6E0",
    "stroke-width": 2.2 }, g);
  el("path", { d: "M16,13 l20,17 M16,-13 l20,-17 M-4,18 l6,23 M-4,-18 l6,-23",
    stroke: "#C9D6E0", "stroke-width": 2.6, "stroke-linecap": "round", opacity: .92 }, g);
  if (s && s !== 1) set(g, { transform: "scale(" + s + ")" });
  return g;
};
/* gắn id cho lớp đầu tiên của một mẩu html (để bật/tắt lúc CẮT CỨNG) */
K2.id = (html, id) => html.replace('<div class="lop"', '<div class="lop" id="' + id + '"');
/* lấy lớp theo id và đặt độ mờ — gọi ở MỌI khung cho MỌI lớp (bẫy §11.4) */
K2.lop = (root, id) => root.querySelector("#" + id);

/* ═══════════════════════════════════════════════════════════════════
   ĐOẠN 21–22 · câu 1–4 — "Khoan đã. Mặt Trời nặng thế mà kéo yếu hơn?"
   ═══════════════════════════════════════════════════════════════════ */

/* ---- k2c01 · câu 1 (2,1 s) · VIDEO Mặt Trăng quay (LRO) bị chặn lại ---- */
DANGKY({
  id: "k2c01", steps: 0, say: [S[0]],
  html: K2.vid("k2-trang-quay.mp4", .38, { tu: 1.0, dai: 7.0, toc: .55,
          loc: "contrast(1.1) saturate(.9) brightness(.9)" }) +
        K2.ve(.82) + K2.toi(".82"),
  anim: root => {
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    /* hai thanh chặn trượt vào từ hai mép — cú "khoan đã" */
    const t1 = el("rect", { x: -1000, y: -200, width: 1000, height: 1120, fill: "#06101C",
      opacity: .94 }, V);
    const t2 = el("rect", { x: 1280, y: -200, width: 1000, height: 1120, fill: "#06101C",
      opacity: .94 }, V);
    const vach = el("path", { d: "M640,-120 L640,840", stroke: DO, "stroke-width": 6,
      fill: "none", opacity: 0 }, V);
    return c => {
      cam(root, { t: c.t, x: lerp(-18, 12, ez(c.u)), z: lerp(1.12, 1.02, ezo(c.u)) });
      /* hai thanh BẮT ĐẦU che gần hết khung rồi mới mở ra — cú "khoan đã" phải
         nhìn thấy được. Nhịp ngắn dưới 1,5 s nên dùng c.t tuyệt đối (§15.6). */
      const v = ezo(cl(c.t / .6, 0, 1));
      set(t1, { x: (-560 - 460 * v).toFixed(0) });
      set(t2, { x: (840 + 460 * v).toFixed(0) });
      K2.veDan(vach, ezo(c.t / .35));
      op(vach, (.9 * (1 - ez((c.t - .5) / .5))).toFixed(3));
    };
  }
});

/* ---- k2c02 · câu 2 (3,9 s) · CẮT CỨNG u=.52 — Mặt Trời SDO ▸ Mặt Trăng LRO ---- */
DANGKY({
  id: "k2c02", steps: 0, say: [S[1]],
  html: K2.id(K2.anh("k2-mattroi.jpg", .36,
          "contrast(1.12) saturate(1.12) brightness(.9)", "50% 50%"), "k2c02-A") +
        K2.id(K2.anh("k2-mattrang.jpg", .36,
          "contrast(1.1) saturate(.4) brightness(.86)", "50% 50%", 1), "k2c02-B") +
        K2.ve(.86) + K2.toi(".86"),
  anim: root => {
    const A = K2.lop(root, "k2c02-A"), B = K2.lop(root, "k2c02-B");
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    /* vòng tròn so kích thước, mỗi nửa một bên của mốc cắt */
    const vA = el("circle", { cx: 640, cy: 360, r: 300, fill: "none", stroke: NH,
      "stroke-width": 3, "stroke-dasharray": "12 10", opacity: 0 }, V);
    const vB = el("circle", { cx: 640, cy: 360, r: 112, fill: "none", stroke: TR,
      "stroke-width": 3, "stroke-dasharray": "12 10", opacity: 0 }, V);
    return c => {
      const k = K2.cat(c.u, .52);
      op(A, 1 - k); op(B, k);
      cam(root, { t: c.t, x: lerp(-16, 14, ez(c.u)),
                  z: k ? lerp(1.06, 1.00, ez((c.u - .52) / .48)) : lerp(1.04, 1.16, ez(c.u / .52)) });
      op(vA, ((1 - k) * .55 * ez(c.u / .14)).toFixed(3));
      op(vB, (k * .6).toFixed(3));
      set(vA, { "stroke-dashoffset": (-c.t * 16).toFixed(1) });
      set(vB, { "stroke-dashoffset": (c.t * 16).toFixed(1) });
    };
  }
});

/* ---- k2c03 · câu 3 (2,4 s) · "Vô lý" — dấu ✕ đỏ vạch lên mặt Mặt Trời ---- */
DANGKY({
  id: "k2c03", steps: 0, say: [S[2]],
  html: K2.anh("k2-mattroi.jpg", .4, "contrast(1.18) saturate(1.1) brightness(.78)", "50% 50%") +
        K2.ve(.88) + K2.toi(".88"),
  anim: root => {
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    const x1 = el("path", { d: "M430,180 L860,560", stroke: DO, "stroke-width": 16,
      "stroke-linecap": "round", fill: "none" }, V);
    const x2 = el("path", { d: "M860,180 L430,560", stroke: DO, "stroke-width": 16,
      "stroke-linecap": "round", fill: "none" }, V);
    return c => {
      cam(root, { t: c.t, x: lerp(12, -10, ez(c.u)), z: lerp(1.34, 1.18, ezo(c.u)) });
      K2.veDan(x1, ezo(c.t / .3));
      K2.veDan(x2, ezo((c.t - .24) / .3));
    };
  }
});

/* ---- k2c04 · câu 4 (3,8 s) · VIDEO Trái Đất quay thật (DSCOVR) ---- */
DANGKY({
  id: "k2c04", steps: 0, say: [S[3]],
  html: K2.vid("k2-traidat-quay.mp4", .34, { tu: 0, dai: 4.5, toc: .5,
          loc: "contrast(1.1) saturate(1.08) brightness(.92)" }) +
        K2.ve(.8) + K2.toi(".84"),
  anim: root => {
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    /* hai cung tròn mọc quanh hành tinh — "để tôi kể lại cho đúng" */
    const cg = [];
    for (let i = 0; i < 3; i++)
      cg.push(el("circle", { cx: 640, cy: 360, r: 250 + i * 46, fill: "none",
        stroke: i ? C3 : LA, "stroke-width": i ? 1.6 : 2.6, opacity: 0,
        "stroke-dasharray": (i ? "4 12" : "18 14") }, V));
    return c => {
      cam(root, { t: c.t, x: lerp(18, -14, ez(c.u)), z: lerp(1.10, 1.22, ez(c.u)) });
      cg.forEach((e, i) => {
        op(e, (ez((c.u - .08 - i * .12) / .18) * (.68 - i * .16)).toFixed(3));
        set(e, { "stroke-dashoffset": ((i % 2 ? 1 : -1) * c.t * (14 + i * 9)).toFixed(1),
          r: (250 + i * 46 + 7 * Math.sin(c.t * .7 + i)).toFixed(1) });
      });
    };
  }
});

/* ═══════════════════════════════════════════════════════════════════
   ĐOẠN 23 · câu 5–7 — 27 triệu lần nặng hơn, nhưng triều là CÁI HIỆU
   ═══════════════════════════════════════════════════════════════════ */

/* ---- k2c05 · câu 5 (4,6 s) · CHỮ 1/5 «lần» · 27.000.000 đếm lên ---- */
DANGKY({
  id: "k2c05", steps: 0, say: [S[4]],
  html: K2.anh("k2-mattroi.jpg", .3, "contrast(1.14) saturate(1.12) brightness(.74)", "50% 50%") +
        K2.ve(.78) + K2.toi(".9") +
        '<div class="hud">' +
        '<div class="tx" id="k2c05-a" style="left:0;top:252px;width:1280px;text-align:center">' +
          '<span class="khung-so so" id="k2c05-s" style="font-size:132px;color:' + NH + '">0</span>' +
          '<span class="dv" style="color:' + TR + '">&nbsp;lần</span></div>' +
        K2.nguon("k2c05-ng", "Mặt Trời ở 171 và 131 Å · NASA/SDO · phạm vi công cộng") + '</div>',
  anim: root => {
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    /* Mặt Trăng hạt đậu nằm cạnh cái đĩa khổng lồ — tỉ lệ khối lượng không vẽ được,
       nhưng tỉ lệ BỀ MẶT thì vẽ được, và đó là cái mắt người đọc ra ngay */
    const gtr = el("g", {}, V); K2.trang(gtr, "k2c05", 1118, 572, 26);
    return c => {
      cam(root, { t: c.t, x: lerp(-14, 12, ez(c.u)), z: lerp(1.16, 1.04, ezo(c.u)) });
      txt("k2c05-s", soVN(27000000 * ezo(cl((c.t - .3) / 2.4, 0, 1))));
      kh("k2c05-a", c.t, .3, 1e9);
      op(gtr, ez((c.u - .3) / .18).toFixed(3));
      set(gtr, { transform: "translate(0 " + (-8 * Math.sin(c.t * .8)).toFixed(1) + ")" });
      kh("k2c05-ng", c.t, 3.0, 1e9);
    };
  }
});

/* ---- k2c06 · câu 6 (4,9 s) · sơ đồ: KHÔNG phải sức hút, mà là CÁI HIỆU ---- */
DANGKY({
  id: "k2c06", steps: 0, say: [S[5]],
  html: K2.nen("#15293F", "#081220", "#04070E") + K2.troi(.1) + K2.ve(.78) + K2.toi(".88"),
  anim: root => {
    K2.rac(root);
    const T = root.querySelector("svg.troi"); T.innerHTML = ""; sao(T, 150);
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    const CX = 470, CY = 372, R = 140;
    const dat = K2.cau(V, "k2c06", CX, CY, R);
    K2.trang(V, "k2c06", 1086, CY, 44);
    /* một mũi tên "sức hút" to đùng — rồi bị gạch bỏ */
    const a = K2.ten(V, CX + R + 18, CY, 1000, CY, TR, 8);
    const x1 = el("path", { d: "M700,282 L876,452", stroke: DO, "stroke-width": 13,
      "stroke-linecap": "round", fill: "none" }, V);
    const x2 = el("path", { d: "M876,282 L700,452", stroke: DO, "stroke-width": 13,
      "stroke-linecap": "round", fill: "none" }, V);
    /* thay vào đó: hai mũi tên dài ngắn khác nhau, cùng một độ cao */
    const g1 = K2.ten(V, CX + R - 8, CY - 96, CX + R + 196, CY - 96, LA, 6);
    const g2 = K2.ten(V, CX - R + 8, CY - 96, CX - R + 104, CY - 96, LA, 6);
    return c => {
      cam(root, { t: c.t, x: lerp(22, -18, ez(c.u)), z: lerp(1.03, 1.13, ez(c.u)) });
      K2.xoay(dat, c.t * 16);
      const w = ezo(cl(c.u / .14, 0, 1));
      K2.veDan(a.than, w); op(a.dau, ez((w - .88) / .1));
      const bo = ezo(cl((c.u - .26) / .12, 0, 1));
      K2.veDan(x1, bo); K2.veDan(x2, ezo(cl((c.u - .3) / .12, 0, 1)));
      op(a.g, (1 - .72 * ezo(cl((c.u - .4) / .2, 0, 1))).toFixed(3));
      const v = ezo(cl((c.u - .42) / .34, 0, 1));
      K2.veDan(g1.than, v); K2.veDan(g2.than, v);
      op(g1.dau, ez((v - .86) / .12)); op(g2.dau, ez((v - .86) / .12));
    };
  }
});

/* ═══════════════════════════════════════════════════════════════════
   k2c07 · câu 7 (6,7 s) · CẮT CỨNG u=.58 — CẢNH LÕI 1: PHÉP TRỪ
   Ý này vốn trừu tượng (một hiệu số) nên sơ đồ vẽ là ĐÚNG (§12).
   Nửa sau cảnh cắt thẳng sang ẢNH THẬT nước lớn ở vịnh Fundy, để
   "nước phồng lên" không dừng ở một hình vẽ.
   ═══════════════════════════════════════════════════════════════════ */
DANGKY({
  id: "k2c07", steps: 0, say: [S[6]],
  html: K2.id(K2.nen("#16304A", "#081220", "#04070E"), "k2c07-A") +
        K2.id(K2.anh("k2-trieu-day.jpg", .4,
          "contrast(1.12) saturate(1.04) brightness(.74)", "50% 56%"), "k2c07-B") +
        K2.troi(.1) + K2.ve(.78) + K2.toi(".88"),
  anim: root => {
    K2.rac(root);
    const A = K2.lop(root, "k2c07-A"), B = K2.lop(root, "k2c07-B");
    const T = root.querySelector("svg.troi"); T.innerHTML = ""; sao(T, 150);
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    const CX = 520, CY = 352, R = 162, YA = 288;
    gradR(V, "k2c07-nc", CX, CY, R * 1.6,
      [[.70, "#6FD0F0", 0], [.88, "#6FD0F0", .72], [1, "#6FD0F0", 0]]);
    const bong = el("ellipse", { cx: CX, cy: CY, rx: R, ry: R, fill: "url(#k2c07-nc)" }, V);
    bong.style.mixBlendMode = "screen";
    const dat = K2.cau(V, "k2c07", CX, CY, R);
    K2.trang(V, "k2c07", 1140, CY, 46);
    const g1 = K2.ten(V, CX + R - 10, YA, CX + R + 206, YA, TR, 7);
    const g2 = K2.ten(V, CX - R + 10, YA, CX - R + 112, YA, TR, 7);
    el("circle", { cx: CX + R - 10, cy: YA, r: 6, fill: TR }, V);
    el("circle", { cx: CX - R + 10, cy: YA, r: 6, fill: TR }, V);
    const gso = el("g", {}, V);
    const hieu = el("path", { d: "M" + (CX - R + 112) + "," + (YA - 54) + " L" +
      (CX + R + 206) + "," + (YA - 54), stroke: LA, "stroke-width": 5,
      fill: "none", "stroke-linecap": "round" }, gso);
    const bien = el("g", {}, V);
    const s1 = song(bien, 646, 18, 230, "#12465F");
    const s2 = song(bien, 672, 12, 170, "#1E6D92");
    return c => {
      const k = K2.cat(c.u, .58);
      op(A, 1); op(B, k);
      op(V.parentNode, (1 - k).toFixed(2));
      op(T.parentNode, (1 - k).toFixed(2));
      op(bien, (k ? 0 : .92 * ez(c.u / .1)).toFixed(3));
      cam(root, { t: c.t, x: k ? lerp(26, -22, ez((c.u - .58) / .42)) : lerp(26, -22, ez(c.u / .58)),
                  y: lerp(6, -8, ez(c.u)), z: k ? lerp(1.22, 1.10, ez((c.u - .58) / .42))
                                               : lerp(1.03, 1.13, ez(c.u / .58)) });
      K2.xoay(dat, c.t * 15);
      const w = ezo(cl((c.u - .04) / .2, 0, 1));
      K2.veDan(g1.than, w); K2.veDan(g2.than, w);
      op(g1.dau, ez((w - .88) / .1)); op(g2.dau, ez((w - .88) / .1));
      K2.veDan(hieu, ezo(cl((c.u - .3) / .18, 0, 1)));
      op(gso, (.9 * ez((c.u - .28) / .1)).toFixed(3));
      const b = ezo(cl((c.u - .34) / .34, 0, 1));
      set(bong, { rx: (R * (1 + .34 * b)).toFixed(1), ry: (R * (1 - .11 * b)).toFixed(1) });
      op(bong, (ez(c.u / .1) * (.5 + .12 * Math.sin(c.t * .9))).toFixed(3));
      set(s1, { transform: "translate(" + (-((c.t * 26) % 230)).toFixed(1) + " " +
        (12 - 26 * b).toFixed(1) + ")" });
      set(s2, { transform: "translate(" + (-((c.t * 40) % 170)).toFixed(1) + " " +
        (8 - 18 * b).toFixed(1) + ")" });
    };
  }
});

/* ═══════════════════════════════════════════════════════════════════
   ĐOẠN 24 · câu 8–10 — DĂM BẢY KIỂU XA
   Chỗ này bản cũ là "ba vòng tròn đen trên thanh trượt xám, nền trắng
   trơn" và đã bị chủ kênh BÁC (§15.2). Bản này: ba ô kính đặt trên nền
   VIDEO dải Ngân Hà thật, ô nào cũng có nguồn sáng và tia đi ra.
   ═══════════════════════════════════════════════════════════════════ */

/* ---- k2c08 · câu 8 (3,5 s) · ba kiểu xa, ba ô còn trống ---- */
DANGKY({
  id: "k2c08", steps: 0, say: [S[7]],
  html: K2.vid("k2-nganha.mp4", .2, { tu: 0, dai: 4.6, toc: .35,
          loc: "contrast(1.2) saturate(1.1) brightness(.62)" }) +
        K2.ve(.8) + K2.toi(".86"),
  anim: root => {
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    const o = [];
    for (let i = 0; i < 3; i++) {
      const g = el("g", {}, V), x = 118 + i * 358;
      el("rect", { x: x, y: 214, width: 318, height: 268, rx: 6, fill: "#0A1828",
        stroke: ["#7FD3F0", "#F7C948", "#EE7B5E"][i], "stroke-width": 2.8, opacity: .9 }, g);
      el("rect", { x: x, y: 214, width: 318, height: 268, rx: 6, fill: "#0A1828",
        opacity: .5 }, g);
      el("circle", { cx: x + 44, cy: 348, r: 14, fill: ["#9BE0FA", NH, SH][i] }, g);
      const tia = [];
      for (let k = 0; k < 4; k++)
        tia.push(el("path", { d: "M" + (x + 56) + ",348 L" + (x + 302) + "," +
          (276 + k * 44), stroke: ["#9BE0FA", NH, SH][i], "stroke-width": 2.6,
          fill: "none", opacity: .8 }, g));
      o.push({ g: g, tia: tia });
    }
    return c => {
      cam(root, { t: c.t, x: lerp(-16, 14, ez(c.u)), z: lerp(1.03, 1.12, ez(c.u)) });
      o.forEach((k, i) => {
        op(k.g, ez((c.u - .06 - i * .17) / .14).toFixed(3));
        k.tia.forEach((p, j) => K2.veDan(p, ezo((c.u - .14 - i * .17 - j * .02) / .2)));
        set(k.g, { transform: "translate(0 " + (-6 * Math.sin(c.t * .7 + i * 1.3)).toFixed(1) + ")" });
      });
    };
  }
});

/* ---- k2c09 · câu 9 (6,5 s) · CẮT CỨNG u=.5 — chia hai lần: 1 ô ▸ 4 ô
       Nửa đầu là LỰC HÚT (lam), nửa sau là ÁNH SÁNG (vàng): cùng một
       hình, đổi màu và đổi nguồn — để thấy "ánh sáng cũng vậy". ---- */
DANGKY({
  id: "k2c09", steps: 0, say: [S[8]],
  html: K2.vid("k2-nganha.mp4", .2, { tu: 1.2, dai: 3.4, toc: .3,
          loc: "contrast(1.2) saturate(1.05) brightness(.5)" }) +
        K2.ve(.8) + K2.toi(".9"),
  anim: root => {
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    const X0 = 128, Y0 = 368, X1 = 512, X2 = 920, A = 96;
    const lam = el("g", {}, V), vang = el("g", {}, V);
    const dung = (p, mau, fill) => {
      gradR(V, "k2c09-" + mau.slice(1), X0, Y0, 130,
        [[0, mau, 1], [.4, mau, .5], [1, mau, 0]]);
      const ng = el("circle", { cx: X0, cy: Y0, r: 130, fill: "url(#k2c09-" + mau.slice(1) + ")" }, p);
      ng.style.mixBlendMode = "screen";
      el("circle", { cx: X0, cy: Y0, r: 14, fill: mau }, p);
      const non = el("rect", { x: X1, y: Y0 - A / 2, width: A, height: A, rx: 4,
        fill: fill, stroke: mau, "stroke-width": 2.6, opacity: 0 }, p);
      const xa = [];
      for (let i = 0; i < 2; i++) for (let j = 0; j < 2; j++)
        xa.push(el("rect", { x: X2 + i * (A + 9), y: Y0 - A - 5 + j * (A + 9),
          width: A, height: A, rx: 4, fill: fill, stroke: mau, "stroke-width": 2,
          opacity: 0 }, p));
      const ria = [
        el("path", { d: "M" + X0 + "," + Y0 + " L" + (X2 + 2 * A + 9) + "," + (Y0 - A - 5),
          stroke: mau, "stroke-width": 2, fill: "none", opacity: .5 }, p),
        el("path", { d: "M" + X0 + "," + Y0 + " L" + (X2 + 2 * A + 9) + "," + (Y0 + A + 5),
          stroke: mau, "stroke-width": 2, fill: "none", opacity: .5 }, p)];
      return { ng: ng, non: non, xa: xa, ria: ria };
    };
    const L = dung(lam, "#6FC3E8", "#1A4D68"), G = dung(vang, "#F7C948", "#6B5316");
    return c => {
      const k = K2.cat(c.u, .5);
      op(lam, 1 - k); op(vang, k);
      const uu = k ? (c.u - .5) / .5 : c.u / .5;
      cam(root, { t: c.t, x: lerp(-20, 16, ez(uu)), z: lerp(1.02, 1.11, ez(uu)) });
      [L, G].forEach(q => {
        op(q.ng, (.6 + .34 * Math.sin(c.t * 2.1)).toFixed(3));
        q.ria.forEach(p => K2.veDan(p, ezo(uu / .35)));
        op(q.non, (.96 * ez((uu - .14) / .14)).toFixed(3));
        q.xa.forEach((e, i) => op(e, (.36 * ez((uu - .38 - i * .05) / .12)).toFixed(3)));
      });
    };
  }
});

/* ---- k2c10 · câu 10 (6,8 s) · CẮT CỨNG u=.46 — chia BA lần: 1 khối ▸ 8 khối ---- */
DANGKY({
  id: "k2c10", steps: 0, say: [S[9]],
  html: K2.vid("k2-nganha.mp4", .2, { tu: 2.0, dai: 2.6, toc: .28,
          loc: "contrast(1.22) saturate(1.0) brightness(.44)" }) +
        K2.ve(.8) + K2.toi(".92"),
  anim: root => {
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    const A = 58, Bq = 66, OX = 640, OY = 498;
    const P = (i, j, k) => [OX + (i - j) * A, OY + (i + j) * A * .5 - k * Bq];
    const khoi = (g, i, j, k, mau, mo) => {
      const p = [P(i, j, k + 1), P(i + 1, j, k + 1), P(i + 1, j + 1, k + 1), P(i, j + 1, k + 1),
                 P(i + 1, j, k), P(i + 1, j + 1, k), P(i, j + 1, k)];
      const dd = a => "M" + a.map(q => q[0].toFixed(1) + "," + q[1].toFixed(1)).join("L") + "Z";
      const h = el("g", {}, g);
      el("path", { d: dd([p[0], p[1], p[2], p[3]]), fill: mau, opacity: (mo * .98).toFixed(2) }, h);
      el("path", { d: dd([p[1], p[4], p[5], p[2]]), fill: mau, opacity: (mo * .64).toFixed(2) }, h);
      el("path", { d: dd([p[3], p[2], p[5], p[6]]), fill: mau, opacity: (mo * .4).toFixed(2) }, h);
      el("path", { d: dd([p[0], p[1], p[2], p[3]]) + dd([p[1], p[4], p[5], p[2]]) +
        dd([p[3], p[2], p[5], p[6]]), fill: "none", stroke: "#061018", "stroke-width": 1.8 }, h);
      return h;
    };
    const g1 = el("g", {}, V), mot = khoi(g1, 0, 0, 0, TR, 1);
    const g8 = el("g", {}, V), tam = [];
    for (let i = 0; i < 2; i++) for (let j = 0; j < 2; j++) for (let k = 0; k < 2; k++)
      tam.push(khoi(g8, i - .5, j - .5, k - .5, "#8FB6CC", 1));
    /* ba cạnh gốc tô đậm: ba lần chia */
    const truc = [
      el("path", { d: "M" + P(0,0,0)[0] + "," + P(0,0,0)[1] + " L" + P(1,0,0)[0] + "," + P(1,0,0)[1],
        stroke: SH, "stroke-width": 7, fill: "none", "stroke-linecap": "round" }, g1),
      el("path", { d: "M" + P(0,0,0)[0] + "," + P(0,0,0)[1] + " L" + P(0,1,0)[0] + "," + P(0,1,0)[1],
        stroke: SH, "stroke-width": 7, fill: "none", "stroke-linecap": "round" }, g1),
      el("path", { d: "M" + P(0,0,0)[0] + "," + P(0,0,0)[1] + " L" + P(0,0,1)[0] + "," + P(0,0,1)[1],
        stroke: SH, "stroke-width": 7, fill: "none", "stroke-linecap": "round" }, g1)];
    return c => {
      const k = K2.cat(c.u, .46);
      op(g1, 1 - k); op(g8, k);
      const uu = k ? (c.u - .46) / .54 : c.u / .46;
      cam(root, { t: c.t, x: lerp(-22, 18, ez(uu)), y: lerp(10, -10, ez(uu)),
                  z: lerp(1.04, 1.16, ez(uu)) });
      truc.forEach((p, i) => K2.veDan(p, ezo((c.u - .1 - i * .1) / .14)));
      set(g1, { transform: "translate(0 " + (-12 * Math.sin(c.t * .9)).toFixed(1) + ")" });
      const v = ezo(cl((c.u - .48) / .4, 0, 1));
      set(g8, { transform: "translate(0 " + (-12 * Math.sin(c.t * .9)).toFixed(1) +
        ") scale(" + lerp(.64, 1, v).toFixed(3) + ") translate(" +
        (OX * (1 / lerp(.64, 1, v) - 1)).toFixed(1) + " " +
        (OY * (1 / lerp(.64, 1, v) - 1)).toFixed(1) + ")" });
      tam.forEach((e, i) => op(e, ez((c.u - .48 - i * .035) / .06).toFixed(3)));
    };
  }
});

/* ═══════════════════════════════════════════════════════════════════
   ĐOẠN 25 · câu 11–15 — PHÉP TÍNH 390³, ĐOẠN KHÓ NHẤT CẢ TẬP
   Ba cảnh liền nhau, mỗi cảnh làm đúng MỘT bước, để người xem bấm máy
   tính theo kịp:
     k2c11  390        — cái thước 390 vạch mọc dần, đo được
     k2c12  390³       — ba cạnh dựng thành khối, 59.319.000 đếm lên
     k2c13  27/59,319  — phân số thật + hai thanh so chiều dài → 0,45
   Chữ biên tập ở cụm này là 0 TỪ: chỉ chữ số và dấu × ÷ =.
   ═══════════════════════════════════════════════════════════════════ */

/* ---- k2c11 · câu 11 (4,0 s) · cái thước 390 vạch ---- */
DANGKY({
  id: "k2c11", steps: 0, say: [S[10]],
  html: K2.nen("#13293F", "#071020", "#04070E") + K2.troi(.08) + K2.ve(.72) + K2.toi(".9") +
    '<div class="hud">' +
    '<div class="tx" id="k2c11-a" style="left:0;top:398px;width:1280px;text-align:center">' +
      '<span class="so" id="k2c11-s" style="font:800 118px/1 system-ui;color:' + TR +
      ';letter-spacing:-.03em">0</span></div></div>',
  anim: root => {
    K2.rac(root);
    const T = root.querySelector("svg.troi"); T.innerHTML = ""; sao(T, 150);
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    const gth = el("g", {}, V);
    const cp = el("clipPath", { id: "k2c11-cp" }, defsOf(V));
    const cpr = el("rect", { x: 96, y: 150, width: 0, height: 120 }, cp);
    el("path", { d: "M106,212 L1222,212", stroke: "#2F5C7C", "stroke-width": 2.6 }, gth);
    const gv = el("g", { "clip-path": "url(#k2c11-cp)" }, gth);
    let dv = "";
    for (let i = 0; i < 390; i++) {
      const x = (112 + i * 2.85).toFixed(2);
      dv += "M" + x + ",202 L" + x + ",222 ";
    }
    el("path", { d: dv, stroke: LA, "stroke-width": 2.0, opacity: .98 }, gv);
    K2.trang(gth, "k2c11", 112, 212, 15);
    const mt = K2.mtroi(gth, "k2c11", 1222, 212, 23);
    return c => {
      cam(root, { t: c.t, x: lerp(-12, 10, ez(c.u)), y: lerp(6, -6, ez(c.u)),
                  z: lerp(1.02, 1.10, ez(c.u)) });
      op(mt.__hao, (.6 + .3 * Math.sin(c.t * 1.3)).toFixed(3));
      const p1 = ezo(cl((c.u - .06) / .6, 0, 1));
      set(cpr, { width: (1140 * p1).toFixed(1) });
      txt("k2c11-s", soVN(390 * p1));
      kh("k2c11-a", c.t, .2, 1e9);
    };
  }
});

/* ---- k2c12 · câu 12 (6,1 s) · CẮT CỨNG u=.44 — ba cạnh ▸ khối 390³ ---- */
DANGKY({
  id: "k2c12", steps: 0, say: [S[11]],
  html: K2.nen("#13293F", "#071020", "#04070E") + K2.troi(.08) + K2.ve(.72) + K2.toi(".9") +
    '<div class="hud">' +
    '<div class="tx" id="k2c12-a" style="left:0;top:112px;width:1280px;text-align:center;' +
      'white-space:nowrap">' +
      '<span class="so" style="font:800 64px/1.1 system-ui;color:' + TR + '">390</span>' +
      '<span class="so" id="k2c12-x1" style="font:800 64px/1.1 system-ui;color:' + C2 + '"> × 390</span>' +
      '<span class="so" id="k2c12-x2" style="font:800 64px/1.1 system-ui;color:' + C2 + '"> × 390</span>' +
      '</div>' +
    '<div class="tx" id="k2c12-b" style="left:0;top:206px;width:1280px;text-align:center">' +
      '<span class="so" id="k2c12-s" style="font:800 92px/1 system-ui;color:' + LA +
      ';letter-spacing:-.03em">0</span></div></div>',
  anim: root => {
    K2.rac(root);
    const T = root.querySelector("svg.troi"); T.innerHTML = ""; sao(T, 140);
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    const A = 82, Bq = 96, OX = 640, OY = 528;
    const P = (i, j, k) => [OX + (i - j) * A, OY + (i + j) * A * .5 - k * Bq];
    const g = el("g", {}, V);
    const L = (p, q, mau, w) => el("path", { d: "M" + p[0].toFixed(1) + "," + p[1].toFixed(1) +
      " L" + q[0].toFixed(1) + "," + q[1].toFixed(1), stroke: mau, fill: "none",
      "stroke-width": w || 5, "stroke-linecap": "round" }, g);
    const truc = [L(P(0,0,0), P(1,0,0), TR, 9), L(P(0,0,0), P(0,1,0), TR, 9),
                  L(P(0,0,0), P(0,0,1), TR, 9)];
    const con = [
      L(P(1,0,0), P(1,1,0), LA), L(P(0,1,0), P(1,1,0), LA),
      L(P(0,0,1), P(1,0,1), LA), L(P(0,0,1), P(0,1,1), LA),
      L(P(1,0,1), P(1,1,1), LA), L(P(0,1,1), P(1,1,1), LA),
      L(P(1,0,0), P(1,0,1), LA), L(P(0,1,0), P(0,1,1), LA), L(P(1,1,0), P(1,1,1), LA)];
    /* ba mặt tô mờ, hiện sau mốc cắt — khối mới thành KHỐI chứ không phải khung dây */
    const dd = a => "M" + a.map(q => q[0].toFixed(1) + "," + q[1].toFixed(1)).join("L") + "Z";
    const gm = el("g", {}, g);
    const mat = [
      el("path", { d: dd([P(0,0,1), P(1,0,1), P(1,1,1), P(0,1,1)]), fill: LA, opacity: 0 }, gm),
      el("path", { d: dd([P(1,0,1), P(1,0,0), P(1,1,0), P(1,1,1)]), fill: LA, opacity: 0 }, gm),
      el("path", { d: dd([P(0,1,1), P(1,1,1), P(1,1,0), P(0,1,0)]), fill: LA, opacity: 0 }, gm)];
    return c => {
      const k = K2.cat(c.u, .44);
      cam(root, { t: c.t, x: lerp(-14, 12, ez(c.u)), y: lerp(8, -8, ez(c.u)),
                  z: lerp(1.02, 1.12, ez(c.u)) });
      truc.forEach((p, i) => K2.veDan(p, ezo((c.u - .04 - i * .1) / .12)));
      con.forEach((p, i) => K2.veDan(p, k ? ezo((c.u - .46 - i * .012) / .1) : 0));
      mat.forEach((e, i) => op(e, (k * .2 * ez((c.u - .5 - i * .05) / .1)).toFixed(3)));
      set(g, { transform: "translate(0 " + (-10 * Math.sin(c.t * .8)).toFixed(1) + ")" });
      op(root.querySelector("#k2c12-x1"), ez((c.u - .12) / .08).toFixed(3));
      op(root.querySelector("#k2c12-x2"), ez((c.u - .28) / .08).toFixed(3));
      txt("k2c12-s", soVN(59319000 * ezo(cl((c.u - .46) / .4, 0, 1))));
      kh("k2c12-a", c.t, .15, 1e9);
      kh("k2c12-b", c.t, .15 + 1e-9, 1e9);
      op(root.querySelector("#k2c12-b"), (k * ez((c.u - .44) / .06)).toFixed(3));
    };
  }
});

/* ═══════════════════════════════════════════════════════════════════
   k2c13 · câu 13 (8,9 s) · HAI CẮT CỨNG u=.30 và u=.62
   PHÉP CHIA LÀM TRƯỚC MẮT NGƯỜI XEM. Bấm máy tính kiểm được:
     27.000.000 ÷ 59.319.000 = 0,455
   và 0,455 khớp với NOAA: lực triều Mặt Trời ≈ 46 % lực triều Mặt Trăng,
   tức Mặt Trăng mạnh gấp ≈ 2,2 lần — đúng con số lời dẫn nhắc lại.
   Ba nhịp: phân số hiện ra ▸ hai thanh so chiều dài ▸ kết quả 0,45 đứng
   cạnh mốc "một nửa".
   ═══════════════════════════════════════════════════════════════════ */
DANGKY({
  id: "k2c13", steps: 0, say: [S[12]],
  html: K2.nen("#13293F", "#071020", "#04070E") + K2.troi(.08) + K2.ve(.7) + K2.toi(".92") +
    '<div class="hud">' +
    '<div class="tx" id="k2c13-ps" style="left:0;top:150px;width:1280px;display:flex;' +
         'align-items:center;justify-content:center;gap:30px">' +
      '<div style="text-align:center">' +
        '<div class="so" style="font:800 56px/1.08 system-ui;color:' + NH + '">27.000.000</div>' +
        '<div style="height:5px;background:' + C2 + ';margin:10px 0;border-radius:3px"></div>' +
        '<div class="so" style="font:800 56px/1.08 system-ui;color:' + LA + '">59.319.000</div>' +
      '</div>' +
      '<div class="so" style="font:800 62px/1 system-ui;color:' + C2 + '">=</div>' +
      '<div class="so" id="k2c13-kq" style="font:800 104px/1 system-ui;color:' + TR + '">0,000</div>' +
    '</div>' +
    K2.nguon("k2c13-ng", "Lực triều ∝ 1/d³ · NOAA: triều Mặt Trời ≈ 46 % triều Mặt Trăng") + '</div>',
  anim: root => {
    K2.rac(root);
    const T = root.querySelector("svg.troi"); T.innerHTML = ""; sao(T, 150);
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    const BX = 240, BW = 800, Y1 = 436, Y2 = 506;
    const gb = el("g", {}, V);
    el("rect", { x: BX, y: Y1, width: BW, height: 34, rx: 5, fill: "#13283A" }, gb);
    const b1 = el("rect", { x: BX, y: Y1, width: 0, height: 34, rx: 5, fill: NH }, gb);
    el("rect", { x: BX, y: Y2, width: BW, height: 34, rx: 5, fill: "#13283A" }, gb);
    const b2 = el("rect", { x: BX, y: Y2, width: 0, height: 34, rx: 5, fill: LA }, gb);
    K2.chuNho(gb, BX - 48, Y1 + 25, "☉", NH, 30);
    K2.chuNho(gb, BX - 48, Y2 + 25, "☾", TR, 30);
    /* mốc "một nửa": kết quả phải nằm BÊN TRÁI mốc này thì câu nói mới đúng */
    const moc = el("path", { d: "M" + (BX + BW * .5) + "," + (Y1 - 26) + " L" +
      (BX + BW * .5) + "," + (Y2 + 62), stroke: DO, "stroke-width": 2.8,
      "stroke-dasharray": "8 7", fill: "none", opacity: 0 }, gb);
    const nhanMoc = K2.chuNho(gb, BX + BW * .5, Y2 + 86, "một nửa", DO, 19);
    op(nhanMoc, 0);
    const gtroi = el("g", {}, V); const mt = K2.mtroi(gtroi, "k2c13", 150, 630, 30);
    const gtr = el("g", {}, V); K2.trang(gtr, "k2c13", 1140, 630, 30);
    return c => {
      const k1 = K2.cat(c.u, .30), k2 = K2.cat(c.u, .62);
      cam(root, { t: c.t, x: lerp(-12, 10, ez(c.u)), y: lerp(5, -5, ez(c.u)),
                  z: lerp(1.02, 1.09, ez(c.u)) });
      op(mt.__hao, (.55 + .3 * Math.sin(c.t * 1.2)).toFixed(3));
      set(gtroi, { transform: "translate(0 " + (-7 * Math.sin(c.t * .6)).toFixed(1) + ")" });
      set(gtr, { transform: "translate(0 " + (7 * Math.sin(c.t * .55)).toFixed(1) + ")" });
      kh("k2c13-ps", c.t, .2, 1e9);
      /* nhịp 1: phân số · nhịp 2: hai thanh chạy · nhịp 3: kết quả + mốc một nửa */
      const p = ezo(cl((c.u - .30) / .34, 0, 1));
      op(gb, (k1 * ez((c.u - .30) / .06)).toFixed(3));
      set(b1, { width: (BW * .4552 * p).toFixed(1) });
      set(b2, { width: (BW * p).toFixed(1) });
      txt("k2c13-kq", (0.4552 * p).toFixed(3).replace(".", ","));
      op(root.querySelector("#k2c13-kq"), (k1 ? 1 : .18).toFixed(2));
      op(moc, (k2 * (.55 + .4 * Math.sin(c.t * 2.4))).toFixed(3));
      op(nhanMoc, (k2 * .9).toFixed(2));
      kh("k2c13-ng", c.t, 6.4, 1e9);
    };
  }
});

/* ---- k2c14 · câu 14 (2,2 s) · "Thế là hết chuyện" — gạch ngang dứt khoát ---- */
DANGKY({
  id: "k2c14", steps: 0, say: [S[13]],
  html: K2.anh("k2-mattroi.jpg", .42, "contrast(1.16) saturate(1.1) brightness(.6)", "50% 50%") +
        K2.ve(.88) + K2.toi(".9"),
  anim: root => {
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    const g = el("path", { d: "M160,360 L1120,360", stroke: TR, "stroke-width": 11,
      "stroke-linecap": "round", fill: "none" }, V);
    return c => {
      cam(root, { t: c.t, x: lerp(10, -8, ez(c.u)), z: lerp(1.30, 1.16, ezo(c.u)) });
      K2.veDan(g, ezo(c.t / .5));
    };
  }
});

/* ---- k2c15 · câu 15 (5,2 s) · Mặt Trời lùi ra mép, Mặt Trăng tiến lại gần ---- */
DANGKY({
  id: "k2c15", steps: 0, say: [S[14]],
  html: K2.nen("#15293F", "#081220", "#04070E") + K2.troi(.08) + K2.ve(.76) + K2.toi(".88"),
  anim: root => {
    K2.rac(root);
    const T = root.querySelector("svg.troi"); T.innerHTML = ""; sao(T, 160);
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    const CX = 430, CY = 380;
    const noi = el("path", { d: "M" + (CX + 70) + "," + CY + " L1180," + CY,
      stroke: C3, "stroke-width": 2, "stroke-dasharray": "9 9", fill: "none", opacity: .6 }, V);
    const gmt = el("g", {}, V); const mt = K2.mtroi(gmt, "k2c15", 0, 0, 70);
    const gtr = el("g", {}, V); K2.trang(gtr, "k2c15", 0, 0, 44);
    const dat = K2.cau(V, "k2c15", CX, CY, 58);
    return c => {
      cam(root, { t: c.t, x: lerp(-18, 14, ez(c.u)), y: lerp(8, -8, ez(c.u)),
                  z: lerp(1.04, 1.14, ez(c.u)) });
      K2.xoay(dat, c.t * 22);
      const v = ezo(cl((c.u - .1) / .72, 0, 1));
      /* Mặt Trời lùi ra và nhỏ lại; Mặt Trăng tiến vào và to lên */
      const s1 = lerp(1.0, .42, v);
      set(gmt, { transform: "translate(" + lerp(830, 1212, v).toFixed(1) + " " +
        (CY + 9 * Math.cos(c.t * .6)).toFixed(1) + ") scale(" + s1.toFixed(3) + ")" });
      const s2 = lerp(.5, 1.1, v);
      set(gtr, { transform: "translate(" + lerp(1090, 790, v).toFixed(1) + " " +
        (CY - 10 * Math.sin(c.t * .5)).toFixed(1) + ") scale(" + s2.toFixed(3) + ")" });
      op(mt.__hao, (.5 + .3 * Math.sin(c.t * 1.4)).toFixed(3));
      K2.veDan(noi, ezo((c.u - .04) / .2));
    };
  }
});

/* ═══════════════════════════════════════════════════════════════════
   ĐOẠN 26–27 · câu 16–20 — CÁI TRỤC, và mô phỏng Laskar 1993
   Luật tự đặt cho cả cụm trục: con số ĐÃ CÓ NGƯỜI ĐO vẽ bằng nét LIỀN,
   con số còn tranh cãi vẽ bằng nét ĐỨT, và hai dải để cạnh nhau —
   không bên nào được vẽ chắc nịch hơn bên nào.
   ═══════════════════════════════════════════════════════════════════ */

/* ---- k2c16 · câu 16 (3,9 s) · nước chỉ là chỗ dễ thấy nhất ---- */
DANGKY({
  id: "k2c16", steps: 0, say: [S[15]],
  html: K2.anh("k2-trieu-can.jpg", .4,
          "contrast(1.1) saturate(1.0) brightness(.7)", "50% 60%") + K2.ve(.86) + K2.toi(".88") +
        '<div class="hud">' + K2.nguon("k2c16-ng",
          "Alma, vịnh Fundy, lúc nước ròng · Dylan Kereluk · CC BY 2.0") + '</div>',
  anim: root => {
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    /* một trục nghiêng mờ hiện lên phía sau bãi bùn: cái sắp nói tới */
    const tr = el("path", { d: "M980,60 L1100,660", stroke: TR, "stroke-width": 4,
      fill: "none", "stroke-linecap": "round", opacity: 0 }, V);
    return c => {
      cam(root, { t: c.t, x: lerp(26, -22, ez(c.u)), y: lerp(-6, 8, ez(c.u)),
                  z: lerp(1.10, 1.24, ez(c.u)) });
      K2.veDan(tr, ezo((c.u - .5) / .4));
      op(tr, (.6 * ez((c.u - .5) / .12)).toFixed(3));
      kh("k2c16-ng", c.t, .3, 2.4);
    };
  }
});

/* ---- k2c17 · câu 17 (6,6 s) · CẮT CỨNG u=.52 — 23,4° ▸ mùa gặt thật ---- */
DANGKY({
  id: "k2c17", steps: 0, say: [S[16]],
  html: K2.id(K2.nen("#16304A", "#081220", "#04070E"), "k2c17-A") +
        K2.id(K2.anh("k2-mua-gat.jpg", .44,
          "contrast(1.06) saturate(1.08) brightness(.82)", "50% 62%"), "k2c17-B") +
        K2.troi(.08) + K2.ve(.76) + K2.toi(".86") +
        '<div class="hud">' + K2.nguon("k2c17-ng",
          "Gặt lúa mì, Brownsburg, Indiana · USDA/NRCS · phạm vi công cộng") + '</div>',
  anim: root => {
    K2.rac(root);
    const A = K2.lop(root, "k2c17-A"), B = K2.lop(root, "k2c17-B");
    const T = root.querySelector("svg.troi"); T.innerHTML = ""; sao(T, 150);
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    const CX = 740, CY = 368, R = 156;
    const mt = K2.mtroi(V, "k2c17", 132, 368, 88);
    const doc = el("path", { d: "M" + CX + "," + (CY - R - 86) + " L" + CX + "," + (CY + R + 86),
      stroke: C2, "stroke-width": 2.2, "stroke-dasharray": "9 9", fill: "none", opacity: .5 }, V);
    const cung = el("path", { d: "", stroke: TR, "stroke-width": 3.4, fill: "none" }, V);
    const gE = el("g", {}, V);
    const dat = K2.cau(gE, "k2c17", CX, CY, R);
    K2.truc(gE, CX, CY, R + 74, TR);
    const nhan = K2.chuNho(V, CX + 92, CY - R - 52, "23,4°", TR, 22);
    return c => {
      const k = K2.cat(c.u, .52);
      op(A, 1); op(B, k);
      op(V.parentNode, (1 - k).toFixed(2));
      op(T.parentNode, (1 - k).toFixed(2));
      cam(root, { t: c.t, x: k ? lerp(24, -20, ez((c.u - .52) / .48)) : lerp(-22, 18, ez(c.u / .52)),
                  y: lerp(8, -8, ez(c.u)),
                  z: k ? lerp(1.18, 1.06, ez((c.u - .52) / .48)) : lerp(1.03, 1.13, ez(c.u / .52)) });
      K2.xoay(dat, c.t * 26);
      set(gE, { transform: "rotate(23.4 " + CX + " " + CY + ")" });
      const Aq = K2.dq(CX, CY, R + 60, 0), Bq = K2.dq(CX, CY, R + 60, 23.4);
      set(cung, { d: "M" + Aq[0].toFixed(1) + "," + Aq[1].toFixed(1) + " A" + (R + 60) + "," +
        (R + 60) + " 0 0,1 " + Bq[0].toFixed(1) + "," + Bq[1].toFixed(1) });
      K2.veDan(cung, ezo((c.u - .08) / .14));
      K2.veDan(doc, ezo(c.u / .1));
      op(nhan, ((1 - k) * ez((c.u - .2) / .08)).toFixed(3));
      op(mt.__hao, (.58 + .3 * Math.sin(c.t * 1.1)).toFixed(3));
      set(dat.bong, { transform: "rotate(" + (6 * Math.sin(c.t * .5)).toFixed(2) +
        " " + CX + " " + CY + ")" });
      kh("k2c17-ng", c.t, k ? 4.6 : 1e9, 1e9);
    };
  }
});

/* ---- k2c18 · câu 18 (7,4 s) · CẮT CỨNG u=.46 — Laskar 1993, Nature ---- */
DANGKY({
  id: "k2c18", steps: 0, say: [S[17]],
  html: K2.nen("#1B2C42", "#0A1120", "#04070E") + K2.troi(.08) + K2.ve(.76) + K2.toi(".9") +
        '<div class="hud">' + K2.nguon("k2c18-ng",
          "Laskar, Joutel & Robutel · Nature 361, 615 (1993)") + '</div>',
  anim: root => {
    K2.rac(root);
    const T = root.querySelector("svg.troi"); T.innerHTML = ""; sao(T, 170);
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    const CX = 640, CY = 440, R = 120, RQ = 292;
    /* nhịp 1: một trục đứng yên ở 23,4° với vành ổn định */
    const on = K2.quat(V, CX, CY, RQ, 21, 26, TR, .55);
    /* nhịp 2 (sau cắt): quạt 0–85° mở toang */
    const quat = K2.quat(V, CX, CY, RQ, 0, 85, SH, .18);
    const vien = K2.quat(V, CX, CY, RQ, 0, 85, SH, 1, "10 8");
    const gE = el("g", {}, V);
    const dat = K2.cau(gE, "k2c18", CX, CY, R);
    K2.truc(gE, CX, CY, R + 186, TR);
    const t0 = K2.chuNho(V, CX - 20, CY - RQ - 18, "0°", SH, 20);
    const p85 = K2.dq(CX, CY, RQ + 32, 85);
    const t85 = K2.chuNho(V, p85[0], p85[1] + 7, "85°", SH, 20);
    return c => {
      const k = K2.cat(c.u, .46);
      cam(root, { t: c.t, x: lerp(-18, 16, ez(c.u)), y: lerp(10, -10, ez(c.u)),
                  z: lerp(1.02, 1.11, ez(c.u)) });
      K2.xoay(dat, c.t * 20);
      op(on, ((1 - k) * .5 * ez(c.u / .1)).toFixed(3));
      const mo = k * ez((c.u - .46) / .1);
      op(quat, (.18 * mo).toFixed(3)); op(vien, mo.toFixed(3));
      op(t0, (k * ez((c.u - .56) / .07)).toFixed(3));
      op(t85, (k * ez((c.u - .6) / .07)).toFixed(3));
      const v = k ? ezo(cl((c.u - .5) / .4, 0, 1)) : 0;
      set(gE, { transform: "rotate(" + lerp(23.4, K2.lac(c.t, 2, 83, 1), v).toFixed(2) +
        " " + CX + " " + CY + ")" });
      set(vien, { "stroke-dashoffset": (-c.t * 20).toFixed(1) });
      kh("k2c18-ng", c.t, 1.0, 5.2);
    };
  }
});

/* ---- k2c19 · câu 19 (5,9 s) · trục lắc hỗn loạn, để lại vệt ---- */
DANGKY({
  id: "k2c19", steps: 0, say: [S[18]],
  html: K2.nen("#1B2C42", "#0A1120", "#04070E") + K2.troi(.08) + K2.ve(.76) + K2.toi(".9"),
  anim: root => {
    K2.rac(root);
    const T = root.querySelector("svg.troi"); T.innerHTML = ""; sao(T, 170);
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    const CX = 640, CY = 448, R = 118, RQ = 294;
    const quat = K2.quat(V, CX, CY, RQ, 0, 85, SH, .18);
    const vien = K2.quat(V, CX, CY, RQ, 0, 85, SH, 1, "10 8");
    const vet = el("path", { d: "", stroke: "#FFA98C", "stroke-width": 2.4,
      fill: "none", opacity: .6 }, V);
    const gE = el("g", {}, V);
    const dat = K2.cau(gE, "k2c19", CX, CY, R);
    K2.truc(gE, CX, CY, R + 182, TR);
    return c => {
      cam(root, { t: c.t, x: lerp(16, -14, ez(c.u)), y: lerp(-10, 10, ez(c.u)),
                  z: lerp(1.03, 1.12, ez(c.u)) });
      K2.xoay(dat, c.t * 20);
      set(gE, { transform: "rotate(" + K2.lac(c.t + 4, 2, 83, 1).toFixed(2) +
        " " + CX + " " + CY + ")" });
      set(vien, { "stroke-dashoffset": (-c.t * 20).toFixed(1) });
      let d = "";
      for (let i = 0; i < 58; i++) {
        const tt = c.t - i * .12; if (tt < 0) break;
        const p = K2.dq(CX, CY, R + 158, K2.lac(tt + 4, 2, 83, 1));
        d += (i ? " L" : "M") + p[0].toFixed(1) + "," + p[1].toFixed(1);
      }
      set(vet, { d: d || "M0,0" });
      op(vet, (.6 * ez(c.u / .12)).toFixed(3));
    };
  }
});

/* ═══════════════════════════════════════════════════════════════════
   k2c20 · câu 20 (10,9 s) · HAI CẮT CỨNG u=.34 và u=.70
   Câu dài nhất khối. Ba nhịp, ba hình:
     ① trục ngả về 85°, một vùng cực phơi hẳn ra Mặt Trời
     ② cùng vùng cực ấy chìm hẳn trong bóng tối
     ③ ẢNH THẬT mùa gặt rút kiệt màu — "mùa màng theo nghĩa ta đang
        hiểu sẽ không còn". Ảnh thật, không phải một hình vẽ ước lệ.
   ═══════════════════════════════════════════════════════════════════ */
DANGKY({
  id: "k2c20", steps: 0, say: [S[19]],
  html: K2.id(K2.nen("#1B2C42", "#0A1120", "#04070E"), "k2c20-A") +
        K2.id(K2.anh("k2-mua-gat.jpg", .44,
          "contrast(1.1) saturate(1.0) brightness(.74)", "50% 62%"), "k2c20-C") +
        K2.troi(.08) + K2.ve(.76) + K2.toi(".9"),
  anim: root => {
    K2.rac(root);
    const A = K2.lop(root, "k2c20-A"), C = K2.lop(root, "k2c20-C");
    const im = C.querySelector("img");
    const T = root.querySelector("svg.troi"); T.innerHTML = ""; sao(T, 160);
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    const CX = 780, CY = 372, R = 186;
    const mt = K2.mtroi(V, "k2c20", 108, 372, 78);
    const tia = [];
    for (let i = 0; i < 8; i++)
      tia.push(el("path", { d: "M192," + (294 + i * 24) + " L" + (CX - R - 12) + "," +
        (272 + i * 30), stroke: NH, "stroke-width": 2.2, fill: "none", opacity: .42 }, V));
    const gE = el("g", {}, V);
    const dat = K2.cau(gE, "k2c20", CX, CY, R);
    K2.truc(gE, CX, CY, R + 78, TR);
    const chom = el("circle", { cx: CX, cy: CY - R * .82, r: R * .34, fill: "#F2F9FD",
      opacity: .34 }, gE);
    return c => {
      const k1 = K2.cat(c.u, .34), k2 = K2.cat(c.u, .70);
      op(A, 1); op(C, k2);
      op(V.parentNode, (1 - k2).toFixed(2));
      op(T.parentNode, (1 - k2).toFixed(2));
      const uu = k2 ? (c.u - .70) / .30 : c.u / .70;
      cam(root, { t: c.t, x: lerp(22, -20, ez(uu)), y: lerp(-8, 8, ez(uu)),
                  z: lerp(1.04, 1.16, ez(uu)) });
      K2.xoay(dat, c.t * 14);
      set(gE, { transform: "rotate(" + lerp(23.4, 85, ezo(cl(c.u / .3, 0, 1))).toFixed(2) +
        " " + CX + " " + CY + ")" });
      tia.forEach((p, i) => {
        K2.veDan(p, ezo((c.u - .02 - i * .012) / .1));
        op(p, (.42 * (1 - k1 * .8)).toFixed(3));
      });
      /* nhịp 2: bóng đêm nuốt hẳn chỏm cực */
      const t2 = k1 ? ezo(cl((c.u - .34) / .32, 0, 1)) : 0;
      set(dat.bong, { transform: "rotate(" + (-62 + 152 * t2).toFixed(1) + " " + CX + " " + CY + ")" });
      op(chom, (.34 + .36 * (1 - t2)).toFixed(3));
      /* nhịp 3: ảnh mùa gặt rút kiệt màu */
      const v3 = k2 ? ezo(cl((c.u - .72) / .24, 0, 1)) : 0;
      if (im) im.style.filter = "contrast(" + (1.1 + .16 * v3).toFixed(2) +
        ") saturate(" + (1.0 * (1 - .92 * v3)).toFixed(3) +
        ") brightness(" + (.74 - .3 * v3).toFixed(3) + ")";
    };
  }
});

/* ═══════════════════════════════════════════════════════════════════
   ĐOẠN 28 · câu 21–25 — PHẢN BIỆN LISSAUER 2012
   Yêu cầu riêng của phiếu giao việc: phải hiện rõ đây là HAI KẾT QUẢ
   KHÁC NHAU CỦA CÙNG MỘT CÂU HỎI, không phải một đúng một sai. Nên:
   · hai dải dùng hai màu riêng (Laskar cam-san-hô · Lissauer lam)
   · cả hai vẽ bằng NÉT ĐỨT, dày bằng nhau, nét chạy đều như nhau
   · cảnh k2c24 đặt hai dải ĐỒNG TÂM, cảnh k2c25 đặt CẠNH NHAU, không
     cảnh nào để một dải che hay đè dải kia.
   ═══════════════════════════════════════════════════════════════════ */

/* ---- k2c21 · câu 21 (6,2 s) · CẮT CỨNG u=.5 — con số ấy đã bị phản biện ---- */
DANGKY({
  id: "k2c21", steps: 0, say: [S[20]],
  html: K2.nen("#1B2C42", "#0A1120", "#04070E") + K2.troi(.08) + K2.ve(.76) + K2.toi(".9"),
  anim: root => {
    K2.rac(root);
    const T = root.querySelector("svg.troi"); T.innerHTML = ""; sao(T, 150);
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    const CX = 640, CY = 446, R = 106, RQ = 288;
    const quat = K2.quat(V, CX, CY, RQ, 0, 85, SH, .18);
    const vien = K2.quat(V, CX, CY, RQ, 0, 85, SH, 1, "10 8");
    const ep = [];
    for (let i = 0; i < 2; i++) {
      const a = i ? 85 : 0;
      const p1 = K2.dq(CX, CY, RQ + 92, a), p2 = K2.dq(CX, CY, RQ + 24, a);
      ep.push(K2.ten(V, p1[0], p1[1], p2[0], p2[1], TR, 5.5));
    }
    const gE = el("g", {}, V);
    const dat = K2.cau(gE, "k2c21", CX, CY, R);
    K2.truc(gE, CX, CY, R + 178, TR);
    return c => {
      const k = K2.cat(c.u, .5);
      cam(root, { t: c.t, x: lerp(16, -14, ez(c.u)), y: lerp(-8, 8, ez(c.u)),
                  z: lerp(1.03, 1.12, ez(c.u)) });
      K2.xoay(dat, c.t * 18);
      set(gE, { transform: "rotate(" + K2.lac(c.t + 7, 4, 80, 1).toFixed(2) +
        " " + CX + " " + CY + ")" });
      set(vien, { "stroke-dashoffset": (-c.t * 20).toFixed(1) });
      const v = k ? ezo(cl((c.u - .5) / .32, 0, 1)) : 0;
      op(quat, (.18 * (1 - .72 * v)).toFixed(3));
      op(vien, (1 - .56 * v).toFixed(3));
      ep.forEach((a, i) => {
        const w = k ? ezo(cl((c.u - .5 - i * .05) / .22, 0, 1)) : 0;
        K2.veDan(a.than, w); op(a.dau, ez((w - .86) / .12));
      });
    };
  }
});

/* ---- k2c22 · câu 22 (6,5 s) · CẮT CỨNG u=.44 — chạy lại với NHIỀU điều kiện đầu
       "nhiều điều kiện ban đầu hơn" = nhiều trục cùng xuất phát từ nhiều góc. ---- */
DANGKY({
  id: "k2c22", steps: 0, say: [S[21]],
  html: K2.nen("#16263C", "#0A1120", "#04070E") + K2.troi(.08) + K2.ve(.76) + K2.toi(".9"),
  anim: root => {
    K2.rac(root);
    const T = root.querySelector("svg.troi"); T.innerHTML = ""; sao(T, 150);
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    const CX = 640, CY = 452, R = 96;
    /* 24 lần chạy, mỗi lần một điều kiện đầu khác nhau */
    const run = [];
    for (let i = 0; i < 24; i++)
      run.push(el("path", { d: "", stroke: LA, "stroke-width": 1.8, fill: "none",
        opacity: 0, "stroke-linecap": "round" }, V));
    const gE = el("g", {}, V);
    const dat = K2.cau(gE, "k2c22", CX, CY, R);
    K2.truc(gE, CX, CY, R + 96, TR);
    return c => {
      const k = K2.cat(c.u, .44);
      cam(root, { t: c.t, x: lerp(-16, 14, ez(c.u)), y: lerp(8, -8, ez(c.u)),
                  z: lerp(1.02, 1.1, ez(c.u)) });
      K2.xoay(dat, c.t * 19);
      set(gE, { transform: "rotate(" + K2.lac(c.t, 8, 52, .9).toFixed(2) +
        " " + CX + " " + CY + ")" });
      run.forEach((p, i) => {
        const a0 = 3 + i * 3.4;                /* điều kiện đầu thứ i */
        const n = k ? 26 : 8;
        let d = "";
        for (let j = 0; j < n; j++) {
          const tt = c.t - j * .16;
          const aa = K2.lac(tt + i * 1.7, Math.max(0, a0 - 26), Math.min(85, a0 + 26), .9);
          const q = K2.dq(CX, CY, R + 66 + i * 9.5, aa);
          d += (j ? " L" : "M") + q[0].toFixed(1) + "," + q[1].toFixed(1);
        }
        set(p, { d: d || "M0,0" });
        op(p, (ez((c.u - .04 - i * .016) / .07) * (k ? .5 : .3)).toFixed(3));
      });
    };
  }
});

/* ---- k2c23 · câu 23 (7,6 s) · CẮT CỨNG u=.45 — Icarus 2012: dải 10–50° ---- */
DANGKY({
  id: "k2c23", steps: 0, say: [S[22]],
  html: K2.nen("#16263C", "#0A1120", "#04070E") + K2.troi(.08) + K2.ve(.76) + K2.toi(".9") +
        '<div class="hud">' + K2.nguon("k2c23-ng",
          "Lissauer, Barnes & Chambers · Icarus 217, 77 (2012)") + '</div>',
  anim: root => {
    K2.rac(root);
    const T = root.querySelector("svg.troi"); T.innerHTML = ""; sao(T, 160);
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    const CX = 640, CY = 448, R = 112, RQ = 292;
    const cu = K2.quat(V, CX, CY, RQ, 0, 85, SH, 1, "10 8"); op(cu, .3);
    const moi = K2.quat(V, CX, CY, RQ, 10, 50, LA, .22);
    const vien = K2.quat(V, CX, CY, RQ, 10, 50, LA, 1, "10 8");
    const vet = el("path", { d: "", stroke: "#A9E4F8", "stroke-width": 2.4,
      fill: "none", opacity: .55 }, V);
    const gE = el("g", {}, V);
    const dat = K2.cau(gE, "k2c23", CX, CY, R);
    K2.truc(gE, CX, CY, R + 178, TR);
    const p10 = K2.dq(CX, CY, RQ + 30, 10), p50 = K2.dq(CX, CY, RQ + 32, 50);
    const n10 = K2.chuNho(V, p10[0], p10[1], "10°", LA, 20);
    const n50 = K2.chuNho(V, p50[0], p50[1] + 7, "50°", LA, 20);
    return c => {
      const k = K2.cat(c.u, .45);
      cam(root, { t: c.t, x: lerp(-20, 18, ez(c.u)), y: lerp(10, -10, ez(c.u)),
                  z: lerp(1.02, 1.11, ez(c.u)) });
      K2.xoay(dat, c.t * 17);
      const mo = k * ez((c.u - .45) / .1);
      op(moi, (.22 * mo).toFixed(3)); op(vien, mo.toFixed(3));
      op(n10, (k * ez((c.u - .55) / .07)).toFixed(3));
      op(n50, (k * ez((c.u - .58) / .07)).toFixed(3));
      set(vien, { "stroke-dashoffset": (c.t * 20).toFixed(1) });
      set(cu, { "stroke-dashoffset": (-c.t * 20).toFixed(1) });
      const v = k ? ezo(cl((c.u - .46) / .4, 0, 1)) : 0;
      set(gE, { transform: "rotate(" +
        lerp(K2.lac(c.t, 3, 82, 1), K2.lac(c.t, 11, 49, .8), v).toFixed(2) +
        " " + CX + " " + CY + ")" });
      let d = "";
      for (let i = 0; i < 56; i++) {
        const tt = c.t - i * .14; if (tt < 0) break;
        const vv = k ? ezo(cl(((c.u - .46) - i * .14 / Math.max(c.dur, 1)) / .4, 0, 1)) : 0;
        const q = K2.dq(CX, CY, R + 148, lerp(K2.lac(tt, 3, 82, 1), K2.lac(tt, 11, 49, .8), vv));
        d += (i ? " L" : "M") + q[0].toFixed(1) + "," + q[1].toFixed(1);
      }
      set(vet, { d: d || "M0,0" });
      op(vet, (.55 * ez(c.u / .12)).toFixed(3));
      kh("k2c23-ng", c.t, 4.4, 7.4);
    };
  }
});

/* ---- k2c24 · câu 24 (6,4 s) · ba dải đồng tâm: hôm nay · Lissauer · Laskar ---- */
DANGKY({
  id: "k2c24", steps: 0, say: [S[23]],
  html: K2.nen("#16263C", "#0A1120", "#04070E") + K2.troi(.08) + K2.ve(.76) + K2.toi(".9"),
  anim: root => {
    K2.rac(root);
    const T = root.querySelector("svg.troi"); T.innerHTML = ""; sao(T, 150);
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    const CX = 640, CY = 462, R = 92;
    const q3 = K2.quat(V, CX, CY, 318, 0, 85, SH, .15);
    const v3 = K2.quat(V, CX, CY, 318, 0, 85, SH, 1, "10 8");
    const q2 = K2.quat(V, CX, CY, 252, 10, 50, LA, .22);
    const v2 = K2.quat(V, CX, CY, 252, 10, 50, LA, 1, "10 8");
    /* dải HÔM NAY 22,1–24,5°: hẹp tới mức gần như một nét, và vẽ NÉT LIỀN
       vì đây là con số đo được, không phải mô phỏng */
    const q1 = K2.quat(V, CX, CY, 190, 22.1, 24.5, TR, .9);
    const gE = el("g", {}, V);
    const dat = K2.cau(gE, "k2c24", CX, CY, R);
    K2.truc(gE, CX, CY, R + 94, TR);
    const pn = K2.dq(CX, CY, 212, 23.3);
    const nh = K2.chuNho(V, pn[0] + 52, pn[1] - 6, "23,4°", TR, 20);
    const pl = K2.dq(CX, CY, 274, 30);
    const nl = K2.chuNho(V, pl[0] + 40, pl[1], "2012", LA, 18);
    const pk = K2.dq(CX, CY, 340, 62);
    const nk = K2.chuNho(V, pk[0] + 34, pk[1], "1993", SH, 18);
    return c => {
      cam(root, { t: c.t, x: lerp(-16, 14, ez(c.u)), y: lerp(8, -8, ez(c.u)),
                  z: lerp(1.03, 1.12, ez(c.u)) });
      K2.xoay(dat, c.t * 19);
      set(gE, { transform: "rotate(" + (23.3 + .9 * Math.sin(c.t * .8)).toFixed(2) +
        " " + CX + " " + CY + ")" });
      const f = (e, a, k) => op(e, (k * ez((c.u - a) / .08)).toFixed(3));
      f(q3, .04, .15); f(v3, .04, 1); f(nk, .1, .95);
      f(q2, .18, .22); f(v2, .18, 1); f(nl, .24, .95);
      f(q1, .34, .9);  f(nh, .4, 1);
      set(v3, { "stroke-dashoffset": (-c.t * 20).toFixed(1) });
      set(v2, { "stroke-dashoffset": (c.t * 20).toFixed(1) });
      set(q1, { transform: "rotate(" + (.8 * Math.sin(c.t * 1.3)).toFixed(2) +
        " " + CX + " " + CY + ")" });
    };
  }
});

/* ---- k2c25 · câu 25 (4,4 s) · hai dải CẠNH NHAU, cân bằng nhau ---- */
DANGKY({
  id: "k2c25", steps: 0, say: [S[24]],
  html: K2.nen("#16263C", "#0A1120", "#04070E") + K2.troi(.08) + K2.ve(.78) + K2.toi(".9"),
  anim: root => {
    K2.rac(root);
    const T = root.querySelector("svg.troi"); T.innerHTML = ""; sao(T, 140);
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    const Ax = 330, Ay = 392, Bx = 950, By = 392;
    const q1 = K2.quat(V, Ax, Ay, 258, 0, 85, SH, 1, "11 9");
    const qf1 = K2.quat(V, Ax, Ay, 258, 0, 85, SH, .16);
    const q2 = K2.quat(V, Bx, By, 258, 10, 50, LA, 1, "11 9");
    const qf2 = K2.quat(V, Bx, By, 258, 10, 50, LA, .2);
    const g1 = el("g", {}, V), g2 = el("g", {}, V);
    const d1 = K2.cau(g1, "k2c25a", Ax, Ay, 78);
    const d2 = K2.cau(g2, "k2c25b", Bx, By, 78);
    K2.truc(g1, Ax, Ay, 152, TR); K2.truc(g2, Bx, By, 152, TR);
    const n1 = K2.chuNho(V, Ax, Ay + 288, "Nature 1993", SH, 22);
    const n2 = K2.chuNho(V, Bx, By + 288, "Icarus 2012", LA, 22);
    return c => {
      cam(root, { t: c.t, x: lerp(14, -12, ez(c.u)), z: lerp(1.03, 1.11, ez(c.u)) });
      K2.xoay(d1, c.t * 22); K2.xoay(d2, c.t * 22);
      set(g1, { transform: "rotate(" + K2.lac(c.t, 4, 80, 1.2).toFixed(2) + " " + Ax + " " + Ay + ")" });
      set(g2, { transform: "rotate(" + K2.lac(c.t + 3, 12, 48, 1.2).toFixed(2) + " " + Bx + " " + By + ")" });
      /* nét đứt chạy trên cả hai vành, cùng tốc độ: không bên nào chắc nịch hơn */
      [q1, q2].forEach((e, i) => {
        e.setAttribute("stroke-dashoffset", (-c.t * 26 * (i ? -1 : 1)).toFixed(1));
        op(e, ez((c.u - .03 - i * .05) / .1).toFixed(3));
      });
      op(qf1, (.16 * ez((c.u - .03) / .1)).toFixed(3));
      op(qf2, (.2 * ez((c.u - .08) / .1)).toFixed(3));
      op(n1, ez((c.u - .2) / .1).toFixed(3));
      op(n2, ez((c.u - .26) / .1).toFixed(3));
    };
  }
});

/* ═══════════════════════════════════════════════════════════════════
   ĐOẠN 29 · câu 26–30 — CÁI PHANH VÀ ĐỘ DÀI MỘT NGÀY
   ═══════════════════════════════════════════════════════════════════ */

/* ---- k2c26 · câu 26 (4,7 s) · VIDEO Trái Đất quay thật + nét hãm ---- */
DANGKY({
  id: "k2c26", steps: 0, say: [S[25]],
  html: K2.vid("k2-traidat-quay.mp4", .34, { tu: 0, dai: 4.5, toc: .9,
          loc: "contrast(1.12) saturate(1.1) brightness(.88)" }) +
        K2.ve(.82) + K2.toi(".86"),
  anim: root => {
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    const cung = el("path", { d: "M330,360 A310,310 0 0,1 640,50", stroke: TR,
      "stroke-width": 7, fill: "none", "stroke-linecap": "round" }, V);
    const ham = el("path", { d: "M900,118 L1066,214", stroke: DO, "stroke-width": 15,
      "stroke-linecap": "round", fill: "none" }, V);
    const gtr = el("g", {}, V); K2.trang(gtr, "k2c26", 1140, 560, 42);
    return c => {
      cam(root, { t: c.t, x: lerp(-12, 10, ez(c.u)), z: lerp(1.06, 1.16, ez(c.u)) });
      K2.veDan(cung, ezo(c.u / .2));
      K2.veDan(ham, ezo((c.u - .32) / .14));
      op(gtr, ez((c.u - .12) / .1).toFixed(3));
      set(gtr, { transform: "translate(" + (10 * Math.sin(c.t * .5)).toFixed(1) + " " +
        (-8 * Math.cos(c.t * .45)).toFixed(1) + ")" });
    };
  }
});

/* ---- k2c27 · câu 27 (5,5 s) · chỗ nước phồng = chỗ nước cọ vào Trái Đất ---- */
DANGKY({
  id: "k2c27", steps: 0, say: [S[26]],
  html: K2.nen("#15293F", "#081220", "#04070E") + K2.troi(.08) + K2.ve(.76) + K2.toi(".9"),
  anim: root => {
    K2.rac(root);
    const T = root.querySelector("svg.troi"); T.innerHTML = ""; sao(T, 150);
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    const CX = 520, CY = 376, R = 150;
    gradR(V, "k2c27-n", CX, CY, R * 1.55,
      [[.70, "#6FD0F0", 0], [.87, "#6FD0F0", .66], [1, "#6FD0F0", 0]]);
    const gph = el("g", {}, V);
    const phong = el("ellipse", { cx: CX, cy: CY, rx: R * 1.3, ry: R * .94,
      fill: "url(#k2c27-n)" }, gph);
    phong.style.mixBlendMode = "screen";
    const dat = K2.cau(V, "k2c27", CX, CY, R);
    const gtr = el("g", {}, V); K2.trang(gtr, "k2c27", 1120, CY, 44);
    /* vòng ma sát: những nét ngắn ở đúng chỗ khối nước cọ vào vỏ hành tinh */
    const ms = [];
    for (let i = 0; i < 18; i++)
      ms.push(el("path", { d: "", stroke: SH, "stroke-width": 3.2, fill: "none",
        "stroke-linecap": "round", opacity: 0 }, V));
    const kdau = K2.ten(V, 0, 0, 0, 0, DO, 6);
    return c => {
      cam(root, { t: c.t, x: lerp(24, -20, ez(c.u)), y: lerp(6, -8, ez(c.u)),
                  z: lerp(1.04, 1.14, ez(c.u)) });
      K2.xoay(dat, c.t * 44);
      const b = ezo(cl((c.u - .05) / .3, 0, 1));
      set(phong, { rx: (R * (1 + .32 * b)).toFixed(1), ry: (R * (1 - .1 * b)).toFixed(1) });
      op(phong, (.5 + .12 * Math.sin(c.t * .9)).toFixed(3));
      /* chỏm nước bị mang VƯỢT lên trước Mặt Trăng một góc nhỏ */
      const dan = 22 * ezo(cl((c.u - .1) / .34, 0, 1));
      set(gph, { transform: "rotate(" + (-dan).toFixed(2) + " " + CX + " " + CY + ")" });
      ms.forEach((p, i) => {
        const a = (-dan - 30 + i * 3.6) * Math.PI / 180;
        const r1 = R * 1.0, r2 = R * 1.0 + 16 + 7 * Math.sin(c.t * 3 + i);
        set(p, { d: "M" + (CX + Math.cos(a) * r1).toFixed(1) + "," + (CY + Math.sin(a) * r1).toFixed(1) +
          " L" + (CX + Math.cos(a) * r2).toFixed(1) + "," + (CY + Math.sin(a) * r2).toFixed(1) });
        op(p, (.8 * ez((c.u - .3 - i * .012) / .08)).toFixed(3));
      });
      const pa = -dan * Math.PI / 180;
      const px = CX + Math.cos(pa) * R * 1.3, py = CY + Math.sin(pa) * R * 1.3;
      K2.datTen(kdau, px, py, px - 108, py + 34);
      const w = ezo(cl((c.u - .5) / .22, 0, 1));
      K2.veDan(kdau.than, w); op(kdau.dau, ez((w - .86) / .12));
      set(gtr, { transform: "translate(0 " + (-9 * Math.sin(c.t * .5)).toFixed(1) + ")" });
    };
  }
});

/* ---- k2c28 · câu 28 (5,7 s) · cái giá: 3,8 cm mỗi năm ---- */
DANGKY({
  id: "k2c28", steps: 0, say: [S[27]],
  html: K2.anh("k2-mattrang.jpg", .4,
          "contrast(1.1) saturate(.42) brightness(.84)", "38% 50%") +
        K2.ve(.86) + K2.toi(".88") +
        '<div class="hud">' +
        '<div class="tx" id="k2c28-a" style="left:auto;right:92px;top:290px;text-align:right">' +
          '<span class="so" id="k2c28-s" style="font:800 104px/1 system-ui;color:' + TR +
          ';letter-spacing:-.03em">0,0</span>' +
          '<span class="dv" style="color:' + C2 + '">&nbsp;cm</span></div>' +
        K2.nguon("k2c28-ng", "Mặt gần Mặt Trăng · NASA/GSFC/ASU (LRO) · phạm vi công cộng") + '</div>',
  anim: root => {
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    const a = K2.ten(V, 560, 620, 1050, 620, TR, 6);
    const vach = [];
    for (let i = 0; i < 2; i++)
      vach.push(el("path", { d: "M" + (560 + i * 490) + ",576 L" + (560 + i * 490) + ",664",
        stroke: TR, "stroke-width": 2.6, fill: "none", opacity: 0 }, V));
    return c => {
      cam(root, { t: c.t, x: lerp(-22, 16, ez(c.u)), z: lerp(1.16, 1.04, ezo(c.u)) });
      txt("k2c28-s", (3.8 * ezo(cl((c.u - .1) / .5, 0, 1))).toFixed(1).replace(".", ","));
      kh("k2c28-a", c.t, .4, 1e9);
      const w = ezo(cl((c.u - .22) / .3, 0, 1));
      K2.veDan(a.than, w); op(a.dau, ez((w - .86) / .12));
      vach.forEach((p, i) => { K2.veDan(p, ezo((c.u - .18 - i * .3) / .1)); op(p, .8); });
      kh("k2c28-ng", c.t, 3.6, 1e9);
    };
  }
});

/* ---- k2c29 · câu 29 (3,6 s) · hai chuyện gộp làm một ---- */
DANGKY({
  id: "k2c29", steps: 0, say: [S[28]],
  html: K2.nen("#15293F", "#081220", "#04070E") + K2.troi(.08) + K2.ve(.8) + K2.toi(".88"),
  anim: root => {
    K2.rac(root);
    const T = root.querySelector("svg.troi"); T.innerHTML = ""; sao(T, 130);
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    const dat = K2.cau(V, "k2c29", 248, 208, 76);
    const cung = el("path", { d: "M150,208 A98,98 0 0,1 248,110", stroke: TR,
      "stroke-width": 5.5, fill: "none", "stroke-linecap": "round" }, V);
    const gtr = el("g", {}, V); K2.trang(gtr, "k2c29", 248, 540, 44);
    const a = K2.ten(V, 356, 238, 628, 338, C2, 6);
    const b = K2.ten(V, 356, 512, 628, 404, C2, 6);
    const h = K2.ten(V, 672, 372, 1150, 372, TR, 11);
    return c => {
      cam(root, { t: c.t, x: lerp(-12, 10, ez(c.u)), z: lerp(1.03, 1.12, ez(c.u)) });
      K2.xoay(dat, c.t * 40);
      K2.veDan(cung, lerp(1, .48, ezo(c.u / .5)));
      set(gtr, { transform: "translate(" + (30 * ezo(c.u / .6)).toFixed(1) + " 0)" });
      const w = ezo(c.u / .18);
      K2.veDan(a.than, w); K2.veDan(b.than, w);
      op(a.dau, ez((w - .86) / .12)); op(b.dau, ez((w - .86) / .12));
      const v = ezo((c.u - .2) / .22);
      K2.veDan(h.than, v); op(h.dau, ez((v - .86) / .12));
      op(h.g, ez((c.u - .18) / .1).toFixed(3));
    };
  }
});

/* ---- k2c30 · câu 30 (6,2 s) · CẮT CỨNG u=.42 — mặt đồng hồ 24 giờ co còn 5–6 ---- */
DANGKY({
  id: "k2c30", steps: 0, say: [S[29]],
  html: K2.id(K2.vid("k2-traidat-quay.mp4", .24, { tu: 0, dai: 4.5, toc: 1.6,
          loc: "contrast(1.08) saturate(1.0) brightness(.46)" }), "k2c30-V") +
        K2.ve(.8) + K2.toi(".9") +
        '<div class="hud">' +
        '<div class="tx" id="k2c30-a" style="left:0;top:596px;width:1280px;text-align:center">' +
          '<span class="so" id="k2c30-s" style="font:800 76px/1 system-ui;color:' + TR + '">24</span>' +
          '<span class="dv" style="color:' + C2 + '">&nbsp;h</span></div></div>',
  anim: root => {
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    const CX = 640, CY = 330, R = 222;
    el("circle", { cx: CX, cy: CY, r: R, fill: "#08192A", opacity: .72,
      stroke: "#2B5574", "stroke-width": 2.6 }, V);
    for (let i = 0; i < 24; i++) {
      const a = i * 15, p1 = K2.dq(CX, CY, R, a), p2 = K2.dq(CX, CY, R - (i % 6 ? 13 : 24), a);
      el("path", { d: "M" + p1[0].toFixed(1) + "," + p1[1].toFixed(1) + " L" +
        p2[0].toFixed(1) + "," + p2[1].toFixed(1), stroke: C2,
        "stroke-width": i % 6 ? 1.8 : 3.2, opacity: i % 6 ? .55 : .9 }, V);
    }
    const quat = el("path", { d: "", fill: TR, opacity: .36, stroke: TR, "stroke-width": 2.6 }, V);
    const kim = el("path", { d: "", stroke: NH, "stroke-width": 5.5,
      "stroke-linecap": "round", fill: "none" }, V);
    for (let i = 0; i < 4; i++) {
      const p = K2.dq(CX, CY, R + 28, i * 90);
      K2.chuNho(V, p[0], p[1] + 7, ["24", "6", "12", "18"][i], C2, 19);
    }
    return c => {
      const k = K2.cat(c.u, .42);
      cam(root, { t: c.t, x: lerp(-18, 16, ez(c.u)), y: lerp(8, -8, ez(c.u)),
                  z: lerp(1.03, 1.12, ez(c.u)) });
      const v = k ? ezo(cl((c.u - .42) / .4, 0, 1)) : 0;
      const gio = lerp(24, 5.5 + .5 * Math.sin(c.t * 1.2), v);
      const a1 = cl(gio * 15, 0, 359.4);
      const A = K2.dq(CX, CY, R - 30, 0), Bq = K2.dq(CX, CY, R - 30, a1 % 360);
      set(quat, { d: "M" + CX + "," + CY + " L" + A[0].toFixed(1) + "," + A[1].toFixed(1) +
        " A" + (R - 30) + "," + (R - 30) + " 0 " + (a1 > 180 ? 1 : 0) + ",1 " +
        Bq[0].toFixed(1) + "," + Bq[1].toFixed(1) + " Z" });
      op(quat, (.36 * ez(c.u / .1)).toFixed(3));
      const kp = K2.dq(CX, CY, R - 30, (c.t * (150 + v * 500)) % 360);
      set(kim, { d: "M" + CX + "," + CY + " L" + kp[0].toFixed(1) + "," + kp[1].toFixed(1) });
      op(kim, (.9 * ez(c.u / .1)).toFixed(3));
      txt("k2c30-s", gio >= 23.5 ? "24" : (Math.round(gio * 10) / 10).toFixed(1).replace(".", ","));
      kh("k2c30-a", c.t, .3, 1e9);
    };
  }
});

/* ═══════════════════════════════════════════════════════════════════
   ĐOẠN 30 · câu 31–33 — CON SỐ 6–8 TIẾNG KHÔNG CÓ NGUỒN
   Lời dẫn tự khai là nó không dùng con số ấy. Hình phải đỡ được sự
   trung thực đó: con số 6–8 KHÔNG được vẽ như một sự thật, nó hiện ra
   như tin đồn — nhiều bản sao lệch nhau, mỗi bản treo trên một ô nguồn
   RỖNG nét đứt, rồi tắt dần, ô nguồn ở lại rỗng.
   Xem nghien-cuu/tu-lieu.md, mục "ĐỪNG DÙNG" số 1.
   ═══════════════════════════════════════════════════════════════════ */

/* ---- k2c31 · câu 31 (4,5 s) · đồng hồ không có kim chốt ---- */
DANGKY({
  id: "k2c31", steps: 0, say: [S[30]],
  html: K2.anh("k2-mattrang.jpg", .2,
          "contrast(1.06) saturate(.3) brightness(.44)", "50% 50%") +
        K2.id(K2.nen("#15293F", "#081220", "#04070E"), "k2c31-nen") +
        K2.troi(.08) + K2.ve(.78) + K2.toi(".9"),
  anim: root => {
    K2.rac(root);
    /* lớp Mặt Trăng thật nằm dưới lớp chuyển sắc, chỉ để khung có chất liệu.
       Lấy lớp bằng ID, KHÔNG bằng chỉ số: K2.nen() tự nó đã là hai .lop (§16.9). */
    const nenL = K2.lop(root, "k2c31-nen");
    if (nenL) nenL.style.opacity = ".8";
    const T = root.querySelector("svg.troi"); T.innerHTML = ""; sao(T, 140);
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    const CX = 640, CY = 366, R = 222;
    el("circle", { cx: CX, cy: CY, r: R, fill: "#08192A", opacity: .6, stroke: "#2B5574",
      "stroke-width": 2.6, "stroke-dasharray": "13 10" }, V);
    for (let i = 0; i < 24; i++) {
      const p1 = K2.dq(CX, CY, R, i * 15), p2 = K2.dq(CX, CY, R - 13, i * 15);
      el("path", { d: "M" + p1[0].toFixed(1) + "," + p1[1].toFixed(1) + " L" +
        p2[0].toFixed(1) + "," + p2[1].toFixed(1), stroke: C2, "stroke-width": 1.8,
        opacity: .4 }, V);
    }
    const quat = el("path", { d: "", fill: TR, opacity: .16 }, V);
    const kim = el("path", { d: "", stroke: TR, "stroke-width": 5.5,
      "stroke-linecap": "round", fill: "none" }, V);
    const dat = K2.cau(V, "k2c31", CX, CY, 76);
    return c => {
      cam(root, { t: c.t, x: lerp(16, -14, ez(c.u)), y: lerp(-8, 8, ez(c.u)),
                  z: lerp(1.03, 1.12, ez(c.u)) });
      K2.xoay(dat, c.t * 70);
      /* nan quạt KHÔNG chốt ở đâu cả — nó cứ trượt, vì không ai đo được */
      const gio = 11 + 8 * Math.sin(c.t * 1.05) + 3 * Math.sin(c.t * 2.3 + 1.2);
      const a1 = cl(gio * 15, 10, 359.4);
      const A = K2.dq(CX, CY, R - 30, 0), Bq = K2.dq(CX, CY, R - 30, a1);
      set(quat, { d: "M" + CX + "," + CY + " L" + A[0].toFixed(1) + "," + A[1].toFixed(1) +
        " A" + (R - 30) + "," + (R - 30) + " 0 " + (a1 > 180 ? 1 : 0) + ",1 " +
        Bq[0].toFixed(1) + "," + Bq[1].toFixed(1) + " Z" });
      op(quat, (.18 * ez(c.u / .12)).toFixed(3));
      set(kim, { d: "M" + CX + "," + CY + " L" + Bq[0].toFixed(1) + "," + Bq[1].toFixed(1) });
      op(kim, (.8 * ez(c.u / .12)).toFixed(3));
    };
  }
});

/* ---- k2c32 · câu 32 (8,7 s) · HAI CẮT CỨNG u=.36 và u=.72 · CHỮ 2/5 «6–8», 0 TỪ ---- */
DANGKY({
  id: "k2c32", steps: 0, say: [S[31]],
  html: K2.nen("#1A2436", "#0A1120", "#04070E") + K2.troi(.08) + K2.ve(.8) + K2.toi(".9"),
  anim: root => {
    K2.rac(root);
    const T = root.querySelector("svg.troi"); T.innerHTML = ""; sao(T, 140);
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    const dat = K2.cau(V, "k2c32", 640, 608, 74);
    const o = [];
    for (let i = 0; i < 14; i++) {
      const g = el("g", {}, V);
      const e = el("text", { x: 0, y: 0, fill: TR, "font-family": "system-ui",
        "font-size": 64, "font-weight": 800, "text-anchor": "middle",
        "letter-spacing": "-.02em" }, g);
      e.textContent = "6–8";
      const ho = el("rect", { x: -76, y: 18, width: 152, height: 28, rx: 4, fill: "none",
        stroke: DO, "stroke-width": 2.2, "stroke-dasharray": "7 6" }, g);
      g.__x = 170 + rn(i, 111) * 900; g.__y = 104 + rn(i, 112) * 300;
      g.__s = .6 + rn(i, 113) * .95; g.__k = rn(i, 114); g.__e = e; g.__o = ho;
      o.push(g);
    }
    return c => {
      const k1 = K2.cat(c.u, .36), k2 = K2.cat(c.u, .72);
      cam(root, { t: c.t, x: lerp(-16, 14, ez(c.u)), y: lerp(8, -8, ez(c.u)),
                  z: lerp(1.02, 1.1, ez(c.u)) });
      K2.xoay(dat, c.t * 24);
      o.forEach((g, i) => {
        const vao = ez((c.u - .02 - g.__k * .3) / .08);
        /* từ mốc 2: đi tìm nguồn — ô nguồn rỗng sáng lên. Từ mốc 3: con số tắt dần,
           ô nguồn ở lại RỖNG rồi mới tắt theo. */
        const ra = k2 ? ezo(cl((c.u - .72 - g.__k * .16) / .18, 0, 1)) : 0;
        op(g, (vao * (.62 + .36 * g.__k)).toFixed(3));
        op(g.__e, (1 - ra).toFixed(3));
        op(g.__o, (k1 * (.9 * (1 - ezo(cl((c.u - .88 - g.__k * .07) / .1, 0, 1))))).toFixed(3));
        set(g.__o, { "stroke-dashoffset": (-c.t * 11).toFixed(1) });
        set(g, { transform: "translate(" + (g.__x + 16 * Math.sin(c.t * .5 + i)).toFixed(1) +
          " " + (g.__y + 12 * Math.cos(c.t * .43 + i * 1.7) - ra * 20).toFixed(1) +
          ") scale(" + (g.__s * (1 - ra * .14)).toFixed(3) + ")" });
      });
    };
  }
});

/* ---- k2c33 · câu 33 (9,0 s) · CẮT CỨNG u=.46 — quay nhanh hơn ▸ GIÓ MẠNH HƠN
       Nửa sau là ẢNH THẬT một cơn bão nhìn từ trạm vũ trụ: "gió mạnh hơn"
       có vật thật để xem, không phải mấy nét kẻ ngang. ---- */
DANGKY({
  id: "k2c33", steps: 0, say: [S[32]],
  html: K2.id(K2.nen("#15293F", "#081220", "#04070E"), "k2c33-A") +
        K2.id(K2.anh("k2-bao.jpg", .42,
          "contrast(1.12) saturate(1.06) brightness(.82)", "50% 52%"), "k2c33-B") +
        K2.troi(.08) + K2.ve(.78) + K2.toi(".88") +
        '<div class="hud">' + K2.nguon("k2c33-ng",
          "Bão Soudelor nhìn từ Trạm Vũ trụ Quốc tế · NASA Earth Observatory · CC BY 2.0") + '</div>',
  anim: root => {
    K2.rac(root);
    const A = K2.lop(root, "k2c33-A"), B = K2.lop(root, "k2c33-B");
    const T = root.querySelector("svg.troi"); T.innerHTML = ""; sao(T, 150);
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    const CX = 640, CY = 372, R = 200;
    const dat = K2.cau(V, "k2c33", CX, CY, R);
    /* TÊN RIÊNG cho khuôn cắt dải gió: K2.cau đã chiếm "k2c33-cp" rồi (§16.8). */
    const gio = [], cp = el("clipPath", { id: "k2c33-giocp" }, defsOf(V));
    el("circle", { cx: CX, cy: CY, r: R }, cp);
    const gg = el("g", { "clip-path": "url(#k2c33-giocp)" }, V);
    for (let i = 0; i < 28; i++) {
      const y = CY - R + 14 + (i / 27) * (2 * R - 28);
      const e = el("path", { d: "M0," + y.toFixed(1) + " L0," + y.toFixed(1),
        stroke: "#DCEFFA", "stroke-width": (1.8 + rn(i, 121) * 2.4).toFixed(1),
        "stroke-linecap": "round", fill: "none", opacity: 0 }, gg);
      e.__y = y.toFixed(1); gio.push(e);
    }
    return c => {
      const k = K2.cat(c.u, .46);
      op(A, 1); op(B, k);
      op(V.parentNode, (1 - k).toFixed(2));
      op(T.parentNode, (1 - k).toFixed(2));
      const uu = k ? (c.u - .46) / .54 : c.u / .46;
      cam(root, { t: c.t, x: lerp(-20, 18, ez(uu)), y: lerp(10, -10, ez(uu)),
                  z: k ? lerp(1.22, 1.08, ez(uu)) : lerp(1.03, 1.14, ez(uu)) });
      const w = lerp(34, 210, ezo(cl(c.u / .46, 0, 1)));
      K2.xoay(dat, c.t * w + c.t * c.t * 6);
      set(dat.bong, { transform: "rotate(" + (-c.t * w * .5).toFixed(1) +
        " " + CX + " " + CY + ")" });
      const m = ezo(cl(c.u / .44, 0, 1));
      gio.forEach((p, i) => {
        const L = 40 + m * (190 + rn(i, 122) * 190);
        const ph = ((c.t * (.26 + m * 1.6) * (1 + rn(i, 123)) + rn(i, 124)) % 1);
        const x0 = CX - R - 120 + ph * (2 * R + 240);
        set(p, { d: "M" + (x0 - L).toFixed(1) + "," + p.__y + " L" + x0.toFixed(1) + "," + p.__y });
        op(p, (Math.sin(ph * Math.PI) * (.22 + m * .6)).toFixed(3));
      });
      kh("k2c33-ng", c.t, k ? 5.4 : 1e9, 1e9);
    };
  }
});

/* ═══════════════════════════════════════════════════════════════════
   ĐOẠN 31 · câu 34–35 — BẢN LỀ: hết phần đo đạc, vào phần giả định
   ═══════════════════════════════════════════════════════════════════ */

/* ---- k2c34 · câu 34 (8,7 s) · CẮT CỨNG u=.48 — cột ĐO nét liền ▸ cột SUY nét đứt ---- */
DANGKY({
  id: "k2c34", steps: 0, say: [S[33]],
  html: K2.anh("k2-mattrang.jpg", .22,
          "contrast(1.06) saturate(.34) brightness(.6)", "50% 50%") +
        K2.id(K2.nen("#101E30", "#070E1C", "#04070E"), "k2c34-nen") +
        K2.troi(.1) + K2.ve(.8) + K2.toi(".9"),
  anim: root => {
    K2.rac(root);
    /* nền Mặt Trăng thật nằm DƯỚI lớp chuyển sắc, chỉ để khung không trơn.
       Lấy bằng ID, không bằng chỉ số (§16.9). */
    const nenL = K2.lop(root, "k2c34-nen");
    if (nenL) nenL.style.opacity = ".74";
    const T = root.querySelector("svg.troi"); T.innerHTML = ""; sao(T, 140);
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    el("path", { d: "M640,92 L640,650", stroke: "#2B5574", "stroke-width": 2,
      "stroke-dasharray": "6 8", fill: "none", opacity: .65 }, V);
    const L = [], Rr = [];
    for (let i = 0; i < 4; i++) {
      const y = 136 + i * 126;
      const g1 = el("g", {}, V);
      el("rect", { x: 148, y: y, width: 412, height: 90, rx: 6, fill: "#0E2033",
        stroke: LA, "stroke-width": 2.6 }, g1);
      el("rect", { x: 174, y: y + 56, width: 186, height: 17, rx: 3, fill: LA, opacity: .85 }, g1);
      el("rect", { x: 174, y: y + 22, width: 322, height: 21, rx: 3, fill: C2, opacity: .55 }, g1);
      L.push(g1);
      const g2 = el("g", {}, V);
      el("rect", { x: 720, y: y, width: 412, height: 90, rx: 6, fill: "none",
        stroke: SH, "stroke-width": 2.6, "stroke-dasharray": "11 8" }, g2);
      el("rect", { x: 746, y: y + 56, width: 186, height: 17, rx: 3, fill: "none",
        stroke: SH, "stroke-width": 1.8, "stroke-dasharray": "6 5", opacity: .95 }, g2);
      el("rect", { x: 746, y: y + 22, width: 322, height: 21, rx: 3, fill: SH, opacity: .34 }, g2);
      Rr.push(g2);
    }
    return c => {
      const k = K2.cat(c.u, .48);
      cam(root, { t: c.t, x: lerp(-18, 16, ez(c.u)), y: lerp(10, -10, ez(c.u)),
                  z: lerp(1.02, 1.11, ez(c.u)) });
      L.forEach((g, i) => {
        const v = ez((c.u - .03 - i * .08) / .07);
        op(g, v.toFixed(3));
        set(g, { transform: "translate(" + (-28 * (1 - v)).toFixed(1) + " 0)" });
      });
      Rr.forEach((g, i) => {
        const v = k ? ez((c.u - .48 - i * .08) / .07) : 0;
        op(g, (v * (.78 + .18 * Math.sin(c.t * 1.4 + i))).toFixed(3));
        set(g, { transform: "translate(" + (28 * (1 - v)).toFixed(1) + " 0)" });
        g.querySelectorAll("rect").forEach(e => {
          if (e.getAttribute("stroke-dasharray"))
            e.setAttribute("stroke-dashoffset", (-c.t * 14).toFixed(1));
        });
      });
    };
  }
});

/* ---- k2c35 · câu 35 (6,1 s) · VIDEO trăng trong mây — rồi trăng biến mất ---- */
DANGKY({
  id: "k2c35", steps: 0, say: [S[34]],
  html: K2.id(K2.vid("k2-nganha.mp4", .26, { tu: 0, dai: 4.6, toc: .34,
          loc: "contrast(1.22) saturate(1.1) brightness(.82)" }), "k2c35-B") +
        K2.id(K2.vid("k2-trang-may.mp4", .3, { tu: .5, dai: 8.0, toc: .6,
          loc: "contrast(1.18) saturate(.92) brightness(.9)" }), "k2c35-A") +
        K2.ve(.84) + K2.toi(".86") +
        '<div class="hud">' + K2.nguon("k2c35-ng",
          "Mây qua trăng tròn · Johann Mynhardt · CC BY 3.0") + '</div>',
  anim: root => {
    /* CẮT CỨNG u=.5 — nửa đầu còn trăng, nửa sau là ĐÚNG bầu trời ấy mà
       không có gì ở đó. Cả hai nửa đều là clip quay thật, không phải nền đen. */
    const A = K2.lop(root, "k2c35-A");
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    const tim = [];
    for (let i = 0; i < 3; i++)
      tim.push(el("circle", { cx: 880, cy: 250, r: 0, fill: "none", stroke: C2,
        "stroke-width": 1.8, "stroke-dasharray": "9 11", opacity: 0 }, V));
    return c => {
      const k = K2.cat(c.u, .5);
      op(A, 1 - k);
      const uu = k ? (c.u - .5) / .5 : c.u / .5;
      cam(root, { t: c.t, x: lerp(18, -14, ez(uu)), y: lerp(-6, 6, ez(uu)),
                  z: lerp(1.06, 1.18, ez(uu)) });
      /* ba vòng tìm kiếm rỗng ở đúng chỗ Mặt Trăng vừa còn ngồi */
      tim.forEach((e, i) => {
        const v = k ? ez((c.u - .54 - i * .08) / .1) : 0;
        set(e, { r: (70 + i * 46 + 6 * Math.sin(c.t * .9 + i)).toFixed(1),
          "stroke-dashoffset": ((i % 2 ? 1 : -1) * c.t * 13).toFixed(1) });
        op(e, (v * (.5 - i * .1)).toFixed(3));
      });
      kh("k2c35-ng", c.t, .4, 2.8);
    };
  }
});

/* ═══════════════════════════════════════════════════════════════════
   ĐOẠN 32–33 · câu 36–38 — CÁI ĐÊM
   ═══════════════════════════════════════════════════════════════════ */

/* ---- k2c36 · câu 36 (4,5 s) · ánh sáng đổ trước, nước đổ sau ---- */
DANGKY({
  id: "k2c36", steps: 0, say: [S[35]],
  html: K2.anh("k2-bien-dem.jpg", .4,
          "contrast(1.14) saturate(.9) brightness(.8)", "50% 56%") + K2.ve(.84) + K2.toi(".86") +
        '<div class="hud">' + K2.nguon("k2c36-ng",
          "Đêm trăng tròn, quần đảo Andaman · Vyacheslav Argenberg · CC BY 4.0") + '</div>',
  anim: root => {
    const im = root.querySelector("img");
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    const bien = el("g", {}, V);
    const s1 = song(bien, 672, 14, 240, "#0B2C3E");
    const s2 = song(bien, 694, 9, 180, "#124A64");
    return c => {
      cam(root, { t: c.t, x: lerp(-18, 14, ez(c.u)), z: lerp(1.08, 1.2, ez(c.u)) });
      /* ánh sáng rút đi, nhưng mặt nước vẫn còn chuyển động ở chân khung */
      const v = ezo(cl((c.u - .22) / .6, 0, 1));
      if (im) im.style.filter = "contrast(1.14) saturate(" + (.9 - .4 * v).toFixed(2) +
        ") brightness(" + (.8 - .52 * v).toFixed(3) + ")";
      set(s1, { transform: "translate(" + (-((c.t * 22) % 240)).toFixed(1) + " 0)" });
      set(s2, { transform: "translate(" + (-((c.t * 34) % 180)).toFixed(1) + " 0)" });
      op(bien, (.5 + .4 * v).toFixed(3));
      kh("k2c36-ng", c.t, .4, 2.6);
    };
  }
});

/* ---- k2c37 · câu 37 (3,6 s) · đêm không trăng ▸ đêm rằm, cùng một khung ---- */
DANGKY({
  id: "k2c37", steps: 0, say: [S[36]],
  html: K2.anh("k2-demram.jpg", .4,
          "contrast(1.14) saturate(.6) brightness(.2)", "50% 52%") + K2.ve(.86) + K2.toi(".84") +
        '<div class="hud">' + K2.nguon("k2c37-ng",
          "Rừng ven biển đêm trăng tròn, Andaman · Vyacheslav Argenberg · CC BY 4.0") + '</div>',
  anim: root => {
    const im = root.querySelector("img");
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    gradR(V, "k2c37-q", 980, 150, 260, [[.14, "#FFFBEC", .6], [.5, "#CFE4F2", .2], [1, "#CFE4F2", 0]]);
    const q = el("circle", { cx: 980, cy: 150, r: 260, fill: "url(#k2c37-q)", opacity: 0 }, V);
    q.style.mixBlendMode = "screen";
    return c => {
      cam(root, { t: c.t, x: lerp(22, -18, ez(c.u)), z: lerp(1.08, 1.2, ez(c.u)) });
      const v = ezo(cl((c.u - .05) / .55, 0, 1));
      if (im) im.style.filter = "contrast(1.14) saturate(" + (.6 + .36 * v).toFixed(2) +
        ") brightness(" + (.2 + .62 * v).toFixed(3) + ")";
      op(q, (v * (.7 + .14 * Math.sin(c.t * .9))).toFixed(3));
      kh("k2c37-ng", c.t, 1.6, 3.2);
    };
  }
});

/* ---- k2c38 · câu 38 (6,8 s) · CẮT CỨNG u=.44 — tranh thơ ca ▸ cái đồng hồ của loài vật ---- */
DANGKY({
  id: "k2c38", steps: 0, say: [S[37]],
  html: K2.id(K2.anh("k2-tranh-ram.jpg", .4,
          "contrast(1.08) saturate(1.06) brightness(.82)", "50% 46%"), "k2c38-A") +
        K2.id(K2.anh("k2-cua-cong.jpg", .42,
          "contrast(1.2) saturate(.9) brightness(.52)", "50% 58%"), "k2c38-B") +
        K2.ve(.86) + K2.toi(".88") +
        '<div class="hud">' +
        K2.nguon("k2c38-ng1", "Joos de Momper · «Làng dưới trăng tròn» · phạm vi công cộng") +
        '<div class="tx" id="k2c38-ng2" style="left:36px;right:auto;top:676px;' +
          'font:400 13px/1.35 system-ui;color:#8CA6B8;text-shadow:0 1px 4px rgba(3,8,13,1)">' +
          'Cua còng trên bãi triều, vịnh Suncheon · lumoplank · CC0</div></div>',
  anim: root => {
    const A = K2.lop(root, "k2c38-A"), B = K2.lop(root, "k2c38-B");
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    const g = el("g", {}, V), CX = 1072, CY = 158, R = 92;
    el("circle", { cx: CX, cy: CY, r: R + 16, fill: "#050B14", opacity: .78 }, g);
    el("circle", { cx: CX, cy: CY, r: R + 16, fill: "none", stroke: "#2B5574",
      "stroke-width": 2.2 }, g);
    el("circle", { cx: CX, cy: CY, r: R - 18, fill: "#080E18" }, g);
    const st = el("path", { d: "", fill: TR }, g);
    el("circle", { cx: CX, cy: CY, r: R - 18, fill: "none", stroke: TR,
      "stroke-width": 1.5, opacity: .34 }, g);
    const kim = el("path", { d: "", stroke: NH, "stroke-width": 2.8,
      "stroke-linecap": "round", fill: "none", opacity: .85 }, g);
    return c => {
      const k = K2.cat(c.u, .44);
      op(A, 1 - k); op(B, k);
      const uu = k ? (c.u - .44) / .56 : c.u / .44;
      cam(root, { t: c.t, x: lerp(20, -16, ez(uu)), y: lerp(-6, 8, ez(uu)),
                  z: lerp(1.08, 1.2, ez(uu)) });
      const p = .10 + c.u * .34;        /* lưỡi liềm → gần rằm, không bao giờ trống */
      set(st, { d: K2.pha(p, CX, CY, R - 18) });
      const kp = K2.dq(CX, CY, R + 10, p * 360), kq = K2.dq(CX, CY, R - 2, p * 360);
      set(kim, { d: "M" + kq[0].toFixed(1) + "," + kq[1].toFixed(1) +
        " L" + kp[0].toFixed(1) + "," + kp[1].toFixed(1) });
      op(g, (k * ez((c.u - .46) / .08)).toFixed(3));
      kh("k2c38-ng1", c.t, .3, 2.4);
      kh("k2c38-ng2", c.t, k ? 4.6 : 1e9, 1e9);
    };
  }
});

/* ═══════════════════════════════════════════════════════════════════
   ĐOẠN 34 · câu 39–41 — BỌ HUNG, Nature 2003 (Dacke và cộng sự)
   ═══════════════════════════════════════════════════════════════════ */

/* ---- k2c39 · câu 39 (6,8 s) · CẮT CỨNG u=.5 — VIDEO bọ hung lăn phân thật ---- */
DANGKY({
  id: "k2c39", steps: 0, say: [S[38]],
  html: K2.id(K2.vid("k2-bohung.mp4", .4, { tu: 0, dai: 9.0, toc: .8,
          loc: "contrast(1.18) saturate(.86) brightness(.58)" }), "k2c39-V") +
        K2.ve(.84) + K2.toi(".86") +
        '<div class="hud">' + K2.nguon("k2c39-ng",
          "Dacke và cộng sự · Nature 424, 33 (2003) · clip: MdeVicente · CC0") + '</div>',
  anim: root => {
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    /* đường thẳng mà con bọ giữ được — vẽ dần suốt cảnh */
    const duong = el("path", { d: "M180,648 L1108,286", stroke: TR, "stroke-width": 3.6,
      fill: "none", "stroke-linecap": "round" }, V);
    /* đường vòng vèo của một con KHÔNG đọc được trời, để so */
    let dz = "M180,648";
    for (let i = 1; i <= 18; i++)
      dz += " L" + (180 + i * 52 + (rn(i, 131) - .5) * 90).toFixed(0) + "," +
            (648 - i * 20 + (rn(i, 132) - .5) * 110).toFixed(0);
    const zic = el("path", { d: dz, stroke: SH, "stroke-width": 2.6, fill: "none",
      "stroke-dasharray": "9 7", opacity: 0 }, V);
    const cham = el("circle", { cx: 180, cy: 648, r: 10, fill: NH }, V);
    return c => {
      const k = K2.cat(c.u, .5);
      cam(root, { t: c.t, x: lerp(24, -20, ez(c.u)), y: lerp(10, -10, ez(c.u)),
                  z: k ? lerp(1.2, 1.3, ez((c.u - .5) / .5)) : lerp(1.04, 1.2, ez(c.u / .5)) });
      const w = ezo(cl((c.u - .12) / .74, 0, 1));
      K2.veDan(duong, w);
      set(cham, { cx: lerp(180, 1108, w).toFixed(1), cy: lerp(648, 286, w).toFixed(1) });
      op(cham, ez((c.u - .1) / .06).toFixed(3));
      K2.veDan(zic, k ? ezo((c.u - .5) / .3) : 0);
      op(zic, (k * .55).toFixed(2));
      set(zic, { "stroke-dashoffset": (-c.t * 12).toFixed(1) });
      kh("k2c39-ng", c.t, 1.0, 4.6);
    };
  }
});

/* ---- k2c40 · câu 40 (6,2 s) · CẮT CỨNG u=.5 — ánh trăng PHÂN CỰC, yếu hơn triệu lần ---- */
DANGKY({
  id: "k2c40", steps: 0, say: [S[39]],
  html: K2.id(K2.anh("k2-bohung.jpg", .42,
          "contrast(1.2) saturate(.8) brightness(.5)", "46% 58%"), "k2c40-A") +
        K2.id(K2.anh("k2-bohung2.jpg", .44,
          "contrast(1.26) saturate(.74) brightness(.46)", "54% 50%"), "k2c40-B") +
        K2.ve(.82) + K2.toi(".88") +
        '<div class="hud">' + K2.nguon("k2c40-ng",
          "Bọ hung lăn phân · Alex Wild · CC0  ·  Dr Mary Gillham Archive · CC BY 2.0") + '</div>',
  anim: root => {
    const A = K2.lop(root, "k2c40-A"), B = K2.lop(root, "k2c40-B");
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    /* vạch phân cực: nét song song nghiêng, chạy khắp bầu trời. Tín hiệu YẾU
       hơn ánh nắng phân cực cả triệu lần — nên nó phải mờ tới mức gần như
       không thấy. Đó chính là ý của cảnh, đừng vẽ sáng rõ cho dễ nhìn. */
    const gpc = el("g", {}, V), pc = [];
    for (let i = 0; i < 36; i++) {
      const x = -200 + i * 48;
      pc.push(el("path", { d: "M" + x + ",-80 L" + (x + 160) + ",270",
        stroke: TR, "stroke-width": 2, fill: "none", opacity: 0 }, gpc));
    }
    /* hai thanh so độ mạnh: nắng phân cực vs trăng phân cực */
    const gs = el("g", {}, V);
    el("rect", { x: 170, y: 592, width: 940, height: 18, rx: 4, fill: NH, opacity: .92 }, gs);
    K2.chuNho(gs, 240, 582, "nắng phân cực", NH, 17);
    /* vạch "trăng phân cực" đúng tỉ lệ sẽ mảnh hơn một điểm ảnh, nên KHÔNG vẽ
       theo tỉ lệ: vẽ một chấm sáng và để con số nói thay cho chiều dài. */
    const tm = el("circle", { cx: 176, cy: 640, r: 7, fill: TR }, gs);
    K2.chuNho(gs, 300, 646, "trăng phân cực  ·  1 : 1.000.000", TR, 17);
    return c => {
      const k = K2.cat(c.u, .5);
      op(A, 1 - k); op(B, k);
      const uu = k ? (c.u - .5) / .5 : c.u / .5;
      cam(root, { t: c.t, x: lerp(26, -22, ez(uu)), y: lerp(10, -10, ez(uu)),
                  z: lerp(1.07, 1.21, ez(uu)) });
      pc.forEach((p, i) => {
        K2.veDan(p, ezo((c.u - .06 - i * .006) / .14));
        op(p, (.08 + .1 * Math.sin(c.t * 1.1 + i * .5)).toFixed(3));
      });
      op(gs, (k * ez((c.u - .52) / .08)).toFixed(3));
      /* thanh "trăng" chỉ dài 1/1.000.000 — vẽ đúng thì là 0,00096 px, nên vẽ
         tối thiểu 3 px và ghi rõ tỉ lệ bằng dòng nguồn, không giả vờ đo được */
      set(tm, { r: (6 + 2.2 * (1 + Math.sin(c.t * 2.6)) / 2).toFixed(2) });
      kh("k2c40-ng", c.t, 3.4, 1e9);
    };
  }
});

/* ---- k2c41 · câu 41 (8,3 s) · CẮT CỨNG u=.38 — VIDEO dải Ngân Hà thật, phương án hai ---- */
DANGKY({
  id: "k2c41", steps: 0, say: [S[40]],
  html: K2.id(K2.anh("k2-bohung2.jpg", .44,
          "contrast(1.24) saturate(.74) brightness(.44)", "54% 50%"), "k2c41-A") +
        K2.id(K2.vid("k2-nganha.mp4", .24, { tu: 0, dai: 4.6, toc: .4,
          loc: "contrast(1.22) saturate(1.12) brightness(.8)" }), "k2c41-B") +
        K2.ve(.82) + K2.toi(".88") +
        '<div class="hud">' + K2.nguon("k2c41-ng",
          "Dải Ngân Hà, ảnh tua nhanh · Gamer noscope · CC BY 3.0") + '</div>',
  anim: root => {
    const A = K2.lop(root, "k2c41-A"), B = K2.lop(root, "k2c41-B");
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    const duong = el("path", { d: "M236,676 L982,282", stroke: TR, "stroke-width": 3.4,
      fill: "none", "stroke-linecap": "round" }, V);
    const bo = K2.bo(V, .95);
    return c => {
      const k = K2.cat(c.u, .38);
      op(A, 1 - k); op(B, k);
      const uu = k ? (c.u - .38) / .62 : c.u / .38;
      cam(root, { t: c.t, x: lerp(-24, 20, ez(uu)), y: lerp(10, -8, ez(uu)),
                  z: lerp(1.06, 1.2, ez(uu)) });
      const w = k ? ezo(cl((c.u - .4) / .52, 0, 1)) : 0;
      K2.veDan(duong, w);
      op(duong, (k * .95).toFixed(2));
      set(bo, { transform: "translate(" + lerp(236, 982, w).toFixed(1) + " " +
        lerp(676, 282, w).toFixed(1) + ") rotate(-28) scale(" +
        (.95 + .04 * Math.sin(c.t * 3.1)).toFixed(3) + ")" });
      op(bo, (k * ez((c.u - .4) / .06)).toFixed(3));
      kh("k2c41-ng", c.t, 6.0, 1e9);
    };
  }
});

/* ═══════════════════════════════════════════════════════════════════
   ĐOẠN 35–36 · câu 42–49 — SAN HÔ RẠN GREAT BARRIER
   Khối này có nhiều sinh vật nhất tập, nên đây là chỗ dùng VIDEO THẬT
   dày nhất: 4 trong 8 cảnh cuối có clip dưới nước quay ở chính rạn
   Great Barrier (Lady Musgrave và Lizard Island).
   §11.9 — mọi ảnh/clip dùng cho câu "ở rạn Great Barrier" đều quay TẠI
   rạn Great Barrier. Tấm san hô đang phóng trứng là của Flower Garden
   Banks (vịnh Mexico) nên chỉ dùng cho câu nói về CƠ CHẾ chung
   (cryptochrome), và dòng nguồn trên hình nói rõ nơi chụp.
   ═══════════════════════════════════════════════════════════════════ */

/* ---- k2c42 · câu 42 (3,7 s) · VIDEO rạn Great Barrier thật ---- */
DANGKY({
  id: "k2c42", steps: 0, say: [S[41]],
  html: K2.vid("k2-ran-gbr.mp4", .34, { tu: 0, dai: 8.0, toc: .55,
          loc: "contrast(1.1) saturate(1.1) brightness(.84)" }) +
        K2.ve(.84) + K2.toi(".82") +
        '<div class="hud">' + K2.nguon("k2c42-ng",
          "Khảo sát rạn ở đảo Lady Musgrave, Great Barrier, 2022 · Adam Fish · CC BY 3.0") + '</div>',
  anim: root => {
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    /* một vòng khoanh mềm quanh giữa khung: "loài đáng kể nhất" */
    const v = el("circle", { cx: 640, cy: 356, r: 210, fill: "none", stroke: TR,
      "stroke-width": 2.6, "stroke-dasharray": "16 14", opacity: 0 }, V);
    return c => {
      cam(root, { t: c.t, x: lerp(-16, 14, ez(c.u)), z: lerp(1.06, 1.18, ez(c.u)) });
      op(v, (.5 * ez((c.u - .18) / .14)).toFixed(3));
      set(v, { "stroke-dashoffset": (-c.t * 18).toFixed(1),
        r: (210 + 9 * Math.sin(c.t * .8)).toFixed(1) });
      kh("k2c42-ng", c.t, .4, 3.0);
    };
  }
});

/* ═══════════════════════════════════════════════════════════════════
   k2c43 · câu 43 (8,9 s) · HAI CẮT CỨNG u=.30 và u=.64
   ① rạn nhìn từ trên không (Hardy Reef, Great Barrier) — "cả rạn"
   ② VIDEO san hô sống ở Lizard Island, Great Barrier — "từng con"
   ③ dải lịch 30 đêm, những đêm NGAY SAU RẰM sáng lên
   ═══════════════════════════════════════════════════════════════════ */
DANGKY({
  id: "k2c43", steps: 0, say: [S[42]],
  html: K2.id(K2.anh("k2-gbr-khong.jpg", .36,
          "contrast(1.08) saturate(1.12) brightness(.86)", "50% 52%"), "k2c43-A") +
        K2.id(K2.vid("k2-sanho-de.mp4", .4, { tu: 0, dai: 8.0, toc: .6,
          loc: "contrast(1.14) saturate(1.12) brightness(.8)" }), "k2c43-B") +
        K2.ve(.86) + K2.toi(".86") +
        '<div class="hud">' +
        K2.nguon("k2c43-ng1", "Hardy Reef, rạn Great Barrier · rheins · CC BY 3.0") +
        '<div class="tx" id="k2c43-ng2" style="left:36px;right:auto;top:676px;' +
          'font:400 13px/1.35 system-ui;color:#8CA6B8;text-shadow:0 1px 4px rgba(3,8,13,1)">' +
          'San hô Pocillopora, đảo Lizard, rạn Great Barrier · Schmidt-Roach và cộng sự · CC BY 2.5</div></div>',
  anim: root => {
    const A = K2.lop(root, "k2c43-A"), B = K2.lop(root, "k2c43-B");
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    /* dải lịch 30 đêm: mỗi ô một pha trăng; mấy đêm sau rằm được khoanh */
    const gl = el("g", {}, V), o = [];
    for (let i = 0; i < 30; i++) {
      const x = 76 + i * 38.4, y = 560;
      const g = el("g", {}, gl);
      el("circle", { cx: x, cy: y, r: 15, fill: "#070E18", stroke: "#2B5574",
        "stroke-width": 1.4 }, g);
      el("path", { d: K2.pha(i / 30, x, y, 15), fill: TR }, g);
      g.__x = x; g.__i = i;
      o.push(g);
    }
    const khoanh = el("rect", { x: 76 + 15 * 38.4 - 22, y: 530, width: 128, height: 60,
      rx: 8, fill: "none", stroke: SH, "stroke-width": 3, "stroke-dasharray": "10 7",
      opacity: 0 }, V);
    return c => {
      const k1 = K2.cat(c.u, .30), k2 = K2.cat(c.u, .64);
      op(A, 1 - k1); op(B, k1);
      const uu = k2 ? (c.u - .64) / .36 : (k1 ? (c.u - .30) / .34 : c.u / .30);
      cam(root, { t: c.t, x: lerp(20, -16, ez(uu)), y: lerp(-6, 6, ez(uu)),
                  z: lerp(1.06, 1.18, ez(uu)) });
      op(gl, (k2 * ez((c.u - .64) / .06)).toFixed(3));
      o.forEach(g => {
        const sang = (g.__i >= 15 && g.__i <= 18) ? 1 : .34;
        op(g, (sang * (.7 + .3 * Math.sin(c.t * 1.6 + g.__i * .4))).toFixed(3));
      });
      op(khoanh, (k2 * (.85 * ez((c.u - .76) / .06))).toFixed(3));
      set(khoanh, { "stroke-dashoffset": (-c.t * 14).toFixed(1) });
      kh("k2c43-ng1", c.t, .4, 2.6);
      kh("k2c43-ng2", c.t, k1 && !k2 ? 3.2 : 1e9, 1e9);
    };
  }
});

/* ---- k2c44 · câu 44 (3,4 s) · làm sao chúng biết hôm nay là ngày mấy? ---- */
DANGKY({
  id: "k2c44", steps: 0, say: [S[43]],
  html: K2.vid("k2-trang-quay.mp4", .3, { tu: 2.0, dai: 6.0, toc: .4,
          loc: "contrast(1.1) saturate(.86) brightness(.88)" }) +
        K2.ve(.86) + K2.toi(".9"),
  anim: root => {
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    /* ba vòng tròn đồng tâm bóp lại quanh đĩa trăng: một câu hỏi đang khép */
    const r = [];
    for (let i = 0; i < 3; i++)
      r.push(el("circle", { cx: 640, cy: 360, r: 0, fill: "none", stroke: NH,
        "stroke-width": 2.4, "stroke-dasharray": "14 12", opacity: 0 }, V));
    return c => {
      cam(root, { t: c.t, x: lerp(10, -8, ez(c.u)), z: lerp(1.12, 1.26, ez(c.u)) });
      r.forEach((e, i) => {
        const v = ez((c.u - .06 - i * .14) / .5);
        set(e, { r: lerp(500, 268, v).toFixed(1),
          "stroke-dashoffset": ((i % 2 ? 1 : -1) * c.t * 18).toFixed(1) });
        op(e, (v * (.7 - i * .14)).toFixed(3));
      });
    };
  }
});

/* ---- k2c45 · câu 45 (8,3 s) · CẮT CỨNG u=.42 — cryptochrome mở ra khi gặp ánh sáng xanh ---- */
DANGKY({
  id: "k2c45", steps: 0, say: [S[44]],
  html: K2.id(K2.anh("k2-sanho-canh.jpg", .4,
          "contrast(1.1) saturate(1.1) brightness(.74)", "50% 50%"), "k2c45-A") +
        K2.id(K2.anh("k2-sanho-de.jpg", .42,
          "contrast(1.16) saturate(1.06) brightness(.76)", "54% 50%"), "k2c45-B") +
        K2.ve(.84) + K2.toi(".88") +
        '<div class="hud">' +
        K2.nguon("k2c45-ng1", "Cận cảnh polyp san hô sừng hươu · NOAA · phạm vi công cộng") +
        '<div class="tx" id="k2c45-ng2" style="left:36px;right:auto;top:676px;' +
          'font:400 13px/1.35 system-ui;color:#8CA6B8;text-shadow:0 1px 4px rgba(3,8,13,1)">' +
          'San hô phóng trứng, khu bảo tồn Flower Garden Banks · NOAA · phạm vi công cộng</div></div>',
  anim: root => {
    const A = K2.lop(root, "k2c45-A"), B = K2.lop(root, "k2c45-B");
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    /* sơ đồ thụ thể: một cái cổng khép, ánh sáng XANH tới, cổng mở */
    const g = el("g", {}, V);
    const CX = 250, CY = 336;
    el("rect", { x: CX - 118, y: CY - 112, width: 236, height: 224, rx: 16,
      fill: "#071320", opacity: .86, stroke: "#2B5574", "stroke-width": 2 }, g);
    const nua1 = el("path", { d: "M" + (CX - 76) + "," + (CY + 64) + " L" + (CX - 76) + "," +
      (CY - 64) + " L" + CX + "," + (CY - 40) + " L" + CX + "," + (CY + 40) + " Z",
      fill: LA, opacity: .75 }, g);
    const nua2 = el("path", { d: "M" + (CX + 76) + "," + (CY + 64) + " L" + (CX + 76) + "," +
      (CY - 64) + " L" + CX + "," + (CY - 40) + " L" + CX + "," + (CY + 40) + " Z",
      fill: LA, opacity: .75 }, g);
    const tia = [];
    for (let i = 0; i < 6; i++)
      tia.push(el("path", { d: "M" + (CX - 40 + i * 16) + ",-40 L" + (CX - 40 + i * 16) + "," +
        (CY - 64), stroke: "#7FD3F0", "stroke-width": 3, fill: "none",
        "stroke-linecap": "round", opacity: 0 }, g));
    const nhan = K2.chuNho(g, CX, CY + 156, "cryptochrome", LA, 19);
    return c => {
      const k = K2.cat(c.u, .42);
      op(A, 1 - k); op(B, k);
      const uu = k ? (c.u - .42) / .58 : c.u / .42;
      cam(root, { t: c.t, x: lerp(18, -14, ez(uu)), y: lerp(-6, 6, ez(uu)),
                  z: lerp(1.08, 1.18, ez(uu)) });
      op(g, ez((c.u - .12) / .08).toFixed(3));
      tia.forEach((p, i) => {
        K2.veDan(p, ezo((c.u - .2 - i * .012) / .12));
        op(p, (.45 + .35 * Math.sin(c.t * 2.4 + i * .7)).toFixed(3));
      });
      /* cổng mở dần ra hai bên — đúng lúc ánh sáng xanh chạm tới */
      const m = ezo(cl((c.u - .34) / .3, 0, 1)) * 42;
      set(nua1, { transform: "translate(" + (-m).toFixed(1) + " 0)" });
      set(nua2, { transform: "translate(" + m.toFixed(1) + " 0)" });
      op(nhan, ez((c.u - .26) / .08).toFixed(3));
      kh("k2c45-ng1", c.t, .4, 2.8);
      kh("k2c45-ng2", c.t, k ? 5.0 : 1e9, 1e9);
    };
  }
});

/* ---- k2c46 · câu 46 (6,1 s) · CẮT CỨNG u=.46 · CHỮ 3/5 (0 từ) — nắng vs trăng rằm ---- */
DANGKY({
  id: "k2c46", steps: 0, say: [S[45]],
  html: K2.id(K2.vid("k2-trang-may.mp4", .3, { tu: 3.0, dai: 6.0, toc: .55,
          loc: "contrast(1.2) saturate(.94) brightness(.95)" }), "k2c46-A") +
        K2.id(K2.anh("k2-sanho-canh.jpg", .42,
          "contrast(1.12) saturate(1.14) brightness(.76)", "46% 54%"), "k2c46-B") +
        K2.ve(.84) + K2.toi(".88"),
  anim: root => {
    const A = K2.lop(root, "k2c46-A"), B = K2.lop(root, "k2c46-B");
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    /* thang LOGARIT, vì tỉ lệ nắng/trăng rằm là khoảng 400.000 lần — vẽ thẳng
       thì vạch trăng mảnh hơn một điểm ảnh. Trục ghi rõ là log. */
    const gs = el("g", {}, V);
    const X0 = 170, X1 = 1110, Y = 470;
    el("path", { d: "M" + X0 + "," + Y + " L" + X1 + "," + Y, stroke: C2,
      "stroke-width": 2.4 }, gs);
    for (let i = 0; i <= 6; i++) {
      const x = X0 + (X1 - X0) * i / 6;
      el("path", { d: "M" + x.toFixed(1) + "," + (Y - 11) + " L" + x.toFixed(1) + "," + (Y + 11),
        stroke: C2, "stroke-width": 2, opacity: .7 }, gs);
      K2.chuNho(gs, x, Y + 36, "10" + ["⁻¹", "⁰", "¹", "²", "³", "⁴", "⁵"][i], C3, 16);
    }
    const pN = X1, pT = X0 + (X1 - X0) * (0.6 / 6);   /* nắng ~10⁵ lx · trăng rằm ~0,3 lx */
    const cN = el("circle", { cx: pN, cy: Y, r: 15, fill: NH, opacity: 0 }, gs);
    const cT = el("circle", { cx: pT, cy: Y, r: 15, fill: TR, opacity: 0 }, gs);
    const lN = K2.chuNho(gs, pN, Y - 34, "nắng", NH, 20);
    const lT = K2.chuNho(gs, pT, Y - 34, "trăng rằm", TR, 20);
    op(lN, 0); op(lT, 0);
    const noi = el("path", { d: "M" + pT + "," + (Y - 60) + " L" + pN + "," + (Y - 60),
      stroke: C3, "stroke-width": 2, "stroke-dasharray": "8 7", fill: "none", opacity: 0 }, gs);
    /* cái cổng của cảnh trước, nay mở ra lần nữa — bằng chính vạch trăng */
    const cong = el("circle", { cx: pT, cy: Y, r: 15, fill: "none", stroke: LA,
      "stroke-width": 3, opacity: 0 }, gs);
    return c => {
      const k = K2.cat(c.u, .46);
      op(A, 1); op(B, k);
      op(V.parentNode, 1);
      const uu = k ? (c.u - .46) / .54 : c.u / .46;
      cam(root, { t: c.t, x: lerp(-14, 12, ez(uu)), z: lerp(1.08, 1.18, ez(uu)) });
      op(gs, ez((c.u - .06) / .08).toFixed(3));
      op(cN, ez((c.u - .12) / .07).toFixed(3)); op(lN, ez((c.u - .12) / .07).toFixed(3));
      op(cT, (k * ez((c.u - .48) / .07)).toFixed(3));
      op(lT, (k * ez((c.u - .48) / .07)).toFixed(3));
      K2.veDan(noi, ezo((c.u - .2) / .18));
      op(noi, (.7 * ez((c.u - .2) / .08)).toFixed(3));
      set(cong, { r: (15 + 9 * (1 + Math.sin(c.t * 2.6)) / 2).toFixed(1) });
      op(cong, (k * (.5 + .4 * Math.sin(c.t * 2.6))).toFixed(3));
      set(noi, { "stroke-dashoffset": (-c.t * 12).toFixed(1) });
    };
  }
});

/* ---- k2c47 · câu 47 (4,9 s) · san hô không đi lại được ---- */
DANGKY({
  id: "k2c47", steps: 0, say: [S[46]],
  html: K2.vid("k2-sanho-de.mp4", .38, { tu: 2.0, dai: 6.0, toc: .5,
          loc: "contrast(1.14) saturate(1.12) brightness(.78)" }) +
        K2.ve(.84) + K2.toi(".88"),
  anim: root => {
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    /* ba cái neo: mỗi cụm san hô bị ghim cứng xuống đáy */
    const g = el("g", {}, V), neo = [];
    for (let i = 0; i < 3; i++) {
      const x = 300 + i * 340, y = 300 + (i % 2) * 120;
      const h = el("g", {}, g);
      el("circle", { cx: x, cy: y, r: 11, fill: SH }, h);
      el("path", { d: "M" + x + "," + y + " L" + x + "," + (y + 104),
        stroke: SH, "stroke-width": 3.4, fill: "none", "stroke-linecap": "round" }, h);
      el("path", { d: "M" + (x - 34) + "," + (y + 104) + " L" + (x + 34) + "," + (y + 104),
        stroke: SH, "stroke-width": 3.4, fill: "none", "stroke-linecap": "round" }, h);
      neo.push(h);
    }
    return c => {
      cam(root, { t: c.t, x: lerp(-16, 14, ez(c.u)), z: lerp(1.1, 1.22, ez(c.u)) });
      neo.forEach((h, i) => {
        op(h, (.85 * ez((c.u - .12 - i * .12) / .1)).toFixed(3));
        set(h, { transform: "translate(0 " + (3 * Math.sin(c.t * 1.2 + i * 1.4)).toFixed(1) + ")" });
      });
    };
  }
});

/* ---- k2c48 · câu 48 (5,6 s) · cả rạn thả cùng một lúc, trong cùng vùng nước ---- */
DANGKY({
  id: "k2c48", steps: 0, say: [S[47]],
  html: K2.vid("k2-sanho-de.mp4", .36, { tu: 4.0, dai: 4.0, toc: .45,
          loc: "contrast(1.14) saturate(1.1) brightness(.66)" }) +
        K2.ve(.82) + K2.toi(".9") +
        '<div class="hud">' + K2.nguon("k2c48-ng",
          "San hô Pocillopora, đảo Lizard, rạn Great Barrier · Schmidt-Roach và cộng sự · CC BY 2.5") + '</div>',
  anim: root => {
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    /* bó trứng nổi lên cùng một lúc từ khắp mặt rạn, gặp nhau ở tầng nước trên */
    const h = [];
    for (let i = 0; i < 90; i++)
      h.push(el("circle", { cx: 0, cy: 0, r: (4.4 + rn(i, 61) * 6.5).toFixed(1),
        fill: i % 4 ? "#FFF0D2" : "#FFD39A", opacity: 0 }, V));
    return c => {
      cam(root, { t: c.t, x: lerp(14, -12, ez(c.u)), y: lerp(8, -10, ez(c.u)),
                  z: lerp(1.06, 1.18, ez(c.u)) });
      h.forEach((e, i) => {
        const x0 = -60 + rn(i, 62) * 1400;
        const tre = rn(i, 63) * .22;               /* lệch nhau RẤT ÍT: đồng loạt */
        const v = cl((c.u - .12 - tre) / .72, 0, 1);
        set(e, { cx: (x0 + 26 * Math.sin(c.t * .8 + i)).toFixed(1),
                 cy: lerp(760, -40, ezo(v)).toFixed(1) });
        op(e, (Math.sin(cl(v, 0, 1) * Math.PI) * (.75 + .25 * rn(i, 64))).toFixed(3));
      });
      kh("k2c48-ng", c.t, 3.6, 1e9);
    };
  }
});

/* ---- k2c49 · câu 49 (6,0 s) · CẮT CỨNG u=.48 — lệch vài đêm thì cả rạn trắng tay ---- */
DANGKY({
  id: "k2c49", steps: 0, say: [S[48]],
  html: K2.id(K2.vid("k2-sanho-de.mp4", .36, { tu: 1.0, dai: 7.0, toc: .4,
          loc: "contrast(1.14) saturate(1.0) brightness(.6)" }), "k2c49-A") +
        K2.id(K2.vid("k2-ran-gbr.mp4", .34, { tu: 4.0, dai: 4.0, toc: .4,
          loc: "contrast(1.1) saturate(.42) brightness(.46)" }), "k2c49-B") +
        K2.ve(.82) + K2.toi(".92"),
  anim: root => {
    const A = K2.lop(root, "k2c49-A"), B = K2.lop(root, "k2c49-B");
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    /* cùng những bó trứng ấy, nhưng mỗi cụm thả một đêm khác nhau: không gặp nhau */
    const h = [];
    for (let i = 0; i < 90; i++)
      h.push(el("circle", { cx: 0, cy: 0, r: (4.4 + rn(i, 61) * 6.5).toFixed(1),
        fill: i % 4 ? "#FFF0D2" : "#FFD39A", opacity: 0 }, V));
    return c => {
      const k = K2.cat(c.u, .48);
      op(A, 1 - k); op(B, k);
      const uu = k ? (c.u - .48) / .52 : c.u / .48;
      cam(root, { t: c.t, x: lerp(-14, 12, ez(uu)), z: lerp(1.08, 1.2, ez(uu)) });
      h.forEach((e, i) => {
        const x0 = -60 + rn(i, 62) * 1400;
        const tre = rn(i, 63) * 1.9;               /* lệch nhau NHIỀU: không gặp nhau */
        const v = cl((c.u - .04 - tre * .4) / .5, 0, 1);
        set(e, { cx: (x0 + 26 * Math.sin(c.t * .8 + i)).toFixed(1),
                 cy: lerp(760, -40, ezo(v)).toFixed(1) });
        op(e, ((1 - k * .86) * Math.sin(cl(v, 0, 1) * Math.PI) * (.5 + .4 * rn(i, 64))).toFixed(3));
      });
    };
  }
});

})();
