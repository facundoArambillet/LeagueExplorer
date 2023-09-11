import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ItemsComponent } from './components/items/items.component';
import { ItemCardsComponent } from './components/item-cards/item-cards.component';
import { ItemCardSectionComponent } from './components/item-card-section/item-card-section.component';
import { ItemCardSectionImageComponent } from './components/item-card-section-image/item-card-section-image.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { ChampionsComponent } from './components/champions/champions.component';
import { ChampionCardsComponent } from './components/champion-cards/champion-cards.component';
import { ChampionCardSectionComponent } from './components/champion-card-section/champion-card-section.component';
import { ChampionCardSectionImageComponent } from './components/champion-card-section-image/champion-card-section-image.component';
import { ChampionDetailComponent } from './components/champion-detail/champion-detail.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemsComponent,
    ItemCardsComponent,
    ItemCardSectionComponent,
    ItemCardSectionImageComponent,
    ItemDetailComponent,
    ChampionsComponent,
    ChampionCardsComponent,
    ChampionCardSectionComponent,
    ChampionCardSectionImageComponent,
    ChampionDetailComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
