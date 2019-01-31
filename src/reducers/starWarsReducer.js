import {FETCH_CHARS_FAIL, FETCH_CHARS_START, FETCH_CHARS_SUCCESS} from "../actions";
const initialState = {
  characters: [],
  error: null,
  isLoading: false
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARS_START:
      return{
        ...state,
        error: '',
        isLoading: true,
    };
    case FETCH_CHARS_SUCCESS:
    return{
      ...state,
      characters: action.payload,
      error: '',
      isLoading: false,
    };
    case FETCH_CHARS_FAIL:
    return{
      ...state,
      error: action.payload,
      isLoading: false
    }
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
