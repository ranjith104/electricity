import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { QuickPayComponent } from './quick-pay/quick-pay.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


import { WelcomeComponent } from './welcome/welcome.component';

import { EmpDasboardCompComponent } from './crud/emp-dasboard-comp/emp-dasboard-comp.component';
import { EmpAddCompComponent } from './crud/emp-add-comp/emp-add-comp.component';
import { EmpEditCompComponent } from './crud/emp-edit-comp/emp-edit-comp.component';
import { ConsumerAccountComponent } from './consumer-account/consumer-account.component';










export const routes: Routes = [
{path:"",component:LoginComponent},
{path:"login",component:LoginComponent},
{path:"forgot",component:ForgotPasswordComponent},

{path:"maindash",component:MainDashboardComponent},
{path:"quickpay",component:QuickPayComponent},
{path:"createuser",component:CreateUserComponent},
{path:"terms",component:TermsAndConditionsComponent},
{path:"privacy",component:PrivacyPolicyComponent},
{path:"contact",component:ContactUsComponent},


{path:"acc",component:ConsumerAccountComponent},
{path:"dashboard",component:EmpDasboardCompComponent},
        {path:"empadd",component:EmpAddCompComponent},
        {path:"edit/:id",component:EmpEditCompComponent},



{path:"welcome",component:WelcomeComponent},









];
