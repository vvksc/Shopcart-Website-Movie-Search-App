import { act } from "react-dom/test-utils";
import { createStore } from "redux";

const initial={
    drama:[],
    actionmovies:[],
    comedy:[],
    adventure:[],
    blog:[],
    thriller:[]
};

 export function reduce(state=initial,action){
    console.log(action.type,action.payload);
    
    switch(action.type){
        case 'ADDDATA':
            return{
                ...state,
              actionmovies:action.payload
            }

            break;
            default:return state;

    }
}
const store=createStore(reduce);
export default store;