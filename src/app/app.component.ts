import { MediaMatcher } from '@angular/cdk/layout';
import { Component, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

constructor(private route: ActivatedRoute,){

}

}
