/* Khối 2 — NƯỚC VÀ TRỤC — thuỷ triều, độ nghiêng, độ dài ngày
   CHỈ chủ khối này được ghi file này. Xem slide/HUONG-DAN-DUNG-CANH.md
   ------------------------------------------------------------------
   Đoạn 20–35 · 178,4s → 368,3s · 51 câu · 50 cảnh (chỉ tiêu sàn: 38)
   Tông màu: hệ TỐI (--dem #070B16) — đây là khối khoa học lõi, chìm tối.
   Nhấn DUY NHẤT: --trang #E8E6DF (bạc trăng). --bien nước, --dat lục địa,
   --nhat Mặt Trời, --sanho sinh vật gian triều, --do phủ định.
   Mọi chuyển động là hàm thuần của c.t / c.u — xem §4 của hướng dẫn.
   Không CSS animation, không hẹn giờ, không vòng lặp khung, không ngẫu
   nhiên lúc vẽ (cần ngẫu nhiên thì dùng rn(i,j), tất định).
   Chữ biên tập: 4 lần (k2c04 «héc-ta» · k2c10 «lần» · k2c18 phép tính,
   0 từ · k2c36 «6–8», 0 từ). Tối đa 1 từ mỗi lần.
   Nguồn ảnh: canh/nguon-khoi-2.md — PD / CC0 / CC BY, không CC BY-SA.
   ------------------------------------------------------------------
   LỜI THOẠI: mảng S dưới đây được TRÍCH THẲNG từ canh/giao-khoi-2.md,
   không gõ lại bằng tay — để không thể sai một ký tự nào. */
