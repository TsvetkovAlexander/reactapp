import {
  DELETE_LINE_SUCCESS,  GET_LINE_SUCCESS, EDIT_LINE_SUCCESS,
} from '../action';

const initialState = {
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
      case GET_LINE_SUCCESS:
      console.log("action.payload",action.payload);
      return {...state, data: action.payload };


    case DELETE_LINE_SUCCESS:
        console.log('action.payload',action.payload);
        console.log('state.dataREDUCER', state.data);
      return {
        ...state,
        data: state.data.filter((el) => el.id !== action.payload),
      };

    case EDIT_LINE_SUCCESS:
      const newArray1 = state.data.map((element) => {
        if (element.id === action.payload.id) {
          return action.payload;
        }
        return element;
      });
      return { ...state, data: newArray1 };

    default:
      return state;
  }
};
