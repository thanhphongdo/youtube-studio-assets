# Nguồn hình — khối 2, BẢN V3 (đoạn 21–36 · câu 1–49 · giây 255,224 → 538,844)

Dựng lại từ đầu ngày 28/11/2026 theo **PHẦN 15** của `HUONG-DAN-DUNG-CANH.md`.
Bản cũ nằm ở `canh/.cu-v1/khoi-2.js`; kịch bản đã viết lại nên chỉ còn bộ đồ nghề
đồ hoạ là dùng lại được, toàn bộ 49 cảnh là mới.

**25 tệp tư liệu thật: 18 ảnh + 7 video** (một vài tệp dùng ở nhiều cảnh).
Giấy phép: **11 phạm vi công cộng · 3 CC0 · 11 CC BY**.
Trong đó **một tệp DÙNG CHUNG với khối khác**: `anh/k3-ran-hardy.jpg` là của khối 3,
khối 2 trỏ thẳng vào chứ không giữ bản sao — xem mục 8.
**Không tệp nào CC BY-SA, CC BY-NC hay CC BY-ND.** Mọi tệp đã được MỞ RA NHÌN
trước khi dùng (bẫy §11.10) — xem mục "Kiểm bằng mắt" ở cuối.

**Xét theo QUYỀN, không theo tên giấy phép** (§15.1 bản sửa 28/11/2026). Cả 25 tệp
đều đạt đủ ba điều kiện: cho dùng thương mại · cho sửa đổi · không đòi chia sẻ tương tự.
Phạm vi công cộng và CC0 thì hiển nhiên đạt. CC BY 2.0 / 2.5 / 3.0 / 4.0 đạt cả ba,
chỉ buộc ghi công — đã ghi đủ **tên tác giả + tên giấy phép + liên kết trang gốc**
trong bảng dưới, và những cảnh thấy rõ ảnh thì còn có dòng nguồn hiện ngay trên hình.

**Khối 2 KHÔNG dùng tệp nào của Pexels, Pixabay hay Coverr** — cả 25 tệp đều tải từ
Wikimedia Commons, lọc giấy phép bằng trường `extmetadata.LicenseShortName` của API
Commons. Vì vậy ở đây không có điều khoản kho ảnh nào phải chép nguyên văn. Nếu sau
này khối 2 có bổ sung clip từ ba kho đó thì phải chép điều khoản kèm ngày đọc vào
đúng mục này trước khi dùng.

---

## 1. VIDEO — `slide/video/k2-*.mp4`

Tất cả đã cắt dưới 10 giây và dưới 6 MB bằng ffmpeg (`libx264`, 25 fps, không tiếng).
Trang gọi bằng `VID()`; **không cảnh nào gọi `play()`** — harness tự tua tới đúng giây.

| tệp | dài · nặng | cảnh dùng | nội dung | tác giả | giấy phép | trang gốc |
|---|---|---|---|---|---|---|
| `k2-trang-quay.mp4` | 8,0 s · 1,4 MB | k2c01 · k2c44 | Một vòng tự quay của Mặt Trăng, dựng từ ảnh LRO | NASA / LRO | phạm vi công cộng | https://commons.wikimedia.org/wiki/File:LROC_wac_643nm_Moon_rotation1080px.ogv |
| `k2-traidat-quay.mp4` | 4,5 s · 1,2 MB | k2c04 · k2c26 · k2c30 | Trái Đất tự quay 22 giờ, máy EPIC trên vệ tinh DSCOVR | NASA/GSFC | phạm vi công cộng | https://commons.wikimedia.org/wiki/File:DSCOVR_EPIC_Earth_Rotation.webm |
| `k2-nganha.mp4` | 4,6 s · 0,8 MB | k2c08 · k2c09 · k2c10 · k2c35 · k2c41 | Dải Ngân Hà quay, ảnh tua nhanh, có bóng cây ở chân trời | Gamer noscope | CC BY 3.0 | https://commons.wikimedia.org/wiki/File:Milky_Way_Timelapse.webm |
| `k2-trang-may.mp4` | 9,0 s · 1,2 MB | k2c35 · k2c46 | Mây trôi qua mặt trăng tròn, quay ban đêm | Johann Mynhardt | CC BY 3.0 | https://commons.wikimedia.org/wiki/File:Clouds_over_full_moon_at_night_(Free_HD_stock_video).webm |
| `k2-bohung.mp4` | 9,0 s · 2,0 MB | k2c39 | Bọ hung lăn viên phân trên cát, Valencia | MdeVicente | CC0 | https://commons.wikimedia.org/wiki/File:Escarabajo_pelotero.webm |
| `k2-ran-gbr.mp4` | 8,0 s · 4,7 MB | k2c42 · k2c49 | Khảo sát rạn ở đảo Lady Musgrave, **rạn Great Barrier**, 2022 | Adam Fish | CC BY 3.0 | https://commons.wikimedia.org/wiki/File:Lady_Musgrave_Island_coral_survey_2022.webm |
| `k2-sanho-de2.mp4` | 9,01 s · 4,8 MB | k2c43 · k2c47 · k2c48 · k2c49 | San hô nhả trứng đồng loạt, quay ở **khu bảo tồn biển quốc gia Flower Garden Banks, vịnh Mexico**. Bản sao của `video/k3-sanho-de.mp4` của khối 3, 1280×720 quay thật | NOAA Ocean Today, tập *Coral Spawning* | phạm vi công cộng (công vụ chính phủ Mỹ) | — (khối 3 tải về, xem `nguon-khoi-3.md` mục 1) |

> **ĐÃ BỊ LOẠI VÌ QUÁ NHOÈ, VÒNG SỬA 28/11 (xem mục 8):**
> `k2-sanho-de.mp4` — *Spawning Pocillopora meandrina*, CC BY 2.5, quay tại đảo
> Lizard trên chính rạn Great Barrier, giấy phép sạch và địa điểm khớp lời dẫn.
> Nhưng **tệp gốc trên Commons chỉ 480×360**; bản trong kho đã được phóng lên
> 1280×720 nên trông như đủ phân giải, mà chi tiết thì không có thật. Tệp vẫn
> nằm trong `video/`, **không cảnh nào của bản hiện tại gọi tới**.
>
> **Đã bị LOẠI vì giấy phép**, ghi lại để người sau khỏi mất công tìm lại:
> `Dung beetle dance (short) from journal.pone.0030211.ogv` (CC BY-**SA** 2.5) —
> đây đúng là clip của chính nhóm Dacke, tiếc là SA; `Dung beetle working-001.ogv`
> (CC BY-SA 3.0); `Full Moon Marki 20110319.ogv` (CC BY-SA 3.0);
> `Moonrise, surf and train at GlenCairn` (CC BY-SA 4.0).
> **Đã bị LOẠI vì quá nặng để tải về cắt:** bản SDO 4K của NASA (514 MB) và
> `Moon Phase and Libration North 2020 4K` (447 MB) — đều phạm vi công cộng,
> nếu sau này có băng thông thì dùng được.

## 2. ẢNH — `slide/anh/k2-*.jpg`

