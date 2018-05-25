import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchesDetailsComponent } from './watches-details.component';

describe('WatchesDetailsComponent', () => {
  let component: WatchesDetailsComponent;
  let fixture: ComponentFixture<WatchesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
