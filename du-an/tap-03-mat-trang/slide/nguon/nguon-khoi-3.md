# Nguồn — KHỐI 3, tập 3 "Nếu Mặt Trăng biến mất"

Bản **V3**, dựng lại từ đầu ngày **28/11/2026** theo PHẦN 15 của `HUONG-DAN-DUNG-CANH.md`.
Bản V1 (và tài liệu nguồn của nó) nằm ở `canh/.cu-v1/`.

Khối 3 = `khoi[2]` của `_chia-khoi.json` = **đoạn 36–49** (hiển thị 37–50),
giây **540,244 → 744,190**, dài **203,946 giây**, **32 câu**.

---

## 0. Tóm tắt một dòng

**32 cảnh · 19 mốc cắt cứng trong cảnh · 51 lần đổi hình · 15,0 lần/phút**
**9 tệp video thật** (15/32 cảnh) · **15 tệp ảnh thật** (14/32 cảnh chỉ dùng ảnh)
**3 cảnh thuần đồ hoạ**, cả ba đều là sơ đồ/biểu đồ — ngoại lệ được phép của §15.1.3.
Chữ biên tập: **3 lần** (trần cho phép là 5).

---

## 1. Video (thư mục `video/`, tiền tố `k3-`) — 9 tệp

Tất cả đều đã cắt dưới 10 giây và dưới 6 MB bằng ffmpeg trước khi đưa vào,
đúng §15.3. Không tệp nào có tiếng (đã `-an`).

| Tệp | Dài · nặng | Cảnh dùng | Tác giả / nơi lấy | Giấy phép |
|---|---|---|---|---|
| `k3-sanho-de.mp4` | 9,01 s · 4,8 MB | **k3c23 (cú đóng)** | NOAA Ocean Today, tập *Coral Spawning*, quay ở Khu bảo tồn biển quốc gia Flower Garden Banks | **Phạm vi công cộng** (công vụ chính phủ Mỹ) |
| `k3-sanho-khoi.mp4` | 7,51 s · 4,1 MB | k3c24 · k3c31 | như trên, đoạn khác | **Phạm vi công cộng** |
| `k3-nhatthuc-toan.mp4` | 3,80 s · 0,36 MB | k3c09 · k3c13 | NASA Armstrong Flight Research Center, nhật thực 21/8/2017 quay từ máy bay G-III | **Phạm vi công cộng** |
| `k3-nhatthuc-dia.mp4` | 5,01 s · 0,60 MB | k3c10 · k3c20 | như trên, đoạn khác | **Phạm vi công cộng** |
| `k3-vanhlua.mp4` | 8,01 s · 1,0 MB | k3c11 · k3c15 | như trên, đoạn "nhẫn kim cương" | **Phạm vi công cộng** |
| `k3-trangmoc.mp4` | 8,01 s · 1,4 MB | k3c22 · k3c27 · k3c32 | Joshua Tree National Park (NPS) — trăng mọc tua nhanh | **Phạm vi công cộng** |
| `k3-chonoi.mp4` | 9,00 s · 2,6 MB | k3c05 | Le Monde en Vidéo — *Mekong Floating Markets* | **CC BY 3.0** |
| `k3-ghe-song.mp4` | 8,00 s · 3,7 MB | k3c06 | như trên, đoạn khác | **CC BY 3.0** |
| `k3-bensong.mp4` | 8,00 s · 2,9 MB | k3c01 | như trên, đoạn khác | **CC BY 3.0** |

### Trang nguồn

* NOAA Ocean Today — *Coral Spawning*: https://oceantoday.noaa.gov/coralspawning/
  (tệp tải: `otkn_907_coralspawning_lg.mp4`, 1280×720)
* NASA / Armstrong FRC — *Total Eclipse From Onboard NASA's G-III Research Aircraft*:
  https://commons.wikimedia.org/wiki/File:Total_Eclipse_From_Onboard_NASA%27s_G-III_Research_Aircraft_(AFRC-2017-11522-2_G-III_Eclipse_Totality).webm
* Joshua Tree National Park — *Moon rising over Joshua Trees*:
  https://commons.wikimedia.org/wiki/File:Moon_rising_over_Joshua_Trees_(29952161293).webm
* Le Monde en Vidéo — *Mekong Floating Markets, Ho Chi Minh, Vietnam*:
  https://commons.wikimedia.org/wiki/File:Mekong_Floating_Markets_,_Ho_Chi_Minh_,Vietnam.webm

### Đã cắt sửa (không thêm bớt nội dung)

* **Hai clip NOAA**: bản gốc có **phụ đề tiếng Anh in sẵn ở chân khung** và **logo
  Ocean Today ở góc trái trên**. Đã **cắt bỏ hai dải đó** (`crop=1000:560:140:92`)
  rồi phóng lại lên 1280×720. Không còn một chữ nước ngoài nào trên hình —
  đây đúng là cái bẫy 11.10 của hợp đồng, nên đã mở từng khung ra nhìn.
* **Ba clip Mekong**: bản gốc có **hình mờ "Le Monde en Vidéo" ở góc phải dưới**.
  Đã cắt 15 % chiều cao phía dưới (`crop=1280:575:0:0`) để bỏ hẳn hình mờ và cả
  dòng phụ đề tiếng Anh thỉnh thoảng hiện ra, rồi phóng lại lên 1280×720.
  Hợp đồng cấm ảnh có hình mờ, nên nếu không cắt được thì đã phải bỏ clip.
* **Ba clip NASA**: cắt vào giữa khung quanh đĩa Mặt Trời (`crop=1100:619:295:154`)
  để đĩa đủ to; nếu để nguyên thì đĩa chỉ chiếm 1/7 chiều cao và cảnh thành trống.

### Đã loại

