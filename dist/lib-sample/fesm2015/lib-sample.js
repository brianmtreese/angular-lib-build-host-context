import { Injectable, ɵɵdefineInjectable, Component, Input, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LibSampleService {
    constructor() { }
}
LibSampleService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
LibSampleService.ctorParameters = () => [];
/** @nocollapse */ LibSampleService.ngInjectableDef = ɵɵdefineInjectable({ factory: function LibSampleService_Factory() { return new LibSampleService(); }, token: LibSampleService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LibSampleComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
LibSampleComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-sample-component',
                template: `
  <h1>Hello, {{name}}</h1>
  <h2>The result:</h2>
  <code>
    <pre>.test-class-01[_nghost-hjq-c69]   .test-class-02.test-class-03[_ngcontent-hjq-c69],
.test-class-01   .test-class-02   .test-class-03[_nghost-hjq-c69]</pre>
  </code>
  `,
                styles: [":host-context(.test-class-01.test-class-02).test-class-03{color:red}pre{padding:1em;margin:0;border:2px solid red}"]
            }] }
];
/** @nocollapse */
LibSampleComponent.ctorParameters = () => [];
LibSampleComponent.propDecorators = {
    name: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    LibSampleComponent.prototype.name;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LibSampleModule {
}
LibSampleModule.decorators = [
    { type: NgModule, args: [{
                declarations: [LibSampleComponent],
                imports: [],
                exports: [LibSampleComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { LibSampleComponent, LibSampleModule, LibSampleService };
//# sourceMappingURL=lib-sample.js.map