| tệp | cảnh dùng | nội dung | tác giả | giấy phép | trang gốc |
|---|---|---|---|---|---|
| `k2-mattroi.jpg` | k2c02 · k2c03 · k2c05 · k2c14 | Mặt Trời ở bước sóng 131 và 171 Å, pháo sáng lớp M6.5 | NASA/SDO | phạm vi công cộng | https://commons.wikimedia.org/wiki/File:This_image_shows_a_combination_of_light_in_wavelengths_of_131_and_171_Angstroms.jpg |
| `k2-mattrang.jpg` | k2c02 · k2c28 · k2c31 · k2c34, **và mọi đĩa Mặt Trăng** (qua `K2.trang`) | Mặt gần của Mặt Trăng, ghép ảnh LRO Wide Angle Camera | NASA/GSFC/Arizona State University | phạm vi công cộng | https://commons.wikimedia.org/wiki/File:Moon_nearside_LRO_5000.jpg |
| `k2-trieu-day.jpg` | k2c07 (nửa trái khung) | Alma, vịnh Fundy, **lúc nước lớn** | Dylan Kereluk | CC BY 2.0 | https://commons.wikimedia.org/wiki/File:Bay_of_Fundy_-_Tide_In.jpg |
| `k2-trieu-can.jpg` | k2c07 (nửa phải khung) | Alma, vịnh Fundy, **lúc nước ròng**, thuyền nằm trên bùn | Dylan Kereluk | CC BY 2.0 | https://commons.wikimedia.org/wiki/File:Bay_of_Fundy_-_Tide_Out.jpg |
| `k2-mua-gat.jpg` | k2c17 · k2c20 | Gặt lúa mì ở Brownsburg, bang Indiana, 28/6/2021 | USDA / NRCS, ảnh Brandon O'Connor | phạm vi công cộng | https://commons.wikimedia.org/wiki/File:Indiana_Wheat_Harvest_(20210628-NRCS-BJOC-007).jpg |
| `k2-bao.jpg` | k2c33 | Bão Soudelor nhìn từ Trạm Vũ trụ Quốc tế, 5/8/2015 | NASA's Earth Observatory | CC BY 2.0 | https://commons.wikimedia.org/wiki/File:Typhoon_Soudelor_Seen_from_the_ISS_(19839740193).jpg |
| `k2-bien-dem.jpg` | k2c36 · k2c37 (nửa trái khung) | Hàng cây bên biển trong đêm trăng tròn, quần đảo Andaman | Vyacheslav Argenberg | CC BY 4.0 | https://commons.wikimedia.org/wiki/File:Andaman_Islands,_Trees_by_the_sea_at_night,_Full_moon_night.jpg |
| `k2-demram.jpg` | k2c37 (nửa phải khung) | Rừng ven biển trong đêm trăng tròn, quần đảo Andaman | Vyacheslav Argenberg | CC BY 4.0 | https://commons.wikimedia.org/wiki/File:Andaman_Islands,_Full_moon_night,_Forest_by_the_sea_at_night.jpg |
| `k2-tranh-ram.jpg` | k2c38 | «Làng dưới trăng tròn», tranh sơn dầu | Joos de Momper con / Jan Brueghel cha | phạm vi công cộng | https://commons.wikimedia.org/wiki/File:Joos_de_Momper_(II)_-_Village_at_Full_Moon_-_WGA16138.jpg |
| `k2-cua-cong.jpg` | k2c38 | Cua còng trên bãi bùn triều, khu bảo tồn vịnh Suncheon | lumoplank | CC0 | https://commons.wikimedia.org/wiki/File:Suncheon_Bay_Natural_Reserve_-_SuncheonBNG2975.jpg |
| `k2-bohung.jpg` | k2c40 | Bọ hung lăn viên phân, Guatemala | Alex Wild | CC0 | https://commons.wikimedia.org/wiki/File:Dung_Beetle1.jpg |
| `k2-bohung2.jpg` | k2c40 · k2c41 | Bọ hung lăn phân bò, thung lũng Ojén, tây nam Tây Ban Nha | Dr Mary Gillham Archive Project | CC BY 2.0 | https://commons.wikimedia.org/wiki/File:Dung_beetle_rolling_cow_dung_ball._Ojen_valley._Southwest_Spain_(37498376970).jpg |
| `k3-ran-hardy.jpg` **(của khối 3, dùng chung)** | k2c43 | Hardy Reef nhìn từ trực thăng, **rạn Great Barrier**, Queensland — bản cắt 16:9 | rheins | CC BY 3.0 | https://commons.wikimedia.org/wiki/File:Aerial_View_of_Hardy_Reef_-_2013.04_-_panoramio.jpg |
| `k2-nganha.jpg` | k2c18 | Dải Ngân Hà trên sân kính thiên văn VLT, đài thiên văn Paranal, Chile | ESO / H.H. Heyer | CC BY 4.0 | https://commons.wikimedia.org/wiki/File:Milky_Way_above_the_VLT_platform_(img_4586).jpg |
| `k2-hau.jpg` | k2c16 | Rạn hàu ở mức nước giữa triều, Hunting Island, South Carolina | Jstuby (English Wikipedia) | phạm vi công cộng | https://commons.wikimedia.org/wiki/File:Oyster_reef_Hunting_Island_SC.jpg |
| `k2-sanho-canh.jpg` | k2c45 · k2c46 | Cận cảnh polyp san hô sừng hươu | NOAA | phạm vi công cộng | https://commons.wikimedia.org/wiki/File:Staghorn_coral_closeup.jpg |
| `k2-traidat-phang.jpg` | **mọi quả cầu Trái Đất** (19 cảnh, qua `K2.cau`) | Bản đồ Trái Đất NASA Blue Marble 2002 **trải phẳng** (equirectangular), 2048 × 1024 | NASA / MODIS trên vệ tinh Terra | phạm vi công cộng | https://commons.wikimedia.org/wiki/File:Blue_Marble_2002.png |
| `k2-sanho-de.jpg` | k2c45 | San hô đang phóng bó trứng, khu bảo tồn biển Flower Garden Banks | National Marine Sanctuaries (NOAA) | phạm vi công cộng | https://commons.wikimedia.org/wiki/File:Coral_Spawning_(38797556434).jpg |

*(`k2-traidat.jpg`, `k2-terminator.jpg`, `k2-kenh-mekong.jpg`, `k2-ruong-mekong.jpg`,
`k2-dbscl-vetinh.jpg`, `k2-chonoi.jpg`, `k2-ruong-bac-thang.jpg` còn nằm trong `anh/`
từ bản V1 nhưng **bản V3 không cảnh nào gọi tới** — kịch bản mới đã bỏ hẳn đoạn đồng
bằng sông Cửu Long khỏi khối 2. Không xoá, để khối khác dùng nếu cần.*
*Riêng `k2-traidat.jpg` (ảnh ĐĨA Trái Đất) cố ý không dùng: quả cầu của cả tập nay
lấy chất liệu từ bản đồ TRẢI PHẲNG `k2-traidat-phang.jpg` để còn cuộn được — nếu
chỗ nào dùng ảnh đĩa thì cả tập lại có hai Trái Đất khác nhau, đúng lỗi L2 đang chữa.
`k2-hau.jpg` và `k2-nganha.jpg` trước nằm không, vòng sửa 28/11 đã gọi lại; khai
nguồn lấy từ `canh/.cu-v1/nguon-khoi-2.md` của bản V1.)*

### Lỗi khớp ngữ cảnh — chỗ đã phải cân nhắc (bẫy §11.9)

Câu 43 nói rõ **"Ngoài khơi nước Úc, ở rạn Great Barrier"**. Vì vậy ba tệp dùng cho
cụm câu 42–44 và 47–49 đều quay **tại chính rạn Great Barrier** (Lady Musgrave và
đảo Lizard), không mượn rạn khác cho đẹp.
Tấm ảnh san hô **đang phóng trứng rõ nhất** mà tìm được có giấy phép sạch lại chụp ở
**Flower Garden Banks, vịnh Mexico**. Nên nó **không** được dùng cho câu 43, mà chỉ
dùng cho câu 45 — câu nói về **cơ chế chung** (cryptochrome) chứ không nêu địa danh —
và dòng nguồn trên hình ghi thẳng nơi chụp.

Tương tự, clip bọ hung là của **Tây Ban Nha** còn nghiên cứu Dacke 2003 làm ở
**Nam Phi**. Dòng nguồn trên hình tách bạch hai thứ: *"Dacke và cộng sự · Nature 424,
33 (2003) · clip: MdeVicente · CC0"* — nghiên cứu một dòng, nguồn clip một dòng.
Clip đúng loài bọ hung của nhóm Dacke có trên Commons nhưng là CC BY-SA, không dùng được.

### Kiểu vẽ Trái Đất và Mặt Trăng — ĐÃ CHỐT VỚI KHỐI 1 ngày 28/11/2026

Khối 1 hỏi sang để cả tập không có ba bốn kiểu quả cầu khác nhau. Chốt: **ảnh thật
của NASA, không còn hành tinh vẽ tay.** Khối 2 đã sửa `K2.cau()` và `K2.trang()`.

Có **đúng hai cách**, và chúng không chỏi nhau vì dùng cho hai việc khác nhau:

| việc | dùng gì | khối nào |
|---|---|---|
| Trái Đất **đứng yên**, nhìn như một hành tinh ngoài không gian | ảnh đĩa thật đặt thẳng (Apollo 17 `k1-traidat.jpg`, hoặc clip DSCOVR `k2-traidat-quay.mp4`) | khối 1 · khối 2 (k2c04 · k2c26 · k2c30) |
| Trái Đất **phải quay**, hoặc phải nghiêng/lắc theo sơ đồ | đĩa tròn tô bằng **bản đồ NASA trải phẳng**, hai bản cạnh nhau cuộn ngang trong `<clipPath>` | khối 2 (19 cảnh) |

**Vì sao không dùng thẳng ảnh đĩa cho cả hai:** 16 trên 19 cảnh có quả cầu của khối 2
đang cho Trái Đất quay (`K2.xoay`). Một tấm ảnh **đĩa** không quay được — cuộn nó là
lòi mép đen. Bản đồ **trải phẳng** thì nối vòng liền mạch, quay bao lâu cũng không có
đường ghép; đã kiểm bằng cách chụp k2c27 (cảnh quay nhanh nhất, 44 độ/giây) ở sáu mốc
liên tiếp: châu Mỹ → Đại Tây Dương → châu Phi, không thấy mối nối.
Đĩa chỉ lấy **dải vĩ độ giữa** (hệ số `CAO = 2r × 1,46`) để hai cực khỏi bị kéo giãn
thành vệt trắng.

**Mặt Trăng:** `k2-mattrang.jpg` cắt tròn, không cần trải phẳng vì không cảnh nào
cho Mặt Trăng quay. Tấm này **đúng cùng một ảnh gốc** với `k1-mattrang.jpg` của khối 1
(ghép ảnh mặt gần từ LRO Wide Angle Camera). Hai khối giữ hai bản sao riêng theo đúng
luật tiền tố tệp — **không trỏ chéo**, vì trỏ chéo thì ai sửa ảnh là hỏng khối kia mà
không ai biết.

**Ba lớp phủ rìa — thông số CHUNG, sửa ở đây thì phải báo khối 1:**

| lớp | hình | kiểu | tham số |
|---|---|---|---|
| (a) bóng ngày–đêm | tròn bán kính `r` | `linearGradient` từ `(cx−r, cy)` tới `(cx+r, cy)` | `0 → #04060E mờ 0` · `0,40 → #04060E mờ 0` · `0,66 → #04060E mờ 0,54` · `1 → #04060E mờ 0,93` |
| (c) tối rìa | tròn bán kính `r` | `radialGradient` tâm `(cx − 0,34r, cy − 0,38r)` bán kính `1,75r` | `0 → mờ 0` · `0,62 → mờ 0` · `1 → #04060E mờ 0,55` |
| (b) vành khí quyển | tròn bán kính `1,3r`, **`mix-blend-mode: screen`** | `radialGradient` tâm `(cx, cy)` bán kính `1,3r` | `0,74 → #9BE0FA mờ 0` · `0,93 → #9BE0FA mờ 0,34` · `1 → #9BE0FA mờ 0` |

Mặt Trăng dùng y hệt (c) và (b), **bỏ (a)**, và đổi màu lớp (b) thành `#DDE6EC` mờ tối
đa **0,18** — Mặt Trăng không có khí quyển, vành ở đó chỉ là chút tán sáng bạc.

