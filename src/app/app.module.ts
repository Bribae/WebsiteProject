import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from "@angular/router";
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SignInComponent } from './sign-in/sign-in.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  {path:'signin', component: SignInComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SignInComponent,

  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot(routes)],
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
