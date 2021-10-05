# Debugging gotchas

Use the setup from [here](https://reactnative.dev/docs/environment-setup)

As described above, Metro needs to be run from one terminal window, and the app from another.

Run Metro with

```npx react-native start```

Run the App wit

```npx react-native run-ios```

or

```npx react-native run-android```


## Set default browser to chrome

To set the default browser to chrome from the command line, e.g. so that it is scriptable:

First install the brew package default browser


```brew install defaultbrowser```

Then change to Chrome

```defaultbrowser chrome```

Which will bring up a prompt to confirm.  If a script is written to invoke this then the script should account for this prompt, e.g. prior to launcing Metro or the app.

Then run Metro and debug

## Error "Metro Not Running"

Go to the Metro terminal window and press `r`

