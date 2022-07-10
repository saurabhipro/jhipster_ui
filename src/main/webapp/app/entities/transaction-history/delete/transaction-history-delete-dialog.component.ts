import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ITransactionHistory } from '../transaction-history.model';
import { TransactionHistoryService } from '../service/transaction-history.service';

@Component({
  templateUrl: './transaction-history-delete-dialog.component.html',
})
export class TransactionHistoryDeleteDialogComponent {
  transactionHistory?: ITransactionHistory;

  constructor(protected transactionHistoryService: TransactionHistoryService, protected activeModal: NgbActiveModal) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.transactionHistoryService.delete(id).subscribe(() => {
      this.activeModal.close('deleted');
    });
  }
}
