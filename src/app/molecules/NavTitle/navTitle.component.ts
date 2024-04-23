import {Component, Input} from "@angular/core";
import {SvgviewComponent} from "../../atoms/SvgView/svgview.component";


@Component({
  selector: 'nav-title',
  standalone: true,
  imports: [
    SvgviewComponent
  ],
  template: `
    <div class="navTitle">
      <svg-view
        [svgUrl]="svgIcon"
        [className]="'navSvg'"
      />
      <h1>
        {{ titleText }}
      </h1>
    </div>
  `
})

export class NavTitleComponent{
  @Input() titleText = ''
  @Input() svgIcon = ''
}
