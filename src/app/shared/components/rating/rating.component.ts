import { Component, Input } from '@angular/core';

@Component({
  selector: 'rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {
  @Input() currentRate: number = 0;

  ariaValueText(current: number, max: number) {
    return `${current} out of ${max} hearts`;
  }

}
