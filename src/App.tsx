// src/App.tsx
import { Container, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { mockOrders } from "./mock/orders";
import { OrderFilter } from "./components/OrderFilter";
import { OrderList } from "./components/OrderList";

function App() {
  const [orders] = useState(mockOrders);
  const [filtered, setFiltered] = useState<typeof mockOrders>([]);

  useEffect(() => {
    // 模拟加载
    setFiltered([]);
  }, []);

  const handleFilter = (input: string, orderStatus: number) => {
    const product_name = input.trim().toLowerCase();
    const order_status = orderStatus;
    const filtered = orders.filter(
      (o) =>
        (!product_name || o.productName.toLowerCase().includes(product_name)) &&
        (order_status === -1 || o.orderStatus === order_status)
    );
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
