// src/App.tsx
import { Container, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { mockOrders } from "./mock/orders";
import { OrderFilter } from "./components/OrderFilter";
import { OrderList } from "./components/OrderList";

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [orders, setOrders] = useState(mockOrders);
  // setOrders never used
  const [filtered, setFiltered] = useState(mockOrders);

  useEffect(() => {
    // 模拟加载
    setFiltered(mockOrders);
  }, []);

  const handleFilter = (keyword: string, filter: string) => {
    const kw = keyword.trim().toLowerCase();

    let result = orders;
    // 3：undefined，4：all 单独处理

    result = orders.filter((o) => {
      const filterNum = Number(filter);
      const matchesKeyword = o.productName.toLowerCase().includes(kw);
      if (filterNum === 3) {
        return matchesKeyword && o.orderStatus === undefined;
      }
      if (filterNum === 4) {
        return matchesKeyword;
      }
      return matchesKeyword && o.orderStatus === filterNum;
    });

    setFiltered(result);
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
