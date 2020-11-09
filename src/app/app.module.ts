import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { DadJokeService } from './dadjoke.service';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [DadJokeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
