# Nguồn — khối 1 tập 3, BẢN V3 (cảnh k1c01 → k1c41, giây 0,0 → 253,8)

Dựng lại từ đầu ngày 28/11/2026 theo **PHẦN 15** của `HUONG-DAN-DUNG-CANH.md`
(tìm tư liệu thật trước, vẽ sau · không cảnh rỗng · phải có video thật ·
thời gian chuẩn hoá theo `c.u` / `c.since(k)`).
Bản cũ nằm ở `canh/.cu-v1/khoi-1.js`, **không còn dùng** vì kịch bản đã viết lại.

> **VÒNG SỬA 28/11/2026 (chiều) — theo `canh/SOAT-CANH.md`.**
> Đã sửa **6 mục mức CHẶN** và **13 mục NÊN SỬA** của khối 1, cộng 4 mục GỢI Ý rẻ tiền.
> Ba thay đổi lớn nhất về TƯ LIỆU: k1c04 đổi sang khuôn hình rạn Hardy dùng chung với
> khối 3; k1c37 và k1c38 bỏ clip Nga / clip Coverr không rõ địa điểm, dùng clip Mekong
> của khối 3; k1c40 nhịp 2 đổi sang ảnh sông Bến Tre.
> **Ba khẳng định sai trong bản trước đã được sửa tại chỗ, không xoá** — xem §8.

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
| `k1-trieu-len.mp4` | k1c27 (28/11: **bỏ khỏi k1c37**) | Nước lên ở biển Trắng, đảo Yagry, Severodvinsk | Pansosh | CC0 | https://commons.wikimedia.org/wiki/File%3A%D0%AF%D0%B3%D1%80%D1%8B._%D0%9F%D1%80%D0%B8%D0%BB%D0%B8%D0%B2.webm |
| `k1-trieu-rut.mp4` | k1c39 | Nước rút, bãi triều lộ ra, biển Trắng, đảo Yagry | Pansosh | CC0 | https://commons.wikimedia.org/wiki/File%3A%D0%AF%D0%B3%D1%80%D1%8B._%D0%9E%D1%82%D0%BB%D0%B8%D0%B2.webm |
| `k1-bien-dem.mp4` | k1c03, k1c22 | Sóng bạc đầu trên biển lúc đêm | Coverr (`coverr-foamy-ocean-waves-at-night-2122`) | Giấy phép Coverr — xem §1.1 | https://coverr.co/videos/coverr-foamy-ocean-waves-at-night-2122 |
| `k1-bai-cat.mp4` | k1c12 | Bãi cát dài, sóng xô mép nước | Coverr (`coverr-sandy-beach-3010`) | Giấy phép Coverr | https://coverr.co/videos/coverr-sandy-beach-3010 |
| `k1-trieu-manh.mp4` | k1c19 | Sóng triều trắng xoá ập vào mũi đá, quay từ trên cao | Coverr (`coverr-a-tide-of-foamy-waves-4378`) | Giấy phép Coverr | https://coverr.co/videos/coverr-a-tide-of-foamy-waves-4378 |
| `k1-song-vo-da.mp4` | k1c23 | Sóng vỗ các mỏm đá sát mép bờ, quay từ trên cao | Coverr (`coverr-waves-crashing-against-the-rocks-5050`) | Giấy phép Coverr | https://coverr.co/videos/coverr-waves-crashing-against-the-rocks-5050 |
| `k1-bai-da-tren.mp4` | k1c30, k1c32, k1c33 | **Bãi đá vùng gian triều nhìn thẳng từ trên xuống**, nước tràn lên rồi rút | Coverr (`coverr-top-view-of-a-stony-coast-9752`) | Giấy phép Coverr | https://coverr.co/videos/coverr-top-view-of-a-stony-coast-9752 |
| `k1-mo-oc.mp4` | k1c33 (nhịp 2) | Bàn tay đầy ốc vừa bắt ở mép nước | Coverr (`coverr-collecting-clams-from-a-river-4582`) | Giấy phép Coverr | https://coverr.co/videos/coverr-collecting-clams-from-a-river-4582 |
| `k1-ruong-lua.mp4` | k1c40 nhịp 1 (28/11: **bỏ khỏi k1c38**) | Gặt lúa trên đồng vùng châu thổ nhiệt đới | Coverr (`coverr-rice-field-2717`) | Giấy phép Coverr | https://coverr.co/videos/coverr-rice-field-2717 |
| **`k3-bensong.mp4`** *(tệp của khối 3, khối 1 chỉ ĐỌC)* | k1c37 nhịp 2 | Bến sông Cửu Long, người lên ghe, mặt sông rộng | Le Monde en Vidéo | **CC BY 3.0** | https://commons.wikimedia.org/wiki/File:Mekong_Floating_Markets,_Ho_Chi_Minh,_Vietnam.webm — khối 3 cắt hình mờ bằng `crop=1280:575:0:0`; **1280×720 · 8,000 s**, khối 1 khai `dai:7,4` |
| **`k3-ghe-song.mp4`** *(tệp của khối 3, khối 1 chỉ ĐỌC)* | k1c38 | Chợ nổi trên sông Cửu Long, ghe chở dưa | như trên, đoạn khác | **CC BY 3.0** | như trên — **1280×720 · 8,000 s**, khối 1 khai `dai:7,4`, `pos "50% 55%"` theo số khối 3 đưa (clip bị kéo giãn dọc nhẹ sau khi cắt) |

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

