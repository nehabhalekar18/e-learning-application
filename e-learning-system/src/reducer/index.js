export default (state = {}, action) => {
    switch (action.type) {
      case "ZOOM_VALUE":
        return {
          zoomValue: action.payload,
        };
        case "NAV_ACTIVE":
          return {
            navActive: action.payload,
          };
      default:
        return state;
    }
  };
  