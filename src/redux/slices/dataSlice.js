import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    dataWeek1: [
      { day: 'monday', cost: 300 },
      { day: 'tuesday', cost: 234 },
      { day: 'tuesday', cost: 654 },
      { day: 'wednesday', cost: 45 },
      { day: 'wednesday', cost: 100 },
      { day: 'thursday', cost: 50 },
      { day: 'thursday', cost: 26 },
      { day: 'friday', cost: 35 },
      { day: 'friday', cost: 12 },
      { day: 'saturday', cost: 108 },
      { day: 'sunday', cost: 87 },
    ],
    dataWeek2: [
      { day: 'monday', cost: 10 },
      { day: 'tuesday', cost: 20 },
      { day: 'tuesday', cost: 30 },
      { day: 'wednesday', cost: 45 },
      { day: 'wednesday', cost: 12 },
      { day: 'thursday', cost: 12 },
      { day: 'thursday', cost: 34 },
      { day: 'friday', cost: 35 },
      { day: 'friday', cost: 12 },
      { day: 'saturday', cost: 56 },
      { day: 'sunday', cost: 66 },
    ],
  },
  reducers: {},
});

export const dataReducer = dataSlice.reducer;
