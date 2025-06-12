
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

export interface SearchItem {
    id: string;
    name: string;
    category: string;
    status: string;
    price: number;
}

interface Props {
  items: SearchItem[];
}

export const SearchTable = ({ items }: Props) => {
  return (
    <Table variant="simple" mt={4}>
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>名称</Th>
          <Th>分类</Th>
          <Th>订单状态</Th>
          <Th isNumeric>价格</Th>
        </Tr>
      </Thead>
      <Tbody>
        {items.map((item) => (
          <Tr key={item.id}>
            <Td>{item.id}</Td>
            <Td>{item.name}</Td>
            <Td>{item.category}</Td>
            <Td>{item.status}</Td>
            <Td isNumeric>{item.price}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};
