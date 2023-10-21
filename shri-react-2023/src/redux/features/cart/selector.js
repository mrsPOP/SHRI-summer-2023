export const selectCartModule = (state) => state.cart;

export const selectProductAmount = (state, id) =>
  selectCartModule(state)[id] || 0;

export const selectTotalTickets = (state) =>
selectCartModule(state).total;
