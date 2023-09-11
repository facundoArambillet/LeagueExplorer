import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionCardsComponent } from './champion-cards.component';

describe('ChampionCardsComponent', () => {
  let component: ChampionCardsComponent;
  let fixture: ComponentFixture<ChampionCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChampionCardsComponent]
    });
    fixture = TestBed.createComponent(ChampionCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
