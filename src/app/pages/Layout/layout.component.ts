import {Component} from "@angular/core";
import {RouterOutlet} from "@angular/router";
import {TopbarComponent} from "../../templates/Topbar/topbar.component";
import {SidebarComponent} from "../../templates/Sidebar/sidebar.component";


@Component({
  selector: 'layout-component',
  templateUrl: './layout.component.html',
  standalone: true,
  imports: [
    RouterOutlet,
    TopbarComponent,
    SidebarComponent
  ]
})

export class LayoutComponent {

}
