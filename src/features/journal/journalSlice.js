import { createSlice, nanoid } from "@reduxjs/toolkit";
import { loadState } from "../../utils/localStorage";

const initialState = loadState() || {
  journal_id: "journal-2025-05",
  trades: [
    {
      trade_id: "trade-001",
      symbol: "AAA",
      direction: "LONG",
      status: "OPEN",
      setup: null,
      opened_at: "2025-05-25",
      buy: [],
      sell: [],
      notes: "",
    },
    {
      trade_id: "trade-002",
      symbol: "MSFT",
      direction: "SHORT",
      status: "OPEN",
      setup: null,
      opened_at: "2025-05-25",
      buy: [],
      sell: [],
      notes: "",
    },
    {
      trade_id: "trade-003",
      symbol: "ALPHA",
      direction: "LONG",
      status: "OPEN",
      setup: null,
      opened_at: "2025-05-25",
      buy: [],
      sell: [],
      notes: "",
    },
  ],
};

const journalSlice = createSlice({
  name: "journal",
  initialState,
  reducers: {
    addBuyLeg: {
      reducer(state, action) {
        const { trade_id, leg } = action.payload;
        const trade = state.trades.find((t) => t.trade_id === trade_id);
        if (trade && trade.status === "OPEN") {
          trade.buy.push(leg);
        }
      },
      prepare(trade_id, data) {
        return {
          payload: {
            trade_id,
            leg: { id: nanoid(), ...data },
          },
        };
      },
    },

    addSellLeg: {
      reducer(state, action) {
        const { trade_id, leg } = action.payload;
        const trade = state.trades.find((t) => t.trade_id === trade_id);
        if (trade && trade.status === "OPEN") {
          trade.sell.push(leg);
        }
      },
      prepare(trade_id, data) {
        return {
          payload: {
            trade_id,
            leg: { id: nanoid(), ...data },
          },
        };
      },
    },

    closeTrade(state, action) {
      const trade = state.trades.find((t) => t.trade_id === action.payload);
      if (trade) trade.status = "CLOSED";
    },
    updateBuyLeg(state, action) {
      const { trade_id, leg_id, data } = action.payload;

      const trade = state.trades.find((t) => t.trade_id === trade_id);
      if (!trade) return;

      const leg = trade.buy.find((l) => l.id === leg_id);
      if (leg) {
        Object.assign(leg, data);
      }
    },
    updateSellLeg(state, action) {
  const { trade_id, leg_id, data } = action.payload;

  const trade = state.trades.find(t => t.trade_id === trade_id);
  if (!trade) return;

  const leg = trade.sell.find(l => l.id === leg_id);
  if (leg) {
    Object.assign(leg, data);
  }
}

  },
});

export const { addBuyLeg, addSellLeg, closeTrade ,updateBuyLeg, updateSellLeg} = journalSlice.actions;

export default journalSlice.reducer;
