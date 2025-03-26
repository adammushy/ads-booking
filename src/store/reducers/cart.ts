import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import type { AdSlotStoreType } from "@/types";

interface CartTypes {
  cartItems: AdSlotStoreType[];
}

const initialState = {
  cartItems: [],
} as CartTypes;

const indexSameAdSlot = (state: CartTypes, action: AdSlotStoreType) => {
  const sameAdSlot = (adSlot: AdSlotStoreType) =>
    adSlot.id === action.id; // Match only by ID since ad slots don't have color or size

  return state.cartItems.findIndex(sameAdSlot);
};

type AddAdSlotType = {
  adSlot: AdSlotStoreType;
  count: number;
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addAdSlot: (state, action: PayloadAction<AddAdSlotType>) => {
      const cartItems = state.cartItems;

      // Find index of ad slot
      const index = indexSameAdSlot(state, action.payload.adSlot);

      if (index !== -1) {
        cartItems[index].count += action.payload.count;
        return;
      }

      return {
        ...state,
        cartItems: [...state.cartItems, action.payload.adSlot],
      };
    },
    removeAdSlot(state, action: PayloadAction<AdSlotStoreType>) {
      // Find index of ad slot and remove it
      state.cartItems.splice(indexSameAdSlot(state, action.payload), 1);
    },
    setCount(state, action: PayloadAction<AddAdSlotType>) {
      // Find index and update the count for the ad slot
      const indexItem = indexSameAdSlot(state, action.payload.adSlot);
      state.cartItems[indexItem].count = action.payload.count;
    },
  },
});

export const { addAdSlot, removeAdSlot, setCount } = cartSlice.actions;
export default cartSlice.reducer;


