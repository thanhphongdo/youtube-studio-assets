# Nguồn — khối 1 tập 3, BẢN V3 (cảnh k1c01 → k1c41, giây 0,0 → 253,8)

Dựng lại từ đầu ngày 28/11/2026 theo **PHẦN 15** của `HUONG-DAN-DUNG-CANH.md`
(tìm tư liệu thật trước, vẽ sau · không cảnh rỗng · phải có video thật ·
thời gian chuẩn hoá theo `c.u` / `c.since(k)`).
Bản cũ nằm ở `canh/.cu-v1/khoi-1.js`, **không còn dùng** vì kịch bản đã viết lại.

- **41 cảnh đăng ký** (`DANGKY`) + **16 mốc cắt cứng bên trong cảnh** = **57 lần đổi hình**
  trong 253,8 giây = **13,5 lần/phút** (dải cho phép 12–18).
- **13 tệp video thật** · **14 tệp ảnh thật đang dùng** (thư mục còn 2 tệp giữ lại,
  xem cuối §2) · **2 lần** hiện chữ biên tập.

---

## 1. VIDEO — `slide/video/`, tiền tố `k1-`

Tất cả đã cắt dưới 10 giây và dưới 6 MB bằng ffmpeg trước khi đưa vào.
Không tệp nào tự gọi `play()`; harness tua tới đúng giây rồi mới chụp (§15.3).

| Tệp | Dùng ở cảnh | Nội dung | Tác giả | Giấy phép | Nguồn |
|---|---|---|---|---|---|
| `k1-apollo-guong.mp4` | k1c01 (nhịp 2) | Phi hành gia Apollo 11 bên cụm thiết bị EASEP trên Mặt Trăng, máy đẩy chậm | NASA Marshall Space Flight Center | Phạm vi công cộng | https://commons.wikimedia.org/wiki/File%3ANASA_Anticipates_Lunar_Findings_from_Artemis_Retroreflector_%28Dennis_Harris_NGLR%29.webm (lấy đoạn 59,7–67,5 s) |
| `k1-lrrr.mp4` | k1c01 (nhịp 3) | Cận cảnh tấm gương phản xạ laser (LRRR) nằm trên mặt đất Mặt Trăng | NASA Marshall Space Flight Center | Phạm vi công cộng | cùng tệp trên, đoạn 68,2–75,6 s |
| `k1-mattroi.mp4` | k1c24, k1c25 | Đĩa Mặt Trời toàn phần, SDO/AIA dải 171 | NASA SVS (SVS14078) | Phạm vi công cộng | https://commons.wikimedia.org/wiki/File%3AMid-Level_Flare_Erupts_From_Sun_%28SVS14078_-_Full_Disk_171%29.webm |
| `k1-song-da2.mp4` | k1c26 | Sóng vỗ thềm đá ven bờ đảo Santa Rosa, California | Blervis | CC0 | https://commons.wikimedia.org/wiki/File%3ASanta_Rosa_Island_Waves.webm (đoạn 34–42 s) |
| `k1-trieu-len.mp4` | k1c27, k1c37 | Nước lên ở biển Trắng, đảo Yagry, Severodvinsk | Pansosh | CC0 | https://commons.wikimedia.org/wiki/File%3A%D0%AF%D0%B3%D1%80%D1%8B._%D0%9F%D1%80%D0%B8%D0%BB%D0%B8%D0%B2.webm |
| `k1-trieu-rut.mp4` | k1c39 | Nước rút, bãi triều lộ ra, biển Trắng, đảo Yagry | Pansosh | CC0 | https://commons.wikimedia.org/wiki/File%3A%D0%AF%D0%B3%D1%80%D1%8B._%D0%9E%D1%82%D0%BB%D0%B8%D0%B2.webm |
| `k1-bien-dem.mp4` | k1c03, k1c22 | Sóng bạc đầu trên biển lúc đêm | Coverr (`coverr-foamy-ocean-waves-at-night-2122`) | Giấy phép Coverr — xem §1.1 | https://coverr.co/videos/coverr-foamy-ocean-waves-at-night-2122 |
| `k1-bai-cat.mp4` | k1c12 | Bãi cát dài, sóng xô mép nước | Coverr (`coverr-sandy-beach-3010`) | Giấy phép Coverr | https://coverr.co/videos/coverr-sandy-beach-3010 |
| `k1-trieu-manh.mp4` | k1c19 | Sóng triều trắng xoá ập vào mũi đá, quay từ trên cao | Coverr (`coverr-a-tide-of-foamy-waves-4378`) | Giấy phép Coverr | https://coverr.co/videos/coverr-a-tide-of-foamy-waves-4378 |
| `k1-song-vo-da.mp4` | k1c23 | Sóng vỗ các mỏm đá sát mép bờ, quay từ trên cao | Coverr (`coverr-waves-crashing-against-the-rocks-5050`) | Giấy phép Coverr | https://coverr.co/videos/coverr-waves-crashing-against-the-rocks-5050 |
| `k1-bai-da-tren.mp4` | k1c30, k1c32, k1c33 | **Bãi đá vùng gian triều nhìn thẳng từ trên xuống**, nước tràn lên rồi rút | Coverr (`coverr-top-view-of-a-stony-coast-9752`) | Giấy phép Coverr | https://coverr.co/videos/coverr-top-view-of-a-stony-coast-9752 |
| `k1-mo-oc.mp4` | k1c33 (nhịp 2) | Bàn tay đầy ốc vừa bắt ở mép nước | Coverr (`coverr-collecting-clams-from-a-river-4582`) | Giấy phép Coverr | https://coverr.co/videos/coverr-collecting-clams-from-a-river-4582 |
| `k1-ruong-lua.mp4` | k1c38, k1c40 | Gặt lúa trên đồng vùng châu thổ nhiệt đới | Coverr (`coverr-rice-field-2717`) | Giấy phép Coverr | https://coverr.co/videos/coverr-rice-field-2717 |

