import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MatSnackBar} from '@angular/material';

import { MaterialModule } from '../../infrastructure/material/material.module';
import { NotificationComponent } from './notification.component';

class MockMatSnackBar {
}

describe('NotificationComponent', () => {
  let component: NotificationComponent;
  let fixture: ComponentFixture<NotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        MaterialModule
      ],
      declarations: [ NotificationComponent ],
      providers:[
        { provide: MatSnackBar, useValue: MockMatSnackBar }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
