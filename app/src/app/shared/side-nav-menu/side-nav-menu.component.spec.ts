import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from "@angular/router";

import { MaterialModule } from "../../infrastructure/material/material.module";

import { SideNavMenuComponent } from './side-nav-menu.component';
import { SideNavMenuService } from '../services/side-nav-menu.service';


class MockNavMenuService extends SideNavMenuService { 
  public sideNav: any;

  public closeNav() {
    this.sideNav.close();
  }

  public openNav() {
    this.sideNav.open();
  }
}

describe('SideNavMenuItemComponent', () => {
  let component: SideNavMenuComponent;
  let fixture: ComponentFixture<SideNavMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        MaterialModule
      ],
      declarations: [ SideNavMenuComponent ],
      providers: [
        { provide: SideNavMenuService, userValue: MockNavMenuService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavMenuComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate', () => {
      let component = fixture.componentInstance;
      let navigateSpy = spyOn((<any>component).router, 'navigate');

      component.router.navigate(['home']);
      expect(navigateSpy).toHaveBeenCalledWith(['home']);
    });
});
