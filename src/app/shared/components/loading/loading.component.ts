import { Component, OnInit } from '@angular/core';
import { LoadingService } from './loading.service';

@Component({
  selector: 'ap-loading',
  templateUrl: './loading-component.html',
})
export class LoadingComponent implements OnInit {
  constructor(private loadingService: LoadingService) {}
  ngOnInit(): void {

  }
}
