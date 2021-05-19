import { TEMPLATES_DATA } from "../types/index";

export const UseReducer = (state, { type, payload }) => {
  switch (type) {
    case TEMPLATES_DATA:
      return {
        ...state,
        templatesData: payload,
      };

    default:
      return state;
  }
};
