import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCardSectionImageComponent } from './item-card-section-image.component';

describe('ItemCardSectionImageComponent', () => {
  let component: ItemCardSectionImageComponent;
  let fixture: ComponentFixture<ItemCardSectionImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemCardSectionImageComponent]
    });
    fixture = TestBed.createComponent(ItemCardSectionImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
