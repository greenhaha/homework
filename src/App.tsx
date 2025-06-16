// src/App.tsx
import { Container, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { mockOrders } from "./mock/orders";
import { OrderFilter } from "./components/OrderFilter";
import { OrderList } from "./components/OrderList";
import type { OrderFilterType } from "./types/OrderFilterType";

function App() {
	const [orders, setOrders] = useState(mockOrders);
	const [filtered, setFiltered] = useState(mockOrders);

	useEffect(() => {
		// 模拟加载
		setFiltered(mockOrders);
	}, []);

	const handleFilter = (filter: OrderFilterType) => {
		const productName = filter.productName.trim().toLowerCase();
		const orderStatus = filter.orderStatus;
		const filtered = orders.filter((o) =>{
			// 如果产品名称为空，则不进行过滤
			const matchProductName = !productName || o.productName.toLowerCase().includes(productName);
			let matchOrderStatus = true;
			if (orderStatus === "undefined") {
				// 如果订单状态为 "undefined"，则匹配不存在orderStatus属性的数据
				matchOrderStatus = !("orderStatus" in o);
			} else if (orderStatus) {
				// 如果订单状态不为空，则进行匹配
				matchOrderStatus = o.orderStatus === Number(orderStatus);
			}
			
			// 两个条件都满足时保留
			return matchProductName && matchOrderStatus;

	});
		setFiltered(filtered);
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
