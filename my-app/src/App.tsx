import React, { useState } from 'react';
import './App.css';

// 定义产品数据类型
interface Product {
  id: string;
  名称: string;
  分类: string;
  订单状态: string;
  价格: number;
}

// 定义筛选器类型
interface Filters {
  category: string;
  status: string;
  sortBy: string;
}

// 产品数据
const productsData: Product[] = [
  {
    "id": "PROD001",
    "名称": "智能手机 S25",
    "分类": "电子产品",
    "订单状态": "已完成",
    "价格": 7999.00
  },
  {
    "id": "PROD002",
    "名称": "高定西装",
    "分类": "服装",
    "订单状态": "待发货",
    "价格": 2500.00
  },
  {
    "id": "PROD003",
    "名称": "React权威指南",
    "分类": "书籍",
    "订单状态": "已取消",
    "价格": 128.50
  },
  {
    "id": "PROD004",
    "名称": "无线蓝牙耳机 Pro",
    "分类": "电子产品",
    "订单状态": "已完成",
    "价格": 999.00
  },
  {
    "id": "PROD005",
    "名称": "夏季连衣裙",
    "分类": "服装",
    "订单状态": "待付款",
    "价格": 359.00
  },
  {
    "id": "PROD006",
    "名称": "设计模式解析",
    "分类": "书籍",
    "订单状态": "待发货",
    "价格": 89.90
  },
  {
    "id": "PROD007",
    "名称": "4K 超高清电视",
    "分类": "电子产品",
    "订单状态": "已完成",
    "价格": 5999.00
  },
  {
    "id": "PROD008",
    "名称": "男士休闲裤",
    "分类": "服装",
    "订单状态": "已发货",
    "价格": 280.00
  },
  {
    "id": "PROD009",
    "名称": "前端开发实战",
    "分类": "书籍",
    "订单状态": "已完成",
    "价格": 150.00
  },
  {
    "id": "PROD010",
    "名称": "智能手表 Ultra",
    "分类": "电子产品",
    "订单状态": "待发货",
    "价格": 2499.00
  },
  {
    "id": "PROD011",
    "名称": "女士羊绒大衣",
    "分类": "服装",
    "订单状态": "已完成",
    "价格": 1800.00
  },
  {
    "id": "PROD012",
    "名称": "算法导论（第三版）",
    "分类": "书籍",
    "订单状态": "已取消",
    "价格": 299.00
  },
  {
    "id": "PROD013",
    "名称": "游戏笔记本 RTX4090",
    "分类": "电子产品",
    "订单状态": "待付款",
    "价格": 12999.00
  },
  {
    "id": "PROD014",
    "名称": "儿童卡通T恤",
    "分类": "服装",
    "订单状态": "已发货",
    "价格": 99.00
  },
  {
    "id": "PROD015",
    "名称": "科幻小说集",
    "分类": "书籍",
    "订单状态": "已完成",
    "价格": 75.00
  },
  {
    "id": "PROD016",
    "名称": "便携式移动电源",
    "分类": "电子产品",
    "订单状态": "已完成",
    "价格": 189.00
  },
  {
    "id": "PROD017",
    "名称": "运动紧身裤",
    "分类": "服装",
    "订单状态": "待发货",
    "价格": 169.00
  },
  {
    "id": "PROD018",
    "名称": "历史人文读本",
    "分类": "书籍",
    "订单状态": "已完成",
    "价格": 65.00
  },
  {
    "id": "PROD019",
    "名称": "智能家居套装",
    "分类": "电子产品",
    "订单状态": "已取消",
    "价格": 3500.00
  },
  {
    "id": "PROD020",
    "名称": "品牌休闲鞋",
    "分类": "服装",
    "订单状态": "待付款",
    "价格": 450.00
  },
  {
    "id": "PROD021",
    "名称": "儿童绘本系列",
    "分类": "书籍",
    "订单状态": "已发货",
    "价格": 55.00
  },
  {
    "id": "PROD022",
    "名称": "高清网络摄像头",
    "分类": "电子产品",
    "订单状态": "已完成",
    "价格": 320.00
  },
  {
    "id": "PROD023",
    "名称": "真丝睡衣套装",
    "分类": "服装",
    "订单状态": "已完成",
    "价格": 880.00
  },
  {
    "id": "PROD024",
    "名称": "金融投资入门",
    "分类": "书籍",
    "订单状态": "待发货",
    "价格": 110.00
  },
  {
    "id": "PROD025",
    "名称": "便携式投影仪",
    "分类": "电子产品",
    "订单状态": "已取消",
    "价格": 2999.00
  }
];

