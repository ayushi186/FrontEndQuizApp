import { Tquestions } from "../types/types";

export const ADD_CURRENT_SECTION_QUESTION = "section/addallQ";
// Action Creators
export function addcurrsecquestions(questions: Array<Tquestions>) {
  return { type: ADD_CURRENT_SECTION_QUESTION, payload: questions };
}

//Reducer
export default function answeredQuestionsReducer(
  state: Array<Tquestions> = [],
  action: { type: string; payload: Array<Tquestions> }
) {
  switch (action.type) {
    case ADD_CURRENT_SECTION_QUESTION:
      return [...state, { ...action.payload }];

    default:
      return state;
  }
}
