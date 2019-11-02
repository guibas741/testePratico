const Types = {
  LOGIN: 'auth/LOGIN',
  LOGIN_SUCCESS: 'auth/LOGIN_SUCCESS',
};

const INITIAL_STATE = {
  loading: false,
  email: '',
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOGIN:
      console.log('LOGIN');
      return {...state, loading: true};
    case Types.LOGIN_SUCCESS:
      console.log('SUCCESS');
      return {...state, loading: false};
    default:
      return state;
  }
}

export function login(email, password) {
  console.log({email, password});
  return dispatch => {
    dispatch({type: Types.LOGIN});

    setTimeout(function() {
      dispatch({type: Types.LOGIN_SUCCESS});
    }, 3000);
  };
}
