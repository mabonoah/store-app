import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {
  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  goBack() {
    this.location.back();
  }

}
