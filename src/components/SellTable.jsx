import { useState } from "react";
import {
  Box,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "@mui/material";
import AddLegDialog from "./AddLegDialog";

export default function SellTable({ trade }) {
  const [editLeg, setEditLeg] = useState(null);
  const isClosed = trade.status === "CLOSED";

  return ( 
    <Box>
       <Table size="small" >
  <TableBody className="sell-table-body">
    {trade.sell.map(leg => (
      <TableRow key={leg.id}>
        <TableCell align="center">{trade.symbol}</TableCell>
        <TableCell align="center">{leg.price}</TableCell>
        <TableCell align="center">{leg.quantity}</TableCell>
        <TableCell align="center">{leg.setup}</TableCell>
        <TableCell className="date-col" align="center">{leg.date}</TableCell>
        <TableCell className="action-col" align="center">
          <Button
            variant="outlined"
            size="small"
            onClick={() => setEditLeg(leg)}
          >
            Edit
          </Button>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>

      {!isClosed && (
        <AddLegDialog trade={trade} type="SELL" />
      )}

      {editLeg && (
        <AddLegDialog
          trade={trade}
          type="SELL"
          editLeg={editLeg}
        />
      )}
    </Box>
  );
}
