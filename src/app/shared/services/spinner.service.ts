import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  loading: boolean = false;

  constructor() { }

  show() {
    this.loading = true;
  }

  hide() {
    this.loading = false;
  }
}
