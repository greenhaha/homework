import { Button, Input, Stack } from "@chakra-ui/react";

interface Props {
    keyword: string;
    onKeywordChange: (value: string) => void;
    onSearch: () => void;
}
export default function SearchHeader({ keyword, onKeywordChange, onSearch }: Props) {
    return (
        <Stack spacing={4} direction="row" align="center">
            <Input
                placeholder="请输入订单名称"
                value={keyword}
                onChange={(e) => onKeywordChange(e.target.value)}
            />
            <Button onClick={onSearch}>検索</Button>
        </Stack>
    )
}