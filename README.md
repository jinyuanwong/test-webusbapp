# Test WebUSB App

> View the live demo [here](https://jinyuanwong.github.io/test-webusbapp/)

# To start the app:

1. `git clone https://github.com/jinyuanwong/test-webusbapp.git`
2. use chrome to open file ./index.html

# Description

This web application enables you to read device information such as:

- Manufacturer
- Product
- Serial number
- Vendor ID
- Product ID

# Dependencies

- [USB](https://github.com/node-usb/node-usb)
- node.js: 18.15.0

# Issues

Do not run `node .` or `node index.js`, or you will have problem like this:
```
document.addEventListener('DOMContentLoaded', event => {
^

ReferenceError: document is not defined
    at Object.<anonymous> ←[90m(C:\Users\Admin\Documents\code\nodejs\test-webusbapp\←[39mindex.js:1:1←[90m)←[39m
←[90m    at Module._compile (node:internal/modules/cjs/loader:1254:14)←[39m
←[90m    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)←[39m
←[90m    at Module.load (node:internal/modules/cjs/loader:1117:32)←[39m
←[90m    at Module._load (node:internal/modules/cjs/loader:958:12)←[39m
←[90m    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)←[39m
←[90m    at node:internal/main/run_main_module:23:47←[39m

Node.js v18.15.0
```
Enjoy using the app!

___Jinyuan Wang___

__2023.03.12__