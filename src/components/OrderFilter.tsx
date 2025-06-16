// src/components/OrderFilter.tsx
import { HStack, Input, Button, Select, Portal, createListCollection } from "@chakra-ui/react";
import { useState } from "react";
import type { OrderFilterType } from "../types/OrderFilterType";

interface Props {
	onFilter: (filter: OrderFilterType) => void;
}


export function OrderFilter({ onFilter }: Props) {
	const [filter, setFilter] = useState<OrderFilterType>({
		productName: "",
		orderStatus: "",
	});

	const [StatusOpitons, setStatusOption] = useState(createListCollection({
		items:[
		{ label: "全部", value: "" },
		{ label: "未支付", value: "0" },
		{ label: "已支付", value: "1" },
		{ label: "已完成", value: "2" },
		{ label: "未知状态", value: "undefined" }
	]}));

	return (
		<HStack mb={4}>
			<Input
				placeholder="请输入产品名称"
				value={filter.productName}
				// 使用展开运算符来复制 filter 对象，并更新 productName 属性
				onChange={(e) => setFilter({...filter, productName: e.target.value})}
			/>
			<Select.Root 
			collection={StatusOpitons}
			defaultValue={["全部"]}
			size="md"
			width="320px"
			onChange={(e) => {
				// 使用展开运算符来复制 filter 对象，并更新 orderStatus 属性
				setFilter({
					...filter,
					orderStatus: (e.target as HTMLSelectElement).value
				});
			}}
			>
				<Select.HiddenSelect />
				<Select.Control>
					<Select.Trigger>
					<Select.ValueText placeholder="请选择订单状态" />
					</Select.Trigger>
					<Select.IndicatorGroup>
					<Select.Indicator />
					</Select.IndicatorGroup>
				</Select.Control>
				<Portal>
					<Select.Positioner>
					<Select.Content>
						{StatusOpitons.items.map((StatusOption) => (
						<Select.Item item={StatusOption} key={StatusOption.value}>
							{StatusOption.label}
							<Select.ItemIndicator />
						</Select.Item>
						))}
					</Select.Content>
					</Select.Positioner>
				</Portal>
    		</Select.Root>
			<Button colorScheme="blue" onClick={() => onFilter(filter)}>
				筛选
			</Button>
		</HStack>
	);
}
