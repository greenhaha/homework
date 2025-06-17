// src/App.tsx
import { Container, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { mockOrders } from "./mock/orders";
import { OrderFilter } from "./components/OrderFilter";
import { OrderList } from "./components/OrderList";
import { OrderStatusFilter } from "./components/OrderStatusFilter";

function App() {
	const [orders, setOrders] = useState(mockOrders);
	const [filtered, setFiltered] = useState(mockOrders);
	const [statusFilter, setStatusFilter] = useState<number | "">("");


	useEffect(() => {
		// 模拟加载
		setFiltered(mockOrders);
	}, []);

	const handleFilter = (keyword: string) => {
		const kw = keyword.trim().toLowerCase();
		const filtered = orders.filter((o) =>
			o.productName.toLowerCase().includes(kw),
		);
		setFiltered(filtered);
	};

	const handleStatusFilter = (status: number) => {
		setStatusFilter(status);
		if (status === "") {
			setFiltered(orders);
		} else {
			const filtered = orders.filter((o) => o.orderStatus === status);
			setFiltered(filtered);
		}
	};

	return (
		<Container maxW="container.md" py={6}>
			<Heading mb={4}>产品订单页面</Heading>
			<OrderStatusFilter onStatusFilter={handleStatusFilter} />
			<OrderFilter onFilter={handleFilter} />
			<OrderList orders={filtered} />
		</Container>
	);
}

export default App;
