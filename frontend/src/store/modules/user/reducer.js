import produce from 'immer';
import { formatPrice } from '~/utils/format';

const INITIAL_STATE = {
  profile: null,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.profile = action.payload.user;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.profile = null;
        break;
      }
      case '@user/UPDATE_BALANCE': {
        draft.profile.balance = action.payload.amount;
        draft.profile.formatedBalance = formatPrice(action.payload.amount);
        break;
      }
      default:
    }
  });
}
