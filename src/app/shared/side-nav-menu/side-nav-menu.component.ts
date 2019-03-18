import { Component, HostBinding, Input, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { SideNavMenu } from '../models/side-nav-menu.interface';
import { SideNavMenuService } from '../services/side-nav-menu.service';



@Component({
  selector: 'side-nav-menu',
  templateUrl: './side-nav-menu.component.html',
  styleUrls: ['./side-nav-menu.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({transform: 'rotate(0deg)'})),
      state('expanded', style({transform: 'rotate(180deg)'})),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ]
})
export class SideNavMenuComponent {
  expanded: boolean;
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  @Input() item: SideNavMenu;
  @Input() depth: number;

  constructor(public navMenuService: SideNavMenuService, public router: Router) {
    if (this.depth === undefined) {
      this.depth = 0;
    }
  }

  onItemSelected(item: SideNavMenu) {
    if (!item.children || !item.children.length) {
      this.router.navigate([item.route]);
      this.navMenuService.closeNav();
    }
    if (item.children && item.children.length) {
      this.expanded = !this.expanded;
    }
  }
}
