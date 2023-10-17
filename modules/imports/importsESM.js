// Examples from MDN docs

import defaultExport from 'module-name'

import * as name from 'module-name'

import { export1 } from 'module-name'

import { export1 as alias1 } from 'module-name'

import { default as alias } from 'module-name'

import { export1, export2 } from 'module-name'

import { export1, export2 as alias2, /*...*/ } from 'module-name'

//? This type of import is rarely used and is not working in this particular context
// import { "string name" as alias } from "module-name"

import defaultExport, { export1, /*...*/ } from 'module-name'

import defaultExport, * as name from 'module-name'

import 'module-name'
