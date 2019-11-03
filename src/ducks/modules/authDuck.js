import {NavigationActions, StackActions} from 'react-navigation';

const Types = {
  LOGIN: 'auth/LOGIN',
  LOGIN_SUCCESS: 'auth/LOGIN_SUCCESS',
  LOGOUT: 'auth/LOGOUT',
};

const INITIAL_STATE = {
  loading: false,
  email: '',
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOGIN:
      return {...state, loading: true};
    case Types.LOGIN_SUCCESS:
      return {...state, loading: false, email: action.payload.email};
    case Types.LOGOUT:
      return {...state, email: '', loading: false};
    default:
      return state;
  }
}

export function login(email, password) {
  console.log({email, password});
  return dispatch => {
    dispatch({type: Types.LOGIN});

    setTimeout(function() {
      dispatch({type: Types.LOGIN_SUCCESS, payload: {email}});
    }, 3000);
  };
}

export function logout(navigation) {
  return dispatch => {
    dispatch({type: Types.LOGOUT});
    navigation.dispatch(
      StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: 'Login'})],
      }),
    );
  };;
}
