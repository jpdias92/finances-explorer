import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class SideNavMenuService {
  public sideNav: any;

  constructor() {
  }

  public closeNav() {
    this.sideNav.close();
  }

  public openNav() {
    this.sideNav.open();
  }
}