Bản đồ Blue Marble vốn rất tối ở phần đại dương, cộng thêm (a) và (c) nữa thì đĩa chìm
hẳn. Nâng sáng **ngay trên thẻ `<image>`** (`brightness(1.34) saturate(1.12)
contrast(1.04)`; Mặt Trăng `brightness(1.18) contrast(1.06) saturate(.7)`), **không**
nâng bằng cách hạ lớp phủ — lớp phủ là thông số chung với khối 1.

---

## 3. Nguồn SỐ LIỆU hiện trên hình (không phải ảnh)

| cảnh | con số trên hình | nguồn |
|---|---|---|
| k2c05 | Mặt Trời nặng gấp 27.000.000 lần Mặt Trăng | tỉ số khối lượng chuẩn: 1,989 × 10³⁰ kg ÷ 7,342 × 10²² kg = 2,709 × 10⁷ |
| k2c11 | 390 | tỉ số khoảng cách trung bình: 149,6 × 10⁶ km ÷ 384,4 × 10³ km = 389,2 |
| k2c12 | 390 × 390 × 390 = **59.319.000** | số học thuần, kiểm được bằng máy tính bỏ túi |
| k2c13 | 27.000.000 ÷ 59.319.000 = **0,455**, nằm BÊN TRÁI mốc "một nửa" | khớp với NOAA: lực triều Mặt Trời ≈ 46 % lực triều Mặt Trăng (tức Mặt Trăng ≈ 2,2 lần) — https://tidesandcurrents.noaa.gov/restles3.html |
| k2c17 · k2c24 | 23,4° | độ nghiêng trục Trái Đất hiện nay |
| k2c18 · k2c19 · k2c21 · k2c24 · k2c25 | **0° – 85°** | Laskar, Joutel & Robutel, *Nature* **361**, 615 (1993) — https://www.nature.com/articles/361615a0 |
| k2c23 · k2c24 · k2c25 | **10° – 50°** | Lissauer, Barnes & Chambers, *Icarus* **217**, 77 (2012) — https://www.sciencedirect.com/science/article/abs/pii/S0019103511004143 |
| k2c28 | 3,8 cm mỗi năm | đo bằng laser lên các tấm gương Apollo (xem khối 1) |
| k2c30 | mặt đồng hồ 24 giờ co còn **5–6 giờ** | mô hình Trái Đất sơ khai, xem `nghien-cuu/tu-lieu.md` |
| k2c31 | mặt đồng hồ KHÔNG chốt ở đâu cả | cố ý: không có nguồn nào cho con số này |
| k2c32 | «6–8» — **CỐ Ý VẼ NHƯ TIN ĐỒN** | KHÔNG có nguồn. Đó chính là lý do nó nằm trên màn hình: 14 bản sao lệch nhau, mỗi bản treo trên một ô nguồn **rỗng** nét đứt; con số tắt dần, ô nguồn ở lại rỗng. Xem `tu-lieu.md`, mục "ĐỪNG DÙNG" số 1. |
| k2c40 | 1 : 1.000.000 | Dacke và cộng sự, *Nature* **424**, 33 (2003) |
| k2c43 | lịch 30 đêm, khoanh **mấy đêm ngay sau rằm** | câu 43 của lời dẫn |
| k2c45 | cryptochrome mở khi gặp ánh sáng xanh | nghiên cứu 2007 nêu trong lời dẫn; `tu-lieu.md` tự ghi là **chỉ đọc qua bản tóm tắt báo chí, chưa đọc bài gốc** — nên hình chỉ vẽ cơ chế "cổng mở", không gán con số nào |
| k2c46 | thang **lô-ga-rít** 10⁻¹ → 10⁵ lux, nắng ≈ 10⁵, trăng rằm ≈ 0,3 | vẽ bằng thang log và **ghi rõ trên trục là log**, vì tỉ lệ thật khoảng 400.000 lần: vẽ theo tỉ lệ thẳng thì vạch trăng mảnh hơn một điểm ảnh |

**Hai chỗ cố ý KHÔNG vẽ theo tỉ lệ, và lý do:**
* k2c40 — vạch "trăng phân cực" đúng tỉ lệ 1/1.000.000 trên một thanh 940 px sẽ là
  0,00094 px. Nên nó được vẽ thành một **chấm sáng** cạnh con số tỉ lệ, chứ không
  phải một thanh ngắn giả vờ đo được. (Bản thử đầu vẽ thanh 3 px và khi xem lại thì
  nó đọc ra như một lỗi vẽ.)
* k2c46 — cùng lý do, nhưng ở đây giải được bằng **thang log có nhãn trục**, nên dùng
  thang log.

---

## 4. Chữ biên tập — 5 lần, không lần nào quá 4 từ

| cảnh | hiện gì | số TỪ |
|---|---|---|
| k2c05 | `27.000.000` + «lần» | **1** |
| k2c11 · k2c12 · k2c13 | phép tính 390 → 390³ → 27/59,319 = 0,455, cộng nhãn «một nửa» ở mốc đỏ | **2** (cụm ba cảnh liền, tính một lần) |
| k2c30 | mặt đồng hồ: `24` → `5,1` + «h» | **0** |
| k2c32 | `6–8` nhân bản | **0** |
| k2c46 | thang log + nhãn «nắng» / «trăng rằm» | **3** |

Nhãn in trên sơ đồ (`23,4°`, `0°`, `85°`, `10°`, `50°`, `1993`, `2012`,
`Nature 1993`, `Icarus 2012`, `cryptochrome`) **không tính** — đó là kết cấu của
sơ đồ, theo quy ước ở mục 2 Luật B của hướng dẫn. Dòng nguồn `.nguon` ở góc dưới
cũng không tính, và **không bao giờ hiện cùng lúc với chữ biên tập**.

---

## 5. Số lần đổi hình thật của khối 2 — ĐẾM TỪ MÃ NGUỒN

Theo bẫy **§11.11**: **không** đếm bằng `ffmpeg select='gt(scene,…)'` (bộ máy trang
chuyển cảnh bằng hoà hình 0,42 s, máy dò cảnh bỏ sót gần hết ranh giới).

| đại lượng | số |
|---|---|
| lời gọi `DANGKY` | **49** (bằng đúng số câu — một cảnh một câu) |
| mốc **cắt cứng bên trong cảnh** (`K2.cat`) | **29** |
| **tổng lần đổi hình** | **78** |
| độ dài khối | 283,62 s |
| **mật độ** | **16,5 lần/phút** — trong dải 12–18 của Luật A |

Mục tiêu phiếu giao việc là 56–85, đạt ở mức 78.

**Vì sao 49 `DANGKY` chứ không phải 78:** bộ máy trang dựng dòng thời gian bằng cách
ăn lần lượt từng câu cho từng cảnh (`soat-khoi.py → ve_thu`), nên **mỗi cảnh phải nuốt
ít nhất một câu** — trần cứng là 49 cảnh. Phần còn lại của mật độ phải đến từ cắt cứng
trong cảnh, đúng như cách §11.11 định nghĩa "lần đổi hình".

### Bảng mốc cắt cứng — đặt theo `c.u`, KHÔNG theo giây

Đặt theo tiến độ cảnh nên **đổi giọng đọc là cảnh tự co giãn**, không phải dựng lại (§15.6).

| cảnh | mốc `u` | cắt từ → sang |
|---|---|---|
| k2c02 | .52 | Mặt Trời SDO → đĩa Mặt Trăng LRO |
| k2c07 | .58 | sơ đồ hiệu lực triều → ảnh nước lớn vịnh Fundy |
| k2c09 | .50 | luật chia hai (lực hút, lam) → cùng hình, màu vàng (ánh sáng) |
| k2c10 | .46 | một khối → tám khối |
| k2c12 | .44 | ba cạnh → khối lập phương kín + số 59.319.000 |
| k2c13 | .30 · .62 | phân số → hai thanh so chiều dài → mốc "một nửa" |
| k2c17 | .52 | sơ đồ trục 23,4° → ảnh mùa gặt |
| k2c18 | .46 | trục ổn định → quạt 0–85° mở toang |
| k2c20 | .34 · .70 | cực phơi nắng → cực chìm tối → ảnh mùa gặt rút kiệt màu |
| k2c21 | .50 | quạt 0–85° → hai mũi tên ép lại từ hai đầu |
| k2c22 | .44 | vài lần chạy → 24 lần chạy cùng lúc |
| k2c23 | .45 | dải Laskar mờ đi → dải Lissauer 10–50° hiện ra |
| k2c30 | .42 | mặt đồng hồ 24 giờ → co còn 5–6 giờ |
| k2c32 | .36 · .72 | tin đồn nhân bản → ô nguồn rỗng sáng lên → con số tắt, ô nguồn ở lại rỗng |
| k2c33 | .46 | hành tinh quay nhanh dần → ảnh bão Soudelor từ ISS |
| k2c34 | .48 | cột ĐO nét liền → cột SUY nét đứt |
| k2c35 | .50 | video trăng trong mây → video trời sao, chỗ trăng để trống |
| k2c38 | .44 | tranh «Làng dưới trăng tròn» → cua còng + mặt đồng hồ pha trăng |
| k2c39 | .50 | đường thẳng của bọ hung → thêm đường vòng vèo để so |
| k2c40 | .50 | bọ hung (Alex Wild) → bọ hung (Gillham) + thang so độ mạnh |
| k2c41 | .38 | bọ hung đêm tối → video dải Ngân Hà |
| k2c43 | .30 · .64 | rạn nhìn từ trên không → video san hô sống → lịch 30 đêm |
| k2c45 | .42 | polyp cận cảnh → san hô đang phóng trứng |
| k2c46 | .46 | video trăng trong mây → polyp + thang log |
| k2c49 | .48 | rạn còn trứng → rạn xám, không có gì nổi lên |

---

## 6. Kiểm bằng mắt — làm thật, không khai khống

