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

## Android Error: *Console Warning: Debugger and device times...

The message continues 

```corect this by running adb shell "date \`date + %m%d%H%M%Y.%S\`"*```

This correction does not work on MacOS, the correct fix is

`adb shell su root date $(date +%m%d%H%M%Y.%S)`

Which needs to be run in the application directory.  Restarting Metro is **not** required.  Double tap **R** in the Android simulator to reload.

## Videos

### iOS Simulator Debugging

*Hint: Zoom in a few levels (e.g. CMD+, CMD+, CMD+) to see in full resolution (1920 x 1200).*

The following shows the terminals used to start Metro and the application, and the subsequent iPhone 13 simulator.

In the iPhone Simulator `Cmd + D` is pressed to show the Chrome browser window for debugging, brought in from lower right (previously configured as defaut using `defaultbrowser chrome`).  

Once the Chrome browser window is displayed the Chrome Developer tools are displayed using `⌘⌥I`.  

Finally, the navigation to the source code in the Chrome Developer tools is demonstrated.

https://user-images.githubusercontent.com/91456/136074173-6b332980-0206-43c4-a489-780731cb49f5.mov


