import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { HostQuizComponent } from './host-quiz/host-quiz.component';
import { JoinQuizComponent } from './join-quiz/join-quiz.component';
import { HomeComponent } from './kheldo/home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { QuizComponent } from './quiz/quiz.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  { path: 'test', component: TestComponent },
  { path: 'home', component: HomeComponent },
  { path: 'game1', component: TestComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'games', component: GamesComponent },
  //Need to add below routes for each Game like quiz.
  { path: 'games/quiz', component: QuizComponent },
  { path: 'games/quiz/how-to-play', component: QuizComponent },
  { path: 'games/quiz/join', component: JoinQuizComponent },
  { path: 'games/quiz/host', component: HostQuizComponent },

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
