/* Khối 1 — MỞ — nút bấm xoá sổ một loài đã có thật
   CHỈ chủ khối này được ghi file này. Xem slide/HUONG-DAN-DUNG-CANH.md

   đoạn 1–17 · câu 1–53 · giây 0,0 → 201,0 · 50 cảnh
   Tông SÁNG (hệ --giay / --phongthi) theo §B.3 của quy chuẩn. Khối 2 chìm tối, khối 3 sáng lại.

   Mọi chuyển động là HÀM THUẦN của c.t — không CSS animation, không hẹn giờ,
   không Math.random, không biến đếm tăng dần.

   BA CÁI BẪY (§11 hợp đồng) đã tránh thế nào:
   · 11.1 veDan: mọi đường vẽ dần đều nằm TRỰC TIẾP trong lớp LV (hệ toạ độ = px khung
     hình, không có <g transform="scale()">, không non-scaling-stroke). Không có chỗ nào
     đo chiều dài đường trong một hệ toạ độ rồi vẽ ở hệ khác.
   · 11.2 inset:-14%: MỌI cảnh đều có svg.bd (lớp LM) nên bộ máy trang KHÔNG tự gắn .ov;
     tự lớp nào cũng khai inset:-14% và viewBox VB14, nên 1 đơn vị SVG = 1 px khung hình
     và gốc (0,0) vẫn là góc trái trên của KHUNG. Mọi toạ độ tuyệt đối đặt tay (left/top)
     đều nằm trong .hud (vốn inset:0).
   · 11.3 hoà hình nuốt cảnh ngắn: đã vá trong trang (hoaCua). Cảnh ngắn nhất của khối
     này là 0,86s (c31) — vẫn trên ngưỡng 0,55s, và nhịp của nó là nhịp "cú giật".

   ẢNH: chỉ PD / CC0 / CC BY (không CC BY-SA). Danh mục ở canh/nguon-khoi-1.md.
   Chủ trương của tập: KHAI THÁC ẢNH THẬT, không vẽ con muỗi. Hình vẽ SVG chỉ dùng cho
   thứ vốn trừu tượng (cái nút, số đếm, tỉ lệ loài, đồ thị Nha Trang) — đúng §12.

   CHỮ BIÊN TẬP: 2 lần (c27 "theo WHO", c45 "WOLBACHIA"). Số, đơn vị, tên khoa học,
   nhãn địa danh và dòng nguồn là KẾT CẤU, không tính (đúng §2 Luật B).
*/
(() => {
"use strict";

/* ───────── màu (hằng số: var(--x) không dùng được trong thuộc tính SVG) ───────── */
const C = {
  giay:"#F6F8F5", giay2:"#ECEFEA", den:"#0B0B0B",
  mau:"#C0392B",      /* đỏ máu — màu nhấn DUY NHẤT */
  nuocdong:"#2F7D6E", phongthi:"#EDF2F4", gen:"#6C8EBF", rung:"#3E7B3A", da:"#D9A066",
  chuToi:"#15201A", nam:"#64808F", mo:"#78857E", bo:"#C4CDC6", chu:"#EAF2F7"
};
const F = "system-ui";

/* ───────── mảnh HTML dùng lại ───────── */
const LOP = (sau, inner, style) =>
  `<div class="lop" data-sau="${sau}"${style ? ` style="${style}"` : ""}>${inner || ""}</div>`;
/* KHUNG: hộp 1280x720 đặt ĐÚNG khung hình bên trong một .lop đã nới -14%.
   Thiếu cái bù +179,2/+100,8 này thì mọi left/top bên trong bị dời — đúng bẫy 11.2. */
const KHUNG = inner => `<div style="position:absolute;left:179.2px;top:100.8px;width:1280px;` +
  `height:720px">${inner}</div>`;
/* MỌI lớp nới -14% (đúng như lớp .ov của trang) nên máy quay lia/đẩy không lộ mép.
   Đổi lại: viewBox của svg phải nới theo -> VB14. */
const VB14 = "-179.2 -100.8 1638.4 921.6";
const SVB = ex => `<svg class="bd" viewBox="${VB14}" style="overflow:visible"${ex ? " " + ex : ""}></svg>`;
const SVV = ex => `<svg class="ve" viewBox="${VB14}" style="overflow:visible"${ex ? " " + ex : ""}></svg>`;
const LM = (sau, ex) => LOP(sau, SVB(ex), "inset:-14%");   /* lớp có svg.bd — bắt buộc mỗi cảnh một lớp */
const LV = (sau, ex) => LOP(sau, SVV(ex), "inset:-14%");

/* nền giấy KHÔNG phẳng: mỗi cảnh có một nguồn sáng chủ có lý do từ nội dung,
   để khung hình có dải sắc độ thật chứ không phải một mảng trắng trơn (§6 hợp đồng). */
const NENS = {
  giay: "radial-gradient(118% 96% at 34% 22%, #FFFFFF 0%, #F6F8F5 32%, #E8EBE1 68%, #D4D9CC 100%)",
  lab:  "radial-gradient(112% 92% at 50% 28%, #FFFFFF 0%, #EDF2F4 34%, #DCE5E8 70%, #C6D3D7 100%)",
  nuoc: "radial-gradient(116% 94% at 38% 70%, #F2F7F4 0%, #DCEBE6 34%, #BBD6CE 72%, #96BCB1 100%)",
  am:   "radial-gradient(110% 92% at 60% 36%, #FFF8F2 0%, #F6EDE6 30%, #E8D8CC 68%, #D3BCAC 100%)"
};
const NEN = k => LOP(0, "", `inset:-14%;background:${NENS[k] || k || NENS.giay}`);

const IMG = (f, sau, o) => { o = o || {};
  return LOP(sau, `<img src="anh/${f}" alt="" style="${o.contain ? "object-fit:contain;" : ""}` +
    `${o.pos ? `object-position:${o.pos};` : ""}filter:${o.filter || "contrast(1.05) saturate(.96)"}">`,
    "inset:-14%" + (o.st ? ";" + o.st : "")); };
const MO = f => LOP(0, `<img src="anh/${f}" alt="" style="filter:blur(46px) brightness(.88) saturate(.5);` +
  `transform:scale(1.3)">`, "inset:-14%");

/* ───────── mảnh CHỮ (tất cả nằm trong .hud, vốn inset:0 — xem bẫy 11.2) ───────── */
const PIN = (id, ten, co) => `<div class="tx" id="${id}" style="left:-500px;top:0">` +
  `<div style="position:relative;transform:translate(-50%,-100%)">` +
  `<div style="background:#fff;border-radius:3px;padding:5px 12px;font:700 ${co || 17}px/1.15 ${F};` +
  `letter-spacing:.07em;color:${C.chuToi};white-space:nowrap;box-shadow:0 3px 12px rgba(21,32,26,.22)">${ten}</div>` +
  `<div style="position:absolute;left:50%;top:100%;transform:translateX(-50%);width:0;height:0;` +
  `border:7px solid transparent;border-top-color:#fff"></div></div></div>`;
const CHIP = (id, s, x, y, mau) => `<div class="tx" id="${id}" style="left:${x}px;top:${y}px;` +
  `transform-origin:left top"><span style="background:${mau || C.chuToi};color:#fff;border-radius:13px;` +
  `padding:5px 14px;font:700 19px/1.1 ${F};letter-spacing:.04em;white-space:nowrap">${s}</span></div>`;
const NGUON  = (id, s, mau) => `<div class="tx" id="${id}" style="left:48px;top:686px;font:400 13px/1.3 ${F};` +
  `color:${mau || C.mo}">${s}</div>`;
const NGUONP = (id, s, mau) => `<div class="tx" id="${id}" style="right:48px;top:686px;font:400 13px/1.3 ${F};` +
  `color:${mau || "#DCE4E0"};text-align:right">${s}</div>`;
const SOTO = (id, ids, dv, st, px, mau, dvMau, xuong) => `<div class="tx" id="${id}" style="${st}">` +
  `<div><span class="so" id="${ids}" style="font:800 ${px || 126}px/1 ${F};color:${mau || C.chuToi};` +
  `letter-spacing:-.05em">0</span>` +
  `${xuong ? "" : `<span class="dv" style="color:${dvMau || C.mo}">${dv ? "&nbsp;" + dv : ""}</span>`}</div>` +
  `${xuong ? `<div class="dv" style="color:${dvMau || C.mo};margin-top:6px">${dv || ""}</div>` : ""}</div>`;
const SONHO = (id, s, st, px, mau) => `<div class="tx so" id="${id}" style="${st};font:800 ${px || 46}px/1 ${F};` +
  `color:${mau || C.chuToi};letter-spacing:-.03em">${s}</div>`;
const NHAN = (id, s, st, px, mau) => `<div class="tx" id="${id}" style="${st};font:300 ${px || 52}px/1.1 ${F};` +
  `letter-spacing:.28em;color:${mau || C.chuToi}">${s}</div>`;

/* ───────── tiện ích vẽ ───────── */
const E = id => document.getElementById(id);
/* máy quay: trải đều trên CẢ thời lượng cảnh (dùng c.u, không dùng hằng số —
   chuyển động theo hằng số sẽ bão hoà rồi đứng hẳn trước khi cảnh kết thúc). */
const KB = (root, c, a) => cam(root, { t:c.t, x:lerp(a[0], a[1], c.u), y:lerp(a[2], a[3], c.u),
  z:lerp(a[4], a[5], c.u), r: a.length > 6 ? lerp(a[6], a[7], c.u) : 0 });
/* cửa sổ hiện/tắt một LỚP HÌNH (không phải chữ) */
const lop = (e, t, a, b, f) => op(e, cua(t, a, b === undefined ? 1e9 : b, f === undefined ? .3 : f));
/* mảng tối chân khung + bốn góc, để chữ nguồn đọc được trên ảnh (luật C.4) */
function toiChan(sv, pre){
  sv.innerHTML = "";
  gradL(sv, pre + "-ch", 0, 930, 0, 556, [[0, "#0B1A14", .70], [1, "#0B1A14", 0]]);
  el("rect", { x:-300, y:430, width:1900, height:560, fill:"url(#" + pre + "-ch)" }, sv);
  gradR(sv, pre + "-vg", 640, 360, 900, [[0, "#000000", 0], [.6, "#000000", 0], [1, "#0B1A14", .40]]);
  el("rect", { x:-300, y:-220, width:1900, height:1200, fill:"url(#" + pre + "-vg)" }, sv);
  return sv;
}
/* ảnh thật cắt tròn — dùng thay cho CHỮ nhãn trong biểu đồ so loài (c22) */
function anhTron(sv, par, id, f, cx, cy, r){
  const cp = el("clipPath", { id:id }, defsOf(sv));
  el("circle", { cx:cx, cy:cy, r:r }, cp);
  const g = el("g", {}, par);
  const im = el("image", { x:cx - r, y:cy - r, width:2*r, height:2*r,
    preserveAspectRatio:"xMidYMid slice", "clip-path":"url(#" + id + ")" }, g);
  im.setAttribute("href", "anh/" + f);
  el("circle", { cx:cx, cy:cy, r:r, fill:"none", stroke:"#FFFFFF", "stroke-width":3.4 }, g);
  el("circle", { cx:cx, cy:cy, r:r + 2.4, fill:"none", stroke:"#BFC9C2", "stroke-width":1.2 }, g);
  return g;
}
/* TRƯỜNG CHẤM: n chấm xếp lưới đều trong hộp, lộ dần bằng một clipPath quét ngang.
   Cập nhật MỘT thuộc tính mỗi khung hình (không đụng n nút) — rẻ và mượt. */
function truong(sv, par, id, n, x0, y0, w, h, r, mau){
  const cot = Math.max(1, Math.round(Math.sqrt(n * w / h)));
  const hang = Math.ceil(n / cot), bx = w / cot, by = h / hang;
  const cp = el("clipPath", { id:id }, defsOf(sv));
  const qr = el("rect", { x:x0 - 14, y:y0 - 14, width:0, height:h + 28 }, cp);
  const g = el("g", { "clip-path":"url(#" + id + ")" }, par);
  const P = [];
  for (let i = 0; i < n; i++){
    const x = x0 + bx * (i % cot + .5), y = y0 + by * (Math.floor(i / cot) + .5);
    P.push([x, y]);
    el("circle", { cx:x.toFixed(1), cy:y.toFixed(1), r:r, fill:mau }, g);
  }
  return { g:g, qr:qr, P:P, W:w + 28, cot:cot, hang:hang, bx:bx, by:by };
}
/* tô đỏ một tập con của trường chấm (đặt trong nhóm riêng, chỉ đổi opacity nhóm) */
function tapCon(par, P, idx, r, mau){
  const g = el("g", { opacity:0 }, par);
  idx.forEach(i => { const p = P[i];
    el("circle", { cx:p[0].toFixed(1), cy:p[1].toFixed(1), r:r, fill:mau }, g); });
  return g;
}
/* chỉ số rải đều TẤT ĐỊNH của k phần tử trong n (không dùng Math.random) */
const raiDeu = (n, k) => { const a = []; for (let i = 0; i < k; i++)
  a.push(Math.min(n - 1, Math.floor((i + rn(i, 97)) * n / k))); return a; };
/* thanh ngang mọc dần từ trái (Cảnh J) */
function thanh(par, x, y, w, h, mau, bo){
  return el("rect", { x:x, y:y, width:0, height:h, rx:bo === undefined ? h/2 : bo, fill:mau,
    "data-w":w }, par);
}
const moThanh = (r, u) => set(r, { width: (+r.getAttribute("data-w") * cl(u, 0, 1)).toFixed(1) });
/* dấu ✕ đỏ hai nét, vẽ dần */
function dauX(par, cx, cy, r, w){
  const g = el("g", {}, par);
  const a = el("path", { d:`M${cx-r} ${cy-r}L${cx+r} ${cy+r}`, stroke:C.mau, "stroke-width":w || 16,
    "stroke-linecap":"round", fill:"none" }, g);
  const b = el("path", { d:`M${cx+r} ${cy-r}L${cx-r} ${cy+r}`, stroke:C.mau, "stroke-width":w || 16,
    "stroke-linecap":"round", fill:"none" }, g);
  return { g:g, a:a, b:b };
}
/* CÁI NÚT — thứ duy nhất của tập này được phép là hình vẽ, vì nó vốn là một phép ẩn dụ
   (§12: sơ đồ vẽ là ĐÚNG khi ý vốn trừu tượng). Tâm (640,372), bán kính 118. */
function nut(par, cx, cy, r){
  const g = el("g", { transform:`translate(${cx} ${cy})` }, par);
  el("circle", { cx:0, cy:0, r:r*1.42, fill:"#D7DFE1" }, g);
  el("circle", { cx:0, cy:0, r:r*1.42, fill:"none", stroke:"#A9B7BB", "stroke-width":2 }, g);
  el("circle", { cx:0, cy:0, r:r*1.22, fill:"#BFCBCF" }, g);
  for (let i = 0; i < 36; i++){
    const a = i / 36 * Math.PI * 2;
    el("line", { x1:(Math.cos(a)*r*1.26).toFixed(1), y1:(Math.sin(a)*r*1.26).toFixed(1),
      x2:(Math.cos(a)*r*1.38).toFixed(1), y2:(Math.sin(a)*r*1.38).toFixed(1),
      stroke:"#9FAFB4", "stroke-width":2.6, "stroke-linecap":"round" }, g);
  }
  const vo = el("circle", { cx:0, cy:0, r:r, fill:C.mau }, g);
  el("circle", { cx:0, cy:0, r:r*.97, fill:"none", stroke:"#8E2318", "stroke-width":3 }, g);
  const sang = el("ellipse", { cx:0, cy:-r*.33, rx:r*.70, ry:r*.33, fill:"#FFFFFF", opacity:.26 }, g);
  const quet = el("ellipse", { cx:0, cy:0, rx:r*1.02, ry:r*.16, fill:"#FFFFFF", opacity:.07 }, g);
  return { g:g, vo:vo, sang:sang, quet:quet, r:r };
}

/* ═════════════════════════════════════════════════════════════════════════
   CẢNH 01 — 0,0 → 9,55s · CHÍN GIÂY ĐẦU KHÔNG MỘT LẦN CẮT (§5 hợp đồng)
   Một chuyển động liên tục duy nhất: máy lùi dần khỏi cái vòi đang cắm vào da
   người (ảnh thật của CDC), trong khi cây kim đồng hồ quét ba vòng 52 giây và
   mỗi vòng đầy thì rơi thêm một giọt đỏ. Số chết đếm lên suốt cảnh.
   ═════════════════════════════════════════════════════════════════════════ */
DANGKY({
  id: "k1c01", steps: 0,
  say: ["Theo Tổ chức Y tế Thế giới, riêng bệnh sốt rét đã giết khoảng sáu trăm mười nghìn người trong năm hai nghìn không trăm hai mươi tư — nghĩa là cứ chừng năm mươi hai giây, ở đâu đó trên hành tinh lại có một người chết vì một vết đốt."],
  html: IMG("k1-anopheles-dot.jpg", 0.3, { pos:"46% 52%", filter:"contrast(1.08) saturate(1.02)" }) +
    LM(0.9, 'id="k1c01-ve"') +
    `<div class="hud">` +
      SOTO("k1c01-so", "k1c01-s", "người chết vì sốt rét · 2024", "left:62px;top:454px", 112, "#FFFFFF", "#F0F4F2", 1) +
      NGUONP("k1c01-ng", "Ảnh: CDC / James D. Gathany · phạm vi công cộng") +
    `</div>`,
  anim: root => {
    const sv = toiChan(E("k1c01-ve"), "k1c01");
    const CX = 1068, CY = 168, R = 82;
    el("circle", { cx:CX, cy:CY, r:R, fill:"#0B1A14", opacity:.30 }, sv);
    el("circle", { cx:CX, cy:CY, r:R, fill:"none", stroke:"#FFFFFF", "stroke-width":2.4, opacity:.72 }, sv);
    for (let i = 0; i < 12; i++){
      const a = i / 12 * Math.PI * 2 - Math.PI / 2;
      el("line", { x1:(CX + Math.cos(a)*R*.80).toFixed(1), y1:(CY + Math.sin(a)*R*.80).toFixed(1),
        x2:(CX + Math.cos(a)*R*.92).toFixed(1), y2:(CY + Math.sin(a)*R*.92).toFixed(1),
        stroke:"#FFFFFF", "stroke-width":2.2, opacity:.6 }, sv);
    }
    /* cung quét: một đường tròn vẽ dần, tua lại mỗi 3,1 giây */
    const cung = el("path", { d:`M${CX} ${CY-R*.9} A ${R*.9} ${R*.9} 0 1 1 ${(CX-.01).toFixed(2)} ${CY-R*.9}`,
      fill:"none", stroke:C.mau, "stroke-width":7, "stroke-linecap":"round" }, sv);
    const kim = el("line", { x1:CX, y1:CY, x2:CX, y2:CY - R*.72, stroke:"#FFFFFF",
      "stroke-width":3.2, "stroke-linecap":"round" }, sv);
    el("circle", { cx:CX, cy:CY, r:5, fill:"#FFFFFF" }, sv);
    const giot = [];
    for (let i = 0; i < 3; i++)
      giot.push(el("circle", { cx:CX, cy:CY + R + 46 + i*42, r:13, fill:C.mau, opacity:0 }, sv));
    return c => {
      /* MỘT chuyển động liên tục, trải đúng cả cảnh */
      KB(root, c, [-30, 26, 18, -14, 1.24, 1.01]);
      const v = (c.t % 3.1) / 3.1;
      veDan(cung, v);
      set(kim, { transform:`rotate(${(v*360).toFixed(2)} ${CX} ${CY})` });
      giot.forEach((g, i) => {
        const t0 = 3.1*(i+1);
        op(g, cl(ez((c.t - t0)/.35), 0, 1) * .92);
        set(g, { r:(13 * (.4 + .6*ez((c.t - t0)/.45))).toFixed(1) });
      });
      kh("k1c01-so", c.t, 1.5, 1e9);
      txt("k1c01-s", soVN(610000 * ezo(cl((c.t - 1.6)/6.4, 0, 1))));
      kh("k1c01-ng", c.t, 1.2, 4.6);
    };
  }
});

/* ═════ CẢNH 02 — 10,05 → 17,18s · 610 chấm, rồi cắt sang chính con vật ═════ */
DANGKY({
  id: "k1c02", steps: 0,
  say: ["Cộng thêm sốt xuất huyết, Zika, sốt vàng và một dãy bệnh nữa, thì con muỗi là con vật giết nhiều người nhất Trái Đất, và nó bỏ xa con đứng thứ hai."],
  html: NEN("giay") + LM(0.5, 'id="k1c02-ve"') +
    IMG("k1-aedes-chandung.jpg", 0.42, { pos:"52% 46%", st:"opacity:0", filter:"contrast(1.06) saturate(1.0)" }) +
    LV(0.95, 'id="k1c02-vg"') +
    `<div class="hud">` +
      SOTO("k1c02-so", "k1c02-s", "người chết · sốt rét · 2024", "left:62px;top:60px", 104) +
      NGUON("k1c02-cg", "mỗi chấm · 1.000 người") +
      NGUONP("k1c02-ng", "Ảnh: NIAID · CC BY 2.0") +
    `</div>`,
  anim: root => {
    const sv = E("k1c02-ve"); sv.innerHTML = "";
    const T = truong(sv, sv, "k1c02-cp", 610, 150, 236, 980, 390, 7.4, C.mau);
    const anh = root.querySelectorAll(".lop")[2];
    const vg = toiChan(E("k1c02-vg"), "k1c02"); op(vg.parentNode, 0);
    return c => {
      const sau = c.t >= 4.30;
      op(root.querySelectorAll(".lop")[0], sau ? 0 : 1);
      op(sv.parentNode, sau ? 0 : 1);
      op(anh, sau ? 1 : 0);
      op(vg.parentNode, sau ? 1 : 0);
      if (!sau){
        KB(root, c, [16, -14, -8, 6, 1.02, 1.07]);
        set(T.qr, { width:(T.W * ezo(c.t/3.5)).toFixed(1) });
        kh("k1c02-so", c.t, .3, 4.1);
        txt("k1c02-s", soVN(610000 * ezo(c.t/3.3)));
        kh("k1c02-cg", c.t, 1.0, 4.1);
        op(E("k1c02-ng"), 0);
      } else {
        const t = c.t - 4.30;
        cam(root, { t:c.t, x:lerp(24, -18, ez(t/2.8)), y:lerp(-12, 10, ez(t/2.8)), z:lerp(1.04, 1.16, ez(t/2.8)) });
        op(E("k1c02-so"), 0); op(E("k1c02-cg"), 0);
        kh("k1c02-ng", c.t, 4.9, 7.1);
      }
    };
  }
});

/* ═════ CẢNH 03 — 17,68 → 21,34s · sống chung mấy nghìn năm (hai bản tư liệu) ═════ */
DANGKY({
  id: "k1c03", steps: 0,
  say: ["Vậy làm thế quái nào mà sống chung mấy nghìn năm, loài người vẫn chưa dẹp nổi nó?"],
  html: MO("k1-goeldi1905.jpg") + IMG("k1-goeldi1905.jpg", 0.32, { contain:1,
      filter:"contrast(1.1) saturate(.86) sepia(.14)" }) +
    IMG("k1-phun-thuoc.jpg", 0.5, { pos:"50% 48%", st:"opacity:0" }) +
    LM(0.95, 'id="k1c03-ve"') +
    `<div class="hud">` +
      NGUONP("k1c03-ng1", "E. A. Goeldi, “Os Mosquitos no Pará”, 1905 · phạm vi công cộng") +
      NGUONP("k1c03-ng2", "Ảnh: Prefeitura de Olinda, Brazil · CC BY 2.0") +
    `</div>`,
  anim: root => {
    const sv = toiChan(E("k1c03-ve"), "k1c03");
    const L = root.querySelectorAll(".lop");
    return c => {
      const sau = c.t >= 1.95;
      op(L[0], sau ? 0 : 1); op(L[1], sau ? 0 : 1); op(L[2], sau ? 1 : 0);
      KB(root, c, [-24, 22, 14, -16, 1.03, 1.17]);
      kh("k1c03-ng1", c.t, .5, 1.8);
      kh("k1c03-ng2", c.t, 2.3, 3.6);
    };
  }
});

/* ═════ CẢNH 04 — 21,84 → 23,06s · 1,22s, CẮT CỨNG: câu hỏi đã khác ═════ */
DANGKY({
  id: "k1c04", steps: 0,
  say: ["Thật ra câu hỏi bây giờ đã khác."],
  html: NEN("lab") + IMG("k1-trung-tiem.jpg", 0.4, { pos:"50% 50%", contain:1,
      filter:"contrast(1.12) saturate(1.04) brightness(1.04)" }) + LM(0.95, 'id="k1c04-ve"') +
    `<div class="hud">` + NGUONP("k1c04-ng", "Trứng Aedes aegypti xếp hàng chờ tiêm · Vanaciass · CC BY 4.0") + `</div>`,
  anim: root => {
    const sv = E("k1c04-ve"); sv.innerHTML = "";
    gradR(sv, "k1c04-vg", 640, 360, 880, [[0, "#000", 0], [.62, "#000", 0], [1, "#17241F", .30]]);
    el("rect", { x:-300, y:-220, width:1900, height:1200, fill:"url(#k1c04-vg)" }, sv);
    return c => {
      KB(root, c, [12, -10, -6, 5, 1.10, 1.02]);
      kh("k1c04-ng", c.t, .18, 1e9, .22);
    };
  }
});

/* ═════ CẢNH 05 — 23,56 → 27,40s · CÁI NÚT (hình vẽ, vì ý vốn trừu tượng) ═════ */
DANGKY({
  id: "k1c05", steps: 0,
  say: ["Vì tính tới hôm nay, loài người đã có thật trong tay một cái nút để xoá sổ một loài muỗi."],
  html: NEN("lab") + LM(0.55, 'id="k1c05-ve"'),
  anim: root => {
    const sv = E("k1c05-ve"); sv.innerHTML = "";
    gradR(sv, "k1c05-s", 640, 300, 620, [[0, "#FFFFFF", .95], [.55, "#E6EEF0", .45], [1, "#C3D1D5", 0]]);
    el("rect", { x:-300, y:-220, width:1900, height:1200, fill:"url(#k1c05-s)" }, sv);
    /* tấm panel thép dưới nút */
    el("rect", { x:300, y:214, width:680, height:316, rx:18, fill:"#E3EAEC", stroke:"#B6C3C7",
      "stroke-width":2 }, sv);
    el("rect", { x:300, y:214, width:680, height:10, rx:5, fill:"#FFFFFF", opacity:.8 }, sv);
    const N = nut(sv, 640, 372, 118);
    const vong = el("circle", { cx:640, cy:372, r:118, fill:"none", stroke:C.mau,
      "stroke-width":4, opacity:0 }, sv);
    return c => {
      const u = ez(c.u);
      cam(root, { t:c.t, x:lerp(-14, 12, u), y:lerp(10, -8, u), z:lerp(1.02, 1.12, u) });
      const a = ezo(cl(c.t/1.3, 0, 1));
      set(N.g, { transform:`translate(640 372) scale(${(.72 + .28*a).toFixed(4)})` });
      op(N.g, cl(ez(c.t/.5), 0, 1));
      set(N.quet, { transform:`rotate(${(c.t*26 - 30).toFixed(1)})` });
      const p = (c.t - 1.6) / 1.5;
      op(vong, p > 0 ? cl(1 - (p % 1), 0, 1) * .55 : 0);
      set(vong, { r:(118 * (1 + .45 * (p > 0 ? (p % 1) : 0))).toFixed(1) });
    };
  }
});

/* ═════ CẢNH 06 — 27,90 → 31,74s · không phải thuốc xịt → một đoạn mã tự lan ═════ */
DANGKY({
  id: "k1c06", steps: 0,
  say: ["Không phải thuốc xịt, không phải vỉ điện — là một đoạn mã di truyền tự lan trong tự nhiên."],
  html: IMG("k1-phun-thuoc.jpg", 0.35, { pos:"50% 46%", filter:"contrast(1.04) saturate(.9)" }) +
    LV(0.9, 'id="k1c06-x"') +
    NEN("lab") + LM(0.55, 'id="k1c06-ve"') +
    `<div class="hud">` + NGUONP("k1c06-ng", "Ảnh: Prefeitura de Olinda, Brazil · CC BY 2.0") + `</div>`,
  anim: root => {
    const L = root.querySelectorAll(".lop");
    const sx = E("k1c06-x"); sx.innerHTML = "";
    const X = dauX(sx, 640, 356, 168, 22);
    /* chuỗi xoắn kép lam kỹ thuật, tự nhân ra hai bên */
    const sv = E("k1c06-ve"); sv.innerHTML = "";
    gradR(sv, "k1c06-s", 640, 330, 580, [[0, "#FFFFFF", .9], [1, "#CBD8DD", 0]]);
    el("rect", { x:-300, y:-220, width:1900, height:1200, fill:"url(#k1c06-s)" }, sv);
    const adn = (x0, mau) => {
      const g = el("g", {}, sv), A = [], B = [], N = [];
      let d1 = "", d2 = "";
      for (let i = 0; i <= 60; i++){
        const y = 96 + i*8.8, ph = i*.26;
        const xa = x0 + Math.sin(ph)*58, xb = x0 - Math.sin(ph)*58;
        d1 += (i ? "L" : "M") + xa.toFixed(1) + " " + y.toFixed(1);
        d2 += (i ? "L" : "M") + xb.toFixed(1) + " " + y.toFixed(1);
        if (i % 4 === 0) N.push(el("line", { x1:xa.toFixed(1), y1:y.toFixed(1), x2:xb.toFixed(1), y2:y.toFixed(1),
          stroke:mau, "stroke-width":4.6, opacity:0 }, g));
      }
      A.push(el("path", { d:d1, fill:"none", stroke:mau, "stroke-width":8.5, "stroke-linecap":"round" }, g));
      B.push(el("path", { d:d2, fill:"none", stroke:mau, "stroke-width":8.5, "stroke-linecap":"round" }, g));
      return { g:g, a:A[0], b:B[0], n:N };
    };
    const D0 = adn(640, C.gen), D1 = adn(356, C.gen), D2 = adn(924, C.gen);
    op(D1.g, 0); op(D2.g, 0);
    return c => {
      const sau = c.t >= 1.62;
      op(L[0], sau ? 0 : 1); op(L[1], sau ? 0 : 1);
      op(L[2], sau ? 1 : 0); op(L[3], sau ? 1 : 0);
      if (!sau){
        KB(root, c, [18, -16, -8, 7, 1.05, 1.14]);
        veDan(X.a, ezo((c.t - .25)/.42));
        veDan(X.b, ezo((c.t - .52)/.42));
        kh("k1c06-ng", c.t, .3, 1.5);
      } else {
        const t = c.t - 1.62, u = ez(t/2.2);
        cam(root, { t:c.t, x:lerp(-10, 9, u), y:0, z:lerp(1.14, 1.0, u) });
        [D0, D1, D2].forEach((D, k) => {
          const t0 = k * .62;
          veDan(D.a, ezo((t - t0)/.85)); veDan(D.b, ezo((t - t0)/.85));
          op(D.g, cl(ez((t - t0)/.3), 0, 1));
          D.n.forEach((n, i) => op(n, cl(ez((t - t0 - .25 - i*.028)/.2), 0, 1) * .85));
        });
        op(E("k1c06-ng"), 0);
      }
    };
  }
});

/* ═════ CẢNH 07 — 32,24 → 34,48s · bấm thì được gì, mất gì, ai được quyền bấm ═════ */
DANGKY({
  id: "k1c07", steps: 0,
  say: ["Bấm thì được gì, mất gì, và ai được quyền bấm?"],
  html: NEN("lab") + LM(0.55, 'id="k1c07-ve"'),
  anim: root => {
    const sv = E("k1c07-ve"); sv.innerHTML = "";
    gradR(sv, "k1c07-s", 640, 300, 640, [[0, "#FFFFFF", .95], [1, "#C7D4D8", 0]]);
    el("rect", { x:-300, y:-220, width:1900, height:1200, fill:"url(#k1c07-s)" }, sv);
    const N = nut(sv, 640, 296, 92);
    const duong = [
      el("path", { d:"M576 372 Q 430 470 288 596", fill:"none", stroke:C.rung, "stroke-width":7,
        "stroke-linecap":"round" }, sv),
      el("path", { d:"M640 392 Q 640 496 640 612", fill:"none", stroke:C.mau, "stroke-width":7,
        "stroke-linecap":"round" }, sv),
      el("path", { d:"M704 372 Q 850 470 992 596", fill:"none", stroke:C.gen, "stroke-width":7,
        "stroke-linecap":"round" }, sv)
    ];
    const dau = duong.map((p, i) => el("circle", { cx:0, cy:0, r:11,
      fill:[C.rung, C.mau, C.gen][i], opacity:0 }, sv));
    return c => {
      const u = ez(c.u);
      cam(root, { t:c.t, x:lerp(10, -9, u), y:lerp(-8, 7, u), z:lerp(1.08, 1.0, u) });
      set(N.quet, { transform:`rotate(${(c.t*34).toFixed(1)})` });
      duong.forEach((p, i) => {
        const v = ezo((c.t - .35 - i*.22)/1.05);
        veDan(p, v);
        op(p, cl(ez((c.t - .3 - i*.22)/.25), 0, 1) * .92);
        const q = diem(p, v);
        set(dau[i], { cx:q[0].toFixed(1), cy:q[1].toFixed(1) });
        op(dau[i], cl(ez((c.t - .4 - i*.22)/.25), 0, 1));
      });
    };
  }
});

/* ═════ CẢNH 08 — 34,98 → 41,54s · rừng lạnh phương bắc, rồi BÔNG LAN ═════
   Bông lan Platanthera obtusata là hạt giống cho cú đóng vòng ở khối 3.
   Máy quay ở nửa sau ĐẨY VÀO + đi lên (khối 3 sẽ làm ngược lại). */
DANGKY({
  id: "k1c08", steps: 0,
  say: ["Câu trả lời, hoá ra, dính tới một bông hoa mọc trong rừng lạnh phương bắc, thứ hoa mà gần như chỉ đúng một kẻ chịu tới thụ phấn cho nó."],
  html: IMG("k1-lanhnguyen.jpg", 0.3, { pos:"50% 56%", filter:"contrast(1.05) saturate(1.0)" }) +
    MO("k1-lan-platanthera.jpg") +
    IMG("k1-lan-platanthera.jpg", 0.46, { contain:1, st:"opacity:0",
      filter:"contrast(1.07) saturate(1.05)" }) +
    LM(0.95, 'id="k1c08-ve"') +
    `<div class="hud">` +
      NGUONP("k1c08-ng1", "Dãy Brooks, Alaska · USFWS (Lisa Hupp) · phạm vi công cộng") +
      NGUONP("k1c08-ng2", "Platanthera obtusata · NPS / Jacob W. Frank · phạm vi công cộng") +
    `</div>`,
  anim: root => {
    const sv = toiChan(E("k1c08-ve"), "k1c08");
    const L = root.querySelectorAll(".lop");
    return c => {
      const sau = c.t >= 3.04;
      op(L[0], sau ? 0 : 1); op(L[1], sau ? 1 : 0); op(L[2], sau ? 1 : 0);
      if (!sau){
        const u = ez(cl(c.t/3.0, 0, 1));
        cam(root, { t:c.t, x:lerp(-26, 20, u), y:lerp(10, -8, u), z:lerp(1.02, 1.12, u) });
        kh("k1c08-ng1", c.t, .6, 2.9);
      } else {
        /* ĐẨY VÀO + ĐI LÊN — khối 3 đóng vòng bằng chuyển động ngược lại */
        const t = c.t - 3.04, u = ez(cl(t/3.4, 0, 1));
        cam(root, { t:c.t, x:lerp(-10, 8, u), y:lerp(18, -20, u), z:lerp(1.04, 1.20, u) });
        op(E("k1c08-ng1"), 0);
        kh("k1c08-ng2", c.t, 3.6, 6.4);
      }
    };
  }
});

/* ═════ CẢNH 09 — 42,04 → 44,91s · LỜI CHÀO trên nước đọng và bọ gậy ═════ */
DANGKY({
  id: "k1c09", steps: 0,
  say: ["Xin chào, rất vui được gặp lại các bạn."],
  html: IMG("k1-bogay.jpg", 0.35, { pos:"50% 50%", filter:"contrast(1.08) saturate(1.06)" }) +
    LM(0.95, 'id="k1c09-ve"') +
    `<div class="hud">` +
      NGUONP("k1c09-ng", "Bọ gậy Culex nigripalpus · USDA ARS (Peggy Greb) · phạm vi công cộng") + `</div>`,
  anim: root => {
    const sv = toiChan(E("k1c09-ve"), "k1c09");
    return c => {
      KB(root, c, [22, -20, -12, 12, 1.16, 1.03]);
      kh("k1c09-ng", c.t, .7, 2.9);
    };
  }
});

/* ═════ CẢNH 10 — 45,41 → 47,81s · trước khi bấm, phải biết đang xoá cái gì ═════ */
DANGKY({
  id: "k1c10", steps: 0,
  say: ["Trước khi bấm nút thì phải biết mình đang xoá cái gì."],
  html: NEN("lab") + IMG("k1-mauvat.jpg", 0.42, { pos:"50% 48%",
      filter:"contrast(1.08) saturate(1.0) brightness(1.03)" }) + LM(0.95, 'id="k1c10-ve"') +
    `<div class="hud">` + NGUON("k1c10-ng", "Mẫu vật muỗi ghim kim · Mosquito Collection (GBIF) · CC0") + `</div>`,
  anim: root => {
    const sv = E("k1c10-ve"); sv.innerHTML = "";
    /* hai ngoặc đo khép dần quanh mẫu vật — một vật cụ thể đang bị "chọn" */
    const ng = (x, s) => el("path", { d:`M${x} 196 L${x + 26*s} 196 M${x} 196 L${x} 536 M${x} 536 L${x + 26*s} 536`,
      fill:"none", stroke:C.mau, "stroke-width":4, "stroke-linecap":"round" }, sv);
    const a = ng(268, 1), b = ng(1012, -1);
    return c => {
      const u = ez(c.u);
      cam(root, { t:c.t, x:lerp(-16, 14, u), y:0, z:lerp(1.04, 1.13, u) });
      const v = ezo(cl((c.t - .3)/1.1, 0, 1));
      set(a, { transform:`translate(${(-120 + 120*v).toFixed(1)} 0)` });
      set(b, { transform:`translate(${(120 - 120*v).toFixed(1)} 0)` });
      op(a, v * .95); op(b, v * .95);
      kh("k1c10-ng", c.t, .6, 2.4);
    };
  }
});

/* ═════ CẢNH 11 — 48,31 → 54,88s · 282 TRIỆU CA · 610.000 CHẾT (Cảnh J) ═════ */
DANGKY({
  id: "k1c11", steps: 0,
  say: ["Vẫn theo Tổ chức Y tế Thế giới, năm hai nghìn không trăm hai mươi tư có khoảng hai trăm tám mươi hai triệu ca sốt rét, chết khoảng sáu trăm mười nghìn người."],
  html: NEN("giay") + LM(0.5, 'id="k1c11-ve"') +
    `<div class="hud">` +
      SOTO("k1c11-s1", "k1c11-a", "triệu ca mắc", "left:72px;top:172px", 104, C.nam) +
      SOTO("k1c11-s2", "k1c11-b", "người chết", "left:72px;top:420px", 104, C.mau) +
      NGUON("k1c11-ng", "Tổ chức Y tế Thế giới · World Malaria Report 2025") +
    `</div>`,
  anim: root => {
    const sv = E("k1c11-ve"); sv.innerHTML = "";
    const b1 = thanh(sv, 72, 316, 1136, 42, C.nam, 21);
    const b2 = thanh(sv, 72, 564, Math.max(10, 1136 * 610000 / 282000000), 42, C.mau, 21);
    const ty = el("text", { x:116, y:596, fill:C.mau, "font-family":"system-ui", "font-weight":700,
      "font-size":22, opacity:0 }, sv);
    ty.textContent = "0,2% số ca";
    /* vạch mốc để con số có thước đo, không trôi lơ lửng */
    for (let i = 1; i <= 4; i++)
      el("line", { x1:72 + 1136*i/5, y1:300, x2:72 + 1136*i/5, y2:620, stroke:C.bo,
        "stroke-width":1.2, opacity:.8 }, sv);
    return c => {
      const u = ez(c.u);
      cam(root, { t:c.t, x:lerp(-12, 10, u), y:lerp(6, -6, u), z:lerp(1.0, 1.06, u) });
      moThanh(b1, ezo((c.t - .4)/2.4));
      moThanh(b2, ezo((c.t - 3.7)/1.9));
      op(ty, cl(ez((c.t - 4.6)/.5), 0, 1));
      kh("k1c11-s1", c.t, .3, 1e9);
      txt("k1c11-a", soVN(282 * ezo((c.t - .4)/2.3)));
      kh("k1c11-s2", c.t, 3.6, 1e9);
      txt("k1c11-b", soVN(610000 * ezo((c.t - 3.7)/1.8)));
      kh("k1c11-ng", c.t, 1.0, 4.4);
    };
  }
});

/* ═════ CẢNH 12 — 55,38 → 57,66s · số to đến vô nghĩa → đi tìm THƯỚC ═════ */
DANGKY({
  id: "k1c12", steps: 0,
  say: ["Số đó to đến mức vô nghĩa, nên ta đi tìm thước."],
  html: NEN("giay") + LM(0.5, 'id="k1c12-ve"'),
  anim: root => {
    const sv = E("k1c12-ve"); sv.innerHTML = "";
    /* trường chấm 610.000 nhoè đi, một cây thước thật kéo ngang qua */
    const T = truong(sv, sv, "k1c12-cp", 610, 150, 236, 980, 390, 7.4, "#D7B3AC");
    set(T.qr, { width:T.W });
    const th = el("g", {}, sv);
    el("rect", { x:120, y:300, width:1040, height:86, rx:6, fill:"#FFFFFF", stroke:C.chuToi,
      "stroke-width":2.6 }, th);
    for (let i = 0; i <= 40; i++)
      el("line", { x1:(130 + i*25.5).toFixed(1), y1:300, x2:(130 + i*25.5).toFixed(1),
        y2:(i % 5 === 0 ? 348 : 326), stroke:C.chuToi, "stroke-width":i % 5 === 0 ? 2.4 : 1.4 }, th);
    return c => {
      const u = ez(c.u);
      cam(root, { t:c.t, x:lerp(-8, 7, u), y:0, z:lerp(1.02, 1.08, u) });
      op(T.g, (1 - .55*ez(c.t/1.5)).toFixed(3));
      const v = ezo(cl((c.t - .18)/1.5, 0, 1));
      set(th, { transform:`translate(${(-1280 + 1280*v).toFixed(1)} ${(26 - 26*v).toFixed(1)})` });
      op(th, cl(ez(c.t/.3), 0, 1));
    };
  }
});

/* ═════ CẢNH 13 — 58,16 → 60,83s · SÂN MỸ ĐÌNH (vật chuẩn Việt Nam 1/2) ═════ */
DANGKY({
  id: "k1c13", steps: 0,
  say: ["Lấy sân Mỹ Đình, sân lớn nhất Việt Nam, bốn mươi nghìn chỗ."],
  html: IMG("k1-mydinh.jpg", 0.32, { pos:"50% 54%", filter:"contrast(1.05) saturate(1.02)" }) +
    NEN("giay") + LM(0.5, 'id="k1c13-ve"') +
    `<div class="hud">` +
      PIN("k1c13-pin", "SÂN MỸ ĐÌNH") +
      SOTO("k1c13-so", "k1c13-s", "chỗ ngồi", "left:72px;top:38px", 104) +
      NGUONP("k1c13-ng", "Ảnh: USAID Vietnam · phạm vi công cộng") +
    `</div>`,
  anim: root => {
    const L = root.querySelectorAll(".lop");
    const sv = E("k1c13-ve"); sv.innerHTML = "";
    /* vành khán đài: hình TÔ ĐẶC, lộ dần bằng một clipPath quét lên — chắc chắn hiện,
       không phụ thuộc veDan trên <ellipse>. */
    const cp = el("clipPath", { id:"k1c13-cp" }, defsOf(sv));
    const qr = el("rect", { x:180, y:680, width:920, height:0 }, cp);
    const g = el("g", { "clip-path":"url(#k1c13-cp)" }, sv);
    el("ellipse", { cx:640, cy:400, rx:430, ry:242, fill:C.mau, opacity:.9 }, g);
    el("ellipse", { cx:640, cy:400, rx:430, ry:242, fill:"none", stroke:"#8E2318",
      "stroke-width":3 }, g);
    el("ellipse", { cx:640, cy:400, rx:300, ry:158, fill:"#F6F8F5" }, g);
    el("ellipse", { cx:640, cy:400, rx:276, ry:142, fill:C.rung, opacity:.62 }, g);
    el("ellipse", { cx:640, cy:400, rx:276, ry:142, fill:"none", stroke:"#FFFFFF",
      "stroke-width":2.6, opacity:.8 }, g);
    el("line", { x1:640, y1:258, x2:640, y2:542, stroke:"#FFFFFF", "stroke-width":2.4,
      opacity:.75 }, g);
    /* vạch ghế: những nan nhỏ trên vành, cho cái sân có "chỗ ngồi" chứ không phải vòng trơn */
    for (let i = 0; i < 72; i++){
      const a = i / 72 * Math.PI * 2;
      el("line", { x1:(640 + Math.cos(a)*306).toFixed(1), y1:(400 + Math.sin(a)*162).toFixed(1),
        x2:(640 + Math.cos(a)*424).toFixed(1), y2:(400 + Math.sin(a)*238).toFixed(1),
        stroke:"#FFFFFF", "stroke-width":1.6, opacity:.32 }, g);
    }
    return c => {
      const sau = c.t >= 1.35;
      op(L[0], sau ? 0 : 1); op(L[1], sau ? 1 : 0); op(L[2], sau ? 1 : 0);
      if (!sau){
        const u = ez(cl(c.t/1.3, 0, 1));
        cam(root, { t:c.t, x:lerp(-14, 12, u), y:0, z:lerp(1.12, 1.02, u) });
        E("k1c13-pin").style.left = "640px"; E("k1c13-pin").style.top = "300px";
        kh("k1c13-pin", c.t, .18, 1.25, .22);
        kh("k1c13-ng", c.t, .3, 1.3);
        op(E("k1c13-so"), 0);
      } else {
        const t = c.t - 1.35, u = ez(t/1.3);
        cam(root, { t:c.t, x:lerp(9, -8, u), y:0, z:lerp(1.0, 1.07, u) });
        set(qr, { y:(680 - 560*ezo(t/.95)).toFixed(1), height:(560*ezo(t/.95)).toFixed(1) });
        op(E("k1c13-pin"), 0);
        kh("k1c13-so", c.t, 1.5, 1e9, .25);
        txt("k1c13-s", soVN(40192 * ezo(t/1.0)));
      }
    };
  }
});

/* ═════ CẢNH 14 — 61,33 → 64,94s · HƠN MƯỜI LĂM LƯỢT LẤP KÍN SÂN ═════ */
DANGKY({
  id: "k1c14", steps: 0,
  say: ["Số người chết vì sốt rét một năm đủ lấp kín sân Mỹ Đình hơn mười lăm lượt."],
  html: NEN("giay") + LM(0.5, 'id="k1c14-ve"') +
    `<div class="hud">` + SOTO("k1c14-so", "k1c14-s", "lượt kín sân", "left:960px;top:24px", 96, C.mau) + `</div>`,
  anim: root => {
    const sv = E("k1c14-ve"); sv.innerHTML = "";
    const S = [];
    for (let i = 0; i < 16; i++){
      const cx = 198 + (i % 4) * 288, cy = 212 + Math.floor(i / 4) * 142;
      const g = el("g", {}, sv);
      el("ellipse", { cx:cx, cy:cy, rx:116, ry:56, fill:"none", stroke:C.bo, "stroke-width":2.6 }, g);
      const cp = el("clipPath", { id:"k1c14-c" + i }, defsOf(sv));
      el("ellipse", { cx:cx, cy:cy, rx:116, ry:56 }, cp);
      const q = el("rect", { x:cx - 118, y:cy + 58, width:236, height:0, fill:C.mau, opacity:.9,
        "clip-path":"url(#k1c14-c" + i + ")" }, g);
      el("ellipse", { cx:cx, cy:cy, rx:74, ry:34, fill:"none", stroke:"#FFFFFF", "stroke-width":2,
        opacity:.75 }, g);
      S.push({ q:q, cy:cy });
    }
    return c => {
      const u = ez(c.u);
      cam(root, { t:c.t, x:lerp(-10, 9, u), y:lerp(5, -5, u), z:lerp(1.0, 1.05, u) });
      const n = 15.2 * ezo(cl((c.t - .25)/2.5, 0, 1));
      S.forEach((s, i) => {
        const v = cl(n - i, 0, 1);
        set(s.q, { y:(s.cy + 58 - 116*v).toFixed(1), height:(116*v).toFixed(1) });
      });
      kh("k1c14-so", c.t, .3, 1e9);
      txt("k1c14-s", soVN(Math.min(15, n)));
    };
  }
});

/* ═════ CẢNH 15 — 65,44 → 68,51s · 15 cái sân vẫn chỉ là một con số ═════ */
DANGKY({
  id: "k1c15", steps: 0,
  say: ["Mà mười lăm cái sân bóng thì vẫn là một con số, chưa phải một cảm giác."],
  html: NEN("giay") + LM(0.5, 'id="k1c15-ve"'),
  anim: root => {
    const sv = E("k1c15-ve"); sv.innerHTML = "";
    const g = el("g", {}, sv), S = [];
    for (let i = 0; i < 16; i++){
      const cx = 198 + (i % 4) * 288, cy = 212 + Math.floor(i / 4) * 142;
      const q = el("g", {}, g);
      el("ellipse", { cx:cx, cy:cy, rx:116, ry:56, fill:C.mau, opacity:.85 }, q);
      el("ellipse", { cx:cx, cy:cy, rx:74, ry:34, fill:"#FFFFFF", opacity:.5 }, q);
      S.push(q);
    }
    return c => {
      const u = ez(c.u);
      cam(root, { t:c.t, x:lerp(8, -7, u), y:0, z:lerp(1.04, 1.0, u) });
      /* tất cả xám đi và co lại — "vẫn chỉ là con số" */
      const v = ezo(cl((c.t - .3)/2.2, 0, 1));
      const k = 1 - .38*v;
      set(g, { transform:`translate(${(640*(1 - k)).toFixed(2)} ${(360*(1 - k)).toFixed(2)}) scale(${k.toFixed(4)})` });
      S.forEach((q, i) => {
        const w = cl((c.t - .5 - i*.075)/.5, 0, 1);
        q.querySelectorAll("ellipse")[0].setAttribute("fill", w > .5 ? C.nam : C.mau);
        op(q, (1 - .25*w).toFixed(3));
      });
    };
  }
});

/* ═════ CẢNH 16 — 69,01 → 70,47s · ĐỔI THƯỚC: thước nhà mình (CẮT CỨNG) ═════ */
DANGKY({
  id: "k1c16", steps: 0,
  say: ["Nên đổi thước, lấy thước nhà mình."],
  html: IMG("k1-giaothong.jpg", 0.38, { pos:"50% 56%", filter:"contrast(1.06) saturate(1.04)" }) +
    LM(0.95, 'id="k1c16-ve"') +
    `<div class="hud">` + NGUONP("k1c16-ng", "Hà Nội · Benjamin Arnold · CC BY 3.0") + `</div>`,
  anim: root => {
    const sv = toiChan(E("k1c16-ve"), "k1c16");
    return c => {
      KB(root, c, [-18, 16, 10, -9, 1.14, 1.02]);
      kh("k1c16-ng", c.t, .18, 1.4, .22);
    };
  }
});

/* ═════ CẢNH 17 — 70,97 → 77,54s · 9.954 NGƯỜI CHẾT VÌ TNGT (vật chuẩn VN 2/2) ═════ */
DANGKY({
  id: "k1c17", steps: 0,
  say: ["Theo Cục Cảnh sát giao thông, năm hai nghìn không trăm hai mươi tư Việt Nam có gần mười nghìn người chết vì tai nạn giao thông — con số mà cả nước nói tới quanh năm."],
  html: IMG("k1-giaothong.jpg", 0.3, { pos:"50% 52%", filter:"contrast(1.04) saturate(.98) brightness(.86)" }) +
    LM(0.9, 'id="k1c17-vg"') +
    NEN("giay") + LM(0.5, 'id="k1c17-ve"') +
    `<div class="hud">` +
      SOTO("k1c17-so", "k1c17-s", "người chết vì tai nạn giao thông · 2024", "left:66px;top:426px", 118, "#FFFFFF", "#F0F4F2", 1) +
      NGUON("k1c17-cg", "mỗi ô · 10.000 người", C.nam) +
      NGUONP("k1c17-ng", "Số liệu: Cục Cảnh sát giao thông · 2024") +
    `</div>`,
  anim: root => {
    const L = root.querySelectorAll(".lop");
    const vg = toiChan(E("k1c17-vg"), "k1c17");
    const sv = E("k1c17-ve"); sv.innerHTML = "";
    /* MỘT ô 10.000 người, vẽ bằng 100 chấm thật để cái ô có trọng lượng */
    const T = truong(sv, sv, "k1c17-cp", 100, 452, 214, 376, 292, 11, C.nam);
    el("rect", { x:440, y:202, width:400, height:316, rx:10, fill:"none", stroke:C.nam,
      "stroke-width":2.6 }, sv);
    return c => {
      const sau = c.t >= 3.45;
      op(L[0], sau ? 0 : 1); op(L[1], sau ? 0 : 1);
      op(L[2], sau ? 1 : 0); op(L[3], sau ? 1 : 0);
      if (!sau){
        const u = ez(cl(c.t/3.4, 0, 1));
        cam(root, { t:c.t, x:lerp(20, -18, u), y:lerp(-10, 9, u), z:lerp(1.04, 1.16, u) });
        kh("k1c17-so", c.t, .5, 3.3);
        txt("k1c17-s", soVN(9954 * ezo((c.t - .55)/2.3)));
        kh("k1c17-ng", c.t, .8, 3.3);
        op(E("k1c17-cg"), 0);
      } else {
        const t = c.t - 3.45, u = ez(t/2.9);
        cam(root, { t:c.t, x:lerp(-9, 8, u), y:0, z:lerp(1.0, 1.06, u) });
        set(T.qr, { width:(T.W * ezo(t/1.5)).toFixed(1) });
        op(E("k1c17-so"), 0); op(E("k1c17-ng"), 0);
        kh("k1c17-cg", c.t, 4.4, 1e9);
      }
    };
  }
});

/* ═════ CẢNH 18 — 78,04 → 80,84s · 61 LẦN NHƯ THẾ · MỖI NĂM (2 câu, 1 bước) ═════ */
DANGKY({
  id: "k1c18", steps: 1,
  say: ["Riêng sốt rét giết hơn sáu mươi lần như thế.",
        "Mỗi năm."],
  html: NEN("giay") + LM(0.5, 'id="k1c18-ve"') +
    `<div class="hud">` +
      SOTO("k1c18-so", "k1c18-s", "lần", "left:66px;top:34px", 112, C.mau) +
      NGUON("k1c18-cg", "mỗi ô · 10.000 người", C.nam) +
    `</div>`,
  anim: root => {
    const sv = E("k1c18-ve"); sv.innerHTML = "";
    const O = [];
    for (let i = 0; i < 61; i++){
      const x = 236 + (i % 10) * 82, y = 200 + Math.floor(i / 10) * 68;
      O.push(el("rect", { x:x, y:y, width:66, height:54, rx:6, fill:C.nam, opacity:0 }, sv));
    }
    const nhip = el("rect", { x:220, y:184, width:836, height:490, rx:12, fill:"none",
      stroke:C.mau, "stroke-width":4, opacity:0 }, sv);
    return c => {
      const u = ez(c.u);
      cam(root, { t:c.t, x:lerp(-9, 8, u), y:lerp(5, -5, u), z:lerp(1.02, 1.08, u) });
      const n = 61 * ezo(cl((c.t - .2)/1.6, 0, 1));
      O.forEach((r, i) => {
        const v = cl(n - i, 0, 1);
        op(r, v * .95);
        r.setAttribute("fill", i < 1 ? C.nam : C.mau);
      });
      kh("k1c18-so", c.t, .25, 1e9);
      txt("k1c18-s", soVN(Math.min(61, n)));
      kh("k1c18-cg", c.t, .9, 2.2);
      /* bước 2 — "Mỗi năm.": cả khối đập một nhịp, viền đỏ loé lên */
      const s1 = c.since(1);
      op(nhip, s1 >= 0 ? cl(1 - s1/.9, 0, 1) * .9 : 0);
      const kk = 1 + .05*(1 - cl(s1/.5, 0, 1));
      set(nhip, { transform: s1 >= 0 ? `translate(${(638*(1 - kk)).toFixed(2)} ${(429*(1 - kk)).toFixed(2)}) ` +
        `scale(${kk.toFixed(4)})` : "" });
    };
  }
});

/* ═════ CẢNH 19 — 81,34 → 83,19s · TẦNG CUỐI: so với các con vật khác ═════ */
DANGKY({
  id: "k1c19", steps: 0,
  say: ["Thử tầng cuối: so với các con vật khác."],
  html: IMG("k1-ran.jpg", 0.36, { pos:"52% 46%", filter:"contrast(1.08) saturate(1.04)" }) +
    LM(0.95, 'id="k1c19-ve"') +
    `<div class="hud">` + NGUONP("k1c19-ng", "Ảnh: safaritravelplus · CC0") + `</div>`,
  anim: root => {
    const sv = toiChan(E("k1c19-ve"), "k1c19");
    return c => {
      KB(root, c, [20, -18, -10, 9, 1.03, 1.15]);
      kh("k1c19-ng", c.t, .25, 1.7, .25);
    };
  }
});

/* ═════ CẢNH 20 — 83,69 → 89,60s · RẮN ĐỘC rồi BỆNH DẠI (hai ảnh, hai số) ═════ */
DANGKY({
  id: "k1c20", steps: 0,
  say: ["Vẫn theo Tổ chức Y tế Thế giới, rắn độc giết tám mươi mốt đến một trăm ba mươi tám nghìn người một năm, bệnh dại khoảng bốn mươi bốn nghìn."],
  html: IMG("k1-ran.jpg", 0.3, { pos:"52% 50%", filter:"contrast(1.04) saturate(.96) brightness(.82)" }) +
    IMG("k1-cho.jpg", 0.3, { pos:"50% 42%", st:"opacity:0",
      filter:"contrast(1.04) saturate(.9) brightness(.84)" }) +
    LM(0.9, 'id="k1c20-ve"') +
    `<div class="hud">` +
      SONHO("k1c20-a", "81.410 – 137.880", "left:66px;top:452px", 76, "#FFFFFF") +
      NGUON("k1c20-ca", "người chết vì rắn độc · mỗi năm", "#F0F4F2") +
      SOTO("k1c20-b", "k1c20-sb", "người chết vì bệnh dại · mỗi năm", "left:66px;top:436px", 110, "#FFFFFF", "#F0F4F2", 1) +
      NGUONP("k1c20-ng1", "Ảnh: safaritravelplus · CC0 · số liệu WHO snakebite") +
      NGUONP("k1c20-ng2", "Ảnh: Ivan Bandura · CC BY 2.0 · số liệu WHO rabies") +
    `</div>`,
  anim: root => {
    const L = root.querySelectorAll(".lop");
    const sv = toiChan(E("k1c20-ve"), "k1c20");
    return c => {
      const sau = c.t >= 3.12;
      op(L[0], sau ? 0 : 1); op(L[1], sau ? 1 : 0);
      if (!sau){
        const u = ez(cl(c.t/3.1, 0, 1));
        cam(root, { t:c.t, x:lerp(-22, 18, u), y:lerp(8, -8, u), z:lerp(1.14, 1.02, u) });
        kh("k1c20-a", c.t, .5, 3.0);
        kh("k1c20-ca", c.t, .62, 3.0);
        kh("k1c20-ng1", c.t, .7, 3.0);
        op(E("k1c20-b"), 0); op(E("k1c20-ng2"), 0);
      } else {
        const t = c.t - 3.12, u = ez(t/2.7);
        cam(root, { t:c.t, x:lerp(18, -16, u), y:lerp(-8, 8, u), z:lerp(1.02, 1.14, u) });
        op(E("k1c20-a"), 0); op(E("k1c20-ng1"), 0);
        kh("k1c20-b", c.t, 3.35, 1e9);
        txt("k1c20-sb", soVN(44203 * ezo(t/1.5)));
        op(E("k1c20-ca"), 0);
        kh("k1c20-ng2", c.t, 3.6, 5.8);
      }
    };
  }
});

/* ═════ CẢNH 21 — 90,10 → 93,34s · CÁ MẬP: MƯỜI HAI NGƯỜI ═════ */
DANGKY({
  id: "k1c21", steps: 0,
  say: ["Cá mập thì cả năm hai nghìn không trăm hai mươi lăm toàn thế giới có mười hai người chết."],
  html: IMG("k1-camap.jpg", 0.34, { pos:"50% 48%", filter:"contrast(1.06) saturate(.98) brightness(.9)" }) +
    LM(0.9, 'id="k1c21-ve"') +
    `<div class="hud">` +
      SOTO("k1c21-so", "k1c21-s", "người chết vì cá mập · cả năm 2025", "left:66px;top:412px", 150, "#FFFFFF", "#F0F4F2", 1) +
      NGUONP("k1c21-ng", "Ảnh: Elias Levy · CC BY 2.0 · số liệu International Shark Attack File") +
    `</div>`,
  anim: root => {
    const sv = toiChan(E("k1c21-ve"), "k1c21");
    return c => {
      KB(root, c, [24, -22, -12, 11, 1.03, 1.16]);
      kh("k1c21-so", c.t, .45, 1e9);
      txt("k1c21-s", soVN(12 * ezo(cl((c.t - .5)/1.1, 0, 1))));
      kh("k1c21-ng", c.t, .8, 3.1);
    };
  }
});

/* ═════ CẢNH 22 — 93,84 → 96,79s · BẢNG XẾP HẠNG, NHÃN LÀ ẢNH THẬT ═════
   Không một chữ nào: bốn nhãn của biểu đồ là bốn tấm ảnh thật cắt tròn. */
DANGKY({
  id: "k1c22", steps: 0,
  say: ["Nhẹ hơn một hạt gạo, mà nó đứng đầu bảng."],
  html: NEN("giay") + LM(0.5, 'id="k1c22-ve"'),
  anim: root => {
    const sv = E("k1c22-ve"); sv.innerHTML = "";
    const D = [["k1-aedes-dot.jpg", 610000, C.mau], ["k1-ran.jpg", 137880, C.nam],
               ["k1-cho.jpg", 44203, C.nam], ["k1-camap.jpg", 12, C.nam]];
    const B = D.map((d, i) => {
      const y = 142 + i*140;
      anhTron(sv, sv, "k1c22-t" + i, d[0], 128, y + 24, 52);
      /* chiều dài thanh theo CĂN BẬC HAI để cá mập (12) vẫn nhìn thấy được,
         còn thứ bậc thì không đổi. Số thật in ngay đầu mút (luật Cảnh J). */
      const w = 24 + 760 * Math.sqrt(d[1] / 610000);
      const r = thanh(sv, 196, y + 4, w, 40, d[2], 20);
      /* số nằm TRONG CÙNG lớp với thanh: máy quay phóng to thì số đi theo thanh */
      const t = el("text", { x:(196 + w + 18).toFixed(0), y:(y + 36).toFixed(0), fill:d[2],
        "font-family":"system-ui", "font-weight":800, "font-size":i ? 34 : 40,
        "letter-spacing":-1, opacity:0 }, sv);
      t.textContent = soVN(d[1]);
      return { r:r, t:t };
    });
    return c => {
      const u = ez(c.u);
      cam(root, { t:c.t, x:lerp(-10, 9, u), y:0, z:lerp(1.0, 1.07, u) });
      B.forEach((q, i) => {
        moThanh(q.r, ezo((c.t - .25 - i*.18)/1.0));
        op(q.t, cl(ez((c.t - .95 - i*.18)/.35), 0, 1));
      });
    };
  }
});

/* ═════ CẢNH 23 — 97,29 → 99,29s · AI CŨNG MUỐN KÝ MỘT CHỮ ═════ */
DANGKY({
  id: "k1c23", steps: 0,
  say: ["Nghe tới đây thì ai cũng muốn ký một chữ."],
  html: NEN("giay") + LM(0.5, 'id="k1c23-ve"'),
  anim: root => {
    const sv = E("k1c23-ve"); sv.innerHTML = "";
    el("rect", { x:206, y:118, width:868, height:508, rx:4, fill:"#FFFFFF", stroke:C.bo,
      "stroke-width":1.6 }, sv);
    el("rect", { x:206, y:118, width:868, height:8, fill:"#EDEFE9" }, sv);
    for (let i = 0; i < 7; i++)
      el("rect", { x:262, y:184 + i*42, width:(i === 6 ? 340 : 756), height:9, rx:4.5,
        fill:"#DDE2DB" }, sv);
    el("line", { x1:300, y1:552, x2:784, y2:552, stroke:C.bo, "stroke-width":2 }, sv);
    const ky = el("path", { d:"M312 548 C 352 486, 390 586, 428 512 S 492 452, 512 538 "
      + "C 532 578, 566 470, 606 520 S 672 566, 712 498", fill:"none", stroke:C.chuToi,
      "stroke-width":6, "stroke-linecap":"round" }, sv);
    return c => {
      const u = ez(c.u);
      cam(root, { t:c.t, x:lerp(-12, 10, u), y:lerp(8, -7, u), z:lerp(1.02, 1.12, u) });
      veDan(ky, ezo((c.t - .3)/1.3));
    };
  }
});

/* ═════ CẢNH 24 — 99,79 → 101,34s · ">> DIỆT HẾT ĐI!" · 1,55s, CÚ GIẬT ═════ */
DANGKY({
  id: "k1c24", steps: 0,
  say: [">> Diệt hết đi!"],
  html: IMG("k1-aedes-trang.jpg", 0.3, { pos:"50% 48%",
      filter:"contrast(1.14) saturate(.5) sepia(.3) hue-rotate(-18deg) brightness(.92)" }) +
    LV(0.95, 'id="k1c24-ve"'),
  anim: root => {
    const sv = E("k1c24-ve"); sv.innerHTML = "";
    el("rect", { x:-300, y:-220, width:1900, height:1200, fill:C.mau, opacity:.30 }, sv);
    const X = dauX(sv, 640, 352, 208, 30);
    return c => {
      KB(root, c, [-14, 12, 7, -6, 1.16, 1.03]);
      veDan(X.a, ezo(c.t/.30));
      veDan(X.b, ezo((c.t - .22)/.30));
    };
  }
});

/* ═════ CẢNH 25 — 101,84 → 104,77s · BÌNH TĨNH: đậy nắp cái nút (2 câu, 1 bước) ═════ */
DANGKY({
  id: "k1c25", steps: 1,
  say: ["Cơ mà bình tĩnh.",
        "Có hai chuyện phải nói cho sạch trước."],
  html: NEN("lab") + LM(0.55, 'id="k1c25-ve"'),
  anim: root => {
    const sv = E("k1c25-ve"); sv.innerHTML = "";
    gradR(sv, "k1c25-s", 640, 300, 620, [[0, "#FFFFFF", .95], [1, "#C7D4D8", 0]]);
    el("rect", { x:-300, y:-220, width:1900, height:1200, fill:"url(#k1c25-s)" }, sv);
    el("rect", { x:384, y:150, width:512, height:352, rx:18, fill:"#E3EAEC", stroke:"#B6C3C7",
      "stroke-width":2 }, sv);
    const N = nut(sv, 640, 322, 118);
    /* nắp kính hạ xuống đậy cái nút */
    const nap = el("g", {}, sv);
    el("rect", { x:432, y:152, width:416, height:348, rx:14, fill:"#A9CBD6", opacity:.26 }, nap);
    el("rect", { x:432, y:152, width:416, height:348, rx:14, fill:"none", stroke:"#5F8894",
      "stroke-width":5 }, nap);
    el("path", { d:"M456 480 L560 176 L616 176 L512 480 Z", fill:"#FFFFFF", opacity:.30 }, nap);
    el("path", { d:"M650 480 L754 176 L782 176 L678 480 Z", fill:"#FFFFFF", opacity:.20 }, nap);
    el("rect", { x:592, y:140, width:96, height:22, rx:11, fill:"#5F8894" }, nap);
    /* hai vạch: hai chuyện phải nói */
    const v1 = el("path", { d:"M362 584 L606 584", stroke:C.chuToi, "stroke-width":11,
      "stroke-linecap":"round", fill:"none" }, sv);
    const v2 = el("path", { d:"M674 584 L918 584", stroke:C.chuToi, "stroke-width":11,
      "stroke-linecap":"round", fill:"none" }, sv);
    return c => {
      const u = ez(c.u);
      cam(root, { t:c.t, x:lerp(8, -7, u), y:lerp(-6, 5, u), z:lerp(1.06, 1.0, u) });
      set(N.quet, { transform:`rotate(${(c.t*22).toFixed(1)})` });
      const v = ezo(cl((c.t - .12)/.85, 0, 1));
      set(nap, { transform:`translate(0 ${(-430 + 430*v).toFixed(1)})` });
      op(nap, cl(ez(c.t/.2), 0, 1));
      const s1 = c.since(1);
      veDan(v1, s1 >= 0 ? ezo(s1/.5) : 0);
      veDan(v2, s1 >= 0 ? ezo((s1 - .4)/.5) : 0);
      op(v1, s1 >= 0 ? cl(ez(s1/.25), 0, 1) : 0);
      op(v2, s1 >= 0 ? cl(ez((s1 - .4)/.25), 0, 1) : 0);
    };
  }
});

/* ═════ CẢNH 26 — 105,27 → 106,44s · CHUYỆN THỨ NHẤT LÀ MỘT CON SỐ ═════ */
DANGKY({
  id: "k1c26", steps: 0,
  say: ["Chuyện thứ nhất là một con số."],
  html: NEN("giay") + LM(0.5, 'id="k1c26-ve"') +
    `<div class="hud">` + SOTO("k1c26-so", "k1c26-s", "", "left:0;top:272px;width:1280px;text-align:center", 184, C.nam) + `</div>`,
  anim: root => {
    const sv = E("k1c26-ve"); sv.innerHTML = "";
    const o = el("rect", { x:286, y:246, width:708, height:228, rx:10, fill:"#FFFFFF",
      stroke:C.bo, "stroke-width":2 }, sv);
    return c => {
      KB(root, c, [-8, 7, 5, -4, 1.0, 1.08]);
      op(o, cl(ez(c.t/.25), 0, 1));
      kh("k1c26-so", c.t, .14, 1e9, .22);
      txt("k1c26-s", soVN(725000 * ezo(c.t/.8)));
    };
  }
});

/* ═════ CẢNH 27 — 106,94 → 112,58s · CON SỐ TỰ NHÂN RA KHẮP NƠI  [CHỮ 1/2] ═════ */
DANGKY({
  id: "k1c27", steps: 0,
  say: ["Nếu bạn từng tra \"con vật giết nhiều người nhất\", bạn sẽ gặp con số bảy trăm hai mươi lăm nghìn, kèm bốn chữ \"theo WHO\"."],
  html: NEN("giay") + LM(0.5, 'id="k1c27-ve"') +
    `<div class="hud">` + CHIP("k1c27-chip", "theo WHO", 540, 486, C.nam) + `</div>`,
  anim: root => {
    const sv = E("k1c27-ve"); sv.innerHTML = "";
    const S = [];
    for (let i = 0; i < 26; i++){
      const x = -40 + rn(i, 11) * 1360, y = 10 + rn(i, 12) * 680;
      const s = .32 + rn(i, 13) * .52;
      const t = el("text", { x:x.toFixed(0), y:y.toFixed(0), fill:C.nam, "font-family":"system-ui",
        "font-weight":800, "font-size":(96*s).toFixed(1), opacity:0,
        "letter-spacing":-2 }, sv);
      t.textContent = "725.000";
      S.push({ e:t, t0:.55 + rn(i, 14) * 3.9 });
    }
    const chinh = el("text", { x:640, y:362, fill:C.chuToi, "font-family":"system-ui",
      "font-weight":800, "font-size":146, "text-anchor":"middle", "letter-spacing":-6 }, sv);
    chinh.textContent = "725.000";
    return c => {
      const u = ez(c.u);
      cam(root, { t:c.t, x:lerp(-10, 9, u), y:lerp(6, -6, u), z:lerp(1.04, 1.12, u) });
      op(chinh, cl(ez(c.t/.4), 0, 1));
      S.forEach(s => {
        const v = cl(ez((c.t - s.t0)/.45), 0, 1);
        op(s.e, v * .42);
      });
      kh("k1c27-chip", c.t, 3.2, 1e9, .3);
    };
  }
});

/* ═════ CẢNH 28 — 113,08 → 116,06s · TÌM TRONG TÀI LIỆU WHO: KHÔNG CÓ ═════ */
DANGKY({
  id: "k1c28", steps: 0,
  say: ["Tôi đi tìm nó trong tài liệu của Tổ chức Y tế Thế giới và không có."],
  html: NEN("giay") + LM(0.5, 'id="k1c28-ve"') +
    `<div class="hud">` +
      SOTO("k1c28-so", "k1c28-s", "người chết · sốt rét · 2024", "left:72px;top:60px", 104, C.mau) +
      NGUON("k1c28-ng", "Tổ chức Y tế Thế giới · World Malaria Report 2025") +
    `</div>`,
  anim: root => {
    const sv = E("k1c28-ve"); sv.innerHTML = "";
    /* con số ma biến mất, trường chấm 610.000 THẬT hiện lên thế chỗ */
    const ma = el("text", { x:640, y:392, fill:C.nam, "font-family":"system-ui", "font-weight":800,
      "font-size":146, "text-anchor":"middle", "letter-spacing":-6 }, sv);
    ma.textContent = "725.000";
    const T = truong(sv, sv, "k1c28-cp", 610, 150, 252, 980, 376, 7.2, C.mau);
    return c => {
      const u = ez(c.u);
      cam(root, { t:c.t, x:lerp(9, -8, u), y:0, z:lerp(1.08, 1.0, u) });
      const v = ez(cl((c.t - .2)/.9, 0, 1));
      op(ma, 1 - v);
      set(ma, { transform:`translate(0 ${(-36*v).toFixed(1)})` });
      set(T.qr, { width:(T.W * ezo((c.t - .9)/1.5)).toFixed(1) });
      kh("k1c28-so", c.t, 1.15, 1e9);
      txt("k1c28-s", soVN(610000 * ezo((c.t - 1.0)/1.4)));
      kh("k1c28-ng", c.t, 1.3, 2.9);
    };
  }
});

/* ═════ CẢNH 29 — 116,56 → 123,06s · NÓ RA ĐỜI Ở ĐÂU, NGÀY NÀO, KHÔNG KÈM CÁCH TÍNH ═════ */
DANGKY({
  id: "k1c29", steps: 0,
  say: ["Nó ra đời ngày hai mươi lăm tháng bốn năm hai nghìn không trăm mười bốn, trong một tấm infographic trên blog riêng của ông Bill Gates, không kèm cách tính."],
  html: NEN("giay") + LM(0.5, 'id="k1c29-ve"') +
    `<div class="hud">` +
      SONHO("k1c29-ngay", "25 · 4 · 2014", "left:0;top:112px;width:1280px;text-align:center", 62, C.chuToi) +
      NGUON("k1c29-ng", "Gates Notes, “The Deadliest Animal in the World”, 25/4/2014") +
    `</div>`,
  anim: root => {
    const sv = E("k1c29-ve"); sv.innerHTML = "";
    /* một trang web tự vẽ (ý vốn trừu tượng: xuất xứ của một con số) */
    const khung = el("path", { d:"M268 196 L1012 196 L1012 628 L268 628 Z", fill:"none",
      stroke:C.chuToi, "stroke-width":3.4 }, sv);
    const nen = el("rect", { x:268, y:196, width:744, height:432, fill:"#FFFFFF", opacity:0 }, sv);
    sv.insertBefore(nen, khung);
    el("rect", { x:268, y:196, width:744, height:34, fill:"#E6EAE3" }, sv);
    [0, 1, 2].forEach(i => el("circle", { cx:292 + i*22, cy:213, r:6, fill:"#C3CBC2" }, sv));
    const so = el("text", { x:640, y:360, fill:C.nam, "font-family":"system-ui", "font-weight":800,
      "font-size":110, "text-anchor":"middle", "letter-spacing":-4, opacity:0 }, sv);
    so.textContent = "725.000";
    /* ô "cách tính" bỏ trống, gạch chéo */
    const o = el("rect", { x:396, y:422, width:488, height:146, rx:8, fill:"none", stroke:C.mau,
      "stroke-width":3, "stroke-dasharray":"12 9", opacity:0 }, sv);
    const X = dauX(sv, 640, 495, 58, 10); op(X.g, 0);
    return c => {
      const sau = c.t >= 3.22;
      const u = ez(c.u);
      cam(root, { t:c.t, x:lerp(-12, 10, u), y:lerp(7, -7, u), z:lerp(1.02, 1.11, u) });
      veDan(khung, ezo(c.t/1.3));
      op(nen, cl(ez((c.t - .5)/.6), 0, 1));
      op(so, cl(ez((c.t - 1.5)/.5), 0, 1));
      kh("k1c29-ngay", c.t, .9, 1e9);
      op(o, sau ? cl(ez((c.t - 3.3)/.5), 0, 1) * .95 : 0);
      op(X.g, sau ? cl(ez((c.t - 3.9)/.4), 0, 1) : 0);
      if (sau){ veDan(X.a, ezo((c.t - 3.95)/.45)); veDan(X.b, ezo((c.t - 4.2)/.45)); }
      kh("k1c29-ng", c.t, 1.6, 4.4);
    };
  }
});

/* ═════ CẢNH 30 — 123,56 → 127,71s · SỐT RÉT GIẢM, SỐT XUẤT HUYẾT TĂNG GẤP ĐÔI ═════ */
DANGKY({
  id: "k1c30", steps: 0,
  say: ["Từ đó tới nay sốt rét đã giảm, còn sốt xuất huyết thì tăng gấp đôi chỉ trong hai năm."],
  html: NEN("giay") + LM(0.5, 'id="k1c30-ve"') +
    `<div class="hud">` + NGUON("k1c30-ng", "WHO · 2023 → 2024") + `</div>`,
  anim: root => {
    const sv = E("k1c30-ve"); sv.innerHTML = "";
    el("line", { x1:96, y1:622, x2:1184, y2:622, stroke:C.chuToi, "stroke-width":2.4 }, sv);
    el("line", { x1:640, y1:150, x2:640, y2:622, stroke:C.bo, "stroke-width":1.4 }, sv);
    /* TRÁI — sốt rét: một cột đỏ TỤT xuống, kèm mũi tên chỉ xuống */
    const sr = el("rect", { x:216, y:214, width:150, height:408, rx:6, fill:C.mau, opacity:.9 }, sv);
    const mui = el("path", { d:"M450 254 L450 520", fill:"none", stroke:C.nam, "stroke-width":9,
      "stroke-linecap":"round" }, sv);
    const mt = el("polygon", { points:"450,566 420,512 480,512", fill:C.nam, opacity:0 }, sv);
    /* PHẢI — sốt xuất huyết: hai cột, cột sau gấp đôi cột trước */
    const cot = (x, h, mau) => el("rect", { x:x, y:622 - h, width:150, height:0, rx:6, fill:mau,
      "data-h":h }, sv);
    const c1 = cot(742, 186, C.nam), c2 = cot(972, 388, C.mau);
    /* Nhãn và số nằm TRONG lớp vẽ, đi theo cột khi máy quay đẩy.
       Ba mẩu ngắn ở ba chỗ khác nhau — mắt đọc lướt được; một dòng dài thì phải dừng. */
    const chu = (t2, x, y, co, mau, dam) => { const e = el("text", { x:x, y:y, fill:mau,
      "font-family":"system-ui", "font-weight":dam || 700, "font-size":co,
      "text-anchor":"middle", opacity:0 }, sv); e.textContent = t2; return e; };
    const nhanT = chu("sốt rét", 291, 672, 26, C.chuToi);
    const nhanP = chu("sốt xuất huyết", 932, 672, 26, C.chuToi);
    const so1 = chu("7,0", 817, 404, 50, C.nam, 800);
    const so2 = chu("14,6", 1047, 202, 66, C.mau, 800);
    const dv1 = chu("triệu ca", 817, 428, 19, C.mo, 600);
    const dv2 = chu("triệu ca", 1047, 228, 19, C.mo, 600);
    return c => {
      const u = ez(c.u);
      cam(root, { t:c.t, x:lerp(-10, 9, u), y:0, z:lerp(1.0, 1.07, u) });
      const v = ezo((c.t - .25)/1.2);
      set(sr, { y:(214 + 104*v).toFixed(1), height:(408 - 104*v).toFixed(1) });
      veDan(mui, ezo((c.t - .35)/.9));
      op(mui, cl(ez((c.t - .3)/.3), 0, 1));
      op(mt, cl(ez((c.t - 1.1)/.35), 0, 1));
      [[c1, 1.45], [c2, 2.35]].forEach(q => {
        const w = ezo((c.t - q[1])/1.0), h = +q[0].getAttribute("data-h") * w;
        set(q[0], { y:(622 - h).toFixed(1), height:h.toFixed(1) });
      });
      op(nhanT, cl(ez((c.t - .7)/.4), 0, 1));
      op(nhanP, cl(ez((c.t - 1.5)/.4), 0, 1));
      op(so1, cl(ez((c.t - 2.1)/.35), 0, 1)); op(dv1, cl(ez((c.t - 2.25)/.35), 0, 1));
      op(so2, cl(ez((c.t - 3.0)/.35), 0, 1)); op(dv2, cl(ez((c.t - 3.15)/.35), 0, 1));
      kh("k1c30-ng", c.t, 1.2, 1e9);
    };
  }
});

/* ═════ CẢNH 31 — 128,21 → 129,06s · 0,86s, CÚ GIẬT: CHUYỆN THỨ HAI LỚN HƠN ═════ */
DANGKY({
  id: "k1c31", steps: 0,
  say: ["Chuyện thứ hai lớn hơn."],
  html: NEN("lab") + IMG("k1-mauvat.jpg", 0.4, { pos:"50% 50%",
      filter:"contrast(1.1) saturate(1.02) brightness(1.02)" }) + LM(0.95, 'id="k1c31-ve"'),
  anim: root => {
    const sv = E("k1c31-ve"); sv.innerHTML = "";
    gradR(sv, "k1c31-vg", 640, 360, 820, [[0, "#000", 0], [.58, "#000", 0], [1, "#17241F", .34]]);
    el("rect", { x:-300, y:-220, width:1900, height:1200, fill:"url(#k1c31-vg)" }, sv);
    return c => { KB(root, c, [-10, 9, 6, -5, 1.18, 1.04]); };
  }
});

/* ═════ CẢNH 32 — 129,56 → 131,98s · CHỮ "MUỖI" KHÔNG CÓ NGHĨA NHƯ BẠN TƯỞNG ═════
   Bốn ô ảnh THẬT của bốn loài khác nhau hiện lần lượt. Không một chữ nào. */
DANGKY({
  id: "k1c32", steps: 0,
  say: ["Chữ \"muỗi\" trong câu \"diệt hết đi\" không có nghĩa như bạn tưởng."],
  html: NEN("giay") +
    LOP(0.42, KHUNG(
      [["k1-loai-merus.jpg", 0, 0], ["k1-loai-quadri.jpg", 1, 0],
       ["k1-loai-culex.jpg", 0, 1], ["k1-loai-albo.jpg", 1, 1]].map(([f, cx, cy], i) =>
        `<img id="k1c32-i${i}" src="anh/${f}" alt="" style="position:absolute;` +
        `left:${34 + cx*618}px;top:${44 + cy*318}px;width:608px;height:304px;object-fit:cover;` +
        `opacity:0;border-radius:4px;filter:contrast(1.05) saturate(1.0)">`).join("")
      ), "inset:-14%") +
    LM(0.95, 'id="k1c32-ve"') +
    `<div class="hud">` + NGUON("k1c32-ng", "Ảnh: CDC / James Gathany · phạm vi công cộng") + `</div>`,
  anim: root => {
    const sv = E("k1c32-ve"); sv.innerHTML = "";
    return c => {
      const u = ez(c.u);
      cam(root, { t:c.t, x:lerp(-9, 8, u), y:lerp(5, -5, u), z:lerp(1.0, 1.06, u) });
      for (let i = 0; i < 4; i++) op(E("k1c32-i" + i), cl(ez((c.t - .15 - i*.38)/.32), 0, 1));
      kh("k1c32-ng", c.t, .9, 2.4);
    };
  }
});

/* ═════ CẢNH 33 — 132,48 → 136,61s · BA NGHÌN NĂM TRĂM LOÀI ═════ */
DANGKY({
  id: "k1c33", steps: 0,
  say: ["Thế giới có khoảng ba nghìn năm trăm loài muỗi đã được đặt tên, mà phần lớn không hút máu người."],
  html: NEN("giay") + LM(0.5, 'id="k1c33-ve"') +
    `<div class="hud">` +
      SOTO("k1c33-so", "k1c33-s", "loài muỗi đã được đặt tên", "left:68px;top:48px", 104, C.chuToi) +
      NGUON("k1c33-ng", "Walter Reed Biosystematics Unit · Systematic Catalog of Culicidae") +
    `</div>`,
  anim: root => {
    const sv = E("k1c33-ve"); sv.innerHTML = "";
    const T = truong(sv, sv, "k1c33-cp", 3500, 96, 218, 1088, 418, 3.6, C.nam);
    sv.__T = T;
    return c => {
      const u = ez(c.u);
      cam(root, { t:c.t, x:lerp(-9, 8, u), y:lerp(5, -5, u), z:lerp(1.0, 1.07, u) });
      set(T.qr, { width:(T.W * ezo((c.t - .2)/2.4)).toFixed(1) });
      kh("k1c33-so", c.t, .25, 1e9);
      txt("k1c33-s", soVN(3500 * ezo((c.t - .2)/2.3)));
      kh("k1c33-ng", c.t, 1.0, 4.0);
    };
  }
});

/* ═════ CẢNH 34 — 137,11 → 139,26s · HÚT MÁU ẾCH, HÚT MÁU CHIM (hai ảnh thật) ═════ */
DANGKY({
  id: "k1c34", steps: 0,
  say: ["Có loài chỉ hút máu ếch, có loài hút máu chim."],
  html: IMG("k1-ech.jpg", 0.34, { pos:"50% 48%", filter:"contrast(1.06) saturate(1.06)" }) +
    IMG("k1-chim.jpg", 0.34, { pos:"50% 52%", st:"opacity:0",
      filter:"contrast(1.05) saturate(1.04)" }) +
    LM(0.95, 'id="k1c34-ve"') +
    `<div class="hud">` +
      NGUONP("k1c34-ng1", "Ảnh: Grand-Duc · CC BY 3.0") +
      NGUONP("k1c34-ng2", "Choi vàng Mỹ làm tổ trên lãnh nguyên · USFWS · phạm vi công cộng") +
    `</div>`,
  anim: root => {
    const L = root.querySelectorAll(".lop");
    const sv = toiChan(E("k1c34-ve"), "k1c34");
    return c => {
      const sau = c.t >= 1.08;
      op(L[0], sau ? 0 : 1); op(L[1], sau ? 1 : 0);
      KB(root, c, [-18, 16, 9, -9, 1.04, 1.15]);
      kh("k1c34-ng1", c.t, .2, 1.0, .2);
      kh("k1c34-ng2", c.t, 1.25, 2.1, .2);
    };
  }
});

/* ═════ CẢNH 35 — 139,76 → 142,76s · MUỖI ĐỰC SỐNG BẰNG MẬT HOA ═════ */
DANGKY({
  id: "k1c35", steps: 0,
  say: ["Còn muỗi đực thì không hút máu con gì cả — nó sống bằng mật hoa."],
  html: MO("k1-muoi-duc.jpg") + IMG("k1-muoi-duc.jpg", 0.36, { contain:1,
      filter:"contrast(1.06) saturate(1.0)" }) +
    MO("k1-hoa.jpg") + IMG("k1-hoa.jpg", 0.36, { contain:1, st:"opacity:0",
      filter:"contrast(1.05) saturate(1.08)" }) +
    LM(0.95, 'id="k1c35-ve"') +
    `<div class="hud">` +
      NGUONP("k1c35-ng1", "Muỗi đực Aedes aegypti · NIAID · CC BY 2.0") +
      NGUONP("k1c35-ng2", "Lupin Bắc Cực · USFWS Alaska · phạm vi công cộng") +
    `</div>`,
  anim: root => {
    const L = root.querySelectorAll(".lop");
    const sv = toiChan(E("k1c35-ve"), "k1c35");
    return c => {
      const sau = c.t >= 1.62;
      op(L[0], sau ? 0 : 1); op(L[1], sau ? 0 : 1);
      op(L[2], sau ? 1 : 0); op(L[3], sau ? 1 : 0);
      KB(root, c, [16, -14, -8, 8, 1.14, 1.02]);
      kh("k1c35-ng1", c.t, .3, 1.5, .22);
      kh("k1c35-ng2", c.t, 1.8, 2.95, .22);
    };
  }
});

/* ═════ CẢNH 36 — 143,26 → 148,68s · 400 LOÀI ANOPHELES → CHỈ 40 TRUYỀN SỐT RÉT ═════ */
DANGKY({
  id: "k1c36", steps: 0,
  say: ["Theo Tổ chức Y tế Thế giới, trong hơn bốn trăm loài thuộc chi Anopheles, chỉ chừng bốn mươi loài truyền được sốt rét."],
  html: NEN("giay") + LM(0.5, 'id="k1c36-ve"') +
    `<div class="hud">` +
      SOTO("k1c36-s1", "k1c36-a", "loài Anopheles", "left:68px;top:48px", 100, C.nam) +
      SOTO("k1c36-s2", "k1c36-b", "loài truyền sốt rét", "left:68px;top:560px", 100, C.mau) +
      NGUON("k1c36-ng", "Tổ chức Y tế Thế giới · Q&A Malaria, 2025", C.nam) +
    `</div>`,
  anim: root => {
    const sv = E("k1c36-ve"); sv.innerHTML = "";
    const T = truong(sv, sv, "k1c36-cp", 400, 230, 220, 820, 316, 12, C.nam);
    const D = tapCon(sv, T.P, raiDeu(400, 40), 12, C.mau);
    return c => {
      const u = ez(c.u);
      cam(root, { t:c.t, x:lerp(-10, 9, u), y:lerp(6, -6, u), z:lerp(1.0, 1.08, u) });
      set(T.qr, { width:(T.W * ezo((c.t - .2)/2.0)).toFixed(1) });
      op(D, cl(ez((c.t - 2.7)/.7), 0, 1));
      kh("k1c36-s1", c.t, .25, 1e9);
      txt("k1c36-a", soVN(400 * ezo((c.t - .2)/1.9)));
      kh("k1c36-s2", c.t, 2.75, 1e9);
      txt("k1c36-b", soVN(40 * ezo((c.t - 2.8)/1.3)));
      kh("k1c36-ng", c.t, 1.0, 3.8);
    };
  }
});

/* ═════ CẢNH 37 — 149,18 → 150,63s · GỌN TRONG HAI LOÀI ═════ */
DANGKY({
  id: "k1c37", steps: 0,
  say: ["Sốt xuất huyết thì gọn trong hai loài:"],
  html: NEN("giay") +
    LOP(0.42, KHUNG(
      `<img id="k1c37-a" src="anh/k1-aedes-dot.jpg" alt="" style="position:absolute;left:52px;` +
      `top:148px;width:566px;height:424px;object-fit:cover;opacity:0;border-radius:4px;` +
      `filter:contrast(1.05) saturate(1.0)">` +
      `<img id="k1c37-b" src="anh/k1-loai-albo.jpg" alt="" style="position:absolute;left:662px;` +
      `top:148px;width:566px;height:424px;object-fit:cover;opacity:0;border-radius:4px;` +
      `filter:contrast(1.05) saturate(1.0)">`
      ), "inset:-14%") +
    LM(0.95, 'id="k1c37-ve"'),
  anim: root => {
    const sv = E("k1c37-ve"); sv.innerHTML = "";
    return c => {
      KB(root, c, [-7, 6, 4, -4, 1.0, 1.06]);
      op(E("k1c37-a"), cl(ez(c.t/.26), 0, 1));
      op(E("k1c37-b"), cl(ez((c.t - .3)/.26), 0, 1));
    };
  }
});

/* ═════ CẢNH 38 — 151,13 → 152,92s · AEDES AEGYPTI VÀ AEDES ALBOPICTUS ═════
   Tên khoa học là NHÃN của mẫu vật, không phải chữ biên tập. */
DANGKY({
  id: "k1c38", steps: 0,
  say: ["Aedes aegypti và Aedes albopictus."],
  html: NEN("giay") +
    LOP(0.42, KHUNG(
      `<img src="anh/k1-aedes-dot.jpg" alt="" style="position:absolute;left:52px;top:148px;` +
      `width:566px;height:424px;object-fit:cover;border-radius:4px;filter:contrast(1.05)">` +
      `<img src="anh/k1-loai-albo.jpg" alt="" style="position:absolute;left:662px;top:148px;` +
      `width:566px;height:424px;object-fit:cover;border-radius:4px;filter:contrast(1.05)">`
      ), "inset:-14%") +
    LM(0.95, 'id="k1c38-ve"') +
    `<div class="hud">` +
      CHIP("k1c38-a", "Aedes aegypti", 76, 512, C.mau) +
      CHIP("k1c38-b", "Aedes albopictus", 686, 512, C.mau) +
      NGUONP("k1c38-ng", "Ảnh: NIAID · CC BY 2.0 · CDC / James Gathany · phạm vi công cộng") +
    `</div>`,
  anim: root => {
    const sv = E("k1c38-ve"); sv.innerHTML = "";
    return c => {
      KB(root, c, [6, -5, -4, 4, 1.06, 1.0]);
      kh("k1c38-a", c.t, .12, 1e9, .25);
      kh("k1c38-b", c.t, .42, 1e9, .25);
      kh("k1c38-ng", c.t, .3, 1.75);
    };
  }
});

/* ═════ CẢNH 39 — 153,42 → 157,15s · HƠN MỘT TRĂM, TRÊN BA NGHÌN NĂM TRĂM ═════ */
DANGKY({
  id: "k1c39", steps: 0,
  say: ["Cộng hết các bệnh lại, số loài đáng gọi là kẻ truyền bệnh cho người chỉ hơn một trăm."],
  html: NEN("giay") + LM(0.5, 'id="k1c39-ve"') +
    `<div class="hud">` +
      SOTO("k1c39-so", "k1c39-s", "loài truyền bệnh cho người", "left:68px;top:48px", 104, C.mau) +
      NGUON("k1c39-ng", "Tổ chức Y tế Thế giới · bệnh do vector, 2024", C.nam) +
    `</div>`,
  anim: root => {
    const sv = E("k1c39-ve"); sv.innerHTML = "";
    const T = truong(sv, sv, "k1c39-cp", 3500, 96, 218, 1088, 418, 3.6, C.nam);
    set(T.qr, { width:T.W });
    const D = tapCon(sv, T.P, raiDeu(3500, 104), 5.4, C.mau);
    return c => {
      const u = ez(c.u);
      cam(root, { t:c.t, x:lerp(8, -7, u), y:lerp(-5, 5, u), z:lerp(1.02, 1.09, u) });
      op(T.g, (1 - .42*ez((c.t - .3)/1.2)).toFixed(3));
      op(D, cl(ez((c.t - .35)/.8), 0, 1));
      kh("k1c39-so", c.t, .3, 1e9);
      txt("k1c39-s", soVN(104 * ezo((c.t - .35)/1.4)));
      kh("k1c39-ng", c.t, 1.0, 3.6);
    };
  }
});

/* ═════ CẢNH 40 — 157,65 → 158,83s · 1,17s: TRÊN BA NGHÌN NĂM TRĂM ═════ */
DANGKY({
  id: "k1c40", steps: 0,
  say: ["Trên ba nghìn năm trăm."],
  html: NEN("giay") + LM(0.5, 'id="k1c40-ve"') +
    `<div class="hud">` +
      SONHO("k1c40-s", "3.500", "left:0;top:46px;width:1280px;text-align:center", 128, C.nam) + `</div>`,
  anim: root => {
    const sv = E("k1c40-ve"); sv.innerHTML = "";
    const T = truong(sv, sv, "k1c40-cp", 3500, 96, 240, 1088, 400, 3.6, C.nam);
    set(T.qr, { width:T.W });
    const D = tapCon(sv, T.P, raiDeu(3500, 104), 5.4, C.mau);
    op(D, 1);
    const g = el("g", {}, sv);
    return c => {
      KB(root, c, [5, -5, -3, 3, 1.08, 1.0]);
      op(T.g, .66);
      kh("k1c40-s", c.t, .1, 1e9, .2);
    };
  }
});

/* ═════ CẢNH 41 — 159,33 → 164,21s · RỒI. / KẺ SÁT NHÂN LÀ MỘT NHÓM RẤT NHỎ ═════ */
DANGKY({
  id: "k1c41", steps: 1,
  say: ["Rồi.",
        "Muỗi là con vật giết nhiều người nhất, mà kẻ sát nhân thì là một nhóm rất nhỏ trong họ nhà muỗi."],
  html: NEN("giay") + LM(0.5, 'id="k1c41-ve"') +
    `<div class="hud">` +
      SONHO("k1c41-a", "104", "left:68px;top:52px", 104, C.mau) +
      SONHO("k1c41-b", "trên 3.500", "left:262px;top:92px", 48, C.nam) +
    `</div>`,
  anim: root => {
    const sv = E("k1c41-ve"); sv.innerHTML = "";
    const T = truong(sv, sv, "k1c41-cp", 3500, 96, 240, 1088, 400, 3.6, C.nam);
    set(T.qr, { width:T.W });
    const D = tapCon(sv, T.P, raiDeu(3500, 104), 5.4, C.mau);
    op(D, 1);
    return c => {
      const s1 = c.since(1), co = s1 >= 0;
      const v = co ? ez(cl(s1/3.0, 0, 1)) : 0;
      cam(root, { t:c.t, x:lerp(-8, 7, ez(c.u)), y:0, z:lerp(1.0, 1.10, ez(c.u)) });
      /* đàn muỗi lành mờ dần, chỉ còn nhóm nhỏ màu máu */
      op(T.g, (1 - .74*v).toFixed(3));
      op(D, (.6 + .4*ez(cl(c.t/.6, 0, 1))).toFixed(3));
      kh("k1c41-a", c.t, co ? (c.t - s1) + .3 : 1e9, 1e9, .3);
      kh("k1c41-b", c.t, co ? (c.t - s1) + .55 : 1e9, 1e9, .3);
    };
  }
});

/* ═════ CẢNH 42 — 164,71 → 168,88s · CÂU HỎI CỦA TẬP: cái nút trở lại ═════ */
DANGKY({
  id: "k1c42", steps: 0,
  say: ["Nên câu hỏi của tập này là: bấm thì được gì, mất gì, và ai được quyền bấm?"],
  html: NEN("lab") + LM(0.55, 'id="k1c42-ve"'),
  anim: root => {
    const sv = E("k1c42-ve"); sv.innerHTML = "";
    gradR(sv, "k1c42-s", 640, 310, 660, [[0, "#FFFFFF", .95], [1, "#C5D3D7", 0]]);
    el("rect", { x:-300, y:-220, width:1900, height:1200, fill:"url(#k1c42-s)" }, sv);
    const N = nut(sv, 640, 282, 100);
    const D = [
      el("path", { d:"M568 356 Q 408 466 252 606", fill:"none", stroke:C.rung, "stroke-width":8,
        "stroke-linecap":"round" }, sv),
      el("path", { d:"M640 382 Q 640 494 640 622", fill:"none", stroke:C.mau, "stroke-width":8,
        "stroke-linecap":"round" }, sv),
      el("path", { d:"M712 356 Q 872 466 1028 606", fill:"none", stroke:C.gen, "stroke-width":8,
        "stroke-linecap":"round" }, sv)
    ];
    const H = D.map((p, i) => el("circle", { cx:0, cy:0, r:13, fill:[C.rung, C.mau, C.gen][i],
      opacity:0 }, sv));
    return c => {
      const u = ez(c.u);
      cam(root, { t:c.t, x:lerp(-12, 10, u), y:lerp(-8, 8, u), z:lerp(1.12, 1.0, u) });
      set(N.quet, { transform:`rotate(${(c.t*28).toFixed(1)})` });
      D.forEach((p, i) => {
        const v = ezo((c.t - .5 - i*.45)/1.3);
        veDan(p, v);
        op(p, cl(ez((c.t - .45 - i*.45)/.3), 0, 1) * .94);
        const q = diem(p, Math.max(v, .02));
        set(H[i], { cx:q[0].toFixed(1), cy:q[1].toFixed(1) });
        op(H[i], cl(ez((c.t - .6 - i*.45)/.3), 0, 1));
      });
    };
  }
});

/* ═════ CẢNH 43 — 169,38 → 173,04s · BA THỨ ĐÃ CÓ THẬT NGOÀI ĐỒNG ═════ */
DANGKY({
  id: "k1c43", steps: 0,
  say: ["Để trả lời, phải nói về ba thứ đã có thật ngoài đồng."],
  html: NEN("giay") +
    LOP(0.42, KHUNG(
      [["k1-wolbachia.jpg", 76], ["k1-aedes-dot.jpg", 462], ["k1-trung-tiem.jpg", 848]]
        .map(([f, x], i) => `<img id="k1c43-i${i}" src="anh/${f}" alt="" style="position:absolute;` +
          `left:${x}px;top:206px;width:356px;height:300px;object-fit:cover;opacity:0;` +
          `border-radius:4px;filter:contrast(1.05) saturate(1.0)">`).join("")
      ), "inset:-14%") +
    LM(0.42, 'id="k1c43-ve"'),
  anim: root => {
    const sv = E("k1c43-ve"); sv.innerHTML = "";
    const K = [76, 462, 848].map(x => el("rect", { x:x, y:206, width:356, height:300, rx:4,
      fill:"none", stroke:C.chuToi, "stroke-width":3, opacity:0 }, sv));
    return c => {
      const u = ez(c.u);
      cam(root, { t:c.t, x:lerp(-9, 8, u), y:lerp(5, -5, u), z:lerp(1.0, 1.06, u) });
      for (let i = 0; i < 3; i++){
        const v = cl(ez((c.t - .25 - i*.55)/.4), 0, 1);
        op(E("k1c43-i" + i), v);
        op(K[i], v * .7);
      }
    };
  }
});

/* ═════ CẢNH 44 — 173,54 → 177,25s · THỨ VIỆT NAM ĐÃ LÀM: NHA TRANG ═════ */
DANGKY({
  id: "k1c44", steps: 0,
  say: ["Thứ nhất, nhẹ tay nhất, và cũng là thứ Việt Nam đã làm:"],
  html: IMG("k1-nhatrang.jpg", 0.3, { pos:"50% 54%", filter:"contrast(1.05) saturate(1.04)" }) +
    LM(0.9, 'id="k1c44-ve"') +
    `<div class="hud">` +
      PIN("k1c44-pin", "NHA TRANG") +
      NGUONP("k1c44-ng", "Vịnh Nha Trang · Quangpraha · CC0") +
    `</div>`,
  anim: root => {
    const sv = toiChan(E("k1c44-ve"), "k1c44");
    gradR(sv, "k1c44-q", 0, 0, 160, [[0, C.mau, .75], [.4, C.mau, .28], [.72, C.mau, 0]]);
    const q = el("circle", { cx:742, cy:396, r:160, fill:"url(#k1c44-q)", opacity:0 }, sv);
    q.style.mixBlendMode = "screen";
    return c => {
      KB(root, c, [-22, 18, 10, -10, 1.03, 1.15]);
      const g = cl(ez((c.t - .6)/.6), 0, 1);
      op(q, g * .9); set(q, { r:(160*(.55 + .45*g)).toFixed(1) });
      E("k1c44-pin").style.left = "742px"; E("k1c44-pin").style.top = "352px";
      kh("k1c44-pin", c.t, .75, 1e9);
      kh("k1c44-ng", c.t, .9, 3.2);
    };
  }
});

/* ═════ CẢNH 45 — 177,75 → 181,60s · "WOLBACHIA" (Cảnh D)  [CHỮ 2/2] ═════ */
DANGKY({
  id: "k1c45", steps: 0,
  say: ["Wolbachia."],
  html: NEN("lab") + IMG("k1-wolbachia.jpg", 0.36, { contain:1,
      filter:"contrast(1.12) saturate(1.1) brightness(1.02)" }) + LM(0.95, 'id="k1c45-ve"') +
    `<div class="hud">` +
      NHAN("k1c45-ten", "WOLBACHIA", "left:0;top:300px;width:1280px;text-align:center", 58, C.chuToi) +
      `<div class="tx" id="k1c45-ke" style="left:452px;top:382px;width:376px;height:2px;` +
      `background:${C.mau};transform-origin:center"></div>` +
      NGUON("k1c45-ng", "Ảnh hiển vi điện tử: Scott O’Neill · CC BY 2.5") +
    `</div>`,
  anim: root => {
    const sv = E("k1c45-ve"); sv.innerHTML = "";
    gradR(sv, "k1c45-vg", 640, 360, 880, [[0, "#FFF", .25], [.5, "#FFF", 0], [1, "#9FB2B8", .28]]);
    el("rect", { x:-300, y:-220, width:1900, height:1200, fill:"url(#k1c45-vg)" }, sv);
    return c => {
      KB(root, c, [14, -12, -7, 7, 1.02, 1.12]);
      kh("k1c45-ten", c.t, .35, 1e9);
      const v = ez((c.t - .75)/.5);
      op(E("k1c45-ke"), v);
      E("k1c45-ke").style.transform = `scaleX(${v.toFixed(3)})`;
      kh("k1c45-ng", c.t, 1.0, 3.6);
    };
  }
});

/* ═════ CẢNH 46 — 182,10 → 186,24s · VI KHUẨN CÓ SẴN TRONG TẾ BÀO CÔN TRÙNG ═════ */
DANGKY({
  id: "k1c46", steps: 0,
  say: ["Đây là một loại vi khuẩn có sẵn trong tự nhiên, sống trong tế bào rất nhiều loài côn trùng."],
  html: NEN("lab") + IMG("k1-wolbachia.jpg", 0.34, { contain:1,
      filter:"contrast(1.14) saturate(1.12) brightness(1.02)" }) + LM(0.92, 'id="k1c46-ve"') +
    `<div class="hud">` + NGUON("k1c46-ng", "Ảnh hiển vi điện tử: Scott O’Neill · CC BY 2.5") + `</div>`,
  anim: root => {
    const sv = E("k1c46-ve"); sv.innerHTML = "";
    /* khoanh đúng mấy thể vi khuẩn trong ảnh — vòng tròn vẽ dần, không nhấp nháy */
    const V = [[546, 282, 74], [884, 310, 58], [1038, 414, 50], [338, 452, 58]]
      .map(p => el("circle", { cx:p[0], cy:p[1], r:p[2], fill:"none", stroke:C.nuocdong,
        "stroke-width":4, opacity:0 }, sv));
    return c => {
      const u = ez(c.u);
      cam(root, { t:c.t, x:lerp(-14, 12, u), y:lerp(8, -8, u), z:lerp(1.04, 1.16, u) });
      V.forEach((v, i) => {
        const w = cl(ez((c.t - .5 - i*.34)/.42), 0, 1);
        op(v, w * .9);
        set(v, { "stroke-dasharray":"", r:(+v.getAttribute("r")) });
      });
      kh("k1c46-ng", c.t, .7, 3.4);
    };
  }
});

/* ═════ CẢNH 47 — 186,74 → 188,92s · VI-RÚT NHÂN LÊN KÉM HẲN ═════ */
DANGKY({
  id: "k1c47", steps: 0,
  say: ["Khi con Aedes aegypti mang nó, vi-rút sốt xuất huyết trong cơ thể con muỗi nhân lên kém đi hẳn."],
  html: NEN("giay") + LM(0.5, 'id="k1c47-ve"') +
    `<div class="hud">` + `</div>`,
  anim: root => {
    const sv = E("k1c47-ve"); sv.innerHTML = "";
    /* HAI CÁI HỘP GIỐNG HỆT NHAU — cùng cỡ, cùng lưới, cùng viền. Bên trái đầy ắp,
       bên phải chỉ lác đác. Cái hộp rỗng mới là thứ nói ra ý, không phải dòng chú giải. */
    const hop = (x0, mau, id, phan) => {
      el("rect", { x:x0 - 18, y:182, width:460, height:344, rx:10, fill:"#FFFFFF", opacity:.5 }, sv);
      el("rect", { x:x0 - 18, y:182, width:460, height:344, rx:10, fill:"none", stroke:C.bo,
        "stroke-width":2.4 }, sv);
      const T = truong(sv, sv, id, 180, x0, 200, 424, 308, 11, mau);
      return { T:T, phan:phan };
    };
    const A = hop(104, C.mau, "k1c47-c1", 1);
    const B = hop(712, C.nuocdong, "k1c47-c2", .17);
    /* Lộ dần theo CHỈ SỐ chứ không quét ngang: chấm rải đều khắp hộp ngay từ đầu,
       chỉ là hiện dần. Quét ngang làm chấm của hộp bên phải bám thành cột sát mép trái. */
    [A, B].forEach(q => {
      set(q.T.qr, { width: q.T.W });                 /* clipPath mở hết, không cắt gì nữa */
      q.c = [...q.T.g.querySelectorAll("circle")];
      q.c.forEach(e => op(e, 0));
      /* hộp bên phải chỉ sáng một tập con RẢI ĐỀU, không phải một mảng liền */
      q.hien = q.phan >= 1 ? q.c.map((_, i) => i)
                           : raiDeu(q.c.length, Math.round(q.c.length * q.phan));
    });
    const chu = (t2, x, mau) => { const e = el("text", { x:x, y:574, fill:mau,
      "font-family":"system-ui", "font-weight":700, "font-size":25, "text-anchor":"middle",
      opacity:0 }, sv); e.textContent = t2; return e; };
    const nA = chu("không Wolbachia", 316, C.chuToi);
    const nB = chu("có Wolbachia", 924, C.nuocdong);
    return c => {
      const u = ez(c.u);
      cam(root, { t:c.t, x:lerp(-8, 7, u), y:0, z:lerp(1.0, 1.07, u) });
      [A, B].forEach(q => {
        const n = q.hien.length;
        q.hien.forEach((i, k) => op(q.c[i], cl(ez((c.t - .25 - k * 1.05 / n) / .3), 0, 1)));
      });
      op(nA, cl(ez((c.t - .6)/.35), 0, 1));
      op(nB, cl(ez((c.t - .85)/.35), 0, 1));
    };
  }
});

/* ═════ CẢNH 48 — 189,42 → 193,32s · MUỖI VẪN SỐNG, VẪN ĐỐT, TRUYỀN BỆNH KÉM ═════ */
DANGKY({
  id: "k1c48", steps: 0,
  say: ["Muỗi vẫn sống, vẫn đốt, nhưng truyền bệnh kém."],
  html: IMG("k1-aedes-dot.jpg", 0.32, { pos:"50% 50%", filter:"contrast(1.06) saturate(1.0)" }) +
    LV(0.92, 'id="k1c48-x"') + LM(0.95, 'id="k1c48-ve"') +
    `<div class="hud">` + NGUONP("k1c48-ng", "Ảnh: US Department of Agriculture · phạm vi công cộng") + `</div>`,
  anim: root => {
    const sv = toiChan(E("k1c48-ve"), "k1c48");
    const sx = E("k1c48-x"); sx.innerHTML = "";
    /* mũi tên "truyền bệnh" vẽ dần rồi bị gạch ngang */
    const mt = el("path", { d:"M402 560 Q 640 636 892 556", fill:"none", stroke:C.mau,
      "stroke-width":9, "stroke-linecap":"round" }, sx);
    const gach = el("path", { d:"M576 500 L724 620", fill:"none", stroke:"#FFFFFF",
      "stroke-width":11, "stroke-linecap":"round" }, sx);
    return c => {
      KB(root, c, [-20, 17, 9, -9, 1.04, 1.17]);
      veDan(mt, ezo((c.t - .6)/1.1));
      op(mt, cl(ez((c.t - .55)/.3), 0, 1) * .9);
      veDan(gach, ezo((c.t - 2.1)/.45));
      op(gach, cl(ez((c.t - 2.05)/.25), 0, 1));
      kh("k1c48-ng", c.t, .5, 3.2);
    };
  }
});

/* ═════ CẢNH 49 — 193,82 → 196,35s · TRUYỀN TỪ MẸ SANG CON, CẢ ĐÀN ĐỀU MANG ═════ */
DANGKY({
  id: "k1c49", steps: 0,
  say: ["Mà Wolbachia thì truyền từ muỗi mẹ sang muỗi con, nên thả đủ là cả đàn đều mang."],
  html: NEN("nuoc") + LM(0.5, 'id="k1c49-ve"'),
  anim: root => {
    const sv = E("k1c49-ve"); sv.innerHTML = "";
    /* ba thế hệ: 1 → 4 → 16, lan màu từ mẹ xuống con */
    const H = [[1, 170], [4, 362], [16, 554]];
    const N = [];
    H.forEach(([n, y], h) => {
      for (let i = 0; i < n; i++){
        const x = 640 + (i - (n - 1)/2) * (n === 1 ? 0 : n === 4 ? 230 : 70);
        N.push({ e:el("circle", { cx:x.toFixed(1), cy:y, r:n === 16 ? 19 : 30, fill:C.nam,
          opacity:0 }, sv), h:h, x:x, y:y });
      }
    });
    const noi = [];
    N.filter(q => q.h < 2).forEach(q => {
      const con = N.filter(r => r.h === q.h + 1);
      const b = con.length / (N.filter(r => r.h === q.h).length);
      const i0 = con.indexOf(con.find(r => r.x >= q.x - 400));
      con.forEach(r => {
        if (Math.abs(r.x - q.x) > (q.h === 0 ? 600 : 180)) return;
        noi.push({ e:el("line", { x1:q.x.toFixed(1), y1:q.y + 26, x2:r.x.toFixed(1), y2:r.y - 20,
          stroke:C.nuocdong, "stroke-width":2.4, opacity:0 }, sv), h:q.h });
      });
    });
    sv.insertBefore(el("g", {}, sv), sv.firstChild);
    return c => {
      const u = ez(c.u);
      cam(root, { t:c.t, x:lerp(-8, 7, u), y:lerp(5, -5, u), z:lerp(1.0, 1.07, u) });
      N.forEach(q => {
        const t0 = .15 + q.h * .62;
        const v = cl(ez((c.t - t0)/.35), 0, 1);
        op(q.e, v);
        q.e.setAttribute("fill", c.t > t0 + .3 ? C.nuocdong : C.nam);
      });
      noi.forEach(q => op(q.e, cl(ez((c.t - .45 - q.h*.62)/.3), 0, 1) * .6));
    };
  }
});

/* ═════ CẢNH 50 — 196,85 → ~201,0s · ĐỔI NGHỀ CHO ĐÀN MUỖI — ĐỒ THỊ TRÍ NGUYÊN ═════
   Dữ kiện Việt Nam đóng góp cho thế giới: đảo Trí Nguyên (Hòn Miễu, Nha Trang)
   leo tới 96,6% rồi TỤT còn 22,5% ngay trong mùa nóng. Một đường leo rồi rơi.
   Nguồn: Hien NT và cộng sự, Gates Open Research 2022, DOI 10.12688/gatesopenres.13347.2 */
DANGKY({
  id: "k1c50", steps: 0,
  say: ["Không ai diệt con nào — người ta chỉ đổi nghề cho đàn muỗi."],
  html: NEN("giay") + LM(0.5, 'id="k1c50-ve"') +
    `<div class="hud">` +
      PIN("k1c50-pin", "ĐẢO TRÍ NGUYÊN, NHA TRANG", 16) +
      NGUON("k1c50-ng", "Tỉ lệ muỗi Aedes aegypti mang Wolbachia, 2014–2015 · " +
        "Hien NT và cộng sự, Gates Open Research 2022") +
    `</div>`,
  anim: root => {
    const sv = E("k1c50-ve"); sv.innerHTML = "";
    const X0 = 170, X1 = 1130, Y0 = 600, Y1 = 196;
    const Y = p => Y0 - (Y0 - Y1) * p / 100;
    /* lưới ngang 0 / 25 / 50 / 75 / 100 % — kết cấu của đồ thị, không phải chữ biên tập */
    [0, 25, 50, 75, 100].forEach(p => {
      el("line", { x1:X0, y1:Y(p).toFixed(1), x2:X1, y2:Y(p).toFixed(1),
        stroke:p === 0 ? C.chuToi : C.bo, "stroke-width":p === 0 ? 2.4 : 1.2 }, sv);
      const t = el("text", { x:X0 - 16, y:(Y(p) + 6).toFixed(1), fill:C.mo, "font-family":"system-ui",
        "font-size":17, "text-anchor":"end" }, sv);
      t.textContent = p + "%";
    });
    el("line", { x1:X0, y1:Y1 - 26, x2:X0, y2:Y0, stroke:C.chuToi, "stroke-width":2.4 }, sv);
    /* đường leo rồi rơi — mốc thật của bài báo */
    const M = [[0, 2], [.10, 46], [.22, 78], [.34, 91.7], [.46, 96.6],
               [.60, 84], [.74, 58], [.88, 34], [1, 22.5]];
    let d = "";
    M.forEach((m, i) => { d += (i ? "L" : "M") + (X0 + (X1 - X0)*m[0]).toFixed(1) + " " + Y(m[1]).toFixed(1); });
    const duong = el("path", { d:d, fill:"none", stroke:C.nuocdong, "stroke-width":7,
      "stroke-linecap":"round", "stroke-linejoin":"round" }, sv);
    const dot = el("circle", { cx:X0, cy:Y(2), r:9, fill:C.mau, stroke:"#FFFFFF",
      "stroke-width":3, opacity:0 }, sv);
    const dinh = el("circle", { cx:(X0 + (X1 - X0)*.46).toFixed(1), cy:Y(96.6).toFixed(1), r:10,
      fill:C.nuocdong, stroke:"#FFFFFF", "stroke-width":3, opacity:0 }, sv);
    const nhan = (s2, x, y, mau, co) => { const t = el("text", { x:x, y:y, fill:mau,
      "font-family":"system-ui", "font-weight":800, "font-size":co, "text-anchor":"middle",
      "letter-spacing":-1, opacity:0 }, sv); t.textContent = s2; return t; };
    const nDinh = nhan("96,6%", (X0 + (X1 - X0)*.46).toFixed(1), (Y(96.6) - 30).toFixed(1), C.nuocdong, 50);
    const nDay  = nhan("22,5%", (X1 - 86).toFixed(1), (Y(22.5) + 62).toFixed(1), C.mau, 44);
    return c => {
      const u = ez(c.u);
      cam(root, { t:c.t, x:lerp(-10, 9, u), y:lerp(6, -6, u), z:lerp(1.0, 1.06, u) });
      const v = ezo(cl((c.t - .25)/3.0, 0, 1));
      veDan(duong, v);
      op(duong, cl(ez((c.t - .2)/.3), 0, 1));
      const p = diem(duong, Math.max(v, .004));
      set(dot, { cx:p[0].toFixed(1), cy:p[1].toFixed(1) });
      op(dot, cl(ez((c.t - .3)/.3), 0, 1));
      op(dinh, cl(ez((c.t - 1.6)/.4), 0, 1));
      op(nDinh, cl(ez((c.t - 1.7)/.4), 0, 1));
      op(nDay, cl(ez((c.t - 3.0)/.4), 0, 1));
      E("k1c50-pin").style.left = "640px"; E("k1c50-pin").style.top = "152px";
      kh("k1c50-pin", c.t, .3, 1.5);
      kh("k1c50-ng", c.t, 1.1, 1e9);
    };
  }
});

})();
