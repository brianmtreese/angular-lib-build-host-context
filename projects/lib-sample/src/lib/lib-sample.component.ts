import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-sample-component',
  template: `
  <h1>Hello, {{name}}</h1>
  <h2>The result:</h2>
  <code>
    <pre>.test-class-01[_nghost-hjq-c69]   .test-class-02.test-class-03[_ngcontent-hjq-c69],
.test-class-01   .test-class-02   .test-class-03[_nghost-hjq-c69]</pre>
  </code>
  `,
  styleUrls: [ './lib-sample.component.scss' ]
})
export class LibSampleComponent implements OnInit {
  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}
