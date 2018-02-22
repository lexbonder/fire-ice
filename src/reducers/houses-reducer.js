export const houses = (state=[], action) => {
  switch (action.type) {
  case 'ADD_HOUSES_TO_STORE':
    return action.houses;
  default:
    return state;
  }
};