> **SỬA 28/11/2026 — KHẲNG ĐỊNH SAI THỨ NHẤT, do người soát độc lập bắt (§4 đối
> chiếu chéo của `SOAT-CANH.md`).** Mục này và §7c từng viết *“không có clip Mekong
> nào vừa đủ giấy phép vừa không có hình mờ”*. **Câu đó sai.** Hình mờ
> “Le Monde en Vidéo” **cắt bỏ được** — người dựng khối 3 đã cắt bằng
> `crop=1280:575:0:0` rồi đưa về 1280×720, và **ba clip Mekong sạch đã nằm trong
> `slide/video/` từ trước khi tôi khai câu trên**: `k3-bensong.mp4`,
> `k3-chonoi.mp4`, `k3-ghe-song.mp4`. Lỗi của tôi là kết luận “không có tư liệu”
> mà **chưa chạy `ls video/` và chưa đọc mục 1 của `nguon-khoi-3.md`** — đúng cái
> luật L8 mà bản soát rút ra. Hai cảnh k1c37 và k1c38 nay dùng hai trong ba clip đó.

- `File:Mekong Floating Markets, Ho Chi Minh, Vietnam.webm` (CC BY 3.0, Le Monde
  en Vidéo) và `File:AMAZING Forest tour in delta of Mekong, Vietnam.webm` — bản
  tải thô **có hình mờ “Le Monde en Vidéo” đóng cứng vào khung hình**, và §15.1
  cấm ảnh có hình mờ. **Nhưng hình mờ nằm ở dải dưới nên cắt được**, và khối 3 đã
  cắt — xem khung cảnh báo ở đầu mục này. Tôi đã tự chụp khung giây 2 của cả ba
  clip ra nhìn: không còn hình mờ, không có dải đen pad, khung đủ 1280×720.
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
| `k1-traidat.jpg` | k1c02, k1c16 (mới 28/11), k1c24 | Trái Đất “Blue Marble”, chụp từ Apollo 17, 7/12/1972 | NASA / phi hành đoàn Apollo 17 | Phạm vi công cộng | https://commons.wikimedia.org/wiki/File%3AThe_Earth_seen_from_Apollo_17.jpg |
| `k1-sanho-de.jpg` | k1c04 | San hô đẻ đồng loạt ban đêm, trứng nổi lên | NOAA National Marine Sanctuaries | Phạm vi công cộng | https://commons.wikimedia.org/wiki/File:Coral_Spawning_(38797556434).jpg |
| `k1-sanho-ran.jpg` | **không dùng nữa** (28/11) | San hô não nhả trứng, **sao biển giòn ĐỎ chiếm trọn khung** — chính vì thế mà cú gài ở k1c04 không nổ được ở k3c23; giữ lại trong `anh/` | Flower Garden Banks NMS / NOAA | Phạm vi công cộng | https://commons.wikimedia.org/wiki/File:FGBNMS_-_Coral_Spawning_(30008794505).jpg |
| `k1-khunglong.jpg` | k1c11 | Bộ xương *Tyrannosaurus rex*, Smithsonian NMNH | USDAgov | Phạm vi công cộng | https://commons.wikimedia.org/wiki/File:Tyrannosaurus_Rex_skeleton_is_on_display_in_the_Dinosaurs_hall_at_the_Smithsonian%27s_National_Museum_of_Natural_History_in_Washington,_D.C..jpg |
| `k1-tau-hoa.jpg` | k1c11 | Tàu khách đường sắt Bắc – Nam, Việt Nam | Santi Llobet | CC BY 2.0 | https://commons.wikimedia.org/wiki/File%3AVietnam_Train_1.jpg |
| `k1-song-bien.jpg` | k1c13, k1c28 | Mặt biển ngoài khơi | Allen Shimada, NOAA/NMFS/OST/AMD | Phạm vi công cộng | https://commons.wikimedia.org/wiki/File:Wea04118_-_Flickr_-_NOAA_Photo_Library.jpg |
| `k1-gian-trieu.jpg` | k1c30 | Bãi đá vùng gian triều lúc nước rút, Cabrillo National Monument | National Park Service | Phạm vi công cộng | https://commons.wikimedia.org/wiki/File:Cabrillo_National_Monument_(12cbbe29-4032-4398-b54d-1e70a6ddfd5e).jpg |
| `k1-estran.jpg` | k1c31 | Hà, ốc bám đá và giun biển *Eulalia clavigera*, bãi gian triều Bretagne | Emmanuel Maros (Ifremer) | CC BY 4.0 | https://commons.wikimedia.org/wiki/File:Eulalie_(Eulalia_clavigera)_sur_l%27estran_(Ifremer_01066-117720_-_505751).jpg |
| `k1-chim-bo.jpg` | k1c33 | Chim bờ kiếm ăn trên bãi triều, Alaska | USFWS Alaska | Phạm vi công cộng | https://commons.wikimedia.org/wiki/File:Shorebird_galore_(8684617376).jpg |
| `k1-cantho.jpg` | k1c34 | Chợ nổi Cần Thơ, đồng bằng sông Cửu Long | Vyacheslav Argenberg | CC BY 4.0 | https://commons.wikimedia.org/wiki/File:Can_Tho,_Vietnam,_Floating_Market.jpg |
| `k1-hondau.jpg` | k1c35 | Đèn biển Hòn Dấu, Đồ Sơn, Hải Phòng | VuThiAnh | CC0 | https://commons.wikimedia.org/wiki/File:Hai_dang_Hon_Dau.jpg |
| `k1-cuulong.jpg` | k1c36, k1c37 (mới 28/11), k1c41 | Đồng bằng sông Cửu Long nhìn từ vệ tinh (MODIS 12/1/2016) | Jeff Schmaltz, MODIS Land Rapid Response Team, NASA GSFC | Phạm vi công cộng | https://commons.wikimedia.org/wiki/File:Vietnam_and_Cambodia_(MODIS_2016-01-12).jpg |
| `k1-bobien-vn.jpg` | k1c10 (28/11: **bỏ khỏi k1c40**) | Đánh cá ven bờ Biển Đông, Lăng Cô, Việt Nam | Vyacheslav Argenberg | CC BY 4.0 | https://commons.wikimedia.org/wiki/File:Fishing_on_the_coast_of_South_China_Sea,_Lang_Co,_Vietnam.jpg |
| **`k3-ran-hardy.jpg`** *(tệp của khối 3, khối 1 chỉ ĐỌC)* | k1c04 nhịp 2 | Rạn Hardy, Great Barrier Reef, Úc, 2013 — bản cắt 16:9 1920×1080 | rheins | **CC BY 3.0** (CC BY đòi ghi công nên cảnh có dòng ghi công trên hình) | https://commons.wikimedia.org/wiki/File:Aerial_View_of_Hardy_Reef_-_2013.04_-_panoramio.jpg |
| **`k3-bentre.jpg`** *(tệp của khối 3, khối 1 chỉ ĐỌC)* | k1c40 nhịp 2 | Xuồng câu trên sông, Bến Tre, Việt Nam, 2019 | Balon Greyjoy | **CC0** | https://commons.wikimedia.org/wiki/File:20190924_Ben_Tre_river_fishing-1.jpg |
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

