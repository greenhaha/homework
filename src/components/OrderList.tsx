// src/components/OrderList.tsx
import { Table } from "@chakra-ui/react";

interface Order {
  id: number;
  productName: string;
  quantity: number;
  orderStatus: number; // 假设状态是字符串类型
}

export function OrderList({ orders }: { orders: Order[] }) {
  return (
    <Table.Root variant="outline">
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
              {order.orderStatus === 0
                ? "已完成"
                : order.orderStatus === 1
                ? "已发货"
                : order.orderStatus === 2
                ? "待发货"
                : order.orderStatus === 3
                ? "待付款"
                : "已取消"}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}
