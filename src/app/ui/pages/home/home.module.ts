import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductDetailsPageComponent } from './components/product-details/product-details-page/product-details-page.component';
import { ProductDetailsCardComponent } from './components/product-details/product-details-card/product-details-card.component';
import { ProductListPageComponent } from './components/product-list/product-list-page/product-list-page.component';
import { ProductListCardComponent } from './components/product-list/product-list-card/product-list-card.component';
import { WelcomeBannerComponent } from './components/welcome-banner/welcome-banner.component';
import { SimilarProductsSectionComponent } from './components/product-details/similar-products-section/similar-products-section.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProductListPageComponent,
    ProductListCardComponent,
    ProductDetailsPageComponent,
    ProductDetailsCardComponent,
    WelcomeBannerComponent,
    SimilarProductsSectionComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
