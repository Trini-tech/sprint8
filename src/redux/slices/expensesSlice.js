import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  week1: [
    { day: 'monday', cost: 300 },
    { day: 'tuesday', cost: 234 },
    { day: 'wednesday', cost: 145 },
    { day: 'thursday', cost: 76 },
    { day: 'friday', cost: 47 },
    { day: 'saturday', cost: 108 },
    { day: 'sunday', cost: 87 },
  ],
  week2: [
    { day: 'monday', cost: 10 },
    { day: 'tuesday', cost: 50 },
    { day: 'wednesday', cost: 57 },
    { day: 'thursday', cost: 46 },
    { day: 'friday', cost: 47 },
    { day: 'saturday', cost: 56 },
    { day: 'sunday', cost: 66 },
  ],
  week3: [
    { day: 'monday', cost: 1 },
    { day: 'tuesday', cost: 36 },
    { day: 'wednesday', cost: 501 },
    { day: 'thursday', cost: 257 },
    { day: 'friday', cost: 799 },
    { day: 'saturday', cost: 4 },
    { day: 'sunday', cost: 45 },
  ],
  week4: [
    { day: 'monday', cost: 123 },
    { day: 'tuesday', cost: 135 },
    { day: 'wednesday', cost: 597 },
    { day: 'thursday', cost: 380 },
    { day: 'friday', cost: 712 },
    { day: 'saturday', cost: 123 },
    { day: 'sunday', cost: 123 },
  ],
  currentWeek: 'week4',
};

const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    weeklyBalance: (state, action) => {
      const weekKey = action.payload.weekKey;
      const weekData = state[weekKey];
      const weekSum = weekData.reduce((total, day) => total + day.cost, 0);
      return { ...state, [weekKey + 'Sum']: weekSum };
    },
    changeCurrentWeek: (state, action) => {
      const newCurrentWeek = action.payload.currentWeek;
      if (['week1', 'week2', 'week3', 'week4'].includes(newCurrentWeek)) {
        return { ...state, currentWeek: newCurrentWeek };
      } else {
        return state;
      }
    },
  },
});

export const { weeklyBalance, changeCurrentWeek } = expensesSlice.actions;
export const expensesReducer = expensesSlice.reducer;
