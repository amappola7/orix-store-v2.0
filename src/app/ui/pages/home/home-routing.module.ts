import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { ProductDetailsPageComponent } from "./components/product-details/product-details-page/product-details-page.component";
import { detailsPageGuard } from "src/app/guards/details-page.guard";

const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'details/:id',
    component: ProductDetailsPageComponent,
    canActivate: [detailsPageGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {};