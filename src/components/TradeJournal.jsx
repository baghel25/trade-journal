import { useSelector } from "react-redux";
import {
  Grid,
  Paper,
  Typography,
  Box,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import TradeRow from "./TradeRow";
import "./style.css";

export default function TradeJournal() {
  const trades = useSelector((state) => state.journal.trades);

  return (
    <Box>
      <Paper
        backgroundColor="#242424"
        className="journal-container table-container"
      >
        <div className="container-header">
          <div className="header-item ">
            <Typography
              fontWeight="bold"
              textAlign="center"
              className="border-bottom"
              pt={1}
              pb={1}
            >
              BUY
            </Typography>

            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Symbol</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Qty</TableCell>
                  <TableCell>Setup</TableCell>
                  <TableCell className="date-col">Date</TableCell>
                  <TableCell className="action-col">Action</TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </div>

          <div item xs={4} className="header-item-center trade-meta ">
            <Typography fontWeight="bold" textAlign="center" pt={1} pb={1}>
              TRADE
            </Typography>
          </div>

          <div item className="header-item">
            <Typography
              className="border-bottom"
              fontWeight="bold"
              textAlign="center"
              pt={1}
              pb={1}
            >
              SELL
            </Typography>

            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Symbol</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Qty</TableCell>
                  <TableCell>Setup</TableCell>
                  <TableCell className="date-col">Date</TableCell>
                  <TableCell className="action-col">Action</TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </div>
        </div>

        {trades.map((trade) => (
          <TradeRow key={trade.trade_id} trade={trade} />
        ))}
      </Paper>
    </Box>
  );
}
