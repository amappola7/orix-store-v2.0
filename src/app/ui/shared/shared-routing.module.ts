import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

export const sharedRoutes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(sharedRoutes)],
  exports: [RouterModule]
})
export class SharedRoutingModule {}