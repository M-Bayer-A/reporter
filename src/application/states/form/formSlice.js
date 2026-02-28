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
      state.credentials.name = payload;
    },
    setCredentialsShift: (state, { payload }) => {
      state.credentials.shift = payload;
    },
    setCredentialsDate: (state, { payload }) => {
      state.credentials.date = payload;
    },
    //
    setSalesAlAmin: (state, { payload }) => {
      state.sales.alAlmin = payload;
    },
    setSalesAlRasheed: (state, { payload }) => {
      state.sales.alRasheed = payload;
    },
    setSalesCash: (state, { payload }) => {
      state.sales.cash = payload;
    },
    addExpense: (state, { payload }) => {
      state.expenses.push({
        ...payload,
        id: nanoid(),
      });
    },
    deleteExpense: (state, { payload }) => {
      state.expenses = state.expenses.filter((item) => item.id !== payload);
    },
    addAdvance: (state, { payload }) => {
      state.advances.push({
        ...payload,
        id: nanoid(),
      });
    },
    deleteAdvance: (state, { payload }) => {
      state.advances = state.advances.filter((item) => item.id !== payload);
    },
    setNotesReturns: (state, { payload }) => {
      state.notes.returns = payload;
    },
    setNotesText: (state, { payload }) => {
      state.notes.text = payload;
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
