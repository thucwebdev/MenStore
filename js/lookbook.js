lookBooks=[
    {
        img: "./imgs/img_lookbook1.webp",
        date1: "13/03/25",
        title:"THE BEAT OF SEOUL",
        contenText:"THE BEAT OF SEOUL Đại diện cho một trong những nền “kinh đô thời trang” của Châu Á, thủ đô Seoul luôn là điểm khởi đầu của những xu ..."
    },
    {
        img: "./imgs/img_lookbook2.webp",
        date1: "10/7/2025",
        title:"BECOMING A GENTLEMAN - BEGIN WITH THE SUIT",
        contenText:"BECOMING A GENTLEMAN - BEGIN WITH THE SUITThất bại lớn nhất của người đàn ông là để cho người khác nhìn thấy bản thân họ trong bộ dạng củ..."
    },
    {
        img: "./imgs/img_lookbook3.webp",
        date1: "21/10/24",
        title:"MANGTO & SAFARI JACKET | THEO DẤU SỰ THỜI THƯỢNG",
        contenText:"MANGTO & SAFARI JACKET | THEO DẤU SỰ THỜI THƯỢNGĐối lập với xu hướng chung của thời trang Xuân-Hè là những gam màu rực rỡ tương phản,..."
    },
    {
        img: "./imgs/img_lookbook4.webp",
        date1: " 20/10/24",
        title:"ADAM’S SWEATER 24 | TIẾP NỐI CẢM HỨNG THỜI TRANG HIỆN",
        contenText:"ADAM’S SWEATER 24 | TIẾP NỐI CẢM HỨNG THỜI TRANG HIỆN ĐẠIMong muốn giữ vững thế mạnh của thương hiệu với những thiết kế đáp ứng nhu cầu t..."
    },
    {
        img: "./imgs/img_lookbook5.webp",
        date1: " 19/10/24",
        title:"ADAM’S SWEATER 24 | TIẾP NỐI CẢM HỨNG THỜI TRANG HIỆN ĐẠIMong muốn giữ vững thế mạnh của thương hiệu với những thiết kế đáp ứng nhu cầu t...",
        contenText:"F/W COLLECTION 2024/25 | CHẤT THANH LỊCH VƯỢT THỜI ĐẠIHòa cùng vẻ đẹp tiết giao mùa, tiếp tục hành trình mang đến góc nhìn mới về thời tr..."
    },
    {
        img: "./imgs/img_lookbook6.webp",
        date1: " 19/10/24",
        title:"ADAM’S WEDDING SUIT | NHÂN CHỨNG CHO THỜI KHẮC ĐÁNG NHỚ",
        contenText:"ADAM’S WEDDING SUIT | NHÂN CHỨNG CHO THỜI KHẮC ĐÁNG NHỚNgày cưới - dấu ấn của một hành trình yêu thương, là khoảnh khắc mà mỗi chàng trai..."
    },
    {
        img: "./imgs/img_lookbook7.webp",
        date1: "19/10/24",
        title:"ADAM’S WEDDING SUIT | GHI DẤU HÔN NHÂN TRỌN VẸN",
        contenText:"ADAM’S WEDDING SUIT | GHI DẤU HÔN NHÂN TRỌN VẸNTrong cuộc đời người đàn ông có hai bộ Suit đáng nhớ nhất. Đầu tiên là bộ Suit mặc trong đ..."
    },
    {
        img: "./imgs/img_lookbook8.webp",
        date1: "23/02/24",
        title:"𝐀𝐃𝐀𝐌 𝐒𝐓𝐎𝐑𝐄 𝐒𝐒𝟐𝟒 | 𝐍𝐄𝐖 𝐁𝐄𝐆𝐈𝐍𝐍𝐈𝐍𝐆𝐒",
        contenText:" Lưu giữ các quy tắc và giá trị thời trang cao cấp, đồng thời tôn vinh nét đẹp riêng biệt của người đàn ông Việt. “New Beginnings..."
    },
]

container = document.getElementById("lookbook-content")
for(let item of lookBooks){
    container.innerHTML +=`
    <div class="content">
    <img src="${item.img}" alt="">
          <div class="tittle">${item.title}</div>
          <div class="time"><i class="fa-solid fa-calendar-days"></i>${item.date1}</div>
          <div class="content-text">${item.contenText}</div>
    </div>
    
    `
}
