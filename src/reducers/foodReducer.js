import {FETCH_FOOD_DETAIL, FETCH_FOOD_LIST, FETCH_PAGE,FETCH_RECIPE_PAGE,
    FETCH_RECIPE_COUNT,FETCH_RECIPE_DETAIL,FETCH_RECIPE_LIST} from "../actions/types";
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
    total:0,
    recipe_list:[],
    recipe_total:0,
    recipe_count:0,
    recipe_detail:{}
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
        case FETCH_RECIPE_LIST:
            return {
                ...state,
                recipe_list: action.payload
            }
        case FETCH_RECIPE_COUNT:
            return {
                ...state,
                recipe_count:action.payload
            }
        case FETCH_RECIPE_PAGE:
            return {
                ...state,
                recipe_total: action.payload
            }
        case FETCH_RECIPE_DETAIL:
            return {
                ...state,
                recipe_detail: action.payload
            }
        default:
            return state
    }
}

