import { Grid, Paper, Typography, Box } from "@mui/material";
import BuyTable from "./BuyTable";
import SellTable from "./SellTable";
import TradeMeta from "./TradeMeta";

export default function TradeRow({ trade }) {
 const bgColor =
    trade.direction === "LONG"
      ? "rgba(5, 30, 5, 0.83)"
      : "rgb(65, 9, 9)";
  return (
   <div>
  <div className="container-header">

    {/* BUY */}
    <div style={{ backgroundColor: bgColor }} className="header-item">
      <BuyTable trade={trade} />
    </div>

    {/* TRADE META */}
    <div style={{ backgroundColor: bgColor }} className="header-item-center trade-meta">
      <TradeMeta trade={trade} />
    </div>

    {/* SELL */}
    <div style={{ backgroundColor: bgColor }} className="header-item">
      <SellTable trade={trade} />
    </div>

  </div>
</div>
  );
}
