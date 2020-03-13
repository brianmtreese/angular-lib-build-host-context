import { Injectable, ɵɵdefineInjectable, Component, Input, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LibSampleService = /** @class */ (function () {
    function LibSampleService() {
    }
    LibSampleService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    LibSampleService.ctorParameters = function () { return []; };
    /** @nocollapse */ LibSampleService.ngInjectableDef = ɵɵdefineInjectable({ factory: function LibSampleService_Factory() { return new LibSampleService(); }, token: LibSampleService, providedIn: "root" });
    return LibSampleService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LibSampleComponent = /** @class */ (function () {
    function LibSampleComponent() {
    }
    /**
     * @return {?}
     */
    LibSampleComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    LibSampleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-sample-component',
                    template: "\n  <h1>Hello, {{name}}</h1>\n  <h2>The result:</h2>\n  <code>\n    <pre>.test-class-01[_nghost-hjq-c69]   .test-class-02.test-class-03[_ngcontent-hjq-c69],\n.test-class-01   .test-class-02   .test-class-03[_nghost-hjq-c69]</pre>\n  </code>\n  ",
                    styles: [":host-context(.test-class-01.test-class-02).test-class-03{color:red}pre{padding:1em;margin:0;border:2px solid red}"]
                }] }
    ];
    /** @nocollapse */
    LibSampleComponent.ctorParameters = function () { return []; };
    LibSampleComponent.propDecorators = {
        name: [{ type: Input }]
    };
    return LibSampleComponent;
}());
if (false) {
    /** @type {?} */
    LibSampleComponent.prototype.name;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LibSampleModule = /** @class */ (function () {
    function LibSampleModule() {
    }
    LibSampleModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [LibSampleComponent],
                    imports: [],
                    exports: [LibSampleComponent]
                },] }
    ];
    return LibSampleModule;
}());

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