**ĐÃ XỬ LÝ 28/11 — chỗ tôi tự thấy yếu nhất hoá ra yếu vì một lý do khác.**
Bản trước viết: *“cảnh k1c37 nói về cái bơm đẩy mặn ngược vào sông ở đồng bằng
sông Cửu Long, nhưng nhịp video là clip nước lên ở biển Trắng, Nga; tôi đã tìm mà
không có clip Mekong nào vừa đủ giấy phép vừa không có hình mờ.”*
**Vế sau của câu đó SAI** (xem khung cảnh báo ở §1.2): clip Mekong hợp lệ đã nằm
sẵn trong `slide/video/` từ trước, do khối 3 cắt hình mờ. Người soát xem khung
thật và kết luận đúng: *“khai thật không cứu được một hình vô nghĩa”* — bãi cát
xám bệch phẳng lì, không thuyền, không nhà, không sông.
Nay **k1c37 nhịp 2 dùng `video/k3-bensong.mp4`** (bến sông Cửu Long) và
**k1c38 dùng `video/k3-ghe-song.mp4`** (chợ nổi). Hai dòng nguồn trên hình đổi
thành *“Video: sông Cửu Long, Việt Nam · Le Monde en Vidéo · CC BY 3.0”* và
*“Video: chợ nổi trên sông Cửu Long, Việt Nam · Le Monde en Vidéo · CC BY 3.0”*.
Clip Nga `k1-trieu-len.mp4` vẫn còn dùng ở k1c27, nơi lời dẫn **không** nói tới
địa điểm Việt Nam nào.