* `python3 dung/soat-khoi.py` (**bản chính thức** của kho, không phải bản sao tạm —
  điều phối đã sửa nó đọc thẳng `_chia-khoi.json` ngày 28/11): khối 2 báo
  **49 cảnh · 49 câu (giao 49)**, vẽ thử mọi cảnh ở 4 mốc, **không cảnh nào chết**,
  **không lỗi JS**.
* Chụp **147 khung** (49 cảnh × 3 mốc u = 0,20 / 0,50 / 0,82) bằng
  `chup-k2.py`, rồi mở ra nhìn **toàn bộ** — ba vòng: lần đầu 147 khung, sau sửa
  lần hai 42 khung, lần ba 6 khung.
* Mọi tệp ảnh/video mà cảnh gọi tới đều đã kiểm là **có thật trên đĩa**.

**14 lỗi chỉ thấy được bằng mắt, đã sửa hết:**

1. k2c01 — hai thanh chặn khởi điểm nằm ngoài khung nên **không bao giờ xuất hiện**; đĩa Mặt Trăng bị máy quay cắt mất đỉnh. → đổi điểm xuất phát, hạ mức đẩy máy.
2. k2c02 — sau mốc cắt, Mặt Trăng phóng to tới mức chỉ còn thấy mặt đất đầy hố, không đọc ra là Mặt Trăng. → thêm tham số `contain` cho `K2.anh`, hạ `z` về 1,0.
3. k2c07 — sau mốc cắt, **sơ đồ quả cầu vẫn lảng vảng ở 45 % trên ảnh bến tàu thật**. → tắt hẳn lớp sơ đồ và lớp sao.
4. k2c12 — khối lập phương nằm dưới mép khung, chỉ thấy một cái chóp. → nâng gốc từ y = 672 lên 528.
5. k2c17 — y hệt lỗi (3) trên ảnh đồng lúa mì. → tắt hẳn.
6. k2c20 — y hệt lỗi (3) ở mốc cắt thứ hai. → tắt hẳn.
7. k2c22 — 24 "lần chạy" bị gom vào đúng **3 bán kính** nên nhìn ra chỉ có 3 đường. → rải bán kính theo từng lần chạy.
8. k2c25 — hai quả cầu quá nhỏ, khung gần như trống, và hai nhãn *Nature 1993* / *Icarus 2012* rơi khỏi mép dưới. → phóng to quả cầu và vành quạt, nâng nhãn, thêm phần tô mờ cho hai dải.
   **⚠ DÒNG KHAI NÀY TỪNG SAI, SỬA 28/11.** Người soát độc lập chụp khung và thấy hai
   nhãn vẫn bị cắt; tôi đo lại bằng `getBoundingClientRect()` ở 10 mốc `c.u` và xác nhận
   **họ đúng, phần "nâng nhãn" chưa bao giờ được thực hiện**: đáy chữ rơi tới y = 742 và
   y = 744, tức ra hẳn ngoài khung 720 px. Bài học: nhãn bị cắt ở đây **không phải** do
   toạ độ tĩnh sai mà do `cam()` đẩy chữ ra, nên sửa toạ độ rồi vẫn tái phát nếu không
   kẹp biên độ máy quay. Nay k2c25 đã dựng lại hẳn (xem mục 8) và số đo là **0 vi phạm**.
9. k2c31 — chỉ có đồ hoạ trên nền trơn, sát ranh giới "cảnh rỗng" §15.2. → thêm lớp ảnh Mặt Trăng thật làm chất liệu nền.
10. k2c34 — lớp ảnh Mặt Trăng nền tối tới mức không nhìn ra. → nâng độ sáng 0,3 → 0,6.
11. k2c35 — **lỗi nặng nhất**: cái đĩa dùng để "xoá" Mặt Trăng đứng yên tại một toạ độ cố định, trong khi Mặt Trăng trong clip thì **di chuyển theo máy quay**, nên nó không bao giờ bị xoá; chữa tạm bằng cách tắt clip thì nửa sau thành một khung đen trơn. → dựng lại: cắt cứng sang **clip trời sao thật**, chỗ Mặt Trăng để trống, có ba vòng tìm kiếm rỗng.
12. k2c40 — vạch "trăng phân cực" vẽ 3 px đọc ra như lỗi vẽ. → đổi thành chấm sáng + con số tỉ lệ `1 : 1.000.000`.
13. k2c41 — ảnh bọ hung ở nửa đầu tối gần như đen. → độ sáng 0,2 → 0,44.
14. k2c48 / k2c49 — bó trứng quá nhỏ và quá mờ, gần như không thấy. → bán kính và độ đậm tăng khoảng 1,7 lần.

**Ba câu trả lời bắt buộc của phiếu giao việc:**

* **Cảnh nào còn rỗng?** Không cảnh nào. Sau khi sửa (9) và (11), cả 49 cảnh đều có ít
  nhất hai trong ba thứ của §15.2. 33 cảnh có ảnh hoặc video thật; 16 cảnh còn lại là
  sơ đồ cơ chế (ngoại lệ được vẽ theo §15.1.3) và đều đứng trên nền chuyển sắc có hạt
  nhiễu cộng một lớp đồ hoạ đang chuyển động. Cảnh tôi **ít tự tin nhất** là k2c22
  (24 lần chạy của Lissauer) — nó đúng ý nhưng hơi giống một đám cung tròn.
* **Ảnh nào không khớp nội dung câu?** Không còn. Hai chỗ suýt sai đã xử lý ở mục 2:
  ảnh san hô phóng trứng ở vịnh Mexico **không** dùng cho câu nói về rạn Great Barrier,
  và clip bọ hung Tây Ban Nha có dòng nguồn tách bạch với nghiên cứu Nam Phi.
* **Video có chạy không hay đứng hình?** Chạy. Kiểm bằng cách chụp cùng một cảnh ở ba
  mốc `u` khác nhau rồi so: k2c35 (mây trôi qua mặt trăng), k2c39 (bọ hung lăn phân,
  con bọ đổi tư thế), k2c42 và k2c49 (máy lướt trên rạn), k2c43 và k2c47 (san hô lay),
  k2c04 và k2c26 (Trái Đất quay lộ ra châu lục khác), k2c44 (Mặt Trăng xoay) — khung
  nào cũng khác khung nào. Không cảnh nào gọi `play()`; harness tự tua, nên dựng lại
  lần nào cũng ra đúng một kết quả.

### Hai lỗi câm do khối 1 tìm ra — đã soát lại khối 2 (§16.8 và §16.9)

Khối 1 báo sang ngày 28/11. Soát bằng máy toàn bộ file, kết quả:

**§16.8 — đụng id gradient / clipPath.** Khối 2 sinh **97 id** trong `<defs>`
(6 loại do `K2.cau` / `K2.trang` / `K2.mtroi` tự đặt theo tiền tố `pre`, cộng 4
gradient và 3 clipPath đặt tay). Dò bằng máy tìm ra **đúng một chỗ trùng**:

> cảnh **k2c33** có HAI `clipPath` cùng tên `k2c33-cp` — một do `K2.cau(V, "k2c33", …)`
> sinh ra qua `pre + "-cp"`, một do tôi tự đặt cho khuôn cắt dải gió. Vì `url(#…)`
> tra theo **cả tài liệu**, nhóm gió ăn khuôn cắt của quả cầu. Lần này hai khuôn
> trùng khít (cùng `circle(640, 372, 200)`) nên **không lộ ra một chút nào** — đúng
> kiểu lỗi mà bộ soát không bao giờ bắt được. Đã đổi thành `k2c33-giocp`.

Sáu hậu tố của ba hàm dựng (`-oc -bg -kq -cp` · `-tr` · `-nh -dt`) khác nhau từng đôi
một, nên gọi cả ba hàm với cùng một `pre` trong một cảnh là an toàn — nhưng gọi
**cùng một hàm** hai lần với cùng `pre` thì không (k2c25 đã tách sẵn `k2c25a`/`k2c25b`).
Sau khi sửa: **97 id, 97 tên khác nhau, không còn trùng.**

**§16.9 — `K2.nen()` là HAI `.lop`, không phải một.** `K2.nen()` trả về lớp chuyển sắc
*cộng* một lớp `svg.hat` chứa hạt nhiễu, nên mọi cách đếm chỉ số đều lệch. Khối 2 có
**hai chỗ** dùng `querySelectorAll(".lop")[1]` (k2c31 và k2c34, để hạ độ mờ lớp chuyển
sắc cho ảnh Mặt Trăng ở dưới lộ ra). Hai chỗ này **đang trỏ đúng** vì cả hai cảnh đều
đặt ảnh ở vị trí 0 — nhưng đó là may, không phải thiết kế: thêm hay bớt một lớp là hỏng
im lặng. Đã đổi cả hai sang `K2.id(K2.nen(…), "k2cNN-nen")` rồi lấy bằng `K2.lop(root, id)`.
**Nay trong khối 2 không còn một chỗ nào lấy lớp theo chỉ số.**

Sau hai sửa này: `soat-khoi.py` **SẠCH**, chụp lại 147 khung, riêng k2c31 · k2c33 · k2c34
mở ra nhìn kỹ — dải gió vẫn bị cắt gọn trong quả cầu, nền Mặt Trăng ở hai cảnh kia vẫn
lộ đúng như trước.

---

## 7. Điểm giáp ranh (bắt buộc theo §14)

