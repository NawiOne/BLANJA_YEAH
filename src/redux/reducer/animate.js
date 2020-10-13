import { hideMenuAction } from "../action/actionType";

const initialState = {
  menuDisplayed: false,
};

const animate = (state = initialState, { type }) => {
  switch (type) {
    case hideMenuAction: {
      return {
        ...state,
        menuDisplayed: !state.menuDisplayed,
      };
    }
    default:
      return state;
  }
};

export default animate;
