
const initialState: Models.Books = {
  books: [],
  loading: true,
}
interface userAction {
  type: string;
  payload?: any;
}


const reducer = (state = initialState, action: userAction) => {  
  
  switch(action.type) {
    case "BOOKS_LOADED": 
      return {
        books: action.payload,
        loading: false,
    }
    default: 
      return state;
  }

}


export default reducer;