| khẳng định | ĐO hay ĐOÁN | cách đo / vì sao | ngày | khối nào xác nhận |
|---|---|---|---|---|
| Mỗi cảnh `DANGKY` phải nuốt ít nhất một câu, nên trần cứng của khối 2 là **49 cảnh**; mật độ còn lại phải lấy từ cắt cứng trong cảnh | ĐO | đọc `ve_thu()` trong `dung/soat-khoi.py` và `__video/__frame` trong `tap03-full.html` | 28/11/2026 | **chưa ai xác nhận — mời khối 1 và khối 3 đối chiếu**, vì nếu đúng thì cả ba khối đều không thể vượt số câu của mình |
| Số lần đổi hình của khối 2 = **78** (49 + 29), tức 16,5 lần/phút | ĐO | đếm `DANGKY` và `K2.cat(c.u` từ mã nguồn, theo ba cách đếm đúng ở §11.11 | 28/11/2026 | chỉ khối 2 |
| `VID()` tua đúng và tất định ở chế độ dựng; `__khungSanSang()` phải được chờ trước khi chụp, nếu không khung đầu mỗi cảnh ra hình của giây cũ | ĐO | chụp cùng cảnh ở nhiều mốc, có và không chờ `__khungSanSang` | 28/11/2026 | **đúng cho cả ba khối** — ai dùng `VID()` cũng gặp |
| Một `.lop` do `K2.id()` gắn id rồi bật/tắt bằng `op()` là cách cắt cứng rẻ nhất; **nhưng phải nhớ tắt cả lớp sơ đồ và lớp sao**, nếu không chúng nằm đè lên ảnh thật mà không sinh lỗi nào | ĐO | lỗi (3)(5)(6) ở mục 6, chỉ thấy khi nhìn khung chụp | 28/11/2026 | **đúng cho cả ba khối** |
| Mọi mặt nạ đặt ở toạ độ cố định sẽ **trượt khỏi vật** nếu vật nằm trong một clip quay thật, vì `cam()` dời lớp còn mặt nạ thì không biết vật ở đâu | ĐO | lỗi (11) ở mục 6 | 28/11/2026 | **đúng cho cả ba khối** — ai định "xoá" một vật trong video đều vấp |
| `canh/giao-khoi-*.md` bản cũ lệch với `_chia-khoi.json` (khối 2: 51 câu / 178,4 s so với 49 câu / 255,2 s) | ĐO | so hai file ngày 28/11 | 28/11/2026 | điều phối đã xác nhận và đã sinh lại cả ba phiếu + sửa `soat-khoi.py` đọc thẳng `_chia-khoi.json` |
| Trên Wikimedia Commons, clip bọ hung **đúng của nhóm Dacke** tồn tại nhưng là CC BY-SA, không dùng được cho tập này | ĐO | tra `extmetadata.LicenseShortName` qua API Commons | 28/11/2026 | chỉ khối 2 |
| `url(#id)` tra theo **cả tài liệu**, không theo từng `<svg>`; và `K2.nen()` / `NEN()` là **hai** `.lop` chứ không phải một | ĐO | khối 1 tìm ra, khối 2 soát lại bằng máy trên 97 id và 2 chỗ lấy lớp theo chỉ số — tìm thêm được một trùng `k2c33-cp` | 28/11/2026 | **khối 1 tìm ra, khối 2 xác nhận** — đúng cho cả ba khối |
| Khối 2 không dùng tệp nào của Pexels / Pixabay / Coverr; cả 22 tệp từ Wikimedia Commons | ĐO | liệt kê lại toàn bộ `K2.anh` và `K2.vid` trong mã nguồn | 28/11/2026 | chỉ khối 2 |
| Kiểu vẽ Trái Đất / Mặt Trăng cả tập: **ảnh thật NASA**, hai cách dùng cho hai việc (đĩa thật khi đứng · bản đồ trải phẳng cắt tròn khi phải quay); ba lớp phủ rìa a/b/c dùng chung thông số | ĐO | khối 1 hỏi, khối 2 trả lời và đã sửa `K2.cau` + `K2.trang`; kiểm bằng 6 khung liên tiếp của k2c27 xem có mối nối không | 28/11/2026 | **khối 2 đề xuất, chờ khối 1 xác nhận** — nếu khối 1 thấy ba thông số phủ rìa không khớp cảnh của họ thì KHỐI 1 LÀ CHUẨN (14 cảnh ảnh thật, nhiều hơn), khối 2 chỉnh theo |
| `k1-mattrang.jpg` và `k2-mattrang.jpg` là **cùng một ảnh gốc** (LRO WAC nearside mosaic, phạm vi công cộng); hai khối giữ hai bản sao riêng, không trỏ chéo | ĐO | so trang gốc Commons của hai tệp | 28/11/2026 | **mời khối 1 xác nhận** |
| Tệp dùng chung với khối khác — **DÒNG CŨ SAI, ĐÃ VIẾT LẠI 28/11** | ĐO | Bản cũ khai "khối 2 không dùng chung tệp nào với khối 1 hay khối 3 … ba tệp khác nhau, ba nguồn khác nhau, đừng ai gộp". **Sai.** Người soát đối chiếu md5 và tôi đã chạy lại xác nhận: `anh/k2-sanho-de.jpg` và `anh/k1-sanho-de.jpg` **trùng nhau TỪNG BYTE**, md5 `96e8b79fe6ac2b70585352cc115410dc`, cùng 1920×1276, cùng gốc Commons `File:Coral_Spawning_(38797556434).jpg` — hai khối cùng tải bản thu nhỏ 1920 px của cùng một tệp NOAA. Chỉ `k3-sanho-de.jpg` (md5 khác) mới thật sự là tệp khác. Tiền tố tên tệp KHÔNG chứng minh được nội dung khác nhau, và cả ba file nguồn đã khai sai cùng một kiểu vì cùng suy từ tên tệp. **Nay khối 2 có đúng BỐN quan hệ dùng chung, khai hết:** (1) `k2-sanho-de.jpg` ≡ `k1-sanho-de.jpg` (trùng byte); (2) `anh/k3-ran-hardy.jpg` — khối 2 **trỏ thẳng** vào tệp của khối 3 ở k2c43, chủ tệp là khối 3, họ cam kết không xoá/đổi tên/cắt lại; (3) `video/k2-sanho-de2.mp4` và `video/k2-sanho-khoi.mp4` là **bản sao từng byte** của `video/k3-sanho-de.mp4` và `video/k3-sanho-khoi.mp4`; (4) `anh/k2-mattrang.jpg` ≡ `anh/k1-mattrang.jpg`, **trùng từng byte**, md5 `a653acf806d04e0a444806e6d9f22bb2`, cùng 1920×1920 — khối 1 báo sang là "hai bản sao của cùng một ảnh gốc", tôi chạy md5 thì thật ra còn chặt hơn thế: cùng một tệp. Đây là tấm Mặt Trăng của **mọi** đĩa Mặt Trăng trong tập, nên trùng là đúng, chỉ có lời khai cũ là sai. | 28/11/2026 | **khối 1 và khối 3 đã xác nhận**; người dựng khối 2 bản trước cũng tự chạy md5 và nhận là mình khai sai |
| Bản cắt rạn Hardy: cả tập dùng **một** bản duy nhất | ĐO | `anh/k2-gbr-khong.jpg` (1920×1440) và `anh/k3-ran-hardy.jpg` (1920×1080) là **cùng một ảnh gốc**, hai bản cắt khác nhau, nên md5 khác mà mắt thì thấy "hai cái rạn" trong cùng một tập. Đã chốt dùng bản 16:9 của khối 3 cho cả k2c43, k3c23 và k3c31. `k2-gbr-khong.jpg` còn trong kho nhưng không cảnh nào gọi. | 28/11/2026 | **khối 3 đã đồng ý**, khối 1 đã biết |
| Thông số máy quay ở điểm nối | — | cảnh **cuối** của khối 2 (k2c49, giây 532,9–538,8) kết ở `x = +12, z = 1,20`, nền là clip rạn san hô **đã rút gần hết màu** (`saturate .42`). Khối 3 mở ngay sau đó, nên nếu khối 3 mở bằng một khung rực màu thì cú nối sẽ giật. | 28/11/2026 | **mời khối 3 xác nhận** |

---

## 8. VÒNG SỬA THEO BẢN SOÁT ĐỘC LẬP — 28/11/2026

Sửa theo `canh/SOAT-CANH.md`. Khối 2 bị chấm **6 mục CHẶN** và **16 mục NÊN SỬA**.
Người soát chụp 860 khung và xem hết, nên mọi mục dưới đây đều là thứ nhìn thấy
bằng mắt, không suy từ mã.

**Bàn giao giữa chừng:** file này và `canh/khoi-2.js` đổi người giữ lúc 15:41 —
phiên dựng gốc `t3-khoi-2` ngừng ghi, phiên sửa nhận lại. Phần `K2.cau()` /
`K2.trang()` (quả cầu ảnh thật) là của người dựng gốc và được **giữ nguyên hướng**,
chỉ chỉnh hai thông số lớp phủ, lý do ghi ở mục 8.2.

### 8.1 Ba mục CHỮ BỊ MÉP KHUNG CẮT — đo thật, không ước lượng

Người soát đề nghị vùng an toàn **48 px**: mọi chữ phải nằm trong
`x ∈ [48, 1232]`, `y ∈ [48, 672]` ở **mọi** mốc `c.u`.
Đã viết một bộ đo chạy `getBoundingClientRect()` cho mọi `<text>` và mọi `.tx`
của cả 49 cảnh ở **10 mốc `c.u`**, có hai điều chỉnh quan trọng:

* **Đo VẾT MỰC bằng `Range.getClientRects()`, không đo hộp phần tử.** Mấy `.tx`
  của khối 2 rộng nguyên 1280 px và căn giữa, đo hộp thì báo vi phạm giả ở 26 chỗ.
* **Phải đo ở nhiều mốc.** Gần như mọi vi phạm thật là do `cam()` đẩy chữ ra, chứ
  không phải toạ độ tĩnh sai. Đó chính là lý do lỗi k2c25 "sửa rồi vẫn tái phát".

Kết quả lần đo đầu: **57 phần tử chữ vượt khung**. Sau khi sửa: **0**.

