const initialState = {
  netlifySites: [],
  };
  
  const netlifySitesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_NETLIFY_SITES':
        return { ...state, netlifySites: action.payload };
      default:
        return state;
    }
  };
  
  export default netlifySitesReducer;
  