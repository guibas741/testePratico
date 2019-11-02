const Types = {
  LOGIN: 'auth/LOGIN',
  LOGIN_SUCCESS: 'auth/LOGIN_SUCCESS',
};

const INITIAL_STATE = {
  loading: false,
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOGIN:
      return {...state, loading: true};
    case Types.LOGIN_SUCCESS:
      return {...state, loading: false};
    default:
      return state;
  }
}
