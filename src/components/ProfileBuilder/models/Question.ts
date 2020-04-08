import QuestionCardType from "../QuestionCard/QuestionCardType";
import Answer from "./Answer";
import { MatchCategory } from "../../../models";

interface Question {
  type: QuestionCardType;
  matchCategory: MatchCategory;
  question: string;
  answers: Answer[];
}

export default Question;
