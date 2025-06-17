// src/components/OrderFilter.tsx
import { HStack, Input, Button } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  onFilter: (keyword: string, orderStatus: number) => void;
}

export function OrderFilter({ onFilter }: Props) {
  const [input, setInput] = useState("");
  const [orderStatus, setOrderStatus] = useState<number>(-1);

  const reset = () => {
    setInput("");
    setOrderStatus(-1);
  };

  return (
    <HStack mb={4}>
      <Input
        placeholder="请输入产品名称"
        value={input}
        onChange={(e) => setInput(e.target.value.trim())}
        name="input_box1"
        id="input_box1"
        className="input_box1"
      />
      <select
        value={orderStatus}
        onChange={(e) => setOrderStatus(Number(e.target.value))}
      >
        <option value="-1">全部</option>
        <option value="0">已完成</option>
        <option value="1">已发货</option>
        <option value="2">待发货</option>
        <option value="3">待付款</option>
        <option value="4">已取消</option>
      </select>
      <Button onClick={() => onFilter(input, orderStatus)}>筛选</Button>
      <Button
        onClick={() => {
          reset();
          onFilter("", -2); // 让OrderList变为空
        }}
      >
        重置
      </Button>
    </HStack>
  );
}
