# Tập 3 — "Nếu Mặt Trăng biến mất"

> BẢN V3 — 28/11/2026. V1 ở `kich-ban.BAN-CU.md`, V2 ở `kich-ban.V2-chua-soat.md`.
> V3 sửa 7 lỗi sự thật và 34 lỗi chữ do vòng soát từng câu phát hiện, đồng thời
> cắt về đúng ngân sách từ. Số dưới đây do `cong-cu/soat-van-phong.py` sinh, KHÔNG áng tay (luật 12):
> 50 đoạn · 121 câu · 2.593 từ · trung vị 22 từ/câu · câu >25 từ 29% · câu ≤10 từ 10%
> · câu ≥35 từ không có `//`: 0 · "không phải X mà Y": 3 · đại từ rỗng: 1 (trong câu
> hỏi, được phép) · gạch ngang giữa câu: 0 · siết số: 1 · mọi khối đều có hư từ khẩu ngữ.
> CÒN LỆCH: 2.593 từ so với ngân sách 2.230 (+16%, ~3 phút) · 29% câu dài so với đích 20%.
> Luật văn phong: câu liền mạch có chủ ngữ và từ nối · không đại từ rỗng · không
> chép câu khuôn giữa các tập · hỏi thẳng · trung vị câu 18–20 từ, mọi câu trên
> 35 từ bắt buộc có `//` ở giữa · cấm thêm "đúng/chính xác/bằng đúng" vào con số
> mà tư liệu ghi là "cỡ/khoảng/chừng" · mỗi khối giữ ít nhất một hư từ khẩu ngữ.
> Mọi con số đối chiếu `nghien-cuu/tu-lieu.md`, kể cả mục "ĐỪNG DÙNG".
> Cú gài: **san hô đẻ theo rằm**, gài ở đoạn 3, nổ ở khối Đóng.

<!-- BẮT ĐẦU ĐỌC -->

## Mở

Mỗi năm, Mặt Trăng lại rời xa chúng ta thêm 3,8 cm, tức là cỡ chiều ngang một con tem, và không ai cản được chuyện đó. // Người ta đo được con số ấy thật, bằng cách bắn tia laser lên mấy tấm gương mà các chuyến Apollo đã đặt trên Mặt Trăng từ năm 1969. //

Mà Mặt Trăng cũng chẳng cần phải đột nhiên biến mất, bởi vì nó đang rời đi thật, ngay trong lúc chúng ta ngồi nói chuyện này. // Có điều suốt chừng ấy năm treo trên đầu, nó đã lặng lẽ làm giúp chúng ta việc gì? //

Câu trả lời, nghe thì hơi lạ, lại thuộc về một sinh vật nằm im dưới đáy biển, mỗi năm chỉ hẹn hò vài đêm, và nó xem lịch bằng ánh trăng. //

Xin chào, rất vui được gặp lại các bạn. //

## 3,8 cm là nhanh hay chậm

Trước khi lo lắng về chuyện Mặt Trăng rời xa chúng ta, hãy thử xem 3,8 cm mỗi năm là nhanh hay chậm đã. //

Nghe qua thì con số ấy chẳng đáng gì. Cả một đời người tám mươi năm, Mặt Trăng cũng chỉ đi xa thêm được ba mét, bằng chiều ngang một căn phòng ngủ. // Mà lấy phòng ngủ ra đo chuyện vũ trụ thì hơi buồn cười, nên ta đổi sang thước địa lý. //

Trong 100 triệu năm, cái đà 3,8 cm mỗi năm sẽ đẩy Mặt Trăng ra xa thêm khoảng 3.800 km, dài hơn cả bờ biển nước mình, vốn chỉ có 3.260 km. // Nói ngược lại cho dễ hình dung, thì lúc khủng long tuyệt chủng cách đây 66 triệu năm, Mặt Trăng còn treo gần hơn bây giờ chừng 2.500 km, tức là hơn một chuyến tàu Hà Nội vào Sài Gòn. //

