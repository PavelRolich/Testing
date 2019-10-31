import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ApiObject } from './app.model';

@Injectable({
  providedIn: 'root'
})
export class LoadQuestionService {
  apiHost = 'https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple';
  question: Observable<ApiObject>;
  questionObject: ApiObject;
  subscription: Subscription;

  constructor(private http: HttpClient) {
    this.question = this.http.get(this.apiHost).pipe(map((localQuestion: ApiObject) => localQuestion));
  }

  getQuestions(): Observable<ApiObject> {
    // return this.question;
    return this.http.get<ApiObject>(this.apiHost).pipe(
      tap((localQuestion: ApiObject) => localQuestion));
  }
}
