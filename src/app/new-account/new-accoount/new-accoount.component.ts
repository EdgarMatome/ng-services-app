import { Component, EventEmitter } from '@angular/core';
import { AccountService } from 'src/app/accounts.service';
import { LogginService } from 'src/app/loggin.service';

@Component({
  selector: 'app-new-accoount',
  templateUrl: './new-accoount.component.html',
  styleUrls: ['./new-accoount.component.css'],
  // providers: [LogginService],
})
export class NewAccoountComponent {
  //  accountAdded = new EventEmitter<{ name: string; status: string }>();

  constructor(
    private logginService: LogginService,
    private accountsService: AccountService
  ) {
    this.accountsService.statusUpdated.subscribe(
      (status: string) => alert('New Status: ' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    // console.log('A server status changed, new status: ' + accountStatus);
    // this.logginService.logStatusChanged(accountStatus);
  }
}
