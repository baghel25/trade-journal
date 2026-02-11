export const loadState = () => {
  try {
    const serialized = localStorage.getItem("trade_journal");
    return serialized ? JSON.parse(serialized) : undefined;
  } catch {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    localStorage.setItem("trade_journal", JSON.stringify(state));
  } catch {
    console.error("Failed to save state to localStorage");
  }
};
