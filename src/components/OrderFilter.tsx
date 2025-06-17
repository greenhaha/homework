// src/components/OrderFilter.tsx
import {
  HStack,
  Input,
  Button,
  Select,
  createListCollection,
  Portal,
} from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  onFilter: (keyword: string, filter: string) => void;
}
const selectItems = createListCollection({
  items: [
    { label: "全部", value: "4" },
    { label: "未支付", value: "0" },
    { label: "已支付", value: "1" },
    { label: "已完成", value: "2" },
    { label: "未知状态", value: "3" },
    // ^ ^……全部和未知状态单独判断
  ],
});

export function OrderFilter({ onFilter }: Props) {
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("4");

  return (
    <HStack mb={4}>
      <Input
        placeholder="请输入产品名称"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      {/* select组件
	 		ref: https://chakra-ui.com/docs/components/select 
	  */}
      <Select.Root
        collection={selectItems}
        onValueChange={(e) => setFilter(e.value[0])}
        defaultValue={[filter]}
      >
        <Select.HiddenSelect />
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText />
          </Select.Trigger>
          <Select.IndicatorGroup>
            <Select.Indicator />
          </Select.IndicatorGroup>
        </Select.Control>
        <Portal>
          <Select.Positioner>
            <Select.Content>
              {selectItems.items.map((item) => (
                <Select.Item item={item} key={item.value} id={item.value}>
                  {item.label}
                  <Select.ItemIndicator />
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Positioner>
        </Portal>
      </Select.Root>
      <Button colorScheme="blue" onClick={() => onFilter(input, filter)}>
        {/* 增加filter条件 */}
        筛选
      </Button>
    </HStack>
  );
}