| Tư liệu | Lý do loại |
|---|---|
| `File:Moonrise, surf and train at GlenCairn, Cape Town.webm` | **CC BY-SA 4.0** |
| `File:Buesum Meldorfer Bucht Supermond.webm` | **CC BY-SA 4.0** |
| `File:2017 Eclipse Totality (in 4K, GH5).webm` (CC BY 3.0, hợp lệ) | đĩa quá nhỏ trong khung, cắt vào thì vỡ; bản NASA phạm vi công cộng đẹp hơn |
| `File:Spawning Pocillopora meandrina` (CC BY 2.5, hợp lệ) | chỉ 480×360, quá thấp cho cảnh đóng của cả tập |
| Mọi bản san hô đẻ trên Internet Archive (*Blue Planet*, *Life on the Reef*…) | phim truyền hình có bản quyền |

---

## 2. Ảnh (thư mục `anh/`, tiền tố `k3-`) — 15 tấm dùng trong bản V3

| Tệp | Cảnh | Tác giả | Giấy phép | Trang nguồn |
|---|---|---|---|---|
| `k3-ran-hardy.jpg` **(DÙNG CHUNG CẢ BA KHỐI — xem mục 9)** | k3c23 · k3c31 · *(k2c43, k1c04)* | rheins — rạn Hardy, Great Barrier Reef, 2013 | **CC BY 3.0** | https://commons.wikimedia.org/wiki/File:Aerial_View_of_Hardy_Reef_-_2013.04_-_panoramio.jpg |
| `k3-chohoa.jpg` | k3c02 · k3c04 | trungydang — chợ hoa Tết, Tân Châu, An Giang | **CC BY 3.0** | https://commons.wikimedia.org/wiki/File:Cho_hoa_Xuan_Atmui-_Truoc_Cho_Tanchau,_Longchau,_tx._Tanchau,_tinh_Angiang_,_Vietnam_-_panoramio.jpg |
| `k3-denongsao.jpg` | k3c03 | Viethavvh | **Phạm vi công cộng** | https://commons.wikimedia.org/wiki/File:Den_ong_sao.JPG |
| `k3-denlong.jpg` | k3c03 | dronepicr — đèn lồng Hội An | **CC BY 2.0** | https://commons.wikimedia.org/wiki/File:Hoi_An_lantern_lights_(39513532072).jpg |
| `k3-don.jpg` | k3c06 | BacLuong — đáy cá trên sông Tiền | **Phạm vi công cộng** | https://commons.wikimedia.org/wiki/File:Mekong_Fishing_Net_@SongTien_Vietnam.jpg |
| `k3-bentre.jpg` | k3c07 · k3c08 | Balon Greyjoy — sông ở Bến Tre, 2019 | **CC0** | https://commons.wikimedia.org/wiki/File:20190924_Ben_Tre_river_fishing-1.jpg |
| `k3-nhatthuc.jpg` | k3c12 | NASA / Carla Thomas, 21/8/2017 | **Phạm vi công cộng** | https://commons.wikimedia.org/wiki/File:2017_Total_Solar_Eclipse_(AFRC2017-0233-005).jpg |
| `k3-khuyen.jpg` | k3c13 | Michael Arrighi — nhật thực hình khuyên 20/5/2012 | **CC BY 2.0** | https://commons.wikimedia.org/wiki/File:Ring_of_Fire,_the_Annular_Eclipse,_May_20,_2012.jpg |
| `k3-sao.jpg` | k3c12 · k3c14 · k3c15 · k3c21 · k3c25 | NPS / Jacob W. Frank | **Phạm vi công cộng** | https://commons.wikimedia.org/wiki/File:Milky_Way_and_starry_night_sky_(26972689115).jpg |
| `k3-trang.jpg` *(chỉ còn k3c17; các đĩa trăng khác nay vẽ bằng `K2.trang()`)* | k3c17 | NASA / GSFC / Đại học bang Arizona (LRO) | **Phạm vi công cộng** | https://commons.wikimedia.org/wiki/File:Moon_nearside_LRO_5000.jpg |
| `k3-trang-canh.jpg` | k3c18 | W. carter | **CC0** | https://commons.wikimedia.org/wiki/File:Full_moon_behind_branches_1.jpg |
| `k3-polyp.jpg` | k3c25 | Flower Garden Banks NMS / NOAA | **Phạm vi công cộng** | https://commons.wikimedia.org/wiki/File:FGBNMS_-_Coral_Spawning_(32330899546).jpg |
| `k3-sanho-nao.jpg` | k3c26 | Emma Hickerson / NOAA | **Phạm vi công cộng** | https://commons.wikimedia.org/wiki/File:Brain_coral_spawning.jpg |
| `k3-trangbien.jpg` | k3c29 | P. S. Krøyer, 1883 — *Ánh trăng trên bãi biển Skagen* | **Phạm vi công cộng** (tác giả mất 1909) | https://commons.wikimedia.org/wiki/File:Peder_Severin_Kr%C3%B8yer_-_M%C3%A5neskin_over_Skagens_Strand_med_hjulspor_i_sandet_og_optrukne_b%C3%A5de_p%C3%A5_stranden_-_1883.png |
| `k3-ran.jpg` | k3c30 | Chris Coccaro · NOAA/OAR/OER — chụp ở Bonaire, Caribê (trang Commons ghi "Netherlands Antilles, Bonaire") | **Phạm vi công cộng** | https://commons.wikimedia.org/wiki/File:Reef1995_-_Flickr_-_NOAA_Photo_Library.jpg |

`k3-ran-hardy.jpg` đã cắt về 16:9 (lấy phần dưới, bỏ dải trời mù ở trên) rồi
đưa về 1920×1080. Không chỉnh màu trong tệp; mọi hiệu chỉnh nằm trong CSS `filter`.

