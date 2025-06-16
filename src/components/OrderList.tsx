// src/components/OrderList.tsx
import { Table } from "@chakra-ui/react";

interface Order {
	id: number;
	productName: string;
	quantity: number;
	orderStatus?: number;
}

function switchtOrderStatus(status: number | undefined): string {
	switch (status) {
		case 0:
			return "未支付";
		case 1:
			return "已支付";
		case 2:
			return "已完成";
		default:
			return "未知状态";
	}
}

export function OrderList({ orders }: { orders: Order[] }) {
	return (
		<Table.Root>
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
						<Table.Cell>{switchtOrderStatus(order.orderStatus)}</Table.Cell>
					</Table.Row>
				))}
			</Table.Body>
		</Table.Root>
	);
}
