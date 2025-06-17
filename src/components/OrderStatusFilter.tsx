// src/components/OrderStatusFilter.tsx
import { useState } from "react";
import "../style/OrderStatusSelect.css";

interface Props {
  onStatusFilter: (status: number) => void;
}

export function OrderStatusFilter({ onStatusFilter }: Props) {
  const [selectedStatus, setSelectedStatus] = useState<number | "">("");

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const status = event.target.value ? parseInt(event.target.value, 10) : "";
    setSelectedStatus(status);
    onStatusFilter(status);
  };

  return (
    <select
      className="order-status-select"
      value={selectedStatus}
      onChange={handleStatusChange}
    >
      <option value="">全部</option>
      <option value="0">未支付</option>
      <option value="1">已支付</option>
      <option value="2">已完成</option>
    </select>
  );
}