import { Component, inject, Inject } from '@angular/core';
import { ProductionControl } from '../production-control/production-control'
import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { DialogSelect } from '../dialog-select/dialog-select';

// JSON
import productionOrders from '../../assets/files/production-orders.json';

@Component({
  selector: 'app-terminal',
  imports: [ProductionControl, MatDialogModule],
  templateUrl: './terminal.html',
  styleUrl: './terminal.scss'
})

export class Terminal {

  readonly dialog: MatDialog = inject(MatDialog);

  productionOrders: any[] = productionOrders;

  setProductionOrder() {
    console.log('teste evento de clique')
    this.openSelectDialog();
  }

  openSelectDialog(): any {
    const dialogRef: MatDialogRef<DialogSelect, any> = this.dialog.open(DialogSelect, {
      width: '950px',
      panelClass: 'custom-dialog',
      data: {dialogTitle: 'Teste dialog', optionsList: this.productionOrders}
    });

    return new Promise((resolve) => {
      dialogRef.afterClosed().subscribe((result) => {
        resolve(result);
      })
    })
  }
}