function App() {
  // 状态管理
  const [filters, setFilters] = useState<Filters>({
    category: 'all',
    status: 'all',
    sortBy: 'price-asc'
  });
  const [searchTerm, setSearchTerm] = useState('');

  // 获取所有唯一分类
  const categories = ['all', ...Array.from(new Set(productsData.map(product => product.分类)))];
  
  // 获取所有唯一订单状态
  const statuses = ['all', ...Array.from(new Set(productsData.map(product => product.订单状态)))];

  // 筛选和排序产品
  const filteredProducts = productsData
    .filter(product => {
      // 分类筛选
      if (filters.category !== 'all' && product.分类 !== filters.category) return false;
      
      // 订单状态筛选
      if (filters.status !== 'all' && product.订单状态 !== filters.status) return false;
      
      // 搜索筛选
      if (searchTerm && !product.名称.toLowerCase().includes(searchTerm.toLowerCase())) return false;
      
      return true;
    })
    .sort((a, b) => {
      // 价格排序
      if (filters.sortBy === 'price-asc') return a.价格 - b.价格;
      if (filters.sortBy === 'price-desc') return b.价格 - a.价格;
      
      // 默认按ID排序
      return a.id.localeCompare(b.id);
    });

  // 更新筛选条件
  const handleFilterChange = (filterType: keyof Filters, value: string) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));
  };

  // 更新搜索词
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1 className="header-title">产品一览</h1>
        <div className="search-container">
          <input 
            type="text" 
            placeholder="搜索产品..." 
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
          />
        </div>
      </header>
      
      <div className="filter-container">
        <div className="filter-group">
          <label className="filter-label">分类:</label>
          <select 
            value={filters.category}
            onChange={(e) => handleFilterChange('category', e.target.value)}
            className="filter-select"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        
        <div className="filter-group">
          <label className="filter-label">订单状态:</label>
          <select 
            value={filters.status}
            onChange={(e) => handleFilterChange('status', e.target.value)}
            className="filter-select"
          >
            {statuses.map(status => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>
        </div>
        
        <div className="filter-group">
          <label className="filter-label">排序:</label>
          <select 
            value={filters.sortBy}
            onChange={(e) => handleFilterChange('sortBy', e.target.value)}
            className="filter-select"
          >
            <option value="price-asc">价格: 从低到高</option>
            <option value="price-desc">价格: 从高到低</option>
          </select>
        </div>
      </div>
      
      <div className="stats-bar">
        <span className="stats-text">
          共 {productsData.length} 个产品，显示 {filteredProducts.length} 个
        </span>
      </div>
      
      <div className="table-container">
        <table className="product-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>名称</th>
              <th>分类</th>
              <th>订单状态</th>
              <th>价格</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map(product => (
              <tr key={product.id} className="product-row">
                <td>{product.id}</td>
                <td className="product-name">{product.名称}</td>
                <td>
                  <span className={`category-badge ${product.分类 === '电子产品' ? 'electronics' : product.分类 === '服装' ? 'clothing' : 'books'}`}>
                    {product.分类}
                  </span>
                </td>
                <td>
                  <span className={`status-badge ${product.订单状态 === '已完成' ? 'completed' : product.订单状态 === '待发货' ? 'pending' : product.订单状态 === '已发货' ? 'shipped' : 'cancelled'}`}>
                    {product.订单状态}
                  </span>
                </td>
                <td className="price">{product.价格.toLocaleString('zh-CN', { style: 'currency', currency: 'CNY' })}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="no-results">
          <p>没有找到符合条件的产品</p>
        </div>
      )}
    </div>
  );
}

export default App;