(function () {
"use strict";

const S = [
  "Nghe thì tưởng mất triều là hết mặn, là mừng.",
  "Cơ mà không.",
  "Chính cái triều đó mỗi ngày đẩy nước vào ruộng, vào vuông tôm, rửa phèn, đưa cá vào.",
  "Đổi biên độ triều ở một vùng có khoảng một triệu héc-ta chịu ngập triều thì không phải bớt một rủi ro.",
  "Là viết lại toàn bộ sổ tay canh tác.",
  ">> Khoan đã.",
  "Mặt Trời nặng gấp bao nhiêu lần Mặt Trăng mà kéo yếu hơn?",
  "Vô lý.",
  "Thôi bạn ơi, thế là bạn lại không biết rồi.",
  "Mặt Trời nặng hơn Mặt Trăng khoảng hai mươi bảy triệu lần.",
  "Chuyện đó đúng.",
  "Có điều lực triều không phải lực hút.",
  "Nó là cái hiệu giữa hai cái kéo: kéo bên này Trái Đất mạnh hơn bên kia một chút, và chính cái \"một chút\" ấy làm nước phồng lên.",
  "Giới vật lý có dăm bảy kiểu xa.",
  "Xa kiểu lực hút thì chia hai lần.",
  "Xa kiểu ánh sáng cũng chia hai lần.",
  "Còn xa kiểu thuỷ triều thì chia ba lần — xa gấp đôi là yếu đi tám lần.",
  "Mà Mặt Trời ở xa hơn Mặt Trăng khoảng ba trăm chín mươi lần. ba trăm chín mươi nhân ba trăm chín mươi nhân ba trăm chín mươi ra gần sáu mươi triệu. hai mươi bảy triệu chia sáu mươi triệu, ra khoảng không phẩy bốn năm.",
  "Thế là hết tranh luận:",
  "Mặt Trăng thắng không phải vì nó to, mà vì nó ngồi gần.",
  "Và nước mới chỉ là cái dễ thấy nhất.",
  "Trái Đất nghiêng hai mươi ba phẩy bốn độ, và cái nghiêng đó là lý do có bốn mùa, có mùa gặt và mùa gió.",
  "Năm một nghìn chín trăm chín mươi ba, nhà thiên văn người Pháp Jacques Laskar cùng đồng nghiệp đăng trên tạp chí Nature một mô phỏng gây sốc: không có Mặt Trăng, cái trục ấy có thể lắc hỗn loạn trong khoảng từ không đến tám mươi lăm độ.",
  "Nghiêng tám mươi lăm độ nghĩa là có lúc cả một nửa hành tinh quay hẳn mặt về Mặt Trời mấy chục năm, rồi lại úp vào bóng tối.",
  "Mùa màng theo nghĩa ta biết sẽ không tồn tại.",
  "Chỉ có điều — chỗ này rất nhiều video bỏ qua — con số đó đã bị phản biện.",
  "Năm hai nghìn không trăm mười hai, nhóm của Jack Lissauer ở NASA chạy lại bài toán với nhiều điều kiện đầu hơn, công bố trên tạp chí Icarus một kết quả bình tĩnh hơn hẳn: trục của một Trái Đất không Mặt Trăng dao động chủ yếu trong khoảng mười đến năm mươi độ.",
  "Vẫn loạn hơn hai mươi ba phẩy bốn độ rất nhiều, nhưng không phải cảnh hành tinh lộn nhào mà người ta hay kể.",
  "Tôi nêu cả hai, vì đây là tranh luận chưa xong.",
  "Rồi còn cái ngày.",
  "Mặt Trăng là cái phanh.",
  "Chính chỗ nó kéo nước phồng lên cũng là chỗ nó cọ vào Trái Đất và hãm Trái Đất chậm lại — và cái giá nó trả cho việc hãm đó đúng là ba phẩy tám cm mỗi năm bị đẩy ra xa.",
  "Hai chuyện ấy là một chuyện.",
  "Theo các mô hình về thời Trái Đất mới có Mặt Trăng, một ngày lúc đó dài cỡ năm đến sáu tiếng.",
  "Còn nếu chưa từng có Mặt Trăng thì hôm nay một ngày dài bao nhiêu?",
  "Trên mạng có một con số rất phổ biến, là sáu đến tám tiếng.",
  "Tôi đi tìm nguồn gốc của nó và không thấy nghiên cứu nào chịu trách nhiệm cho con số ấy, nên tôi không dùng.",
  "Nói chắc được thì chỉ thế này: không có Mặt Trăng, Trái Đất quay nhanh hơn, gió mạnh hơn, và chữ \"một ngày\" có nghĩa khác.",
  "Đến đây thì phần đo đạc đã xong.",
  "Nhưng câu chuyện chưa dừng ở đó.",
  "Nên nói rõ luật chơi: cái gì có người đo rồi thì tôi nói rõ là ai đo; cái gì chỉ suy ra được, tôi nói thẳng là suy ra.",
  "Giả sử đêm mai nhìn lên trời, và không có gì ở đó cả.",
  "Thứ sập trước không phải nước.",
  "Là ánh sáng.",
  "Đêm rằm sáng hơn đêm không trăng rất nhiều.",
  "Với chúng ta, đó là chuyện thơ.",
  "Với nhiều loài, đó là cái đồng hồ duy nhất chúng có.",
  "Loài bọ hung ở Nam Phi lăn phân về tổ theo đường thẳng, và nó giữ được đường thẳng bằng cách đọc ánh trăng phân cực — tín hiệu yếu hơn ánh nắng phân cực cả triệu lần.",
  "Nghiên cứu đó đăng trên Nature năm hai nghìn không trăm linh ba.",
  "Vào đêm không trăng, một loài bọ hung khác chuyển sang định hướng bằng dải Ngân Hà.",
  "Nghĩa là mất trăng, vài loài còn phương án hai."
];

/* ═══════════════════════ BỘ ĐỒ NGHỀ CỦA KHỐI 2 ═══════════════════════ */
const K2 = {};
const TR = "#E8E6DF", BI = "#2E6F8E", DA = "#C98A4B", NH = "#F2C14E",
      SH = "#E0705A", DEM = "#070B16", DO = "#D4523C", C2 = "#8FA8BA";

/* bù lệch cho vật HTML đặt tay bên trong một .lop đã bị nới 14% mỗi bên
   (bẫy §11.2). SVG thì KHÔNG cần bù: viewBox đã được dịch sẵn. */
K2.O = { x: 179.2, y: 100.8 };
K2.dat2 = (x, y, w, h) => "inset:auto;left:" + (x + K2.O.x).toFixed(1) + "px;top:" +
  (y + K2.O.y).toFixed(1) + "px;width:" + w + "px;height:" + h + "px";

K2.anh = (f, sau, loc, pos) =>
  '<div class="lop" data-sau="' + (sau === undefined ? .42 : sau) + '">' +
  '<img src="anh/' + f + '" alt="" style="object-position:' + (pos || "50% 50%") +
  ';filter:' + (loc || "contrast(1.1) saturate(.72) brightness(.46)") + '"></div>';
/* vignette chàm — gradient CSS TĨNH, không phải animation */
K2.toi = (m) =>
  '<div class="lop" data-sau="0.98"><div style="position:absolute;inset:-18%;' +
  'background:radial-gradient(ellipse at 50% 46%,rgba(5,9,22,0) 24%,' +
  'rgba(5,9,22,.52) 68%,rgba(5,9,22,' + (m || ".93") + ') 100%)"></div></div>';
K2.nen = (a, b) =>
  '<div class="lop" data-sau="0.08"><div style="position:absolute;inset:-18%;' +
  'background:radial-gradient(ellipse at 52% 44%,' + (a || "#101E31") + ' 0%,' +
  (b || "#070B16") + ' 70%,#04060E 100%)"></div></div>';
K2.ve = (sau) =>
  '<div class="lop" data-sau="' + (sau === undefined ? .8 : sau) +
  '"><svg class="ve" viewBox="0 0 1280 720" style="overflow:visible"></svg></div>';
K2.troi = (sau) =>
  '<div class="lop" data-sau="' + (sau === undefined ? .14 : sau) +
  '"><svg class="troi" viewBox="0 0 1280 720" style="overflow:visible"></svg></div>';
/* dòng nguồn / dẫn nghiên cứu, góc dưới phải — luôn đứng một mình (§8) */
K2.nguon = (id, s) =>
  '<div class="tx" id="' + id + '" style="left:auto;right:36px;top:678px;' +
  'font:400 13px/1.3 system-ui;letter-spacing:.01em;color:#5E7589;text-align:right">' + s + '</div>';

K2.veDan = (p, u) => {
  p.setAttribute("pathLength", 1000);
  p.setAttribute("stroke-dasharray", "1000");
  p.setAttribute("stroke-dashoffset", (1000 * (1 - cl(u, 0, 1))).toFixed(1));
};

/* ---- quả cầu Trái Đất vẽ tay: đại dương --bien, lục địa --dat, mây, bóng đêm.
   Trả về { g, quay, bong } — quay để cho hành tinh tự quay, bong để dời đường
   ngày–đêm. Lục địa vẽ HAI bản cách nhau 2r nên cuộn vòng không bao giờ hở. */
K2.cau = function (sv, pre, cx, cy, r) {
  const g = el("g", {}, sv);
  const cp = el("clipPath", { id: pre + "-cp" }, defsOf(sv));
  el("circle", { cx: cx, cy: cy, r: r }, cp);
  gradR(sv, pre + "-oc", cx - r * .34, cy - r * .38, r * 1.75,
    [[0, "#4A93B4"], [.42, BI], [.78, "#194A63"], [1, "#0A2231"]]);
  el("circle", { cx: cx, cy: cy, r: r, fill: "url(#" + pre + "-oc)" }, g);
  /* BẪY đã trả giá: KHÔNG đặt transform lên chính nhóm bị cắt. clip-path
     userSpaceOnUse được tính trong hệ toạ độ SAU transform của phần tử, nên
     dời nhóm là dời luôn cái khuôn cắt — lục địa tràn ra ngoài quả cầu mà
     không sinh một dòng lỗi nào. Cắt ở ngoài, cuộn ở trong. */
  const quay = el("g", { "clip-path": "url(#" + pre + "-cp)" }, g);
  const noi = el("g", {}, quay);
  for (let k = 0; k < 2; k++) {
    const gg = el("g", { transform: "translate(" + (k * 2 * r).toFixed(1) + " 0)" }, noi);
    for (let i = 0; i < 13; i++) {
      const x = cx - r + rn(i, 73) * 2 * r, y = cy + (rn(i, 72) - .5) * 1.56 * r;
      const w = (.14 + rn(i, 74) * .26) * r, h = (.09 + rn(i, 75) * .17) * r;
      el("ellipse", { cx: x.toFixed(1), cy: y.toFixed(1), rx: w.toFixed(1), ry: h.toFixed(1),
        fill: DA, opacity: (.58 + rn(i, 76) * .34).toFixed(2),
        transform: "rotate(" + ((rn(i, 77) - .5) * 80).toFixed(1) + " " +
          x.toFixed(1) + " " + y.toFixed(1) + ")" }, gg);
    }
    for (let i = 0; i < 9; i++) {
      const x = cx - r + rn(i, 81) * 2 * r, y = cy + (rn(i, 82) - .5) * 1.6 * r;
      el("ellipse", { cx: x.toFixed(1), cy: y.toFixed(1),
        rx: ((.1 + rn(i, 83) * .2) * r).toFixed(1), ry: ((.04 + rn(i, 84) * .07) * r).toFixed(1),
        fill: "#E6EEF4", opacity: (.14 + rn(i, 85) * .2).toFixed(2) }, gg);
    }
  }
  gradL(sv, pre + "-bg", cx - r, cy, cx + r, cy,
    [[0, "#04060E", 0], [.40, "#04060E", 0], [.66, "#04060E", .58], [1, "#04060E", .95]]);
  const bong = el("circle", { cx: cx, cy: cy, r: r, fill: "url(#" + pre + "-bg)" }, g);
  gradR(sv, pre + "-kq", cx, cy, r * 1.3,
    [[.74, "#8FD6F2", 0], [.93, "#8FD6F2", .3], [1, "#8FD6F2", 0]]);
  const kq = el("circle", { cx: cx, cy: cy, r: r * 1.3, fill: "url(#" + pre + "-kq)" }, g);
  kq.style.mixBlendMode = "screen";
  return { g: g, quay: quay, noi: noi, bong: bong, cx: cx, cy: cy, r: r };
};
/* cho hành tinh quay: d = quãng cuộn, luôn nằm trong [0, 2r) */
K2.xoay = (m, d) => set(m.noi, { transform: "translate(" +
  (-(((d % (2 * m.r)) + 2 * m.r) % (2 * m.r))).toFixed(1) + " 0)" });

/* ---- đĩa Mặt Trăng vẽ tay: bạc trăng + biển tối + hố tất định ---- */
K2.trang = function (sv, pre, cx, cy, r) {
  const g = el("g", {}, sv);
  gradR(sv, pre + "-tr", cx - r * .3, cy - r * .3, r * 1.7,
    [[0, "#FAF8F2"], [.5, TR], [.86, "#B9B5AA"], [1, "#8E8A80"]]);
  el("circle", { cx: cx, cy: cy, r: r, fill: "url(#" + pre + "-tr)" }, g);
  for (let i = 0; i < 7; i++)
    el("ellipse", { cx: (cx + (rn(i, 91) - .5) * 1.3 * r).toFixed(1),
      cy: (cy + (rn(i, 92) - .5) * 1.3 * r).toFixed(1),
      rx: ((.1 + rn(i, 93) * .2) * r).toFixed(1), ry: ((.08 + rn(i, 94) * .16) * r).toFixed(1),
      fill: "#9E9A90", opacity: .42 }, g);
  for (let i = 0; i < 16; i++)
    el("circle", { cx: (cx + (rn(i, 95) - .5) * 1.7 * r).toFixed(1),
      cy: (cy + (rn(i, 96) - .5) * 1.7 * r).toFixed(1),
      r: ((.015 + rn(i, 97) * .045) * r).toFixed(2),
      fill: "#8B8779", opacity: (.3 + rn(i, 98) * .4).toFixed(2) }, g);
  return g;
};

/* ---- đĩa Mặt Trời vẽ tay: --nhat + vành nhật hoa thở theo t ---- */
K2.mtroi = function (sv, pre, cx, cy, r) {
  const g = el("g", {}, sv);
  gradR(sv, pre + "-nh", cx, cy, r * 2.6,
    [[.30, "#FFF3C8", .95], [.42, NH, .6], [.7, "#E08A2E", .18], [1, NH, 0]]);
  const hao = el("circle", { cx: cx, cy: cy, r: r * 2.6, fill: "url(#" + pre + "-nh)" }, g);
  hao.style.mixBlendMode = "screen";
  gradR(sv, pre + "-dt", cx - r * .2, cy - r * .2, r * 1.3,
    [[0, "#FFF8DC"], [.55, NH], [1, "#D98C2A"]]);
  el("circle", { cx: cx, cy: cy, r: r, fill: "url(#" + pre + "-dt)" }, g);
  g.__hao = hao;
  return g;
};

/* ---- mũi tên có đầu: trả về { than, dau }, vẽ dần bằng K2.veDan ---- */
K2.ten = function (p, x1, y1, x2, y2, mau, w) {
  const g = el("g", {}, p);
  const than = el("path", { d: "M" + x1 + "," + y1 + " L" + x2 + "," + y2,
    stroke: mau, "stroke-width": w || 5, fill: "none", "stroke-linecap": "round" }, g);
  const a = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
  const dau = el("polygon", { points: "0,-9 20,0 0,9", fill: mau, opacity: 0,
    transform: "translate(" + x2 + " " + y2 + ") rotate(" + a.toFixed(1) + ")" }, g);
  return { g: g, than: than, dau: dau };
};

/* pha trăng: p=0 trăng non, p=.5 trăng rằm. Trả về "d" của phần được chiếu sáng. */
K2.pha = (p, cx, cy, r) => {
  const k = Math.cos(2 * Math.PI * p), rx = Math.abs(k) * r;
  /* cờ quét của đường phân giới: lưỡi liềm thì phình về phía SÁNG,
     khuyết thì phình về phía TỐI. Sai cờ là p=0 ra trăng tròn. */
  const ph = p < .5 ? 1 : 0, s2 = ((k > 0) === (ph === 1)) ? 0 : 1;
  return "M" + cx + "," + (cy - r) + " A" + r + "," + r + " 0 0," + ph + " " + cx + "," + (cy + r) +
         " A" + rx.toFixed(2) + "," + r + " 0 0," + s2 + " " + cx + "," + (cy - r) + " Z";
};
/* con cá nhỏ nhìn ngang, gốc toạ độ ở mõm */
K2.ca = (p, mau, s) => {
  const g = el("g", {}, p);
  el("path", { d: "M0,0 Q16,-9 34,0 Q16,9 0,0 Z", fill: mau }, g);
  el("path", { d: "M34,0 L46,-9 L46,9 Z", fill: mau, opacity: .85 }, g);
  el("circle", { cx: 8, cy: -2, r: 1.8, fill: "#07101A" }, g);
  g.__s = s || 1;
  return g;
};

/* ═══════════════════════════════════════════════════════════════════
   ĐOẠN 20 — NƯỚC: triều là cái bơm của đồng bằng sông Cửu Long
   ═══════════════════════════════════════════════════════════════════ */

/* ---- k2c01 · kênh miền Tây, lưỡi nước mặn rút dần (2,5 s) ---- */
DANGKY({
  id: "k2c01", steps: 0, say: [S[0]],
  html: K2.anh("k2-kenh-mekong.jpg", .40,
          "contrast(1.14) saturate(.62) brightness(.44)", "64% 58%") +
        K2.ve(.74) + K2.toi(".9") +
        '<div class="hud">' + K2.nguon("k2c01-ng", "Kênh rạch My Tho · Esin Üstün · CC BY 2.0") + '</div>',
  anim: root => {
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    gradL(V, "k2c01-m", 1340, 0, 420, 0,
      [[0, "#1B4A63", .86], [.55, BI, .55], [1, BI, 0]]);
    const luoi = el("path", { d: "", fill: "url(#k2c01-m)" }, V);
    luoi.style.mixBlendMode = "screen";
    const vach = el("path", { d: "", fill: "none", stroke: TR,
      "stroke-width": 2.2, opacity: .5 }, V);
    return c => {
      const u = ez(c.u);
      cam(root, { t: c.t, x: lerp(30, -26, u), y: lerp(-6, 8, u), z: lerp(1.16, 1.30, u) });
      const w = lerp(880, 300, ezo(c.u)) + 22 * Math.sin(c.t * .9);
      const x = 1340 - w, y0 = 300 + 26 * Math.sin(c.t * .55);
      const d = "M1340," + (y0 - 130).toFixed(0) + " L" + x.toFixed(0) + "," + (y0 + 60).toFixed(0) +
                " L1340," + (y0 + 250).toFixed(0) + " Z";
      set(luoi, { d: d });
      set(vach, { d: "M" + x.toFixed(0) + "," + (y0 + 60).toFixed(0) +
        " L1340," + (y0 - 130).toFixed(0) });
      K2.veDan(vach, ezo(c.t / 1.1));
      kh("k2c01-ng", c.t, .35, 2.1);
    };
  }
});

/* ---- k2c02 · CÚ GIẬT 0,9 s: đâm thẳng vào ruộng lúa nhìn từ vệ tinh ---- */
DANGKY({
  id: "k2c02", steps: 0, say: [S[1]],
  html: K2.anh("k2-ruong-mekong.jpg", .55,
          "contrast(1.24) saturate(.8) brightness(.52)", "46% 52%") + K2.toi(".84"),
  anim: root => c => {
    cam(root, { t: c.t, x: lerp(-18, 10, ezo(c.u)), z: lerp(1.42, 1.20, ezo(c.u)) });
  }
});

/* ---- k2c03 · mặt cắt: triều lên, qua cống, vào ruộng, cá đi theo (4,4 s) ---- */
DANGKY({
  id: "k2c03", steps: 0, say: [S[2]],
  html: K2.nen("#0E2033", "#060A14") + K2.ve(.72) + K2.toi(".88"),
  anim: root => {
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    const YR = 330, YS = 392, YD = 664;      /* mặt ruộng · đáy cống · đáy kênh */
    /* trăng treo trên trời: nguồn của cái bơm này, để khung trên không trống */
    const gtr = el("g", {}, V); K2.trang(gtr, "k2c03", 1040, 128, 44);
    gradR(V, "k2c03-q", 1040, 128, 150, [[.3, "#EAF2F8", .34], [1, "#EAF2F8", 0]]);
    const q = el("circle", { cx: 1040, cy: 128, r: 150, fill: "url(#k2c03-q)" }, V);
    q.style.mixBlendMode = "screen";
    /* hàng dừa nước ven bờ — chân trời có vật, không phải nền trơn */
    for (let i = 0; i < 16; i++) {
      const x = -140 + i * 46, h = 54 + rn(i, 21) * 46;
      const g = el("g", { transform: "translate(" + x.toFixed(0) + " " + YR + ")" }, V);
      el("path", { d: "M0,0 L0," + (-h).toFixed(0), stroke: "#26391F",
        "stroke-width": 4.6, fill: "none" }, g);
      for (let k = 0; k < 5; k++)
        el("path", { d: "M0," + (-h).toFixed(0) + " q" + ((k - 2) * 15) + "," +
          (-16 - rn(i, 22 + k) * 10) + " " + ((k - 2) * 30) + "," + (6 + rn(i, 27 + k) * 12),
          stroke: "#26391F", "stroke-width": 3.4, fill: "none", "stroke-linecap": "round" }, g);
    }
    gradL(V, "k2c03-n", 0, YR - 40, 0, 760, [[0, "#63AECD", .96], [1, "#113A4F", .96]]);
    const nuocK = el("path", { d: "", fill: "url(#k2c03-n)" }, V);
    const nuocR = el("path", { d: "", fill: "url(#k2c03-n)" }, V);
    const gca = el("g", {}, V), ca = [];
    for (let i = 0; i < 6; i++) ca.push(K2.ca(gca, SH, .9 + rn(i, 31) * .8));
    /* đất: ruộng cao bên trái · bờ có CỐNG khoét · lòng kênh bên phải */
    el("path", { d: "M-260,800 L-260," + YR + " L600," + YR + " L600," + YS +
      " L688," + YS + " L688," + YR + " L760," + YR + " L1000," + YD +
      " L1540," + YD + " L1540,800 Z", fill: "#3B2A1B" }, V);
    el("path", { d: "M-260," + YR + " L600," + YR + " M600," + YR + " L600," + YS +
      " L688," + YS + " L688," + YR + " L760," + YR + " L1000," + YD + " L1540," + YD,
      stroke: DA, "stroke-width": 3.4, fill: "none", opacity: .82 }, V);
    /* gốc lúa: cao hẳn lên để nhìn ra là ruộng, không phải vạch kẻ */
    for (let i = 0; i < 20; i++) {
      const x = -220 + i * 42, h = 52 + rn(i, 33) * 26;
      el("path", { d: "M" + x + "," + YR + " l-13," + (-h * .8).toFixed(0) +
        " M" + x + "," + YR + " l0," + (-h).toFixed(0) +
        " M" + x + "," + YR + " l13," + (-h * .75).toFixed(0),
        stroke: "#7D9A44", "stroke-width": 3.4, fill: "none", "stroke-linecap": "round",
        opacity: (.55 + rn(i, 34) * .4).toFixed(2) }, V);
    }
    const phen = [];
    for (let i = 0; i < 24; i++)
      phen.push(el("circle", { cx: 0, cy: 0, r: (3 + rn(i, 35) * 4.2).toFixed(1),
        fill: "#A8572A", opacity: 0 }, V));
    return c => {
      const u = ez(c.u);
      cam(root, { t: c.t, x: lerp(32, -28, u), y: lerp(12, -8, u), z: lerp(1.03, 1.13, u) });
      /* mực nước kênh dâng từ đáy lên, vượt đáy cống rồi tràn vào ruộng */
      const m = lerp(YD - 6, YR - 28, ezo(cl((c.t - .2) / 3.1, 0, 1))) + 6 * Math.sin(c.t * 1.7);
      set(nuocK, { d: "M688," + m.toFixed(1) + " L1540," + m.toFixed(1) +
        " L1540,800 L1000," + YD + " L688," + YD + " Z" });
      const r = cl((YS - m) / 64, 0, 1);
      const mr = YR - 6 - r * 26;
      set(nuocR, { d: r <= 0 ? "M0,0 Z" : "M-260," + mr.toFixed(1) + " L646," + mr.toFixed(1) +
        " L646," + YS + " L-260," + YS + " Z" });
      op(nuocR, (.92 * ez(r * 2)).toFixed(3));
      ca.forEach((e, i) => {
        const t2 = c.t - 1.4 - i * .3, v = ezo(cl(t2 / 2.3, 0, 1));
        const x = lerp(1400, 120 - i * 72, v);
        const y = (x > 700 ? lerp(m + 80, YS - 16, v) : mr - 16) + 11 * Math.sin(c.t * 2.2 + i);
        set(e, { transform: "translate(" + x.toFixed(1) + " " + y.toFixed(1) +
          ") scale(" + (-e.__s).toFixed(2) + " " + e.__s.toFixed(2) + ")" });
        op(e, (ez(t2 / .35) * .95).toFixed(3));
      });
      phen.forEach((e, i) => {
        const t2 = c.t - 1.8 - rn(i, 37) * .9, v = ezo(cl(t2 / 2.0, 0, 1));
        set(e, { cx: lerp(-140 + rn(i, 38) * 720, 1060, v).toFixed(1),
                 cy: (mr - 8 - rn(i, 39) * 16 + 5 * Math.sin(c.t * 2 + i)).toFixed(1) });
        op(e, (cl(t2 / .4, 0, 1) * (1 - v * .9) * .85).toFixed(3));
      });
      op(gtr, (.9 * ez(c.t / .6)).toFixed(3));
      op(q, (.6 + .18 * Math.sin(c.t * .9)).toFixed(3));
    };
  }
});

/* ---- k2c04 · CHỮ 1/4 «héc-ta» · vùng ngập triều trên ảnh vệ tinh (5,1 s) ---- */
DANGKY({
  id: "k2c04", steps: 0, say: [S[3]],
  html: K2.anh("k2-dbscl-vetinh.jpg", .34,
          "contrast(1.18) saturate(.66) brightness(.46)", "50% 44%") +
        K2.ve(.68) + K2.toi(".92") +
        '<div class="hud"><div class="tx" id="k2c04-s" style="left:84px;top:236px">' +
        '<span class="khung-so so" id="k2c04-n" style="font-size:132px;color:' + TR + '">0</span>' +
        '<div class="dv" style="margin-top:4px">héc-ta</div></div>' +
        K2.nguon("k2c04-ng", "Sentinel-2 · Copernicus / ESA · CC BY · số: HESS 24, 2020") + '</div>',
  anim: root => {
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    const g = el("g", {}, V), o = [];
    /* 18 mảng ngập tất định, rải trên vùng đồng bằng của khung ảnh */
    for (let i = 0; i < 18; i++) {
      const x = 240 + rn(i, 51) * 900, y = 250 + rn(i, 52) * 360;
      o.push(el("ellipse", { cx: x.toFixed(1), cy: y.toFixed(1),
        rx: (44 + rn(i, 53) * 96).toFixed(1), ry: (26 + rn(i, 54) * 52).toFixed(1),
        fill: BI, opacity: 0,
        transform: "rotate(" + ((rn(i, 55) - .5) * 90).toFixed(1) + " " +
          x.toFixed(1) + " " + y.toFixed(1) + ")" }, g));
    }
    g.style.mixBlendMode = "screen";
    return c => {
      const u = ez(c.u);
      cam(root, { t: c.t, x: lerp(-24, 22, u), y: lerp(8, -10, u), z: lerp(1.06, 1.19, u) });
      o.forEach((e, i) => op(e, (ez((c.t - .5 - rn(i, 56) * 2.1) / .6) *
        (.4 + .22 * Math.sin(c.t * 1.1 + i))).toFixed(3)));
      txt("k2c04-n", soVN(1000000 * ezo(cl((c.t - .55) / 2.9, 0, 1))));
      kh("k2c04-s", c.t, .55, 4.0);
      kh("k2c04-ng", c.t, 4.2, 1e9);
    };
  }
});

/* ---- k2c05 · chợ nổi + dải lịch con nước 30 đêm, rồi xáo tung (3,2 s) ---- */
DANGKY({
  id: "k2c05", steps: 0, say: [S[4]],
  html: K2.anh("k2-chonoi.jpg", .44,
          "contrast(1.12) saturate(.6) brightness(.4)", "50% 46%") +
        K2.ve(.8) + K2.toi(".92") +
        '<div class="hud">' + K2.nguon("k2c05-ng", "Chợ nổi Cái Răng, Cần Thơ · V. Argenberg · CC BY 4.0") + '</div>',
  anim: root => {
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    const g = el("g", {}, V), o = [];
    for (let i = 0; i < 30; i++) {
      const k = el("g", {}, g);
      const x = 86 + i * 37.4, y = 600;
      el("circle", { cx: x.toFixed(1), cy: y, r: 14, fill: "#141A26", opacity: .9 }, k);
      const s = el("path", { d: K2.pha(i / 30, x, y, 13.4), fill: TR, opacity: .94 }, k);
      k.__x = x; k.__s = s;
      o.push(k);
    }
    return c => {
      const u = ez(c.u);
      cam(root, { t: c.t, x: lerp(26, -22, u), y: lerp(-8, 6, u), z: lerp(1.05, 1.17, u) });
      o.forEach((k, i) => {
        const vao = ez((c.t - .25 - i * .045) / .35);
        const ra = ezo(cl((c.t - 1.9 - rn(i, 61) * .7) / 1.2, 0, 1));
        op(k, (vao * (1 - ra)).toFixed(3));
        set(k, { transform: "translate(" + (ra * (rn(i, 62) - .5) * 420).toFixed(1) + " " +
          (ra * (-40 - rn(i, 63) * 190)).toFixed(1) + ") rotate(" +
          (ra * (rn(i, 64) - .5) * 120).toFixed(1) + " " + k.__x.toFixed(1) + " 600)" });
      });
      kh("k2c05-ng", c.t, .4, 2.8);
    };
  }
});

/* ═══════════════════════════════════════════════════════════════════
   ĐOẠN 21–25 — VÌ SAO MẶT TRỜI TO THẾ MÀ KÉO YẾU HƠN
   ═══════════════════════════════════════════════════════════════════ */

/* ---- k2c06 · CÚ GIẬT 1,5 s: đâm vào Mặt Trời ---- */
DANGKY({
  id: "k2c06", steps: 0, say: [S[5]],
  html: K2.anh("k2-mattroi.jpg", .52,
          "contrast(1.2) saturate(1.05) brightness(.6)", "50% 50%") + K2.toi(".78") +
        '<div class="hud">' + K2.nguon("k2c06-ng", "SDO · NASA · phạm vi công cộng") + '</div>',
  anim: root => c => {
    cam(root, { t: c.t, x: lerp(16, -12, ezo(c.u)), z: lerp(1.46, 1.22, ezo(c.u)) });
    kh("k2c06-ng", c.t, .2, 1.3);
  }
});

/* ---- k2c07 · nghịch lý: khối to kéo yếu, khối bé kéo mạnh (2,9 s) ---- */
DANGKY({
  id: "k2c07", steps: 0, say: [S[6]],
  html: K2.nen("#0C1828", "#060A14") + K2.troi(.1) + K2.ve(.78) + K2.toi(".9"),
  anim: root => {
    const T = root.querySelector("svg.troi"); T.innerHTML = ""; sao(T, 150);
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    K2.mtroi(V, "k2c07", 170, 360, 148);
    const dat = K2.cau(V, "k2c07", 640, 360, 62);
    K2.trang(V, "k2c07", 1058, 360, 30);
    const a1 = K2.ten(V, 578, 360, 360, 360, NH, 6);     /* kéo về Mặt Trời */
    const a2 = K2.ten(V, 702, 360, 1000, 360, TR, 6);    /* kéo về Mặt Trăng */
    return c => {
      const u = ez(c.u);
      cam(root, { t: c.t, x: lerp(-20, 18, u), z: lerp(1.02, 1.11, u) });
      K2.xoay(dat, c.t * 16);
      const w1 = ezo(cl((c.t - .3) / 1.0, 0, 1)) * .34;   /* Mặt Trời: kéo NGẮN */
      const w2 = ezo(cl((c.t - .3) / 1.0, 0, 1));         /* Mặt Trăng: kéo DÀI */
      K2.veDan(a1.than, w1); K2.veDan(a2.than, w2);
      op(a1.dau, ez((w1 - .3) / .05)); op(a2.dau, ez((w2 - .86) / .12));
      set(a1.dau, { transform: "translate(" + (578 - 218 * w1).toFixed(1) + " 360) rotate(180)" });
      set(a2.dau, { transform: "translate(" + (702 + 298 * w2).toFixed(1) + " 360)" });
    };
  }
});

/* ---- k2c08 · CÚ GIẬT 1,1 s: dấu ✕ đỏ trên mặt Mặt Trời ---- */
DANGKY({
  id: "k2c08", steps: 0, say: [S[7]],
  html: K2.anh("k2-mattroi.jpg", .5,
          "contrast(1.22) saturate(.9) brightness(.46)", "44% 56%") +
        K2.ve(.86) + K2.toi(".86"),
  anim: root => {
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    const a = el("path", { d: "M470,200 L810,540", stroke: DO, "stroke-width": 16,
      "stroke-linecap": "round", fill: "none" }, V);
    const b = el("path", { d: "M810,200 L470,540", stroke: DO, "stroke-width": 16,
      "stroke-linecap": "round", fill: "none" }, V);
    return c => {
      cam(root, { t: c.t, x: lerp(-8, 8, ez(c.u)), z: lerp(1.18, 1.32, ezo(c.u)) });
      K2.veDan(a, ezo(c.t / .34));
      K2.veDan(b, ezo((c.t - .22) / .34));
    };
  }
});

/* ---- k2c09 · Mặt Trăng thật, LRO (2,6 s) ---- */
DANGKY({
  id: "k2c09", steps: 0, say: [S[8]],
  html: K2.anh("k2-mattrang.jpg", .36,
          "contrast(1.1) saturate(.3) brightness(.52)", "50% 50%") + K2.toi(".9") +
        '<div class="hud">' + K2.nguon("k2c09-ng", "Lunar Reconnaissance Orbiter · NASA/GSFC/ASU · phạm vi công cộng") + '</div>',
  anim: root => c => {
    const u = ez(c.u);
    cam(root, { t: c.t, x: lerp(24, -20, u), y: lerp(-10, 8, u),
                z: lerp(1.30, 1.14, u), r: lerp(-1.2, 1.0, u) });
    kh("k2c09-ng", c.t, .3, 2.3);
  }
});

/* ---- k2c10 · CHỮ 2/4 «lần» · 27.000.000 đếm lên (2,7 s) ---- */
DANGKY({
  id: "k2c10", steps: 0, say: [S[9]],
  html: K2.anh("k2-mattroi.jpg", .34,
          "contrast(1.1) saturate(.85) brightness(.3)", "72% 50%") + K2.toi(".92") +
        '<div class="hud"><div class="tx" id="k2c10-s" style="left:80px;top:244px">' +
        '<span class="khung-so so" id="k2c10-n" style="font-size:138px;color:' + TR + '">0</span>' +
        '<div class="dv" style="margin-top:4px">lần</div></div></div>',
  anim: root => c => {
    const u = ez(c.u);
    cam(root, { t: c.t, x: lerp(-26, 20, u), z: lerp(1.08, 1.20, u) });
    txt("k2c10-n", soVN(27000000 * ezo(cl((c.t - .25) / 1.7, 0, 1))));
    kh("k2c10-s", c.t, .25, 1e9);
  }
});

/* ---- k2c11 · CÚ GIẬT 1,0 s: đĩa Mặt Trời tràn khung, Mặt Trăng bằng hạt đậu ---- */
DANGKY({
  id: "k2c11", steps: 0, say: [S[10]],
  html: K2.nen("#13100A", "#05060C") + K2.ve(.8) + K2.toi(".86"),
  anim: root => {
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    const mt = K2.mtroi(V, "k2c11", 430, 372, 330);
    K2.trang(V, "k2c11", 1058, 372, 17);
    return c => {
      cam(root, { t: c.t, x: lerp(-10, 8, ezo(c.u)), z: lerp(1.22, 1.10, ezo(c.u)) });
      op(mt.__hao, (.7 + .25 * Math.sin(c.t * 3.1)).toFixed(3));
    };
  }
});

/* ---- k2c12 · lực hút đơn bị gạch bỏ (1,9 s) ---- */
DANGKY({
  id: "k2c12", steps: 0, say: [S[11]],
  html: K2.nen("#0C1828", "#060A14") + K2.troi(.1) + K2.ve(.8) + K2.toi(".9"),
  anim: root => {
    const T = root.querySelector("svg.troi"); T.innerHTML = ""; sao(T, 120);
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    const dat = K2.cau(V, "k2c12", 420, 380, 96);
    K2.trang(V, "k2c12", 960, 380, 40);
    const a = K2.ten(V, 530, 380, 900, 380, TR, 7);
    const x1 = el("path", { d: "M600,286 L832,474", stroke: DO, "stroke-width": 13,
      "stroke-linecap": "round", fill: "none" }, V);
    const x2 = el("path", { d: "M832,286 L600,474", stroke: DO, "stroke-width": 13,
      "stroke-linecap": "round", fill: "none" }, V);
    return c => {
      const u = ez(c.u);
      cam(root, { t: c.t, x: lerp(18, -16, u), z: lerp(1.04, 1.13, u) });
      K2.xoay(dat, c.t * 22);
      const w = ezo(cl(c.t / .55, 0, 1));
      K2.veDan(a.than, w); op(a.dau, ez((w - .88) / .1));
      K2.veDan(x1, ezo((c.t - .7) / .32));
      K2.veDan(x2, ezo((c.t - .92) / .32));
    };
  }
});

/* ═══════════════════════════════════════════════════════════════════
   k2c13 · CƠ CHẾ — "cái hiệu giữa hai cái kéo" (6,7 s)
   Ý này vốn TRỪU TƯỢNG (một phép trừ), nên sơ đồ vẽ là đúng — §12.
   Bản đầu đặt sơ đồ đè lên ảnh cảng ban ngày: hai tông đánh nhau, và
   hai mũi tên lệch nhau theo chiều dọc nên không so được độ dài. Bản này:
   nền đêm sạch · hai mũi tên CÙNG MỘT ĐỘ CAO để so dài–ngắn bằng mắt ·
   mặt biển thật ở chân khung phồng lên theo đúng nhịp của phép trừ.
   ═══════════════════════════════════════════════════════════════════ */
DANGKY({
  id: "k2c13", steps: 0, say: [S[12]],
  html: K2.nen("#0C1A2B", "#05080F") + K2.troi(.08) + K2.ve(.76) + K2.toi(".92"),
  anim: root => {
    const T = root.querySelector("svg.troi"); T.innerHTML = ""; sao(T, 140);
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    const CX = 500, CY = 352, R = 158, YA = 292;
    gradR(V, "k2c13-nc", CX, CY, R * 1.6,
      [[.70, "#5BB3D6", 0], [.88, "#5BB3D6", .66], [1, "#5BB3D6", 0]]);
    const bong = el("ellipse", { cx: CX, cy: CY, rx: R, ry: R, fill: "url(#k2c13-nc)" }, V);
    bong.style.mixBlendMode = "screen";
    const dat = K2.cau(V, "k2c13", CX, CY, R);
    K2.trang(V, "k2c13", 1126, CY, 46);
    /* hai cái kéo, CÙNG một độ cao: bên gần dài, bên xa ngắn */
    const g1 = K2.ten(V, CX + R - 10, YA, CX + R + 196, YA, TR, 7);
    const g2 = K2.ten(V, CX - R + 10, YA, CX - R + 108, YA, TR, 7);
    el("circle", { cx: CX + R - 10, cy: YA, r: 6, fill: TR }, V);
    el("circle", { cx: CX - R + 10, cy: YA, r: 6, fill: TR }, V);
    /* mặt biển thật ở chân khung — cái phồng lên là NƯỚC, không phải sơ đồ */
    const bien = el("g", {}, V);
    const s1 = song(bien, 648, 16, 230, "#123D55");
    const s2 = song(bien, 672, 11, 170, "#1B5C7C");
    return c => {
      const u = ez(c.u);
      cam(root, { t: c.t, x: lerp(28, -24, u), y: lerp(6, -8, u), z: lerp(1.03, 1.13, u) });
      K2.xoay(dat, c.t * 15);
      const w = ezo(cl((c.t - .25) / 1.4, 0, 1));
      K2.veDan(g1.than, w); K2.veDan(g2.than, w);
      op(g1.dau, ez((w - .88) / .1)); op(g2.dau, ez((w - .88) / .1));
      /* từ 1,9 s: lấy hiệu → nước phồng về CẢ HAI phía */
      const b = ezo(cl((c.t - 1.9) / 2.8, 0, 1));
      set(bong, { rx: (R * (1 + .32 * b)).toFixed(1), ry: (R * (1 - .10 * b)).toFixed(1) });
      op(bong, (ez(c.t / .8) * (.46 + .1 * Math.sin(c.t * .9))).toFixed(3));
      const mo = 1 - .6 * ezo(cl((c.t - 2.8) / 1.4, 0, 1));
      op(g1.g, mo.toFixed(3)); op(g2.g, mo.toFixed(3));
      /* hai đỉnh triều chạy ngang mặt biển, cao dần theo phép trừ */
      set(s1, { transform: "translate(" + (-((c.t * 26) % 230)).toFixed(1) + " " +
        (12 - 26 * b).toFixed(1) + ")" });
      set(s2, { transform: "translate(" + (-((c.t * 40) % 170)).toFixed(1) + " " +
        (8 - 18 * b).toFixed(1) + ")" });
      op(bien, (.9 * ez(c.t / .6)).toFixed(3));
    };
  }
});

/* ---- k2c14 · ba "kiểu xa" — ba ô còn trống (1,9 s) ---- */
DANGKY({
  id: "k2c14", steps: 0, say: [S[13]],
  html: K2.nen("#0C1828", "#05080F") + K2.troi(.1) + K2.ve(.8) + K2.toi(".9"),
  anim: root => {
    const T = root.querySelector("svg.troi"); T.innerHTML = ""; sao(T, 110);
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    const o = [];
    for (let i = 0; i < 3; i++) {
      const g = el("g", {}, V), x = 150 + i * 340;
      el("rect", { x: x, y: 236, width: 300, height: 248, rx: 4, fill: "#0D1A2C",
        stroke: "#3A6484", "stroke-width": 2.6, opacity: .98 }, g);
      el("circle", { cx: x + 42, cy: 360, r: 13, fill: TR }, g);
      const tia = [];
      for (let k = 0; k < 4; k++)
        tia.push(el("path", { d: "M" + (x + 52) + ",360 L" + (x + 286) + "," +
          (300 + k * 40), stroke: TR, "stroke-width": 2.4, fill: "none", opacity: .75 }, g));
      o.push({ g: g, tia: tia });
    }
    return c => {
      const u = ez(c.u);
      cam(root, { t: c.t, x: lerp(-16, 14, u), z: lerp(1.03, 1.12, u) });
      o.forEach((k, i) => {
        op(k.g, ez((c.t - .2 - i * .34) / .35).toFixed(3));
        k.tia.forEach((p, j) => K2.veDan(p, ezo((c.t - .45 - i * .34 - j * .07) / .6)));
      });
    };
  }
});

/* ---- k2c15 · xa gấp đôi → trải ra 4 ô (chia hai lần) (1,9 s) ---- */
/* ---- k2c16 · y hệt, nhưng là ánh sáng — nhịp lặp hình cố ý (1,9 s) ---- */
[["k2c15", 14, TR, "#5AA8CC"], ["k2c16", 15, NH, "#F2C14E"]].forEach(q => {
DANGKY({
  id: q[0], steps: 0, say: [S[q[1]]],
  html: K2.nen("#0C1828", "#05080F") + K2.ve(.8) + K2.toi(".9"),
  anim: root => {
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    const X0 = 120, Y0 = 360, X1 = 500, X2 = 912, A = 92;
    gradR(V, q[0] + "-s", X0, Y0, 120, [[0, q[2], 1], [.4, q[2], .5], [1, q[2], 0]]);
    const ng = el("circle", { cx: X0, cy: Y0, r: 120, fill: "url(#" + q[0] + "-s)" }, V);
    ng.style.mixBlendMode = "screen";
    el("circle", { cx: X0, cy: Y0, r: 13, fill: q[2] }, V);
    const non = [], xa = [], ria = [];
    /* 1 ô ở khoảng cách d */
    non.push(el("rect", { x: X1, y: Y0 - A / 2, width: A, height: A, rx: 3,
      fill: q[3], stroke: q[2], "stroke-width": 2.4, opacity: 0 }, V));
    /* 4 ô ở khoảng cách 2d — tách khe 8 px để ĐẾM ĐƯỢC là bốn, mỗi ô nhạt đi 4 lần */
    for (let i = 0; i < 2; i++) for (let j = 0; j < 2; j++)
      xa.push(el("rect", { x: X2 + i * (A + 8), y: Y0 - A - 4 + j * (A + 8),
        width: A, height: A, rx: 3, fill: q[3], stroke: q[2], "stroke-width": 2,
        opacity: 0 }, V));
    ria.push(el("path", { d: "M" + X0 + "," + Y0 + " L" + (X2 + 2 * A + 8) + "," + (Y0 - A - 4),
      stroke: q[2], "stroke-width": 2, fill: "none", opacity: .45 }, V));
    ria.push(el("path", { d: "M" + X0 + "," + Y0 + " L" + (X2 + 2 * A + 8) + "," + (Y0 + A + 4),
      stroke: q[2], "stroke-width": 2, fill: "none", opacity: .45 }, V));
    return c => {
      const u = ez(c.u);
      cam(root, { t: c.t, x: lerp(-18, 16, u), z: lerp(1.02, 1.10, u) });
      op(ng, (.55 + .35 * Math.sin(c.t * 2.1)).toFixed(3));
      ria.forEach(p => K2.veDan(p, ezo(c.t / .8)));
      op(non[0], (.95 * ez((c.t - .35) / .35)).toFixed(3));
      xa.forEach((e, i) => op(e, (.34 * ez((c.t - .95 - i * .11) / .3)).toFixed(3)));
    };
  }
});
});

/* ---- k2c17 · xa kiểu thuỷ triều: chia BA lần — 1 khối thành 8 (4,1 s) ---- */
DANGKY({
  id: "k2c17", steps: 0, say: [S[16]],
  html: K2.nen("#0C1828", "#05080F") + K2.ve(.8) + K2.toi(".9"),
  anim: root => {
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    const A = 54, B = 62, OX = 640, OY = 470;
    const P = (i, j, k) => [OX + (i - j) * A, OY + (i + j) * A * .5 - k * B];
    const khoi = (g, i, j, k, mau, mo) => {
      const p = [P(i, j, k + 1), P(i + 1, j, k + 1), P(i + 1, j + 1, k + 1), P(i, j + 1, k + 1),
                 P(i + 1, j, k), P(i + 1, j + 1, k), P(i, j + 1, k)];
      const dd = a => "M" + a.map(q => q[0].toFixed(1) + "," + q[1].toFixed(1)).join("L") + "Z";
      const h = el("g", {}, g);
      el("path", { d: dd([p[0], p[1], p[2], p[3]]), fill: mau, opacity: (mo * .95).toFixed(2) }, h);
      el("path", { d: dd([p[1], p[4], p[5], p[2]]), fill: mau, opacity: (mo * .6).toFixed(2) }, h);
      el("path", { d: dd([p[3], p[2], p[5], p[6]]), fill: mau, opacity: (mo * .38).toFixed(2) }, h);
      el("path", { d: dd([p[0], p[1], p[2], p[3]]) + dd([p[1], p[4], p[5], p[2]]) +
        dd([p[3], p[2], p[5], p[6]]), fill: "none", stroke: "#061018", "stroke-width": 1.6 }, h);
      return h;
    };
    const mot = khoi(V, 0, 0, 0, TR, 1);
    const tam = [], g8 = el("g", {}, V);
    for (let i = 0; i < 2; i++) for (let j = 0; j < 2; j++) for (let k = 0; k < 2; k++)
      tam.push(khoi(g8, i - .5, j - .5, k - .5, "#7E95A6", 1));
    return c => {
      const u = ez(c.u);
      cam(root, { t: c.t, x: lerp(-22, 18, u), y: lerp(10, -10, u), z: lerp(1.04, 1.14, u) });
      const v = ezo(cl((c.t - 1.3) / 2.0, 0, 1));
      op(mot, (ez(c.t / .5) * (1 - v)).toFixed(3));
      set(mot, { transform: "translate(0 " + (-12 * Math.sin(c.t * .9)).toFixed(1) + ")" });
      op(g8, v.toFixed(3));
      set(g8, { transform: "translate(0 " + (-12 * Math.sin(c.t * .9)).toFixed(1) +
        ") scale(" + lerp(.62, 1, v).toFixed(3) + ") translate(" +
        (OX * (1 / lerp(.62, 1, v) - 1)).toFixed(1) + " " +
        (OY * (1 / lerp(.62, 1, v) - 1)).toFixed(1) + ")" });
      tam.forEach((e, i) => op(e, (ez((c.t - 1.4 - i * .18) / .3)).toFixed(3)));
    };
  }
});

/* ═══════════════════════════════════════════════════════════════════
   k2c18 · CẢNH LÕI CỦA CẢ KHỐI — PHÉP CHIA LÀM TRƯỚC MẮT NGƯỜI XEM
   10,1 s. Người xem bấm máy tính kiểm được từng bước:
     390 × 390 × 390 = 59.319.000      (lực triều chia theo LẬP PHƯƠNG)
     27.000.000 ÷ 59.319.000 = 0,45    (khớp con số 46 % của NOAA)
   Hình phải cho thấy PHÉP CHIA DIỄN RA, không chỉ hiện kết quả:
     · thước 390 vạch mọc dần  → con số 390 là cái đo được, không phải lời nói
     · khối lập phương dựng theo BA trục → "chia ba lần" thành hình khối
     · phân số thật (tử trên, mẫu dưới, gạch ngang) + hai thanh so chiều dài
   CHỮ BIÊN TẬP 3/4: 0 TỪ — chỉ chữ số và dấu × ÷ =.
   ═══════════════════════════════════════════════════════════════════ */
DANGKY({
  id: "k2c18", steps: 0, say: [S[17]],
  html: K2.nen("#0B1526", "#05080F") + K2.troi(.08) + K2.ve(.7) + K2.toi(".92") +
    '<div class="hud">' +
    '<div class="tx" id="k2c18-ct" style="left:0;top:196px;width:1280px;text-align:center">' +
      '<div id="k2c18-l1" style="white-space:nowrap;transform-origin:50% 50%">' +
        '<span class="so" id="k2c18-a" style="font:800 68px/1.1 system-ui;color:' + TR + '">0</span>' +
        '<span class="so" id="k2c18-b" style="font:800 68px/1.1 system-ui;color:' + C2 + '"> × 390 × 390</span>' +
        '<span class="so" id="k2c18-c" style="font:800 68px/1.1 system-ui;color:' + C2 + '"> = </span>' +
        '<span class="so" id="k2c18-d" style="font:800 68px/1.1 system-ui;color:' + TR + '">0</span>' +
      '</div>' +
      '<div id="k2c18-l2" style="margin-top:26px;display:flex;align-items:center;' +
           'justify-content:center;gap:28px">' +
        '<div style="text-align:center">' +
          '<div class="so" style="font:800 52px/1.08 system-ui;color:' + NH + '">27.000.000</div>' +
          '<div style="height:4px;background:' + C2 + ';margin:9px 0;border-radius:2px"></div>' +
          '<div class="so" style="font:800 52px/1.08 system-ui;color:' + TR + '">59.319.000</div>' +
        '</div>' +
        '<div class="so" style="font:800 58px/1 system-ui;color:' + C2 + '">=</div>' +
        '<div class="so" id="k2c18-g" style="font:800 96px/1 system-ui;color:' + TR + '">0,000</div>' +
      '</div>' +
    '</div>' +
    K2.nguon("k2c18-ng", "Lực triều ∝ 1/d³ · NOAA: Mặt Trời ≈ 46 % Mặt Trăng") + '</div>',
  anim: root => {
    const T = root.querySelector("svg.troi"); T.innerHTML = ""; sao(T, 130);
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    /* ---- (1) thước 390 vạch: Mặt Trăng ở vạch 1, Mặt Trời ở vạch 390 ---- */
    const gth = el("g", {}, V);
    const cp = el("clipPath", { id: "k2c18-cp" }, defsOf(V));
    const cpr = el("rect", { x: 96, y: 86, width: 0, height: 90 }, cp);
    el("path", { d: "M110,132 L1216,132", stroke: "#3A6484", "stroke-width": 2.4 }, gth);
    const gv = el("g", { "clip-path": "url(#k2c18-cp)" }, gth);
    let dv = "";
    for (let i = 0; i < 390; i++) {
      const x = (112 + i * 2.84).toFixed(2);
      dv += "M" + x + ",124 L" + x + ",140 ";
    }
    el("path", { d: dv, stroke: TR, "stroke-width": 1.9, opacity: .95 }, gv);
    K2.trang(gth, "k2c18", 112, 132, 13);
    const mt = K2.mtroi(gth, "k2c18", 1216, 132, 20);
    /* ---- (2) khối lập phương: ba cạnh, ba lần chia ---- */
    const gk = el("g", {}, V);
    const A = 80, Bq = 94, OX = 640, OY = 640;
    const P = (i, j, k) => [OX + (i - j) * A, OY + (i + j) * A * .5 - k * Bq];
    const L = (p, q, mau, w) => el("path", { d: "M" + p[0].toFixed(1) + "," + p[1].toFixed(1) +
      " L" + q[0].toFixed(1) + "," + q[1].toFixed(1), stroke: mau, fill: "none",
      "stroke-width": w || 5, "stroke-linecap": "round" }, gk);
    const truc = [L(P(0,0,0), P(1,0,0), TR, 8), L(P(0,0,0), P(0,1,0), TR, 8),
                  L(P(0,0,0), P(0,0,1), TR, 8)];
    const con = [
      L(P(1,0,0), P(1,1,0), C2), L(P(0,1,0), P(1,1,0), C2),
      L(P(0,0,1), P(1,0,1), C2), L(P(0,0,1), P(0,1,1), C2),
      L(P(1,0,1), P(1,1,1), C2), L(P(0,1,1), P(1,1,1), C2),
      L(P(1,0,0), P(1,0,1), C2), L(P(0,1,0), P(0,1,1), C2), L(P(1,1,0), P(1,1,1), C2)];
    /* ---- (3) hai thanh: tử 27 triệu (Mặt Trời) trên nền mẫu 59,319 triệu ---- */
    const gb = el("g", {}, V);
    const BX = 236, BW = 810;
    el("rect", { x: BX, y: 530, width: BW, height: 30, rx: 4, fill: "#16283A" }, gb);
    const b1 = el("rect", { x: BX, y: 530, width: 0, height: 30, rx: 4, fill: NH }, gb);
    el("rect", { x: BX, y: 584, width: BW, height: 30, rx: 4, fill: "#16283A" }, gb);
    const b2 = el("rect", { x: BX, y: 584, width: 0, height: 30, rx: 4, fill: TR }, gb);
    const moc = el("path", { d: "M" + (BX + BW * .455).toFixed(1) + ",518 L" +
      (BX + BW * .455).toFixed(1) + ",628", stroke: DO, "stroke-width": 2.6,
      "stroke-dasharray": "7 6", fill: "none", opacity: 0 }, gb);
    const l1 = root.querySelector("#k2c18-l1"), l2 = root.querySelector("#k2c18-l2");
    /* ba vế sau tuy opacity 0 vẫn chiếm chỗ, nên "390" đứng một mình bị lệch
       trái. Đo bề rộng phần còn ẩn rồi bù lại — đo MỘT LẦN, lúc dựng cảnh. */
    const an = ["k2c18-b", "k2c18-c", "k2c18-d"].reduce((t, k) => {
      const e = root.querySelector("#" + k);
      return t + (e ? e.getBoundingClientRect().width : 0); }, 0);
    return c => {
      const u = ez(c.u);
      cam(root, { t: c.t, x: lerp(-14, 12, u), y: lerp(6, -6, u), z: lerp(1.02, 1.09, u) });
      op(mt.__hao, (.6 + .28 * Math.sin(c.t * 1.3)).toFixed(3));
      /* --- giai đoạn 1: đếm 390, thước mọc --- */
      const p1 = ezo(cl((c.t - .25) / 2.0, 0, 1));
      set(cpr, { width: (1130 * p1).toFixed(1) });
      txt("k2c18-a", soVN(390 * p1));
      op(gth, (ez(c.t / .4) * (1 - .62 * ezo(cl((c.t - 5.4) / 1.0, 0, 1)))).toFixed(3));
      /* --- giai đoạn 2: ba trục → khối, rồi 390³ --- */
      op(root.querySelector("#k2c18-b"), ez((c.t - 2.5) / .45).toFixed(3));
      op(root.querySelector("#k2c18-c"), ez((c.t - 3.3) / .35).toFixed(3));
      const p2 = ezo(cl((c.t - 3.4) / 1.9, 0, 1));
      txt("k2c18-d", soVN(59319000 * p2));
      op(root.querySelector("#k2c18-d"), ez((c.t - 3.35) / .3).toFixed(3));
      truc.forEach((p, i) => K2.veDan(p, ezo((c.t - 2.45 - i * .36) / .4)));
      con.forEach((p, i) => K2.veDan(p, ezo((c.t - 3.6 - i * .055) / .45)));
      op(gk, (ez((c.t - 2.4) / .35) * (1 - ezo(cl((c.t - 5.3) / .8, 0, 1)))).toFixed(3));
      set(gk, { transform: "translate(0 " + (-9 * Math.sin(c.t * .8)).toFixed(1) + ")" });
      /* --- giai đoạn 3: phép chia thật --- */
      const v2 = ez((c.t - 5.6) / .5);
      l2.style.opacity = v2;
      l1.style.opacity = (1 - .58 * ez((c.t - 5.6) / .7)).toFixed(3);
      l1.style.transform = "translateX(" + (an / 2 * (1 - ez((c.t - 2.2) / .7))).toFixed(1) +
        "px) scale(" + lerp(1.74, .92, ez(cl((c.t - 2.3) / 2.6, 0, 1))).toFixed(3) + ")";
      const p3 = ezo(cl((c.t - 5.9) / 1.8, 0, 1));
      txt("k2c18-g", (0.45516 * p3).toFixed(3).replace(".", ","));
      op(gb, v2.toFixed(3));
      set(b1, { width: (BW * .455 * p3).toFixed(1) });
      set(b2, { width: (BW * p3).toFixed(1) });
      op(moc, (ez((c.t - 7.6) / .5) * (.5 + .4 * Math.sin(c.t * 2.4))).toFixed(3));
      kh("k2c18-ct", c.t, .25, 1e9);
      kh("k2c18-ng", c.t, 8.1, 1e9);
    };
  }
});

/* ---- k2c19 · CÚ GIẬT 1,3 s: cắt thẳng sang Mặt Trăng ---- */
DANGKY({
  id: "k2c19", steps: 0, say: [S[18]],
  html: K2.anh("k2-mattrang.jpg", .5,
          "contrast(1.16) saturate(.3) brightness(.6)", "50% 50%") + K2.toi(".82"),
  anim: root => c => {
    cam(root, { t: c.t, x: lerp(-10, 8, ezo(c.u)), z: lerp(1.42, 1.24, ezo(c.u)) });
  }
});

/* ---- k2c20 · không phải vì to, mà vì ngồi gần: Mặt Trời lùi ra mép (4,3 s) ---- */
DANGKY({
  id: "k2c20", steps: 0, say: [S[19]],
  html: K2.nen("#0B1526", "#05080F") + K2.troi(.08) + K2.ve(.76) + K2.toi(".9"),
  anim: root => {
    const T = root.querySelector("svg.troi"); T.innerHTML = ""; sao(T, 150);
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    const dat = K2.cau(V, "k2c20", 330, 380, 88);
    const gtr = el("g", {}, V); K2.trang(gtr, "k2c20", 0, 0, 30);
    const gmt = el("g", {}, V); const mt = K2.mtroi(gmt, "k2c20", 0, 0, 120);
    const noi = el("path", { d: "M418,380 L556,380", stroke: TR, "stroke-width": 2.4,
      "stroke-dasharray": "9 7", fill: "none", opacity: .75 }, V);
    return c => {
      const u = ez(c.u);
      cam(root, { t: c.t, x: lerp(22, -18, u), y: lerp(-6, 6, u), z: lerp(1.05, 1.15, u) });
      K2.xoay(dat, c.t * 16);
      set(gtr, { transform: "translate(586 " + (380 + 7 * Math.sin(c.t * .7)).toFixed(1) + ")" });
      /* Mặt Trời: to gấp bội nhưng bị đẩy ra xa — vừa lùi vừa teo lại trong mắt ta */
      const v = ezo(cl((c.t - .4) / 3.0, 0, 1));
      const s = lerp(1.0, .42, v);
      set(gmt, { transform: "translate(" + lerp(820, 1192, v).toFixed(1) + " " +
        (380 + 9 * Math.cos(c.t * .6)).toFixed(1) + ") scale(" + s.toFixed(3) + ")" });
      op(mt.__hao, (.5 + .3 * Math.sin(c.t * 1.4)).toFixed(3));
      K2.veDan(noi, ezo((c.t - .3) / .7));
    };
  }
});

/* ═══════════════════════════════════════════════════════════════════
   ĐOẠN 26–28 — CÁI TRỤC: Laskar 1993 và phản biện Lissauer 2012
   Luật tự đặt cho cụm này: con số nào CÓ NGƯỜI ĐO thì vẽ bằng nét LIỀN;
   con số nào còn tranh cãi thì vẽ bằng nét ĐỨT và để hai dải cạnh nhau,
   không bên nào được vẽ chắc nịch hơn bên nào.
   ═══════════════════════════════════════════════════════════════════ */

/* điểm trên vành quạt, góc đo từ phương thẳng đứng, nghiêng sang phải */
K2.dq = (cx, cy, R, a) => [cx + R * Math.sin(a * Math.PI / 180),
                           cy - R * Math.cos(a * Math.PI / 180)];
/* nan quạt từ a0 tới a1 */
K2.quat = function (p, cx, cy, R, a0, a1, mau, mo, net) {
  const A = K2.dq(cx, cy, R, a0), Bq = K2.dq(cx, cy, R, a1);
  const e = el("path", { d: "M" + cx + "," + cy + " L" + A[0].toFixed(1) + "," + A[1].toFixed(1) +
    " A" + R + "," + R + " 0 " + ((a1 - a0) > 180 ? 1 : 0) + ",1 " +
    Bq[0].toFixed(1) + "," + Bq[1].toFixed(1) + " Z",
    fill: mau, opacity: mo === undefined ? .2 : mo,
    stroke: mau, "stroke-width": 2.2 }, p);
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
/* trục quay vẽ xuyên qua tâm, dài hơn quả cầu một chút */
K2.truc = (p, cx, cy, L, mau) => el("path", { d: "M" + cx + "," + (cy - L) +
  " L" + cx + "," + (cy + L), stroke: mau, "stroke-width": 3.4, fill: "none",
  "stroke-linecap": "round" }, p);
K2.chuNho = (p, x, y, s, mau) => { const e = el("text", { x: x, y: y, fill: mau || C2,
  "font-family": "system-ui", "font-size": 17, "font-weight": 700,
  "letter-spacing": ".04em", "text-anchor": "middle" }, p); e.textContent = s; return e; };

/* ---- k2c21 · vịnh Fundy lúc nước ròng: thuyền nằm trên bùn (2,4 s) ---- */
DANGKY({
  id: "k2c21", steps: 0, say: [S[20]],
  html: K2.anh("k2-trieu-can.jpg", .4,
          "contrast(1.14) saturate(.56) brightness(.44)", "50% 62%") + K2.toi(".9") +
        '<div class="hud">' + K2.nguon("k2c21-ng", "Alma, vịnh Fundy, lúc nước ròng · D. Kereluk · CC BY 2.0") + '</div>',
  anim: root => c => {
    const u = ez(c.u);
    cam(root, { t: c.t, x: lerp(28, -24, u), y: lerp(-6, 8, u), z: lerp(1.12, 1.26, u) });
    kh("k2c21-ng", c.t, .3, 2.1);
  }
});

/* ---- k2c22 · trục nghiêng 23,4° — cái nghiêng làm ra bốn mùa (5,3 s) ---- */
DANGKY({
  id: "k2c22", steps: 0, say: [S[21]],
  html: K2.nen("#0B1526", "#05080F") + K2.troi(.08) + K2.ve(.76) + K2.toi(".9"),
  anim: root => {
    const T = root.querySelector("svg.troi"); T.innerHTML = ""; sao(T, 140);
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    const CX = 720, CY = 372, R = 150;
    const mt = K2.mtroi(V, "k2c22", 128, 372, 86);
    /* phương thẳng đứng để so — nét đứt mờ */
    const doc = el("path", { d: "M" + CX + "," + (CY - R - 76) + " L" + CX + "," + (CY + R + 76),
      stroke: C2, "stroke-width": 2, "stroke-dasharray": "8 8", fill: "none", opacity: .45 }, V);
    const cung = el("path", { d: "", stroke: TR, "stroke-width": 3, fill: "none" }, V);
    const gE = el("g", {}, V);
    const dat = K2.cau(gE, "k2c22", CX, CY, R);
    K2.truc(gE, CX, CY, R + 68, TR);
    const nhan = K2.chuNho(V, CX + 78, CY - R - 44, "23,4°", TR);
    return c => {
      const u = ez(c.u);
      cam(root, { t: c.t, x: lerp(-22, 18, u), y: lerp(8, -8, u), z: lerp(1.03, 1.12, u) });
      K2.xoay(dat, c.t * 26);
      const a = 23.4;
      set(gE, { transform: "rotate(" + a + " " + CX + " " + CY + ")" });
      const A = K2.dq(CX, CY, R + 56, 0), Bq = K2.dq(CX, CY, R + 56, a);
      set(cung, { d: "M" + A[0].toFixed(1) + "," + A[1].toFixed(1) + " A" + (R + 56) + "," +
        (R + 56) + " 0 0,1 " + Bq[0].toFixed(1) + "," + Bq[1].toFixed(1) });
      K2.veDan(cung, ezo((c.t - .7) / .8));
      K2.veDan(doc, ezo(c.t / .6));
      op(nhan, ez((c.t - 1.5) / .5).toFixed(3));
      op(mt.__hao, (.55 + .3 * Math.sin(c.t * 1.1)).toFixed(3));
      /* bóng đêm quét chậm — bốn mùa là chuyện của ánh sáng chiếu lệch */
      set(dat.bong, { transform: "rotate(" + (6 * Math.sin(c.t * .5)).toFixed(2) +
        " " + CX + " " + CY + ")" });
    };
  }
});

/* ---- k2c23 · Laskar 1993: quạt 0–85° mở ra, trục lắc hỗn loạn (10,5 s) ---- */
DANGKY({
  id: "k2c23", steps: 0, say: [S[22]],
  html: K2.nen("#0B1526", "#05080F") + K2.troi(.08) + K2.ve(.76) + K2.toi(".92") +
        '<div class="hud">' + K2.nguon("k2c23-ng",
          "Laskar, Joutel & Robutel · Nature 361, 1993 · 0°–85°") + '</div>',
  anim: root => {
    const T = root.querySelector("svg.troi"); T.innerHTML = ""; sao(T, 150);
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    const CX = 640, CY = 436, R = 118, RQ = 290;
    const quat = K2.quat(V, CX, CY, RQ, 0, 85, "#C96A4E", .16);
    const vien = K2.quat(V, CX, CY, RQ, 0, 85, "#C96A4E", 1, "9 7");
    const vet = el("path", { d: "", stroke: "#E0705A", "stroke-width": 2,
      fill: "none", opacity: .55 }, V);
    const gE = el("g", {}, V);
    const dat = K2.cau(gE, "k2c23", CX, CY, R);
    K2.truc(gE, CX, CY, R + 184, TR);
    const t0 = K2.chuNho(V, CX - 16, CY - RQ - 16, "0°");
    const t85 = K2.dq(CX, CY, RQ + 26, 85);
    const t1 = K2.chuNho(V, t85[0], t85[1] + 6, "85°");
    return c => {
      const u = ez(c.u);
      cam(root, { t: c.t, x: lerp(-18, 16, u), y: lerp(10, -10, u), z: lerp(1.02, 1.10, u) });
      K2.xoay(dat, c.t * 20);
      const mo = ez((c.t - .6) / 1.1);
      op(quat, (.16 * mo).toFixed(3)); op(vien, mo.toFixed(3));
      op(t0, ez((c.t - 1.3) / .4).toFixed(3)); op(t1, ez((c.t - 1.6) / .4).toFixed(3));
      /* trục bắt đầu ở 23,4° rồi trượt vào vùng hỗn loạn 0–85° */
      const v = ezo(cl((c.t - 2.0) / 2.6, 0, 1));
      const a = lerp(23.4, K2.lac(c.t, 2, 83, 1), v);
      set(gE, { transform: "rotate(" + a.toFixed(2) + " " + CX + " " + CY + ")" });
      /* vệt mờ của những góc trục vừa đi qua — cho thấy nó không đứng yên */
      let d = "";
      for (let i = 0; i < 46; i++) {
        const tt = c.t - i * .13;
        if (tt < 2.0) break;
        const aa = lerp(23.4, K2.lac(tt, 2, 83, 1), ezo(cl((tt - 2.0) / 2.6, 0, 1)));
        const p = K2.dq(CX, CY, R + 160, aa);
        d += (i ? " L" : "M") + p[0].toFixed(1) + "," + p[1].toFixed(1);
      }
      set(vet, { d: d || "M0,0" });
      op(vet, (.5 * ez((c.t - 2.6) / .8)).toFixed(3));
      kh("k2c23-ng", c.t, 1.1, 5.0);
    };
  }
});

/* ---- k2c24 · nghiêng 85°: một nửa hành tinh úp hẳn vào bóng tối (5,6 s) ---- */
DANGKY({
  id: "k2c24", steps: 0, say: [S[23]],
  html: K2.nen("#0B1526", "#05080F") + K2.troi(.08) + K2.ve(.76) + K2.toi(".92"),
  anim: root => {
    const T = root.querySelector("svg.troi"); T.innerHTML = ""; sao(T, 140);
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    const CX = 756, CY = 376, R = 184;
    const mt = K2.mtroi(V, "k2c24", 106, 376, 76);
    const tia = [];
    for (let i = 0; i < 7; i++)
      tia.push(el("path", { d: "M186," + (300 + i * 26) + " L" + (CX - R - 10) + "," +
        (280 + i * 32), stroke: NH, "stroke-width": 2, fill: "none", opacity: .35 }, V));
    const gE = el("g", {}, V);
    const dat = K2.cau(gE, "k2c24", CX, CY, R);
    K2.truc(gE, CX, CY, R + 76, TR);
    /* chỏm cực: cái bị quay hẳn mặt về Mặt Trời rồi úp hẳn vào tối */
    const chom = el("circle", { cx: CX, cy: CY - R * .82, r: R * .34, fill: "#EAF4FA",
      opacity: .3 }, gE);
    return c => {
      const u = ez(c.u);
      cam(root, { t: c.t, x: lerp(20, -18, u), y: lerp(-8, 8, u), z: lerp(1.04, 1.14, u) });
      K2.xoay(dat, c.t * 14);
      const a = lerp(23.4, 85, ezo(cl((c.t - .3) / 2.2, 0, 1)));
      set(gE, { transform: "rotate(" + a.toFixed(2) + " " + CX + " " + CY + ")" });
      tia.forEach((p, i) => K2.veDan(p, ezo((c.t - .2 - i * .06) / .7)));
      /* nửa sau cảnh: cả bán cầu lật vào bóng — bóng đêm nuốt dần quả cầu */
      const t2 = ezo(cl((c.t - 3.0) / 2.4, 0, 1));
      set(dat.bong, { transform: "rotate(" + (-62 + 150 * t2).toFixed(1) + " " + CX + " " + CY + ")" });
      op(chom, (.3 + .34 * (1 - t2)).toFixed(3));
      tia.forEach(p => op(p, (.35 * (1 - t2 * .8)).toFixed(3)));
    };
  }
});

/* ---- k2c25 · mùa màng mất nghĩa: ruộng rút hết màu (2,5 s) ---- */
DANGKY({
  id: "k2c25", steps: 0, say: [S[24]],
  html: K2.anh("k2-ruong-mekong.jpg", .42,
          "contrast(1.1) saturate(.7) brightness(.44)", "54% 48%") + K2.toi(".92"),
  anim: root => {
    const im = root.querySelector("img");
    return c => {
      const u = ez(c.u);
      cam(root, { t: c.t, x: lerp(-20, 18, u), z: lerp(1.08, 1.22, u) });
      const v = ezo(cl(c.t / 2.2, 0, 1));
      if (im) im.style.filter = "contrast(" + (1.1 + .12 * v).toFixed(2) +
        ") saturate(" + (.7 * (1 - v)).toFixed(3) + ") brightness(" + (.44 - .14 * v).toFixed(3) + ")";
    };
  }
});

/* ---- k2c26 · con số 0–85° bị ép lại từ hai đầu (3,7 s) ---- */
DANGKY({
  id: "k2c26", steps: 0, say: [S[25]],
  html: K2.nen("#0B1526", "#05080F") + K2.troi(.08) + K2.ve(.76) + K2.toi(".92"),
  anim: root => {
    const T = root.querySelector("svg.troi"); T.innerHTML = ""; sao(T, 130);
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    const CX = 640, CY = 436, R = 104, RQ = 286;
    const quat = K2.quat(V, CX, CY, RQ, 0, 85, "#C96A4E", .16);
    const vien = K2.quat(V, CX, CY, RQ, 0, 85, "#C96A4E", 1, "9 7");
    const ep = [];
    for (let i = 0; i < 2; i++) {
      const a = i ? 85 : 0;
      const p1 = K2.dq(CX, CY, RQ + 86, a), p2 = K2.dq(CX, CY, RQ + 22, a);
      ep.push(K2.ten(V, p1[0], p1[1], p2[0], p2[1], TR, 5));
    }
    const gE = el("g", {}, V);
    const dat = K2.cau(gE, "k2c26", CX, CY, R);
    K2.truc(gE, CX, CY, R + 176, TR);
    return c => {
      const u = ez(c.u);
      cam(root, { t: c.t, x: lerp(16, -14, u), y: lerp(-8, 8, u), z: lerp(1.03, 1.11, u) });
      K2.xoay(dat, c.t * 18);
      set(gE, { transform: "rotate(" + K2.lac(c.t + 7, 4, 80, 1).toFixed(2) +
        " " + CX + " " + CY + ")" });
      const v = ezo(cl((c.t - .5) / 1.6, 0, 1));
      op(quat, (.16 * (1 - .7 * v)).toFixed(3));
      op(vien, (1 - .62 * v).toFixed(3));
      ep.forEach((a, i) => {
        const w = ezo(cl((c.t - .4 - i * .22) / .9, 0, 1));
        K2.veDan(a.than, w); op(a.dau, ez((w - .86) / .12));
      });
    };
  }
});

/* ---- k2c27 · Lissauer 2012: dải hẹp hơn hẳn, 10–50° (12,3 s) ---- */
DANGKY({
  id: "k2c27", steps: 0, say: [S[26]],
  html: K2.nen("#0B1526", "#05080F") + K2.troi(.08) + K2.ve(.76) + K2.toi(".92") +
        '<div class="hud">' + K2.nguon("k2c27-ng",
          "Lissauer, Barnes & Chambers · Icarus 217, 2012 · 10°–50°") + '</div>',
  anim: root => {
    const T = root.querySelector("svg.troi"); T.innerHTML = ""; sao(T, 150);
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    const CX = 640, CY = 436, R = 112, RQ = 290;
    const cu = K2.quat(V, CX, CY, RQ, 0, 85, "#C96A4E", 1, "9 7");
    op(cu, .22);
    const moi = K2.quat(V, CX, CY, RQ, 10, 50, "#5FA8C8", .2);
    const vien = K2.quat(V, CX, CY, RQ, 10, 50, "#5FA8C8", 1, "9 7");
    const vet = el("path", { d: "", stroke: "#8FD0E8", "stroke-width": 2,
      fill: "none", opacity: .5 }, V);
    const gE = el("g", {}, V);
    const dat = K2.cau(gE, "k2c27", CX, CY, R);
    K2.truc(gE, CX, CY, R + 178, TR);
    const p10 = K2.dq(CX, CY, RQ + 26, 10), p50 = K2.dq(CX, CY, RQ + 28, 50);
    const n10 = K2.chuNho(V, p10[0], p10[1], "10°", "#8FD0E8");
    const n50 = K2.chuNho(V, p50[0], p50[1] + 6, "50°", "#8FD0E8");
    return c => {
      const u = ez(c.u);
      cam(root, { t: c.t, x: lerp(-20, 18, u), y: lerp(10, -10, u), z: lerp(1.02, 1.11, u) });
      K2.xoay(dat, c.t * 17);
      const mo = ez((c.t - 2.6) / 1.3);
      op(moi, (.2 * mo).toFixed(3)); op(vien, mo.toFixed(3));
      op(n10, ez((c.t - 3.6) / .5).toFixed(3)); op(n50, ez((c.t - 3.9) / .5).toFixed(3));
      /* trục: lắc rộng như Laskar, rồi co về dải hẹp của Lissauer */
      const v = ezo(cl((c.t - 3.2) / 3.4, 0, 1));
      const a = lerp(K2.lac(c.t, 3, 82, 1), K2.lac(c.t, 11, 49, .8), v);
      set(gE, { transform: "rotate(" + a.toFixed(2) + " " + CX + " " + CY + ")" });
      let d = "";
      for (let i = 0; i < 54; i++) {
        const tt = c.t - i * .15;
        if (tt < 0) break;
        const vv = ezo(cl((tt - 3.2) / 3.4, 0, 1));
        const aa = lerp(K2.lac(tt, 3, 82, 1), K2.lac(tt, 11, 49, .8), vv);
        const p = K2.dq(CX, CY, R + 150, aa);
        d += (i ? " L" : "M") + p[0].toFixed(1) + "," + p[1].toFixed(1);
      }
      set(vet, { d: d || "M0,0" });
      op(vet, (.5 * ez(c.t / 1.2)).toFixed(3));
      kh("k2c27-ng", c.t, 4.6, 8.4);
    };
  }
});

/* ---- k2c28 · ba dải lồng nhau: hôm nay · Lissauer · Laskar (4,8 s) ---- */
DANGKY({
  id: "k2c28", steps: 0, say: [S[27]],
  html: K2.nen("#0B1526", "#05080F") + K2.troi(.08) + K2.ve(.76) + K2.toi(".92"),
  anim: root => {
    const T = root.querySelector("svg.troi"); T.innerHTML = ""; sao(T, 140);
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    const CX = 640, CY = 452, R = 96;
    const q3 = K2.quat(V, CX, CY, 310, 0, 85, "#C96A4E", .14);
    const v3 = K2.quat(V, CX, CY, 310, 0, 85, "#C96A4E", 1, "9 7"); op(v3, .5);
    const q2 = K2.quat(V, CX, CY, 248, 10, 50, "#5FA8C8", .2);
    const v2 = K2.quat(V, CX, CY, 248, 10, 50, "#5FA8C8", 1, "9 7"); op(v2, .72);
    /* dải HÔM NAY: 22,1–24,5° — hẹp tới mức gần như một nét. Nét LIỀN: có người đo. */
    const q1 = K2.quat(V, CX, CY, 190, 22.1, 24.5, TR, .85);
    const gE = el("g", {}, V);
    const dat = K2.cau(gE, "k2c28", CX, CY, R);
    K2.truc(gE, CX, CY, R + 92, TR);
    const pn = K2.dq(CX, CY, 212, 23.3);
    const nh = K2.chuNho(V, pn[0] + 44, pn[1] - 4, "23,4°", TR);
    return c => {
      const u = ez(c.u);
      cam(root, { t: c.t, x: lerp(-16, 14, u), y: lerp(8, -8, u), z: lerp(1.03, 1.12, u) });
      K2.xoay(dat, c.t * 19);
      set(gE, { transform: "rotate(" + (23.3 + .9 * Math.sin(c.t * .8)).toFixed(2) +
        " " + CX + " " + CY + ")" });
      const f = (e, a, k) => op(e, (k * ez((c.t - a) / .5)).toFixed(3));
      f(q3, .2, .14); f(v3, .2, .5); f(q2, .9, .2); f(v2, .9, .72);
      f(q1, 1.6, .85); f(nh, 2.1, 1);
      /* dải hẹp nhất thở nhẹ để không khung nào đứng yên */
      set(q1, { transform: "rotate(" + (.8 * Math.sin(c.t * 1.3)).toFixed(2) +
        " " + CX + " " + CY + ")" });
    };
  }
});

/* ---- k2c29 · tranh luận chưa xong: hai dải, cả hai đều nét đứt (2,6 s) ---- */
DANGKY({
  id: "k2c29", steps: 0, say: [S[28]],
  html: K2.nen("#0B1526", "#05080F") + K2.troi(.08) + K2.ve(.78) + K2.toi(".92"),
  anim: root => {
    const T = root.querySelector("svg.troi"); T.innerHTML = ""; sao(T, 120);
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    const A = [340, 420], Bq = [940, 420];
    const q1 = K2.quat(V, A[0], A[1], 212, 0, 85, "#C96A4E", 1, "10 8");
    const q2 = K2.quat(V, Bq[0], Bq[1], 212, 10, 50, "#5FA8C8", 1, "10 8");
    const g1 = el("g", {}, V), g2 = el("g", {}, V);
    const d1 = K2.cau(g1, "k2c29a", A[0], A[1], 54);
    const d2 = K2.cau(g2, "k2c29b", Bq[0], Bq[1], 54);
    K2.truc(g1, A[0], A[1], 118, TR); K2.truc(g2, Bq[0], Bq[1], 118, TR);
    return c => {
      const u = ez(c.u);
      cam(root, { t: c.t, x: lerp(14, -12, u), z: lerp(1.03, 1.11, u) });
      K2.xoay(d1, c.t * 22); K2.xoay(d2, c.t * 22);
      set(g1, { transform: "rotate(" + K2.lac(c.t, 4, 80, 1.2).toFixed(2) +
        " " + A[0] + " " + A[1] + ")" });
      set(g2, { transform: "rotate(" + K2.lac(c.t + 3, 12, 48, 1.2).toFixed(2) +
        " " + Bq[0] + " " + Bq[1] + ")" });
      /* nét đứt CHẠY trên cả hai vành: không bên nào được vẽ chắc nịch hơn bên nào */
      [q1, q2].forEach((e, i) => {
        e.setAttribute("stroke-dashoffset", (-c.t * 26 * (i ? -1 : 1)).toFixed(1));
        op(e, ez((c.t - .15 - i * .18) / .4).toFixed(3));
      });
    };
  }
});

/* ═══════════════════════════════════════════════════════════════════
   ĐOẠN 29–30 — CÁI NGÀY: phanh triều, và con số 6–8 tiếng không nguồn
   ═══════════════════════════════════════════════════════════════════ */

/* ---- k2c30 · CÚ GIẬT 1,2 s: đường ngày–đêm thật, chụp từ ISS ---- */
DANGKY({
  id: "k2c30", steps: 0, say: [S[29]],
  html: K2.anh("k2-terminator.jpg", .5,
          "contrast(1.2) saturate(.72) brightness(.6)", "74% 58%") + K2.toi(".82"),
  anim: root => c => {
    cam(root, { t: c.t, x: lerp(14, -10, ezo(c.u)), z: lerp(1.40, 1.22, ezo(c.u)) });
  }
});

/* ---- k2c31 · cái phanh (1,3 s) ---- */
DANGKY({
  id: "k2c31", steps: 0, say: [S[30]],
  html: K2.nen("#0B1526", "#05080F") + K2.ve(.8) + K2.toi(".9"),
  anim: root => {
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    const CX = 540, CY = 372, R = 146;
    const dat = K2.cau(V, "k2c31", CX, CY, R);
    K2.trang(V, "k2c31", 1012, CY, 46);
    /* cung mũi tên quay, bị một nét hãm đỏ chặn lại */
    const cung = el("path", { d: "M" + (CX - 196) + "," + CY + " A196,196 0 0,1 " +
      CX + "," + (CY - 196), stroke: TR, "stroke-width": 6, fill: "none",
      "stroke-linecap": "round" }, V);
    const ham = el("path", { d: "M" + (CX + 128) + "," + (CY - 168) + " L" +
      (CX + 252) + "," + (CY - 96), stroke: DO, "stroke-width": 13,
      "stroke-linecap": "round", fill: "none" }, V);
    return c => {
      cam(root, { t: c.t, x: lerp(-10, 8, ez(c.u)), z: lerp(1.04, 1.12, ez(c.u)) });
      K2.xoay(dat, c.t * 46);
      K2.veDan(cung, ezo(c.t / .45));
      K2.veDan(ham, ezo((c.t - .4) / .3));
    };
  }
});

/* ═══════════════════════════════════════════════════════════════════
   k2c32 · CẢNH LÕI 2 — HAI CHUYỆN LÀ MỘT CHUYỆN (9,2 s)
   Chỗ Mặt Trăng kéo nước phồng lên = chỗ nó cọ vào Trái Đất.
   Trái Đất quay nhanh hơn Mặt Trăng chạy, nên chỏm nước bị mang VƯỢT
   lên TRƯỚC Mặt Trăng; chỏm đi trước ấy kéo Mặt Trăng tiến lên (→ bay
   ra xa) và Mặt Trăng kéo ngược chỏm lại (→ Trái Đất chậm đi).
   Một hình, hai hệ quả — không tách làm hai cảnh.
   ═══════════════════════════════════════════════════════════════════ */
DANGKY({
  id: "k2c32", steps: 0, say: [S[31]],
  html: K2.nen("#0B1526", "#05080F") + K2.troi(.08) + K2.ve(.74) + K2.toi(".92"),
  anim: root => {
    const T = root.querySelector("svg.troi"); T.innerHTML = ""; sao(T, 150);
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    const CX = 470, CY = 384, R = 126;
    const vet = el("path", { d: "", stroke: TR, "stroke-width": 1.8,
      "stroke-dasharray": "8 8", fill: "none", opacity: .35 }, V);
    gradR(V, "k2c32-n", CX, CY, R * 1.55,
      [[.70, "#5BB3D6", 0], [.87, "#5BB3D6", .62], [1, "#5BB3D6", 0]]);
    const gph = el("g", {}, V);
    const phong = el("ellipse", { cx: CX, cy: CY, rx: R * 1.3, ry: R * .94,
      fill: "url(#k2c32-n)" }, gph);
    phong.style.mixBlendMode = "screen";
    const dat = K2.cau(V, "k2c32", CX, CY, R);
    const gtr = el("g", {}, V); K2.trang(gtr, "k2c32", 0, 0, 36);
    /* mũi tên: chỏm kéo Mặt Trăng tiến lên (TR) · Mặt Trăng kéo chỏm lại (DO) */
    const a1 = K2.ten(V, 0, 0, 0, 0, TR, 5);
    const a2 = K2.ten(V, 0, 0, 0, 0, DO, 5);
    const gtv = el("g", {}, V);
    const tv = el("path", { d: "M" + (CX - 196) + "," + CY + " A196,196 0 0,1 " +
      (CX - 60) + "," + (CY - 186), stroke: TR, "stroke-width": 6, fill: "none",
      "stroke-linecap": "round" }, gtv);
    const GOC = t => -24 + t * 5.6;                     /* Mặt Trăng chạy chậm */
    const XA  = t => lerp(360, 548, ezo(cl((t - 1.2) / 6.4, 0, 1)));
    return c => {
      const u = ez(c.u);
      cam(root, { t: c.t, x: lerp(26, -24, u), y: lerp(8, -8, u), z: lerp(1.05, 1.16, u) });
      /* Trái Đất quay NHANH — và chậm dần đi trong chính cảnh này */
      const w = lerp(62, 34, ezo(cl((c.t - 2.4) / 5.6, 0, 1)));
      K2.xoay(dat, c.t * w);
      const g = GOC(c.t), d = XA(c.t);
      const rad = g * Math.PI / 180;
      const mx = CX + Math.cos(rad) * d, my = CY + Math.sin(rad) * d;
      set(gtr, { transform: "translate(" + mx.toFixed(1) + " " + my.toFixed(1) + ")" });
      /* chỏm nước bị mang VƯỢT lên trước Mặt Trăng một góc nhỏ */
      const dan = 24 * ezo(cl((c.t - .8) / 2.0, 0, 1));
      set(gph, { transform: "rotate(" + (g - dan).toFixed(2) + " " + CX + " " + CY + ")" });
      const b = ezo(cl((c.t - .4) / 2.0, 0, 1));
      set(phong, { rx: (R * (1 + .34 * b)).toFixed(1), ry: (R * (1 - .09 * b)).toFixed(1) });
      op(phong, (.42 + .12 * Math.sin(c.t * .9)).toFixed(3));
      /* a1: từ chỏm đi trước, đẩy Mặt Trăng tới trước trên quỹ đạo */
      const pa = (g - dan) * Math.PI / 180;
      const px = CX + Math.cos(pa) * R * 1.36, py = CY + Math.sin(pa) * R * 1.36;
      const q1 = [mx - Math.sin(rad) * 86, my + Math.cos(rad) * 86];
      set(a1.than, { d: "M" + px.toFixed(1) + "," + py.toFixed(1) + " L" +
        q1[0].toFixed(1) + "," + q1[1].toFixed(1) });
      set(a1.dau, { transform: "translate(" + q1[0].toFixed(1) + " " + q1[1].toFixed(1) +
        ") rotate(" + (Math.atan2(q1[1] - py, q1[0] - px) * 180 / Math.PI).toFixed(1) + ")" });
      const w1 = ezo(cl((c.t - 2.6) / 1.0, 0, 1));
      K2.veDan(a1.than, w1); op(a1.dau, ez((w1 - .86) / .12));
      /* a2: Mặt Trăng kéo NGƯỢC chỏm lại — đây chính là cái phanh */
      const q2 = [px - Math.sin(pa) * -96, py + Math.cos(pa) * -96];
      set(a2.than, { d: "M" + px.toFixed(1) + "," + py.toFixed(1) + " L" +
        q2[0].toFixed(1) + "," + q2[1].toFixed(1) });
      set(a2.dau, { transform: "translate(" + q2[0].toFixed(1) + " " + q2[1].toFixed(1) +
        ") rotate(" + (Math.atan2(q2[1] - py, q2[0] - px) * 180 / Math.PI).toFixed(1) + ")" });
      const w2 = ezo(cl((c.t - 3.4) / 1.0, 0, 1));
      K2.veDan(a2.than, w2); op(a2.dau, ez((w2 - .86) / .12));
      /* cung tốc độ quay NGẮN dần: Trái Đất đang bị hãm */
      K2.veDan(tv, lerp(1, .42, ezo(cl((c.t - 3.0) / 5.2, 0, 1))));
      op(gtv, ez((c.t - 2.0) / .6).toFixed(3));
      /* vệt xoắn ra xa của Mặt Trăng */
      let dd = "";
      for (let i = 0; i < 62; i++) {
        const tt = c.t - i * .14; if (tt < 0) break;
        const rr = GOC(tt) * Math.PI / 180, ddd = XA(tt);
        dd += (i ? " L" : "M") + (CX + Math.cos(rr) * ddd).toFixed(1) + "," +
              (CY + Math.sin(rr) * ddd).toFixed(1);
      }
      set(vet, { d: dd || "M0,0" });
      op(vet, (.38 * ez((c.t - 1.4) / .8)).toFixed(3));
    };
  }
});

/* ---- k2c33 · hai hệ quả gộp làm một: Trái Đất chậm + Mặt Trăng ra xa (1,5 s) ---- */
DANGKY({
  id: "k2c33", steps: 0, say: [S[32]],
  html: K2.nen("#0B1526", "#05080F") + K2.troi(.08) + K2.ve(.8) + K2.toi(".9"),
  anim: root => {
    const T = root.querySelector("svg.troi"); T.innerHTML = ""; sao(T, 110);
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    const dat = K2.cau(V, "k2c33", 230, 212, 72);
    /* cung tốc độ quay, ngắn lại = Trái Đất chậm đi */
    const cung = el("path", { d: "M138,212 A92,92 0 0,1 230,120", stroke: TR,
      "stroke-width": 5, fill: "none", "stroke-linecap": "round" }, V);
    const gtr = el("g", {}, V); K2.trang(gtr, "k2c33", 230, 530, 40);
    const a = K2.ten(V, 336, 240, 606, 338, C2, 6);
    const b = K2.ten(V, 336, 502, 606, 402, C2, 6);
    const h = K2.ten(V, 648, 370, 1130, 370, TR, 10);
    return c => {
      cam(root, { t: c.t, x: lerp(-12, 10, ez(c.u)), z: lerp(1.03, 1.11, ez(c.u)) });
      K2.xoay(dat, c.t * 40);
      K2.veDan(cung, lerp(1, .5, ezo(c.t / 1.2)));
      set(gtr, { transform: "translate(" + (26 * ezo(c.t / 1.3)).toFixed(1) + " 0)" });
      const w = ezo(c.t / .45);
      K2.veDan(a.than, w); K2.veDan(b.than, w);
      op(a.dau, ez((w - .86) / .12)); op(b.dau, ez((w - .86) / .12));
      const v = ezo((c.t - .42) / .55);
      K2.veDan(h.than, v); op(h.dau, ez((v - .86) / .12));
      op(h.g, ez((c.t - .38) / .3).toFixed(3));
    };
  }
});

/* ---- k2c34 · mặt đồng hồ 24 giờ co lại còn 5–6 giờ (5,2 s) ---- */
DANGKY({
  id: "k2c34", steps: 0, say: [S[33]],
  html: K2.nen("#0B1526", "#05080F") + K2.troi(.08) + K2.ve(.78) + K2.toi(".92"),
  anim: root => {
    const T = root.querySelector("svg.troi"); T.innerHTML = ""; sao(T, 120);
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    const CX = 640, CY = 372, R = 226;
    el("circle", { cx: CX, cy: CY, r: R, fill: "#0A1726", stroke: "#22405A",
      "stroke-width": 2.4 }, V);
    for (let i = 0; i < 24; i++) {
      const a = i * 15, p1 = K2.dq(CX, CY, R, a), p2 = K2.dq(CX, CY, R - (i % 6 ? 13 : 24), a);
      el("path", { d: "M" + p1[0].toFixed(1) + "," + p1[1].toFixed(1) + " L" +
        p2[0].toFixed(1) + "," + p2[1].toFixed(1), stroke: C2,
        "stroke-width": i % 6 ? 1.8 : 3, opacity: i % 6 ? .5 : .85 }, V);
    }
    const quat = el("path", { d: "", fill: TR, opacity: .34, stroke: TR, "stroke-width": 2.4 }, V);
    const kim = el("path", { d: "", stroke: TR, "stroke-width": 5,
      "stroke-linecap": "round", fill: "none" }, V);
    const dat = K2.cau(V, "k2c34", CX, CY, 78);
    for (let i = 0; i < 4; i++)
      K2.chuNho(V, K2.dq(CX, CY, R + 26, i * 90)[0], K2.dq(CX, CY, R + 26, i * 90)[1] + 6,
        ["24", "6", "12", "18"][i]);
    return c => {
      const u = ez(c.u);
      cam(root, { t: c.t, x: lerp(-18, 16, u), y: lerp(8, -8, u), z: lerp(1.03, 1.12, u) });
      K2.xoay(dat, c.t * 52);
      /* nan quạt thu từ 24 giờ (360°) xuống 5–6 giờ (75–90°), thở giữa 5 và 6 */
      const v = ezo(cl((c.t - .6) / 2.6, 0, 1));
      const gio = lerp(24, 5.5 + .5 * Math.sin(c.t * 1.2), v);
      const a1 = cl(gio * 15, 0, 359.4);
      const A = K2.dq(CX, CY, R - 30, 0), Bq = K2.dq(CX, CY, R - 30, a1 % 360);
      set(quat, { d: "M" + CX + "," + CY + " L" + A[0].toFixed(1) + "," + A[1].toFixed(1) +
        " A" + (R - 30) + "," + (R - 30) + " 0 " + (a1 > 180 ? 1 : 0) + ",1 " +
        Bq[0].toFixed(1) + "," + Bq[1].toFixed(1) + " Z" });
      op(quat, (.34 * ez((c.t - .4) / .5)).toFixed(3));
      const kp = K2.dq(CX, CY, R - 30, (c.t * 150) % 360);
      set(kim, { d: "M" + CX + "," + CY + " L" + kp[0].toFixed(1) + "," + kp[1].toFixed(1) });
      op(kim, (.8 * ez(c.t / .5)).toFixed(3));
    };
  }
});

/* ---- k2c35 · đồng hồ không có kim chốt: không ai biết nó dài bao nhiêu (3,2 s) ---- */
DANGKY({
  id: "k2c35", steps: 0, say: [S[34]],
  html: K2.nen("#0B1526", "#05080F") + K2.troi(.08) + K2.ve(.78) + K2.toi(".92"),
  anim: root => {
    const T = root.querySelector("svg.troi"); T.innerHTML = ""; sao(T, 120);
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    const CX = 640, CY = 372, R = 226;
    el("circle", { cx: CX, cy: CY, r: R, fill: "#0A1726", stroke: "#22405A",
      "stroke-width": 2.4, "stroke-dasharray": "12 9" }, V);
    for (let i = 0; i < 24; i++) {
      const p1 = K2.dq(CX, CY, R, i * 15), p2 = K2.dq(CX, CY, R - 13, i * 15);
      el("path", { d: "M" + p1[0].toFixed(1) + "," + p1[1].toFixed(1) + " L" +
        p2[0].toFixed(1) + "," + p2[1].toFixed(1), stroke: C2, "stroke-width": 1.6,
        opacity: .34 }, V);
    }
    const quat = el("path", { d: "", fill: TR, opacity: .14 }, V);
    const kim = el("path", { d: "", stroke: TR, "stroke-width": 5,
      "stroke-linecap": "round", fill: "none" }, V);
    const dat = K2.cau(V, "k2c35", CX, CY, 78);
    return c => {
      const u = ez(c.u);
      cam(root, { t: c.t, x: lerp(16, -14, u), y: lerp(-8, 8, u), z: lerp(1.03, 1.12, u) });
      K2.xoay(dat, c.t * 70);
      /* nan quạt KHÔNG chốt ở đâu cả — nó cứ trượt, vì không ai đo được */
      const gio = 11 + 8 * Math.sin(c.t * 1.05) + 3 * Math.sin(c.t * 2.3 + 1.2);
      const a1 = cl(gio * 15, 10, 359.4);
      const A = K2.dq(CX, CY, R - 30, 0), Bq = K2.dq(CX, CY, R - 30, a1);
      set(quat, { d: "M" + CX + "," + CY + " L" + A[0].toFixed(1) + "," + A[1].toFixed(1) +
        " A" + (R - 30) + "," + (R - 30) + " 0 " + (a1 > 180 ? 1 : 0) + ",1 " +
        Bq[0].toFixed(1) + "," + Bq[1].toFixed(1) + " Z" });
      op(quat, (.16 * ez(c.t / .5)).toFixed(3));
      const kp = K2.dq(CX, CY, R - 30, a1);
      set(kim, { d: "M" + CX + "," + CY + " L" + kp[0].toFixed(1) + "," + kp[1].toFixed(1) });
      op(kim, (.75 * ez(c.t / .5)).toFixed(3));
    };
  }
});

/* ═══════════════════════════════════════════════════════════════════
   k2c36 · CHỮ BIÊN TẬP 4/4 — «6–8», 0 TỪ. (8,2 s, 2 câu, 1 bước)
   Đây là chỗ lời dẫn TỰ KHAI. Hình phải đỡ được sự trung thực đó:
   con số 6–8 KHÔNG được vẽ như một sự thật. Nó hiện ra như tin đồn —
   mười bốn bản sao lệch nhau, mỗi bản treo trên một ô nguồn RỖNG
   nét đứt. Bước 2: từng bản tắt dần, ô nguồn vẫn rỗng tới lúc cuối.
   ═══════════════════════════════════════════════════════════════════ */
DANGKY({
  id: "k2c36", steps: 1, say: [S[35], S[36]],
  html: K2.nen("#0B1526", "#05080F") + K2.troi(.08) + K2.ve(.8) + K2.toi(".92"),
  anim: root => {
    const T = root.querySelector("svg.troi"); T.innerHTML = ""; sao(T, 130);
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    const dat = K2.cau(V, "k2c36", 640, 582, 76);
    const o = [];
    for (let i = 0; i < 14; i++) {
      const g = el("g", {}, V);
      const x = 170 + rn(i, 111) * 900, y = 112 + rn(i, 112) * 290;
      const s = .6 + rn(i, 113) * .95;
      const e = el("text", { x: 0, y: 0, fill: TR, "font-family": "system-ui",
        "font-size": 64, "font-weight": 800, "text-anchor": "middle",
        "letter-spacing": "-.02em" }, g);
      e.textContent = "6–8";
      /* ô nguồn RỖNG dưới mỗi bản sao — không bao giờ được điền */
      const ho = el("rect", { x: -74, y: 18, width: 148, height: 26, rx: 4, fill: "none",
        stroke: DO, "stroke-width": 2, "stroke-dasharray": "7 6" }, g);
      g.__x = x; g.__y = y; g.__s = s; g.__k = rn(i, 114); g.__e = e; g.__o = ho;
      o.push(g);
    }
    return c => {
      const u = ez(c.u);
      cam(root, { t: c.t, x: lerp(-16, 14, u), y: lerp(8, -8, u), z: lerp(1.02, 1.10, u) });
      K2.xoay(dat, c.t * 24);
      const s2 = c.since(1);
      o.forEach((g, i) => {
        const vao = ez((c.t - .2 - g.__k * 2.2) / .5);
        /* bước 2: tắt dần, bản nào tới sớm thì tắt sớm */
        const ra = s2 < 0 ? 0 : ezo(cl((s2 - .2 - g.__k * 2.6) / 1.0, 0, 1));
        op(g, (vao * (.62 + .36 * g.__k)).toFixed(3));
        op(g.__e, (1 - ra).toFixed(3));
        /* ô nguồn ở lại lâu hơn con số, và ở lại RỖNG — rồi mới tắt */
        op(g.__o, (.85 * (1 - ezo(cl((s2 - 3.6 - g.__k * .8) / 1.0, 0, 1)))).toFixed(3));
        set(g, { transform: "translate(" + (g.__x + 16 * Math.sin(c.t * .5 + i)).toFixed(1) +
          " " + (g.__y + 12 * Math.cos(c.t * .43 + i * 1.7) - ra * 16).toFixed(1) +
          ") scale(" + (g.__s * (1 - ra * .12)).toFixed(3) + ")" });
      });
    };
  }
});

/* ---- k2c37 · cái nói chắc được: quay nhanh hơn, gió mạnh hơn (7,2 s) ---- */
DANGKY({
  id: "k2c37", steps: 0, say: [S[37]],
  html: K2.nen("#0B1526", "#05080F") + K2.troi(.08) + K2.ve(.76) + K2.toi(".92"),
  anim: root => {
    const T = root.querySelector("svg.troi"); T.innerHTML = ""; sao(T, 140);
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    const CX = 640, CY = 376, R = 206;
    const dat = K2.cau(V, "k2c37", CX, CY, R);
    /* dải gió: cung đồng tâm trượt ngang, dài dần ra — gió mạnh lên */
    const gio = [], cp = el("clipPath", { id: "k2c37-cp" }, defsOf(V));
    el("circle", { cx: CX, cy: CY, r: R }, cp);
    const gg = el("g", { "clip-path": "url(#k2c37-cp)" }, V);
    for (let i = 0; i < 26; i++) {
      const y = CY - R + 16 + (i / 25) * (2 * R - 32);
      const e = el("path", { d: "M0," + y.toFixed(1) + " L0," + y.toFixed(1),
        stroke: "#CFE6F2", "stroke-width": (1.6 + rn(i, 121) * 2.2).toFixed(1),
        "stroke-linecap": "round", fill: "none", opacity: 0 }, gg);
      e.__y = y.toFixed(1); gio.push(e);
    }
    return c => {
      const u = ez(c.u);
      cam(root, { t: c.t, x: lerp(-20, 18, u), y: lerp(10, -10, u), z: lerp(1.03, 1.13, u) });
      /* vòng quay nhanh dần suốt cảnh — không bao giờ bão hoà */
      const w = lerp(34, 190, ezo(cl((c.t - .4) / 6.0, 0, 1)));
      K2.xoay(dat, c.t * w + c.t * c.t * 6);
      set(dat.bong, { transform: "rotate(" + (-c.t * w * .5).toFixed(1) +
        " " + CX + " " + CY + ")" });
      const m = ezo(cl((c.t - .6) / 5.4, 0, 1));
      gio.forEach((p, i) => {
        const L = 40 + m * (180 + rn(i, 122) * 180);
        const ph = ((c.t * (.26 + m * 1.5) * (1 + rn(i, 123)) + rn(i, 124)) % 1);
        const x0 = CX - R - 120 + ph * (2 * R + 240);
        set(p, { d: "M" + (x0 - L).toFixed(1) + "," + p.__y + " L" + x0.toFixed(1) + "," + p.__y });
        op(p, (Math.sin(ph * Math.PI) * (.2 + m * .55)).toFixed(3));
      });
    };
  }
});

/* ═══════════════════════════════════════════════════════════════════
   ĐOẠN 31–32 — RANH GIỚI: hết phần đo đạc, vào phần giả định
   ═══════════════════════════════════════════════════════════════════ */

/* ---- k2c38 · một vạch kẻ ngang qua Mặt Trăng: hết phần đo đạc (1,9 s) ---- */
DANGKY({
  id: "k2c38", steps: 0, say: [S[38]],
  html: K2.anh("k2-mattrang.jpg", .4,
          "contrast(1.1) saturate(.26) brightness(.4)", "50% 50%") +
        K2.ve(.86) + K2.toi(".9"),
  anim: root => {
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    const v = el("path", { d: "M-200,362 L1480,362", stroke: TR, "stroke-width": 3,
      fill: "none" }, V);
    return c => {
      cam(root, { t: c.t, x: lerp(14, -12, ez(c.u)), z: lerp(1.22, 1.12, ez(c.u)) });
      K2.veDan(v, ezo(c.t / .9));
      op(v, (.9 * ez(c.t / .25)).toFixed(3));
    };
  }
});

/* ---- k2c39 · vạch mở ra, phía sau là trời sao (1,9 s) ---- */
DANGKY({
  id: "k2c39", steps: 0, say: [S[39]],
  html: K2.anh("k2-nganha.jpg", .34,
          "contrast(1.3) saturate(1.0) brightness(.92)", "50% 46%") +
        K2.ve(.88) + K2.toi(".88"),
  anim: root => {
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    const a = el("rect", { x: -300, y: -300, width: 2000, height: 662, fill: "#05080F" }, V);
    const b = el("rect", { x: -300, y: 362, width: 2000, height: 662, fill: "#05080F" }, V);
    const v = el("path", { d: "M-200,362 L1480,362", stroke: TR, "stroke-width": 3,
      fill: "none" }, V);
    return c => {
      cam(root, { t: c.t, x: lerp(-10, 10, ez(c.u)), z: lerp(1.10, 1.22, ez(c.u)) });
      const k = ezo(cl(c.t / 1.3, 0, 1));
      set(a, { y: (-300 - 500 * k).toFixed(1) });
      set(b, { y: (362 + 500 * k).toFixed(1) });
      op(v, (.9 * (1 - ez((c.t - .5) / .9))).toFixed(3));
    };
  }
});

/* ---- k2c40 · luật chơi: cột ĐO nét liền · cột SUY nét đứt (6,7 s) ---- */
DANGKY({
  id: "k2c40", steps: 0, say: [S[40]],
  html: K2.nen("#0B1526", "#05080F") + K2.troi(.08) + K2.ve(.8) + K2.toi(".92"),
  anim: root => {
    const T = root.querySelector("svg.troi"); T.innerHTML = ""; sao(T, 120);
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    el("path", { d: "M640,96 L640,648", stroke: "#22405A", "stroke-width": 2,
      "stroke-dasharray": "6 8", fill: "none", opacity: .6 }, V);
    const L = [], R = [];
    for (let i = 0; i < 4; i++) {
      const y = 140 + i * 124;
      /* trái: ĐO ĐƯỢC — khung nét liền, có một ô nguồn ĐẶC bên trong */
      const g1 = el("g", {}, V);
      el("rect", { x: 150, y: y, width: 408, height: 88, rx: 5, fill: "#0C1A2A",
        stroke: TR, "stroke-width": 2.4 }, g1);
      el("rect", { x: 174, y: y + 56, width: 182, height: 16, rx: 3, fill: TR, opacity: .8 }, g1);
      el("rect", { x: 174, y: y + 22, width: 318, height: 20, rx: 3, fill: C2, opacity: .5 }, g1);
      L.push(g1);
      /* phải: CHỈ SUY RA — khung nét đứt, ô nguồn để TRỐNG */
      const g2 = el("g", {}, V);
      el("rect", { x: 722, y: y, width: 408, height: 88, rx: 5, fill: "none",
        stroke: SH, "stroke-width": 2.4, "stroke-dasharray": "10 8" }, g2);
      el("rect", { x: 746, y: y + 56, width: 182, height: 16, rx: 3, fill: "none",
        stroke: SH, "stroke-width": 1.8, "stroke-dasharray": "6 5", opacity: .9 }, g2);
      el("rect", { x: 746, y: y + 22, width: 318, height: 20, rx: 3, fill: SH, opacity: .3 }, g2);
      R.push(g2);
    }
    return c => {
      const u = ez(c.u);
      cam(root, { t: c.t, x: lerp(-18, 16, u), y: lerp(10, -10, u), z: lerp(1.02, 1.11, u) });
      L.forEach((g, i) => {
        op(g, ez((c.t - .3 - i * .5) / .45).toFixed(3));
        set(g, { transform: "translate(" + (-26 * (1 - ez((c.t - .3 - i * .5) / .45))).toFixed(1) + " 0)" });
      });
      R.forEach((g, i) => {
        op(g, (ez((c.t - 2.6 - i * .5) / .45) * (.75 + .2 * Math.sin(c.t * 1.4 + i))).toFixed(3));
        set(g, { transform: "translate(" + (26 * (1 - ez((c.t - 2.6 - i * .5) / .45))).toFixed(1) + " 0)" });
        g.querySelectorAll("rect").forEach(e => {
          if (e.getAttribute("stroke-dasharray"))
            e.setAttribute("stroke-dashoffset", (-c.t * 14).toFixed(1));
        });
      });
    };
  }
});

/* ---- k2c41 · đêm mai nhìn lên, và không có gì ở đó cả (4,2 s) ---- */
DANGKY({
  id: "k2c41", steps: 0, say: [S[41]],
  html: K2.anh("k2-nganha.jpg", .3,
          "contrast(1.28) saturate(.95) brightness(.84)", "50% 44%") +
        K2.ve(.7) + K2.toi(".9") +
        '<div class="hud">' + K2.nguon("k2c41-ng", "Dải Ngân Hà trên Paranal · ESO/H.H. Heyer · CC BY 4.0") + '</div>',
  anim: root => {
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    const g = el("g", {}, V);
    gradR(V, "k2c41-q", 880, 212, 170,
      [[.3, "#EAF2F8", .5], [.6, "#CFE0EC", .18], [1, "#CFE0EC", 0]]);
    const q = el("circle", { cx: 880, cy: 212, r: 170, fill: "url(#k2c41-q)" }, g);
    q.style.mixBlendMode = "screen";
    K2.trang(g, "k2c41", 880, 212, 54);
    return c => {
      const u = ez(c.u);
      cam(root, { t: c.t, x: lerp(24, -20, u), y: lerp(-8, 6, u), z: lerp(1.08, 1.20, u) });
      /* Mặt Trăng mờ đi rồi biến mất hẳn — chỗ nó ngồi để trống, không thay bằng gì */
      const v = ezo(cl((c.t - 1.3) / 2.2, 0, 1));
      op(g, (ez(c.t / .5) * (1 - v)).toFixed(3));
      set(g, { transform: "scale(" + (1 - v * .14).toFixed(3) + ") translate(" +
        (880 * (1 / (1 - v * .14) - 1)).toFixed(1) + " " +
        (212 * (1 / (1 - v * .14) - 1)).toFixed(1) + ")" });
      kh("k2c41-ng", c.t, .4, 3.4);
    };
  }
});

/* ---- k2c42 · CÚ GIẬT 1,7 s: mặt biển đêm, nước vẫn còn đó ---- */
DANGKY({
  id: "k2c42", steps: 0, say: [S[42]],
  html: K2.anh("k2-bien-dem.jpg", .48,
          "contrast(1.16) saturate(.6) brightness(.42)", "50% 62%") + K2.toi(".88"),
  anim: root => c => {
    cam(root, { t: c.t, x: lerp(-14, 12, ezo(c.u)), z: lerp(1.34, 1.18, ezo(c.u)) });
  }
});

/* ---- k2c43 · CÚ GIẬT 1,3 s: là ánh sáng ---- */
DANGKY({
  id: "k2c43", steps: 0, say: [S[43]],
  html: K2.anh("k2-mattrang.jpg", .54,
          "contrast(1.06) saturate(.2) brightness(.92)", "50% 50%") + K2.toi(".6"),
  anim: root => c => {
    cam(root, { t: c.t, x: lerp(8, -6, ezo(c.u)), z: lerp(1.50, 1.30, ezo(c.u)) });
  }
});

/* ---- k2c44 · đêm rằm sáng hơn đêm không trăng rất nhiều (2,3 s) ---- */
DANGKY({
  id: "k2c44", steps: 0, say: [S[44]],
  html: K2.anh("k2-demram.jpg", .4,
          "contrast(1.14) saturate(.6) brightness(.16)", "50% 52%") + K2.toi(".86") +
        '<div class="hud">' + K2.nguon("k2c44-ng", "Đêm trăng tròn, quần đảo Andaman · V. Argenberg · CC BY 4.0") + '</div>',
  anim: root => {
    const im = root.querySelector("img");
    return c => {
      const u = ez(c.u);
      cam(root, { t: c.t, x: lerp(22, -18, u), z: lerp(1.10, 1.22, u) });
      /* đêm không trăng → đêm rằm: cùng một khung hình, chỉ khác lượng ánh sáng */
      const v = ezo(cl((c.t - .15) / 1.5, 0, 1));
      if (im) im.style.filter = "contrast(1.14) saturate(" + (.6 + .18 * v).toFixed(2) +
        ") brightness(" + (.16 + .52 * v).toFixed(3) + ")";
      kh("k2c44-ng", c.t, 1.0, 2.2);
    };
  }
});

/* ---- k2c45 · với chúng ta, đó là chuyện thơ (1,8 s) ---- */
DANGKY({
  id: "k2c45", steps: 0, say: [S[45]],
  html: K2.anh("k2-tranh-ram.jpg", .42,
          "contrast(1.1) saturate(.84) brightness(.62)", "50% 48%") + K2.toi(".86") +
        '<div class="hud">' + K2.nguon("k2c45-ng", "Joos de Momper · «Làng dưới trăng tròn» · phạm vi công cộng") + '</div>',
  anim: root => c => {
    const u = ez(c.u);
    cam(root, { t: c.t, x: lerp(-16, 14, u), z: lerp(1.14, 1.26, u) });
    kh("k2c45-ng", c.t, .25, 1.6);
  }
});

/* ---- k2c46 · với nhiều loài, trăng là cái đồng hồ duy nhất (3,0 s) ---- */
DANGKY({
  id: "k2c46", steps: 0, say: [S[46]],
  html: K2.anh("k2-cua-cong.jpg", .4,
          "contrast(1.3) saturate(.6) brightness(.26) hue-rotate(-8deg)", "50% 58%") +
        K2.ve(.84) + K2.toi(".9") +
        '<div class="hud">' + K2.nguon("k2c46-ng", "Cua còng trên bãi triều, Suncheon · lumoplank · CC0") + '</div>',
  anim: root => {
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    const g = el("g", {}, V), CX = 1086, CY = 162, R = 92;
    el("circle", { cx: CX, cy: CY, r: R + 16, fill: "#060C16", opacity: .72 }, g);
    el("circle", { cx: CX, cy: CY, r: R + 16, fill: "none", stroke: "#22405A",
      "stroke-width": 2 }, g);
    const ph = el("circle", { cx: CX, cy: CY, r: R - 18, fill: "#0A0F18" }, g);
    const st = el("path", { d: "", fill: TR }, g);
    el("circle", { cx: CX, cy: CY, r: R - 18, fill: "none", stroke: TR,
      "stroke-width": 1.4, opacity: .3 }, g);
    const kim = el("path", { d: "", stroke: TR, "stroke-width": 2.6,
      "stroke-linecap": "round", fill: "none", opacity: .7 }, g);
    return c => {
      const u = ez(c.u);
      cam(root, { t: c.t, x: lerp(20, -16, u), y: lerp(-6, 8, u), z: lerp(1.08, 1.20, u) });
      const p = .10 + c.t * .13;        /* lưỡi liềm → gần rằm, không bao giờ trống */
      set(st, { d: K2.pha(p, CX, CY, R - 18) });
      const kp = K2.dq(CX, CY, R + 10, p * 360), kq = K2.dq(CX, CY, R - 2, p * 360);
      set(kim, { d: "M" + kq[0].toFixed(1) + "," + kq[1].toFixed(1) +
        " L" + kp[0].toFixed(1) + "," + kp[1].toFixed(1) });
      op(g, ez((c.t - .3) / .5).toFixed(3));
      op(ph, .95);
      kh("k2c46-ng", c.t, .4, 2.6);
    };
  }
});

/* ═══════════════════════════════════════════════════════════════════
   ĐOẠN 35 — BỌ HUNG: đọc ánh trăng phân cực, và phương án hai
   ═══════════════════════════════════════════════════════════════════ */

/* ---- k2c47 · bọ hung giữ đường thẳng bằng ánh trăng phân cực (7,6 s) ---- */
DANGKY({
  id: "k2c47", steps: 0, say: [S[47]],
  html: K2.anh("k2-bohung.jpg", .42,
          "contrast(1.24) saturate(.56) brightness(.3)", "46% 58%") +
        K2.ve(.82) + K2.toi(".9") +
        '<div class="hud">' + K2.nguon("k2c47-ng", "Bọ hung lăn phân · Alex Wild · CC0") + '</div>',
  anim: root => {
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    /* vạch phân cực: những nét song song nghiêng, chạy khắp bầu trời */
    const gpc = el("g", {}, V), pc = [];
    for (let i = 0; i < 34; i++) {
      const x = -180 + i * 48;
      pc.push(el("path", { d: "M" + x + ",-60 L" + (x + 150) + ",250",
        stroke: TR, "stroke-width": 1.8, fill: "none", opacity: 0 }, gpc));
    }
    /* đường thẳng bọ hung giữ được */
    const duong = el("path", { d: "M210,640 L1110,312", stroke: TR, "stroke-width": 3.4,
      fill: "none", "stroke-linecap": "round" }, V);
    const cham = el("circle", { cx: 210, cy: 640, r: 9, fill: SH }, V);
    return c => {
      const u = ez(c.u);
      cam(root, { t: c.t, x: lerp(26, -24, u), y: lerp(10, -10, u), z: lerp(1.07, 1.21, u) });
      pc.forEach((p, i) => {
        K2.veDan(p, ezo((c.t - .5 - i * .035) / .8));
        op(p, (.07 + .09 * Math.sin(c.t * 1.1 + i * .5)).toFixed(3));
      });
      /* tín hiệu yếu hơn ánh nắng cả triệu lần: vạch phân cực mờ tới mức gần như
         không thấy — đó là ý của cảnh, đừng vẽ nó sáng rõ cho dễ nhìn. */
      const w = ezo(cl((c.t - 1.6) / 5.2, 0, 1));
      K2.veDan(duong, w);
      set(cham, { cx: lerp(210, 1110, w).toFixed(1), cy: lerp(640, 312, w).toFixed(1) });
      op(cham, ez((c.t - 1.5) / .4).toFixed(3));
      kh("k2c47-ng", c.t, .5, 3.4);
    };
  }
});

/* ---- k2c48 · nguồn: Nature 2003 (2,7 s) ---- */
DANGKY({
  id: "k2c48", steps: 0, say: [S[48]],
  html: K2.anh("k2-bohung2.jpg", .44,
          "contrast(1.34) saturate(.5) brightness(.26)", "54% 50%") + K2.toi(".9") +
        '<div class="hud">' + K2.nguon("k2c48-ng",
          "Dacke và cộng sự · Nature 424, 2003 · ảnh: Dr Mary Gillham Archive · CC BY 2.0") + '</div>',
  anim: root => c => {
    const u = ez(c.u);
    cam(root, { t: c.t, x: lerp(-22, 18, u), y: lerp(8, -8, u), z: lerp(1.12, 1.26, u) });
    kh("k2c48-ng", c.t, .3, 2.5);
  }
});

/* ---- k2c49 · đêm không trăng: đổi sang đọc dải Ngân Hà (3,9 s) ---- */
DANGKY({
  id: "k2c49", steps: 0, say: [S[49]],
  html: K2.anh("k2-nganha.jpg", .32,
          "contrast(1.3) saturate(1.0) brightness(.9)", "50% 46%") +
        K2.ve(.8) + K2.toi(".9"),
  anim: root => {
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    const duong = el("path", { d: "M250,668 L980,286", stroke: TR, "stroke-width": 3.2,
      fill: "none", "stroke-linecap": "round" }, V);
    const bo = el("g", {}, V);
    el("circle", { cx: -44, cy: 6, r: 32, fill: "#161A22", stroke: "#AEBCC8",
      "stroke-width": 2, opacity: .95 }, bo);            /* viên phân đang lăn */
    el("ellipse", { cx: 8, cy: 0, rx: 30, ry: 21, fill: "#0D1119", stroke: "#AEBCC8",
      "stroke-width": 2 }, bo);
    el("path", { d: "M18,14 l20,18 M18,-14 l20,-18 M-2,19 l6,24 M-2,-19 l6,-24",
      stroke: "#AEBCC8", "stroke-width": 2.6, "stroke-linecap": "round", opacity: .9 }, bo);
    return c => {
      const u = ez(c.u);
      cam(root, { t: c.t, x: lerp(-24, 20, u), y: lerp(10, -8, u), z: lerp(1.08, 1.20, u) });
      const w = ezo(cl((c.t - .4) / 3.0, 0, 1));
      K2.veDan(duong, w);
      set(bo, { transform: "translate(" + lerp(250, 980, w).toFixed(1) + " " +
        lerp(668, 286, w).toFixed(1) + ") rotate(-27)" });
      op(bo, ez((c.t - .3) / .4).toFixed(3));
    };
  }
});

/* ---- k2c50 · phương án hai: một đường tắt, một đường còn sáng (2,2 s) ---- */
DANGKY({
  id: "k2c50", steps: 0, say: [S[50]],
  html: K2.anh("k2-nganha.jpg", .3,
          "contrast(1.28) saturate(.95) brightness(.78)", "50% 46%") +
        K2.ve(.84) + K2.toi(".9"),
  anim: root => {
    const V = root.querySelector("svg.ve"); V.innerHTML = "";
    const g1 = el("g", {}, V);
    gradR(V, "k2c50-q", 360, 220, 120, [[.3, "#EAF2F8", .45], [1, "#EAF2F8", 0]]);
    const q = el("circle", { cx: 360, cy: 220, r: 120, fill: "url(#k2c50-q)" }, g1);
    q.style.mixBlendMode = "screen";
    K2.trang(g1, "k2c50", 360, 220, 40);
    const l1 = el("path", { d: "M300,620 L360,278", stroke: TR, "stroke-width": 3,
      fill: "none", "stroke-linecap": "round" }, V);
    const l2 = el("path", { d: "M300,620 L940,258", stroke: TR, "stroke-width": 3,
      fill: "none", "stroke-linecap": "round" }, V);
    const cham = el("circle", { cx: 300, cy: 620, r: 10, fill: SH }, V);
    return c => {
      const u = ez(c.u);
      cam(root, { t: c.t, x: lerp(18, -16, u), z: lerp(1.08, 1.20, u) });
      /* đường thứ nhất (trăng) tắt dần; đường thứ hai (Ngân Hà) sáng lên thay chỗ */
      const v = ezo(cl((c.t - .5) / 1.3, 0, 1));
      K2.veDan(l1, ezo(c.t / .5));
      op(l1, (.9 * (1 - v)).toFixed(3));
      op(g1, (ez(c.t / .3) * (1 - v)).toFixed(3));
      K2.veDan(l2, ezo((c.t - .55) / 1.2));
      op(l2, (.92 * ez((c.t - .5) / .4)).toFixed(3));
      op(cham, (.95 * (.7 + .3 * Math.sin(c.t * 3))).toFixed(3));
    };
  }
});

})();
