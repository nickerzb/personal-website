import { OPEN_MODAL, CLOSE_MODAL } from "./modal-actions";

export const modalReducer = (
  state = { open: false, body: "", title: "" },
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
        open: false,
        body: "",
        title: ""
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
