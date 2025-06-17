// src/components/OrderList.tsx
import { Table } from "@chakra-ui/react";

const statusMap: { [key: number]: string } = {
  0: "未支付",
  1: "已支付",
  2: "已完成"
};

interface Order {
  id: number;
  productName: string;
  quantity: number;
  orderStatus?: number;
}

export function OrderList({ orders }: { orders: Order[] }) {
  return (
    <Table.Root variant="outline">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader textAlign="center">订单ID</Table.ColumnHeader>
          <Table.ColumnHeader textAlign="center">产品名称</Table.ColumnHeader>
          <Table.ColumnHeader textAlign="center">数量</Table.ColumnHeader>
          <Table.ColumnHeader textAlign="center">订单状态</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {orders.map((order) => (
          <Table.Row key={order.id}>
            <Table.Cell textAlign="center">{order.id}</Table.Cell>
            <Table.Cell textAlign="center">{order.productName}</Table.Cell>
            <Table.Cell textAlign="center">{order.quantity}</Table.Cell>
            <Table.Cell textAlign="center">
              {order.orderStatus !== undefined ? statusMap[order.orderStatus] : "-"}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}
