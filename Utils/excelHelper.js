let excel = ('exceljs');


let excelHelper = {

    getColumnValue: function(col) {

           //Create an object of Workbook class
        return new Promise(function(resolve) {
        let wb = new excel.Workbook();
        wb.xlsx.readFile('E:/catalog/CatalogData.xlsx').then(function()
        {
            var ws = wb.getWorksheet(1);
            var value = ws.getCell(col).value;
                resolve(value);
            });

        });
    }



};


module.exports = excelHelper;