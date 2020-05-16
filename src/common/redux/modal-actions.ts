export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export interface OpenModalProps {
  body: JSX.Element;
  title: JSX.Element;
}

export const openModal = (props: OpenModalProps): ReduxAction => ({
  type: OPEN_MODAL,
  payload: props
});
