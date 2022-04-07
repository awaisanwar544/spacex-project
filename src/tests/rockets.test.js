import rocketReducer from '../redux/rockets/rockets';

const state = [
  {
    id: 1,
    rocket_name: 'rocket1',
    description: '',
    reserved: true,
  },
  {
    id: 2,
    rocket_name: 'rocket2',
    description: '',
    reserved: false,
  },
  {
    id: 3,
    rocket_name: 'rocket3',
    description: '',
    reserved: false,
  },
];

describe('Rocket Reducer', () => {
  it('when action is FETCH_ROCKETS', () => {
    const action = { type: 'FETCH_ROCKETS', payload: state };
    const result = rocketReducer([], action);
    expect(result).toEqual(state);
  });

  it('when action is RESERVE_ROCKET', () => {
    const action = {
      type: 'RESERVE_ROCKET',
      rocketId: 3,
      payload: true,
    };
    const newState = [
      {
        id: 1,
        rocket_name: 'rocket1',
        description: '',
        reserved: true,
      },
      {
        id: 2,
        rocket_name: 'rocket2',
        description: '',
        reserved: false,
      },
      {
        id: 3,
        rocket_name: 'rocket3',
        description: '',
        reserved: true,
      },
    ];
    const result = rocketReducer(state, action);
    expect(result).toEqual(newState);
  });

  it('when action is CANCEL_RESERVATION', () => {
    const action = {
      type: 'CANCEL_RESERVATION',
      rocketId: 1,
      payload: false,
    };
    const newState = [
      {
        id: 1,
        rocket_name: 'rocket1',
        description: '',
        reserved: false,
      },
      {
        id: 2,
        rocket_name: 'rocket2',
        description: '',
        reserved: false,
      },
      {
        id: 3,
        rocket_name: 'rocket3',
        description: '',
        reserved: true,
      },
    ];
    const result = rocketReducer(state, action);
    expect(result).toEqual(newState);
  });
});
