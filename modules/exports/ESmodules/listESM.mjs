// Examples from MDN docs

let variable1
let variable2
const name = 'name'
const name2 = 'name2'

// Export list
export { name, name2, /*...*/ }

export { variable1 as name1, variable2 as name2, /*...*/ }

// This type of import is rarely used and is not working in this particular context
// export { variable2 as "string name" }

export { name as default /*...*/ }
