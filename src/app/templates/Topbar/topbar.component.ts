import {Component} from "@angular/core";
import {CustomTitleComponent} from "../../atoms/CustomTitle/customTitle.component";


@Component({
  selector: 'topbar-component',
  templateUrl: './topbar.component.html',
  standalone: true,
  imports: [
    CustomTitleComponent
  ]
})

export class TopbarComponent{
  searchString = ''
}
