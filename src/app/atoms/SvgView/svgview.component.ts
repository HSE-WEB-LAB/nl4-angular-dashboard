import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from "@angular/core";

@Component({
  selector: 'svg-view',
  standalone: true,
  template: `
    <div
      #svgContainer
      [class]="className"
    >
    </div>
  `
})

export class SvgviewComponent implements AfterViewInit{
  @ViewChild('svgContainer') svgContainer: ElementRef<HTMLDivElement> | undefined;
  @Input() className = '';
  @Input() svgUrl = '';

  ngAfterViewInit() {
    const svgDom = (new DOMParser()).parseFromString(this.svgUrl, 'text/html')
    svgDom.body.children[0].classList.add(this.className)
    if(!this.svgContainer) return;
    this.svgContainer.nativeElement.appendChild(svgDom.body.children[0])
  }
}
