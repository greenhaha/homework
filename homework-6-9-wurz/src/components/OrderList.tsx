import { useState , useEffect } from "react";
import mockData from "../mock.json"

export default function OrderList() {
    const [data, setData] = useState(mockData);
    const [valueName, setValueName] = useState("");
    const [valuePrice, setValuePrice] = useState("");
    const [category, setCategory] = useState("");
    const [status, setStatus] = useState("");
    const [categories, setCategories] = useState<string[]>([]);
    const [statuses, setStatuses] = useState<string[]>([]);

    // 初始化的时候将mockData中的分类和状态提取出来
    useEffect(() => {
        const categoriesArray = mockData.map(item =>
            item.category
        );
        // 使用Set去重 将 Set 对象解构成数组，得到去重后的新数组
        setCategories([...new Set(categoriesArray)]);

        const statusesArray = mockData.map(item =>
            item.status
        );
        // 使用Set去重 将 Set 对象解构成数组，得到去重后的新数组
        setStatuses([...new Set(statusesArray)]);
    }, [])

    
    function ClickHandler( {valueName, valuePrice, category, status}: { valueName: string; valuePrice: string; category: string; status: string; }) {
        let filterData = mockData;

        if ( valueName ) {
            // 如果有输入名称，则根据名称进行模糊匹配
            filterData = mockData.filter(item => item.name.includes(valueName));
        }
        if ( valuePrice ) {
            // 如果有输入价格，则根据价格进行精确匹配
            filterData = filterData.filter(item => item.price === Number(valuePrice));
        }

        // 如果有选择分类，则根据分类进行过滤
        if (category) {
            filterData = filterData.filter(item => item.category === category);
            setData(filterData);
        }

        // 如果有选择状态，则根据状态进行过滤
        if (status) {
            filterData = filterData.filter(item => item.status === status);
            setData(filterData);
        }

        setData(filterData);
    }

    return (
        <div className="order-list">
            <h2 className="title">Order List</h2>
            <div className="search-bar">
                <h3 className="search-h3">分类:</h3>
                <select className="dropdown" onChange={(e => setCategory((e.target as HTMLSelectElement).value))}>
                    <option value="">全部</option>
                    {categories.map(ctgy => (
                        <option key={ctgy} value={ctgy}>{ctgy}</option>
                    ))}
                </select>
                <h3 className="search-h3">订单状态:</h3>
                {/* 在React+TS中 e.target默认为 EventTarget 没有value属性 但是input输入框在React+TS的类型推导中React.ChangeEvent<HTMLInputElement> 带有value属性
                * 因此使用 as HTMLSelectElement 来告诉TS e.target是一个HTMLSelectElement
                */}
                <select className="dropdown" onChange={(e => setStatus((e.target as HTMLSelectElement).value))}>
                    <option value="">全部</option>
                    {statuses.map(stus => (
                        <option key={stus} value={stus}>{stus}</option>
                    ))}
                </select>
                <h3 className="search-h3">名称:</h3>
                <input className="search-input" type="text" placeholder="Search" value={valueName} onChange={(e) => setValueName(e.target.value)} />
                <h3 className="search-h3">价格:</h3>
                <input className="search-input" type="number" placeholder="Search" value={valuePrice} onChange={(e) => setValuePrice(e.target.value)} />
                <button className="search-button" onClick={() => ClickHandler({valueName, valuePrice, category, status})}>Search</button>
            </div>
            <table className="order-table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>名称</th>
                        <th>分类</th>
                        <th>订单状态</th>
                        <th>价格</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 ? (
                        <tr>
                            <td colSpan={5} className="no-data">没有找到相关数据</td>
                        </tr>
                    ) : (
                        data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.category}</td>
                            <td>{item.status}</td>
                            <td>{item.price}</td>
                        </tr>
                    ))
                    ) }
                </tbody>
            </table>
        </div>
    );
}