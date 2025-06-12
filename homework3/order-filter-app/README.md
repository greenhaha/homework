# 订单筛选系统

## 项目结构
order-filter-app/
├── public/                  # 静态资源目录
│   ├── mock.json            # 模拟订单数据
│   └── ...                  # 其他静态文件
├── src/                     # 目录
│   ├── components/          
│   │   └── OrderFilter.tsx  # 订单筛选组件
│   ├── App.css              # 订单筛选组件样式
│   ├── App.tsx              # 订单筛选组件容器
│   └── ...                  
└── package.json             # 依赖配置及运行脚本

## 如何运行项目
1. 安装依赖：在项目根目录执行 `npm install`
2. 启动开发服务器：执行 `npm start dev`
3. 浏览器自动打开 `http://localhost:3000` 访问页面

## 核心功能实现说明
1. 数据加载
- 通过 `fetch('/mock.json')` 加载模拟数据
- 数据加载后存储在 `allOrders` 状态中，并默认显示所有数据到表格（`currentOrders` 初始化为 `allOrders`）

2. 筛选表单
- 包含ID、名称、分类搜索框，订单状态下拉框，价格区间输入框，以及检索按钮

3. 数据表格展示（符合"多列展示+实时更新"要求）
- 表格列包含ID、名称、分类、订单状态、价格
- 通过 `useEffect` 监听筛选状态变化（`idFilter`/`nameFilter` 等），触发数据过滤逻辑：
  ```typescript
  useEffect(() => {
    const filtered = allOrders.filter(order => {
      // 监听ID、名称、分类、状态、价格等条件
      return idMatch && nameMatch && categoryMatch && statusMatch && priceMatch;
    });
    setCurrentOrders(filtered); // 更新当前显示数据
  }, [idFilter, nameFilter, ...]); // 依赖筛选状态