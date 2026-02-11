# 📘 Trade Journal – Frontend Assignment

A Trade Journal application built using **React + Vite + Redux Toolkit + Material UI**, designed to manage trades with multiple BUY and SELL legs.

---

## 🚀 Tech Stack

* ⚛️ React (Vite)
* 🗂 Redux Toolkit (Single Source of Truth)
* 🎨 Material UI (MUI v5)
* 💾 localStorage (State Persistence)

---

## 📌 Overview

The Trade Journal allows traders to:

* View trades grouped vertically
* Add multiple BUY / SELL legs
* Edit trade legs
* Visually distinguish LONG vs SHORT trades
* Track OPEN vs CLOSED trade status
* Persist journal state locally

---

## 🏗 Data Model (Source of Truth)

```json
{
  "journal_id": "journal-2025-05",
  "trades": [
    {
      "trade_id": "trade-001",
      "symbol": "AAA",
      "direction": "LONG",
      "status": "OPEN",
      "setup": null,
      "opened_at": "2025-05-25",
      "buy": [],
      "sell": [],
      "notes": ""
    }
  ]
}
```

### Key Design Decisions

* Trade is the atomic unit
* BUY and SELL are arrays (supports scaling in/out)
* Direction and status are explicit
* Immutable Redux updates
* State keyed by `trade_id`

---

## 🎯 Features

### ✅ View Trades

* Three-column layout:

  * BUY (Left)
  * TRADE (Center)
  * SELL (Right)

### ✅ Add BUY Leg

* Price (default 0, no negatives allowed)
* Quantity (default 0, no negatives allowed)
* Setup
* Date (defaults to today)
* Instant UI update

### ✅ Add SELL Leg

* Same structure as BUY
* Disabled when trade is CLOSED

### ✅ Edit Legs

* Edit button opens modal
* Values prefilled
* Immutable Redux update

### ✅ Trade State Awareness

* LONG → Green tinted background
* SHORT → Red tinted background
* CLOSED trades disable actions

### ✅ Local Persistence

* Journal state saved to localStorage
* Reload-safe

---

## 🧩 Component Structure

```
TradeJournal
 ├── TradeRow
 │     ├── BuyTable
 │     ├── TradeMeta
 │     └── SellTable
 │
 ├── AddLegDialog
 └── TradeStatusBadge
```

---

## 🗃 State Management

* Redux Toolkit
* Single journal slice
* Immutable updates
* LocalStorage sync middleware

---

## 🖥 UI / UX Highlights

* Centered three-column layout
* Inline editing via modal
* Clean table alignment
* Proper empty states
* Action buttons aligned properly
* Vertical column separators

---

## 📦 Installation

```bash
git clone https://github.com/baghel25/trade-journal.git
cd trade-journal
npm install
npm run dev
```

---

## 📂 Project Structure

```
src/
 ├── components/
 ├── store/
 ├── App.jsx
 └── main.jsx
```

---

## ⚡ Stretch Implementations (Optional Ready)

* Derived average price
* Position size calculation
* Collapsible trades
* Notes per trade

---

## ❌ Out of Scope

* Real market data
* Brokerage APIs
* PnL engine
* Authentication
* Performance optimizations

---

## 👩‍💻 Author

**Shruti Singh Baghel**
Senior Software Engineer
React | Redux | Python | System Design

---

# 🎉 Final Notes

This project demonstrates:

* Clean state modeling
* Predictable Redux architecture
* Thoughtful UX
* Extensible frontend structure
* Production-ready component organization

## Initial State

<img width="1348" height="610" alt="Screenshot 2026-02-11 at 7 34 21 PM" src="https://github.com/user-attachments/assets/77078c64-8691-4052-a7e0-447f3aa3cc92" />

## With Data 
<img width="1297" height="591" alt="Screenshot 2026-02-11 at 7 36 28 PM" src="https://github.com/user-attachments/assets/097f824b-6c0a-4f97-af79-277bec68e9c6" />

