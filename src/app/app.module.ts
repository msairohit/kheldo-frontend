import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './kheldo/home/home.component';
import { HeaderComponent } from './kheldo/header/header.component';
import { ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CardComponent } from './card/card.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GamesComponent } from './games/games.component';
import { QuizComponent } from './quiz/quiz.component';
import { JoinQuizComponent } from './join-quiz/join-quiz.component';
import { HostQuizComponent } from './host-quiz/host-quiz.component';

@NgModule({
  declarations: [AppComponent, TestComponent, HomeComponent, HeaderComponent, CardComponent, PageNotFoundComponent, GamesComponent, QuizComponent, JoinQuizComponent, HostQuizComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [HeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
