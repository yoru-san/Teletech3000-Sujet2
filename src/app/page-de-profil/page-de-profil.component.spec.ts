import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDeProfilComponent } from './page-de-profil.component';

describe('PageDeProfilComponent', () => {
  let component: PageDeProfilComponent;
  let fixture: ComponentFixture<PageDeProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDeProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDeProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
