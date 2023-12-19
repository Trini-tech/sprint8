import { createSlice } from '@reduxjs/toolkit';
import { weeksData } from '../../data/data';

const initialState = {
  weeksData,
  currentWeek: 'week4',
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
      if (state.weeksData.some((week) => week.week === newCurrentWeek)) {
        // Actualiza la información de la semana actual
        return {
          ...state,
          currentWeek: newCurrentWeek,
        };
      } else {
        return state;
      }
    },
  },
});

export const { weeklyBalance, changeCurrentWeek } = expensesSlice.actions;
export const expensesReducer = expensesSlice.reducer;
