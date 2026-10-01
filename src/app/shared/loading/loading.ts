import { Component, inject } from '@angular/core';
import { LoadingService } from '../../core/services/loading.service';

@Component({
  imports: [],
  selector: 'app-loading',
  styleUrl: './loading.scss',
  templateUrl: './loading.html',
})
export class Loading {

  private loadingService = inject(LoadingService);

  loading = this.loadingService.loading;
}
