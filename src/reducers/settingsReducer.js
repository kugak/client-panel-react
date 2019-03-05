import {
  DISABLE_BALANCE_ON_ADD,
  DISABLE_BALANCE_ON_EDIT,
  ALLOW_REGISTERATION
} from "../actions/types";

const initialState = {
  disableBalanceOnAdd: true,
  disableBalanceonEdit: false,
  allowRegistration: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case DISABLE_BALANCE_ON_ADD:
      return {
        ...state,
        disableBalanceOnAdd: !state.disableBalanceOnAdd
      };

    case DISABLE_BALANCE_ON_EDIT:
      return {
        ...state,
        disableBalanceonEdit: !state.disableBalanceonEdit
      };

    case ALLOW_REGISTERATION:
      return {
        ...state,
        allowRegistration: !state.allowRegistration
      };

    default:
      return state;
  }
}
