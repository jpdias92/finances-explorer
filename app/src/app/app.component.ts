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
      route: 'dashboard'
    },
    {
      displayName: 'Movimentos',
      iconName: 'euro_symbol',
      route: 'movements'
    },
    {
      displayName: 'Membros',
      iconName: 'group',
      route: 'members'
    },
    {
      displayName: 'Contribuições',
      iconName: 'supervised_user_circle',
      route: ''
    },
    {
      displayName: 'Backoffice',
      iconName: 'settings_applications',
      children: [
        {
          displayName: 'Categorias de Movimentos',
          iconName: 'settings_applications',
          route: 'rules'
        },
        {
          displayName: 'Nacionalidades',
          iconName: 'settings_applications',
          route: 'rules'
        }
      ]
    }
  ];

  constructor(private navService: SideNavMenuService) {
  }

  ngAfterViewInit() {
    this.navService.sideNav = this.sideNav;
  }
}
