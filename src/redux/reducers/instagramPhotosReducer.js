const initialState = {
    instagramPhotos: [],
  };
  
  const instagramPhotosReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_PHOTOS':
        return { ...state, instagramPhotos: action.payload };
      default:
        return state;
    }
  };
  
  export default instagramPhotosReducer;
  