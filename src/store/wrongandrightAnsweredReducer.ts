import { Tquestions } from "../components/QuestionComp";



 export const ADD_WRONG_ANSWER = 'answeredQ/wrongQ'

 export function trackwronglyansweredquestion(question: Tquestions){
    return { type: ADD_WRONG_ANSWER, payload: question }  
  }
export default function trackqnswerReducer(state: Array<Tquestions> = [] , action: { type: string; payload: Tquestions}) {
   debugger

    switch(action.type) {
      
      case ADD_WRONG_ANSWER : 
      console.log("from reducer" , state)
      return[ ...state , {...action.payload}]

      default: return state;
    }
  
  }