---

## 7d. VÒNG SỬA THEO BẢN SOÁT ĐỘC LẬP — từng mục, đã làm gì

Nguồn việc: `canh/SOAT-CANH.md` (28/11/2026). Mức **CHẶN** · **NÊN SỬA** · *GỢI Ý*.

| cảnh | mức | người soát nói gì | tôi đã làm gì |
|---|---|---|---|
| k1c03 | **CHẶN** | clip khai “biển đêm” nhưng ra mặt biển xanh lơ giữa trưa; vệt trăng hình thang mép cứng; đĩa trăng viền sắc lẹm | Thêm `loc:"contrast(1.18) saturate(.70) hue-rotate(-12deg) brightness(.34)"` cho `k1-bien-dem.mp4`. Vệt trăng đổi từ polygon đặc sang `<path>` `filter:blur(14px)`, opacity 0,22, bề ngang còn 40 %, lắc theo `Math.sin(c.t*0.6)`. Thêm quầng `gradR` bán kính 2,2 lần đĩa, opacity 0,35. **Đúng y nguyên đơn thuốc.** Một chỗ khác số: người soát ghi “hạ brightness từ 0,30 xuống 0,16” — 0,30 trong mã là tham số **độ sâu lớp** (`sau`) chứ không phải brightness; cảnh cũ không khai `loc` nên chạy brightness mặc định 1,0. Tôi đo bằng khung chụp rồi chọn 0,34. |
| k1c04 | NÊN SỬA | cú gài san hô lệch khuôn hình với k3c23 vì sao biển đỏ chiếm khung | Bỏ `k1-sanho-ran.jpg`. Nhịp 2 dùng `anh/k3-ran-hardy.jpg`, `pos "50% 42%"`, `z 1.02→1.10`, `cam` x ±6, không chỉnh filter — **bốn thông số chốt tay đôi với khối 3**. Người soát đề nghị `k2-gbr-khong.jpg`; khối 2 và khối 3 đã chốt dùng bản 16:9 của khối 3 để cả tập chỉ có MỘT bản cắt rạn Hardy, tôi theo bản chốt đó. Trứng san hô trôi tắt bớt ở nhịp 2 (chúng chỉ có nghĩa ở khuôn macro). |
| k1c06 | NÊN SỬA | thước không một nhãn nào | Thêm ba nhãn: **“chậm?”** lam trái, **“nhanh?”** đỏ phải, **“3,8 cm / năm”** giữa thước. Người soát ghi “nhanh? đỏ BÊN PHẢI, chậm? lam BÊN TRÁI” nhưng trong bản cũ mũi tên **đỏ** lại là mũi tên **trái**; trên một cây thước thì trái = chậm, nên tôi giữ cặp màu–chữ của họ và **đổi màu hai mũi tên** cho khớp. Đĩa trăng dời lên (cy 288→236, r 126→106) để không đè nhãn đơn vị. |
| k1c10 | *GỢI Ý* | số đếm nội suy liên tục nên khung giữa hiện “3.205 km” — một con số sai | `u > .82` thì ghim đúng 3.260. |
| k1c11 | NÊN SỬA | pill “2.500 km gần hơn” ghim ĐÈ lên đường sắt Hà Nội – Sài Gòn → đọc ra tuyến dài 2.500 km (thật là ~1.730) | Bỏ hẳn pill. Thay bằng **thẻ hai thanh so sánh** trong `.hud`: thanh xám 360 px “Hà Nội – Sài Gòn ≈ 1.730 km”, thanh đỏ 520 px “2.500 km Mặt Trăng lùi ra”. Tỉ lệ đúng (520/360 = 2.500/1.730). Đặt trong `.hud` nên máy quay không lia nó ra ngoài vùng an toàn. |
| k1c11 | *GỢI Ý* | ảnh tàu hoả để lọt mặt một hành khách nữ ở một phần ba bên phải | **Cách chữa họ đề nghị không chạy được** — xem mục “chỗ người soát sai” ở §7e. Tôi phóng ngang thật: `transform:scale(1.6) translateX(19%)`, cửa sổ nhìn thấy còn 0 → 62,3 % bề ngang ảnh, người ở ~64 % ra hẳn ngoài khung. Đã chụp lại xác nhận. |
| k1c12 | NÊN SỬA | nhãn “một hạt cát” cách chấm nó chú thích gần 500 px; chữ nâu trên nền be khó đọc; dòng nguồn quá nhỏ | Ghim nhãn bằng `ghimL()` vào đúng chấm đỏ (có kẹp vùng an toàn), đổi màu `#7A1E12` trên thẻ nền `rgba(255,248,232,.86)` bo 4 px. Dòng nguồn: nâng cỡ cho **toàn khối** từ 13 lên 15 px và đổi màu dòng này sang `#EAF2F7`. |
| k1c14 | **CHẶN** | câu `>>` là tiếng người khác chen ngang nhưng không một dấu hiệu nào | **Bê nguyên bộ dấu của k2c01**: hai `<rect>` `#06101C` opacity 0,94 trượt vào từ hai mép trong 0,6 s rồi mở ra, cộng vạch dọc `#D4523C` dày 6 px tắt dần sau 0,5 s, dùng `c.t` tuyệt đối (nhịp < 1,5 s, đúng §15.6). Từng con số giống hệt k2c01 — đó là điểm của luật L7. Lời giữ nguyên (sửa lời phải qua điều phối). |
| k1c15 | **CHẶN** | phóng vào bề mặt tới mức không ai đọc ra đó là Mặt Trăng, đúng vào câu “Mặt Trăng sẽ không biến mất” | Bỏ ảnh phủ kín khung. Nay là **đĩa trăng trọn vẹn** (`anhTrang` R=232 tại 640,352) trên trường sao, `z` tối đa 1,15 (cũ ~1,9). Không dùng `object-fit:contain` vì bẫy 16.4 (lớp mang `inset:-14%`); `anhTrang()` cắt ảnh vào `<circle>` trong hệ toạ độ đã bù sẵn, nên đĩa nằm gọn trong khung ở **mọi** mốc. |
| k1c15–c18 | NÊN SỬA | bốn cảnh liền nhau 18,4 s dùng y hệt một tấm nền | c15 đĩa trăng trên trường sao · **c16 nền ảnh Trái Đất** · c17 giữ bề mặt Mặt Trăng · **c18 bỏ hẳn ảnh nền, chỉ còn nền giấy `NEN("am")`**. Không còn hai cảnh liền nào chung nền (luật L6). |
| k1c16 | NÊN SỬA | ba đĩa giống hệt nhau, mỗi đĩa một gạch trừu tượng, không nhãn | Dựng lại: nền ảnh Trái Đất, **Trái Đất thật ở giữa khung** (`anhDat` R=104), ba Mặt Trăng quanh nó, mỗi cái một **mũi tên có hướng thật** (chúc xuống Trái Đất · bay chéo ra ngoài khung · bị một vật thứ ba ở mép phải kéo lệch), dấu ✕ đè lên mũi tên, và **ba nhãn hai từ**: “rơi xuống” · “bay đi” · “bị kéo đi”. |
| k1c20 · k1c21 | **CHẶN** | ba tấm thẻ GIỐNG HỆT NHAU nói ba điều khác nhau, không nhãn, thẻ thứ ba bị mép phải cắt | Viết **một hàm dùng chung `baThe()`** cho cả hai cảnh (để hai cảnh không bao giờ lệch nhau nữa). Ba thẻ nay khác nhau **về hình**: ① đĩa trăng + mũi tên chỉ ra ngoài + vệt đứt phía sau ② cây thước, con trỏ và một đĩa trăng nhỏ nhích **đúng một nấc**, có ngoặc và chữ “một nấc” ③ thanh “80 năm” chạy hết mà đĩa trăng vẫn còn đó. Mỗi thẻ một nhãn hai từ: “đang đi” · “rất chậm” · “vẫn còn đó”. Cụm co từ ~1.290 px xuống **1.040 px** (tâm 280/640/1000, nửa bề ngang 160), `z` tối đa hạ từ 1,10 xuống **1,06**. Đo lại: không mép nào chạm khung. |
| k1c24 | NÊN SỬA | Mặt Trời làm ảnh nền phủ kín khung, Trái Đất đặt chồng lên giữa → đọc ra Trái Đất nằm trong Mặt Trời | Video Mặt Trời nay bị cắt tròn thành **một đĩa r = 144 px (40 % chiều cao) sát mép trái** bằng `clip-path:circle(144px at 369px 461px)` — toạ độ đã **cộng bù phần nới `-14 %`** của lớp (tâm khung 190,360 → tâm lớp 369,461), đúng bẫy 16.4. Nền còn lại là trường sao. Trái Đất giữa (R=126), Mặt Trăng phải (R=52). Nhãn “Mặt Trời” dời xuống **dưới đĩa**, không còn chỉ ra ngoài khung. Lớp nước triều đổi sang màu sáng để không ra một vành đen. |
| k1c29 | NÊN SỬA (hình) | phép tính “2,2 + 1 = 3,2” không tự giải thích: không chỗ nào nói cái “1” là Mặt Trời; chữ “còn 1 / 3,2” đỏ trên hổ phách, có bóng nhoè | Viết lại bằng `<text>` SVG để số và đĩa dùng **chung một hệ toạ độ**: đĩa Mặt Trăng ngồi ngay trên số **2,2**, đĩa Mặt Trời ngay trên số **1**, mỗi đĩa một nhãn nhỏ. Kết quả đổi thành thẻ nền `#7A3A12` bo 8 px, chữ trắng ngà `#FFF3DC`, **bỏ bóng nhoè**, và viết rõ “bỏ Mặt Trăng → còn 1 / 3,2”. |
| k1c29 · k1c33 · k1c41 | NÊN SỬA (lời) | ba câu cần viết lại | **CHƯA LÀM — không được phép.** Phiếu giao việc cấm sửa `kich-ban.md`; điều phối đang hỏi chủ kênh về phần lời. Ba câu thay thế của người soát vẫn nằm nguyên trong `SOAT-CANH.md`. Đổi lời còn kéo theo đọc lại tiếng và sinh lại mốc giây (§15.5). |
| k1c31 | *GỢI Ý* | một con giun biển xanh lá chiếm trọn khung; màu đẩy quá tay | `pos "50% 62%"`, `z` tối đa 1,20 → **1,08**, `saturate` 1,30 → **0,96**. |
| k1c32 | NÊN SỬA | thang bốn tầng, hai tầng giữa không nhãn, không đọc ra con nào | Thêm **ô nhận dạng 92 px** ở đầu mỗi tầng (thẻ tối + ký hiệu phóng 2,4 lần) và **đủ bốn nhãn**: “hà” · “ốc” · “rong” · “vẹm”. **Không làm theo đề nghị cắt bốn mảnh ảnh thật** — lý do ở §7e. |
| k1c35 | NÊN SỬA | biển hiệu xí nghiệp hàng hải chiếm một phần ba dưới khung, lại bị cắt giữa chữ | Đổi `pos` về **“44% 0%”** (ngược chiều với đề nghị, lý do ở §7e) **cộng** một dải chuyển sắc tối cao 30 % ở chân khung. Đo bằng pixel: dải 430–900 × 560–720 từ trung bình RGB (90,86,93) xuống (27,64,93) và biển hiệu ra hẳn ngoài khung. |
| k1c37 | **CHẶN** | (1) clip bãi cát biển Trắng, Nga minh hoạ cho sông Cửu Long (2) bản đồ ĐBSCL thành khối cam răng cưa | (1) Nhịp 2 dùng **`video/k3-bensong.mp4`** — đã `ffprobe`: 1280×720, 8,000 s, không dải đen, khai `dai:7,4` (bẫy 16.3). (2) Nền đổi sang **ảnh vệ tinh `k1-cuulong.jpg`**; ba mũi tên mặn, đường ranh mặn và chấm Cần Thơ nay vẽ trong **toạ độ khung hình**, bỏ hẳn `bdVN()`/`ngamL()`/`haloBD()`. Pill số liệu đổi thành nhãn “ranh mặn vào sâu 40 – 60 km” đặt cứng trong `.hud`. |
| k1c38 | NÊN SỬA | clip ruộng khô có đồi núi và dừa, rõ ràng không phải ĐBSCL | Dùng **`video/k3-ghe-song.mp4`** (chợ nổi sông Cửu Long), `dai:7,4`, `pos "50% 55%"`. Không dùng `anh/k2-ruong-mekong.jpg` như người soát gợi ý — lý do ở §7e. |
| k1c40 | *GỢI Ý* | ba mũi tên “nước vào ruộng” vẽ vắt ngang bầu trời; nhịp 2 trùng tấm của k1c10 | Mũi tên hạ xuống dải **y 420–564** để chạy trong mặt ruộng. Nhịp 2 đổi sang **`anh/k3-bentre.jpg`** (xuồng câu trên sông Bến Tre, CC0) — khớp hẳn với “đưa cá vào tận nơi” và không trùng cảnh nào. Người soát gợi ý `k1-cantho.jpg`, nhưng tấm đó đang dùng ở k1c34, chỉ cách 35 giây, nên đổi sang đó là **đẻ ra đúng lỗi trùng ảnh mà họ đang bắt**. |
| k1c41 | NÊN SỬA | vùng tô phủ gần hết đa giác miền Nam kể cả phần cao ráo; đa giác răng cưa | Nền đổi sang **ảnh vệ tinh** ngay từ nhịp 1. Vùng tô là một `<path>` **vẽ tay theo ảnh**, chỉ phủ phần châu thổ dưới đường Tân An – Rạch Giá, có dải quét từ bắc xuống nam và viền vẽ dần. Giữ nguyên dòng “Vùng tô là chỉ thị”. Số đếm cũng ghim ở 1.000.000 khi `u > .80`. |
| k1c13 | *GỢI Ý* | “muốn thở phào” mà hình là mặt biển tĩnh | **Không làm.** Cảnh đã có cú lùi máy `z 1.14 → 1.02` — chính là cú “thở phào” mà họ đề nghị, chỉ khác nền. Đổi sang bản đồ của k1c12 sẽ thành hai cảnh bản đồ liền nhau, đi ngược luật L6 mà chính bản soát vừa rút ra. Mức GỢI Ý nên tôi để lại và nói rõ. |
| **k1c22** | *(người soát không nêu — tôi tự bắt)* | cảnh dùng **cùng clip** `k1-bien-dem.mp4` với k1c03; sau khi kéo c03 về tông đêm thì c22 vẫn là biển xanh lơ giữa trưa, trong khi câu là “nếu **đêm mai** nó không còn ở đó” | Dùng **y hệt bộ lọc của k1c03**, và vệt trăng cũng đổi sang path mờ lắc theo sóng. Hai cảnh cùng clip nay cùng tông. |
| **vùng an toàn 48 px** | **CHẶN** (luật L3) | mọi chữ phải nằm trong `x ∈ [48,1232]`, `y ∈ [48,672]` ở MỌI mốc `c.u` | Sửa ở **hằng số chung**: `NGUON`/`NGUONP` neo bằng **`bottom:48px`** chứ không bằng `top` (dòng nguồn dài xuống dòng thì dòng thứ hai rơi ra ngoài mà không ai thấy), cỡ chữ 13 → 15 px, `max-width:1040px`; `NAMO` hạ `top` xuống 56 (chữ 46 px/line-height 1 tràn ~4 px lên trên hộp dòng). Thêm hàm **`ghimPIN()`** kẹp nhãn địa danh vào vùng an toàn, dùng ở k1c11 và k1c35. Kẹp riêng pill của k1c01 và k1c02. **Đo thật, không ước lượng:** script chụp đo `getClientRects()` của một `Range` phủ nội dung từng phần tử `.tx` và từng `<text>` SVG — đo **vệt chữ**, không đo cái hộp (một div `left:0;right:0;text-align:center` có hộp rộng 1280 px nhưng chữ nằm giữa). Chạy 41 cảnh × 3 mốc: **0 vi phạm**. |