### 1.1 Về giấy phép Coverr — **điều phối cần biết**

Hợp đồng §15.1 liệt kê Coverr là **nguồn nên đi trước**, nhưng dòng giấy phép
lại chỉ ghi “PD · CC0 · CC BY”. Giấy phép Coverr **không mang một trong ba tên
đó**, nên tôi chép lại nguyên văn điều khoản đã đọc ngày 28/11/2026
(https://coverr.co/license):

> *“Use it for free. Everything Coverr publishes is free for commercial and
> personal projects. Build it into what you sell. Websites, templates, apps, ads
> and client work are all fine. Don’t resell the files… Premium needs a plan.”*

Nghĩa là: **dùng thương mại được, không bắt ghi công, chỉ cấm bán lại chính tệp
gốc** — tức là rộng hơn CC BY ở chỗ không bắt ghi công, hẹp hơn CC0 ở chỗ cấm
bán lại tệp. Kênh có bật kiếm tiền thì **đúng điều khoản**. Tôi vẫn ghi dòng
nguồn trên hình cho mọi clip Coverr dù không bắt buộc.
**Tôi đã loại hết mọi clip có tiền tố `coverr-premium-`** (những clip đó đòi gói
trả tiền). Nếu điều phối muốn siết về đúng ba giấy phép PD/CC0/CC BY thì phải
thay 7 clip Coverr ở trên — báo sớm, vì Wikimedia Commons gần như không có
cảnh gian triều / ruộng lúa nào vừa đủ sáng vừa không CC BY-SA.

### 1.2 Clip đã tìm nhưng **BỎ**

- `File:Mekong Floating Markets, Ho Chi Minh, Vietnam.webm` (CC BY 3.0, Le Monde
  en Vidéo) và `File:AMAZING Forest tour in delta of Mekong, Vietnam.webm` —
  **có hình mờ “Le Monde en Vidéo” đóng cứng vào khung hình**. §15.1 cấm ảnh có
  hình mờ. Đây là hai clip Mekong duy nhất trên Commons có giấy phép dùng được.
- Mọi clip của `Maoileann` (Dingle Peninsula) và `FASTILY` (Manhattan Beach):
  **CC BY-SA**, cấm theo §15.1.
- `coverr-water-falling-on-a-crab-6433`: tên là “crab” nhưng thật ra là một con
  tôm hùm đất bên thành bể bơi vô cực — **bẫy §11.10**, không dùng.
- `coverr-man-in-a-vietnamese-market-6825`: chợ Việt Nam thật nhưng tối, nhân
  vật chính là một du khách phương Tây — lạc nội dung, không dùng.

---

## 2. ẢNH — `slide/anh/`, tiền tố `k1-`

Chỉ **phạm vi công cộng / CC0 / CC BY**. Không CC BY-SA, không ảnh báo chí,
không hình mờ. Mỗi ảnh hiện rõ trên hình đều có **một** dòng nguồn trên khung,
hiện 2–3,5 giây rồi tắt, không bao giờ hai dòng cùng lúc.

| Tệp | Dùng ở cảnh | Nội dung | Tác giả | Giấy phép | Nguồn |
|---|---|---|---|---|---|
| `k1-mattrang.jpg` | k1c01, c02, c05–c08, c14–c18, c20, c21, c26, c29 | Mặt gần Mặt Trăng, ghép ảnh LRO WAC | NASA / GSFC / Arizona State University | Phạm vi công cộng | https://commons.wikimedia.org/wiki/File:Moon_nearside_LRO_5000.jpg |
| `k1-traidat.jpg` | k1c02, k1c24 | Trái Đất “Blue Marble”, chụp từ Apollo 17, 7/12/1972 | NASA / phi hành đoàn Apollo 17 | Phạm vi công cộng | https://commons.wikimedia.org/wiki/File%3AThe_Earth_seen_from_Apollo_17.jpg |
| `k1-sanho-de.jpg` | k1c04 | San hô đẻ đồng loạt ban đêm, trứng nổi lên | NOAA National Marine Sanctuaries | Phạm vi công cộng | https://commons.wikimedia.org/wiki/File:Coral_Spawning_(38797556434).jpg |
| `k1-sanho-ran.jpg` | k1c04 (khuôn hình đóng vòng với khối 3) | San hô não nhả trứng, sao biển giòn đỏ bò ngang | Flower Garden Banks NMS / NOAA | Phạm vi công cộng | https://commons.wikimedia.org/wiki/File:FGBNMS_-_Coral_Spawning_(30008794505).jpg |
| `k1-khunglong.jpg` | k1c11 | Bộ xương *Tyrannosaurus rex*, Smithsonian NMNH | USDAgov | Phạm vi công cộng | https://commons.wikimedia.org/wiki/File:Tyrannosaurus_Rex_skeleton_is_on_display_in_the_Dinosaurs_hall_at_the_Smithsonian%27s_National_Museum_of_Natural_History_in_Washington,_D.C..jpg |
| `k1-tau-hoa.jpg` | k1c11 | Tàu khách đường sắt Bắc – Nam, Việt Nam | Santi Llobet | CC BY 2.0 | https://commons.wikimedia.org/wiki/File%3AVietnam_Train_1.jpg |
| `k1-song-bien.jpg` | k1c13, k1c28 | Mặt biển ngoài khơi | Allen Shimada, NOAA/NMFS/OST/AMD | Phạm vi công cộng | https://commons.wikimedia.org/wiki/File:Wea04118_-_Flickr_-_NOAA_Photo_Library.jpg |
| `k1-gian-trieu.jpg` | k1c30 | Bãi đá vùng gian triều lúc nước rút, Cabrillo National Monument | National Park Service | Phạm vi công cộng | https://commons.wikimedia.org/wiki/File:Cabrillo_National_Monument_(12cbbe29-4032-4398-b54d-1e70a6ddfd5e).jpg |
| `k1-estran.jpg` | k1c31 | Hà, ốc bám đá và giun biển *Eulalia clavigera*, bãi gian triều Bretagne | Emmanuel Maros (Ifremer) | CC BY 4.0 | https://commons.wikimedia.org/wiki/File:Eulalie_(Eulalia_clavigera)_sur_l%27estran_(Ifremer_01066-117720_-_505751).jpg |
| `k1-chim-bo.jpg` | k1c33 | Chim bờ kiếm ăn trên bãi triều, Alaska | USFWS Alaska | Phạm vi công cộng | https://commons.wikimedia.org/wiki/File:Shorebird_galore_(8684617376).jpg |
| `k1-cantho.jpg` | k1c34 | Chợ nổi Cần Thơ, đồng bằng sông Cửu Long | Vyacheslav Argenberg | CC BY 4.0 | https://commons.wikimedia.org/wiki/File:Can_Tho,_Vietnam,_Floating_Market.jpg |
| `k1-hondau.jpg` | k1c35 | Đèn biển Hòn Dấu, Đồ Sơn, Hải Phòng | VuThiAnh | CC0 | https://commons.wikimedia.org/wiki/File:Hai_dang_Hon_Dau.jpg |
| `k1-cuulong.jpg` | k1c36, k1c41 | Đồng bằng sông Cửu Long nhìn từ vệ tinh (MODIS 12/1/2016) | Jeff Schmaltz, MODIS Land Rapid Response Team, NASA GSFC | Phạm vi công cộng | https://commons.wikimedia.org/wiki/File:Vietnam_and_Cambodia_(MODIS_2016-01-12).jpg |
| `k1-bobien-vn.jpg` | k1c10, k1c40 | Đánh cá ven bờ Biển Đông, Lăng Cô, Việt Nam | Vyacheslav Argenberg | CC BY 4.0 | https://commons.wikimedia.org/wiki/File:Fishing_on_the_coast_of_South_China_Sea,_Lang_Co,_Vietnam.jpg |
| `k1-guong-apollo11.jpg` | **không dùng nữa** | Gương phản xạ Apollo 11 (AS11-40-5952) | NASA | Phạm vi công cộng | giữ lại trong `anh/` phòng khi phải thay video bằng ảnh tĩnh |
| `k1-guong-apollo14.jpg` | **không dùng nữa** | Gương phản xạ Apollo 14 (AS14-67-9386) | NASA | Phạm vi công cộng | như trên |

Ảnh dọc (`k1-hondau`) và ảnh không khớp 16:9 dùng **nền mờ nhân bản** (`MO()`,
`blur(44px)`) phía sau, không có viền đen hai bên.

---

## 3. HÌNH TỰ DỰNG — và lý do không có tư liệu thật

Theo §15.1, chỉ được tự dựng khi (a) tìm không ra tư liệu thật, hoặc (b) thuộc
nhóm **luôn được vẽ**: bản đồ, biểu đồ, sơ đồ cơ chế, thước đo.
**Không cảnh nào trong khối là đồ hoạ trừu tượng đứng một mình trên nền trơn**
(§15.2): mọi cảnh đều có ít nhất hai trong ba thứ *ảnh/video thật · nền có chất
liệu hoặc chuyển sắc · lớp đồ hoạ chuyển động thật*.

| Cảnh | Hình tự dựng | Thuộc nhóm | Vì sao không dùng tư liệu thật | Lớp thật đi kèm |
|---|---|---|---|---|
| k1c01 (nhịp 1) | hệ Trái Đất – Mặt Trăng **đúng tỉ lệ thật**, trục đo, tia laser | sơ đồ cơ chế + thước đo | không tồn tại ảnh chụp nào thấy được cả hai thiên thể đúng tỉ lệ khoảng cách | ảnh thật Mặt Trăng (LRO) đặt trong sơ đồ, trường sao, thẻ con tem |
| k1c02 | mũi tên lùi xa + lưới kẻ | sơ đồ, **ghi rõ trên hình “Sơ đồ, không theo tỉ lệ”** | — | ảnh thật Trái Đất (Apollo 17) và Mặt Trăng (LRO) |
| k1c06, k1c07 | thước đo, thẻ con tem có răng cưa, thước cặp | thước đo | không tìm được ảnh con tem nào PD/CC0/CC BY đủ nét và không có chữ nước ngoài | ảnh thật Mặt Trăng in trong con tem, nền giấy chuyển sắc có lưới |
| k1c08 | thanh “80 năm”, số đếm 0 → 3,04 m | biểu đồ | — | ảnh thật bề mặt Mặt Trăng làm nền |
| k1c09–c12, c35–c37, c41 | **bản đồ Việt Nam / vịnh Bắc Bộ / ĐBSCL** | bản đồ | — | ảnh/video thật ở nhịp còn lại của cùng cảnh |
| k1c16 | ba ô “không rơi / không bay / không bị hút”, dấu ✕ | sơ đồ, ý vốn trừu tượng | không có ảnh của một việc **không xảy ra** | ảnh thật Mặt Trăng làm nền và trong từng ô, trường sao |
| k1c17 | thước “một đời người” | thước đo | — | ảnh thật Mặt Trăng (nền + vật chính) |
| k1c18 | dấu trừ, vòng tròn nét đứt “chỗ Mặt Trăng từng ở” | sơ đồ, ý trừu tượng | — | ảnh thật Mặt Trăng, nền giấy có lưới |
| k1c19 (nhịp 1) | tờ hoá đơn | sơ đồ ẩn dụ của lời dẫn | ảnh hoá đơn thật nào cũng có chữ và con số nước ngoài, lạc nội dung | nền giấy chuyển sắc có lưới; nhịp 2 cắt sang video thật |
| k1c20, k1c21 | ba ô “ba chuyện cùng đúng” | sơ đồ, ý trừu tượng | — | ảnh thật Mặt Trăng làm nền và trong từng ô |
| k1c24 | lớp nước bị kéo dài hai phía + hai mũi tên dày mỏng khác nhau | **sơ đồ cơ chế** (đúng chỗ §12 cho phép) | không ảnh nào chụp được bướu triều | video thật Mặt Trời (SDO) + ảnh thật Trái Đất + ảnh thật Mặt Trăng |
| k1c25 | biểu đồ hai cột 2,2 : 1 | biểu đồ | — | nền giấy có lưới; nhịp 2 cắt sang video thật Mặt Trời |
| k1c27, c28, c35, c36 | đường triều hình sin | biểu đồ | — | đè lên video/ảnh thật |
| k1c29 | phép tính 2,2 + 1 = 3,2 → 1/3,2 | biểu đồ | — | ảnh thật Mặt Trăng, đĩa Mặt Trời, nền có lưới |
| k1c32, k1c33 (nhịp 1) | **thang tầng vùng gian triều** + hình hà, ốc, rong, vẹm | sơ đồ cơ chế | không có ảnh nào cho thấy được cả bốn tầng cùng lúc kèm tên tầng | đè thẳng lên video thật bãi đá gian triều nhìn từ trên |

### Hình học bản đồ (biến `G`)

Nguồn: **Natural Earth 50m — phạm vi công cộng**
(https://www.naturalearthdata.com/about/terms-of-use/), lấy qua
https://github.com/nvkelso/natural-earth-vector (`ne_50m_land`,
`ne_50m_admin_0_countries`), đơn giản hoá Ramer–Douglas–Peucker, nhúng thẳng
vào `canh/khoi-1.js`. Phép chiếu Mercator địa phương, 46 px/độ kinh, gốc
(108°Đ, 14°B). Đây là bản đồ **định vị**; không cảnh nào trong khối so sánh
diện tích nên Mercator không gây hiểu sai.
`G.coast` là **một polyline duy nhất** Móng Cái → Hà Tiên, dùng để vẽ dần ở
k1c10. `G.moc` là toạ độ 11 địa danh.

---

## 4. SỐ LIỆU HIỆN TRÊN MÀN HÌNH

| Con số | Cảnh | Nguồn |
|---|---|---|
| 3,8 cm / năm | k1c01, c02, c07 | JPL/NASA, Lunar Laser Ranging — `nghien-cuu/tu-lieu.md` §1 |
| 1969 | k1c01 | Apollo 11 đặt gương phản xạ — `tu-lieu.md` §1 |
| 384.400 km | k1c01, c12 | số chuẩn NASA |
| 3,04 m trong 80 năm | k1c08 | **suy ra**: 3,8 cm × 80 = 3,04 m |
| 3.800 km · 3.260 km | k1c10 | 3,8 cm × 10⁸ năm · bờ biển Việt Nam (Tổng cục Biển và Hải đảo) — `tu-lieu.md` §1 |
| 66 triệu năm · 2.500 km | k1c11 | 3,8 cm × 6,6 × 10⁷ = 2.508 km, làm tròn xuống 2.500 |
| 2,2 lần | k1c25 | **NOAA — Our Restless Tides**, https://tidesandcurrents.noaa.gov/restles3.html |
| 2,2 + 1 = 3,2 → còn 1/3,2 | k1c29 | **suy luận của người dẫn**, và lời dẫn tự khai báo đúng như vậy ở câu ngay trước |
| một lần / hai lần mỗi ngày | k1c35, k1c36 | nhật triều đều Hòn Dấu (VAST) · bán nhật triều phía Biển Đông — `tu-lieu.md` §3 |
| ≈ 3 m (biên độ ĐBSCL) | k1c36 | `tu-lieu.md` §3 (nguồn ghi 3–3,5 m, đã làm tròn **xuống** cho an toàn) |
| 40 – 60 km (ranh mặn) | k1c37 | `tu-lieu.md` §3 (nguồn ghi 42–55 km, có năm 45–60 km) |
| 1.000.000 héc-ta chịu ngập triều | k1c41 | https://hess.copernicus.org/articles/24/189/2020/ — `tu-lieu.md` §3 |

**Hai chỗ tôi cố ý KHÔNG giả độ chính xác:** vùng tô ở k1c41 có dòng chữ
*“Vùng tô là chỉ thị”* ngay trên hình, vì con số 1 triệu ha là diện tích chứ
không phải một ranh giới đã số hoá; và ba mũi tên mặn ở k1c37 là **chỉ hướng**,
không phải đường đẳng mặn đo đạc.

---

## 5. CHỮ BIÊN TẬP

Đúng **hai** lần, mỗi lần đứng một mình, không lần nào quá 4 từ:

1. k1c05 — “THẾ GIỚI VIỄN TƯỞNG” (4 từ, hiệu kênh)
2. k1c30 — “VÙNG GIAN TRIỀU” (3 từ, đặt tên cho thứ đang nhìn thấy)

Mọi chữ còn lại là **kết cấu**: nhãn trục của biểu đồ, nhãn địa danh trên bản
đồ, pill số liệu, và dòng ghi nguồn ảnh. Không chỗ nào chép lại lời dẫn lên
màn hình, không gạch đầu dòng, không bảng số liệu.

---

## 6. BẢNG MỐC CẮT CỨNG BÊN TRONG CẢNH (để đếm mật độ)

Đếm theo §11.11 cách 1: số `DANGKY` **cộng** số mốc cắt cứng.
**Đừng dùng `ffmpeg select='gt(scene,…)'`** — nó bỏ sót toàn bộ ranh giới cảnh.

| Cảnh | Số mốc cắt cứng | Cắt sang cái gì |
|---|---|---|
| k1c01 | 2 | video Apollo · video gương LRRR |
| k1c04 | 1 | ảnh san hô thứ hai (khuôn hình đóng vòng với khối 3) |
| k1c10 | 1 | ảnh bờ biển thật + hai thanh so sánh |
| k1c11 | 2 | ảnh tàu hoả · bản đồ tuyến Hà Nội – Sài Gòn |
| k1c12 | 1 | bản đồ bờ biển, một chấm cát |
| k1c19 | 1 | video sóng triều |
| k1c25 | 1 | video Mặt Trời |
| k1c30 | 1 | ảnh bãi gian triều NPS |
| k1c33 | 2 | video bắt ốc · ảnh chim bờ |
| k1c35 | 1 | bản đồ vịnh Bắc Bộ |
| k1c37 | 1 | video nước lên |
| k1c40 | 1 | ảnh đánh cá ven bờ |
| k1c41 | 1 | ảnh vệ tinh ĐBSCL |
| **Tổng** | **16** | |

41 + 16 = **57 lần đổi hình / 253,8 s = 13,5 mỗi phút.**

---

## 7. THỜI GIAN CHUẨN HOÁ (§15.6) — kiểm lại khi đổi giọng

- Mọi nhịp trải dài cả cảnh dùng **`c.u`**. Trong khối không còn một chỗ nào
  chia `c.t` cho một hằng số giây.
- Cảnh duy nhất có nhiều câu là **k1c01** (2 câu); hai cú cắt của nó neo vào
  **`c.since(1)`** (ở 1,8 s và 4,6 s sau khi câu 2 bắt đầu), nên đổi giọng thì
  cú cắt tự trượt theo câu, không trượt khỏi lời.
- `c.t` tuyệt đối chỉ còn dùng cho **dao động liên tục** (sóng, hạt bụi, nhịp
  thở của máy quay) — những thứ không có điểm kết, nên đổi độ dài cảnh không
  làm sai cái gì.
- Hệ quả: đọc lại bằng vbee (nhanh hơn edge-tts ~18 %) thì **không phải dựng
  lại cảnh nào**. Nhưng vẫn phải chụp lại khung để nhìn, vì cảnh ngắn đi thì
  một vài nhãn sẽ hiện gấp hơn.

---

## 7b. BA CÁI BẪY KHỐI 3 BÁO — đã kiểm lại khối 1, cả ba đều SẠCH

Ngày 28/11/2026 điều phối chuyển ba cái bẫy do người dựng khối 3 tìm ra. Cả ba
đều không sinh dòng lỗi nào. Kết quả kiểm trên khối 1:

1. **Nháy kép trong tên font làm đứt thuộc tính `style`** — khối 1 **không
   dính**: mọi chỗ đặt chữ đều dùng hằng `F = "system-ui"`, một từ, không có
   dấu nháy nào bên trong chuỗi `style`. Đã dò lại toàn file, không có
   `font:` nào chứa nháy kép lồng.
2. **`data-dai` dài hơn clip thì video đứng hình ở khung cuối** — đã `ffprobe`
   thời lượng thật của cả 13 clip và đối chiếu từng lời gọi `VIDL`. Toàn bộ 19
   lời gọi đều có `tu + dai ≤ thời lượng − 0,05 s`. Chỗ sát nhất là
   `k1-apollo-guong.mp4` (clip 7,81 s · `dai` 7,60) và `k1-lrrr.mp4`
   (clip 7,41 s · `dai` 7,20). **Ai sửa `dai` của khối này thì phải chạy lại
   phép đối chiếu đó.**
3. **`object-fit: contain` vẫn bị cắt 14 % mỗi bên** — khối 1 **không dùng
   `contain` ở bất kỳ cảnh nào**; mọi ảnh và video đều `cover` và tràn bốn mép.

Và hai cái bẫy “ảnh giả danh” kiểu §11.10: tôi đã **mở từng tệp tải về ra nhìn
trước khi dùng** (dựng bảng khung hình bằng `ffmpeg … tile=`), nên đã loại được
`coverr-water-falling-on-a-crab-6433` (tên ghi “crab”, thật ra là tôm hùm đất
bên bể bơi) và đã cắt hai clip NASA đúng vào đoạn có cảnh Mặt Trăng chứ không
vào đoạn người phát biểu trước phông Marshall Space Flight Center chiếm phần
lớn thời lượng clip gốc.

## 7c. DÒNG NGUỒN PHẢI NÊU ĐỊA ĐIỂM (luật chốt 28/11/2026)

Đã viết lại **19 dòng nguồn** trên hình theo luật này. Hai nhóm:

- **Có địa điểm thật thì ghi địa điểm, không ghi tên tổ chức thay cho nơi chốn**:
  “Flower Garden Banks, **vịnh Mexico**”, “Cabrillo National Monument,
  **California, Hoa Kỳ**”, “bãi gian triều **Bretagne, Pháp**”,
  “bãi triều **Alaska, Hoa Kỳ**”, “biển Trắng, **đảo Yagry, Nga**”,
  “Smithsonian NMNH, **Washington D.C.**”, “Đồ Sơn, **Hải Phòng, Việt Nam**”.
- **Clip Coverr không công bố địa điểm** thì ghi thẳng là *“hình minh hoạ,
  Coverr không ghi địa điểm”* chứ không im lặng để người xem tự suy ra là Việt
  Nam. Riêng k1c12, lời dẫn nói “đường bờ biển nước ta” mà clip là bãi cát
  nước ngoài, nên dòng nguồn ghi rõ **“không phải bờ biển Việt Nam”**, và nửa
  sau cảnh cắt sang bản đồ bờ biển Việt Nam thật.

**Chỗ tôi tự thấy yếu nhất, xin người soát độc lập xem giúp:** cảnh **k1c37**
nói về *“cái bơm đẩy mặn ngược vào sông”* ở đồng bằng sông Cửu Long, nhưng nhịp
video thật của nó là clip nước lên ở **biển Trắng, Nga**. Dòng nguồn không nói
dối, nhưng đây vẫn là một cảnh miền Tây minh hoạ bằng hình Bắc Âu. Tôi đã tìm
mà **không có clip Mekong nào vừa đủ giấy phép vừa không có hình mờ** (xem
§1.2). Nếu kiếm được một clip con nước miền Tây hợp lệ thì nên thay.

---

## 8. ĐIỂM GIÁP RANH

Mẫu: `<khẳng định> · ĐO hay ĐOÁN · <cách đo / vì sao đoán> · <ngày> · <khối nào xác nhận>`

- **Khối 1 có 41 cảnh đăng ký và 16 mốc cắt cứng, tổng 57 lần đổi hình** · ĐO ·
  đếm `DANGKY` trong `canh/khoi-1.js` và đếm tay bảng §6; `python3 dung/soat-khoi.py`
  in ra 41 cảnh · 28/11/2026 · chưa khối nào xác nhận.
- **`vien()` trong khối 1 từng tô nhầm bằng gradient của `veDat()`** · ĐO · hai
  hàm cùng đặt id `pre+"-d"`, mà `url(#id)` tra theo **cả tài liệu** chứ không
  theo từng `<svg>`, nên nửa dưới khung hình thành một dải xanh phẳng; chụp
  khung mới thấy, không sinh dòng lỗi nào · 28/11/2026 · **khối 2 và khối 3 nên
  tự kiểm: bất kỳ hàm dựng sẵn nào cũng có thể đụng id với hàm khác trong cùng
  cảnh.** Cách chắc chắn: mọi id gradient/clipPath đều mang tiền tố cảnh **và**
  một hậu tố riêng cho từng hàm.
- **Lớp `.lop` của một cảnh gồm CẢ `NEN()`** · ĐO · `NEN()` trả về một `.lop`,
  nên `root.querySelectorAll(".lop")[0]` là nền chứ không phải lớp hình đầu
  tiên; tôi đã mắc lỗi lệch chỉ số này ở 4 cảnh (k1c35, c37, c40, c41) và chỉ
  phát hiện khi chụp khung · 28/11/2026 · khối 2, khối 3 nên soát lại mọi chỗ
  dùng chỉ số `L[i]`.
- **Cảnh nào có `svg.bd` thì trang KHÔNG tự thêm lớp `.ov`** · ĐO · đọc
  `tap03-full.html`, vòng `canh.forEach` bỏ qua cảnh có `svg.bd`; vì vậy khối 1
  tự đặt `inset:-14%` cho mọi lớp, kể cả lớp video (hàm `VIDL()` thay cho
  `VID()` của trang) · 28/11/2026 · **khối nào dùng `VID()` thẳng trong một cảnh
  có `svg.bd` thì lớp video sẽ lộ mép khi máy quay lia** — nên kiểm.
- **Ảnh dùng chung với khối khác**: không có. Mọi tệp của khối 1 đều mang tiền
  tố `k1-`, kể cả `k1-mattrang.jpg` (bản sao riêng của
  `File:Moon_nearside_LRO_5000.jpg`, khối 2 có bản `k2-mattrang.jpg` riêng).
- **Cú đóng vòng với khối 3 ĐÃ ĐƯỢC GỠ RÀNG BUỘC** · 28/11/2026, điều phối báo
  lại lời khối 3: *“cú đóng vòng với bạn không còn ràng buộc thông số máy quay
  nữa”*. Khối 1 vì vậy tự chọn thông số: nửa sau k1c04 chạy
  `x 20 → −16, y −12 → 10, z 1.04 → 1.20` theo `ez(c.u)`. Ghi lại để nếu sau này
  ai muốn nối lại vòng thì có số mà bám, **không phải ràng buộc nữa.**
- **`bdVN()` vẽ quầng sáng ven bờ bằng ĐƠN VỊ BẢN ĐỒ, không theo điểm ảnh** · ĐO ·
  hai nét `stroke-width:15` và `6` là đơn vị bản đồ; ở cảnh toàn quốc (w≈1200)
  chúng ra 16 px và 6 px, nhưng ở cảnh cận ĐBSCL (w≈210) chúng phình thành ~80 px
  và ~32 px, nuốt cả đường bờ biển. Khối 1 vá bằng hàm `haloBD(M, tyLe(sv), 15, 6)`
  gọi mỗi khung · 28/11/2026 · **khối nào có cảnh bản đồ cận cũng dính lỗi này.**
- **Tổng thời lượng tập và số cảnh cả tập** · không ghi ở đây · đó là số của
  điều phối, ghi ba chỗ thì ba chỗ sẽ vênh (§14).
