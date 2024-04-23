import {Component} from "@angular/core";


@Component({
  selector: 'custom-title',
  standalone: true,
  template: `
    <h1>
      <ng-content />
    </h1>
    <style>
      h1{
        font-size: 36px;
      }
    </style>
  `
})

export class CustomTitleComponent{}
