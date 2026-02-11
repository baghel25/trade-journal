import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions
} from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  addBuyLeg,
  addSellLeg,
  updateBuyLeg,
  updateSellLeg
} from "../features/journal/journalSlice";


export default function AddLegDialog({
  trade,
  type,
  editLeg = null
}) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  const [form, setForm] = useState({
    price: 0,
    quantity: 0,
    setup: "",
    date: today
  });

  useEffect(() => {
    if (editLeg) {
      setForm({
        price: editLeg.price ?? 0,
        quantity: editLeg.quantity ?? 0,
        setup: editLeg.setup ?? "",
        date: editLeg.date ?? today
      });
      setOpen(true);
    }
  }, [editLeg]);

const handleSubmit = () => {
  if (form.price < 0 || form.quantity < 0) return;

  if (editLeg) {
    if (type === "BUY") {
      dispatch(
        updateBuyLeg({
          trade_id: trade.trade_id,
          leg_id: editLeg.id,
          data: form
        })
      );
    } else {
      dispatch(
        updateSellLeg({
          trade_id: trade.trade_id,
          leg_id: editLeg.id,
          data: form
        })
      );
    }
  } else {
    if (type === "BUY") {
      dispatch(addBuyLeg(trade.trade_id, form));
    } else {
      dispatch(addSellLeg(trade.trade_id, form));
    }
  }

  setOpen(false);
};


  return (
    <>
      {!editLeg && (
        <Button onClick={() => setOpen(true)} sx={{ mt: 1 }}>
          + {type}
        </Button>
      )}

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>
          {editLeg ? "Edit" : "Add"} {type} Leg
        </DialogTitle>

        <DialogContent>
          <TextField
            fullWidth
            label="Price"
            type="number"
            inputProps={{ min: 0 }}
            margin="dense"
            value={form.price}
            onChange={e =>
              setForm({ ...form, price: Number(e.target.value) })
            }
          />

          <TextField
            fullWidth
            label="Quantity"
            type="number"
            inputProps={{ min: 0 }}
            margin="dense"
            value={form.quantity}
            onChange={e =>
              setForm({
                ...form,
                quantity: Number(e.target.value)
              })
            }
          />

          <TextField
            fullWidth
            label="Setup"
            margin="dense"
            value={form.setup}
            onChange={e =>
              setForm({ ...form, setup: e.target.value })
            }
          />

          <TextField
            fullWidth
            type="date"
            margin="dense"
            value={form.date}
            onChange={e =>
              setForm({ ...form, date: e.target.value })
            }
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
