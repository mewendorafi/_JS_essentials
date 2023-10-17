# ESmodules (ESM)

[.mjs] is the file extension defining an ESmodule, so that the file should be treated as such.

ESmodules were more recently introduced with ES6 (2015), as a way to standardize how JS modules work and implement them in the browser. They are currently supported by both browsers and server-side NodeJS apps.

ESmodules are defined using a variety of import and export statements, but NodeJS uses ESmodules format if :
	* the file extension for the module is [.mjs]
	* the module's nearest parent folder has { "type": "module" } in its package.json

By default [.js] files in NodeJS are considered to be CommonJS modules.

As stated before, an easy way to tell NodeJS to treat files as ESmodules would be to use the [.mjs] file extension. But, it is not needed if you define a { "type": "module" } field in package.json
