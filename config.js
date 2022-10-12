//读取的文件路径
const readFilePath = `${__dirname}/assets/rna_product_info.xlsx`

// 写入文件配置
const writeFileConfig = {
  path: `${__dirname}/assets`,
  filename: 'result',
  fileType: 'json'
}

//表格内容配置
const contentConfig = [
  {
    field: ['num', 'goods', 'explain'],
    startRows: 1,
    finishRows: 19,
    mark: 'rna',
    label: 'RNA合成'
  },
  {
    field: ['num', 'carrier', 'site5', 'site3', 'resistance', 'color', 'explain'],
    width: [275, 281, 200, 200, 200, 200, 360],
    startRows: 22,
    finishRows: 45,
    mark: 'plasmid',
    label: '质粒',
  }
]

// 表格label数据
const label = [
  {
    mark: 'rna',
    labelName: 'RNA合成',
    labelCover: '/static/img/product-service/rna-compose/rna_compose.png',
  },
  {
    mark: 'plasmid',
    labelName: '质粒',
    labelCover: '/static/img/product-service/rna-compose/plasmid.png',
  },
]

module.exports = {
  label,
  contentConfig,
  writeFileConfig,
  readFilePath
}
