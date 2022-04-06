import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from "@angular/router";
import { AppComponent } from './app.component';
import { NavigationComponent } from './Components/Navigation/Navigation.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { AdminLoginComponent } from './Components/admin-login/admin-login.component';
import { Message1Component } from './Components/messages/message1/message1.component';
import { HomeComponent } from './Components/home/home.component';
import { AdminHomeComponent } from './Components/admin-home/admin-home.component';
import { ReactiveFormsModule, FormsModule} from "@angular/forms";
import { Message2Component } from './Components/messages/message2/message2.component';
import { MousePuzzleComponent } from './Components/mouse-puzzle/mouse-puzzle.component';
import { SymbolPuzzleComponent } from './Components/symbol-puzzle/symbol-puzzle.component';
import { Error1Component } from './Components/errors/error1/error1.component';
import { Error2Component } from './Components/errors/error2/error2.component';
import { Error3Component } from './Components/errors/error3/error3.component';
import { TimedPuzzelComponent } from './Components/timed-puzzel/timed-puzzel.component';



const routes: Routes = [
  {path:'signin', component: SignInComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'adminlogin', component: AdminLoginComponent},
  {path: 'message/1', component: Message1Component},
  {path: '', component: HomeComponent},
  {path: 'adminhome', component: AdminHomeComponent},
  {path: 'message/2', component: Message2Component},
  {path: 'mouse', component: MousePuzzleComponent},
  {path: 'Symbol', component: SymbolPuzzleComponent},
  {path: 'error/1', component: Error1Component},
  {path: 'error/2', component: Error2Component},
  {path: 'error/3', component: Error3Component},
  {path: 'Time', component: TimedPuzzelComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SignInComponent,
    SignUpComponent,
    AdminLoginComponent,
    Message1Component,
    HomeComponent,
    AdminHomeComponent,
    Message2Component,
    MousePuzzleComponent,
    SymbolPuzzleComponent,
    Error1Component,
    Error2Component,
    Error3Component,
    TimedPuzzelComponent,

  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot(routes)],
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
