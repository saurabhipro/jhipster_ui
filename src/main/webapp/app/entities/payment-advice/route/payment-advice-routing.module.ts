import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';
import { PaymentAdviceComponent } from '../list/payment-advice.component';
import { PaymentAdviceDetailComponent } from '../detail/payment-advice-detail.component';
import { PaymentAdviceUpdateComponent } from '../update/payment-advice-update.component';
import { PaymentAdviceRoutingResolveService } from './payment-advice-routing-resolve.service';

const paymentAdviceRoute: Routes = [
  {
    path: '',
    component: PaymentAdviceComponent,
    data: {
      defaultSort: 'id,asc',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: PaymentAdviceDetailComponent,
    resolve: {
      paymentAdvice: PaymentAdviceRoutingResolveService,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: PaymentAdviceUpdateComponent,
    resolve: {
      paymentAdvice: PaymentAdviceRoutingResolveService,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: PaymentAdviceUpdateComponent,
    resolve: {
      paymentAdvice: PaymentAdviceRoutingResolveService,
    },
    canActivate: [UserRouteAccessService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(paymentAdviceRoute)],
  exports: [RouterModule],
})
export class PaymentAdviceRoutingModule {}
