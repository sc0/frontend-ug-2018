import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchesSearchComponent } from './watches-search.component';

describe('WatchesSearchComponent', () => {
  let component: WatchesSearchComponent;
  let fixture: ComponentFixture<WatchesSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchesSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
