# CSV Analyzer Mini Project

## Mục tiêu
Phân tích dữ liệu từ file CSV về đồ nội thất, thực hiện các thống kê sau:
1. Thống kê số lượng bản ghi.
2. Tính tổng, giá trị nhỏ nhất (min), và giá trị lớn nhất (max) của cột số (`price` và `stock`).
3. Đếm số lượng giá trị duy nhất trong cột `material`.

---

## Cách thực hiện

1. **Cài đặt môi trường**
- Đảm bảo bạn đã cài đặt **Node.js** trên máy tính.
- Cài đặt thư viện `csv-parse` để phân tích file CSV:
  ```bash
  npm install


2. Cấu trúc thư mục
Dự án có cấu trúc như sau:

miniproject/
├── csv.js          # File chính để phân tích CSV
├── data.csv        # File CSV chứa dữ liệu đồ nội thất
├── package.json    # File cấu hình dự án Node.js
└── [README.md](http://_vscodecontentref_/3)  # Hướng dẫn làm bài

3. Nội dung file CSV
File data.csv chứa dữ liệu về đồ nội thất với các cột:

id: Mã định danh sản phẩm.
name: Tên sản phẩm.
category: Loại sản phẩm.
price: Giá sản phẩm (USD).
stock: Số lượng sản phẩm trong kho.
material: Chất liệu sản phẩm.


4. Chạy chương trình
Mở terminal và chuyển đến thư mục miniproject:
cd d:\laragon\www\pj1\miniproject
Chạy file csv.js:
node csv.js


5. Kết quả
Khi chạy chương trình, bạn sẽ nhận được các thống kê sau:

Số lượng bản ghi:
Tổng, min, max của giá bán:
Tổng, min, max của stock:
Số lượng chất liệu khác nhau trong cột material.