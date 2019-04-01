import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ChildRoutingModule } from "./child-routing.module";
import { FullLayoutComponent } from "../layouts/full-layout.component";
import { SidebarComponent } from "../layouts/sidebar/sidebar.component";
import { NavbarComponent } from "../layouts/navbar/navbar.component";
import { FooterComponent } from "../layouts/footer/footer.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { FormsComponent } from "./components/forms/forms.component";
import { ButtonsComponent } from "./components/buttons/buttons.component";
import { TablesComponent } from "./components/tables/tables.component";
import { TypographyComponent } from "./components/typography/typography.component";
import { IconsComponent } from "./components/icons/icons.component";
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
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [CommonModule, ChildRoutingModule, FormsModule, NgbModule.forRoot()],
  declarations: [
    FullLayoutComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    FormsComponent,
    ButtonsComponent,
    TablesComponent,
    TypographyComponent,
    IconsComponent,
    AlertsComponent,
    AccordionsComponent,
    BadgesComponent,
    ProgressbarComponent,
    BreadcrumbsComponent,
    PaginationComponent,
    DropdownComponent,
    TooltipsComponent,
    CarouselComponent,
    TabsComponent
  ]
})
export class ChildModule {}
