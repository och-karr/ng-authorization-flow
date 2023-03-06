import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LoggedInComponent } from './components/logged-in/logged-in.component';
import { CompleteProfileComponent } from './components/complete-profile/complete-profile.component';
import { UserServiceModule } from './services/user.service-module';
import { LoginComponentModule } from './components/login/login.component-module';
import { LoggedInComponentModule } from './components/logged-in/logged-in.component-module';
import { CompleteProfileComponentModule } from './components/complete-profile/complete-profile.component-module';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'login', component: LoginComponent },
    { path: 'logged-in', component: LoggedInComponent },
    { path: 'complete-profile', component: CompleteProfileComponent }
  ]), UserServiceModule, LoginComponentModule, LoggedInComponentModule, CompleteProfileComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
