
export const initialState = {
    nominations: []
}

const Reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case 'ADD_TO_NOMINATION':
            
            return{
               ...state,
               nominations: [...state.nominations, action.list]
            }
    
        case 'REMOVE_FROM_NOMINATION':
            let newList = [...state.nominations];
            const indexVal = state.nominations.findIndex(
                (listItem) => listItem.id === action.id
            );
            if (indexVal >= 0) {
                newList.splice(indexVal, 1);
             } else {
                 console.warn(`Can't remove product (id: ${action.id}) as it's not in basket!`);
          }
           return{
             ...state,
             nominations: newList,
           }

        default:
            return state
    }
}

export default Reducer;