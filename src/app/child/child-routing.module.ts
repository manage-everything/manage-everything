import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FullLayoutComponent } from "../layouts/full-layout.component";
import { FormsComponent } from "./components/forms/forms.component";
import { ButtonsComponent } from "./components/buttons/buttons.component";
import { TablesComponent } from "./components/tables/tables.component";
import { IconsComponent } from "./components/icons/icons.component";
import { TypographyComponent } from "./components/typography/typography.component";
import { AlertsComponent } from "./components/alerts/alerts.component";
import { AccordionsComponent } from "./components/accordions/accordions.component";
import { BadgesComponent } from "./components/badges/badges.component";
import { ProgressbarComponent } from "./components/progressbar/progressbar.component";
import { BreadcrumbsComponent } from "./components/breadcrumbs/breadcrumbs.component";
import { PaginationComponent } from "./components/pagination/pagination.component";
import { DropdownComponent } from "./components/dropdown/dropdown.component";
import { TooltipsComponent } from "./components/tooltips/tooltips.component";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { TabsComponent } from "./components/tabs/tabs.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: "",
    component: FullLayoutComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "forms", component: FormsComponent },
      { path: "buttons", component: ButtonsComponent },
      { path: "tables", component: TablesComponent },
      { path: "icons", component: IconsComponent },
      { path: "typography", component: TypographyComponent },
      { path: "alerts", component: AlertsComponent },
      { path: "accordions", component: AccordionsComponent },
      { path: "badges", component: BadgesComponent },
      { path: "progressbar", component: ProgressbarComponent },
      { path: "breadcrumbs", component: BreadcrumbsComponent },
      { path: "pagination", component: PaginationComponent },
      { path: "dropdowns", component: DropdownComponent },
      { path: "tooltips", component: TooltipsComponent },
      { path: "carousel", component: CarouselComponent },
      { path: "tabs", component: TabsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildRoutingModule {}
