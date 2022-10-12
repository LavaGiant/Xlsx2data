# 说明文档
## xlsx2data
### 通过读取xlsx文件获取想要的数据格式（不通用）

#### 如何使用（需安装node环境，可使用node -v自测）：
```shell
yarn build

or

npm run build
```
config.js 用来设置获取的字段信息等等（为方便使用，故js开发）
```javascript
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
```

#### 得到的数据格式：
```typescript
interface LabelItem {
  mark: string //标识，与content中的mark对应
  labelName: string //nav名字
  labelCover: string //nav图片 需要写入在static文件夹中
}

type HeaderItem = string | {
  label: string //表头名字
  width?: string //表格宽度
}

interface ContentItem {
  mark: string //标识，与label中的mark对应
  label: string //sub-label名字
  header: Record<string, HeaderItem> //表头信息 需要与data的key保持一致
  data: Record<string, string | null | undefined>[] //所需要的数据，此对象的key需要与header中key保持一致
}

interface TableInfo {
  label: LabelItem[]
  content: ContentItem[]
}
```

