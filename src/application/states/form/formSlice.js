import { createSlice } from "@reduxjs/toolkit";
import dateHelper from "../../../helpers/dateHelper";
import { nanoid } from "nanoid";

const initialState = {
  step: 1,
  credentials: {
    name: "",
    shift: "",
    date: dateHelper.parseToString(new Date()),
  },
  sales: {
    alAlmin: "",
    alRasheed: "",
    cash: "",
  },
  expenses: [],
  advances: [],
  notes: {
    returns: "",
    text: "",
  },
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setInitialState: () => {
      return initialState;
    },
    moveToNextStep: (state) => {
      if (state.step != 5) state.step += 1;
    },
    moveToPreviousStep: (state) => {
      if (state.step != 1) state.step -= 1;
    },
    //
    setCredentialsName: (state, { payload }) => {
      const { value } = payload;
      state.credentials.name = value;
    },
    setCredentialsShift: (state, { payload }) => {
      const { value } = payload;
      state.credentials.shift = value;
    },
    setCredentialsDate: (state, { payload }) => {
      const { value } = payload;
      state.credentials.date = value;
    },
    //
    setSalesAlAmin: (state, { payload }) => {
      const { value } = payload;
      state.sales.alAlmin = value;
    },
    setSalesAlRasheed: (state, { payload }) => {
      const { value } = payload;
      state.sales.alRasheed = value;
    },
    setSalesCash: (state, { payload }) => {
      const { value } = payload;
      state.sales.cash = value;
    },
    addExpense: (state, { payload }) => {
      const { name, value } = payload;
      state.expenses.push({
        name,
        value,
        id: nanoid(),
      });
    },
    deleteExpense: (state, { payload }) => {
      const { id } = payload;
      state.expenses = state.expenses.filter((item) => item.id !== id);
    },
    addAdvance: (state, { payload }) => {
      const { name, value } = payload;
      state.advances.push({
        name,
        value,
        id: nanoid(),
      });
    },
    deleteAdvance: (state, { payload }) => {
      const { id } = payload;
      state.advances = state.advances.filter((item) => item.id !== id);
    },
    setNotesReturns: (state, { payload }) => {
      const { value } = payload;
      state.notes.returns = value;
    },
    setNotesText: (state, { payload }) => {
      const { value } = payload;
      state.notes.text = value;
    },
  },
});

export const {
  setInitialState,
  moveToNextStep,
  moveToPreviousStep,
  setCredentialsDate,
  setCredentialsName,
  setCredentialsShift,
  setSalesAlAmin,
  setSalesAlRasheed,
  setSalesCash,
  addExpense,
  deleteExpense,
  addAdvance,
  deleteAdvance,
  setNotesReturns,
  setNotesText,
} = formSlice.actions;

export default formSlice.reducer;
