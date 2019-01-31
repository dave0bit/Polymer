import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChisiamoListComponent } from './chisiamo-list.component';

describe('ChisiamoListComponent', () => {
  let component: ChisiamoListComponent;
  let fixture: ComponentFixture<ChisiamoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChisiamoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChisiamoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