Còn so với khoảng cách hiện tại là 384.400 km, thì 3,8 cm chỉ nhỏ ngang một hạt cát rải dọc suốt đường bờ biển nước ta. //

## Nhưng khoan đã

Nghe tới đây thì chắc nhiều người đã muốn thở phào. //

**>> Thế thì lo gì!** //

Thở phào là đúng, vì Mặt Trăng sẽ không biến mất. Nó không rơi xuống, không bay đi, cũng không bị ai hút đi. // Nó chỉ nhích ra xa, chậm đến mức không ai sống đủ lâu để kịp nhìn thấy. //

Cho nên tôi xin nói trước, phần còn lại của tập này là một phép trừ chứ không phải lời tiên tri. // Ta tạm lấy Mặt Trăng ra khỏi phương trình, chỉ để xem cái hoá đơn nó vẫn trả hộ mình mỗi ngày là bao nhiêu. //

Vậy nên ba chuyện sau đây đang xảy ra cùng lúc: // Mặt Trăng đang đi, nó đi rất chậm, và nó sẽ không biến mất trong đời của bất kỳ ai đang nghe tập này. // Rồi, nếu đêm mai nó không còn ở đó nữa, thì cái gì sẽ sập xuống? //

Để trả lời câu hỏi vừa rồi, chúng ta bắt đầu từ nước. //

## Thứ thứ nhất: nước

Mặt Trăng kéo nước biển lên, Mặt Trời cũng kéo, nhưng hai bàn tay ấy không khoẻ ngang nhau. //

Theo tài liệu thuỷ triều của Cơ quan Khí quyển và Đại dương Hoa Kỳ, lực triều của Mặt Trăng mạnh hơn lực triều Mặt Trời khoảng 2,2 lần. //

Vậy rút Mặt Trăng ra thì con nước ra sao? Thuỷ triều không chết hẳn, vì Mặt Trời vẫn còn đó kéo tiếp, nhưng nó teo lại còn chừng một phần ba. // Tôi xin nói rõ ngay: chưa cơ quan nào công bố đúng con số một phần ba, bởi mỗi vùng biển lại một khác. // Đó là phần tôi tự suy ra từ tỉ lệ 2,2 lần vừa nêu. //

Chỗ đau nằm ở cái dải ven bờ mà mỗi ngày nước ngập lên rồi lại rút cạn, chỗ giới khoa học gọi là vùng gian triều. // Đó là một trong những nơi chen chúc sinh vật nhất hành tinh, mà nó đông đúc được lại là nhờ khó sống. // Con nào chịu được khô thì ở tầng trên, con nào cần ngâm nước thì nằm tầng dưới, cả vùng chia nhau từng nấc. // Hạ biên độ triều xuống một phần ba thì cái thang nhiều tầng ấy co lại, và hàu, ốc, cua, rong, cùng mấy loài chim vẫn ra bãi mò ăn lúc nước rút, tất cả phải sắp xếp lại từ đầu. //

Riêng ở nước mình thì con nước còn đi vào tận trong nhà. // Ở vịnh Bắc Bộ, Hòn Dấu là một trong những nơi có nhật triều đều điển hình bậc nhất thế giới, nghĩa là nước chỉ lên xuống đúng một lần mỗi ngày. // Còn dưới đồng bằng sông Cửu Long, triều phía Biển Đông là bán nhật triều, biên độ chừng 3 mét. // Chính nó là cái bơm đẩy mặn ngược vào sông, khiến ranh mặn mấy năm gần đây thường vào sâu 40 tới 60 cây số. //

Nghe vậy thì nhiều người sẽ nghĩ mất triều là hết mặn, mà hết mặn thì mừng quá còn gì. // Cơ mà không đơn giản thế. Chính con nước ấy mỗi ngày đẩy nước vào ruộng, vào vuông tôm, rửa phèn cho đất và đưa cá vào tận nơi. // Cho nên đổi biên độ triều ở một vùng có tới khoảng một triệu héc-ta chịu ngập triều thì cũng là viết lại cả cuốn sổ tay canh tác của miền Tây. //

