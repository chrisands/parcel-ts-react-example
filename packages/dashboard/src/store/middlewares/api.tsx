import { History } from 'history'

export default (history: History) => ({ dispatch, getState }) => (next) => (action): void => {
  if (typeof action === 'function') {
    action(dispatch, getState, history)
  } else {
    next(action)
  }
}
