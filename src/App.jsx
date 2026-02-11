import { CssBaseline, Container, Typography } from "@mui/material";
import TradeJournal from "./components/TradeJournal";
import "./index.css";
import "./App.css";
function App() {
  return (
    <>
      <CssBaseline />
      <Container className="journal-container" maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h3" gutterBottom>
          Trade Journal
        </Typography>

        <TradeJournal className="journal-container" />
      </Container>
    </>
  );
}

export default App;
