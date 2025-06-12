
import { useEffect, useState } from "react";
import { Stack, Heading } from "@chakra-ui/react";
import searchData from "../data/mock.json";
import SearchHeader from "../components/SearchHeader";
import { SearchTable } from "../components/SearchTable";


export interface SearchItem {
    id: string;
    name: string;
    category: string;
    status: string;
    price: number;
}
export default function SearchPage() {
    const [orders, setOrders] = useState<SearchItem[]>([]);
    const [filteredOrders, setFilteredOrders] = useState<SearchItem[]>([]);
    const [keyword, setKeyword] = useState<string>("");


    useEffect(() => {
        setOrders(searchData);
        setFilteredOrders(searchData);
    }, []);


    const handleSearch = () => {
        const lower = keyword.toLowerCase();
        const filtered = orders.filter((order) =>
            order.name.toLowerCase().includes(lower)
        );
        setFilteredOrders(filtered);
    };

    return (
        <Stack spacing={6} p={6}>
            <Heading size="md">订单筛选页面</Heading>
            <SearchHeader
                keyword={keyword}
                onKeywordChange={setKeyword}
                onSearch={handleSearch}
            />
            <SearchTable items={filteredOrders} />
        </Stack>
    );
}
