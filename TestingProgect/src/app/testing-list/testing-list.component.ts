import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadQuestionService } from '../load-question.service';
import { ApiObject, AnswerObject, QuestionObject } from '../app.model';

@Component({
  selector: 'app-testing-list',
  templateUrl: './testing-list.component.html',
  styleUrls: ['./testing-list.component.scss']
})
export class TestingListComponent implements OnInit {
  questionObject;
  questionList: QuestionObject[];
  subscription: Subscription;
  selectedQuestion: QuestionObject;

  constructor(private loadQuestions: LoadQuestionService) { }

  ngOnInit() {
    this.loadQuestions.getQuestions().subscribe(result => {
      this.questionObject = result;
    });
  }

  getQuestions(): void {
    this.questionObject.results.forEach(element => {
      const correct_answer = element.correct_answer;
      const incorrect_answers = element.incorrect_answers;
      const answerList: AnswerObject[] = [
        { answer: correct_answer, correct: true },
        { answer: incorrect_answers[0], correct: false },
        { answer: incorrect_answers[1], correct: false },
        { answer: incorrect_answers[2], correct: false },
      ];
      const questionText = element.question;
      this.questionList.push({ question: questionText, answers: answerList });
    });
    this.selectedQuestion = this.questionList[0];
  }
}
