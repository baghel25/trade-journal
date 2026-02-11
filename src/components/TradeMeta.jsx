import {
  Box,
  Typography,
  Chip,
  Button,
  Divider,
  TextField
} from "@mui/material";
import { useDispatch } from "react-redux";
import { closeTrade } from "../features/journal/journalSlice";

export default function TradeMeta({ trade }) {
  const dispatch = useDispatch();

  const isLong = trade.direction === "LONG";
  const isClosed = trade.status === "CLOSED";

  return (
    <Box textAlign="center">
     
       <Typography variant="h6" gutterBottom>
        {trade.direction}
      </Typography>
       <Typography variant="h6" gutterBottom>
        {trade.status}
      </Typography>


      
      {/* SYMBOL */}
      <Typography variant="body2" color="text.secondary">
        {trade.symbol}
      </Typography>

    </Box>
  );
}