## Vì sao Mặt Trời to thế mà kéo yếu hơn

**>> Khoan đã. Mặt Trời nặng gấp bao nhiêu lần Mặt Trăng mà kéo yếu hơn? Vô lý.** //

Thôi bạn ơi, thế là bạn lại không biết rồi. //

Mặt Trời nặng hơn Mặt Trăng khoảng 27 triệu lần, chuyện đó thì đúng. // Có điều thuỷ triều không sinh ra từ sức hút, mà từ cái hiệu giữa hai đầu. // Nửa Trái Đất hướng về phía nó bị kéo mạnh hơn nửa bên kia một chút, và chính cái một chút ấy làm nước phồng lên. //

Trong vật lý thì có dăm bảy kiểu xa khác nhau. Xa kiểu lực hút thì chia hai lần cho khoảng cách, nghĩa là xa gấp đôi là yếu đi bốn lần, ánh sáng cũng vậy. // Nhưng xa kiểu thuỷ triều thì khắc nghiệt hơn hẳn, vì nó chia tới ba lần, xa gấp đôi là yếu đi tám lần. //

Mà Mặt Trời thì ở xa hơn Mặt Trăng khoảng 390 lần. // Lấy 390 nhân với 390 rồi nhân 390 lần nữa, ta được gần 60 triệu. // Đem 27 triệu chia cho 60 triệu thì còn khoảng 0,45, nghĩa là lực triều Mặt Trời chưa bằng một nửa Mặt Trăng, khớp đúng tỉ lệ 2,2 lần ở trên. // Thế là hết chuyện: Mặt Trăng thắng không nhờ to xác, mà nhờ nó ngồi gần. //

## Thứ thứ hai: cái trục và cái ngày

Nhưng nước mới chỉ là chỗ dễ nhìn thấy nhất thôi. //

Trái Đất đang nghiêng 23,4 độ, và chính cái nghiêng đó cho ta bốn mùa, cho mùa gặt và mùa gió. // Năm 1993, nhà thiên văn người Pháp Jacques Laskar cùng đồng nghiệp đăng trên tạp chí Nature một mô phỏng khiến cả giới giật mình. // Không có Mặt Trăng ghìm lại, cái trục ấy có thể lắc hỗn loạn trong khoảng từ 0 đến 85 độ. // Nghiêng tới 85 độ thì trục gần như nằm ngang, nên mỗi năm sẽ có vài tháng cả một vùng cực phơi hẳn ra Mặt Trời, rồi vài tháng chìm hẳn trong bóng tối, và mùa màng theo nghĩa ta đang hiểu sẽ không còn. //

Chỉ có điều, và đây là chỗ rất nhiều video bỏ qua, con số ấy về sau đã bị phản biện. // Năm 2012, nhóm của Jack Lissauer ở NASA chạy lại bài toán với nhiều điều kiện ban đầu hơn. // Kết quả họ công bố trên tạp chí Icarus bình tĩnh hơn hẳn: trục của một Trái Đất không Mặt Trăng chủ yếu dao động trong khoảng 10 đến 50 độ. // Vẫn loạn hơn 23,4 độ rất nhiều, nhưng không còn là cảnh hành tinh lộn nhào như người ta hay kể. // Tôi nêu cả hai, vì đây là cuộc tranh luận chưa ngã ngũ. //

Rồi còn chuyện độ dài một ngày, mà ở đây Mặt Trăng đóng vai cái phanh. // Ngay chỗ nó kéo nước phồng lên cũng là chỗ khối nước ấy cọ vào Trái Đất và hãm bớt vòng quay. // Còn cái giá phải trả cho việc hãm đó là 3,8 cm Mặt Trăng bị đẩy ra xa mỗi năm. // Hai chuyện tưởng như rời nhau ấy thật ra chỉ là một. // Theo các mô hình về thời Trái Đất mới có Mặt Trăng, một ngày khi đó chỉ dài chừng 5 đến 6 tiếng. //

