import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    room_id: 0,
    room_name: 0,
    room_password: 0,
};

export const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    setRoomNameRedux: (state, action) => {
      state.room_name = action.payload;
    },
    setRoomId: (state, action) => {
      state.room_id = action.payload;
    },
    setRoomPassword: (state, action) => {
      state.room_password = action.payload;
    }
  },
});

export const { setRoomNameRedux, setRoomId, setRoomPassword } =
roomSlice.actions;

export default roomSlice.reducer;
