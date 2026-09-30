import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private requests = 0;

  readonly loading = signal(false);

  show(): void {
    this.requests++;
    this.loading.set(true);
  }

  hide(): void {
    this.requests--;

    if (this.requests <= 0) {
      this.requests = 0;
      this.loading.set(false);
    }
  }

  reset(): void {
    this.requests = 0;
    this.loading.set(false);
  }
}