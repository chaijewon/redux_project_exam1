import {FETCH_FOOD_DETAIL, FETCH_FOOD_LIST, FETCH_PAGE} from "../actions/types";
/*
       board
       news
       goods
       food
       recipe
 */
const initialState={
    food_list:[],
    food_detail:{},
    total:0
}
/*
    let arr=[1,2,3,4,5]
    let k=...arr
 */
export default function (state=initialState,action){
    console.log("reducer function call... action()"+action)

    switch (action.type)
    {

        case FETCH_FOOD_LIST:
            return {
                ...state,
                food_list: action.payload
            }
        case FETCH_FOOD_DETAIL:
            return {
                ...state,
                food_detail: action.payload
            }
        case FETCH_PAGE:
            return {
                ...state,
                total: action.payload
            }
        default:
            return state
    }
}

