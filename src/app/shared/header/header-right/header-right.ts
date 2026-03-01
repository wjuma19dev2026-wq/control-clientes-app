import { Component } from '@angular/core';
import { ProfileMenu } from './profile-menu/profile-menu';

@Component({
  selector: 'app-header-right',
  imports: [ProfileMenu],
  templateUrl: './header-right.html',
})
export class HeaderRight {}
