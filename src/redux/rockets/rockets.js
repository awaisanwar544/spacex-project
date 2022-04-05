import axios from 'axios';

// Actions
const FETCH_ROCKETS = 'FETCH_ROCKETS';

const URL = 'https://api.spacexdata.com/v3/rockets';
const initialState = [];
const fetchedData = [];

// Action Creator
export const fetchRockets = () => async (dispatch) => {
  const response = await axios.get(URL)
    .then((res) => res.data);
  response.forEach((item) => {
    fetchedData.push({
      id: item.id,
      rocket_name: item.rocket_name,
      description: item.description,
      flickr_images: item.flickr_images,
    });
  });
  dispatch({
    type: FETCH_ROCKETS,
    payload: fetchedData,
  });
};

// Reducer
const rocketReducer = (state = initialState, action = {}) => {
  if (action.type === FETCH_ROCKETS) {
    return [...state, ...action.payload];
  }

  return state;
};

export default rocketReducer;
