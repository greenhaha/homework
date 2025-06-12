import React, { useState, useEffect } from 'react';

interface Order {
  id: string;
  名称: string;
  分类: string;
  订单状态: string;
  价格: number;
}

const OrderFilter: React.FC = () => {
  // 临时状态：存储输入框实时内容（不触发过滤）
  const [tempIdFilter, setTempIdFilter] = useState('');
  const [tempNameFilter, setTempNameFilter] = useState('');
  const [tempCategoryFilter, setTempCategoryFilter] = useState('');
  const [tempStatusFilter, setTempStatusFilter] = useState('');
  const [tempMinPrice, setTempMinPrice] = useState('');
  const [tempMaxPrice, setTempMaxPrice] = useState('');

  // 过滤状态：点击按钮后更新（触发useEffect）
  const [idFilter, setIdFilter] = useState('');
  const [nameFilter, setNameFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [minPriceFilter, setMinPriceFilter] = useState('');
  const [maxPriceFilter, setMaxPriceFilter] = useState('');
  
  const [allOrders, setAllOrders] = useState<Order[]>([]);
  const [currentOrders, setCurrentOrders] = useState<Order[]>([]);
  const [orderStatuses, setOrderStatuses] = useState<string[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch('/mock.json');
      const data: Order[] = await response.json();
      setAllOrders(data);
      setCurrentOrders(data);
      
      const uniqueStatuses = Array.from(new Set(data.map(item => item.订单状态)));
      setOrderStatuses(['全部', ...uniqueStatuses]);
    };
    loadData();
  }, []);

  useEffect(() => {
    const filtered = allOrders.filter(order => {
      const idMatch = idFilter ? order.id.toLowerCase().includes(idFilter.toLowerCase()) : true;
      const nameMatch = nameFilter ? order.名称.toLowerCase().includes(nameFilter.toLowerCase()) : true;
      const categoryMatch = categoryFilter ? order.分类.toLowerCase().includes(categoryFilter.toLowerCase()) : true;
      const statusMatch = statusFilter ? order.订单状态.toLowerCase().includes(statusFilter.toLowerCase()) : true;
      const priceMatch = (() => {
        const min = minPriceFilter ? parseFloat(minPriceFilter) : -Infinity;
        const max = maxPriceFilter ? parseFloat(maxPriceFilter) : Infinity;
        return order.价格 >= min && order.价格 <= max;
      })();
      return idMatch && nameMatch && categoryMatch && statusMatch && priceMatch;
    });
    setCurrentOrders(filtered);
  }, [idFilter, nameFilter, categoryFilter, statusFilter, minPriceFilter, maxPriceFilter, allOrders]);

  return (
    <div className="container">
      <div className="filter-form">
        <div className="filter-group" style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
          <input
            type="text"
            placeholder="按ID搜索..."
            value={tempIdFilter}
            onChange={(e) => setTempIdFilter(e.target.value)}
          />
        </div>
        <div className="filter-group">
          <input
            type="text"
            placeholder="按名称搜索..."
            value={tempNameFilter}
            onChange={(e) => setTempNameFilter(e.target.value)}
          />
        </div>
        <div className="filter-group">
          <input
            type="text"
            placeholder="按分类搜索..."
            value={tempCategoryFilter}
            onChange={(e) => setTempCategoryFilter(e.target.value)}
          />
        </div>
        <div className="filter-group">
          <select
            value={tempStatusFilter}
            onChange={(e) => setTempStatusFilter(e.target.value)}
            style={{ padding: '8px', width: '100%' }}
          >
            <option value="" disabled>订单状态</option>
            {orderStatuses.map(status => (
              <option key={status} value={status === '全部' ? '' : status}>
                {status}
              </option>
            ))}
          </select>
        </div>
        <div className="filter-group">
          <input
            type="number"
            placeholder="最低价格"
            value={tempMinPrice}
            onChange={(e) => setTempMinPrice(e.target.value)}
            min="0"
            step="0.01"
            style={{ flex: 1 }}
          />
          <span>~</span>
          <input
            type="number"
            placeholder="最高价格"
            value={tempMaxPrice}
            onChange={(e) => setTempMaxPrice(e.target.value)}
            min="0"
            step="0.01"
            style={{ flex: 1 }}
          />
        </div>
        <button onClick={() => {
          const minPrice = parseFloat(tempMinPrice);
          const maxPrice = parseFloat(tempMaxPrice);
          
          if (!isNaN(minPrice) && !isNaN(maxPrice) && maxPrice < minPrice) {
            alert('错误：最大价格不能小于最小价格');
            return;
          }

          setIdFilter(tempIdFilter);
          setNameFilter(tempNameFilter);
          setCategoryFilter(tempCategoryFilter);
          setStatusFilter(tempStatusFilter);
          setMinPriceFilter(tempMinPrice);
          setMaxPriceFilter(tempMaxPrice);
        }}>检索</button>
      </div>

      <table className="order-table">
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
          {currentOrders.length === 0 ? (
            <tr>
              <td colSpan={5} style={{ textAlign: 'center', color: '#666' }}>
                没有查询到订单
              </td>
            </tr>
          ) : (
            currentOrders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.名称}</td>
                <td>{order.分类}</td>
                <td>{order.订单状态}</td>
                <td>¥{order.价格.toFixed(2)}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OrderFilter;