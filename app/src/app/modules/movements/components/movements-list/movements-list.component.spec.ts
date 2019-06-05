import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { MaterialModule } from '../../../../infrastructure/material/material.module';

import { MovementsListComponent } from './movements-list.component';
import { MovementsService } from '../../services/movements.service';
import { NotificationComponent } from '../../../../shared/notification/notification.component';

class MockMovementsService {
}

class MockNotificationComponent {
}

describe('MovementsListComponent', () => {
  let component: MovementsListComponent;
  let fixture: ComponentFixture<MovementsListComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        BrowserAnimationsModule,
        RouterTestingModule
       ],
      declarations: [ MovementsListComponent ],
      providers:[
        { provide: MovementsService, useClass: MockMovementsService },
        { provide: NotificationComponent, useValue: MockNotificationComponent }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovementsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
