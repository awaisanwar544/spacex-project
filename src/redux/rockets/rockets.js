import axios from 'axios';

// Actions
const FETCH_ROCKETS = 'FETCH_ROCKETS';
const RESERVE_ROCKET = 'RESERVE_ROCKET';
const CANCEL_RESERVATION = 'CANCEL_RESERVATION';

const URL = 'https://api.spacexdata.com/v3/rockets';
const initialState = [];

// Action Creator
export const fetchRockets = () => async (dispatch) => {
  const response = await axios.get(URL)
    .then((res) => res.data.map((item) => ({
      id: item.id,
      rocket_name: item.rocket_name,
      description: item.description,
      flickr_images: item.flickr_images,
    })));
  dispatch({
    type: FETCH_ROCKETS,
    payload: response,
  });
};

export const reserveRocket = (id) => ({
  type: RESERVE_ROCKET,
  rocketId: id,
  payload: true,
});

export const cancelReservation = (id) => ({
  type: CANCEL_RESERVATION,
  rocketId: id,
  payload: false,
});

// Reducer
const rocketReducer = (state = initialState, action = {}) => {
  if (action.type === FETCH_ROCKETS) {
    return [...state, ...action.payload];
  }

  if (action.type === RESERVE_ROCKET) {
    const id = action.rocketId - 1;
    const newState = [...state];
    newState[id].reserved = action.payload;
    return [...newState];
  }

  if (action.type === CANCEL_RESERVATION) {
    const id = action.rocketId - 1;
    const newState = [...state];
    newState[id].reserved = action.payload;
    return [...newState];
  }

  return state;
};

export default rocketReducer;
