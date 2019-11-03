import api from '../../services/api';

const Types = {
  GET_LAWSUITS: 'lawsuits/GET_LAWSUITS',
  GET_LAWSUITS_SUCCESS: 'lawsuits/GET_LAWSUITS_SUCCESS',
  GET_LAWSUITS_FAIL: 'lawsuits/GET_LAWSUITS_FAIL',
};

const INITIAL_STATE = {
  loading: false,
  lawsuitsCases: [],
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_LAWSUITS:
      return {...state, loading: true};
    case Types.GET_LAWSUITS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        lawsuitsCases: action.payload.lawsuitsCases,
      };
    case Types.GET_LAWSUITS_FAIL:
      return {...state, loading: false, error: action.payload.error};
    default:
      return state;
  }
}

export function getAllLawsuits() {
  return dispatch => {
    dispatch({type: Types.GET_LAWSUITS});
    const headers = {'x-frontend-test': 'aurumtes'};
    api
      .get('/lawsuit/all', {headers})
      .then(response => {
        const lawsuitsCases = response.data.cases;
        dispatch({type: Types.GET_LAWSUITS_SUCCESS, payload: {lawsuitsCases}});
      })
      .catch(error => {
        dispatch({type: Types.GET_LAWSUITS_FAIL, payload: {error}});
      });
  };
}