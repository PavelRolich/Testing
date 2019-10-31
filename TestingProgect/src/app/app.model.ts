export interface ApiObject {
  response_code: number;
  results: [{
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
  }];
}
export interface AnswerObject {
  answer: string;
  correct: boolean;
}
export interface QuestionObject {
  question: string;
  answers: AnswerObject[];
}
