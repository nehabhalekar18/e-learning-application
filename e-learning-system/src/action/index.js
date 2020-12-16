export const setZoom = (value) => (dispatch) => {
    dispatch({
      type: "ZOOM_VALUE",
      payload: value,
    });
  };
  export const getNav = (value) => (dispatch) => {
    dispatch({
      type: "NAV_ACTIVE",
      payload: value,
    });
  };