| chỗ | số đo trước | cách chữa |
|---|---|---|
| **k2c25** «Nature 1993» / «Icarus 2012» | dưới mép **70 px** và **72 px** (ra hẳn ngoài khung 720) | dựng lại cảnh (mục 8.3), biên độ lia về `x ±9` |
| **k2c40** «trăng phân cực · 1 : 1.000.000» | trái **26 px** + dưới **51 px** | cụm dời vào trong (y 592→470, x 170→232), lia về `x ±9`, đẩy `z` 1,21→1,13 |
| **k2c40** «nắng phân cực» | trái **17 px** | như trên |
| **k2c46** «nắng» | phải **60 px** | trục thu từ 940 px còn 780 px căn giữa, nhãn đặt **lùi vào trong** đầu trục |
| **k2c46** «10⁵» | phải **45 px** | như trên |
| **k2c32** «6–8» | trên **58 px** | dải y của cụm dời xuống (mục 8.3) |
| **k2c30** «24» trên mặt đồng hồ | trên **33 px** | hạ tâm đồng hồ 330→352, thu bán kính 222→204 |
| **k2c30** «24 h» … «5,6 h» | dưới **6 px** | nâng con số 596→560 |
| **25 dòng `.nguon`** của cả khối | dưới **20–28 px**, lệch trái/phải **12 px** | sửa **một dòng** trong `K2.nguon()` |

**Hai chỗ người soát nói chưa chính xác, nêu kèm bằng chứng:**

* **k2c46 — sai vế trục.** Báo cáo ghi *"nhãn trục 10⁻¹ bị mép TRÁI cắt"*. Số đo
  cho thấy ngược lại: đầu TRÁI của trục nằm trong khung ở cả 10 mốc; cái bị cắt là
  đầu PHẢI — «nắng» (60 px) và «10⁵» (45 px). Phần còn lại của nhận xét thì đúng,
  và cách chữa họ đề nghị (thu bề ngang trục, đưa nhãn vào trong) đúng cho cả hai vế.
* **k2c30 và k2c32 bị bỏ sót.** Ba chỗ nữa vượt khung mà báo cáo không nêu, trong đó
  «6–8» của k2c32 lòi lên trên tới 58 px — nặng hơn hai trong ba mục họ xếp mức CHẶN.

**Còn một chỗ chưa khớp, cần điều phối quyết:** chốt 16.10 của điều phối đặt dòng
nguồn ở `y = 650` cho cả ba khối, nhưng đo mực chữ thì đáy rơi ở y ≈ 674–675, tức
**vượt hộp an toàn 2–3 px** (vẫn còn trong khung 720, không chữ nào bị cắt). Khối 2
**theo chốt 16.10** vì đó là quyết định ràng buộc cả ba khối. Muốn thoả cả luật L3
thì đổi `y = 650` thành `y = 646` ở cả ba khối — sửa một dòng mỗi khối.

### 8.2 Kiểu Trái Đất / Mặt Trăng — khối 2 chủ trì, đã chốt và đã phát cho hai khối

Người soát đếm được **bốn Mặt Trăng và ba Trái Đất khác nhau** trong một tập 12
phút, có chỗ cách nhau chưa đầy 10 giây. Đây là lỗi duy nhất không người dựng nào
tự thấy được, vì ai cũng chỉ nhìn khối mình.

**Kiểu đã chốt: ảnh NASA thật cắt tròn.** Khác đề nghị của người soát một chỗ, và
đây là lý do: họ đề nghị `anh/k2-traidat.jpg`, nhưng đó là ảnh **đĩa** Trái Đất, mà
16 trên 19 cảnh có quả cầu của khối 2 **cho Trái Đất quay** — cuộn một tấm ảnh đĩa
là lòi mép đen. Nên chất liệu là **bản đồ trải phẳng** `k2-traidat-phang.jpg`, đặt
hai bản cạnh nhau rồi cuộn ngang trong khuôn tròn, nối vòng liền mạch. Mặt Trăng
không quay ở cảnh nào nên dùng thẳng đĩa `k2-mattrang.jpg`.

Hai thông số đã chỉnh sau khi **chụp khung ra nhìn**, và đã báo cả hai khối kia:

* **vành khí quyển** thu từ `r × 1,30` còn `r × 1,22`, đỉnh độ mờ từ 0,34 xuống 0,22.
  Lý do: trên nền GIẤY SÁNG của k2c21 (xem 8.4) vành dày đọc ra như một cái quầng
  trắng dán quanh đĩa. Trên nền tối thì không lộ, nên chỉ chụp đủ loại nền mới thấy.
* **tối rìa** từ 0,55 lên 0,64 và kéo chặng vào gần tâm, vì ảnh đã nâng sáng 1,34
  nên đĩa đọc ra hơi phẳng.
* Mặt Trăng dùng quầng **bạc 0,14**, không phải vành khí quyển lam — Mặt Trăng
  không có khí quyển, và chỗ này lộ ngay khi hai thiên thể đứng cạnh nhau.

`window.K2` đã được mở ra ở cuối `khoi-2.js`. **Khối 3 gọi chéo `K2.cau()` và
`K2.trang()` ở 12 chỗ trên 8 cảnh** thay vì chép lại hàm — nên **đổi chữ ký hai hàm
đó từ nay là làm hỏng cảnh của khối 3, phải nhắn họ trước.** Khối 1 đã nhận thông
số và giữ quyền quyết định cuối: nếu ba lớp phủ không khớp cảnh của họ thì **khối 1
là chuẩn** (họ có 14 cảnh ảnh thật, nhiều hơn), khối 2 chỉnh theo.

**Một lỗi câm tìm ra trong lúc làm việc này:** `__khungSanSang()` của harness chỉ
chờ thẻ `img` và `video`, nó **không biết tới `<image>` của SVG**. Mọi cảnh có quả
cầu sẽ chụp ra **đĩa TRỐNG ở khung đầu** mà không sinh một dòng lỗi nào — tức lọt
qua `soat-khoi.py` và lọt luôn vào MP4. Điều phối đã vá thẳng `tap03-full.html`.

### 8.3 Sáu mục CHẶN

| cảnh | hỏng gì | đã làm gì |
|---|---|---|
| **k2c34** — *cảnh rỗng rõ nhất cả tập* | 8,2 giây hiện **tám tấm thẻ TRỐNG TRƠN**, bên trong chỉ mấy thanh xám giữ chỗ, không một chữ; trông hệt màn hình đang tải, và rơi đúng vào câu tuyên bố về tính trung thực của kênh | Bỏ hẳn tám thẻ. Dựng **hai cột có tiêu đề thật**: trái **"ĐO ĐƯỢC"** nét liền với ba dòng số đã nói trong tập (3,8 cm mỗi năm · 2,2 lần · 23,4°), phải **"TÔI SUY RA"** nét đứt với hai dòng (còn 1 / 3,2 · một ngày dài bao nhiêu), mỗi dòng phải mang một dấu **"?"** (luật L4: khung trống không phải một ký hiệu). Nâng sáng lớp nền Mặt Trăng từ 0,60 lên 0,92 và hạ độ mờ lớp chuyển sắc đè lên nó 0,74 → 0,62, nên mặt trăng thật hiện rõ làm chất liệu |
| **k2c15** | câu là "thắng **không nhờ to xác**" nhưng hình vẽ Mặt Trăng to gần bằng Trái Đất và Mặt Trời đã trôi hẳn khỏi khung — cảnh nói về kích thước mà vẽ sai kích thước, lại bỏ mất vật để so | Dựng lại: đủ **ba vật** trong khung cuối. Mặt Trời là một cung sáng bán kính 620 px tâm ngoài khung, chỉ thấy phần rìa (to mà xa); Trái Đất **150 px**; Mặt Trăng **40 px** ngồi sát Trái Đất. Hai nhãn "to · xa" và "nhỏ · gần" |
| **k2c25** | hai nhãn rơi khỏi mép dưới (mục 8.1), **và** cùng một sự thật được vẽ bằng hai ngữ pháp hình khác nhau ở k2c25 và k3c21 | Dựng lại bằng **thanh ngang có trục độ**, chép đúng hình học k3c21 của khối 3 (`px(d) = 316 + 824·d/90`, trục ở y = 552, vạch mỗi 15°) nên hai cảnh nay khớp từng pixel. Màu giữ cặp của khối 2 (`#EE7B5E` Laskar · `#6FC3E8` Lissauer), khối 3 đổi nền của họ sang tông tối cho khớp |
| **k2c40** | dòng chữ bị cắt cả mép trái lẫn mép dưới | xem mục 8.1 |
| **k2c46** | nhãn "nắng" và nhãn trục bị cắt | xem mục 8.1; thêm một **thẻ nền tối** dưới cả thang, vì nửa sau cảnh là ảnh polyp rực sáng và nhãn trục xám-lam đặt thẳng lên đó gần như không đọc được |
| **k2c06 + 13 cảnh quả cầu vector** | hai phong cách Trái Đất/Mặt Trăng cách nhau 10 giây | xem mục 8.2 — sửa **một hàm**, chữa 19 cảnh |

### 8.4 Quy ước ngữ pháp hình đã chốt với khối 3

Người soát đòi "chọn MỘT" cho cuộc tranh luận Laskar/Lissauer. Đã chốt chia theo
**việc**, chứ không theo cảnh — như vậy người xem vẫn chỉ học một quy ước cho mỗi việc:

* **so hai KHOẢNG đã công bố với nhau** → **thanh ngang có trục độ** (k2c25, k3c21);
* **độ nghiêng của một cái trục ĐANG LẮC trên quả cầu** → **vành quạt** (k2c18–k2c24),
  vì ở đó cái quạt dính vào trục đang lắc thật, thanh ngang không thay được.

Tương tự, glyph protein **cryptochrome** nay là **hai cánh cửa** dùng chung cho
k2c45 và k3c25, chép đúng thông số khối 3 đã dựng (hai `rect` 96×220 bo rx 22, mở
92 px mỗi bên trên bề ngang cụm 208 px = **88 %**, thừa mức 40 % người soát đòi).
Bản cũ của khối 2 là hình nơ bướm, đọc ra giống biểu tượng Bluetooth.

