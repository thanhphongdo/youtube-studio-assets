/* Khối 3 — HỆ SINH THÁI & ĐẠO ĐỨC — mất gì, ai được quyền bấm
   CHỈ chủ khối này được ghi file này. Xem slide/HUONG-DAN-DUNG-CANH.md
   Đoạn 36–52 · 47 câu · 47 cảnh (426,2s → 651,7s)
   Tông: SÁNG TRỞ LẠI (hệ --giay / --phongthi), theo đường cong sáng–tối–sáng.
   Mọi chuyển động là hàm thuần của c.t. Không CSS animation, không hẹn giờ,
   không gọi hàm ngẫu nhiên sẵn có của JS lúc vẽ (dùng rn(i,j) tất định).
   Tất cả nằm trong một IIFE để không đụng biến toàn cục của khối 1 và khối 2. */
(function () {
"use strict";

const CAU = [
  "Buồn cười là tin đồn này có gốc thật.",
  "Trong chính bài báo trên tạp chí Nature năm hai nghìn không trăm mười, bà Dina Fonseca ở Đại học Rutgers nói rằng diệt sạch nhóm muỗi mắt sẽ cho ra \"một thế giới không có sô-cô-la\".",
  "Bà nói về muỗi mắt, không nói về muỗi.",
  "Mười sáu năm đi vòng quanh internet, câu đó rụng mất một chữ.",
  "Hộp sô-cô-la của bạn an toàn.",
  "Cái mất thật thì nhỏ hơn người ta tưởng, nhưng không bằng không.",
  "Ấu trùng muỗi sống trong nước, và ở đó chúng là thức ăn của cá con, của bọ nước, của nòng nọc.",
  "Có điều ở hầu hết các vùng nước, chúng chỉ là một món trong thực đơn.",
  "Ông Steven Juliano, nhà sinh thái học côn trùng ở Đại học Bang Illinois, ví rất gọn: rút một cái đinh tán khỏi cánh máy bay thì khó mà làm máy bay ngừng bay.",
  "Chỗ muỗi nhiều tới mức thành mây là lãnh nguyên Bắc Cực.",
  "Theo một tổng quan năm hai nghìn không trăm hai mươi, đàn tuần lộc Bắc Mỹ đi hơn sáu trăm mét mỗi giờ suốt quãng từ giữa tháng sáu tới cuối tháng bảy — mức duy nhất trong năm chúng đi nhanh như vậy, và đó đúng là lúc côn trùng hút máu quấy nhất.",
  "Chỉ có điều, muỗi Bắc Cực không nằm trong hơn một trăm loài truyền bệnh cho người.",
  "Cái nút kia không nhằm vào chúng.",
  "Năm hai nghìn không trăm mười, tạp chí Nature cho một phóng viên đi hỏi thẳng các nhà côn trùng học đúng câu hỏi của tập này.",
  "Bài báo tên là \"Một thế giới không có muỗi\".",
  "Câu trả lời chia hai phía rất rõ.",
  "Bà Janet McAllister, nhà côn trùng học y học ở Trung tâm Kiểm soát và Phòng ngừa Dịch bệnh Hoa Kỳ, nói một câu mà cả bài lấy làm câu nhấn: nếu con muỗi có ích gì thì loài người đã tìm ra cách khai thác nó rồi.",
  "Chúng ta chưa bao giờ muốn gì ở muỗi, ngoài việc nó đi cho.",
  "Phía bên kia, ông Phil Lounibos ở Phòng thí nghiệm Côn trùng Y học Florida nhấn vào đúng một chữ: xoá muỗi chỉ giúp con người đỡ khổ tạm thời.",
  "Vì chỗ trống trong tự nhiên luôn có kẻ khác tới chiếm, mà kẻ tới sau chưa chắc đã dễ chịu hơn kẻ vừa đi.",
  "Nhưng thứ khiến chuyện này khác mọi chuyện loài người từng làm thì không nằm ở sinh học.",
  "Nó nằm ở chữ ký.",
  "Một nước quyết định tiêm chủng thì nước đó tự chịu.",
  "Một nước đắp đập thì nước ở dưới dòng còn biết đường mà kiện.",
  "Còn gene drive thì thả ở một cái làng, nhưng thứ được thả là một chỉ thị di truyền biết tự nhân bản và tự lan.",
  "Muỗi không xin visa, và cũng không dừng ở cột mốc biên giới.",
  "Năm hai nghìn không trăm mười sáu, Viện Hàn lâm Quốc gia Hoa Kỳ ra hẳn một báo cáo về gene drive, kết luận rằng chưa đủ bằng chứng để thả ra môi trường.",
  "Năm hai nghìn không trăm mười tám, Công ước Đa dạng Sinh học ra một quyết định buộc mọi lần thả phải có đánh giá rủi ro từng ca và phải có sự đồng thuận của cộng đồng sống ở đó.",
  "Đến năm hai nghìn không trăm hai mươi tư, có nước đòi hoãn toàn bộ, có nước phản đối, và cuối cùng không có lệnh hoãn nào được thông qua.",
  "Rồi thực tế trả lời bằng một chuyện nhỏ.",
  "Tháng tám năm hai nghìn không trăm hai mươi lăm, chính phủ Burkina Faso đình chỉ dự án Target Malaria tại nước mình, sau một đợt thả muỗi còn chưa mang gene drive — dù dự án đã có đủ giấy phép và đã làm đồng thuận cộng đồng từ trước.",
  "Nghĩa là câu hỏi \"ai được quyền bấm\" vẫn chưa ai trả lời được.",
  "Các nước gánh sốt rét nặng nhất nói rằng hoãn thêm một năm là thêm mấy trăm nghìn ngôi mộ.",
  "Phía bên kia nói rằng một quyết định không lấy lại được thì không nên để một nước ký thay cả hành tinh.",
  "Cả hai bên đều không nói sai.",
  "Đó mới là chỗ khó.",
  "Và thật thú vị khi nhận ra rằng bông hoa ở đầu tập lại là câu trả lời gọn nhất.",
  "Năm hai nghìn không trăm hai mươi, trên tạp chí của Viện Hàn lâm Khoa học Quốc gia Hoa Kỳ, một nhóm ở Đại học Oa-sinh-tơn công bố chuyện này: loài lan Platanthera obtusata trong rừng lạnh Bắc Mỹ gần như chỉ được muỗi thụ phấn.",
  "Gần năm mươi giờ ngồi đếm ngoài rừng, họ ghi được năm mươi bảy lượt muỗi tới ăn mật, và đúng một con bướm đêm.",
  "Bịt hoa lại không cho côn trùng vào thì tỉ lệ đậu quả tụt từ gần chín phần mười xuống còn hơn một phần mười.",
  "Con muỗi thụ phấn cho bông lan đó là một loài muỗi tuyết tan, và nó không nằm trong danh sách truyền bệnh.",
  "Cái nút kia không nhằm vào nó.",
  "Có điều cả tập này rốt cuộc chỉ xoay quanh đúng một câu: chúng ta biết rõ mình nhằm vào ai, nhưng chưa ai biết chắc cái gen sẽ dừng lại ở đâu.",
  "Và đó, thưa quý vị và các bạn, là lý do một cái nút đã nằm sẵn trên bàn gần mười năm nay mà vẫn chưa có ai dám mở nắp.",
  "Hy vọng anh chị em thích tập này.",
  "Nhớ để lại một lượt thích để chúng tớ biết.",
  "Còn nếu anh chị em nghĩ cái nút đó nên được bấm, hoặc nên khoá lại vĩnh viễn, thì mời viết xuống bình luận — chúng tớ đọc hết.",
];

/* ─── bảng màu (đúng token của tap04-full.html) ─── */
const MAU="#C0392B",        /* đỏ máu — màu nhấn DUY NHẤT của tập 4 */
      NUOCDONG="#2F7D6E", PHONGTHI="#EDF2F4", GEN="#6C8EBF",
      RUNG="#3E7B3A", DA="#D9A066",
      GIAY="#F6F8F5", GIAY2="#ECEFEA", BIENN="#D8ECF7", DATN="#E6E6E6",
      CHUTOI="#1C2A22", XAM="#8D9AA3", NHAT="#CBD4CE", THEP="#B9C3C9";

/* ─── tiện ích riêng của khối 3 ─── */
function phang(root, ten){ const V = root.querySelector("svg." + ten); V.innerHTML = ""; return V; }
/* nền phẳng tràn mép. Lớp .lop được bộ máy nới -14% nên hình nền phải rộng hơn khung. */
function nenP(root, pre, a, b){
  const V = phang(root, "nen");
  if (b){ gradL(V, pre + "-nen", 0, -200, 0, 920, [[0, a], [1, b]]);
          el("rect", { x:-400, y:-300, width:2100, height:1400, fill:"url(#" + pre + "-nen)" }, V); }
  else    el("rect", { x:-400, y:-300, width:2100, height:1400, fill:a }, V);
  return V;
}
/* hai lớp svg dựng sẵn cho cảnh vẽ: nền phẳng + lớp hình */
const HAI_LOP = '<div class="lop" data-sau="0.15"><svg class="nen"></svg></div>' +
                '<div class="lop" data-sau="0.8"><svg class="ve"></svg></div>';
/* ảnh ngang: tràn bốn mép */
const anhN = (f, filt, sau) => '<div class="lop" data-sau="' + (sau === undefined ? 0.3 : sau) +
  '"><img src="anh/' + f + '" alt="" style="filter:' + filt + '"></div>';
/* ảnh DỌC: bắt buộc có nền mờ phía sau, nếu không sẽ lòi mép (luật Cảnh F) */
const anhD = (f, filt) =>
  '<div class="lop" data-sau="0.1"><img src="anh/' + f + '" alt=""' +
  ' style="filter:blur(38px) brightness(1.04) saturate(.5);transform:scale(1.45)"></div>' +
  '<div class="lop" data-sau="0.4"><img src="anh/' + f + '" alt=""' +
  ' style="object-fit:contain;filter:' + filt + '"></div>';
/* dòng nguồn ảnh — có nền tối mỏng vì khối này nền sáng, chữ trắng sẽ chìm */
const nguon = (id, s) => '<div class="tx" id="' + id + '" style="left:48px;top:650px">' +
  '<span class="nho" style="background:rgba(12,22,18,.52);padding:5px 10px;border-radius:3px;' +
  'display:inline-block">' + s + '</span></div>';
/* thẻ chữ biên tập — CẢ KHỐI CHỈ DÙNG 3 LẦN, tất cả trước giây 480 */
const the = (id, s, l, t, co) => '<div class="tx" id="' + id + '" style="left:' + l + 'px;top:' + t + 'px">' +
  '<span style="background:rgba(12,22,18,.72);color:#FFF;font:700 ' + (co || 30) +
  'px/1 system-ui;letter-spacing:.14em;padding:11px 18px;border-radius:3px;display:inline-block">' +
  s + '</span></div>';

/* ─── CÁI NÚT: mô-típ xuyên tập. Khối 1 vẽ ở tâm (640,372), bán kính 118,
   vành thép trên nền --phongthi, mái vòm --mau, có vệt sáng quét ngang.
   Dựng lại đúng thông số đó để khán giả nhận ra ngay. ─── */
function nut(V, pre, cx, cy, r){
  cx = cx === undefined ? 640 : cx; cy = cy === undefined ? 372 : cy; r = r || 118;
  const g = el("g", {}, V);
  el("ellipse", { cx:cx, cy:cy + r*.42, rx:r*1.06, ry:r*.30, fill:"#0E1A16", opacity:.12 }, g);
  el("circle", { cx:cx, cy:cy, r:r, fill:"#DFE6EA", stroke:"#9EAAB1", "stroke-width":3 }, g);
  el("circle", { cx:cx, cy:cy, r:r*.87, fill:THEP }, g);
  el("circle", { cx:cx, cy:cy, r:r*.80, fill:"#D5DDE2" }, g);
  gradR(V, pre + "-vom", cx - r*.30, cy - r*.36, r*1.3,
    [[0,"#E8705F"],[.42,MAU],[1,"#7A2015"]]);
  const vom = el("circle", { cx:cx, cy:cy, r:r*.70, fill:"url(#" + pre + "-vom)" }, g);
  el("ellipse", { cx:cx - r*.22, cy:cy - r*.30, rx:r*.27, ry:r*.14, fill:"#FFFFFF", opacity:.30,
    transform:"rotate(-26 " + (cx - r*.22).toFixed(1) + " " + (cy - r*.30).toFixed(1) + ")" }, g);
  const cp = el("clipPath", { id:pre + "-cl" }, defsOf(V));
  el("circle", { cx:cx, cy:cy, r:r }, cp);
  /* 0,07 chứ không phải 0,13–0,15: để cao hơn thì lúc vệt quét đi qua tâm, chỗ nó
     giao với vệt sáng tĩnh trên mái vòm trông như một nan quạt trắng (khối 1 đã vấp). */
  const quet = el("rect", { x:cx - r, y:cy - r*1.1, width:r*.46, height:r*2.2,
    fill:"#FFFFFF", opacity:.07, "clip-path":"url(#" + pre + "-cl)" }, g);
  g.__quet = quet; g.__vom = vom; g.__o = [cx, cy, r];
  return g;
}
/* nhịp sống của cái nút: vệt sáng quét + mái vòm thở. Hàm thuần của t. */
function nhipNut(g, t){
  const o = g.__o, ph = (t * .20) % 1;
  set(g.__quet, { x: (o[0] - o[2] + ph * (2*o[2])).toFixed(1) });
  set(g.__vom, { r: (o[2]*.70 * (1 + .012*Math.sin(t*1.7))).toFixed(2) });
}
/* vòng ngắm — dùng ở c13, c42, c43 */
function ngamVong(V, cx, cy, r, mau){
  const g = el("g", {}, V);
  el("circle", { cx:cx, cy:cy, r:r, fill:"none", stroke:mau, "stroke-width":3,
    "stroke-dasharray":"16 12" }, g);
  [[0,-1],[0,1],[-1,0],[1,0]].forEach(d => el("line", { x1:cx + d[0]*(r-16), y1:cy + d[1]*(r-16),
    x2:cx + d[0]*(r+20), y2:cy + d[1]*(r+20), stroke:mau, "stroke-width":3,
    "stroke-linecap":"round" }, g));
  return g;
}
/* con muỗi vẽ bằng nét — CHỈ dùng làm ký hiệu trong sơ đồ, không thay ảnh thật */
function kyHieuMuoi(p, x, y, s, mau){
  const g = el("g", { transform:"translate(" + x + " " + y + ") scale(" + s + ")" }, p);
  el("ellipse", { cx:0, cy:0, rx:17, ry:5.2, fill:mau, transform:"rotate(-18)" }, g);
  el("circle", { cx:-15, cy:-5, r:5, fill:mau }, g);
  el("path", { d:"M-19 -4 L-34 7", stroke:mau, "stroke-width":2.2, "stroke-linecap":"round" }, g);
  el("path", { d:"M-18 -9 L-30 -19 M-16 -10 L-24 -22", stroke:mau, "stroke-width":1.6,
    "stroke-linecap":"round" }, g);
  el("ellipse", { cx:6, cy:-11, rx:15, ry:5, fill:mau, opacity:.42, transform:"rotate(-32 6 -11)" }, g);
  el("ellipse", { cx:10, cy:-7, rx:15, ry:4.4, fill:mau, opacity:.30, transform:"rotate(-14 10 -7)" }, g);
  el("path", { d:"M-6 3 L-13 16 M1 4 L-1 18 M8 4 L12 17", stroke:mau, "stroke-width":1.7,
    "stroke-linecap":"round" }, g);
  return g;
}
/* tuần lộc nhìn ngang — ký hiệu, dùng trong sơ đồ c13 */
function kyHieuTuanLoc(p, x, y, s, mau){
  const g = el("g", { transform:"translate(" + x + " " + y + ") scale(" + s + ")" }, p);
  el("path", { d:"M-30 0 L-30 -22 Q-30 -34 -16 -34 L18 -34 Q30 -34 30 -22 L30 0 " +
    "L24 0 L24 -12 L-24 -12 L-24 0 Z", fill:mau }, g);
  el("path", { d:"M26 -30 L40 -44 L38 -56 L44 -44 L54 -48 L44 -38 L40 -30 Z", fill:mau }, g);
  el("path", { d:"M34 -34 q12 -4 14 4 l-4 10 l-10 2 Z", fill:mau }, g);
  el("path", { d:"M-26 0 l-3 16 l6 0 l3 -16 Z M-12 0 l-2 16 l6 0 l2 -16 Z " +
    "M12 0 l2 16 l6 0 l-2 -16 Z M24 0 l3 16 l6 0 l-3 -16 Z", fill:mau }, g);
  return g;
}

/* ══════════════ ĐOẠN 36 — ĐÍNH CHÍNH "MẤT MUỖI THÌ MẤT SÔ-CÔ-LA" ══════════════ */

/* "Buồn cười là tin đồn này có gốc thật." — 8,8 giây, một hình, chuyển động liên tục */
DANGKY({ id:"k3c01", steps:0, say:[CAU[0]],
  html: anhN("k3-cacao.jpg", "contrast(1.06) saturate(.95) brightness(1.06)", 0.3) +
        '<div class="hud">' + nguon("k3c01-ng", "Ảnh: sarahemcc · CC BY 2.0") + '</div>',
  anim: root => c => {
    cam(root, { t:c.t, z:lerp(1.02,1.19,c.u), x:lerp(34,-36,c.u), y:lerp(-14,16,c.u) });
    kh("k3c01-ng", c.t, .6, 4.0);
  }});

/* "Trong chính bài báo trên tạp chí Nature năm hai nghìn không trăm mười, ..." */
DANGKY({ id:"k3c02", steps:0, say:[CAU[1]], html: HAI_LOP,
  anim: root => {
    nenP(root, "k3c02", GIAY2, "#DCE2DC");
    const V = phang(root, "ve");
    const g = el("g", { transform:"translate(640 360) rotate(-3)" }, V);
    el("rect", { x:-214, y:-278, width:428, height:556, fill:"#FFFFFF",
      stroke:"#D2D8D2", "stroke-width":2 }, g);
    el("rect", { x:-214, y:-278, width:428, height:62, fill:"#20302A" }, g);
    const dong = [];
    for (let i = 0; i < 22; i++){
      const w = 110 + rn(i, 31) * 240;
      dong.push(el("rect", { x:-178, y:(-186 + i*20).toFixed(0), width:w.toFixed(0), height:7,
        rx:3.5, fill:"#9AA6A0", opacity:0 }, g));
    }
    const nhan = el("rect", { x:-182, y:46, width:0, height:26, fill:MAU, opacity:.30 }, g);
    return c => {
      cam(root, { t:c.t, z:lerp(1.05,1.16,c.u), y:lerp(10,-14,c.u) });
      dong.forEach((e, i) => op(e, (.85 * ez((c.t - .12 - i*.028) / .3)).toFixed(3)));
      set(nhan, { width:(344 * ezo(cl((c.t - .95) / .85, 0, 1))).toFixed(1) });
    };
  }});

/* "Bà nói về muỗi mắt, không nói về muỗi." — THẺ CHỮ 1 và 2 của cả khối */
DANGKY({ id:"k3c03", steps:0, say:[CAU[2]],
  html:'<div class="lop" data-sau="0.3"><div style="position:absolute;inset:0;overflow:hidden">' +
       '<img src="anh/k3-muoi-mat.jpg" alt="" style="position:absolute;left:0;top:0;width:50%;' +
       'height:100%;object-fit:cover;filter:contrast(1.04) saturate(.62) brightness(1.02)">' +
       '<img src="anh/k3-muoi-dot.jpg" alt="" style="position:absolute;left:50%;top:0;width:50%;' +
       'height:100%;object-fit:cover;filter:contrast(1.04) saturate(.78)">' +
       '</div></div>' +
       '<div class="lop" data-sau="0.9"><svg class="ve"></svg></div>' +
       '<div class="hud">' + the("k3c03-a", "MUỖI MẮT", 96, 556) +
       the("k3c03-b", "MUỖI", 760, 556) + '</div>',
  anim: root => {
    const V = phang(root, "ve");
    const vach = el("rect", { x:634, y:-200, width:12, height:1120, fill:"#F6F8F5", opacity:0 }, V);
    return c => {
      cam(root, { t:c.t, z:lerp(1.14,1.03,c.u) });
      op(vach, ez(c.t / .5));
      kh("k3c03-a", c.t, .25, 1.35);
      kh("k3c03-b", c.t, 1.80, 3.05);
    };
  }});

/* "Mười sáu năm đi vòng quanh internet, câu đó rụng mất một chữ." */
DANGKY({ id:"k3c04", steps:0, say:[CAU[3]], html: HAI_LOP,
  anim: root => {
    nenP(root, "k3c04", GIAY);
    const V = phang(root, "ve");
    const W = [120, 86, 150, 104, 96, 170, 92, 132], RUNG_I = 4;
    let x = 0; const vt = W.map(w => { const a = x; x += w + 20; return a; });
    const g = el("g", {}, V);
    const o = W.map((w, i) => {
      const gg = el("g", {}, g);
      el("rect", { x:0, y:-24, width:w, height:48, rx:24,
        fill: i === RUNG_I ? MAU : "#C0CAC3", stroke: i === RUNG_I ? MAU : "#8E9A93",
        "stroke-width":2.6 }, gg);
      el("rect", { x:18, y:-7, width:w - 36, height:14, rx:7,
        fill: i === RUNG_I ? "#FFFFFF" : "#49544E", opacity: i === RUNG_I ? .9 : .82 }, gg);
      return gg;
    });
    const tong = x - 20;
    return c => {
      cam(root, { t:c.t, z:lerp(1.0,1.07,c.u) });
      const a = ezo(cl((c.t - .55) / .70, 0, 1));          /* chữ thứ 5 rụng xuống */
      const b = ezo(cl((c.t - .95) / .85, 0, 1));          /* hàng chữ khép lại */
      const bu = (W[RUNG_I] + 20) * b;
      o.forEach((gg, i) => {
        const dx = 640 - tong/2 + vt[i] - (i > RUNG_I ? bu : 0);
        const dy = 360 + (i === RUNG_I ? 300 * a : 0);
        set(gg, { transform:"translate(" + dx.toFixed(1) + "," + dy.toFixed(1) + ")" });
        op(gg, i === RUNG_I ? (1 - a).toFixed(3) : 1);
      });
    };
  }});

/* "Hộp sô-cô-la của bạn an toàn." */
DANGKY({ id:"k3c05", steps:0, say:[CAU[4]],
  html: anhN("k3-hat-cacao.jpg", "contrast(1.08) saturate(1.04) brightness(1.08)", 0.3) +
        '<div class="hud">' + nguon("k3c05-ng", "Ảnh: Teinesavaii, Samoa · Phạm vi công cộng") + '</div>',
  anim: root => c => {
    /* đẩy mạnh và lia sang phải: cắt bỏ đôi dép ở mép trái, chỉ còn đống hạt */
    cam(root, { t:c.t, z:lerp(1.52,1.30,c.u), x:lerp(-232,-170,c.u), y:lerp(58,30,c.u) });
    kh("k3c05-ng", c.t, .35, 3.0);
  }});
/* ══════════════ ĐOẠN 37 ══════════════ */

/* "Cái mất thật thì nhỏ hơn người ta tưởng, nhưng không bằng không." */
DANGKY({ id:"k3c06", steps:0, say:[CAU[5]], html: HAI_LOP,
  anim: root => {
    nenP(root, "k3c06", GIAY, GIAY2);
    const V = phang(root, "ve");
    const vien = el("circle", { cx:640, cy:360, r:250, fill:"none", stroke:XAM,
      "stroke-width":2, "stroke-dasharray":"9 10", opacity:0 }, V);
    const dac = el("circle", { cx:640, cy:360, r:250, fill:NUOCDONG, opacity:.22 }, V);
    const loi = el("circle", { cx:640, cy:360, r:250, fill:RUNG, opacity:0 }, V);
    const khong = el("circle", { cx:640, cy:360, r:4, fill:"none", stroke:MAU,
      "stroke-width":2.6, opacity:0 }, V);
    return c => {
      cam(root, { t:c.t, z:lerp(1.0,1.08,c.u) });
      const a = ezo(cl((c.t - .55) / 2.3, 0, 1));
      const r = lerp(250, 44, a) * (1 + .016*Math.sin(c.t*1.6));
      set(dac, { r:r.toFixed(1) }); set(loi, { r:r.toFixed(1) });
      op(dac, (.22 * (1 - a)).toFixed(3)); op(loi, (.78 * a).toFixed(3));
      op(vien, (.75 * ez(c.t / .5)).toFixed(3));
      op(khong, (.9 * ez((c.t - 2.6) / .6)).toFixed(3));
      set(khong, { r:(14 + 5*Math.sin(c.t*2.2)).toFixed(1) });
    };
  }});

/* ══════════════ ĐOẠN 38 — BỌ GẬY TRONG CHUỖI THỨC ĂN ══════════════ */

/* "Ấu trùng muỗi sống trong nước, và ở đó chúng là thức ăn của cá con, ..." */
DANGKY({ id:"k3c07", steps:0, say:[CAU[6]],
  html: anhN("k3-bo-gay.jpg", "contrast(1.08) saturate(1.0) brightness(1.04)", 0.3) +
        '<div class="hud">' + nguon("k3c07-ng", "Ảnh: CDC / James Gathany · Phạm vi công cộng") + '</div>',
  anim: root => c => {
    cam(root, { t:c.t, z:lerp(1.16,1.02,c.u), y:lerp(-16,14,c.u) });
    kh("k3c07-ng", c.t, .4, 3.1);
  }});

/* "Có điều ở hầu hết các vùng nước, chúng chỉ là một món trong thực đơn." — 8,3 giây */
DANGKY({ id:"k3c08", steps:0, say:[CAU[7]],
  html: anhN("k3-nongnoc.jpg", "contrast(1.05) saturate(.85) brightness(1.1)", 0.18) +
        '<div class="lop" data-sau="0.5"><svg class="nen"></svg></div>' +
        '<div class="lop" data-sau="0.85"><svg class="ve"></svg></div>' +
        '<div class="hud">' + nguon("k3c08-ng", "Ảnh: mefisher · CC0") + '</div>',
  anim: root => {
    /* không tô kín: phủ một lớp sữa để cái đĩa đọc được mà vẫn thấy đàn nòng nọc */
    const N = phang(root, "nen");
    el("rect", { x:-400, y:-300, width:2100, height:1400, fill:"#F2F6F3", opacity:.80 }, N);
    const V = phang(root, "ve");
    const CX = 640, CY = 364, R = 234;
    el("ellipse", { cx:CX, cy:CY + 250, rx:R*1.1, ry:30, fill:"#2F4039", opacity:.10 }, V);
    el("circle", { cx:CX, cy:CY, r:R + 26, fill:"#FFFFFF", stroke:"#CBD4CE", "stroke-width":3 }, V);
    el("circle", { cx:CX, cy:CY, r:R, fill:"#F4F7F4", stroke:"#D9E0DA", "stroke-width":2 }, V);
    const NM = 7, MAUM = ["#7FA6B8","#8FB07A","#C0A86A","#9C8FB4","#6FA496","#B88E7A", MAU];
    const mon = [];
    for (let i = 0; i < NM; i++){
      const a0 = -Math.PI/2 + i*2*Math.PI/NM, a1 = a0 + 2*Math.PI/NM - .035;
      const d = "M" + CX + " " + CY +
        " L" + (CX + R*Math.cos(a0)).toFixed(1) + " " + (CY + R*Math.sin(a0)).toFixed(1) +
        " A" + R + " " + R + " 0 0 1 " + (CX + R*Math.cos(a1)).toFixed(1) + " " +
        (CY + R*Math.sin(a1)).toFixed(1) + " Z";
      const g = el("g", { opacity:0 }, V);
      el("path", { d:d, fill:MAUM[i], opacity: i === NM-1 ? .80 : .52 }, g);
      const am = (a0 + a1)/2;
      g.__c = [Math.cos(am), Math.sin(am)];
      if (i === NM-1) kyHieuMuoi(g, CX + R*.62*g.__c[0], CY + R*.62*g.__c[1], 1.25, "#FFFFFF");
      mon.push(g);
    }
    return c => {
      cam(root, { t:c.t, z:lerp(1.02,1.12,c.u), x:lerp(-12,14,c.u) });
      mon.forEach((g, i) => {
        op(g, ez((c.t - .25 - i*.58) / .45));
        const b = i === mon.length-1 ? ezo(cl((c.t - 5.6) / 1.5, 0, 1)) : 0;
        set(g, { transform:"translate(" + (g.__c[0]*118*b).toFixed(1) + "," +
          (g.__c[1]*118*b).toFixed(1) + ")" });
      });
      kh("k3c08-ng", c.t, .5, 3.6);
    };
  }});

/* "Ông Steven Juliano ... ví rất gọn: rút một cái đinh tán khỏi cánh máy bay ..."
   Ảnh đúng nghĩa đen: thợ máy đang RÚT đinh tán khỏi cánh một chiếc P-3 Orion. */
DANGKY({ id:"k3c09", steps:0, say:[CAU[8]],
  html: anhN("k3-dinh-tan.jpg", "contrast(1.08) saturate(.92) brightness(1.04)", 0.3) +
        '<div class="hud">' + nguon("k3c09-ng", "Ảnh: Richard W. Williams / Hải quân Hoa Kỳ · Phạm vi công cộng") + '</div>',
  anim: root => c => {
    cam(root, { t:c.t, z:lerp(1.04,1.17,c.u), x:lerp(22,-24,c.u), y:lerp(-10,12,c.u) });
    kh("k3c09-ng", c.t, .3, 2.5);
  }});
/* ══════════════ ĐOẠN 39 — LÃNH NGUYÊN BẮC CỰC ══════════════ */

/* "Chỗ muỗi nhiều tới mức thành mây là lãnh nguyên Bắc Cực." — 10,4 giây */
DANGKY({ id:"k3c10", steps:0, say:[CAU[9]],
  html: anhN("k3-lanh-nguyen.jpg", "contrast(1.05) saturate(.95) brightness(1.02)", 0.25) +
        '<div class="lop" data-sau="0.95"><svg class="ve"></svg></div>' +
        '<div class="hud">' + nguon("k3c10-ng", "Ảnh: Lisa Hupp / USFWS Alaska · Phạm vi công cộng") + '</div>',
  anim: root => {
    const V = phang(root, "ve");
    const hat3 = [];
    for (let i = 0; i < 620; i++)
      hat3.push(el("circle", { cx:0, cy:0, r:(1.2 + rn(i, 71)*2.6).toFixed(2),
        fill:"#141E18", opacity:0 }, V));
    return c => {
      cam(root, { t:c.t, z:lerp(1.02,1.20,c.u), x:lerp(-30,30,c.u), y:lerp(14,-16,c.u) });
      const day = ezo(cl((c.t - 1.1) / 6.0, 0, 1));
      hat3.forEach((e, i) => {
        const sp = .22 + rn(i, 72)*.5;
        const ph = (c.t*sp + rn(i, 73)) % 1;
        /* dồn về một dải: đám muỗi phải ra ĐÁM, không ra bụi rải đều khắp khung */
        const q = rn(i, 74), qq = .5 + (q - .5)*Math.abs(q - .5)*2.4;
        const x = -180 + qq*1660 + 70*Math.sin(c.t*.8 + rn(i,75)*6.3);
        const w = rn(i, 76), ww = .5 + (w - .5)*Math.abs(w - .5)*2.2;
        const y = -120 + ww*980 - ph*180;
        set(e, { cx:x.toFixed(1), cy:y.toFixed(1) });
        op(e, (Math.sin(ph*Math.PI) * day * (.55 + rn(i, 77)*.42)).toFixed(3));
      });
      kh("k3c10-ng", c.t, .8, 4.4);
    };
  }});

/* "Theo một tổng quan năm hai nghìn không trăm hai mươi, đàn tuần lộc Bắc Mỹ đi hơn sáu trăm mét ..."
   THẺ CHỮ 3 — cũng là con số duy nhất hiện trên màn hình của cả khối. */
DANGKY({ id:"k3c11", steps:0, say:[CAU[10]],
  html: anhN("k3-tuan-loc.jpg", "contrast(1.06) saturate(1.0) brightness(.98)", 0.3) +
        '<div class="hud">' +
        '<div class="tx" id="k3c11-s" style="right:64px;top:92px;text-align:right">' +
        '<span class="so" id="k3c11-sa" style="font:800 128px/1 system-ui;color:#FFFFFF;' +
        'letter-spacing:-.04em;text-shadow:0 3px 22px rgba(10,22,16,.85)">0</span>' +
        '<div style="font:700 30px/1 system-ui;letter-spacing:.20em;color:#FFFFFF;' +
        'text-shadow:0 2px 14px rgba(10,22,16,.9);margin-top:6px">m/giờ</div></div>' +
        nguon("k3c11-ng", "Ảnh: Danielle Brigida / USFWS Alaska · Phạm vi công cộng") + '</div>',
  anim: root => c => {
    cam(root, { t:c.t, z:lerp(1.03,1.15,c.u), x:lerp(26,-26,c.u) });
    kh("k3c11-s", c.t, .25, 3.6);
    txt("k3c11-sa", soVN(600 * ezo(cl((c.t - .25) / 1.5, 0, 1))));
    kh("k3c11-ng", c.t, .5, 3.1);
  }});

/* "Chỉ có điều, muỗi Bắc Cực không nằm trong hơn một trăm loài truyền bệnh cho người." */
DANGKY({ id:"k3c12", steps:0, say:[CAU[11]], html: HAI_LOP,
  anim: root => {
    nenP(root, "k3c12", GIAY, GIAY2);
    const V = phang(root, "ve");
    const CO = 26, HA = 13, cham = [];
    for (let r = 0; r < HA; r++) for (let i = 0; i < CO; i++){
      const k = r*CO + i;
      cham.push(el("circle", { cx:(236 + i*31).toFixed(0), cy:(176 + r*31).toFixed(0),
        r:8.4, fill:"#BAC4BD", opacity:0 }, V));
    }
    /* 10 chấm đỏ = "hơn một trăm loài" trên nền khoảng 3.500 loài (1 chấm ≈ 10 loài) */
    const DO = [63, 64, 89, 90, 91, 115, 116, 117, 142, 143];
    const bac = el("circle", { cx:236 + 24*31, cy:176 + 11*31, r:7, fill:"#6E7C74", opacity:0 }, V);
    const vong = el("circle", { cx:236 + 24*31, cy:176 + 11*31, r:7, fill:"none",
      stroke:MAU, "stroke-width":2.6, "stroke-dasharray":"7 6", opacity:0 }, V);
    return c => {
      cam(root, { t:c.t, z:lerp(1.02,1.10,c.u), y:lerp(-8,10,c.u) });
      const a = ez((c.t - .1) / .45), b = ez((c.t - .85) / .5), d = ez((c.t - 1.55) / .5);
      cham.forEach((e, i) => { op(e, (a * (.55 + .4*rn(i, 81))).toFixed(3)); });
      DO.forEach(k => { set(cham[k], { fill: MAU }); op(cham[k], b.toFixed(3));
        set(cham[k], { r:(8.4 + 3.2*b).toFixed(2) }); });
      op(bac, d.toFixed(3)); op(vong, d.toFixed(3));
      set(vong, { r:(14 + 6*ezo(cl((c.t - 1.55)/1.1, 0, 1)) + 2*Math.sin(c.t*2.4)).toFixed(1) });
    };
  }});

/* "Cái nút kia không nhằm vào chúng." — MÔ-TÍP CÁI NÚT, lần thứ nhất ở khối 3 */
DANGKY({ id:"k3c13", steps:0, say:[CAU[12]], html: HAI_LOP,
  anim: root => {
    nenP(root, "k3c13", PHONGTHI, "#DCE4E8");
    const V = phang(root, "ve");
    const g = nut(V, "k3c13", 430, 362, 104);
    const vong = ngamVong(V, 430, 362, 176, MAU); op(vong, 0);
    const tlg = el("g", { opacity:0 }, V);
    kyHieuTuanLoc(tlg, 968, 452, 1.9, "#55645C");
    return c => {
      cam(root, { t:c.t, z:lerp(1.02,1.10,c.u), x:lerp(16,-18,c.u) });
      nhipNut(g, c.t);
      op(vong, (.9 * ez((c.t - .6) / .6)).toFixed(3));
      set(vong, { transform:"rotate(" + (c.t * 9).toFixed(2) + " 430 362)" });
      op(tlg, ez((c.t - 1.6) / .7).toFixed(3));
      set(tlg, { transform:"translate(" + (72 * (1 - ezo(cl((c.t - 1.6)/1.4, 0, 1)))).toFixed(1) +
        "," + (9 * Math.sin(c.t * 1.1)).toFixed(2) + ")" });
    };
  }});

/* ══════════════ ĐOẠN 40 — GIỚI SINH HỌC CHƯA NGÃ NGŨ ══════════════ */

/* "Năm hai nghìn không trăm mười, tạp chí Nature cho một phóng viên đi hỏi thẳng ..." */
DANGKY({ id:"k3c14", steps:0, say:[CAU[13]],
  html: anhN("k3-tieu-ban.jpg", "contrast(1.08) saturate(.9) brightness(1.06)", 0.3) +
        '<div class="hud">' + nguon("k3c14-ng", "Ảnh: Bảo tàng Lịch sử Tự nhiên London, ban Coleoptera · CC BY 2.0") + '</div>',
  anim: root => c => {
    cam(root, { t:c.t, z:lerp(1.22,1.04,c.u), x:lerp(-20,18,c.u), y:lerp(16,-14,c.u) });
    kh("k3c14-ng", c.t, .25, 1.9);
  }});
/* "Bài báo tên là \"Một thế giới không có muỗi\"." */
DANGKY({ id:"k3c15", steps:0, say:[CAU[14]],
  html: anhN("k3-muoi-dot.jpg", "contrast(1.04) saturate(.7) brightness(1.04)", 0.25) +
        '<div class="lop" data-sau="0.9"><svg class="ve"></svg></div>',
  anim: root => {
    const V = phang(root, "ve");
    const r = el("rect", { x:-400, y:-300, width:2100, height:1400, fill:"#FFFFFF", opacity:0 }, V);
    return c => {
      cam(root, { t:c.t, z:lerp(1.18,1.04,c.u), x:lerp(-22,20,c.u) });
      op(r, ezo(cl((c.t - .35) / 1.55, 0, 1)).toFixed(3));
    };
  }});

/* "Câu trả lời chia hai phía rất rõ." — 10,6 giây, cái bàn tách làm đôi */
DANGKY({ id:"k3c16", steps:0, say:[CAU[15]], html: HAI_LOP,
  anim: root => {
    nenP(root, "k3c16", GIAY, "#E4EAE4");
    const V = phang(root, "ve");
    const CX = 640, CY = 372, R = 196;
    const cpL = el("clipPath", { id:"k3c16-L" }, defsOf(V));
    el("rect", { x:-600, y:-600, width:1240, height:2000 }, cpL);
    const cpR = el("clipPath", { id:"k3c16-R" }, defsOf(V));
    el("rect", { x:640, y:-600, width:1240, height:2000 }, cpR);
    const nua = [0, 1].map(k => {
      const g = el("g", { "clip-path":"url(#k3c16-" + (k ? "R" : "L") + ")" }, V);
      el("ellipse", { cx:CX, cy:CY + 26, rx:R, ry:R*.72, fill:"#D9C6A8",
        stroke:"#B59C74", "stroke-width":4 }, g);
      el("ellipse", { cx:CX, cy:CY + 14, rx:R*.78, ry:R*.55, fill:"#E8DAC0", opacity:.9 }, g);
      const gh = [];
      for (let i = 0; i < 10; i++){
        const a = -Math.PI/2 + i*2*Math.PI/10;
        if ((Math.cos(a) > 0) !== (k === 1)) continue;
        gh.push(el("circle", { cx:(CX + Math.cos(a)*R*1.30).toFixed(1),
          cy:(CY + Math.sin(a)*R*.98 + 20).toFixed(1), r:27, fill:"#AFB9B2",
          stroke:"#8B968E", "stroke-width":3 }, g));
      }
      g.__gh = gh; return g;
    });
    const nut2 = el("path", { d:"M640 120 L640 640", fill:"none", stroke:"#6E7C74",
      "stroke-width":4, "stroke-dasharray":"12 9", opacity:0 }, V);
    return c => {
      cam(root, { t:c.t, z:lerp(1.02,1.16,c.u), y:lerp(12,-14,c.u) });
      op(nut2, (.85 * ez((c.t - 1.3) / .6)).toFixed(3));
      veDan(nut2, ezo(cl((c.t - 1.3) / 1.6, 0, 1)));
      const b = ezo(cl((c.t - 3.1) / 2.8, 0, 1));
      nua.forEach((g, k) => set(g, { transform:"translate(" +
        ((k ? 1 : -1) * 86 * b).toFixed(1) + ",0)" }));
      const d = ez((c.t - 6.2) / 2.2);
      nua.forEach((g, k) => g.__gh.forEach(e =>
        set(e, { fill: d > .5 ? (k ? GEN : RUNG) : "#AFB9B2" })));
      nua.forEach((g, k) => g.__gh.forEach((e, i) =>
        set(e, { r:(27 + 3*Math.sin(c.t*1.8 + i + k*2)).toFixed(2) })));
    };
  }});

/* ══════════════ ĐOẠN 41 — PHÍA NÓI "MUỖI ĐI CHO RỒI" ══════════════ */

/* "Bà Janet McAllister, nhà côn trùng học y học ở Trung tâm Kiểm soát ..." */
DANGKY({ id:"k3c17", steps:0, say:[CAU[16]],
  html: anhN("k3-bay-muoi.jpg", "contrast(1.05) saturate(.9) brightness(1.02)", 0.3) +
        '<div class="hud">' + nguon("k3c17-ng", "Ảnh: NIAID · CC BY 2.0") + '</div>',
  anim: root => c => {
    cam(root, { t:c.t, z:lerp(1.05,1.17,c.u), x:lerp(-34,24,c.u), y:lerp(10,-12,c.u) });
    kh("k3c17-ng", c.t, .4, 3.0);
  }});

/* "Chúng ta chưa bao giờ muốn gì ở muỗi, ngoài việc nó đi cho." — 7,6 giây.
   Ba thứ loài người đã tìm ra cách khai thác, bằng ảnh thật; ô thứ tư để trống. */
DANGKY({ id:"k3c18", steps:0, say:[CAU[17]],
  html:'<div class="lop" data-sau="0.3">' +
       '<div style="position:absolute;left:179.2px;top:100.8px;width:1280px;height:720px;overflow:hidden;' +
       'background:' + PHONGTHI + '">' +
       ['k3-ong-mat.jpg','k3-to-tam.jpg','k3-bo-sua.jpg'].map((f, i) =>
         '<img src="anh/' + f + '" alt="" style="position:absolute;left:' + (i*320) +
         'px;top:0;width:320px;height:720px;object-fit:cover;filter:contrast(1.05) saturate(.9) brightness(1.04)">'
       ).join('') + '</div></div>' +
       '<div class="lop" data-sau="0.9"><svg class="ve"></svg></div>' +
       '<div class="hud">' + nguon("k3c18-ng",
         "Ảnh: V. Argenberg · CC BY 4.0 — P. Hughes, Đà Lạt · CC BY 4.0 — NPS · Phạm vi công cộng") + '</div>',
  anim: root => {
    const V = phang(root, "ve");
    /* ba vách ngăn trắng mọc dần, rồi một vòng trống ở ô thứ tư.
       Toạ độ dưới đây là toạ độ KHUNG, khớp đúng mép ảnh nhờ hộp bù lệch ở trên. */
    const vach = [1, 2, 3].map(i => el("rect", { x:(i*320 - 4).toFixed(0), y:-200,
      width:8, height:0, fill:"#F6F8F5" }, V));
    const trong = el("circle", { cx:1120, cy:360, r:0, fill:"none", stroke:"#8E9A93",
      "stroke-width":4, "stroke-dasharray":"11 10" }, V);
    const che = [0, 1, 2].map(i => el("rect", { x:(i*320).toFixed(0), y:-200, width:320,
      height:1120, fill:"#EDF2F4", opacity:1 }, V));
    return c => {
      cam(root, { t:c.t, z:lerp(1.12,1.02,c.u), x:lerp(16,-26,c.u) });
      che.forEach((e, i) => op(e, (1 - ez((c.t - .25 - i*1.25) / .55)).toFixed(3)));
      vach.forEach((e, i) => set(e, { height:(1120 * ez((c.t - .2 - i*1.25) / .5)).toFixed(1) }));
      const b = ezo(cl((c.t - 4.5) / 1.4, 0, 1));
      set(trong, { r:(22 + 62*b).toFixed(1) });
      op(trong, (.9 * ez((c.t - 4.5) / .5)).toFixed(3));
      kh("k3c18-ng", c.t, .6, 4.0);
    };
  }});
/* ══════════════ ĐOẠN 42 — PHÍA NÓI "CHỖ TRỐNG SẼ CÓ KẺ KHÁC" ══════════════ */

/* "Phía bên kia, ông Phil Lounibos ... nhấn vào đúng một chữ: ... đỡ khổ tạm thời." */
DANGKY({ id:"k3c19", steps:0, say:[CAU[18]], html: HAI_LOP,
  anim: root => {
    nenP(root, "k3c19", GIAY, "#E6ECE6");
    const V = phang(root, "ve");
    el("path", { d:"M150 180 L150 560 L1130 560", fill:"none", stroke:"#B6C0B9",
      "stroke-width":3 }, V);
    el("path", { d:"M150 268 L1130 268", fill:"none", stroke:XAM, "stroke-width":2,
      "stroke-dasharray":"10 9", opacity:.8 }, V);
    const duong = el("path", { d:"M150 268 L392 268 C470 268 486 520 596 520 " +
      "C700 520 724 330 836 310 C944 291 1030 286 1130 282", fill:"none", stroke:MAU,
      "stroke-width":6, "stroke-linecap":"round", "stroke-linejoin":"round" }, V);
    const dau = el("circle", { cx:150, cy:268, r:9, fill:MAU, stroke:"#FFFFFF",
      "stroke-width":3, opacity:0 }, V);
    return c => {
      cam(root, { t:c.t, z:lerp(1.02,1.10,c.u), y:lerp(-10,12,c.u) });
      const u = ezo(cl((c.t - .4) / 4.6, 0, 1));
      veDan(duong, u);
      const q = diem(duong, u);
      set(dau, { cx:q[0].toFixed(1), cy:q[1].toFixed(1) });
      op(dau, ez((c.t - .4) / .4));
    };
  }});

/* "Vì chỗ trống trong tự nhiên luôn có kẻ khác tới chiếm, ..."
   Muỗi hổ châu Á (Aedes albopictus) — đúng loài vẫn chiếm chỗ của loài khác. */
DANGKY({ id:"k3c20", steps:0, say:[CAU[19]],
  html: anhN("k3-albopictus.jpg", "contrast(1.06) saturate(.95) brightness(1.04)", 0.3) +
        '<div class="hud">' + nguon("k3c20-ng", "Ảnh: James Gathany / CDC · Phạm vi công cộng") + '</div>',
  anim: root => c => {
    cam(root, { t:c.t, z:lerp(1.05,1.19,c.u), x:lerp(26,-24,c.u), y:lerp(-12,10,c.u) });
    kh("k3c20-ng", c.t, .35, 3.0);
  }});
/* ══════════════ ĐOẠN 43–52 — ĐOẠN ĐẠO ĐỨC.
   Từ đây tới hết khối: KHÔNG chữ biên tập, KHÔNG con số trên màn hình,
   không một nhịp đùa nào. Chỉ còn dòng nguồn ảnh (bắt buộc theo mục 8). ══════════════ */

/* "Nhưng thứ khiến chuyện này khác mọi chuyện loài người từng làm thì không nằm ở sinh học."
   Sinh học hiện ra rồi bị trắng xoá đi — cảnh chỉ dài 1,1 giây nên cắt cứng cả hai đầu. */
DANGKY({ id:"k3c21", steps:0, say:[CAU[20]],
  html: anhN("k3-kinh-hien-vi.jpg", "contrast(1.04) saturate(.8) brightness(1.08)", 0.3) +
        '<div class="lop" data-sau="0.92"><svg class="ve"></svg></div>',
  anim: root => {
    const V = phang(root, "ve");
    const r = el("rect", { x:-400, y:-300, width:2100, height:1400, fill:PHONGTHI, opacity:0 }, V);
    return c => {
      cam(root, { t:c.t, z:lerp(1.16,1.04,c.u), x:lerp(-14,12,c.u) });
      op(r, (.80 * ezo(cl((c.t - .18) / .78, 0, 1))).toFixed(3));
    };
  }});
/* "Nó nằm ở chữ ký." — lễ ký Hiệp định Chất lượng Nước Hồ Lớn 1972,
   đúng loại việc câu sau nói tới: hai nước ký một thoả thuận về nước chung. */
DANGKY({ id:"k3c22", steps:0, say:[CAU[21]],
  html: anhN("k3-ky-ket.jpg", "contrast(1.1) saturate(.9) brightness(1.06)", 0.3) +
        '<div class="hud">' + nguon("k3c22-ng", "Ảnh: Byron Schumaker / NARA, 1972 · Phạm vi công cộng") + '</div>',
  anim: root => c => {
    cam(root, { t:c.t, z:lerp(1.18,1.04,c.u), y:lerp(-12,10,c.u) });
    kh("k3c22-ng", c.t, .3, 2.2);
  }});
/* ══════════════ ĐOẠN 44 — MUỖI KHÔNG CÓ BIÊN GIỚI ══════════════ */

/* "Một nước quyết định tiêm chủng thì nước đó tự chịu." */
DANGKY({ id:"k3c23", steps:0, say:[CAU[22]],
  html: anhN("k3-tiem-chung.jpg", "contrast(1.06) saturate(.86) brightness(1.06)", 0.3) +
        '<div class="hud">' + nguon("k3c23-ng", "Ảnh: Laurie Dexter / Hải quân Hoa Kỳ · Phạm vi công cộng") + '</div>',
  anim: root => c => {
    cam(root, { t:c.t, z:lerp(1.16,1.03,c.u), x:lerp(-18,20,c.u) });
    kh("k3c23-ng", c.t, .35, 2.7);
  }});

/* "Một nước đắp đập thì nước ở dưới dòng còn biết đường mà kiện." */
DANGKY({ id:"k3c24", steps:0, say:[CAU[23]],
  html: anhN("k3-dap.jpg", "contrast(1.06) saturate(.92) brightness(1.04)", 0.25) +
        '<div class="lop" data-sau="0.9"><svg class="ve"></svg></div>' +
        '<div class="hud">' + nguon("k3c24-ng", "Ảnh: Joe Mabel · CC BY 3.0") + '</div>',
  anim: root => {
    const V = phang(root, "ve");
    const bien = el("path", { d:"M470 760 L742 236", fill:"none", stroke:"#F6F8F5",
      "stroke-width":4, "stroke-dasharray":"16 12", "stroke-linecap":"round", opacity:0 }, V);
    return c => {
      cam(root, { t:c.t, z:lerp(1.03,1.15,c.u), x:lerp(22,-22,c.u), y:lerp(-12,12,c.u) });
      op(bien, (.92 * ez((c.t - 1.5) / .6)).toFixed(3));
      veDan(bien, ezo(cl((c.t - 1.5) / 1.8, 0, 1)));
      kh("k3c24-ng", c.t, .45, 3.2);
    };
  }});

/* "Còn gene drive thì thả ở một cái làng, nhưng thứ được thả là một chỉ thị di truyền ..." */
DANGKY({ id:"k3c25", steps:0, say:[CAU[24]], html: HAI_LOP,
  anim: root => {
    nenP(root, "k3c25", GIAY, "#E2E9EF");
    const V = phang(root, "ve");
    const CX = 420, CY = 416;
    el("ellipse", { cx:CX + 30, cy:CY + 104, rx:230, ry:30, fill:"#2F4039", opacity:.10 }, V);
    el("path", { d:"M" + (CX-116) + " " + (CY+84) + " l116 -96 l116 96 v100 h-232 Z",
      fill:"#A6B2AA", stroke:"#6E7A73", "stroke-width":5, "stroke-linejoin":"round" }, V);
    el("rect", { x:CX-30, y:CY+104, width:60, height:80, fill:"#7E8A83" }, V);
    el("path", { d:"M" + (CX+86) + " " + (CY+92) + " l86 -72 l86 72 v92 h-172 Z",
      fill:"#BDC7C0", stroke:"#7E8A83", "stroke-width":4.4, "stroke-linejoin":"round" }, V);
    el("rect", { x:CX+150, y:CY+120, width:46, height:64, fill:"#8C9790" }, V);
    const cham = [];
    for (let i = 0; i < 90; i++)
      cham.push(el("circle", { cx:CX, cy:CY, r:9, fill:GEN, opacity:0 }, V));
    return c => {
      cam(root, { t:c.t, z:lerp(1.06,1.0,c.u), x:lerp(-24,22,c.u) });
      cham.forEach((e, i) => {
        const lop = Math.floor(Math.log2(i + 1));            /* 0,1,1,2,2,2,2,... */
        const t0 = .25 + lop*.42;
        const a = ezo(cl((c.t - t0) / 1.2, 0, 1));
        const th = rn(i, 91)*Math.PI*2, rr = (70 + lop*132 + rn(i, 92)*78) * a;
        set(e, { cx:(CX + rr*Math.cos(th)).toFixed(1), cy:(CY + rr*Math.sin(th)*.62).toFixed(1),
                 r:(10 - lop*.9).toFixed(2) });
        op(e, (ez((c.t - t0)/.3) * (.95 - lop*.08)).toFixed(3));
      });
    };
  }});

/* "Muỗi không xin visa, và cũng không dừng ở cột mốc biên giới." — 6,9 giây */
DANGKY({ id:"k3c26", steps:0, say:[CAU[25]],
  html: anhD("k3-bien-gioi.jpg", "contrast(1.05) saturate(.85) brightness(1.06)") +
        '<div class="lop" data-sau="0.55"><svg class="nen"></svg></div>' +
        '<div class="lop" data-sau="0.9"><svg class="ve"></svg></div>' +
        '<div class="hud">' + nguon("k3c26-ng", "Ảnh: Jon Worth, trạm biên giới Ý–Slovenia · CC BY 2.0") + '</div>',
  anim: root => {
    /* ảnh thật làm nền, phủ một lớp sữa mỏng cho đàn muỗi nổi lên */
    const N = phang(root, "nen");
    el("rect", { x:-400, y:-300, width:2100, height:1400, fill:"#EDF2EC", opacity:.42 }, N);
    const V = phang(root, "ve");
    /* đường biên: thứ duy nhất vẽ thêm, vì nó vốn vô hình ngoài đời */
    const barie = el("path", { d:"M-200 452 L1480 452", fill:"none", stroke:MAU,
      "stroke-width":6, "stroke-dasharray":"30 22", "stroke-linecap":"round", opacity:.9 }, V);
    const muoi3 = [];
    for (let i = 0; i < 17; i++)
      muoi3.push(kyHieuMuoi(V, 0, 0, .62 + rn(i, 95)*.34, "#2A3A33"));
    muoi3.forEach(m => op(m, 0));
    return c => {
      cam(root, { t:c.t, z:lerp(1.02,1.12,c.u), y:lerp(14,-16,c.u) });
      muoi3.forEach((m, i) => {
        const sp = .11 + rn(i, 96)*.085;
        const ph = (c.t*sp + rn(i, 97)) % 1;
        const x = lerp(-180, 1460, ph);
        const y = 700 - ph*560 + 42*Math.sin(c.t*1.5 + rn(i, 98)*6.3);
        set(m, { transform:"translate(" + x.toFixed(1) + "," + y.toFixed(1) + ") scale(" +
          (.62 + rn(i, 95)*.34).toFixed(2) + ")" });
        op(m, (Math.sin(ph*Math.PI) * .92 * ez((c.t - .25 - i*.055)/.4)).toFixed(3));
      });
      set(barie, { "stroke-dashoffset": (-c.t * 26).toFixed(1) });
      kh("k3c26-ng", c.t, .7, 4.0);
    };
  }});

/* ══════════════ ĐOẠN 45 — BA LẦN THẾ GIỚI THỬ TRẢ LỜI ══════════════ */

/* "Năm hai nghìn không trăm mười sáu, Viện Hàn lâm Quốc gia Hoa Kỳ ra hẳn một báo cáo ..." */
DANGKY({ id:"k3c27", steps:0, say:[CAU[26]],
  html: anhN("k3-vien-han-lam.jpg", "contrast(1.0) saturate(.55) brightness(1.12)", 0.2) +
        '<div class="lop" data-sau="0.5"><svg class="nen"></svg></div>' +
        '<div class="lop" data-sau="0.85"><svg class="ve"></svg></div>' +
        '<div class="hud">' + nguon("k3c27-ng", "Ảnh: G. Edward Johnson, Viện Hàn lâm Quốc gia Hoa Kỳ · CC BY 4.0") + '</div>',
  anim: root => {
    const N = phang(root, "nen");
    el("rect", { x:-400, y:-300, width:2100, height:1400, fill:GIAY, opacity:.84 }, N);
    const V = phang(root, "ve");
    el("path", { d:"M330 588 L1030 588", stroke:"#4C5A53", "stroke-width":5,
      "stroke-linecap":"round" }, V);
    const nguong = el("path", { d:"M300 268 L1060 268", fill:"none", stroke:MAU,
      "stroke-width":3, "stroke-dasharray":"14 11", opacity:0 }, V);
    const khoi = [];
    for (let i = 0; i < 6; i++){
      const w = 320 - i*14;
      khoi.push(el("rect", { x:(680 - w/2).toFixed(1), y:(560 - i*42).toFixed(0),
        width:w.toFixed(1), height:38, rx:5, fill:"#FDFEFD", stroke:"#5E6D66",
        "stroke-width":3.4, opacity:0 }, V));
    }
    return c => {
      cam(root, { t:c.t, z:lerp(1.02,1.13,c.u), y:lerp(16,-14,c.u) });
      op(nguong, (.9 * ez((c.t - .3) / .6)).toFixed(3));
      veDan(nguong, ezo(cl((c.t - .3) / 1.4, 0, 1)));
      khoi.forEach((e, i) => {
        const t0 = 1.1 + i*.78, a = ezo(cl((c.t - t0) / .62, 0, 1));
        op(e, ez((c.t - t0) / .3).toFixed(3));
        set(e, { transform:"translate(0," + (-150 * (1 - a)).toFixed(1) + ")" });
      });
      kh("k3c27-ng", c.t, .8, 4.2);
    };
  }});

/* "Năm hai nghìn không trăm mười tám, Công ước Đa dạng Sinh học ra một quyết định ..." */
DANGKY({ id:"k3c28", steps:0, say:[CAU[27]], html: HAI_LOP,
  anim: root => {
    nenP(root, "k3c28", GIAY2, "#D9E0DA");
    const V = phang(root, "ve");
    const g = el("g", { transform:"translate(640 372)" }, V);
    el("rect", { x:-286, y:-232, width:572, height:464, fill:"#FFFFFF",
      stroke:"#CDD5CE", "stroke-width":2 }, g);
    [-92, 44].forEach((y, k) => {
      el("rect", { x:-238, y:y - 34, width:68, height:68, rx:6, fill:"#F2F5F2",
        stroke:"#9EAAA3", "stroke-width":3 }, g);
      for (let i = 0; i < 3; i++)
        el("rect", { x:-146, y:y - 26 + i*22, width:(230 + rn(k*3+i, 101)*120).toFixed(0),
          height:7, rx:3.5, fill:"#B6C0B9" }, g);
    });
    const dau = [-92, 44].map((y, k) => {
      const d = el("g", { opacity:0 }, g);
      el("circle", { cx:-204, cy:y, r:46, fill:"none", stroke:MAU, "stroke-width":7,
        opacity:.9 }, d);
      el("path", { d:"M" + (-230) + " " + y + " l18 20 l40 -44", fill:"none", stroke:MAU,
        "stroke-width":8, "stroke-linecap":"round", "stroke-linejoin":"round" }, d);
      return d;
    });
    return c => {
      cam(root, { t:c.t, z:lerp(1.04,1.14,c.u), x:lerp(16,-18,c.u) });
      dau.forEach((d, k) => {
        const t0 = 1.5 + k*2.1, a = ezo(cl((c.t - t0) / .4, 0, 1));
        op(d, ez((c.t - t0) / .22).toFixed(3));
        set(d, { transform:"translate(" + (-14*(1-a)).toFixed(1) + "," + (-26*(1-a)).toFixed(1) +
          ") rotate(" + (-16*(1-a)).toFixed(1) + " -204 " + (k ? 44 : -92) + ") scale(" +
          (1 + .7*(1-a)).toFixed(3) + ")" });
      });
    };
  }});

/* "Đến năm hai nghìn không trăm hai mươi tư, có nước đòi hoãn toàn bộ, ..." */
DANGKY({ id:"k3c29", steps:0, say:[CAU[28]],
  html: anhN("k3-hoi-nghi.jpg", "contrast(1.05) saturate(.72) brightness(1.06)", 0.3) +
        '<div class="hud">' + nguon("k3c29-ng", "Ảnh minh hoạ: Bộ Ngoại giao Hoa Kỳ · Phạm vi công cộng") + '</div>',
  anim: root => c => {
    /* đẩy sâu vào hàng ghế đại biểu: giữ khung ở đám đông, không ở phông nền hội nghị */
    cam(root, { t:c.t, z:lerp(1.62,1.44,c.u), y:lerp(118,96,c.u), x:lerp(-16,14,c.u) });
    kh("k3c29-ng", c.t, .2, 1.6);
  }});
/* ══════════════ ĐOẠN 46 — BURKINA FASO, THÁNG 8/2025 ══════════════ */

/* "Rồi thực tế trả lời bằng một chuyện nhỏ." — 11,7 giây, một hình, kéo chậm */
DANGKY({ id:"k3c30", steps:0, say:[CAU[29]],
  html: anhD("k3-burkina.jpg", "contrast(1.04) saturate(.92) brightness(1.02)") +
        '<div class="hud">' + nguon("k3c30-ng", "Ảnh: Jeff Attaway, Ouagadougou 2009 · CC BY 2.0") + '</div>',
  anim: root => c => {
    cam(root, { t:c.t, z:lerp(1.34,1.12,c.u), x:lerp(-26,24,c.u), y:lerp(18,-16,c.u) });
    kh("k3c30-ng", c.t, 1.0, 4.4);
  }});

/* "Tháng tám năm hai nghìn không trăm hai mươi lăm, chính phủ Burkina Faso đình chỉ ..." */
DANGKY({ id:"k3c31", steps:0, say:[CAU[30]], html: HAI_LOP,
  anim: root => {
    nenP(root, "k3c31", GIAY, GIAY2);
    const V = phang(root, "ve");
    const g = el("g", { transform:"translate(640 372) rotate(-2.5)" }, V);
    el("rect", { x:-250, y:-312, width:500, height:624, fill:"#FFFFFF",
      stroke:"#CFD6CF", "stroke-width":2 }, g);
    el("rect", { x:-250, y:-312, width:500, height:54, fill:"#2B3A33" }, g);
    for (let i = 0; i < 17; i++)
      el("rect", { x:-206, y:-220 + i*26, width:(150 + rn(i, 121)*260).toFixed(0), height:8, rx:4,
        fill:"#B6C0B9" }, g);
    el("path", { d:"M-206 250 L-10 250", stroke:"#9AA59E", "stroke-width":2.4 }, g);
    const dau = el("g", { opacity:0 }, V);
    el("rect", { x:-168, y:-62, width:336, height:124, rx:10, fill:"none", stroke:MAU,
      "stroke-width":9, opacity:.92 }, dau);
    el("rect", { x:-138, y:-26, width:276, height:16, rx:8, fill:MAU, opacity:.9 }, dau);
    el("rect", { x:-138, y:10, width:196, height:16, rx:8, fill:MAU, opacity:.9 }, dau);
    return c => {
      cam(root, { t:c.t, z:lerp(1.03,1.12,c.u), y:lerp(-10,12,c.u) });
      const a = ezo(cl((c.t - .55) / .36, 0, 1));
      op(dau, ez((c.t - .55) / .18).toFixed(3));
      set(dau, { transform:"translate(640,400) rotate(" + (-12 + 4*a).toFixed(2) +
        ") scale(" + (1 + 1.5*(1 - a)).toFixed(3) + ")" });
    };
  }});

/* ══════════════ ĐOẠN 47 — AI ĐƯỢC QUYỀN BẤM ══════════════ */

/* "Nghĩa là câu hỏi \"ai được quyền bấm\" vẫn chưa ai trả lời được." */
DANGKY({ id:"k3c32", steps:0, say:[CAU[31]], html: HAI_LOP,
  anim: root => {
    nenP(root, "k3c32", PHONGTHI, "#DCE4E8");
    const V = phang(root, "ve");
    const g = nut(V, "k3c32", 640, 372, 118);
    const BAN = [[-1,0],[1,0],[0,-1],[0,1]];
    const tay = BAN.map((d, i) => {
      const h = el("g", { opacity:0 }, V);
      el("path", { d:"M-58 14 L-58 86 L-18 86 L-18 14 Z M-10 86 c30 14 72 14 94 0 " +
        "c22 -12 34 -60 34 -80 c0 -16 -12 -24 -30 -24 L32 -18 c10 -26 12 -56 6 -78 " +
        "c-8 -24 -42 -26 -48 -2 c-6 24 -8 62 2 90 Z", fill:"#E3C4A4", stroke:"#B08E6E",
        "stroke-width":4, "stroke-linejoin":"round" }, h);
      h.__d = d; return h;
    });
    return c => {
      cam(root, { t:c.t, z:lerp(1.02,1.10,c.u) });
      nhipNut(g, c.t);
      tay.forEach((h, i) => {
        const t0 = .35 + i*.42;
        const a = ezo(cl((c.t - t0) / .85, 0, 1));          /* vươn tới */
        const b = ezo(cl((c.t - t0 - 1.5) / .9, 0, 1));     /* rồi rụt lại */
        const k = a - b*.86;
        const d = h.__d;
        const x = 640 + d[0] * lerp(620, 232, k), y = 372 + d[1] * lerp(560, 214, k);
        const ang = Math.atan2(-d[1], -d[0]) * 180/Math.PI + 90;
        set(h, { transform:"translate(" + x.toFixed(1) + "," + y.toFixed(1) + ") rotate(" +
          ang.toFixed(1) + ") scale(" + (.62 + .16*k).toFixed(3) + ")" });
        op(h, (ez((c.t - t0)/.3) * (1 - .35*b)).toFixed(3));
      });
    };
  }});

/* "Các nước gánh sốt rét nặng nhất nói rằng hoãn thêm một năm là thêm mấy trăm nghìn ngôi mộ." */
DANGKY({ id:"k3c33", steps:0, say:[CAU[32]],
  html: anhN("k3-man-muoi.jpg", "contrast(1.04) saturate(.94) brightness(1.02)", 0.3) +
        '<div class="hud">' + nguon("k3c33-ng", "Ảnh: President's Malaria Initiative · Phạm vi công cộng") + '</div>',
  anim: root => c => {
    cam(root, { t:c.t, z:lerp(1.03,1.16,c.u), x:lerp(20,-22,c.u), y:lerp(-10,12,c.u) });
    kh("k3c33-ng", c.t, .5, 3.4);
  }});

/* "Phía bên kia nói rằng một quyết định không lấy lại được thì không nên để một nước ký thay cả hành tinh."
   Ảnh Trái Đất thật (Apollo 17), cắt tròn để bỏ nền đen — khối 3 đang ở tông sáng.
   Hộp bù lệch left:179.2/top:100.8 vì .lop bị nới inset:-14% (bẫy mục 11.2). */
DANGKY({ id:"k3c34", steps:0, say:[CAU[33]],
  html:'<div class="lop" data-sau="0.15"><svg class="nen"></svg></div>' +
       '<div class="lop" data-sau="0.45"><div style="position:absolute;left:179.2px;top:100.8px;' +
       'width:1280px;height:720px"><div style="position:absolute;left:452px;top:14px;width:692px;' +
       'height:692px;border-radius:50%;overflow:hidden;box-shadow:0 18px 60px rgba(20,40,34,.28)">' +
       '<img src="anh/k3-traidat.jpg" alt="" style="width:100%;height:100%;object-fit:cover;' +
       'transform:scale(1.14);filter:contrast(1.04) saturate(1.02) brightness(1.04)"></div></div></div>' +
       '<div class="lop" data-sau="0.9"><svg class="ve"></svg></div>' +
       '<div class="hud">' + nguon("k3c34-ng", "Ảnh: phi hành đoàn Apollo 17 / NASA, 1972 · Phạm vi công cộng") + '</div>',
  anim: root => {
    nenP(root, "k3c34", GIAY, "#DEE6E2");
    const V = phang(root, "ve");
    const ky = el("path", { d:"M606 492 c40 -72 80 -60 84 -8 c4 50 -34 76 -46 50 " +
      "c-12 -26 28 -80 88 -80 c46 0 38 48 72 48 c34 0 36 -42 72 -42",
      fill:"none", stroke:"#16211B", "stroke-width":8, "stroke-linecap":"round", opacity:.95 }, V);
    return c => {
      cam(root, { t:c.t, z:lerp(1.04,1.12,c.u), y:lerp(8,-8,c.u) });
      veDan(ky, ezo(cl((c.t - .08) / 1.15, 0, 1)));
      kh("k3c34-ng", c.t, .25, 1.5);
    };
  }});
/* "Cả hai bên đều không nói sai." */
DANGKY({ id:"k3c35", steps:0, say:[CAU[34]],
  html: anhN("k3-can.jpg", "contrast(1.06) saturate(.9) brightness(1.1)", 0.3) +
        '<div class="hud">' + nguon("k3c35-ng", "Ảnh: Wellcome Collection · CC BY 4.0") + '</div>',
  anim: root => c => {
    cam(root, { t:c.t, z:lerp(1.26,1.12,c.u), x:lerp(-70,-44,c.u), y:lerp(26,10,c.u) });
    kh("k3c35-ng", c.t, .2, 1.9);
  }});
/* "Đó mới là chỗ khó." — nhịp lặng: cái nút, không ai chạm */
DANGKY({ id:"k3c36", steps:0, say:[CAU[35]], html: HAI_LOP,
  anim: root => {
    nenP(root, "k3c36", PHONGTHI, "#D6DEE2");
    const V = phang(root, "ve");
    const g = nut(V, "k3c36", 640, 372, 118);
    const vong = el("circle", { cx:640, cy:372, r:118, fill:"none", stroke:MAU,
      "stroke-width":2.4, opacity:0 }, V);
    return c => {
      cam(root, { t:c.t, z:lerp(1.14,1.02,c.u), y:lerp(-12,10,c.u) });
      nhipNut(g, c.t);
      const b = (c.t * .42) % 1;
      set(vong, { r:(118 + 150*b).toFixed(1) });
      op(vong, (.34 * (1 - b)).toFixed(3));
    };
  }});

/* ══════════════ ĐOẠN 48–50 — ĐÓNG VÒNG: BÔNG LAN PLATANTHERA OBTUSATA ══════════════
   Đúng tấm ảnh mở đầu tập (khối 1, cảnh k1c08b, giây ~38): NPS / Jacob W. Frank,
   Denali, phạm vi công cộng. Khối 1 ĐẨY VÀO và đi lên; ở đây làm NGƯỢC LẠI —
   mở ở cận cảnh chùm hoa rồi KÉO RA và hạ xuống, kết ở cả cây đứng một mình. */

/* "Và thật thú vị khi nhận ra rằng bông hoa ở đầu tập lại là câu trả lời gọn nhất." — 11,3 giây */
DANGKY({ id:"k3c37", steps:0, say:[CAU[36]],
  html: anhD("k3-lan-vong.jpg", "contrast(1.03) saturate(1.02) brightness(1.06)") +
        '<div class="hud">' + nguon("k3c37-ng", "Ảnh: NPS / Jacob W. Frank, Denali · Phạm vi công cộng") + '</div>',
  anim: root => c => {
    /* ĐIỂM NỐI: khối 1 (k1c08b) KẾT ở z=1,20 · y=−20 · x=+8.
       Mở đúng ở đó rồi kéo ngược ra, cú đóng vòng mới khoá được. */
    cam(root, { t:c.t, z:lerp(1.20,1.02,c.u), x:lerp(8,-10,c.u), y:lerp(-20,18,c.u) });
    kh("k3c37-ng", c.t, 1.1, 4.7);
  }});

/* "Năm hai nghìn không trăm hai mươi, trên tạp chí của Viện Hàn lâm Khoa học Quốc gia Hoa Kỳ, ..." */
DANGKY({ id:"k3c38", steps:0, say:[CAU[37]],
  html: anhD("k3-lan-can.jpg", "contrast(1.05) saturate(1.0) brightness(1.04)") +
        '<div class="hud">' + nguon("k3c38-ng", "Ảnh: Rob Routledge, Sault College, Bugwood.org · CC BY 3.0") + '</div>',
  anim: root => c => {
    cam(root, { t:c.t, z:lerp(1.14,1.40,c.u), x:lerp(-14,12,c.u), y:lerp(16,-14,c.u) });
    kh("k3c38-ng", c.t, .6, 3.6);
  }});

/* "Gần năm mươi giờ ngồi đếm ngoài rừng, họ ghi được năm mươi bảy lượt muỗi tới ăn mật, và đúng một con bướm đêm." */
DANGKY({ id:"k3c39", steps:0, say:[CAU[38]], html: HAI_LOP,
  anim: root => {
    nenP(root, "k3c39", GIAY, "#E7EDE7");
    const V = phang(root, "ve");
    const vach = [];
    for (let i = 0; i < 57; i++){
      const r = Math.floor(i/12), k = i % 12;
      const x = 196 + k*58 + Math.floor(k/5)*18, y = 196 + r*74;
      vach.push(el("path", { d:"M" + x + " " + y + " L" + (x+14) + " " + (y+52),
        stroke:RUNG, "stroke-width":7, "stroke-linecap":"round", fill:"none", opacity:0 }, V));
    }
    const buom = el("g", { opacity:0 }, V);
    el("ellipse", { cx:0, cy:0, rx:9, ry:26, fill:"#8E7F6A" }, buom);
    el("path", { d:"M-6 -14 q-62 -34 -74 10 q-8 44 68 26 Z", fill:"#C9BBA2", opacity:.95 }, buom);
    el("path", { d:"M6 -14 q62 -34 74 10 q8 44 -68 26 Z", fill:"#C9BBA2", opacity:.95 }, buom);
    el("path", { d:"M-4 -24 L-22 -48 M4 -24 L22 -48", stroke:"#8E7F6A", "stroke-width":3,
      "stroke-linecap":"round" }, buom);
    return c => {
      cam(root, { t:c.t, z:lerp(1.02,1.12,c.u), y:lerp(-12,14,c.u) });
      vach.forEach((p, i) => {
        const t0 = .12 + i*.052;
        veDan(p, ezo(cl((c.t - t0) / .2, 0, 1)));
        op(p, (.92 * ez((c.t - t0) / .12)).toFixed(3));
      });
      const a = ezo(cl((c.t - 3.5) / 1.1, 0, 1));
      op(buom, ez((c.t - 3.5) / .5).toFixed(3));
      set(buom, { transform:"translate(" + (980 + 26*Math.sin(c.t*1.1)).toFixed(1) + "," +
        (lerp(560, 470, a) + 16*Math.sin(c.t*1.7)).toFixed(1) + ") scale(" +
        (.9 + .25*a).toFixed(3) + ")" });
    };
  }});

/* "Bịt hoa lại không cho côn trùng vào thì tỉ lệ đậu quả tụt từ gần chín phần mười xuống còn hơn một phần mười." */
DANGKY({ id:"k3c40", steps:0, say:[CAU[39]], html: HAI_LOP,
  anim: root => {
    nenP(root, "k3c40", GIAY2, "#DDE4DD");
    const V = phang(root, "ve");
    const cot = [9, 1].map((n, k) => {
      const x = k ? 862 : 418, g = el("g", {}, V);
      const qua = [];
      for (let i = 0; i < 10; i++){
        const y = 596 - i*47;
        el("circle", { cx:x, cy:y, r:21, fill:"#FFFFFF", stroke:"#93A09A",
          "stroke-width":2.8, "stroke-dasharray":"6 5" }, g);
        qua.push(el("circle", { cx:x, cy:y, r:21, fill: i < n ? RUNG : "none", opacity:0 }, g));
      }
      g.__qua = qua; g.__n = n; g.__x = x; return g;
    });
    /* cái túi lưới bịt hoa — chỉ ở cột phải */
    const tui = el("g", { opacity:0 }, V);
    el("path", { d:"M778 118 L946 118 L982 540 q-120 44 -240 0 Z", fill:"#E7EEEA",
      opacity:.62, stroke:"#5E6D66", "stroke-width":4 }, tui);
    for (let i = 0; i < 9; i++)
      el("path", { d:"M" + (792 + i*22) + " 118 L" + (786 + i*25) + " 552", stroke:"#9EAAA3",
        "stroke-width":2, opacity:.75, fill:"none" }, tui);
    for (let i = 0; i < 10; i++)
      el("path", { d:"M776 " + (130 + i*44) + " L984 " + (130 + i*44), stroke:"#7E8D86",
        "stroke-width":2, opacity:.75, fill:"none" }, tui);
    return c => {
      cam(root, { t:c.t, z:lerp(1.02,1.11,c.u), x:lerp(18,-20,c.u) });
      cot.forEach((g, k) => g.__qua.forEach((e, i) => {
        if (i >= g.__n) return;
        const t0 = (k ? 2.5 : .5) + i*.13;
        op(e, (.92 * ez((c.t - t0) / .3)).toFixed(3));
        set(e, { r:(21 * (.4 + .6*ezo(cl((c.t - t0)/.45, 0, 1)))).toFixed(2) });
      }));
      op(tui, (.95 * ez((c.t - 1.9) / .6)).toFixed(3));
      set(tui, { transform:"translate(0," + (-220 * (1 - ezo(cl((c.t - 1.9)/.9, 0, 1)))).toFixed(1) +
        ")" });
    };
  }});

/* "Con muỗi thụ phấn cho bông lan đó là một loài muỗi tuyết tan, và nó không nằm trong danh sách truyền bệnh." */
DANGKY({ id:"k3c41", steps:0, say:[CAU[40]],
  html: anhN("k3-muoi-tuyet.jpg", "contrast(1.05) saturate(.95) brightness(1.05)", 0.3) +
        '<div class="hud">' + nguon("k3c41-ng", "Ảnh: Owen Strickland · CC BY 4.0") + '</div>',
  anim: root => c => {
    cam(root, { t:c.t, z:lerp(1.16,1.04,c.u), x:lerp(-16,14,c.u) });
    kh("k3c41-ng", c.t, .2, 1.5);
  }});

/* "Cái nút kia không nhằm vào nó." — nhắc lại nguyên xi cảnh k3c13, bên kia của tập */
DANGKY({ id:"k3c42", steps:0, say:[CAU[41]],
  html: HAI_LOP +
       '<div class="lop" data-sau="0.78"><div style="position:absolute;left:179.2px;top:100.8px;' +
       'width:1280px;height:720px"><div id="k3c42-anh" style="position:absolute;left:836px;top:188px;' +
       'width:268px;height:268px;border-radius:50%;overflow:hidden;opacity:0;border:6px solid #F6F8F5;' +
       'box-shadow:0 12px 40px rgba(20,40,34,.32)">' +
       '<img src="anh/k3-muoi-tuyet.jpg" alt="" style="width:100%;height:100%;object-fit:cover;' +
       'filter:contrast(1.05) saturate(.95) brightness(1.04)"></div></div></div>' +
       '<div class="hud">' + nguon("k3c42-ng", "Ảnh: Owen Strickland · CC BY 4.0") + '</div>',
  anim: root => {
    nenP(root, "k3c42", PHONGTHI, "#DCE4E8");
    const V = phang(root, "ve");
    const g = nut(V, "k3c42", 430, 362, 104);
    const vong = ngamVong(V, 430, 362, 176, MAU); op(vong, 0);
    const hoa = el("g", { opacity:0 }, V);
    el("path", { d:"M970 648 L970 496", stroke:RUNG, "stroke-width":7,
      "stroke-linecap":"round", fill:"none" }, hoa);
    el("path", { d:"M970 624 q-64 -28 -78 10 q56 26 78 -10 Z", fill:RUNG, opacity:.85 }, hoa);
    for (let i = 0; i < 7; i++)
      el("circle", { cx:(970 + (rn(i,131)-.5)*34).toFixed(1), cy:(496 - i*17).toFixed(1),
        r:(9 - i*.5).toFixed(1), fill:"#C9DBAE", stroke:RUNG, "stroke-width":2 }, hoa);
    return c => {
      cam(root, { t:c.t, z:lerp(1.02,1.12,c.u), x:lerp(14,-16,c.u) });
      nhipNut(g, c.t);
      op(vong, (.9 * ez((c.t - .4) / .6)).toFixed(3));
      set(vong, { transform:"rotate(" + (c.t * 9).toFixed(2) + " 430 362)" });
      op(hoa, ez((c.t - 1.4) / .7).toFixed(3));
      const A = document.getElementById("k3c42-anh");
      if (A) {
        const q = ezo(cl((c.t - 2.4) / .9, 0, 1));
        A.style.opacity = ez((c.t - 2.4) / .5).toFixed(3);
        A.style.transform = "translate(" + (46*(1-q)).toFixed(1) + "," +
          (10*Math.sin(c.t*1.1)).toFixed(2) + "px) scale(" + (.82 + .18*q).toFixed(3) + ")";
      }
      kh("k3c42-ng", c.t, 2.9, 6.4);
    };
  }});

/* "Có điều cả tập này rốt cuộc chỉ xoay quanh đúng một câu: chúng ta biết rõ mình nhằm vào ai, ..." */
DANGKY({ id:"k3c43", steps:0, say:[CAU[42]], html: HAI_LOP,
  anim: root => {
    nenP(root, "k3c43", PHONGTHI, "#D9E1E6");
    const V = phang(root, "ve");
    const vong = [];
    for (let i = 0; i < 9; i++)
      vong.push(el("circle", { cx:640, cy:372, r:0, fill:"none", stroke:GEN,
        "stroke-width":(7 - i*.5).toFixed(1), opacity:0 }, V));
    const ngam2 = ngamVong(V, 640, 372, 92, MAU);
    el("circle", { cx:640, cy:372, r:7, fill:MAU }, ngam2);
    return c => {
      cam(root, { t:c.t, z:lerp(1.02,1.14,c.u) });
      op(ngam2, (.95 * ez(c.t / .5)).toFixed(3));
      set(ngam2, { transform:"rotate(" + (-c.t * 7).toFixed(2) + " 640 372)" });
      vong.forEach((e, i) => {
        const ph = ((c.t * .30) + i/9) % 1;
        set(e, { r:(92 + ph * 1180).toFixed(1) });
        op(e, (.78 * Math.sin(ph*Math.PI) * ez((c.t - .6)/.8)).toFixed(3));
      });
    };
  }});

/* ══════════════ ĐOẠN 51 — CÁI NÚT CHƯA AI MỞ NẮP ══════════════ */

/* "Và đó, thưa quý vị và các bạn, là lý do một cái nút đã nằm sẵn trên bàn gần mười năm nay ..." */
DANGKY({ id:"k3c44", steps:0, say:[CAU[43]], html: HAI_LOP,
  anim: root => {
    nenP(root, "k3c44", PHONGTHI, "#D2DADF");
    const V = phang(root, "ve");
    const g = nut(V, "k3c44", 640, 372, 118);
    const nap = el("g", {}, V);
    el("path", { d:"M470 476 L470 400 a170 170 0 0 1 340 0 L810 476 Z", fill:"#DCE9F0",
      opacity:.46, stroke:"#8FA6B2", "stroke-width":5, "stroke-linejoin":"round" }, nap);
    el("rect", { x:446, y:470, width:388, height:22, rx:7, fill:"#C3D1D9",
      stroke:"#8FA6B2", "stroke-width":4 }, nap);
    el("path", { d:"M556 318 q86 -52 176 2", fill:"none", stroke:"#FFFFFF",
      "stroke-width":11, "stroke-linecap":"round", opacity:.55 }, nap);
    el("rect", { x:612, y:454, width:56, height:16, rx:6, fill:"#A9BCC6",
      stroke:"#7F96A2", "stroke-width":3 }, nap);
    const bui = [];
    for (let i = 0; i < 34; i++)
      bui.push(el("circle", { cx:0, cy:0, r:(1 + rn(i, 141)*2.2).toFixed(2),
        fill:"#6E7C84", opacity:0 }, V));
    return c => {
      cam(root, { t:c.t, z:lerp(1.08,1.0,c.u), y:lerp(-8,8,c.u) });
      nhipNut(g, c.t);
      bui.forEach((e, i) => {
        const ph = (c.t*(.05 + rn(i, 142)*.07) + rn(i, 143)) % 1;
        set(e, { cx:(120 + rn(i, 144)*1040).toFixed(1), cy:(760 - ph*860).toFixed(1) });
        op(e, (Math.sin(ph*Math.PI) * .42).toFixed(3));
      });
    };
  }});

/* ══════════════ ĐOẠN 52 — CHÀO ══════════════ */

/* "Hy vọng anh chị em thích tập này." */
DANGKY({ id:"k3c45", steps:0, say:[CAU[44]],
  html: anhN("k3-rung-sang.jpg", "contrast(1.04) saturate(1.02) brightness(1.08)", 0.3) +
        '<div class="hud">' + nguon("k3c45-ng", "Ảnh: BLM mypubliclands, Steese NCA · Phạm vi công cộng") + '</div>',
  anim: root => c => {
    cam(root, { t:c.t, z:lerp(1.02,1.12,c.u), x:lerp(16,-16,c.u) });
    kh("k3c45-ng", c.t, .25, 1.8);
  }});

/* "Nhớ để lại một lượt thích để chúng tớ biết." */
DANGKY({ id:"k3c46", steps:0, say:[CAU[45]], html: HAI_LOP,
  anim: root => {
    nenP(root, "k3c46", GIAY, GIAY2);
    const V = phang(root, "ve");
    const g = el("g", {}, V);
    el("path", { d:"M-54 10 L-54 118 L-14 118 L-14 10 Z M-2 118 C34 134 86 134 112 118 " +
      "C136 104 150 46 150 22 C150 4 136 -6 114 -6 L46 -6 C58 -36 62 -70 54 -96 " +
      "C46 -122 6 -124 -2 -96 C-10 -68 -14 -24 -2 10 Z", fill:MAU, stroke:"#8A2419",
      "stroke-width":5, "stroke-linejoin":"round" }, g);
    const vong = el("circle", { cx:48, cy:16, r:150, fill:"none", stroke:MAU,
      "stroke-width":5, opacity:0 }, V);
    return c => {
      cam(root, { t:c.t, z:lerp(1.0,1.08,c.u) });
      const a = ezo(cl(c.t / .6, 0, 1));
      set(g, { transform:"translate(592,300) scale(" +
        (.62 + .4*a + .035*Math.sin(c.t*2.4)).toFixed(3) + ")" });
      const b = (c.t * .46) % 1;
      set(vong, { transform:"translate(592,300) scale(" + (.62 + .4*a).toFixed(3) + ")" });
      set(vong, { r:(110 + 150*b).toFixed(1) });
      op(vong, (.45 * (1 - b) * ez((c.t - .4)/.4)).toFixed(3));
    };
  }});

/* "Còn nếu anh chị em nghĩ cái nút đó nên được bấm, hoặc nên khoá lại vĩnh viễn, ..."
   Cảnh CUỐI CÙNG của tập: bộ máy báo thời lượng 13 giây trong khi thực tế chỉ còn
   2,2 giây, nên mọi chuyển động ở đây bám c.t chứ không bám c.u. */
DANGKY({ id:"k3c47", steps:0, say:[CAU[46]],
  html: HAI_LOP +
       '<div class="hud">' +
       '<div class="tx" id="k3c47-te" style="left:0;top:312px;width:1280px;text-align:center">' +
       '<div style="font:300 44px/1.1 system-ui;letter-spacing:.30em;color:' + CHUTOI + '">' +
       'THẾ GIỚI VIỄN TƯỞNG</div>' +
       '<div id="k3c47-ke" style="margin:24px auto 0;height:3px;width:0;background:' + MAU + '"></div>' +
       '</div></div>',
  anim: root => {
    nenP(root, "k3c47", GIAY, GIAY2);
    const V = phang(root, "ve");
    const bong = [];
    for (let i = 0; i < 12; i++){
      const w = 118 + rn(i, 151)*112, h = 56 + rn(i, 152)*24;
      const g = el("g", { opacity:0 }, V);
      el("rect", { x:0, y:0, width:w, height:h, rx:h/2.3,
        fill: i % 3 === 0 ? MAU : (i % 3 === 1 ? NUOCDONG : "#8795A0"), opacity:.92 }, g);
      el("path", { d:"M" + (w*.22) + " " + h + " l0 26 l26 -26 Z",
        fill: i % 3 === 0 ? MAU : (i % 3 === 1 ? NUOCDONG : "#8795A0"), opacity:.92 }, g);
      for (let k = 0; k < 3; k++)
        el("rect", { x:22, y:(13 + k*15).toFixed(0),
          width:(w - 44 - rn(i, 160+k)*64).toFixed(0), height:7, rx:3.5,
          fill:"#FFFFFF", opacity:.75 }, g);
      g.__w = w; bong.push(g);
    }
    return c => {
      cam(root, { t:c.t, z:lerp(1.0, 1.10, cl(c.t/2.4, 0, 1)) });
      bong.forEach((g, i) => {
        const t0 = .04 + i*.13, a = cl((c.t - t0) / 2.2, 0, 1);
        /* dạt ra hai rìa, chừa khoảng giữa cho thẻ tên kênh */
        /* dạt hẳn ra hai rìa, tính theo chiều rộng thật để không trùm lên thẻ tên kênh */
        const q = rn(i, 153);
        const x = q < .5 ? 8 + q*2*(286 - g.__w) : 1272 - g.__w - (q - .5)*2*(286 - g.__w);
        set(g, { transform:"translate(" + x.toFixed(1) + "," +
          (760 - 820*ezo(a)).toFixed(1) + ")" });
        op(g, (ez(a/.14) * (1 - ez((a - .80)/.20))).toFixed(3));
      });
      kh("k3c47-te", c.t, .95, 1e9, .55);
      const e = document.getElementById("k3c47-ke");
      if (e) e.style.width = (286 * ezo(cl((c.t - 1.25) / .85, 0, 1))).toFixed(1) + "px";
    };
  }});

})();
