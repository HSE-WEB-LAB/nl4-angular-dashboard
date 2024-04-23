import {Component, Input} from "@angular/core";


@Component({
  selector: 'nav-button',
  standalone: true,
  template: `
    <button
      [classList]="'navButton sideBarButton' + (isActive ? ' active' : '')"
      (click)="onClick()"
    >
      <div class="wrapper">
        @if (imgSrc){
          <div>
            <img [src]="imgSrc" alt="icon">
          </div>
        }

        <p class="buttonText">
          <ng-content />
        </p>
      </div>
    </button>
  `
})

export class NavbuttonComponent{
  @Input() onClick: () => any = () => {};
  @Input() isActive: boolean = false;
  @Input() imgSrc: string = '';
}
