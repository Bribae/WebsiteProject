import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from "@angular/router";
import { AppComponent } from './app.component';
import { NavigationComponent } from './Navigation/Navigation.component';
import { SignInComponent } from './sign-in/sign-in.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path:'signin', component: SignInComponent},
  {path: 'error', component: ErrorComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SignInComponent,
    ErrorComponent,
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
    MatInputModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
