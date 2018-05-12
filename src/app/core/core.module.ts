import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './user/user.service';
import { BroadcastService } from './broadcast.service';
import { MobileService } from './mobile.service';

export function windowFactory() {
  return window;
}

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    UserService,
    BroadcastService,
    { provide: 'Window', useFactory: windowFactory },
    MobileService
  ]
})
export class CoreModule { }
