# Nguồn hình — khối 2, BẢN V3 (đoạn 21–36 · câu 1–49 · giây 255,224 → 538,844)

Dựng lại từ đầu ngày 28/11/2026 theo **PHẦN 15** của `HUONG-DAN-DUNG-CANH.md`.
Bản cũ nằm ở `canh/.cu-v1/khoi-2.js`; kịch bản đã viết lại nên chỉ còn bộ đồ nghề
đồ hoạ là dùng lại được, toàn bộ 49 cảnh là mới.

**22 tệp tư liệu thật: 15 ảnh + 7 video** (một vài tệp dùng ở nhiều cảnh).
Giấy phép: **8 phạm vi công cộng · 3 CC0 · 11 CC BY**.
**Không tệp nào CC BY-SA, CC BY-NC hay CC BY-ND.** Mọi tệp đã được MỞ RA NHÌN
trước khi dùng (bẫy §11.10) — xem mục "Kiểm bằng mắt" ở cuối.

**Xét theo QUYỀN, không theo tên giấy phép** (§15.1 bản sửa 28/11/2026). Cả 22 tệp
đều đạt đủ ba điều kiện: cho dùng thương mại · cho sửa đổi · không đòi chia sẻ tương tự.
Phạm vi công cộng và CC0 thì hiển nhiên đạt. CC BY 2.0 / 2.5 / 3.0 / 4.0 đạt cả ba,
chỉ buộc ghi công — đã ghi đủ **tên tác giả + tên giấy phép + liên kết trang gốc**
trong bảng dưới, và những cảnh thấy rõ ảnh thì còn có dòng nguồn hiện ngay trên hình.

