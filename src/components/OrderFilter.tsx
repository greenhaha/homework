// src/components/OrderFilter.tsx
import { HStack, Input, Button, NativeSelect, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  onFilter: (keyword: string, status: string) => void;
}

export function OrderFilter({ onFilter }: Props) {
  const [input, setInput] = useState("");
  const [status, setStatus] = useState("");

  return (
    <HStack mb={4}>
      <Input
        placeholder="请输入产品名称"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <NativeSelect.Root>
        <NativeSelect.Field
		placeholder="请输入支付状态"
        value={status}
        onChange={(e) => setStatus(e.currentTarget.value)}
		>
          <option value="0">未支付</option>
          <option value="1">已支付</option>
		  <option value="2">已完成</option>
          <option value="null">-</option>
        </NativeSelect.Field>
        <NativeSelect.Indicator />
      </NativeSelect.Root>
      <Button colorScheme="blue" onClick={() => onFilter(input, status)}>
        筛选
      </Button>
    </HStack>
  );
}
