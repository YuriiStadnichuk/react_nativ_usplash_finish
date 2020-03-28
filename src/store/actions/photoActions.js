import {
  LOAD_PHOTOS,
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ERROR,
  CLEAR_ERROR
} from "../types";

export const loadPhotos = () => {
  return async dispatch => {
    const response = new Promise((resolve, reject) => {
      try {
        fetch(
          "https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9",
          {
            method: "GET",
            headers: { "Content-Type": "application/json" }
          }
        ).then(data => {
          resolve(data.json());
        });
      } catch (e) {
        showError("Что-то пошло не так...");
        console.log(e);
      }
    });

    response.then(data => {
      const photos = Object.keys(data).map(key => ({ ...data[key], id: key }));

      dispatch({
        type: LOAD_PHOTOS,
        payload: photos
      });
    });

    const showLoader = () => dispatch({ type: SHOW_LOADER });
    const hideLoader = () => dispatch({ type: HIDE_LOADER });
    const showError = error => dispatch({ type: SHOW_ERROR, error });
    const clearError = () => dispatch({ type: CLEAR_ERROR });
  };
};
