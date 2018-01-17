# IonicDependencySwapExample
An example of swapping dependency from real to mock with a simple boolean change

To see in action.  Run on either a real device of emulated device...

> ionic emaulate android --livereload

Within the app.module.ts file change the runForReal variable from false to true.

When you use the app you will see the source of the image changes from a mock source to a native implementation.

This is what you need to do if using custom plugins which developing within a web browser.
