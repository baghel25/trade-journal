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

export default function BuyTable({ trade }) {
  const [editLeg, setEditLeg] = useState(null);
  
  return (
    <Box>

      <Table>
        {/* ✅ BODY */}
        <TableBody className="buy-table-body">
          {trade.buy.map((leg) => (
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

      {/* ✅ Add New Leg */}
      {trade.status === "OPEN" && (
        <AddLegDialog trade={trade} type="BUY" />
      )}

      {/* ✅ Edit Existing Leg */}
      {editLeg && (
        <AddLegDialog
          trade={trade}
          type="BUY"
          editLeg={editLeg}
          onClose={() => setEditLeg(null)}  // 🔥 important
        />
      )}

    </Box>
  );
}
