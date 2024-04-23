import { Routes } from '@angular/router';
import {LayoutComponent} from "./pages/Layout/layout.component";
import {WidgetsComponent} from "./templates/DashboardWidgets/widgets.component";
import {MockComponent} from "./pages/Mock/mock.component";

export const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    {
      path: '',
      component: WidgetsComponent,
    },
    {
      path: 'leaderboard',
      component: MockComponent,
    },
    {
      path: 'order',
      component: MockComponent,
    },
    {
      path: 'products',
      component: MockComponent,
    },
    {
      path: 'sales-report',
      component: MockComponent,
    },
  ],
}];
