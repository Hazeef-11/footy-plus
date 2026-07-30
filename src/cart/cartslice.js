import { createSlice } from "@reduxjs/toolkit";

let DataFromStorage = JSON.parse(localStorage.getItem("cart"));

let cartreducer = createSlice({
  name: "cart",
  initialState: DataFromStorage,
  reducers: {
    additem(state, action) {
      let add = action.payload;
      state.push(add);
      console.log(action.payload);
      localStorage.setItem("cart", JSON.stringify([...state]));
    },
    removeitem(state, action) {
      let del = action.payload;
      let remove = state.filter((data) => data.id !== del.id);

      console.log(del);
      localStorage.setItem("cart", JSON.stringify([...remove]));
      return remove;
    },
  },
});

export default cartreducer.reducer;

export let { additem, removeitem } = cartreducer.actions;
