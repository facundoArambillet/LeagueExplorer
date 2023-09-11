import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionCardSectionComponent } from './champion-card-section.component';

describe('ChampionCardSectionComponent', () => {
  let component: ChampionCardSectionComponent;
  let fixture: ComponentFixture<ChampionCardSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChampionCardSectionComponent]
    });
    fixture = TestBed.createComponent(ChampionCardSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
