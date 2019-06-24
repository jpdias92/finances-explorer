import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { MaterialModule } from '../../../../infrastructure/material/material.module';

import { MembersListComponent } from './members-list.component';
import { MembersService } from '../../services/members.service';
import { NotificationComponent } from '../../../../shared/notification/notification.component';

class MockMovementsService {
}

class MockNotificationComponent {
}

describe('MembersListComponent', () => {
  let component: MembersListComponent;
  let fixture: ComponentFixture<MembersListComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        BrowserAnimationsModule,
        RouterTestingModule
       ],
      declarations: [ MembersListComponent ],
      providers:[
        { provide: MembersService, useClass: MockMovementsService },
        { provide: NotificationComponent, useValue: MockNotificationComponent }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MembersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
