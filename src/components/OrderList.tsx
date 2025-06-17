// src/components/OrderList.tsx
import { Table } from "@chakra-ui/react";

interface Order {
  id: number;
  productName: string;
  quantity: number;
  orderStatus?: number;
}

const status = {
  0: "未支付",
  1: "已支付",
  2: "已完成",
};
type status = 0 | 1 | 2;

// 假定order.ts中只有0|1|2|undefined

export function OrderList({ orders }: { orders: Order[] }) {
  return (
    <Table.Root variant="line">
      {/* 
	  variant?: ConditionalValue<"outline" | "line" | undefined>
	  ref：https://chakra-ui.com/docs/components/table#root 
	  */}
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader>订单ID</Table.ColumnHeader>
          <Table.ColumnHeader>产品名称</Table.ColumnHeader>
          <Table.ColumnHeader>数量</Table.ColumnHeader>
          <Table.ColumnHeader>订单状态</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {orders.map((order) => (
          <Table.Row key={order.id}>
            <Table.Cell>{order.id}</Table.Cell>
            <Table.Cell>{order.productName}</Table.Cell>
            <Table.Cell>{order.quantity}</Table.Cell>
            <Table.Cell>
              {order.orderStatus == undefined
                ? "未知状态"
                : status[order.orderStatus as status]}
              {/* 是不是不该用断言… */}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}
