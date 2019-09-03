const createReducer = (initialState: object, reducers: object = {}) => (state = initialState, { type, ...payload }) => {
  const handler = reducers[type]

  return handler ? handler(type, payload) : state
}

export default createReducer
