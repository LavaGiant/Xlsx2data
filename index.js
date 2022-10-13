const fs = require('fs')
const xlsx = require('node-xlsx');
const { contentConfig, label, readFilePath, writeFileConfig } = require('./config');

const workSheetsFromFile = xlsx.parse(readFilePath);
const baseTableData = workSheetsFromFile[0].data

// 循环要产生的表
const content = contentConfig.map(sheet => {
  const { field, startRows, finishRows, mark, label, width = [] } = sheet
  //处理表头数据
  const headerInfo = baseTableData[startRows]
  const header = {}
  if (!width.length) {
    field.forEach((key, keyIndex) => header[key] = headerInfo[keyIndex])
  } else {
    field.forEach((key, keyIndex) => header[key] = { label: headerInfo[keyIndex], width: (width[keyIndex] || width[width.length - 1]) + '' })
  }
  //处理data数据
  const currentSheetList = baseTableData.slice(startRows + 1, finishRows + 1)
  const data = currentSheetList.map(dataItem => {
    const tempDataItem = {}
    field.forEach((key, keyIndex) => tempDataItem[key] = dataItem[keyIndex] || '')
    return tempDataItem
  })
  return {
    mark,
    label,
    header,
    data,
  }
})

const tableDetail = {
  label,
  content
}

fs.writeFile(`${writeFileConfig.path}/${writeFileConfig.filename}.${writeFileConfig.fileType}`, JSON.stringify(tableDetail), err => {
  if (err) {
    console.log(err)
  }
  console.log('写入文件成功~')
})
