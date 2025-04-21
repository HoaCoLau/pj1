✅ 1. Tạo module đơn giản
👉 a. Tạo file math.js (module):

// math.js
function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

module.exports = { add, multiply };

👉 b. Sử dụng trong file main.js:

// main.js
const math = require('./math');

console.log("Tổng: ", math.add(5, 3));         // Kết quả: 8
console.log("Tích: ", math.multiply(5, 3));    // Kết quả: 15



✅ 2. Đọc file với fs module
👉 Tạo file text.txt:

Xin chào, đây là file mẫu để đọc bằng Node.js


👉 a. Đọc file đồng bộ:

// readSync.js
const fs = require('fs');

const content = fs.readFileSync('text.txt', 'utf8');
console.log(content);


👉 b. Đọc file bất đồng bộ:


// readAsync.js
const fs = require('fs');

fs.readFile('text.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Lỗi:', err);
    } else {
        console.log('Nội dung file:', data);
    }
});



✅ 3. Xử lý bất đồng bộ với Promise và async/await

👉 a. Chuyển fs.readFile thành Promise:

// readWithPromise.js
const fs = require('fs').promises;

async function readFileContent() {
    try {
        const data = await fs.readFile('text.txt', 'utf8');
        console.log('Dữ liệu:', data);
    } catch (err) {
        console.error('Lỗi:', err);
    }
}

readFileContent();



✅ Tổng kết
Tạo module với module.exports và require

Đọc file bằng fs.readFile (callback) và fs.promises.readFile (Promise)

Dùng async/await để viết code bất đồng bộ dễ đọc hơn