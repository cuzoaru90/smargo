const reducer = (state = [], action) => {
  Object.freeze(state)
  switch(action.type) {
    case "GET_USER":
      // return [
      //   ...state
      // ]
      console.log('REDUCER')
  }
}
export  default reducer
