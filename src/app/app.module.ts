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
import { ErrorComponent } from './Components/error/error.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { AdminLoginComponent } from './Components/admin-login/admin-login.component';
import { Message1Component } from './Components/messages/message1/message1.component';
import { HomeComponent } from './Components/home/home.component';
import { AdminHomeComponent } from './Components/admin-home/admin-home.component';
import { ReactiveFormsModule, FormsModule} from "@angular/forms";
import { Message2Component } from './Components/messages/message2/message2.component';
import { MousePuzzleComponent } from './Components/mouse-puzzle/mouse-puzzle.component';
import { SymbolPuzzleComponent } from './Components/symbol-puzzle/symbol-puzzle.component';



const routes: Routes = [
  {path:'signin', component: SignInComponent},
  {path: 'error', component: ErrorComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'adminlogin', component: AdminLoginComponent},
  {path: 'message/1', component: Message1Component},
  {path: '', component: HomeComponent},
  {path: 'adminhome', component: AdminHomeComponent},
  {path: 'message/2', component: Message2Component},
  {path: 'mouse', component: MousePuzzleComponent},
  {path: 'Symbol', component: SymbolPuzzleComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SignInComponent,
    ErrorComponent,
    SignUpComponent,
    AdminLoginComponent,
    Message1Component,
    HomeComponent,
    AdminHomeComponent,
    Message2Component,
    MousePuzzleComponent,
    SymbolPuzzleComponent,

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
