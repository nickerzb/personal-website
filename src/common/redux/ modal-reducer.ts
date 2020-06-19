import { OPEN_MODAL, CLOSE_MODAL } from "./modal-actions";

const initialState: ModalState = {
  open: false,
  body: "",
  title: ""
};

export const modalReducer = (
  state = initialState,
  action: ReduxAction
): ModalState => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        open: true,
        body: action.payload.body,
        title: action.payload.title
      };
    case CLOSE_MODAL:
      return {
        ...state,
        ...initialState
      };
    default:
      return state;
  }
};

export interface ModalState {
  open: boolean;
  body: string;
  title: string;
}
