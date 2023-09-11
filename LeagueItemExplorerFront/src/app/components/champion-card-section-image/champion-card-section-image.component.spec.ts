import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionCardSectionImageComponent } from './champion-card-section-image.component';

describe('ChampionCardSectionImageComponent', () => {
  let component: ChampionCardSectionImageComponent;
  let fixture: ComponentFixture<ChampionCardSectionImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChampionCardSectionImageComponent]
    });
    fixture = TestBed.createComponent(ChampionCardSectionImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