**Ảnh V1 không còn dùng ở V3** (vẫn nằm trong `anh/`, không xoá vì khối khác có thể cần):
`k3-acropora.jpg` · `k3-sanho-trung.jpg` · `k3-sanho-de.jpg` · `k3-nhatthuc2.jpg` ·
`k3-trang-moc.jpg` · `k3-ran-tren.jpg` · `k3-bentre.jpg` (vẫn dùng) — trong đó
`k3-ran-tren.jpg` bị thay vì tấm đó là ảnh chụp qua cửa sổ máy bay, bạc màu,
**có một phần động cơ máy bay lòi vào góc phải**; `k3-trang-moc.jpg` bị thay bằng
video trăng mọc của NPS.

---

## 3. Biểu tượng giao diện — KHÔNG VẼ TAY (§15.4)

Chủ kênh đã bác cái nút "thích" tự vẽ của bản V1 ("bàn tay giơ ngón cái vẽ tay,
nền trắng trơn"). Bản V3 không còn một nét vẽ tay nào ở chỗ này.

| Biểu tượng | Cảnh | Bộ | Giấy phép | Lấy từ |
|---|---|---|---|---|
| `thumb_up` (bản tô đặc, bo tròn) | **k3c30 — nút "thích"** | **Material Symbols Rounded** (Google) | **Apache 2.0** | https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsrounded/thumb_up/fill1/48px.svg |
| `message-square-text` | k3c31 — bong bóng bình luận | **Lucide** | **ISC** | https://cdn.jsdelivr.net/npm/lucide-static/icons/message-square-text.svg |
| `eye` · `brain` · `footprints` | k3c24 — "không mắt, không não, chẳng đi đâu được" | **Lucide** | **ISC** | https://cdn.jsdelivr.net/npm/lucide-static/icons/{eye,brain,footprints}.svg |

Dữ liệu `d` của các path được chép nguyên văn vào `khoi-3.js` (hằng `MS_THUMB`,
`LU_CMT`, `LU_EYE`, `LU_BRAIN`, `LU_FOOT`), không sửa hình dáng. Apache 2.0 và ISC
đều cho dùng thương mại; dòng ghi nguồn hiện trên hình ở cả ba cảnh.

Nút ở k3c30 **đặt trên ảnh rạn san hô thật** (`k3-ran.jpg`, NOAA, phạm vi công cộng),
có bóng đổ, có nhịp bấm xuống và ba vòng sóng lan ra — không phải hình phẳng trên nền trắng.

---

## 4. Mốc cắt cứng bên trong cảnh — 19 mốc

Mọi mốc đều đặt theo **ngưỡng trên `c.u`**, không phải giây cứng, nên khi đọc lại
bằng vbee (nhanh hơn edge-tts khoảng 18 %) thì mốc tự co giãn theo (§15.6).

| Cảnh | Mốc `c.u` | Cắt từ → sang |
|---|---|---|
| k3c03 | .50 | đèn ông sao → phố đèn lồng Hội An |
| k3c04 | .52 | chợ hoa Tết → tờ lịch rỗng |
| k3c06 | .48 | ảnh đáy cá → video ghe chở hàng |
| k3c07 | .52 | đường con nước → sợi dây lên tới đĩa trăng |
| k3c08 | .50 | đường triều teo lại → ảnh sông, trăng nhạt đi |
| k3c10 | .56 | sơ đồ hai đĩa cùng cỡ góc → video nhật thực |
| k3c11 | .60 | hai tam giác đồng dạng → video vành nhật hoa |
| k3c12 | .46 | ảnh nhật thực → ba trạng thái che trên nền Ngân Hà |
| k3c13 | .34 · .68 | che thừa → video vừa khít → ảnh hình khuyên |
| k3c15 | .50 | cửa sổ hẹp trên trục → video vành lửa |
| k3c18 | .56 | sơ đồ quỹ đạo bị kéo → trăng rằm sau rặng cây |
| k3c20 | .56 | hai thanh đổ đầy → video nhật thực + vòng tiến độ |
| k3c21 | .34 · .70 | trục lắc → biểu đồ Laskar/Lissauer → trục lắc nhảy hai mức |
| k3c22 | .52 | bốn thứ buộc vào đĩa trăng → video trăng mọc + con tem |
| k3c23 | .40 | rạn Hardy nhìn từ trên → **video san hô nhả trứng** |
| k3c25 | .56 | hai đêm cạnh nhau → ảnh polyp + glyph protein |
| k3c31 | .52 | rạn nhìn từ trên → video rạn đang nhả trứng |

**Cách đếm số cảnh của khối này:** `32` lời gọi `DANGKY` trong `canh/khoi-3.js`
(đếm bằng `grep -c "DANGKY({"`, và `python3 dung/soat-khoi.py` in ra cùng con số),
**cộng** `19` mốc trong bảng trên = **51** lần đổi hình trong 203,946 giây
= **15,0 lần/phút**. Không dùng máy dò cảnh của ffmpeg — xem bẫy 11.11.

---

## 5. Chữ biên tập — 3 lần

| Cảnh | Chữ | Số từ |
|---|---|---|
| k3c03 | TRUNG THU | 2 |
| k3c04 | MÙNG MỘT | 2 |
| k3c32 | THẾ GIỚI VIỄN TƯỞNG | 4 |

Những thứ **không** tính là chữ biên tập vì là nhãn sơ đồ hoặc số đo:
`×400` (k3c11) · `0,5°` (k3c10) · `3,8 cm` (k3c29) · `384.400 km` (k3c07) ·
`Laskar 1993`, `Lissauer 2012` và vạch độ `0°…90°` (k3c21) · dòng ghi nguồn ảnh.

---

## 6. Ba cảnh thuần đồ hoạ — và vì sao không tìm được tư liệu thật

Thứ tự ưu tiên của §15.1 là **tìm trước, vẽ sau**. Ba cảnh dưới đây vẫn vẽ, vì cả
ba đều rơi đúng vào ngoại lệ §15.1.3 ("bản đồ, biểu đồ, sơ đồ cơ chế luôn được vẽ"):
chúng nói về một **phép toán** hoặc một **mức chắc chắn**, tức là thứ không tồn tại
dưới dạng vật thể để chụp.

| Cảnh | Nội dung | Vì sao không có tư liệu thật |
|---|---|---|
| k3c16 | Trái Đất − Mặt Trăng = ? rồi bị gạch đỏ | Đây là một **phép trừ**. Không có bức ảnh nào của "một phép trừ mà vũ trụ không cho phép". |
| k3c19 | ba thanh "mức chắc chắn" chưa đổ đầy | Đây là **biểu đồ mức tin cậy giữa ba kết luận**, một đại lượng của lập luận chứ không của thế giới. |
| k3c28 | đồng hồ · tờ lịch · máy bơm, cả ba đang chạy | Đây là **ẩn dụ của chính lời dẫn** ("nó là cái đồng hồ, là tờ lịch, và là cái máy bơm"). Ảnh thật của một cái đồng hồ treo tường sẽ nói sai ý: cái được so sánh là Mặt Trăng, không phải một món đồ. |

Cả ba vẫn đạt điều kiện "hai trong ba" của §15.2: **nền có chuyển sắc** (`NENS.lanh`
hoặc `NENS.am`, không phải trắng trơn) **+ một lớp đồ hoạ chuyển động thật**
(hàm `chatLieu()` thả những vòng tròn rất nhạt trôi chậm suốt cảnh, cộng với
chuyển động của chính sơ đồ: kim đồng hồ quay, pít-tông lên xuống, pha trăng đổi).

**Hai cảnh từng bị chủ kênh bác, nay đã dựng lại hẳn:**

* **"bốn thanh ngang xám trên một trục mũi tên, nền trắng trơn"** → nay là **k3c14**:
  nền là **ảnh dải Ngân Hà thật** của NPS có Ken Burns, phủ một lớp chuyển sắc đêm;
  bốn khoảng ước tính là **dải sáng có quầng mềm và hai đầu mút nhoè, nhấp nháy**,
  trên một trục thời gian tự phát sáng. Vẫn **không hiện một con số năm nào**, đúng
  chủ ý cũ (các nguồn lệch nhau mạnh — `nghien-cuu/tu-lieu.md`).
* **"một bàn tay giơ ngón cái vẽ tay, nền trắng trơn"** → nay là **k3c30**: xem mục 3.

Cảnh thứ ba bị bác ("ba vòng tròn đen trên một thanh trượt xám") thuộc khối khác,
nhưng ý tương tự xuất hiện ở **k3c12** của khối này; ở đây nó được dựng trên
**ảnh Ngân Hà thật**, ba đĩa đều có quầng Mặt Trời sáng và một vòng đứt giữ nguyên
cỡ Mặt Trời để đọc được "che thừa / vừa khít / che thiếu".

---

## 7. Chỗ hình và lời không trùng khít — khai báo thẳng (bẫy 11.9)

**k3c23, cảnh đóng của cả tập.** Lời dẫn nói *"ở đâu đó ngoài khơi nước Úc"*.

* Nửa đầu cảnh (`c.u` < .40) là **ảnh thật của rạn Hardy, Great Barrier Reef, Úc** — đúng nơi.
* Nửa sau là **video san hô nhả trứng của NOAA quay ở Flower Garden Banks, vịnh Mexico** —
  **không phải Úc**.

Lý do: **không tồn tại đoạn phim san hô đẻ ở Great Barrier Reef có giấy phép dùng
được**. Tôi đã tìm ở Wikimedia Commons (các mục `Coral spawning`, `Videos of corals`,
`Acropora`), ở NOAA, ở Internet Archive và ở Pexels/Pixabay (hai trang sau chặn
truy cập). Thứ duy nhất có giấy phép mở và đúng hành vi là clip PLOS ONE
*Spawning Pocillopora meandrina* (CC BY 2.5) — nhưng chỉ 480×360, không dùng được
cho cảnh đẹp nhất tập.

Cách xử lý là cách thường dùng trong phim tài liệu: **ảnh đặt địa điểm trước,
cận cảnh hành vi sau**, và lời dẫn không hề nói "đoạn phim này quay ở Úc".
Nếu chủ kênh thấy vẫn không chấp nhận được thì có hai lối: (a) đổi lời thành
"ở một rạn san hô nhiệt đới", hoặc (b) mua một clip Great Barrier Reef có bản quyền.
**Đổi lời thì phải báo điều phối vì còn phải đọc lại tiếng (§15.5).**

**Cách xử lý đã chốt (điều phối, 28/11/2026):** không đổi lời, không mua clip —
**dòng nguồn trên màn hình tự khai địa điểm**. Dòng ở k3c23 nay là
`Video: san hô nhả trứng — NOAA, vịnh Mexico · Phạm vi công cộng`, thay cho
`NOAA Ocean Today / Flower Garden Banks NMS` (tên khu bảo tồn không thay được tên nơi chốn:
người xem Việt không ai biết Flower Garden Banks nằm ở vịnh Mexico). Lời dẫn giữ nguyên,
vì nó đang nói về **chuyện san hô Great Barrier đẻ sau rằm** — chuyện đó đúng và có nguồn —
còn đoạn phim là minh hoạ **hành vi**, và màn hình nói rõ nó quay ở đâu.

**Luật rút ra, áp cho mọi dòng nguồn của khối:** *nếu lời dẫn có nhắc tới địa điểm thì
dòng nguồn phải nêu được ĐỊA ĐIỂM.* Tên khu bảo tồn, tên vườn quốc gia hay tên nhiếp ảnh
gia đều không thay được tên nơi chốn. Đã rà lại cả 35 dòng nguồn của khối 3 và sửa 25 chuỗi:
thêm "Việt Nam" vào hai ảnh Trung thu, "chợ nổi Cửu Long" vào clip Mekong còn thiếu,
"nước Mỹ" vào toàn bộ tư liệu nhật thực NASA và dải Ngân Hà NPS, "Mỹ" vào Vườn quốc gia
Joshua Tree, "vịnh Mexico" vào ba tư liệu san hô của NOAA, "Úc" vào ảnh rạn Hardy, và
"bãi biển Skagen, Đan Mạch" vào tranh Krøyer.

Trong lúc rà, bắt được **một chỗ tôi suýt bịa**: ảnh rạn ở k3c30 (`k3-ran.jpg`) tôi định
ghi là "vịnh Mexico" cho đồng bộ với mấy tấm NOAA kia, nhưng mở trang Commons ra kiểm thì
nó ghi **"Netherlands Antilles, Bonaire"**, tức vùng Caribê, không phải vịnh Mexico.
Dòng nguồn đã sửa đúng. Hai tấm còn lại thì kiểm được: `k3-sanho-nao.jpg` có dòng
"Location: Flower Garden Banks National Marine Sanctuary" trên trang Commons, và
`k3-polyp.jpg` mang đúng tiền tố FGBNMS trong tên tệp gốc.

Hai chỗ khác, nhẹ hơn, cũng khai báo cho đủ:
* **k3c22 · k3c27 · k3c32** dùng video trăng mọc quay ở Joshua Tree, Mỹ. Lời dẫn ở
  đây không nói nơi chốn ("một vật thể đang lặng lẽ rời đi", "món trang trí của
  bầu trời đêm", lời chào) nên không có mâu thuẫn.
* **k3c29** dùng tranh Krøyer vẽ bãi biển Skagen, Đan Mạch, 1883, cho câu "cái giá
  thật của ba phẩy tám cm mỗi năm". Đây là hình ẩn dụ, không phải minh hoạ địa điểm.

---

## 8. Đúng lời MỚI, không phải lời cũ

Kịch bản V3 đã sửa câu đóng về san hô. Lời cũ là *"nên đêm nào trăng tròn, cả rạn
hiểu rằng đã đến lúc"*; lời mới là ***"Vậy mà mỗi năm, đúng vào mấy đêm sau rằm ấy,
cả rạn lại hiểu rằng đã đến lúc."***

Vì thế **k3c26 vẽ dãy bốn pha trăng: RẰM rồi BA ĐÊM SAU RẰM** (tỉ lệ pha .50 · .56 ·
.62 · .68, tức khuyết dần), và vòng nhấn **trượt từ cái rằm sang cái thứ tư** —
chứ không dừng ở cái rằm. Bản V1 vẽ ngược với lời mới và đã bỏ.

Hai chỗ khác bám sát lời V3:
* k3c03 nói *"rằm tháng tám"*, nên trăng trong cảnh là **trăng tròn**, mọc lên rồi tắt đi.
* k3c13 nói *"ngày xưa… nó che thừa"*, nên đĩa Mặt Trăng **phóng to vượt ra ngoài
  vòng đứt giữ nguyên cỡ Mặt Trời** — không phóng to cả hai.

---

## 9. Điểm giáp ranh

Mẫu: `<khẳng định> · ĐO hay ĐOÁN · <cách đo / vì sao đoán> · <ngày> · <khối nào xác nhận>`

* **Khối 3 có đúng 32 cảnh `DANGKY` và 19 mốc cắt cứng, tổng 51 lần đổi hình** ·
  **ĐO** · đếm `grep -c "DANGKY({" canh/khoi-3.js` = 32, và đếm tay bảng mục 4 = 19;
  `python3 dung/soat-khoi.py` in "khối 3: 32 cảnh · 32 câu" · 28/11/2026 · chưa khối nào đối chiếu.
* **Mật độ 15,0 lần đổi hình mỗi phút** · **ĐO** · 51 ÷ (203,946 ÷ 60) · 28/11/2026 ·
  chưa khối nào đối chiếu. *Con số cho CẢ TẬP không ghi ở đây — xem §14 của hợp đồng,
  số cả tập chỉ nằm đúng một chỗ.*
* **`VID()` của harness tua cứng khi dựng, không được gọi `play()`** · **ĐO** ·
  đọc `nhipVideo()` trong `tap03-full.html`: nhánh `ST.virtual` gọi `v.pause()` rồi
  đặt `currentTime`; và bộ dựng chờ `__khungSanSang()` trước khi chụp · 28/11/2026 ·
  **đúng cho cả ba khối**.
* **`data-dai` lớn hơn (độ dài clip − `data-tu`) làm video ĐỨNG HÌNH ở khung cuối** ·
  **ĐO** · `dich = tu + (lt*toc) % dai`, vượt quá `duration` thì trình duyệt kẹp lại ở
  cuối clip; đã gặp thật ở k3c09/k3c13 khi cắt lại clip ngắn đi mà quên sửa `dai`,
  sửa xong hết · 28/11/2026 · **đúng cho cả ba khối, khối 1 và 2 nên kiểm lại `dai` của mình**.
* **Dấu nháy kép trong chuỗi font (`"Helvetica Neue"`) làm hỏng cả thuộc tính `style`,
  không báo một lỗi nào** · **ĐO** · chụp khung thấy chữ tiêu đề co về 16px mặc định;
  bỏ dấu nháy là hết · 28/11/2026 · **đúng cho cả ba khối** — đây là một biến thể mới
  của họ bẫy "không sinh ra dòng lỗi nào" ở mục 11 của hợp đồng.
* **`.lop` bị gắn `inset:-14%`, nên ảnh `object-fit:contain` vẫn bị cắt 14% mỗi bên** ·
  **ĐO** · đĩa Mặt Trăng vuông của LRO bị cắt mất đỉnh; vá bằng hộp con
  `position:absolute;inset:10.9375%` (= 179,2px ngang và 100,8px dọc, đúng phần nới ra)
  rồi mới `contain` · 28/11/2026 · **đúng cho cả ba khối** (họ hàng với bẫy 11.2).
* **Ảnh `k3-ran-tren.jpg` có một phần động cơ máy bay lòi vào góc phải** · **ĐO** ·
  mở tệp ra nhìn · 28/11/2026 · **khối nào định dùng tấm này thì đừng** (bẫy 11.10).
* **Hai clip NOAA có phụ đề tiếng Anh in sẵn; ba clip Mekong có hình mờ** · **ĐO** ·
  trích khung bằng ffmpeg rồi nhìn; đã cắt bỏ · 28/11/2026 ·
  **khối 2 cũng có `video/k2-sanho-de.mp4`, nên kiểm lại nguồn của mình.**
* **Không có video san hô đẻ ở Great Barrier Reef với giấy phép PD/CC0/CC BY** ·
  **ĐO** · đã tìm Commons (3 truy vấn + 4 mục), NOAA, Internet Archive; Pexels và
  Pixabay trả về HTTP 403 nên **chưa tìm được ở hai nơi đó** · 28/11/2026 ·
  nếu khối nào tìm ra thì báo, cảnh k3c23 sẽ đổi.
* **Tệp ảnh dùng chung với khối khác — SỬA LẠI 28/11/2026, LỜI KHAI CŨ LÀ SAI.**
  Dòng cũ viết: *"khối 3 không trỏ vào một tệp nào của khối khác; mọi tệp đều có
  tiền tố `k3-`"*. Người soát độc lập kiểm bằng md5 và bác đúng. Sự thật, đã tự
  kiểm lại bằng `md5` chứ không đọc mã:

  | tệp | md5 | dùng ở | ghi chú |
  |---|---|---|---|
  | `anh/k3-ran-hardy.jpg` (1920×1080) | `c16c90c9a939cf994ba692ef8a8964bf` | **k3c23 · k3c31** của khối 3, **k2c43** của khối 2, **k1c04** của khối 1 | **DÙNG CHUNG BA KHỐI** |
  | `anh/k2-gbr-khong.jpg` (1920×1440) | `2862a11f6976d14e6a47941412dd5f06` | **đã thôi dùng** | **cùng một ảnh gốc** với tấm trên, chỉ khác bản cắt |

  Hai tệp là **CÙNG MỘT ẢNH GỐC** `File:Aerial_View_of_Hardy_Reef_-_2013.04_-_panoramio.jpg`
  (rheins, CC BY 3.0), cắt khác nhau. Trước bản sửa này cùng một rạn Hardy xuất
  hiện ba lần cách nhau 4 phút với hai khuôn hình và hai sắc độ khác nhau, nên
  người xem thấy "hai cái rạn" mà thực ra là một.
  **Đã chốt ngày 28/11/2026 với cả hai khối kia:** cả tập dùng **một bản cắt duy
  nhất** là `anh/k3-ran-hardy.jpg`. Khối 1 (k1c04) và khối 2 (k2c43) trỏ thẳng
  vào tệp này. **Chủ tệp là khối 3** — khối 3 cam kết không xoá, không đổi tên,
  không cắt lại; nếu cần cắt lại thì báo khối 1 và khối 2 trước.

* **Hàm vẽ Trái Đất / Mặt Trăng: khối 3 GỌI CHÉO sang khối 2, không tự vẽ.**
  Luật L2 của bản soát: cả tập đang có bốn Mặt Trăng và ba Trái Đất khác nhau,
  trên hơn 20 cảnh. Khối 2 chủ trì; chốt ngày 28/11/2026 là dùng **ảnh NASA thật
  cắt tròn**, một hàm cho cả ba khối. Khối 3 gọi `K2.cau()` và `K2.trang()` qua
  `window.K2` (vì `khoi-2.js` nạp trước `khoi-3.js`), **không chép lại hàm** để
  không bao giờ lệch thông số. Năm cảnh của khối 3 đều là hành tinh đứng yên nên
  **không gọi `K2.xoay()`**.

  | tệp | chủ | khối 3 dùng gián tiếp ở |
  |---|---|---|
  | `anh/k2-traidat-phang.jpg` — bản đồ trải phẳng Blue Marble 2002, 2048×1024, NASA, **phạm vi công cộng**, `File:Blue_Marble_2002.png` | khối 2 | k3c16 · k3c18 · k3c21 (qua `K2.cau`) |
  | `anh/k2-mattrang.jpg` — ghép ảnh mặt gần LRO WAC, NASA, **phạm vi công cộng**, `File:Moon_nearside_LRO_5000.jpg` | khối 2 | k3c03 · k3c07 · k3c08 · k3c10 · k3c11 · k3c16 · k3c18 · k3c22 (qua `K2.trang`) |

  Hai tệp này **không có tiền tố `k3-`** và khối 3 **vẫn trỏ vào chúng** — đó là
  chủ ý, và đây là chỗ khai thật thay vì giữ ba bản sao rồi khai là ba nguồn.
  `anh/k1-mattrang.jpg` và `anh/k2-mattrang.jpg` **giống nhau từng byte**
  (`md5 a653acf806d04e0a444806e6d9f22bb2`) — cũng là một tệp, hai tên.
  `anh/k3-trang.jpg` (`md5 809e1f56e845c6a74a468835db7561c2`) **là một tệp khác**,
  cùng trang nguồn nhưng khác bản tải; nó chỉ còn dùng ở **k3c17**, nơi cần ảnh
  Mặt Trăng phủ trọn khung chứ không phải một đĩa cắt tròn.

* **Ba clip Mekong của khối 3 được khối 1 dùng chung.** `video/k3-bensong.mp4`,
  `video/k3-chonoi.mp4`, `video/k3-ghe-song.mp4` — cả ba đã cắt bỏ hình mờ
  "Le Monde en Vidéo" bằng `crop=1280:575:0:0` rồi đưa về 1280×720 (đã `ffprobe`
  lại ngày 28/11: 1280×720, 8 s / 9 s / 8 s, **không có dải đen pad** — đo độ
  sáng trung bình hàng y = 715 ra 63 / 61 / 100 trên thang 255). Khối 1 dùng
  `k3-ghe-song.mp4` cho **k1c37** thay clip bãi cát biển Trắng (Nga).
  **Khối 3 cam kết không xoá, không đổi tên, không bỏ clip nào trong ba tệp đó.**

* **Hai clip san hô đẻ 1280×720 của khối 3 được khối 2 chép dùng.**
  `video/k3-sanho-de.mp4` và `video/k3-sanho-khoi.mp4`. Khối 2 chép sang
  `video/k2-sanho-de2.mp4` để thay clip 480×360 nhoè ở k2c43 · k2c47 · k2c48 ·
  k2c49. Khối 3 giữ nguyên hai tệp gốc.
* **Thông số máy quay ở điểm nối với khối 1 (cú đóng vòng) — ĐÃ CHỐT LẠI 28/11/2026.**
  Dòng cũ viết *"không còn ràng buộc nào với thông số máy quay của khối 1"* — và
  đó chính là lý do cú gài hỏng. Người soát kết luận: hai đầu **khớp về nội dung
  nhưng lệch về khuôn hình**, nên mười một phút sau người xem không nhận ra là
  cùng một thứ (luật L10: *"cú gài phải gài một KHUÔN HÌNH, không phải một chủ đề"*).
  Khối 1 và khối 3 đã nhắn nhau và **chốt bốn thông số chung**, khối 1 xác nhận
  đồng ý; nhịp 2 của `k1c04` và nhịp 1 của `k3c23` nay dùng y hệt:

  | thông số | giá trị |
  |---|---|
  | tệp ảnh | `anh/k3-ran-hardy.jpg` |
  | `pos` | `"50% 42%"` |
  | máy quay | đẩy VÀO, `z 1.02 → 1.10`, không lia ngang |
  | biên độ `cam()` | `x: ±6` |
  | lọc màu | `saturate(1.0)` — giữ nguyên xanh ngọc của ảnh gốc làm mốc nhận ra |

  Khối 1 cũng bỏ `anh/k1-sanho-ran.jpg` ở nhịp 2 (tấm đó có con sao biển giòn ĐỎ
  chiếm trọn khung, nên người xem nhớ con sao biển chứ không nhớ san hô).
  **Đổi bất kỳ thông số nào trong bảng trên thì phải báo khối 1 trước.**

---

## 9b. Soát hai lỗi câm của mục 16.8 và 16.9 hợp đồng (khối 1 báo, 28/11/2026)

**16.8 — đụng id gradient giữa hai hàm vẽ.** `url(#id)` tra theo CẢ TÀI LIỆU, không theo
từng `<svg>`. Khối 3 sinh **65 id gradient**, trong đó 4 id ghép động từ tiền tố:
`dia()` dùng thẳng tiền tố, `chan()` thêm `-ch`, `viND()` thêm `-vg`, `chatLieu()` thêm `-cl`.
Đã soát **hai lớp**: đọc mã đếm id (không id nào xuất hiện quá một lần), rồi **đo trên trang
thật** — vẽ cả 32 cảnh để mọi `defs` được dựng, quét toàn bộ `[id]` của tài liệu và mọi
thuộc tính `fill`/`stroke` dạng `url(#…)`.
Kết quả: **không có id trùng**, và **không có `url(#…)` nào trỏ vào một defs không tồn tại**.
Mọi id của khối đều mang tiền tố `k3cNN-`, và `grep -c "k3c" canh/khoi-1.js canh/khoi-2.js`
trả về 0/0 nên cũng không đụng hai khối kia.

**16.9 — `NEN()` cũng là một `.lop`, nên `querySelectorAll(".lop")[0]` là NỀN.**
Khối 3 **không lấy lớp theo chỉ số ở bất cứ đâu** (`grep` cho `querySelectorAll(".lop")`
không có kết quả). Mọi lớp tham gia cắt cứng đều được **đặt `id` riêng** rồi bật/tắt bằng
`hien(id)` — đúng cách mà khối 1 khuyến nghị. Đã đo: **41 id dùng trong `hien()`, cả 41 đều
tồn tại và đều đúng là một `.lop`**.

Thêm một phép đo trực tiếp bắt đúng hậu quả của 16.9 (ảnh hoặc video không bao giờ hiện):
dựng từng cảnh ở **10 mốc `c.u`** từ .05 đến .95, đọc `opacity` tính toán của mọi lớp có
`<img>` hoặc `<video>`, rồi tìm lớp nào có độ mờ tối đa gần 0 suốt cả cảnh.
Kết quả: **không lớp ảnh/video nào chết**.

**Pexels / Pixabay / Coverr (§15.1 bản sửa).** Khối 3 **không dùng tệp nào từ ba kho này**,
nên không có điều khoản phải chép. Lý do thực tế: lúc đi tìm tư liệu, `pexels.com` và
`pixabay.com` đều trả về **HTTP 403** cho mọi truy vấn (28/11/2026), nên tôi chưa tra được
hai kho đó; Coverr thì không cần tới vì đã đủ video phạm vi công cộng của NOAA, NASA và NPS.
Toàn bộ 9 clip của khối đều là **phạm vi công cộng (6 tệp)** hoặc **CC BY 3.0 (3 tệp)** —
cả hai đều cho dùng thương mại, cho sửa đổi, và không đòi chia sẻ tương tự.
Nếu sau này mở được Pexels/Pixabay và thay clip nào, phải chép nguyên văn điều khoản
kèm ngày đọc vào đúng mục 1 của tệp này trước khi dùng.

---

## 10. Tự nghiệm thu

```
node --check canh/khoi-3.js                → sạch
python3 dung/soat-khoi.py                  → SẠCH
    "khối 3: 32 cảnh · 32 câu (giao 32)"
    "vẽ thử 122 cảnh × 4 mốc: không cảnh nào chết"
    "LỖI JS: không có"
```

Đã chụp **96 khung** (32 cảnh × 3 mốc `c.u` = .22/.55/.86) **cộng 97 khung** nữa
rải quanh từng mốc cắt cứng (.10 → .95) và **mở ra nhìn bằng mắt**, không chỉ đọc log.
Những lỗi bắt được bằng mắt mà không công cụ nào báo:
khung chữ tiêu đề co về 16px · tờ lịch trắng trơn ở nửa sau hai cảnh · ba cảnh sơ đồ
bị ảnh nền nhoè thành vũng xám · clip NASA cắt nhầm vào đoạn quay trong khoang máy bay ·
`data-dai` dài hơn clip · ba đĩa "che thừa/vừa/thiếu" tối thui vì quầng Mặt Trời quá mờ ·
ảnh rạn nhìn từ trên bạc màu và có động cơ máy bay trong khung.


---

## 12. SỬA THEO BẢN SOÁT CẢNH ĐỘC LẬP — 28/11/2026

Căn cứ: `canh/SOAT-CANH.md`. Khối 3 có **3 mục CHẶN · 11 mục NÊN SỬA · 5 mục GỢI Ý**.
Mọi cảnh đã sửa đều được **chụp lại ít nhất 6 mốc `c.u`** (0,20 / 0,35 / 0,50 / 0,62 /
0,78 / 0,90) và **mở ra nhìn bằng mắt**, có chờ `window.__khungSanSang()` trước mỗi lần chụp.

**Bỏ mốc `c.u = 0,05`.** Khối 2 đo được rằng trong 0,42 giây hoà hình đầu mỗi cảnh có
HAI thẻ `.canh.active` cùng lúc và cảnh CŨ vẫn ở opacity 1 đè lên. Bộ chụp của khối 3
đã vá theo: lấy `document.querySelectorAll('.canh.active')` rồi lấy phần tử **cuối**,
và chụp từ `u = 0,20` trở đi.

### Vùng an toàn 48 px — ĐO THẬT, không ước lượng
Chạy `getBoundingClientRect()` cho mọi phần tử mang chữ (`.hud .tx`, `<text>` SVG) ở
**6 mốc `c.u` × 32 cảnh = 192 khung**, đối chiếu hộp `x ∈ [48, 1232]`, `y ∈ [48, 672]`.
Đo **mực chữ** bằng `Range.getClientRects()` chứ không đo cái hộp — một `div` căn giữa
rộng 1280 px luôn chạm hai mép dù chữ nằm gọn giữa khung.
**Kết quả cuối: 0 vi phạm.** Bốn chỗ đã phải sửa, tất cả đều do MÁY QUAY đẩy chữ ra
ngoài chứ không do toạ độ tĩnh:

| chỗ | đo được trước khi sửa | đã sửa thế nào |
|---|---|---|
| mọi dòng nguồn | `top:664px` → mép dưới 683,5 px; và `kh()` nhích thêm 12 px khi hiện ra → 695,5 px | `top:650px`, và thêm `khn()` cho dòng nguồn chỉ mờ dần, không trượt (`dy = 0`) |
| `k3c21` nhãn trục "90°" | mép phải tới **1246 px** | trục rút từ `X1 = 1176` về **1140** |
| `k3c14` nhãn hai đầu trục | mép dưới tới **729 px** — tức LỌT RA NGOÀI khung 720 px ở `u = 0,90` | nhãn lên `y = 628`, và biên độ máy quay hạ từ `[26,-26,-14,14,1.04,1.18]` xuống `[10,-10,-6,6,1.0,1.06]` |
| `k3c14` dấu "?" | mép phải tới **1341 px**, ngoài cả khung | dời về `(1120, 176)`, cỡ 108 → 92 px |

### Sàn độ sáng / độ bão hoà (luật L9 đề xuất của bản soát)
Đo trung vị độ sáng (điểm không tối, `v ≥ 0,12`) và trung vị độ bão hoà (điểm **có màu**,
`s ≥ 0,18`) trên khung thật, ngưỡng `[0,18 ; 0,82]` và `[0,22 ; 0,78]`.
Bốn cảnh sơ đồ mà bản soát chê nhạt/quá bão hoà, trước → sau:

| cảnh | trước | sau |
|---|---|---|
| k3c11 | sáng **0,89** · bão hoà 0,23 — quá trắng | sáng **0,81** · bão hoà **0,33** |
| k3c16 | sáng **0,94** · bão hoà 0,88 — khung nhạt nhất cả tập, đúng như bản soát nói | sáng **0,26** · bão hoà **0,61** |
| k3c19 · k3c20 | sáng **0,84** · bão hoà 0,26 | sáng **0,80** · bão hoà **0,29** |
| k3c30 | bão hoà **0,91** — vượt hẳn trần 0,78, đúng là "xanh neon" | bão hoà **0,70** · sáng 0,39 |

(Bốn dòng "trước" đo bằng cách tạm khôi phục đúng mã cũ, chụp lại, đo, rồi trả mã về —
không phải con số nhớ lại.)

Các khung còn nằm ngoài ngưỡng đều là **tư liệu thật**, không phải đồ hoạ tự dựng:
video nhật thực của NASA (nền trời đen, `k3c09` `k3c13` `k3c17`) và mặt sông Cửu Long
xám đục (`k3c01` `k3c05` `k3c23`). Kéo chúng vào ngưỡng là nói sai về đoạn phim, nên
để nguyên — nếu điều phối muốn đổi thì báo.
