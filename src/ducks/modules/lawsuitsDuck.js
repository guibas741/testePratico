import api from '../../services/api';

const Types = {
  GET_LAWSUITS: 'lawsuits/GET_LAWSUITS',
  GET_LAWSUITS_SUCCESS: 'lawsuits/GET_LAWSUITS_SUCCESS',
  GET_LAWSUITS_FAIL: 'lawsuits/GET_LAWSUITS_FAIL',
  FILTER_LAWSUITS: 'lawsuits/FILTER_LAWSUITS',
};

const INITIAL_STATE = {
  loading: false,
  error: '',
  lawsuitsCases: [],
  lawsuitsCasesFull: [],
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
        lawsuitsCasesFull: action.payload.lawsuitsCases,
        lawsuitsCases: action.payload.lawsuitsCases,
      };
    case Types.GET_LAWSUITS_FAIL:
      return {...state, loading: false, error: action.payload.error};
    case Types.FILTER_LAWSUITS:
      return {
        ...state,
        lawsuitsCases: action.payload.lawsuitsCases,
      };
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

export function filterLawsuits(query) {
  return (dispatch, getState) => {
    const {lawsuitsCasesFull} = getState().lawsuit;
    const lawsuitsCases = lawsuitsCasesFull.filter(
      data =>
        data.title.toLowerCase().includes(query) || data.number.includes(query),
    );
    dispatch({type: Types.FILTER_LAWSUITS, payload: {lawsuitsCases}});
  };
}
