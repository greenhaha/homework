// src/App.tsx
import { Container, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { mockOrders } from "./mock/orders";
import { OrderFilter } from "./components/OrderFilter";
import { OrderList } from "./components/OrderList";

const statusMap: { [key: number]: string } = { 0: '未支付', 1: '已支付', 2: '已完成' };
function App() {
	const [orders, setOrders] = useState(mockOrders);
	const [filtered, setFiltered] = useState(mockOrders);

	useEffect(() => {
		// 模拟加载
		setFiltered(mockOrders);
	}, []);

	const handleFilter = (keyword: string) => {
		const kw = keyword.trim().toLowerCase();
		const filtered = orders.filter((o) => {
			return o.productName.toLowerCase().includes(kw) ||
				statusMap[o.orderStatus].toLowerCase().includes(kw);
		});
		setFiltered(filtered);
	};

	return (
		<Container maxW="container.md" py={6}>
			<Heading mb={4}>产品订单页面</Heading>
			<OrderFilter onFilter={handleFilter} />
			<OrderList orders={filtered}  statusMap={statusMap} />
		</Container>
	);
}

export default App;