## 7e. BỐN CHỖ TÔI KHÔNG LÀM THEO NGƯỜI SOÁT — và bằng chứng

1. **k1c11, “đổi sang `pos:"28% 50%"` để bỏ hành khách nữ” — cách chữa không có tác
   dụng.** `anh/k1-tau-hoa.jpg` là **1840×1232**, tỉ lệ 1,494, **hẹp hơn** khung 16:9
   (1,778). Với `object-fit: cover`, ảnh phủ kín theo **chiều ngang** và chỉ bị cắt
   theo **chiều dọc**, nên `object-position` **X hoàn toàn vô hiệu**. Tôi đã dựng khung
   ở 44 % và ở 28 % rồi so: hai khung giống hệt nhau, người vẫn nguyên chỗ cũ. Phải
   phóng ngang thật mới bỏ được, nên tôi dùng `transform:scale(1.6) translateX(19%)`.
   *Lỗi nhìn đúng, đơn thuốc sai.*
2. **k1c35, “đổi sang `pos:"50% 22%"`” — sai CHIỀU.** `anh/k1-hondau.jpg` là ảnh **dọc**
   921×1632; khung 16:9 chỉ thấy một dải 31,7 % chiều cao ảnh, và biển hiệu nằm ở
   khoảng 33 % tính từ đỉnh. `object-position` dọc **lớn hơn là kéo xuống**, nên 22 %
   còn lọt **nhiều** biển hiệu hơn 14 % của bản cũ. Phải đi ngược về **“44% 0%”**.
   Tôi vẫn giữ thêm dải chuyển sắc tối (cách chữa thứ hai họ nêu) làm lớp chặn.
