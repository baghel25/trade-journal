import { Chip } from "@mui/material";

export default function TradeStatusBadge({ trade }) {
  return (
    <>
      <Chip
        label={trade.direction}
        color={trade.direction === "LONG" ? "success" : "error"}
        sx={{ mr: 1 }}
      />
      <Chip
        label={trade.status}
        color={trade.status === "OPEN" ? "primary" : "default"}
      />
    </>
  );
}
