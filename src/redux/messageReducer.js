import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { sendMessage } from './messageOperations';
import Notiflix from 'notiflix';

const INITIAL_STATE = {
  name: null,
  email: null,
  message: null,
  isLoading: false,
  error: null,
};
const messageSlice = createSlice({
  name: 'message',
  initialState: INITIAL_STATE,
  reducers: {
    handlName(state, action) {
      state.name = action.payload;
    },
    handlEmail(state, action) {
      state.email = action.payload;
    },
    handlMessage(state, action) {
      state.message = action.payload;
    },
    handlReset(state, action) {
      state.name = null;
      state.email = null;
      state.message = null;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.isLoading = false;
        Notiflix.Notify.success('The message was sent successfully');
      })
      .addMatcher(isAnyOf(sendMessage.pending), (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(isAnyOf(sendMessage.rejected), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const { handlName, handlEmail, handlMessage, handlReset } =
  messageSlice.actions;
export const messageReducer = messageSlice.reducer;
