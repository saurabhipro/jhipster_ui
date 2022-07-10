import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'state',
        data: { pageTitle: 'jhipsterApp.state.home.title' },
        loadChildren: () => import('./state/state.module').then(m => m.StateModule),
      },
      {
        path: 'district',
        data: { pageTitle: 'jhipsterApp.district.home.title' },
        loadChildren: () => import('./district/district.module').then(m => m.DistrictModule),
      },
      {
        path: 'sub-district',
        data: { pageTitle: 'jhipsterApp.subDistrict.home.title' },
        loadChildren: () => import('./sub-district/sub-district.module').then(m => m.SubDistrictModule),
      },
      {
        path: 'village',
        data: { pageTitle: 'jhipsterApp.village.home.title' },
        loadChildren: () => import('./village/village.module').then(m => m.VillageModule),
      },
      {
        path: 'unit',
        data: { pageTitle: 'jhipsterApp.unit.home.title' },
        loadChildren: () => import('./unit/unit.module').then(m => m.UnitModule),
      },
      {
        path: 'land-type',
        data: { pageTitle: 'jhipsterApp.landType.home.title' },
        loadChildren: () => import('./land-type/land-type.module').then(m => m.LandTypeModule),
      },
      {
        path: 'land',
        data: { pageTitle: 'jhipsterApp.land.home.title' },
        loadChildren: () => import('./land/land.module').then(m => m.LandModule),
      },
      {
        path: 'project',
        data: { pageTitle: 'jhipsterApp.project.home.title' },
        loadChildren: () => import('./project/project.module').then(m => m.ProjectModule),
      },
      {
        path: 'project-status-history',
        data: { pageTitle: 'jhipsterApp.projectStatusHistory.home.title' },
        loadChildren: () => import('./project-status-history/project-status-history.module').then(m => m.ProjectStatusHistoryModule),
      },
      {
        path: 'project-land',
        data: { pageTitle: 'jhipsterApp.projectLand.home.title' },
        loadChildren: () => import('./project-land/project-land.module').then(m => m.ProjectLandModule),
      },
      {
        path: 'notification-template',
        data: { pageTitle: 'jhipsterApp.notificationTemplate.home.title' },
        loadChildren: () => import('./notification-template/notification-template.module').then(m => m.NotificationTemplateModule),
      },
      {
        path: 'public-notification',
        data: { pageTitle: 'jhipsterApp.publicNotification.home.title' },
        loadChildren: () => import('./public-notification/public-notification.module').then(m => m.PublicNotificationModule),
      },
      {
        path: 'bank',
        data: { pageTitle: 'jhipsterApp.bank.home.title' },
        loadChildren: () => import('./bank/bank.module').then(m => m.BankModule),
      },
      {
        path: 'bank-branch',
        data: { pageTitle: 'jhipsterApp.bankBranch.home.title' },
        loadChildren: () => import('./bank-branch/bank-branch.module').then(m => m.BankBranchModule),
      },
      {
        path: 'citizen',
        data: { pageTitle: 'jhipsterApp.citizen.home.title' },
        loadChildren: () => import('./citizen/citizen.module').then(m => m.CitizenModule),
      },
      {
        path: 'khatedar',
        data: { pageTitle: 'jhipsterApp.khatedar.home.title' },
        loadChildren: () => import('./khatedar/khatedar.module').then(m => m.KhatedarModule),
      },
      {
        path: 'land-compensation',
        data: { pageTitle: 'jhipsterApp.landCompensation.home.title' },
        loadChildren: () => import('./land-compensation/land-compensation.module').then(m => m.LandCompensationModule),
      },
      {
        path: 'payment-advice',
        data: { pageTitle: 'jhipsterApp.paymentAdvice.home.title' },
        loadChildren: () => import('./payment-advice/payment-advice.module').then(m => m.PaymentAdviceModule),
      },
      {
        path: 'survey',
        data: { pageTitle: 'jhipsterApp.survey.home.title' },
        loadChildren: () => import('./survey/survey.module').then(m => m.SurveyModule),
      },
      {
        path: 'notice-status',
        data: { pageTitle: 'jhipsterApp.noticeStatus.home.title' },
        loadChildren: () => import('./notice-status/notice-status.module').then(m => m.NoticeStatusModule),
      },
      {
        path: 'transaction-history',
        data: { pageTitle: 'jhipsterApp.transactionHistory.home.title' },
        loadChildren: () => import('./transaction-history/transaction-history.module').then(m => m.TransactionHistoryModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}