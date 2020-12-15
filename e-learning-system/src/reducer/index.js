export default (state = {}, action) => {
    switch (action.type) {
      case "ZOOM_VALUE":
        return {
          zoomValue: action.payload,
        };
      default:
        return state;
    }
  };
  