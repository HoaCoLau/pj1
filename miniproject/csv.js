const fs = require('fs');
const { parse } = require('csv-parse');

// Đọc file CSV
const filePath = './data.csv';
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Lỗi khi đọc file:', err);
        return;
    }

    // Phân tích CSV
    parse(data, { columns: true, skip_empty_lines: true }, (err, records) => {
        if (err) {
            console.error('Lỗi khi phân tích CSV:', err);
            return;
        }

        const totalRecords = records.length;
        console.log('Số lượng bản ghi:', totalRecords);

        const prices = records.map(record => parseFloat(record.price)).filter(price => !isNaN(price));
        const totalPrice = prices.reduce((sum, price) => sum + price, 0);
        const minPrice = Math.min(...prices);
        const maxPrice = Math.max(...prices);
        console.log('Tổng giá:', totalPrice.toFixed(2));
        console.log('Giá nhỏ nhất :', minPrice.toFixed(2));
        console.log('Giá lớn nhất :', maxPrice.toFixed(2));

        const stocks = records.map(record => parseInt(record.stock, 10)).filter(stock => !isNaN(stock));
        const totalStock = stocks.reduce((sum, stock) => sum + stock, 0);
        const minStock = Math.min(...stocks);
        const maxStock = Math.max(...stocks);
        console.log('Tổng sp trong kho:', totalStock);
        console.log('Số lượng sp ít nhất:', minStock);
        console.log('Số lượng sp nhiều nhất:', maxStock);

        const uniqueMaterials = new Set(records.map(record => record.material));
        console.log('Số lượng chất liệu:', uniqueMaterials.size);
    });
});