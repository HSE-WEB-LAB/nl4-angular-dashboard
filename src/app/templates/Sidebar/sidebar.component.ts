import {Component} from "@angular/core";
import {NavTitleComponent} from "../../molecules/NavTitle/navTitle.component";
import icon from '../../atoms/Svg/dummy logo.svg'
import {SideBarButtonsComponent} from "../../molecules/SideBarButtons/sideBarButtons.component";

@Component({
  selector: 'sidebar-component',
  templateUrl: './sidebar.component.html',
  standalone: true,
  imports: [
    NavTitleComponent,
    SideBarButtonsComponent
  ]
})

export class SidebarComponent{
  navData = [
    {
      text: 'Dashboard',
      url: '/'
    },
    {
      text: 'Leaderboard',
      url: '/leaderboard'
    },
    {
      text: 'Order',
      url: '/order'
    },
    {
      text: 'Products',
      url: '/products'
    },
    {
      text: 'Sales Report',
      url: '/sales-report'
    },
  ]
  protected readonly icon = icon;
}
