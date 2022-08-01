import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterQuizRoutingModule } from './master-quiz-routing.module';
import { MasterQuizComponent } from './master-quiz.component';
import { HostQuizComponent } from '../host-quiz/host-quiz.component';
import { JoinQuizComponent } from '../join-quiz/join-quiz.component';
import { QuizComponent } from '../quiz/quiz.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [MasterQuizComponent, QuizComponent, JoinQuizComponent, HostQuizComponent],
  imports: [
    CommonModule,
    MasterQuizRoutingModule,
    HttpClientModule
  ]
})
export class MasterQuizModule { }
