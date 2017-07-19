import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { AuthenticationModule } from '../authentication/authentication.module';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ShellComponent } from './shell.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    AuthenticationModule,
    SharedModule
  ],
  declarations: [HeaderComponent, SidebarComponent, ShellComponent],
  exports: [ShellComponent]
})
export class LayoutModule { }