**Khối 2 KHÔNG dùng tệp nào của Pexels, Pixabay hay Coverr** — cả 22 tệp đều tải từ
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
| `k2-sanho-de.mp4` | 8,0 s · 3,3 MB | k2c43 · k2c47 · k2c48 · k2c49 | San hô *Pocillopora meandrina* ở đảo Lizard, **rạn Great Barrier** (phụ lục bài PLOS ONE về sinh sản của loài này) | Schmidt-Roach, Miller, Woolsey, Gerlach, Baird | CC BY 2.5 | https://commons.wikimedia.org/wiki/File:Spawning_Pocillopora_meandrina_-_pone.0050847.s002.ogv |

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
| `k2-mattrang.jpg` | k2c02 · k2c28 · k2c31 · k2c34 | Mặt gần của Mặt Trăng, ghép ảnh LRO Wide Angle Camera | NASA/GSFC/Arizona State University | phạm vi công cộng | https://commons.wikimedia.org/wiki/File:Moon_nearside_LRO_5000.jpg |
| `k2-trieu-day.jpg` | k2c07 | Alma, vịnh Fundy, **lúc nước lớn** | Dylan Kereluk | CC BY 2.0 | https://commons.wikimedia.org/wiki/File:Bay_of_Fundy_-_Tide_In.jpg |
| `k2-trieu-can.jpg` | k2c16 | Alma, vịnh Fundy, **lúc nước ròng**, thuyền nằm trên bùn | Dylan Kereluk | CC BY 2.0 | https://commons.wikimedia.org/wiki/File:Bay_of_Fundy_-_Tide_Out.jpg |
| `k2-mua-gat.jpg` | k2c17 · k2c20 | Gặt lúa mì ở Brownsburg, bang Indiana, 28/6/2021 | USDA / NRCS, ảnh Brandon O'Connor | phạm vi công cộng | https://commons.wikimedia.org/wiki/File:Indiana_Wheat_Harvest_(20210628-NRCS-BJOC-007).jpg |
| `k2-bao.jpg` | k2c33 | Bão Soudelor nhìn từ Trạm Vũ trụ Quốc tế, 5/8/2015 | NASA's Earth Observatory | CC BY 2.0 | https://commons.wikimedia.org/wiki/File:Typhoon_Soudelor_Seen_from_the_ISS_(19839740193).jpg |
| `k2-bien-dem.jpg` | k2c36 | Hàng cây bên biển trong đêm trăng tròn, quần đảo Andaman | Vyacheslav Argenberg | CC BY 4.0 | https://commons.wikimedia.org/wiki/File:Andaman_Islands,_Trees_by_the_sea_at_night,_Full_moon_night.jpg |
| `k2-demram.jpg` | k2c37 | Rừng ven biển trong đêm trăng tròn, quần đảo Andaman | Vyacheslav Argenberg | CC BY 4.0 | https://commons.wikimedia.org/wiki/File:Andaman_Islands,_Full_moon_night,_Forest_by_the_sea_at_night.jpg |
| `k2-tranh-ram.jpg` | k2c38 | «Làng dưới trăng tròn», tranh sơn dầu | Joos de Momper con / Jan Brueghel cha | phạm vi công cộng | https://commons.wikimedia.org/wiki/File:Joos_de_Momper_(II)_-_Village_at_Full_Moon_-_WGA16138.jpg |
| `k2-cua-cong.jpg` | k2c38 | Cua còng trên bãi bùn triều, khu bảo tồn vịnh Suncheon | lumoplank | CC0 | https://commons.wikimedia.org/wiki/File:Suncheon_Bay_Natural_Reserve_-_SuncheonBNG2975.jpg |
| `k2-bohung.jpg` | k2c40 | Bọ hung lăn viên phân, Guatemala | Alex Wild | CC0 | https://commons.wikimedia.org/wiki/File:Dung_Beetle1.jpg |
| `k2-bohung2.jpg` | k2c40 · k2c41 | Bọ hung lăn phân bò, thung lũng Ojén, tây nam Tây Ban Nha | Dr Mary Gillham Archive Project | CC BY 2.0 | https://commons.wikimedia.org/wiki/File:Dung_beetle_rolling_cow_dung_ball._Ojen_valley._Southwest_Spain_(37498376970).jpg |
| `k2-gbr-khong.jpg` | k2c43 | Hardy Reef nhìn từ trực thăng, **rạn Great Barrier**, Queensland | rheins | CC BY 3.0 | https://commons.wikimedia.org/wiki/File:Aerial_View_of_Hardy_Reef_-_2013.04_-_panoramio.jpg |
| `k2-sanho-canh.jpg` | k2c45 · k2c46 | Cận cảnh polyp san hô sừng hươu | NOAA | phạm vi công cộng | https://commons.wikimedia.org/wiki/File:Staghorn_coral_closeup.jpg |
| `k2-sanho-de.jpg` | k2c45 | San hô đang phóng bó trứng, khu bảo tồn biển Flower Garden Banks | National Marine Sanctuaries (NOAA) | phạm vi công cộng | https://commons.wikimedia.org/wiki/File:Coral_Spawning_(38797556434).jpg |

*(`k2-traidat.jpg`, `k2-hau.jpg`, `k2-terminator.jpg`, `k2-kenh-mekong.jpg`,
`k2-ruong-mekong.jpg`, `k2-dbscl-vetinh.jpg`, `k2-chonoi.jpg`, `k2-ruong-bac-thang.jpg`
còn nằm trong `anh/` từ bản V1 nhưng **bản V3 không cảnh nào gọi tới** — kịch bản mới
đã bỏ hẳn đoạn đồng bằng sông Cửu Long khỏi khối 2. Không xoá, để khối khác dùng nếu cần.)*

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
| Tệp dùng chung với khối khác | — | khối 2 **không** dùng chung tệp nào với khối 1 hay khối 3: mọi tệp của tôi đều mang tiền tố `k2-`, kể cả khi nội dung trùng đề tài (khối 1 có `k1-sanho-de.jpg`, khối 3 có `k3-sanho-de.jpg` và `k3-sanho-de.mp4` — **ba tệp khác nhau, ba nguồn khác nhau**, đừng ai gộp) | 28/11/2026 | mời khối 1 và khối 3 xác nhận |
| Thông số máy quay ở điểm nối | — | cảnh **cuối** của khối 2 (k2c49, giây 532,9–538,8) kết ở `x = +12, z = 1,20`, nền là clip rạn san hô **đã rút gần hết màu** (`saturate .42`). Khối 3 mở ngay sau đó, nên nếu khối 3 mở bằng một khung rực màu thì cú nối sẽ giật. | 28/11/2026 | **mời khối 3 xác nhận** |
