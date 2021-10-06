# Debugging gotchas

Use the setup from [here](https://reactnative.dev/docs/environment-setup)

## Running
As described above, Metro needs to be run from one terminal window, and the app from another.

Run Metro with

```npx react-native start```

Run the App with

```npx react-native run-ios```

or

```npx react-native run-android```

Metro takes about 15 seconds to start on a fast machine, be patient.


## Set default browser to chrome

To set the default browser to chrome from the command line, e.g. so that it is scriptable:

First install the brew package default browser


```brew install defaultbrowser```

Then change to Chrome

```defaultbrowser chrome```

Which will bring up a prompt to confirm.  If a script is written to invoke this then the script should account for this prompt, e.g. prior to launcing Metro or the app.

Then run Metro and debug

## Errors

### iOS Error: *Runtime is not ready for debugging - Make sure Metro is Running...*

Go to the Metro terminal window and press `r`

## Android Error: *Console Warning: Debugger and device times...*

When running Android emulator the following warning may be displayed:

![Screen Shot 2021-10-06 at 12 14 02 PM](https://user-images.githubusercontent.com/91456/136260170-f22115ac-d498-4487-b576-8b39ee90c4ab.png)

The suggestion of correcting the discrepancy by running:

```adb shell "date \`date + %m%d%H%M%Y.%S\`"```

does not work on MacOS, the correct fix is

`adb shell su root date $(date +%m%d%H%M%Y.%S)`

Which needs to be run in the application directory.  Restarting Metro is **not** required.  Double tap **R** in the Android simulator to reload.

## Videos

### iOS Simulator Debugging

*Hint: Zoom in a few levels (e.g. CMD+, CMD+, CMD+) to see in full resolution (1920 x 1200).  Alternatively, click the movie to show full size in new tab*

The following shows the terminals used to start Metro and the application, and the subsequent iPhone 13 simulator.

In the iPhone Simulator `Cmd + D` is pressed to show the Chrome browser window for debugging, brought in from lower right (previously configured as defaut using `defaultbrowser chrome`).  

Once the Chrome browser window is displayed the Chrome Developer tools are displayed using `⌘⌥I`.  

Finally, the navigation to the source code in the Chrome Developer tools is demonstrated.

![](https://user-images.githubusercontent.com/91456/136074173-6b332980-0206-43c4-a489-780731cb49f5.mov?s=200)



### Android Simulator Debugging

*Hint: Zoom in a few levels (e.g. CMD+, CMD+, CMD+) to see in full resolution (1920 x 1200).  Alternatively, click the movie to show full size in new tab*

The following shows the terminals used to start Metro and the application, and the subsequent Pixel 3a simulator.

In the Pixel Simulator `Cmd + M` is pressed to show the development menu, then `Debug` ia selected to show the Chrome browser window for debugging, brought in from lower right (previously configured as defaut using `defaultbrowser chrome`).  

Once the Chrome browser window is displayed the Chrome Developer tools are displayed using `⌘⌥I`.  

Finally, the navigation to the source code in the Chrome Developer tools is demonstrated.

![](https://user-images.githubusercontent.com/91456/136262440-cfb204cd-30a0-46f2-af07-c2aa1e5c6b8a.mov?s=200)
