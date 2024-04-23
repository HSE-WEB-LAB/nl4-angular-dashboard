import {
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild
} from "@angular/core";


@Component({
  selector: 'single-bar',
  standalone: true,
  template: `
    <div class="singleBarContainer">
      <div
        class="singleBar"
        #bar
      >
      </div>
      <div class="tooltip">
        {{ value }}
      </div>
    </div>
  `
})

export class SingleBarComponent implements AfterViewInit{
  @ViewChild('bar') bar: ElementRef<HTMLDivElement> | undefined
  @Input() value = 0
  @Input() maxValue = 210
  targetHeight = 0
  currentHeight = 0
  maxHeight = 210

  ngAfterViewInit() {
    this.targetHeight = this.value / this.maxValue * this.maxHeight;
    const interval = setInterval(() => {
      if(!this.bar) return;
      this.currentHeight += 2;
      this.bar.nativeElement.style.height = `${this.currentHeight}px`
      if(this.currentHeight >= this.targetHeight) {
        clearInterval(interval);
        if(!this.bar) return;
        this.currentHeight = this.targetHeight;
        this.bar.nativeElement.style.height = `${this.currentHeight}px`
      }
    }, 4);
  }
}