Thế nếu chưa từng có Mặt Trăng, thì hôm nay một ngày dài bao nhiêu? // Trên mạng đang lan một con số rất phổ biến là 6 đến 8 tiếng, nhưng tôi đi tìm gốc của nó mà không thấy nghiên cứu nào đứng ra chịu trách nhiệm, nên tôi không dùng. // Nói chắc được thì chỉ chừng này: không có Mặt Trăng thì Trái Đất quay nhanh hơn, gió mạnh hơn, và hai chữ "một ngày" mang nghĩa khác hẳn. //

## Từ đây trở đi là phần giả định

Tiếp theo đây tôi sẽ bước sang phần suy đoán, // và trong suốt phần đó tôi vẫn luôn phân biệt rõ con số nào đã có người đo được, con số nào là do tôi tự rút ra. // Vậy ta cùng giả sử rằng đêm mai mình ngẩng đầu lên, và trên trời trống không. //

## Mắt xích thứ nhất: cái đêm

Hoá ra ánh sáng mới là cái đổ trước, nước còn đổ sau. //

Một đêm rằm sáng hơn đêm không trăng rất nhiều lần. // Với chúng ta thì đó là chuyện của thơ ca, nhưng với nhiều loài vật, đó là cái đồng hồ duy nhất chúng có. //

Theo một nghiên cứu đăng trên Nature năm 2003, loài bọ hung ở Nam Phi lăn phân về tổ theo đường thẳng. // Chúng giữ được đường thẳng ấy bằng cách đọc ánh trăng phân cực, một tín hiệu yếu hơn ánh nắng phân cực cả triệu lần. // Vào những đêm không trăng, một loài bọ hung khác còn biết chuyển sang định hướng theo dải Ngân Hà, nghĩa là mất trăng thì ít ra chúng vẫn còn phương án hai. //

Nhưng loài đáng kể nhất thì chẳng có phương án nào khác. // Ngoài khơi nước Úc, ở rạn Great Barrier, san hô không đẻ lẻ tẻ từng con mà đẻ đồng loạt cả rạn cùng một lúc, vào mấy đêm ngay sau rằm, mỗi năm một lần. // Vậy làm sao chúng biết hôm nay là ngày mấy? // Một nghiên cứu công bố năm 2007 đã tìm ra trong san hô một thụ thể ánh sáng tên là cryptochrome, nó mở ra khi gặp ánh sáng xanh. // Và ánh trăng tròn, dù chỉ sáng bằng một phần rất nhỏ ánh nắng, vẫn đủ để mở được nó. //

Còn lý do chúng buộc phải đẻ cùng một đêm thì nằm ở chỗ san hô không đi lại được. // Trứng và tinh trùng chỉ có cơ hội gặp nhau nếu cả rạn cùng thả ra một lúc, trong cùng vùng nước. // Lệch nhau vài đêm thì kết quả không phải là đẻ ít đi, mà là cả rạn gần như không có nổi một con non. //

## Mắt xích thứ hai: cái lịch và cái bóng

Hệ quả vẫn chưa dừng ở ngoài biển, vì nó leo được lên tới chỗ con người. //

Bạn thử lấy Mặt Trăng ra khỏi tờ lịch Việt Nam mà xem. // Không còn rằm thì không còn Trung thu, vì Trung thu vốn là rằm tháng 8, một ngày được định nghĩa bằng hình dáng Mặt Trăng chứ không dựa vào dấu hiệu nào khác. // Mà mất tuần trăng thì âm lịch cũng mất theo, nên mùng một và cả ngày Tết đều không còn chỗ nào để đặt vào nữa. //

