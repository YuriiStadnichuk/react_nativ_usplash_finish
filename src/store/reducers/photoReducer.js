import {
  LOAD_PHOTOS,
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ERROR,
  CLEAR_ERROR
} from "../types";

const initialState = {
  allPhotos: [],
  loading: true,
  errors: null
};

export const photoReducer = (state = initialState, action) => {
  // console.log(action);
  const handlers = {
    [LOAD_PHOTOS]: state => ({
      ...state,
      allPhotos: action.payload,
      loading: false
    }),

    [SHOW_LOADER]: state => ({ ...state, loading: false }),
    [HIDE_LOADER]: state => ({ ...state, loading: true }),
    [CLEAR_ERROR]: state => ({ ...state, errors: null }),
    [SHOW_ERROR]: (state, { error }) => ({ ...state, error }),

    DEFAULT: state => state
  };
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
