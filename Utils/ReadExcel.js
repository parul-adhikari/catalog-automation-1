const dirpath = 'C:\\Users\\Ankita Jangra\\eclipse-workspace\\Doodle\\Utils';
const path=require('path');
var Excel = require('C:\\Users\\Ankita Jangra\\AppData\\Roaming\\npm\\node_modules\\protractor\\exceljs');
var XLSX = require('xlsx');

var cellFromXLS = function () {

    //Define sheetNumber
    var sheet = "Hello";

    var arrayExcelData = []
    //Define file Path name
    var fileNamePath = path.join(dirpath, 'Test.xlsx');
    console.log(fileNamePath);

    //Working with workbook
    var workbook = new Excel.Workbook()



    workbook.xlsx.readFile(fileNamePath)
        .then(function () {
            var worksheet = workbook.getWorksheet(sheet);
            var f = new Array();
            var totalNoOfCols = worksheet.actualColumnCount
            var totalNoOfRows = worksheet.actualRowCount
            console.log(totalNoOfCols)
            
            for(var i=1;i<=totalNoOfRows;i++) {
                console.log(i + " " + totalNoOfRows)
                f[i]=new Array();

                for (var j = 1; j <= totalNoOfCols; j++) {
                    //   console.log(worksheet.getCell(i,j).v)
                    f[i][j] = worksheet.getRow(i).getCell(j).value
                    console.log(f[i][j]);
                    if(j == 6) {
                        //var formated = dateFunction(cellValue);
                        f[i][j] = new Date(cellValue)
                        console.log(f[i][j]);
                    }
                }
            }

            return cellValue
            //var i,j;
            //
            // for ( i = 1; i < totalNoOfRows; i++) {
            //
            //     for ( j = 1; j < totalNoOfCols; j++) {
            //         arrayExcelData[i - 1][j] = worksheet.getCell(j,i)
            //
            //         console.log(arrayExcelData[i - 1][j])
            //     }
            // }
        })
}







module.exports =  cellFromXLS