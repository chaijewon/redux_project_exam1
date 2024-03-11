import {FETCH_FOOD_LIST,FETCH_FOOD_DETAIL,FETCH_PAGE} from "./types";
import axios from "axios";

/*
                                 dispatch      dispatch
     component(React:View(jsp,html)) => action(함수) ==> Reducer(처리,갱신) ==> store(최종 결과값)
                                                                                |
                                                                               React에서 호출
     Front-End (MVC)
     1) react = JSP
     2) store = DispatcherServlet (데이터 송수신)
     3) action = @RequestMapping (사용자가 요청하는 내용에 대한 구분자)
     4) reducer == Model (데이터 관리 = 요청한 데이터 읽기.쓰기)
     5) state = request
          요청 (.do)
     JSP ========== DispatcherServlet ====> @RequestMapping(Model) ===> DAO ===> request
     React  ======   store  =====> action  =====> reducer ==== store
     React  ==>  이벤트 발생 ====> action({type,payload}) === reducer ==> store
     reducer에서 state갱신 ==> re-rendering ==> 화면 변경
     React(View) : 화면 출력  ==> View
     =======================================
     action : 요청을 받는다
     reducer : 요청 처리 => 데이터 갱신
                            ==> Model
     =======================================
     store : 처리된 데이터 저장
                            ==> Controller
     =======================================
     목적 : 분산 (여러명이 동시에 개발)
           유지 보수의 목적
           = 메소드 , 클래스
           = 퍼블리셔 : HTML,CSS (화면 제작)
           = Front-End : JavaScript
                         NodeJS / VueJS / Jquery / ReactJS / NextJS
           = Back-End : Database (Oracle,MySQL) / JSP / Java / Spring / Spring-Boot
           = Full-Stack : Front+Back

           @RequestMapping("list.do")
           public String list()
           {
              구현
           }
 */
export const fetchFoodList=(page)=>dispatch=>{
    axios.get('http://localhost/food/list_react',{
        params:{
            page:page
        }
        //                               foodReducer
    }).then((response)=>dispatch({
       type:FETCH_FOOD_LIST,
       payload:response.data
    }))
}
export const fetchPage=()=>dispatch=>{
    axios.get('http://localhost/food/food_totalpage_react')
        .then((response)=>dispatch({
            type:FETCH_PAGE,
            payload:response.data
        }))
}

export const fetchDetail=(fno)=>dispatch=>{
    axios.get('http://localhost/food/food_detail_react',{
        params:{
            fno:fno
        }
    }).then(response=>dispatch({
        type:FETCH_FOOD_DETAIL,
        payload:response.data
    }))
}