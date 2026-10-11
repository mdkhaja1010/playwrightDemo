import xlsx from 'xlsx'



export class ExcelUtils{

    static getDataFromExcel(filepath:string, sheetName:string){
        try{
          const wb=xlsx.readFile(filepath)
          const sheet=wb.Sheets[sheetName]
          const data=xlsx.utils.sheet_to_json(sheet)
          return data

        }catch(exception)
        {
            console.log("excel file data not found",exception)
        }

    }

}
