import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account/account.component';
import { NewAccoountComponent } from './new-account/new-accoount/new-accoount.component';
import { AccountService } from './accounts.service';
import { LogginService } from './loggin.service';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccoountComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AccountService, LogginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
