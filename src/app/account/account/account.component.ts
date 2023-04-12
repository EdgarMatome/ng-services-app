import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountService } from 'src/app/accounts.service';
import { LogginService } from 'src/app/loggin.service';
import * as tslib from 'tslib';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LogginService, AccountService],
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;

  constructor(
    private logginService: LogginService,
    private accountsService: AccountService
  ) {}

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    // console.log('A server status changed, new status: ' + status);
    this.logginService.logStatusChanged(status);
  }
}