### 8.5 Màu — phá chuỗi chín cảnh navy (mục F)

Cả tập đạt chuẩn, nhưng **riêng khối 2 là 64,5 % lam** vì k2c17–k2c25 là chín cảnh
liên tiếp, 61,5 giây, dùng chung một nền navy. Đã phá ở **năm** chỗ (người soát đòi
ba), và thêm một chỗ nữa cho luật L6:

| cảnh | nền cũ | nền mới | vì sao chỗ đó |
|---|---|---|---|
| k2c18 | navy vẽ | **ảnh thật** bầu trời đêm trên đài thiên văn Paranal | cảnh nói về một bài báo thiên văn; bỏ luôn lớp sao vẽ tay vì ảnh có sao thật |
| k2c19 · k2c20 | navy | **đỏ đất** `#4A2518` | sắc này đã khai ở đầu `khoi-2.js` ("đỏ đất trục nghiêng") mà chưa cảnh nào dùng; hai cảnh này nói về trục ngả tới 85° nên tông nóng cũng hợp nghĩa |
| k2c21 | navy | **giấy sáng** `#E8DCC2` | đây là KHÚC NGOẶT của lập luận ("con số ấy về sau đã bị phản biện") — đổi nền ở đúng chỗ lập luận quay đầu thì cú đổi màu tự nó mang nghĩa. Nét vẽ của cảnh đổi sang nâu sẫm, vì nét bạc biến mất trên giấy |
| k2c22 | navy `#16263C` | **lục thẫm** `#143634` | luật L6 cấm quá hai cảnh liền dùng chung một nền, mà c22–c23–c24 trước là ba cảnh cùng một màu y hệt |
| k2c25 | navy | **tím than** `#2A2233` | kết chuỗi bằng một tông khác hẳn |
| k2c16 | — | đổi ảnh sang **bãi hàu** vàng lục | kéo thêm một dải màu vào khối, và tấm "nước ròng" cũ nay đã đứng cạnh tấm "nước lớn" ở k2c07 nên dùng lại là lặp |

**Số đo, cùng thuật toán của `dung/do-mau.py`** (bỏ điểm tối `v < 0,12` và điểm xám
`s < 0,18`, 12 dải sắc độ 30°), chạy trên **143 khung chụp thẳng từ trang, 1 khung
mỗi 2 giây**, phủ trọn 285 giây của khối — chưa có MP4 bản V3 nên đo như người soát đã làm:

```
                        trước (bản soát)   sau
   dải cao nhất (lam)        64,5 %        48,4 %
   số dải ≥ 5 %                 4             5
   điểm ảnh có màu                         62,3 %
```

Dải lam giảm **16 điểm phần trăm**, và khối có thêm một dải thứ năm (ngọc 6,2 %).
Nay khối 2 đạt cả hai ngưỡng **ngay cả khi đo riêng khối**, không chỉ khi đo cả tập.

### 8.6 Hai khối đánh giá ngược nhau về clip *Pocillopora* — quyết định và lý do

Khối 3 **loại** `Spawning Pocillopora meandrina` vì "chỉ 480×360, quá thấp"; khối 2
**dùng** chính clip đó ở bốn cảnh, tổng 24,7 giây.

**Quyết định: khối 3 đúng, bỏ clip.** Không quyết theo lời ai, mà cắt **hai khung
cùng một cỡ** (640×360, cùng giây 4, cùng vùng ảnh) của hai clip rồi mở ra đặt cạnh
nhau nhìn: bản cũ nhoè nhão thấy rõ, mất hẳn chi tiết polyp; bản NOAA sắc nét, thấy
được từng bó trứng. Đánh giá của khối 3 khớp với cái nhìn thấy.

Đã chép `video/k3-sanho-de.mp4` → `video/k2-sanho-de2.mp4` (1280×720 quay thật,
9,01 s, 4,8 MB, NOAA, phạm vi công cộng) và thay ở cả bốn cảnh.

**Cái phải đánh đổi, nói thẳng:** clip cũ quay ở **đảo Lizard trên chính rạn Great
Barrier**, tức khớp đúng địa danh mà câu 43 nêu; clip mới quay ở **vịnh Mexico**.
Xử lý theo §16.7 — ghi **thẳng nơi quay** lên màn hình: *"San hô nhả trứng — khu bảo
tồn biển Flower Garden Banks, vịnh Mexico · NOAA · phạm vi công cộng"*. Và **nhịp 1
của k2c43 vẫn là chính rạn Great Barrier** (ảnh rạn Hardy), nên vế địa danh của câu
vẫn có hình thật đỡ; đoạn phim chỉ minh hoạ **hành vi** đẻ đồng loạt.
Hai cảnh k2c47 và k2c49 trước **không có dòng nguồn nào** dù chiếu clip thật nhiều
giây — nay đã có.

### 8.7 Mười sáu mục NÊN SỬA

| cảnh | đã làm gì |
|---|---|
| k2c07 | đặt **hai ảnh vịnh Fundy cạnh nhau** ngay trong cảnh (nước lớn \| nước ròng), cùng khuôn hình, một vạch trắng chia đôi, hai nhãn. Trước đó tấm đối chứng nằm mãi ở k2c16 cách 50 giây nên không ai ghép được. **KHÔNG** vẽ vạch ngang nối hai mực nước như người soát đề nghị: hai tấm chụp từ hai điểm nhìn khác nhau, không có thước chung nào đặt lên được (đúng luật L5 của chính bản soát), và một vạch NGANG chạy qua cả hai nửa lại nói rằng hai bên **cùng** một mực — ngược hẳn ý cảnh |
| k2c16 | đổi sang ảnh bãi hàu giữa triều (xem 8.5) |
| k2c17–k2c25 | phá chuỗi navy (xem 8.5) |
| k2c20 | vùng cực nay là một **chỏm cầu** cắt theo đúng khuôn tròn quả cầu, có viền nét đứt, đổi **màu** giữa hai nhịp (vàng nắng ↔ đen) kèm hai nhãn "6 tháng nắng" / "6 tháng tối" trên thẻ nền tối. Nhịp 3 "mùa màng không còn": bỏ cách rút `saturate` về 0 (đọc ra là "ảnh đen trắng"), nay ảnh **khô sang nâu xám** bằng `sepia(.95) hue-rotate(-26°) brightness(.54)`. **KHÔNG** vẽ vết nứt đất như người soát đề nghị — đã dựng thử và chụp ra nhìn: tấm ảnh là lúa mì **đang đứng**, mặt đất không lộ ra, nên mấy đường nứt chạy thẳng lên trời và đọc ra như vết xước, đúng loại nét vẽ tay mà chính bản soát chê ở chỗ khác |
| k2c22 | xem mục 8.8 |
| k2c28 | **bỏ thanh đo khỏi ảnh bề mặt Mặt Trăng** (luật L5: thước chỉ đặt lên thứ nó đo được; ở đó 490 px ứng với hàng trăm km). Con số nay nằm trong một **thẻ riêng**, cạnh một **con tem** vẽ đúng cỡ làm thước so — con tem là cú đã gài ở k1c01 |
| k2c31 | nâng sáng lớp ảnh Mặt Trăng 0,44 → 0,84, hạ độ mờ lớp chuyển sắc 0,80 → 0,56, thêm quầng sáng sau mặt đồng hồ. Chụp lại: mặt trăng thật hiện rõ, hết "sát ranh giới cảnh rỗng" |
| k2c32 | mỗi ô nguồn rỗng nay mang một dấu **"?"** (luật L4); bỏ hẳn quả cầu bé xíu nằm dưới đáy không làm gì; thêm dòng kết cấu "không tìm được nguồn"; cụm số dời xuống giữa khung. **Toạ độ 14 bản sao đặt TAY** sau hai lần thử hỏng: `rn()` dồn cục, rồi `(i·a) % m` cho cả x lẫn y làm hai toạ độ **tương quan tuyến tính** nên 14 bản xếp thành một vệt chéo — chỉ nhìn khung chụp mới thấy |
| k2c33 | ảnh bão: `contrast` 1,12 → **1,22**, `saturate` 1,06 → **1,10**, `brightness` 0,82 → **0,80**, thêm một lớp chuyển sắc lam thẫm phủ hai góc trên |
| k2c36 | nền sáng hơn một bậc (0,80 → 0,88) và chỉ rút tới 0,56 thay vì 0,28 — hết bốn giây gần đen tuyền |
| k2c37 | **chia đôi khung**: trái là đêm không trăng (chính tấm của k2c36 kéo tối hẳn), phải là đêm rằm, hai nhãn. Một cảnh nay nói trọn cả phép so sánh của câu, và hết chuyện hai cảnh liền nhau trông như một |
| k2c41 | con bọ hung vẽ tay (hai vòng tròn và mấy sợi râu) thay bằng **một mảnh cắt tròn từ chính tấm ảnh bọ hung thật** đang làm nền nửa đầu cảnh (§15.4 cấm vẽ tay biểu tượng) |
| k2c43 · c47 · c48 · c49 | đổi clip san hô (xem 8.6) và đổi ảnh rạn sang bản cắt dùng chung của khối 3 |
| k2c44 | lấy lại **dãy lịch 30 đêm** của cuối k2c43, thu nhỏ đặt dưới đĩa trăng trên một thẻ nền tối, và một dấu **"?"** lớn **nảy dọc** theo dãy. Trước đó chỉ có hai vòng tròn nét đứt, không nói gì về ngày tháng |

Bốn mục **GỢI Ý** cũng làm luôn: **k2c08** ba tấm thẻ giống hệt nhau → ba hình khác
hẳn nhau, mỗi hình báo trước đúng một cảnh sắp tới (chùm tia toả · nón ánh sáng ·
hai mũi tên lệch chiều dài); **k2c14** gạch trắng dài 960 px đè ngang mặt Mặt Trời
(đọc ra là gạch xoá, tức nghĩa ngược) → một gạch chân ngắn 180 px màu vàng **dưới**
đĩa; **k2c26** gạch đỏ chéo trôi ở góc → **hai má phanh** kẹp vào rìa quả cầu, nhấp
nháy đỏ, kèm vạch tốc độ ngắn dần; **k2c45** glyph nơ bướm → hai cánh cửa (mục 8.4).