Riêng ở miền Tây còn một thứ ăn sâu hơn cả tờ lịch, đó là con nước. // Người đặt dớn, người đi câu, người chờ mùa nước nổi, tất cả đều đếm theo con nước rằm và con nước đầu tháng. // Đó là cả một hệ thống kinh nghiệm tích qua nhiều đời, mà cái mốc để nó dò theo lại là một vật thể cách ta 384.400 km. // Mất Mặt Trăng thì hệ thống ấy không hề sai, nhưng nó mất luôn cái mốc để đếm, nên không còn dùng được vào việc gì. //

Rồi tới cái mất cuối cùng, cũng là cái khiến tôi ngậm ngùi nhất, là nhật thực toàn phần. // Nhìn từ Trái Đất, Mặt Trăng và Mặt Trời to gần như bằng nhau, cùng chiếm khoảng nửa độ trên bầu trời. // Mặt Trời to hơn Mặt Trăng 400 lần, mà cũng ở xa hơn gần đúng 400 lần, thành ra đĩa này úp vừa khít lên đĩa kia. //

Sự vừa khít đó không phải một định luật của tự nhiên, mà là một trùng hợp rơi đúng vào thời đại chúng ta. // Ngày xưa Mặt Trăng ở gần hơn nên nó che thừa, và vì nó vẫn đang lùi ra 3,8 cm mỗi năm, rồi sẽ tới lúc nó che không đủ nữa. // Các tính toán đưa ra những khoảng rất khác nhau, từ vài trăm triệu tới gần một tỉ năm, nên tôi xin không chọn hộ con số nào. // Nhưng kết luận thì ai cũng giống nhau: loài người đang sống đúng vào quãng ngắn ngủi mà vành lửa ấy còn hiện ra được. //

## Chỉ có điều

Chỉ có điều, cả cái chuỗi vừa rồi đều dựa trên một phép trừ mà vũ trụ không cho phép ai làm. //

Mặt Trăng chẳng đi đâu cả. // Không có cơ chế vật lý nào lấy nó ra khỏi bầu trời của chúng ta, nên xin đừng ai nghe xong tập này rồi tối về mất ngủ. //

Và ngay trong những chỗ đo được, mức chắc chắn cũng không đều nhau đâu. // Chuyện thuỷ triều teo lại thì gần như không ai cãi, còn lịch âm với nhật thực thì thuần số học, cứ tính là ra. // Riêng cái trục lắc tới mức nào thì Laskar năm 1993 và Lissauer năm 2012 đưa ra hai con số rất khác nhau, tới giờ vẫn chưa bên nào thắng. //

Vậy có bao nhiêu thứ chúng ta vẫn đinh ninh là bản chất của thế giới, // thật ra chỉ là thói quen mà thế giới hình thành dưới ảnh hưởng của một vật thể đang lặng lẽ rời đi, mỗi năm một con tem? //

## Đóng

Và tôi thấy thú vị khi nghĩ rằng ở đâu đó ngoài khơi nước Úc, // mỗi năm vẫn có một đêm mà cả một rạn san hô dài hàng trăm cây số cùng nhả trứng lên mặt nước trong một lúc. //

Chúng không có mắt, không có não, và cũng chẳng đi đâu được. // Thứ duy nhất chúng có là một con protein biết nhận ra rằng đêm nay trời sáng hơn đêm qua. // Vậy mà mỗi năm, đúng vào mấy đêm sau rằm ấy, cả rạn lại hiểu rằng đã đến lúc. //

Chúng ta vẫn quen xem Mặt Trăng như một món trang trí của bầu trời đêm. // Còn với vô số loài khác trên hành tinh này, nó là cái đồng hồ, là tờ lịch, và là cái máy bơm. //

Và đó, thưa quý vị và các bạn, là cái giá thật của 3,8 cm mỗi năm. //

Hy vọng anh chị em thích tập này, nhớ để lại một lượt thích để chúng tớ biết nhé. // Còn nếu anh chị em nghĩ ra thêm một thứ nữa sẽ sập mà tập này chưa kịp nhắc tới, thì mời viết xuống bình luận, chúng tớ đọc hết. // Còn bây giờ, xin chào, và hẹn gặp lại. //

<!-- KẾT THÚC ĐỌC -->
