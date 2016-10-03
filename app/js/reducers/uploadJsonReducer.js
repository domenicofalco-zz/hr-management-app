let initialState = {
  jsonEmployees: null,
  isLoaded: false,
  failed: false,
  errorMsg: null
};

function employees(state = initialState, action) {

  switch (action.type) {

    case 'UPLOAD_JSON': {
      let newState = Object.assign({}, state, action.payload, { isLoaded: true, errorMsg: null });
      return newState;
    }

    case 'UPLOAD_JSON_ERROR': {
      let newState = Object.assign({}, state, action.payload, { jsonEmployees: null, isLoaded: false, failed: true });
      return newState;
    }

    default: {
      return state
    }

  }

}

export default employees;