3. **k1c32, “cắt bốn mảnh nhỏ từ `k1-estran.jpg` làm bốn ô hà / ốc / rong / vẹm” —
   tôi từ chối.** Tôi mở ảnh ra xem: trang Commons chú thích cả tấm là *“hà, ốc bám
   đá và giun biển *Eulalia clavigera*”*, **không nhắc vẹm**. Cắt một mảnh ảnh rồi dán
   nhãn “vẹm” lên trong khi mình không biết đó là con gì chính là thứ §12 cấm
   (“đừng giả độ chính xác”). Tôi giữ ký hiệu vẽ — nó **không giả danh ảnh thật** —
   phóng to lên 2,4 lần đặt trong một ô nhận dạng, và gắn đủ bốn nhãn. Ý chính của
   mục soát (hai tầng giữa không nhãn) đã xử lý xong.
4. **k1c38, “dùng `anh/k2-ruong-mekong.jpg`” — tấm đó có chữ nước ngoài đóng cứng.**
   Tôi mở ra xem: ảnh vệ tinh ruộng, góc dưới trái có thanh tỉ lệ **“1 km”**, góc dưới
   phải có **“26 March 2023”**, cả hai in cứng vào khung hình — đúng loại chữ lạ mà
   chính người soát vừa chê ở k1c35. Dùng `video/k3-ghe-song.mp4` thay, vừa là tư
   liệu Cửu Long thật vừa là **video** (sống động hơn một ảnh vệ tinh tĩnh).

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
- **Ảnh dùng chung với khối khác** · **KHẲNG ĐỊNH SAI THỨ HAI VÀ THỨ BA, sửa
  28/11/2026.** Bản trước viết gọn một câu: *“không có. Mọi tệp của khối 1 đều mang
  tiền tố `k1-`.”* Suy từ TÊN TỆP chứ không ĐO, nên sai hai chỗ; người soát độc lập
  kiểm bằng md5 và bắt được (§3 đối chiếu chéo của `SOAT-CANH.md`), khối 2 xác nhận
  lại bằng máy. Sự thật, đã đo lại:
  * **`anh/k1-sanho-de.jpg` và `anh/k2-sanho-de.jpg` GIỐNG NHAU TỪNG BYTE** —
    `md5 96e8b79fe6ac2b70585352cc115410dc`, cùng 1920×1276, cùng tệp gốc
    `File:Coral_Spawning_(38797556434).jpg` (NOAA National Marine Sanctuaries,
    phạm vi công cộng). Hai khối chép cùng một ảnh về rồi mỗi bên đặt một tên, và
    **cả hai file nguồn đều khai “không dùng chung tệp nào”**. Tên tệp khác nhau
    KHÔNG chứng minh được tệp khác nhau — bài học: muốn khai “không dùng chung”
    thì phải chạy `md5`, không được nhìn tiền tố.
    *Đã xử lý:* tấm này nay chỉ còn ở **một cảnh duy nhất của khối 1** là k1c04
    nhịp 1; khối 2 giữ ở k2c45. Hai bên đã chốt với nhau.
  * **`anh/k1-mattrang.jpg` và `anh/k2-mattrang.jpg` cùng MỘT ẢNH GỐC**
    (`File:Moon_nearside_LRO_5000.jpg`, NASA/GSFC/ĐH bang Arizona, phạm vi công
    cộng). Hai tệp là hai bản sao riêng, không trỏ chéo — khối 2 đề nghị giữ cách
    này và khối 1 đồng ý, nhưng **phải khai**, không được nói “không dùng chung”.
  * **Ba tệp của khối 3 mà khối 1 nay ĐỌC CHUNG, không chép lại:**
    `anh/k3-ran-hardy.jpg` (k1c04 nhịp 2) · `video/k3-bensong.mp4` (k1c37 nhịp 2) ·
    `video/k3-ghe-song.mp4` (k1c38) · `anh/k3-bentre.jpg` (k1c40 nhịp 2).
    Khối 3 đã cam kết **không xoá, không đổi tên, không cắt lại** bốn tệp này
    (tin nhắn 28/11). Khối 1 **chỉ đọc**, không sửa. Nguồn và giấy phép gốc đã
    chép đầy đủ vào §1 và §2. Lý do không chép thành bản `k1-`: người soát yêu cầu
    cả tập dùng **một bản cắt duy nhất** của rạn Hardy, mà chép thêm một bản là
    đẻ ra đúng bản cắt thứ ba mà họ muốn tránh.
- **Cú gài “san hô đẻ theo rằm” nay dùng CHUNG MỘT KHUÔN HÌNH với k3c23** ·
  chốt với khối 3 ngày 28/11, bốn thông số: tệp `anh/k3-ran-hardy.jpg` ·
  `pos "50% 42%"` · máy đẩy `z 1.02 → 1.10` · `cam()` lia ngang biên độ ±6 · không
  chỉnh `filter` (giữ `saturate 1.0`). **Đây là ràng buộc, không phải ghi chú** —
  ai đổi một trong bốn số ở một đầu thì phải đổi ở đầu kia.
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
