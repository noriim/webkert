import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordaddComponent } from './recordadd.component';

describe('RecordaddComponent', () => {
  let component: RecordaddComponent;
  let fixture: ComponentFixture<RecordaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordaddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
