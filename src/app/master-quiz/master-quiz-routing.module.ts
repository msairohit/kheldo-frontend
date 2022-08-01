import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HostQuizComponent } from '../host-quiz/host-quiz.component';
import { JoinQuizComponent } from '../join-quiz/join-quiz.component';
import { QuizComponent } from '../quiz/quiz.component';

import { MasterQuizComponent } from './master-quiz.component';

const routes: Routes = [
  { path: '', component: QuizComponent },
  { path: 'how-to-play', component: QuizComponent },
  { path: 'join', component: JoinQuizComponent },
  { path: 'host', component: HostQuizComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterQuizRoutingModule { }
