# Gói dự án — Thế Giới Viễn Tưởng

Repo này chỉ chứa **dữ liệu**: mỗi thư mục trong `du-an/` là một tập đã dựng
cảnh xong, đủ để xem lại từng cảnh với animation thật. Mã nguồn studio nằm ở
repo khác.

## Kéo về và xem, không cần cài gì ngoài Python

```bash
git clone https://github.com/thanhphongdo/youtube-studio-assets.git
cd youtube-studio-assets/du-an/tap-03-mat-trang
python3 -m http.server 8000
```

Rồi mở trong trình duyệt:

```
http://localhost:8000/slide/tap03-full.html
```

Bấm **mũi tên phải / Space** để sang cảnh sau, **mũi tên trái** để lùi,
**F** để toàn màn hình.

> Phải mở qua `http://`, **không** mở bằng cách bấm đúp vào file HTML.
> Mở bằng `file://` thì trình duyệt chặn `canh/khoi-*.js` và trang sẽ trắng.

## Trong mỗi thư mục dự án có gì

| | |
|---|---|
| `du-an.json` | tên tập, số cảnh, thời lượng, vòng review đang mở |
| `canh.json` | danh sách cảnh: id, giây bắt đầu/kết thúc, lời dẫn từng câu, ảnh dùng |
| `kich-ban.md` | kịch bản đầy đủ, để đọc tham chiếu |
| `slide/` | trang chiếu chạy được: HTML + mã cảnh + ảnh + bảng nguồn ảnh |
| `thumb/` | ảnh nhỏ một tấm mỗi cảnh |
| `sua/vong-NN.json` | góp ý đang gõ dở của vòng review NN |
| `vong/vong-NN.md` | bản góp ý đã chốt của vòng NN — đọc được bằng mắt |

`du-an/danh-sach.json` liệt kê mọi dự án trong repo.

## Giấy phép ảnh

`slide/nguon/nguon-khoi-N.md` của mỗi dự án ghi đủ **tên file · URL · giấy phép
· tác giả** cho từng ảnh. Chỉ dùng ảnh PD / CC0 / CC BY.

*File này do `cong-cu/day-len-git.py` sinh ra lần đẩy đầu tiên. Sửa tay được.*
