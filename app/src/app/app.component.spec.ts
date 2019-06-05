import { TestBed, async, ComponentFixture, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './infrastructure/material/material.module';
import { SharedModule } from './shared/shared.module';

import { SideNavMenuService } from './shared/services/side-nav-menu.service';

class MockSideNavMenuService extends SideNavMenuService {
  public sideNav: any;

  public closeNav() {
    this.sideNav.close();
  }

  public openNav() {
    this.sideNav.open();
  }
}


describe('AppComponent', () => {
  let appComponent: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let testBedNavService: SideNavMenuService;
  let navService: SideNavMenuService;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        MaterialModule,
        SharedModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        SideNavMenuService
      ]
    });

    // Configure the component with another set of Providers
    TestBed.overrideComponent(
      AppComponent,
      {set: {providers: [{provide: SideNavMenuService, useClass: MockSideNavMenuService}]}}
    );

    // create component and test fixture
    fixture = TestBed.createComponent(AppComponent);

    // get test component from the fixture
    appComponent = fixture.componentInstance;

    // SideNavMenuService provided to the TestBed
    testBedNavService = TestBed.get(SideNavMenuService);

    // SideNavMenuService provided by Component, (should return MockSideNavMenuService)
    navService = fixture.debugElement.injector.get(SideNavMenuService);

  }));

  it('should create the app', async(() => {
    expect(appComponent).toBeTruthy();
  }));

  it('Service injected via inject(...) and TestBed.get(...) should be the same instance',
    inject([SideNavMenuService], (injectService: SideNavMenuService) => {
      expect(injectService).toBe(testBedNavService);
    })
  );

  it('Service injected via component should be and instance of MockNavMenuService', () => {
    expect(navService instanceof MockSideNavMenuService).toBeTruthy();
  });

  it(`Should have menu options`, async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app.navItems.length > 0).toBeTruthy();
  }));

  it('should render menu button tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#menu')).toBeTruthy();
  }));

  it('should render title span tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.title').textContent).toContain('Gestão de Finanças');
  }));
});
