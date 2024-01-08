import { createSlice } from '@reduxjs/toolkit';
import { weeksData } from '../../data/data';

const initialState = {
  weeksData,
  currentWeek: 'week4',
  today: weeksData.find((week) => week.week === 'week4')?.data.find((day) => day.day.toLowerCase() === 'dilluns')?.cost || null,
};

const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    weeklyBalance: (state, action) => {
      const weekKey = action.payload.weekKey;
      const weekData = state.weeksData.find((week) => week.week === weekKey)?.data || [];
      const weekSum = weekData.reduce((total, day) => total + day.cost, 0);
      // Actualiza la información de la semana actual
      return {
        ...state,
        [weekKey + 'Sum']: weekSum,
      };
    },
    changeCurrentWeek: (state, action) => {
      const newCurrentWeek = action.payload.currentWeek;
      const newToday = state.weeksData.find((week) => week.week === newCurrentWeek)?.data.find((day) => day.day.toLowerCase() === 'dilluns')?.cost || null;

      if (state.weeksData.some((week) => week.week === newCurrentWeek)) {
        // Actualiza la información de la semana actual
        return {
          ...state,
          currentWeek: newCurrentWeek,
          today: newToday,
        };
      } else {
        return state;
      }
    },
  },
});

export const { weeklyBalance, changeCurrentWeek } = expensesSlice.actions;
export const expensesReducer = expensesSlice.reducer;
export const todaySelector = (state) => state.expenses.today;
