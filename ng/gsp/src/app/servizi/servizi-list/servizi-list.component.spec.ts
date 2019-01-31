import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiziListComponent } from './servizi-list.component';

describe('ServiziListComponent', () => {
  let component: ServiziListComponent;
  let fixture: ComponentFixture<ServiziListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiziListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiziListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
