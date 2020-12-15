export const setZoom = (value) => (dispatch) => {
    dispatch({
      type: "ZOOM_VALUE",
      payload: value,
    });
  };