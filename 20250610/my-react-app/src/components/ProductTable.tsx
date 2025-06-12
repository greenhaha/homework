import { useState, useMemo } from 'react';
import mockData from '../datas/mock.json';
import './ProductTable.css';

interface Product {
  id: string;
  名称: string;
  分类: string;
  订单状态: string;
  价格: number;
}

interface FilterState {
  名称: string;
  分类: string;
  订单状态: string;
  最低价格: string;
  最高价格: string;
}

export default function ProductTable() {
  const [filters, setFilters] = useState<FilterState>({
    名称: '',
    分类: '',
    订单状态: '',
    最低价格: '',
    最高价格: '',
  });

  const filteredData = useMemo(() => {
    return mockData.filter((item) => {
      const matchName = item.名称.toLowerCase().includes(filters.名称.toLowerCase());
      const matchCategory = item.分类.includes(filters.分类);
      const matchStatus = item.订单状态.includes(filters.订单状态);
      const minPrice = filters.最低价格 ? Number(filters.最低价格) : 0;
      const maxPrice = filters.最高价格 ? Number(filters.最高价格) : Infinity;
      const matchPrice = item.价格 >= minPrice && item.价格 <= maxPrice;

      return matchName && matchCategory && matchStatus && matchPrice;
    });
  }, [filters]);

  const handleFilterChange = (field: keyof FilterState, value: string) => {
    setFilters(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="table-container">
      <div className="filter-container">
        <input
          type="text"
          className="filter-input"
          placeholder="搜索商品名称"
          value={filters.名称}
          onChange={(e) => handleFilterChange('名称', e.target.value)}
        />
        <select
          className="filter-select"
          value={filters.分类}
          onChange={(e) => handleFilterChange('分类', e.target.value)}
        >
          <option value="">所有分类</option>
          <option value="电子产品">电子产品</option>
          <option value="服装">服装</option>
          <option value="书籍">书籍</option>
        </select>
        <select
          className="filter-select"
          value={filters.订单状态}
          onChange={(e) => handleFilterChange('订单状态', e.target.value)}
        >
          <option value="">所有状态</option>
          <option value="已完成">已完成</option>
          <option value="待发货">待发货</option>
          <option value="已取消">已取消</option>
          <option value="待付款">待付款</option>
          <option value="已发货">已发货</option>
        </select>
        <input
          type="number"
          className="filter-input price-input"
          placeholder="最低价格"
          value={filters.最低价格}
          onChange={(e) => handleFilterChange('最低价格', e.target.value)}
        />
        <input
          type="number"
          className="filter-input price-input"
          placeholder="最高价格"
          value={filters.最高价格}
          onChange={(e) => handleFilterChange('最高价格', e.target.value)}
        />
      </div>

      <table className="data-table">
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
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.名称}</td>
              <td>{item.分类}</td>
              <td>{item.订单状态}</td>
              <td>¥{item.价格.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 