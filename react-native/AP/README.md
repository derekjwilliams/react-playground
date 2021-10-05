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

### *Runtime is not ready for debugging - Make sure Metro is Running...*

Go to the Metro terminal window and press `r`

