import {Component, Input} from "@angular/core";
import {NavbuttonComponent} from "../../atoms/NavButton/navbutton.component";


@Component({
  selector: 'side-bar-buttons',
  standalone: true,
  imports: [
    NavbuttonComponent
  ],
  template: `
    <div class="sideBarButtons">
      @for(nav of navData; track nav.url; let index = $index){
        <nav-button
          [isActive]="currentActive === index"
          (click)="changeCurrent(index, nav.url)"
        >
          {{ nav.text }}
        </nav-button>
      }

    </div>
    <style>
      .sideBarButtons{
        display: flex;
        flex-direction: column;
        gap: 30px;
      }
    </style>
  `
})

export class SideBarButtonsComponent {
  @Input() navData: any[] = []
  currentActive = 0

  changeCurrent(i: number, url: string) {
    this.currentActive = i;
    window.history.pushState({}, '', url);
  }
}
