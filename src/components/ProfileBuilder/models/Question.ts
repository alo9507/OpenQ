import QuestionCardType from "../QuestionCard/QuestionCardType";
import Answer from "./Answer";
import { LabelCategory } from "../../../models";

interface Question {
  type: QuestionCardType;
  matchCategory: LabelCategory;
  question: string;
  answers: Answer[];
}

export default Question;
