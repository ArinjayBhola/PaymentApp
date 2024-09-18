import { createSlice } from "@reduxjs/toolkit";

const useBalance = createSlice({
  name: "balance",
  initialState: {
    balance: 0,
  },
  reducers: {
    setBalance: (state, action) => (state.balance = action.payload),
  },
});

export default useBalance.reducer;
export const { setBalance } = useBalance.actions;
