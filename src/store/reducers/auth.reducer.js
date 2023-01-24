import { authConstant } from "./../constants";

const initialState = {
  loading: false,
  vocMean: [],
  tempMean: [],
  tempGraph: [],
  message: "",
  errors: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authConstant.USER_REGISTER_REQUEST:
    case authConstant.USER_LOGIN_REQUEST:
    case authConstant.GET_MEAN_REQUEST:
    case authConstant.GET_TEMPERATURE_MEAN_REQUEST:
    case authConstant.GET_TEMPERATURE_GRAPH_REQUEST:
      case authConstant.USER_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case authConstant.USER_REGISTER_SUCCESS:
    case authConstant.USER_LOGIN_SUCCESS:
      case authConstant.USER_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
      break;
    case authConstant.GET_MEAN_SUCCESS:
      return {
        ...state,
        loading: false,
        vocMean: action.payload,
      };
      break;
    case authConstant.GET_TEMPERATURE_MEAN_SUCCESS:
      return {
        ...state,
        loading: false,
        tempMean: action.payload,
      };
      break;

      case authConstant.GET_TEMPERATURE_GRAPH_SUCCESS:
      return {
        ...state,
        loading: false,
        tempGraph: action.payload,
      };
      break;
    case authConstant.USER_REGISTER_FAILURE:
    case authConstant.GET_MEAN_FAILURE:
    case authConstant.GET_TEMPERATURE_MEAN_FAILURE:
      case authConstant.GET_TEMPERATURE_GRAPH_FAILURE:
        case authConstant.USER_UPDATE_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload.err,
      };
      break;

    case authConstant.CLEAR_MESSAGES:
      return {
        ...state,
        loading: false,
        message: "",
      };
      break;
    case authConstant.CLEAR_ERRORS:
      return {
        ...state,
        loading: false,
        errors: [],
      };
      break;
    default:
      return state;
  }
};

export default authReducer;
