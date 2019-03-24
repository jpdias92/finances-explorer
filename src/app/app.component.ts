import {
  Component,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
  AfterViewInit
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

import { SideNavMenu } from './shared/models/side-nav-menu.interface';
import { SideNavMenuService } from './shared/services/side-nav-menu.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {
  @ViewChild('sidenav') sideNav: MatSidenav;

  navItems: SideNavMenu[] = [
    {
      displayName: 'Dashboard',
      iconName: 'dashboard',
      route: ''
    },
    {
      displayName: 'Movimentos',
      iconName: 'library_add',
      route: 'movements'
    },
    {
      displayName: 'Contribuintes',
      iconName: 'insert_drive_file',
      route: 'donors'
    },
    {
      displayName: 'Gastos',
      iconName: 'settings_applications',
      children: [
        {
          displayName: 'Aqui não há nada',
          iconName: 'settings_applications',
          route: 'rules'
        }
      ]
    },
    {
      displayName: 'Donativos',
      iconName: 'supervised_user_circle',
      route: ''
    },
    {
      displayName: 'Case Management',
      iconName: 'assignment',
      route: ''
    }
  ];

  constructor(private navService: SideNavMenuService) {
  }

  ngAfterViewInit() {
    this.navService.sideNav = this.sideNav;
  }
}