### 8.8 k2c22 — cảnh người dựng tự khai là yếu nhất, và đúng là yếu thật

24 "lần chạy" của Lissauer hiện ra thành **một búi cung tròn lam nhạt lơ lửng** phía
trên bên phải Trái Đất, không dính vào trục. **Nguyên nhân** (bản soát không nêu,
tìm ra khi đọc lại mã): mỗi lần chạy được vẽ bằng một **vệt đuôi** chạy theo thời
gian, mỗi vệt ở **một bán kính riêng** — 24 vệt ở 24 bán kính thì đương nhiên thành
24 cung tròn đồng tâm. Đó là lỗi *thiết kế hình*, không phải lỗi tham số, nên vòng
sửa trước (rải lại bán kính) không chữa được.

Nay mỗi lần chạy là **một đường trục THẲNG** xuất phát từ trong đĩa Trái Đất đi ra —
24 cây kim của một chiếc quạt, mỗi cây một điều kiện đầu trong dải 0–85°, cùng lắc
theo thời gian. Trước mốc cắt chỉ hiện 6 cây ("vài lần chạy"), sau mốc đủ 24. Quả
cầu phóng từ R = 96 lên **R = 150**.

Và đây là **cảnh duy nhất trong cụm Laskar/Lissauer trước đây không có dòng nguồn
trên hình**, trong khi nó nhắc đích danh Lissauer, NASA và năm 2012 — nay đã có
`Lissauer, Barnes & Chambers · Icarus 217, 77 (2012)`, ghi đúng như k2c23.

### 8.9 Một bẫy chụp khung, đúng cho cả ba khối

Trong **0,42 giây hoà hình** đầu mỗi cảnh có **HAI** thẻ `.canh.active` cùng lúc, và
cảnh **cũ** vẫn ở `opacity: 1` đè lên cảnh mới. Đo tại `u = 0,02 / 0,05 / 0,10` thì
cả ba mốc đều còn hai cảnh active; tới `u = 0,20` mới sạch.

Hệ quả: **khung chụp ở `u = 0,05` không phải cảnh ta tưởng — nó là khung cuối của
cảnh TRƯỚC.** Bản soát độc lập chụp bốn mốc 0,05 / 0,35 / 0,62 / 0,90, nên mọi nhận
xét của họ gắn với mốc 0,05 thật ra đang mô tả cảnh liền trước. Và
`document.querySelector('.canh.active')` trả về phần tử **đầu** trong DOM, tức cảnh
cũ — phải lấy phần tử **cuối** của `querySelectorAll`. Đã báo cả ba khối; khối 3 xác
nhận bẫy này đã suýt làm họ kết luận sai về một cảnh.

### 8.10 Tự kiểm vòng này

* `node --check canh/khoi-2.js` — sạch.
* `python3 dung/soat-khoi.py` — **SẠCH**: khối 2 báo 49 cảnh · 49 câu (giao 49),
  vẽ thử 122 cảnh × 4 mốc không cảnh nào chết, không lỗi JS.
* Bộ đo vùng an toàn 48 px, 49 cảnh × 10 mốc `c.u`: **57 vi phạm → 0**
  (còn 3 dòng nguồn vượt 2–3 px do chốt `y = 650`, xem cuối mục 8.1).
* Chụp lại **49 cảnh × 3 mốc** (`u` = 0,20 / 0,50 / 0,80 — bỏ hẳn mốc 0,05 vì mục
  8.9), có chờ `__khungSanSang()` trước mỗi lần chụp, rồi **mở từng bảng ra nhìn**.
  Năm chỗ chỉ phát hiện được bằng mắt và đã sửa tiếp trong chính vòng này: vành khí
  quyển quá dày trên nền sáng · chỏm cực k2c20 tô màu tối thì biến mất trên đại
  dương xanh thẫm · thang log k2c46 không đọc được trên ảnh polyp rực sáng · dãy
  lịch k2c44 chìm nghỉm trên mặt trăng sáng · cánh cửa trái k2c45 bị mép trái cắt
  khi cửa mở hết.
* Đo màu riêng khối: **48,4 % dải cao nhất · 5 dải ≥ 5 %** (xem 8.5).

### 8.11 Vòng hai — ba việc đến sau khi đã chụp kiểm xong lần một

**(a) Dòng nguồn về `y = 646`.** Chốt 16.10 ban đầu là 650, nhưng đo mực chữ thì
đáy rơi ở y ≈ 674, lố hộp an toàn 2–3 px. Điều phối đã sửa hợp đồng thành **646**
cho cả ba khối; khối 2 đã đổi. Đo lại: **0 vi phạm**.

**(b) Ba câu đổi chữ — chủ kênh bác thuật ngữ dùng mà không mở nghĩa.**
Số câu không đổi nên `steps` và bản đồ cảnh giữ nguyên; `soat-khoi.py` đối chiếu
`_chia-khoi.json` vẫn khớp 49/49. Chỗ nặng nhất là câu 6: *"cái hiệu giữa hai đầu"* —
"hiệu" là từ toán học ném vào giữa một câu đang phải giải thích thứ khác. Lời mới là
*"chênh lệch sức hút giữa hai phía của Trái Đất"*.
**Hình phải đổi theo lời**, và chỗ này phơi ra một lỗi L1 có sẵn: hai cảnh dựng cơ
chế lực triều **chưa bao giờ gọi tên** cái chúng đang vẽ. Nay k2c06 có hai nhãn
**"phía gần"** / **"phía xa"** trên hai mũi tên dài ngắn khác nhau, và k2c07 gọi tên
đoạn thừa ra giữa hai mũi tên là **"chênh lệch"** — đúng chữ mà lời dẫn nay dùng.

**(c) Luật L6 — khối 2 từng phạm BA chỗ, nay sạch.** Khối 3 báo sang rằng họ suýt tự
tạo một cụm ba cảnh khi đổi nền, và khuyên đếm bằng máy sau khi sửa. Làm theo thì ra
**ba cụm**, trong đó **một cụm do chính vòng sửa này gây ra**:

| cụm | vì sao | chữa |
|---|---|---|
| k2c08 · c09 · c10 | ba cảnh liền dùng chung clip dải Ngân Hà — có từ bản dựng đầu, bản soát không nêu | k2c10 (cú chốt của bộ ba) đổi sang nền chuyển sắc tông **mận** |
| k2c11 · c12 · c13 | ba cảnh liền cùng `#13293F` — cũng có sẵn | k2c13 (kết quả phép chia) đổi sang **nâu ô-liu** |
| k2c47 · c48 · c49 | **tôi tự gây ra** khi thay clip san hô vào bốn cảnh liền nhau | k2c47 đổi sang `video/k2-sanho-khoi.mp4`, bản sao clip thứ hai của khối 3, cùng nguồn NOAA cùng nơi quay |

Bài học, ghi cho các tập sau: **vá chỗ này thủng chỗ kia.** Phá một chuỗi nền dài thì
phải đếm lại toàn khối, vì cảnh vừa đổi có thể khớp với hàng xóm mới. Mắt không bắt
được — cả ba cụm trên đều phải đếm bằng máy mới thấy. Bộ đếm trích tấm nền của từng
cảnh từ mã nguồn theo thứ tự rồi tìm cụm lặp; chạy trong một lệnh.
Hai nền mới cũng kéo thêm hai dải màu vào khối, nên nó đỡ luôn mục F.

**(d) Quả cầu trên nền giấy sáng.** Khối 3 báo sang: vành khí quyển mỏng lại làm lộ
ra chuyện trước đó nó đang che giúp — trên nền SÁNG, nửa đêm của quả cầu đọc ra như
**một cái lỗ đen trên tờ giấy**. Chụp k2c21 ra nhìn thì đúng y vậy. **Không sửa hàm
dùng chung** (khối 3 đang gọi chéo nó ở 12 chỗ): chỉ hạ độ mờ lớp bóng của riêng cảnh
này xuống 0,3 qua `dat.bong` mà hàm vẫn trả về, và phóng đĩa từ R = 106 lên **R = 134**.
Chụp lại: ra một hành tinh, không còn là một cái chấm tối.

**Khối 1 đã chốt không gọi chéo** — họ không có cảnh nào cho thiên thể quay nên giữ
hai hàm riêng dùng ảnh ĐĨA thật, và xác nhận hai thông số mới của khối 2 không chạm
tới cảnh nào của họ. Vậy quyền đổi `K2.cau()` / `K2.trang()` nay nằm giữa **khối 2 và
khối 3**, và vì khối 3 gọi chéo nên **đổi chữ ký là phải báo họ trước**.

**(e) Biên an toàn của `data-dai` — bẫy §16.3, nới cho cả khối.** Bản soát chạy
`ffprobe` và kết luận đúng là **không clip nào** có `tu + dai > thời lượng`, nhưng có
ghi thêm rằng hai chỗ sát tới mức "không còn biên an toàn". Đo lại toàn khối thì nặng
hơn thế: **13 trên 18 lời gọi** có biên dưới 0,2 giây, phần lớn chỉ 0,04–0,08 s, và
**một chỗ biên đúng bằng 0** (k2c46, `k2-trang-may.mp4`, `tu 3,0 + dai 6,0 = 9,000`
trên một clip dài đúng 9,000 s). Ai cắt lại clip ngắn đi một khung là cảnh đứng hình,
và `soat-khoi.py` vẫn báo SẠCH. Đã hạ `dai` ở chín lời gọi để **mọi clip có ít nhất
0,2 giây biên**; chỗ hụt nhiều nhất chỉ mất 0,3 giây đuôi, không cảnh nào đổi nhịp.
