import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillFormComponent } from './bill-form/bill-form.component';
import { BillDetailsComponent } from './bill-details/bill-details.component';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';

const routes: Routes = [
  { path: '', redirectTo: '/bill-form', pathMatch: 'full' },
  { path: 'bill-form', component: BillFormComponent },
  { path: 'bill-details/:id', component: BillDetailsComponent },
  { path: 'payment-history', component: PaymentHistoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
