'use strict'

module.exports = {
  extends: 'eslint:recommended',

  env: {
    es6: true, // enable all ECMAScript 6 features except for modules
    node: true // Node.js global variables and Node.js-specific rules
  },
  rules: {
    'camelcase': 0,
    'comma-dangle': 0,
    'comma-style': [2, 'last'],
    'consistent-return': 0,
    'curly': [2, 'all'],
    'dot-notation': 0,
    'eol-last': 2,
    'eqeqeq': [2, 'allow-null'],
    'global-strict': 0,
    'handle-callback-err': 1,
    'indent': [2, 2], // 2 spaces indentation
    'key-spacing': 0,
    'new-cap': 0,
    'no-cond-assign': [2, 'except-parens'],
    'no-debugger': 2,
    'no-empty': 0,
    'no-eval': 2,
    'no-irregular-whitespace': 2,
    'no-loop-func': 0,
    'no-multi-spaces': 0,
    'no-multiple-empty-lines': [2, {'max': 2}],
    'no-new': 2,
    'no-process-exit': 0,
    'no-script-url': 2,
    'no-sequences': 2,
    'no-shadow': 0,
    'no-spaced-func': 0,
    'no-trailing-spaces': 2,
    'no-undef': 2,
    'no-underscore-dangle': 0,
    'no-unused-vars': [2, {'vars': 'all', 'args': 'none'}],
    'no-use-before-define': [2, 'nofunc'],
    'no-with': 2,
    'quotes': [2, 'single', 'avoid-escape'],
    'semi': [2, 'always'],
    'space-unary-ops': 0,
    'strict': 0,
    'valid-typeof': 2,
    'wrap-iife': 0,
    'yoda': 0,

    'no-unsafe-innerhtml/no-unsafe-innerhtml': 2,
    'scanjs-rules/assign_to_hostname': 1,
    'scanjs-rules/assign_to_href': 1,
    'scanjs-rules/assign_to_location': 1,
    'scanjs-rules/assign_to_mozAudioChannel': 1,
    'scanjs-rules/assign_to_mozAudioChannelType': 1,
    'scanjs-rules/assign_to_onmessage': 1,
    'scanjs-rules/assign_to_pathname': 1,
    'scanjs-rules/assign_to_protocol': 1,
    'scanjs-rules/assign_to_search': 1,
    'scanjs-rules/assign_to_src': 1,
    'scanjs-rules/call_Function': 1,
    'scanjs-rules/call_addEventListener': 1,
    'scanjs-rules/call_addEventListener_cellbroadcastmsgchanged': 1,
    'scanjs-rules/call_addEventListener_deviceproximity': 1,
    'scanjs-rules/call_addEventListener_message': 1,
    'scanjs-rules/call_addEventListener_moznetworkdownload': 1,
    'scanjs-rules/call_addEventListener_moznetworkupload': 1,
    'scanjs-rules/call_connect': 1,
    'scanjs-rules/call_eval': 1,
    'scanjs-rules/call_execScript': 1,
    'scanjs-rules/call_generateCRMFRequest': 1,
    'scanjs-rules/call_getDeviceStorage_apps': 1,
    'scanjs-rules/call_getDeviceStorage_crashes': 1,
    'scanjs-rules/call_getDeviceStorage_music': 1,
    'scanjs-rules/call_getDeviceStorage_pictures': 1,
    'scanjs-rules/call_getDeviceStorage_sdcard': 1,
    'scanjs-rules/call_getDeviceStorage_videos': 1,
    'scanjs-rules/call_hide': 1,
    'scanjs-rules/call_mozSetMessageHandler': 1,
    'scanjs-rules/call_mozSetMessageHandler_activity': 1,
    'scanjs-rules/call_mozSetMessageHandler_wappush_received': 1,
    'scanjs-rules/call_open_attention': 1,
    'scanjs-rules/call_open_remote=true': 1,
    'scanjs-rules/call_parseFromString': 1,
    'scanjs-rules/call_setAttribute_mozapp': 1,
    'scanjs-rules/call_setAttribute_mozbrowser': 1,
    'scanjs-rules/call_setImmediate': 1,
    'scanjs-rules/call_setInterval': 1,
    'scanjs-rules/call_setMessageHandler_connect': 1,
    'scanjs-rules/call_setTimeout': 1,
    'scanjs-rules/call_write': 1,
    'scanjs-rules/call_writeln': 1,
    'scanjs-rules/identifier_indexedDB': 1,
    'scanjs-rules/identifier_localStorage': 1,
    'scanjs-rules/identifier_sessionStorage': 1,
    'scanjs-rules/new_Function': 1,
    'scanjs-rules/new_MozActivity': 1,
    'scanjs-rules/new_MozSpeakerManager': 1,
    'scanjs-rules/new_Notification': 1,
    'scanjs-rules/object_mozSystem': 1,
    'scanjs-rules/property_addIdleObserver': 1,
    'scanjs-rules/property_createContextualFragment': 1,
    'scanjs-rules/property_geolocation': 1,
    'scanjs-rules/property_getDataStores': 1,
    'scanjs-rules/property_getDeviceStorage': 1,
    'scanjs-rules/property_getUserMedia': 1,
    'scanjs-rules/property_indexedDB': 1,
    'scanjs-rules/property_lastKnownHomeNetwork': 1,
    'scanjs-rules/property_lastKnownNetwork': 1,
    'scanjs-rules/property_localStorage': 1,
    'scanjs-rules/property_mgmt': 1,
    'scanjs-rules/property_mozAlarms': 1,
    'scanjs-rules/property_mozBluetooth': 1,
    'scanjs-rules/property_mozCameras': 1,
    'scanjs-rules/property_mozCellBroadcast': 1,
    'scanjs-rules/property_mozContacts': 1,
    'scanjs-rules/property_mozDownloadManager': 1,
    'scanjs-rules/property_mozFMRadio': 1,
    'scanjs-rules/property_mozInputMethod': 1,
    'scanjs-rules/property_mozKeyboard': 1,
    'scanjs-rules/property_mozMobileConnection': 1,
    'scanjs-rules/property_mozMobileConnections': 1,
    'scanjs-rules/property_mozMobileMessage': 1,
    'scanjs-rules/property_mozNetworkStats': 1,
    'scanjs-rules/property_mozNfc': 1,
    'scanjs-rules/property_mozNotification': 1,
    'scanjs-rules/property_mozPermissionSettings': 1,
    'scanjs-rules/property_mozPhoneNumberService': 1,
    'scanjs-rules/property_mozPower': 1,
    'scanjs-rules/property_mozSettings': 1,
    'scanjs-rules/property_mozTCPSocket': 1,
    'scanjs-rules/property_mozTelephony': 1,
    'scanjs-rules/property_mozTime': 1,
    'scanjs-rules/property_mozVoicemail': 1,
    'scanjs-rules/property_mozWifiManager': 1,
    'scanjs-rules/property_sessionStorage': 1
  },
  plugins: [
    'no-unsafe-innerhtml',
    'scanjs-rules'
  ]
}
