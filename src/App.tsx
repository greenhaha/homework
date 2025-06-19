// src/App.tsx
import { Container, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { mockOrders } from "./mock/orders";
import { OrderFilter } from "./components/OrderFilter";
import { OrderList } from "./components/OrderList";

function App() {
	const [orders, setOrders] = useState(mockOrders);
	const [filtered, setFiltered] = useState(mockOrders);

	useEffect(() => {
		// 模拟加载
		setFiltered(mockOrders);
	}, []);

	const handleFilter = (keyword: string, status?: string) => {
		const kw = keyword.trim().toLowerCase();
		
		const filtered = orders.filter((o) =>
			o.productName.toLowerCase().includes(kw)
		);
		let statusFitter = filtered
		if (status !== ''){
			if (status === 'null'){
				statusFitter = filtered.filter(
					(o) => o.orderStatus == undefined
				)
			}else{
			statusFitter = filtered.filter(
				(o) => o.orderStatus == Number(status)
			)}
		}

		setFiltered(statusFitter);
	};

	return (
		<Container maxW="container.md" py={6}>
			<Heading mb={4}>产品订单页面</Heading>
			<OrderFilter onFilter={handleFilter} />
			<OrderList orders={filtered} />
		</Container>
	);
}

export default App;
