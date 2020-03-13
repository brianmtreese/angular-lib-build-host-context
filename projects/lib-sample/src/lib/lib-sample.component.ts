import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-sample-component',
  templateUrl: './lib-sample.component.html',
  styleUrls: [ './lib-sample.component.scss' ]
})
export class LibSampleComponent implements OnInit {
  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}
