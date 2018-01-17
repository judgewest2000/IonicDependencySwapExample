# IonicDependencySwapExample
An example of swapping dependency from real to mock with a simple boolean change

To see in action.  Run on either a real device of emulated device...

> ionic emulate android --livereload

Click on 'TAKE PHOTO', notice it loads the image immediately from a base64 string - refer to photo-taker.ts

Within the app.module.ts file change the runForReal variable from false to true.

Click on 'TAKE PHOTO' again... You are now using the native camera for its source.

This is what you need to do if you use custom plugins when developing within the web browser.


I would suggest NOT mocking native wrappers of plugins, instead have a provider level as the language of the plugin may change.
