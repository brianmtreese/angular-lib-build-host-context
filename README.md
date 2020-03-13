# Angular Lib Host Context Issue Example

This project was created to present a bug in Angular style emulation using `:host-context`. When a component in a library that is built separately from the rest of the application, using: `ng build lib-sample`, the styles for the `:host-context` selector are inappropriately emulated.

When it's not pre-built and complied with the rest of the Angular application, the emulation works correctly.

## Steps

1. Clone the project down
2. Install dependencies: `npm i`
3. Build the sample library: `ng build lib-sample`
4. Serve the app and observe the issues: `ng serve`
