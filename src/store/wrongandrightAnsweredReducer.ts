import { Tquestions } from "../types/types";

export const ADD_WRONG_ANSWER = "answeredQ/wrongQ";
export const RESET_WRONG_ANSWER = "answeredQ/reset";

export function trackwronglyansweredquestion(question: Tquestions) {
  return { type: ADD_WRONG_ANSWER, payload: question };
}

export function resetwronglyansweredquestion() {
  return { type: RESET_WRONG_ANSWER };
}
export default function trackqnswerReducer(
  state: Array<Tquestions> = [],
  action: { type: string; payload: Tquestions }
) {
  switch (action.type) {
    case ADD_WRONG_ANSWER:
      return [...state, { ...action.payload }];

    case RESET_WRONG_ANSWER:
      return [];

    default:
      return state;
  }
}
