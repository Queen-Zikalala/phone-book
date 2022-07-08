import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from '../../services/loader.service';
import { LoaderState } from './loaderState';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  private subscription: Subscription;
  public show = false;

  constructor(
    private readonly loaderService: LoaderService
  ) {
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
    this.subscription = this.loaderService.loaderState
      .subscribe((state: LoaderState) => {
        this.show = state.show;
        console.log('this.show',this.show)
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
