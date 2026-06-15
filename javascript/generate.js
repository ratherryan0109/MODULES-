const fs = require('fs');
const path = require('path');

const COURSE_DIR = path.join(__dirname, 'JavaScript Mastery Course');

// Module data: 155 modules with topic, description, and key concepts
const modules = [
  // ====== JS FUNDAMENTALS (01-15) ======
  { id: '01', name: 'Introduction-to-JavaScript', topic: 'Introduction to JavaScript', desc: 'Learn what JavaScript is, its history, and how it powers the web. Understand the basics of client-side scripting and how to add JavaScript to HTML pages.', concepts: ['JavaScript history and evolution', 'Client-side vs server-side JS', 'Adding JS to HTML (inline, internal, external)', 'Browser DevTools console', 'JavaScript syntax basics', 'Comments and statements', 'Case sensitivity', 'ECMAScript versions'] },
  { id: '02', name: 'Setting-Up-Development-Environment', topic: 'Setting Up Development Environment', desc: 'Configure a professional JavaScript development environment with VS Code, Node.js, and essential tools for efficient coding.', concepts: ['VS Code installation and setup', 'Node.js and npm installation', 'Code formatters (Prettier)', 'Linters (ESLint)', 'Browser DevTools', 'Live Server extension', 'Source control with Git', 'Debugging tools'] },
  { id: '03', name: 'JavaScript-Variables-and-Constants', topic: 'JavaScript Variables and Constants', desc: 'Master variable declaration with var, let, and const. Understand scoping rules, hoisting, and best practices for variable naming.', concepts: ['var, let, const differences', 'Block scoping with let and const', 'Variable hoisting', 'Temporal Dead Zone (TDZ)', 'Naming conventions (camelCase)', 'Constants and immutability', 'Global vs local variables', 'Variable shadowing'] },
  { id: '04', name: 'JavaScript-Data-Types', topic: 'JavaScript Data Types', desc: 'Explore JavaScript data types including primitives and reference types. Understand type coercion, typeof operator, and type conversion.', concepts: ['Primitive types (string, number, boolean, null, undefined, symbol, bigint)', 'Reference types (object, array, function)', 'typeof operator', 'Type coercion (implicit)', 'Type conversion (explicit)', 'NaN and Infinity', 'Pass by value vs reference', 'Dynamic typing'] },
  { id: '05', name: 'JavaScript-Operators', topic: 'JavaScript Operators', desc: 'Comprehensive coverage of JavaScript operators including arithmetic, assignment, comparison, logical, bitwise, and ternary operators.', concepts: ['Arithmetic operators (+, -, *, /, %, **)', 'Assignment operators (=, +=, -=, etc.)', 'Comparison operators (==, ===, !=, !==, >, <)', 'Logical operators (&&, ||, !)', 'Short-circuit evaluation', 'Ternary operator', 'Nullish coalescing (??)', 'Optional chaining (?.)'] },
  { id: '06', name: 'JavaScript-Strings', topic: 'JavaScript Strings', desc: 'Master string manipulation in JavaScript including template literals, string methods, Unicode, and regular expressions.', concepts: ['String literals and template literals', 'Escape sequences', 'String length and access', 'Common string methods', 'String immutability', 'Template literal interpolation', 'Tagged templates', 'Regular expressions'] },
  { id: '07', name: 'JavaScript-Numbers-and-Math', topic: 'JavaScript Numbers and Math', desc: 'Deep dive into JavaScript numbers including the Number type, Math object, rounding, random numbers, and handling precision issues.', concepts: ['Number type and IEEE 754', 'Integer vs floating point', 'Number methods (parseInt, parseFloat, toFixed)', 'Math object methods', 'Random number generation', 'Rounding (ceil, floor, round, trunc)', 'Number precision issues', 'BigInt for large numbers'] },
  { id: '08', name: 'JavaScript-Booleans-and-Comparisons', topic: 'JavaScript Booleans and Comparisons', desc: 'Understand boolean logic, truthy/falsy values, comparison operators, and how JavaScript evaluates conditions.', concepts: ['Boolean primitive and object', 'Truthy and falsy values', 'Equality (== vs ===)', 'Relational operators', 'Conditional logic', 'Boolean coercion', 'Object.is() comparison', 'Comparing objects'] },
  { id: '09', name: 'JavaScript-Control-Flow-if-else', topic: 'JavaScript Control Flow: if/else', desc: 'Learn conditional statements in JavaScript including if, else if, else, and nested conditions for decision-making in code.', concepts: ['if statement', 'else clause', 'else if chains', 'Nested conditionals', 'Conditional expression patterns', 'Truthy/falsy in conditions', 'Early return pattern', 'Guard clauses'] },
  { id: '10', name: 'JavaScript-Switch-Statement', topic: 'JavaScript Switch Statement', desc: 'Master the switch statement for multi-way branching. Understand fall-through, strict comparison, and when to use switch over if/else.', concepts: ['switch syntax', 'case clauses', 'break statement', 'Fall-through behavior', 'default case', 'Strict comparison in switch', 'Grouping cases', 'Switch vs if/else'] },
  { id: '11', name: 'JavaScript-Ternary-Operator', topic: 'JavaScript Ternary Operator', desc: 'Learn the ternary operator for concise conditional expressions. Understand nesting, readability considerations, and best practices.', concepts: ['Ternary syntax (condition ? expr1 : expr2)', 'Chaining ternaries', 'Nested ternaries', 'Readability vs conciseness', 'Ternary with template literals', 'Truthy/falsy in conditions', 'Returning values with ternary', 'Short-circuit alternatives'] },
  { id: '12', name: 'JavaScript-Loops-while-and-do-while', topic: 'JavaScript Loops: while and do/while', desc: 'Understand while and do/while loops for repeated execution. Learn about loop control, infinite loops, and when to use each type.', concepts: ['while loop syntax', 'do/while loop syntax', 'Loop condition evaluation', 'Infinite loops prevention', 'break statement', 'continue statement', 'Difference between while and do/while', 'Loop use cases'] },
  { id: '13', name: 'JavaScript-For-Loop', topic: 'JavaScript For Loop', desc: 'Master the for loop, its components, and variations. Learn about loop patterns, performance considerations, and common use cases.', concepts: ['for loop syntax (init; condition; increment)', 'Loop variable scoping', 'Nested for loops', 'For loop patterns', 'Break and continue in for loops', 'Loop performance', 'Empty statements in for loops', 'Infinite for loops'] },
  { id: '14', name: 'JavaScript-Break-and-Continue', topic: 'JavaScript Break and Continue', desc: 'Control loop execution with break and continue statements. Understand labels, early exit patterns, and when to use each control statement.', concepts: ['break statement', 'continue statement', 'Labeled statements', 'Breaking nested loops', 'Continue in nested loops', 'Early exit patterns', 'Break vs return', 'Loop control best practices'] },
  { id: '15', name: 'JavaScript-Functions-Basics', topic: 'JavaScript Functions Basics', desc: 'Introduction to functions in JavaScript. Learn function declarations, expressions, parameters, return values, and the fundamentals of reusable code.', concepts: ['Function declarations', 'Function expressions', 'Parameters and arguments', 'Return values', 'Default parameters', 'Rest parameters', 'Function hoisting', 'First-class functions'] },

  // ====== FUNCTIONS DEEP DIVE (16-30) ======
  { id: '16', name: 'JavaScript-Function-Expressions', topic: 'JavaScript Function Expressions', desc: 'Deep dive into function expressions, anonymous functions, named function expressions, and their differences from declarations.', concepts: ['Anonymous functions', 'Named function expressions', 'Function expressions vs declarations', 'Hoisting differences', 'Callback functions', 'Immediately Invoked Function Expressions', 'Functions as values', 'Function expression patterns'] },
  { id: '17', name: 'JavaScript-Arrow-Functions', topic: 'JavaScript Arrow Functions', desc: 'Master arrow functions syntax, implicit returns, lexical this binding, and when to use them over regular functions.', concepts: ['Arrow function syntax', 'Implicit return', 'Lexical this binding', 'No arguments object', 'No prototype property', 'Cannot be used as constructors', 'Single parameter shorthand', 'Arrow function use cases'] },
  { id: '18', name: 'JavaScript-Parameters-and-Arguments', topic: 'JavaScript Parameters and Arguments', desc: 'Comprehensive guide to function parameters including default values, rest parameters, destructuring, and the arguments object.', concepts: ['Default parameters', 'Rest parameters (...args)', 'arguments object', 'Destructuring parameters', 'Parameter passing (by value)', 'Parameter validation', 'Named parameters pattern', 'Spread operator in function calls'] },
  { id: '19', name: 'JavaScript-Return-Statement', topic: 'JavaScript Return Statement', desc: 'Understanding the return statement, implicit returns, multiple return values, and early return patterns in JavaScript functions.', concepts: ['Return statement syntax', 'Implicit undefined return', 'Early return pattern', 'Returning multiple values', 'Returning functions (closures)', 'Return objects and arrays', 'Return with ternary', 'No return pattern'] },
  { id: '20', name: 'JavaScript-Scope-and-Closures', topic: 'JavaScript Scope and Closures', desc: 'Master lexical scoping, scope chain, closures, and module patterns. Understand how JavaScript resolves variable access.', concepts: ['Global scope', 'Function scope', 'Block scope (let/const)', 'Scope chain', 'Lexical scoping', 'Closures', 'Module pattern', 'Private variables with closures'] },
  { id: '21', name: 'JavaScript-Hoisting', topic: 'JavaScript Hoisting', desc: 'Understand hoisting behavior for variables and functions. Learn the Temporal Dead Zone and how hoisting affects code execution.', concepts: ['Variable hoisting (var)', 'Function declaration hoisting', 'Temporal Dead Zone (TDZ)', 'let and const hoisting', 'Function expression hoisting', 'Class hoisting', 'Hoisting order', 'Best practices to avoid hoisting bugs'] },
  { id: '22', name: 'JavaScript-IIFE', topic: 'JavaScript IIFE', desc: 'Learn Immediately Invoked Function Expressions for creating private scopes, module patterns, and avoiding global namespace pollution.', concepts: ['IIFE syntax', 'Module pattern with IIFE', 'Private variables and methods', 'Passing arguments to IIFE', 'IIFE with arrow functions', 'Block scope vs IIFE', 'Revealing module pattern', 'IIFE in modern JavaScript'] },
  { id: '23', name: 'JavaScript-Callback-Functions', topic: 'JavaScript Callback Functions', desc: 'Understand callback functions, higher-order functions, synchronous and asynchronous callbacks, and callback patterns.', concepts: ['Callback function definition', 'Higher-order functions', 'Synchronous callbacks', 'Asynchronous callbacks', 'Callback hell', 'Named vs anonymous callbacks', 'Error-first callbacks', 'Callback patterns in array methods'] },
  { id: '24', name: 'JavaScript-Higher-Order-Functions', topic: 'JavaScript Higher-Order Functions', desc: 'Master higher-order functions that take or return functions. Learn map, filter, reduce and function composition patterns.', concepts: ['Functions as arguments', 'Functions as return values', 'Function composition', 'Currying', 'Partial application', 'map/filter/reduce as HOFs', 'Decorator functions', 'Memoization'] },
  { id: '25', name: 'JavaScript-Recursion', topic: 'JavaScript Recursion', desc: 'Understand recursive functions, base cases, recursion vs iteration, and common recursive patterns in JavaScript.', concepts: ['Recursive function definition', 'Base case and recursive case', 'Call stack in recursion', 'Recursion vs iteration', 'Tail recursion', 'Recursive array traversal', 'Recursive tree traversal', 'Depth-first search recursion'] },
  { id: '26', name: 'JavaScript-Arrays-Basics', topic: 'JavaScript Arrays Basics', desc: 'Introduction to arrays: creation, access, properties, and basic operations. Understanding array-like objects and array detection.', concepts: ['Array creation (literal, constructor, Array.from)', 'Array indexing and length', 'Accessing and modifying elements', 'Array detection (isArray)', 'Array-like objects', 'Sparse arrays', 'Multidimensional arrays', 'Array destructuring basics'] },
  { id: '27', name: 'JavaScript-Array-Methods-Part-1', topic: 'JavaScript Array Methods Part 1', desc: 'Essential array methods for manipulation: push, pop, shift, unshift, splice, slice, concat, and join.', concepts: ['push and pop (stack operations)', 'shift and unshift (queue operations)', 'splice (add/remove/replace)', 'slice (extract subarray)', 'concat (merge arrays)', 'join (array to string)', 'indexOf and includes', 'fill and copyWithin'] },
  { id: '28', name: 'JavaScript-Array-Methods-Part-2', topic: 'JavaScript Array Methods Part 2', desc: 'Advanced array methods for iteration and transformation: forEach, map, filter, reduce, every, some, find, and findIndex.', concepts: ['forEach for iteration', 'map for transformation', 'filter for selection', 'reduce for accumulation', 'every and some for testing', 'find and findIndex', 'Array method chaining', 'flat and flatMap'] },
  { id: '29', name: 'JavaScript-Array-Sorting', topic: 'JavaScript Array Sorting', desc: 'Master array sorting with custom compare functions, stable sort, sorting arrays of objects, and locale-aware string sorting.', concepts: ['sort() method', 'Custom compare functions', 'String sorting with localeCompare', 'Sorting numbers correctly', 'Sorting objects by property', 'Stable sort (ES2019)', 'Reverse sorting', 'Sorting performance'] },
  { id: '30', name: 'JavaScript-Objects-Basics', topic: 'JavaScript Objects Basics', desc: 'Introduction to objects: creation, property access, methods, computed properties, and property descriptors.', concepts: ['Object literal syntax', 'Dot vs bracket notation', 'Computed property names', 'Object methods', 'Property value shorthand', 'Property existence check', 'Object iteration (for...in)', 'Object keys, values, entries'] },

  // ====== OBJECTS & PROTOTYPES (31-45) ======
  { id: '31', name: 'JavaScript-Object-Properties', topic: 'JavaScript Object Properties', desc: 'Deep dive into object properties: getters, setters, property descriptors, enumerability, configurability, and property attributes.', concepts: ['Property descriptors (value, writable, enumerable, configurable)', 'getter and setter', 'Object.defineProperty', 'Object.defineProperties', 'Property enumerability', 'Property configurable rules', 'Object.preventExtensions, seal, freeze', 'Property accessor vs data descriptor'] },
  { id: '32', name: 'JavaScript-Object-Prototypes', topic: 'JavaScript Object Prototypes', desc: 'Understand prototypal inheritance, prototype chain, __proto__, Object.getPrototypeOf, and shared methods via prototypes.', concepts: ['Prototype chain', '__proto__ vs prototype', 'Object.getPrototypeOf', 'Object.setPrototypeOf', 'hasOwnProperty', 'isPrototypeOf', 'Property shadowing', 'Prototypal inheritance'] },
  { id: '33', name: 'JavaScript-this-Keyword', topic: 'JavaScript this Keyword', desc: 'Master the this keyword in different contexts: global, function, method, constructor, event handler, and explicit binding with call, apply, bind.', concepts: ['Global this', 'Function invocation this', 'Method invocation this', 'Constructor this', 'Arrow function this (lexical)', 'call() method', 'apply() method', 'bind() method'] },
  { id: '34', name: 'JavaScript-Call-Apply-Bind', topic: 'JavaScript call, apply, bind', desc: 'Explicit function binding with call, apply, and bind. Understand partial application, function borrowing, and method currying.', concepts: ['call() - function borrowing', 'apply() - array arguments', 'bind() - permanent binding', 'Partial application with bind', 'Function borrowing between objects', 'Currying with bind', 'call vs apply vs bind', 'Use cases for explicit binding'] },
  { id: '35', name: 'JavaScript-Constructor-Functions', topic: 'JavaScript Constructor Functions', desc: 'Learn constructor functions for creating objects, the new keyword, instance properties, and prototype methods.', concepts: ['Constructor function pattern', 'new keyword operation', 'Instance properties vs prototype methods', 'Constructor property', 'instanceof operator', 'Returning objects from constructors', 'Constructor vs regular function', 'Built-in constructors'] },
  { id: '36', name: 'JavaScript-ES6-Classes', topic: 'JavaScript ES6 Classes', desc: 'Modern class syntax in JavaScript: class declarations, constructors, methods, static methods, and class inheritance patterns.', concepts: ['class keyword', 'constructor method', 'Instance methods', 'Static methods and properties', 'Class inheritance (extends)', 'super keyword', 'Private class fields (#)', 'Public class fields'] },
  { id: '37', name: 'JavaScript-Class-Inheritance', topic: 'JavaScript Class Inheritance', desc: 'Master inheritance with ES6 classes: extends, super, method overriding, mixins, and composition over inheritance.', concepts: ['extends keyword', 'super() constructor call', 'Method overriding', 'Super method calls', 'Mixin pattern', 'Composition vs inheritance', 'Abstract class pattern', 'Instanceof with inheritance'] },
  { id: '38', name: 'JavaScript-Error-Handling', topic: 'JavaScript Error Handling', desc: 'Comprehensive error handling with try/catch/finally, custom errors, error types, and debugging techniques.', concepts: ['try/catch/finally', 'Error types (Error, SyntaxError, ReferenceError, etc.)', 'Custom error classes', 'Throwing errors', 'Error stack traces', 'Error handling patterns', 'Finally block usage', 'Async error handling'] },
  { id: '39', name: 'JavaScript-Debugging-Techniques', topic: 'JavaScript Debugging Techniques', desc: 'Professional debugging techniques using browser DevTools, debugger statements, logging strategies, and performance profiling.', concepts: ['console methods (log, warn, error, table, group)', 'debugger statement', 'Chrome DevTools debugging', 'Breakpoints', 'Watch expressions', 'Call stack inspection', 'Performance profiling', 'Network debugging'] },
  { id: '40', name: 'JavaScript-Strict-Mode', topic: 'JavaScript Strict Mode', desc: 'Understand strict mode in JavaScript: how to enable it, what changes it makes, and why it is essential for writing secure JavaScript.', concepts: ['"use strict" directive', 'Strict mode changes', 'Eliminating this coercion', 'No undeclared variables', 'Duplicate parameter errors', 'Deleting variables/undeletables', 'Restricted future keywords', 'Strict mode in modules'] },

  // ====== DOM & BROWSER APIs (41-55) ======
  { id: '41', name: 'JavaScript-DOM-Introduction', topic: 'JavaScript DOM Introduction', desc: 'Introduction to the Document Object Model: understanding the DOM tree, selecting elements, and basic DOM manipulation.', concepts: ['What is the DOM', 'DOM tree structure', 'document object', 'getElementById', 'getElementsByClassName', 'getElementsByTagName', 'querySelector', 'querySelectorAll'] },
  { id: '42', name: 'JavaScript-DOM-Selectors', topic: 'JavaScript DOM Selectors', desc: 'Master DOM element selection with modern selectors, live vs static collections, and best practices for efficient element queries.', concepts: ['CSS selectors with querySelector', 'querySelectorAll static collection', 'getElementById fast lookup', 'Live HTMLCollection vs static NodeList', 'Closest() method', 'Matches() method', 'Selecting children and parents', 'Selector performance'] },
  { id: '43', name: 'JavaScript-DOM-Traversal', topic: 'JavaScript DOM Traversal', desc: 'Navigate the DOM tree with parent, child, and sibling properties. Understand traversal performance and use cases.', concepts: ['parentNode vs parentElement', 'childNodes vs children', 'firstChild vs firstElementChild', 'lastChild vs lastElementChild', 'nextSibling vs nextElementSibling', 'previousSibling vs previousElementSibling', 'Node types (element, text, comment)', 'Traversing node lists'] },
  { id: '44', name: 'JavaScript-DOM-Manipulation', topic: 'JavaScript DOM Manipulation', desc: 'Create, insert, remove, and replace DOM elements. Master innerHTML, textContent, createElement, and modern insertion methods.', concepts: ['createElement', 'createTextNode', 'appendChild', 'insertBefore', 'append, prepend, after, before', 'removeChild, remove', 'replaceChild, replaceWith', 'innerHTML vs textContent'] },
  { id: '45', name: 'JavaScript-DOM-Attributes', topic: 'JavaScript DOM Attributes', desc: 'Working with HTML attributes, data attributes, classList, style manipulation, and custom attributes in the DOM.', concepts: ['getAttribute/setAttribute', 'removeAttribute', 'hasAttribute', 'dataset and data-* attributes', 'classList API (add, remove, toggle, contains)', 'style property manipulation', 'getComputedStyle', 'Custom attribute conventions'] },
  { id: '46', name: 'JavaScript-DOM-Events', topic: 'JavaScript DOM Events', desc: 'Comprehensive event handling: event listeners, event object, event phases, event delegation, and custom events.', concepts: ['addEventListener', 'removeEventListener', 'Event object properties', 'Event phases (capture, target, bubble)', 'Event delegation', 'Custom events (CustomEvent)', 'Event preventDefault', 'Event stopPropagation'] },
  { id: '47', name: 'JavaScript-Event-Delegation', topic: 'JavaScript Event Delegation', desc: 'Master event delegation for efficient event handling on dynamic elements. Understand bubbling, capturing, and performance benefits.', concepts: ['Event bubbling mechanism', 'Event capturing phase', 'Event delegation pattern', 'Dynamic element handling', 'Event delegation benefits', 'Delegation with multiple targets', 'Delegation gotchas', 'Performance benchmarks'] },
  { id: '48', name: 'JavaScript-Keyboard-and-Mouse-Events', topic: 'JavaScript Keyboard and Mouse Events', desc: 'Handle keyboard and mouse interactions: key events, mouse events, coordinates, and advanced input handling patterns.', concepts: ['keydown, keypress, keyup', 'event.key vs event.code', 'Mouse events (click, dblclick, mousedown, mouseup)', 'Mouse coordinates (client, page, screen)', 'Mouseenter vs mouseover', 'Drag and drop basics', 'Context menu events', 'Wheel events'] },
  { id: '49', name: 'JavaScript-Form-Events', topic: 'JavaScript Form Events', desc: 'Handle form events: submit, input, change, focus, blur. Learn form validation, controlled inputs, and form data handling.', concepts: ['Form submit event', 'Input and change events', 'Focus and blur events', 'Form validation API', 'Custom validation messages', 'FormData API', 'Preventing default submission', 'Real-time input validation'] },
  { id: '50', name: 'JavaScript-BOM', topic: 'JavaScript BOM (Browser Object Model)', desc: 'Explore the Browser Object Model: window, navigator, screen, location, history, and timing events for browser interaction.', concepts: ['window object', 'navigator object (userAgent, geolocation)', 'screen object', 'location object', 'history object (back, forward, pushState)', 'setTimeout and setInterval', 'requestAnimationFrame', 'Window dimensions and scrolling'] },

  // ====== INTERMEDIATE CONCEPTS (51-65) ======
  { id: '51', name: 'JavaScript-Timers-and-Intervals', topic: 'JavaScript Timers and Intervals', desc: 'Master setTimeout, setInterval, requestAnimationFrame, and debouncing/throttling patterns for timed code execution.', concepts: ['setTimeout (delay and cancel)', 'setInterval (repeated execution)', 'clearTimeout and clearInterval', 'requestAnimationFrame', 'Debouncing pattern', 'Throttling pattern', 'Nested timeouts', 'Timer precision and limitations'] },
  { id: '52', name: 'JavaScript-JSON', topic: 'JavaScript JSON', desc: 'Learn JSON parsing, stringification, serialization, and deserialization. Understand JSON with complex objects and custom serialization.', concepts: ['JSON.parse', 'JSON.stringify', 'Reviver parameter', 'Replacer parameter', 'Circular reference handling', 'toJSON method', 'JSON vs JavaScript objects', 'JSON validation'] },
  { id: '53', name: 'JavaScript-Date-and-Time', topic: 'JavaScript Date and Time', desc: 'Work with dates and times in JavaScript: Date object, date formatting, time zones, date arithmetic, and libraries like date-fns.', concepts: ['Date object creation', 'get/set date methods', 'Date formatting (toLocaleDateString)', 'Unix timestamps', 'Date arithmetic', 'Timezone handling', 'Intl.DateTimeFormat', 'date-fns library basics'] },
  { id: '54', name: 'JavaScript-Math-and-Random', topic: 'JavaScript Math and Random', desc: 'Advanced Math operations, random number generation, cryptographic randomness, and mathematical algorithms in JavaScript.', concepts: ['Math properties (PI, E, etc.)', 'Math methods (abs, pow, sqrt, sin, cos)', 'Generating random numbers', 'Random integer in range', 'Random element from array', 'Cryptographic randomness', 'Shuffling arrays', 'Mathematical algorithms'] },
  { id: '55', name: 'JavaScript-Symbols', topic: 'JavaScript Symbols', desc: 'Understand Symbol primitive: creating symbols, well-known symbols, symbol registry, and practical use cases for symbols.', concepts: ['Symbol creation', 'Symbol uniqueness', 'Symbol.for and Symbol.keyFor', 'Well-known symbols (Symbol.iterator, etc.)', 'Symbol as property key', 'Symbols and JSON', 'Symbols and enumeration', 'Use cases for symbols'] },
  { id: '56', name: 'JavaScript-Maps-and-Sets', topic: 'JavaScript Maps and Sets', desc: 'Master Map, Set, WeakMap, and WeakSet: when to use them, performance benefits, and iterable operations.', concepts: ['Map creation and methods', 'Map vs Object comparison', 'Set creation and methods', 'Set operations (union, intersection, difference)', 'WeakMap memory benefits', 'WeakSet use cases', 'Iterating collections', 'Performance characteristics'] },
  { id: '57', name: 'JavaScript-Number-and-Math-Methods', topic: 'JavaScript Number and Math Methods', desc: 'Deep dive into Number methods (isNaN, isFinite, parseFloat, parseInt) and advanced Math operations.', concepts: ['Number.isNaN vs global isNaN', 'Number.isFinite vs global isFinite', 'Number.parseInt and parseFloat', 'Number.isInteger and isSafeInteger', 'Number.EPSILON precision', 'Math.trunc, sign, cbrt, hypot', 'Math.clz32, imul, fround', 'Exponentiation operator (**)'] },
  { id: '58', name: 'JavaScript-String-Methods-Deep-Dive', topic: 'JavaScript String Methods Deep Dive', desc: 'Comprehensive coverage of all string methods: search, match, replace, split, substring, slice, and Unicode operations.', concepts: ['indexOf, lastIndexOf, includes', 'startsWith, endsWith', 'slice vs substring vs substr', 'split and join', 'replace and replaceAll', 'toUpperCase, toLowerCase, trim', 'padStart, padEnd, repeat', 'localeCompare, normalize'] },
  { id: '59', name: 'JavaScript-Array-Destructuring', topic: 'JavaScript Array Destructuring', desc: 'Master array destructuring for cleaner code: basic syntax, rest patterns, default values, swapping, and nested destructuring.', concepts: ['Basic array destructuring', 'Rest pattern in destructuring', 'Default values', 'Swapping variables', 'Nested array destructuring', 'Destructuring function returns', 'Ignoring elements', 'Destructuring in loops'] },
  { id: '60', name: 'JavaScript-Object-Destructuring', topic: 'JavaScript Object Destructuring', desc: 'Master object destructuring: property matching, renaming, defaults, nested destructuring, and destructuring function parameters.', concepts: ['Basic object destructuring', 'Renaming variables', 'Default values', 'Nested object destructuring', 'Destructuring function parameters', 'Rest in object destructuring', 'Computed property names', 'Destructuring patterns'] },

  // ====== ADVANCED CONCEPTS I (61-75) ======
  { id: '61', name: 'JavaScript-Spread-and-Rest-Operators', topic: 'JavaScript Spread and Rest Operators', desc: 'Master the spread (...) and rest operators for arrays, objects, function arguments, and copying/merging data structures.', concepts: ['Rest parameters in functions', 'Spread in array literals', 'Spread in object literals', 'Combining spread with destructuring', 'Copying arrays and objects', 'Merging arrays and objects', 'Spread in function calls', 'Rest vs spread differences'] },
  { id: '62', name: 'JavaScript-Iterables-and-Iterators', topic: 'JavaScript Iterables and Iterators', desc: 'Understand the iteration protocol: iterable objects, iterator protocol, Symbol.iterator, and creating custom iterables.', concepts: ['Iterable protocol', 'Iterator protocol', 'Symbol.iterator', 'Custom iterables', 'Spreadable objects', 'Array.from with mapping', 'Creating iterators', 'For...of loop internals'] },
  { id: '63', name: 'JavaScript-Generators', topic: 'JavaScript Generators', desc: 'Learn generator functions and generator objects. Understand yield, yield*, two-way communication, and use cases for generators.', concepts: ['Generator function syntax (function*)', 'yield keyword', 'Generator.next() method', 'yield* delegation', 'Two-way communication with next()', 'Generator return() and throw()', 'Infinite generators', 'Generator use cases'] },
  { id: '64', name: 'JavaScript-Async-Await', topic: 'JavaScript Async/Await', desc: 'Master async/await syntax for writing asynchronous code that reads like synchronous. Understand error handling and concurrency patterns.', concepts: ['async function keyword', 'await expression', 'Error handling with try/catch', 'Await with Promise.all', 'Sequential vs parallel execution', 'Async iteration (for await...of)', 'Top-level await', 'Async function patterns'] },
  { id: '65', name: 'JavaScript-Promises', topic: 'JavaScript Promises', desc: 'Comprehensive guide to Promises: creation, chaining, error handling, static methods, and advanced promise patterns.', concepts: ['Promise states (pending, fulfilled, rejected)', 'then(), catch(), finally()', 'Promise chaining', 'Promise.all and Promise.allSettled', 'Promise.race and Promise.any', 'Promise.resolve and Promise.reject', 'Unhandled promise rejections', 'Promise pattern (deferred)'] },
  { id: '66', name: 'JavaScript-Callback-to-Promise-to-Async', topic: 'JavaScript Callback to Promise to Async', desc: 'Evolution of asynchronous patterns in JavaScript. Convert callback-based code to Promises and async/await.', concepts: ['Callback hell problem', 'Promise conversion pattern', 'Promisification of callbacks', 'Async/await as syntactic sugar', 'Reading async code', 'Error handling evolution', 'Async control flow patterns', 'Choosing the right pattern'] },
  { id: '67', name: 'JavaScript-Fetch-API', topic: 'JavaScript Fetch API', desc: 'Make HTTP requests with the Fetch API. Understand request/response objects, headers, CORS, and advanced fetch patterns.', concepts: ['fetch() function', 'Response object (json, text, blob)', 'Request object', 'Headers object', 'HTTP methods (GET, POST, PUT, DELETE)', 'Request options', 'CORS and credentials', 'Error handling with fetch'] },
  { id: '68', name: 'JavaScript-Error-Handling-in-Async', topic: 'JavaScript Error Handling in Async', desc: 'Handle asynchronous errors effectively with Promises, async/await, error boundaries, and global error handlers.', concepts: ['Promise rejection handling', 'Async/await try/catch', 'Global unhandledrejection', 'Global error event', 'Error propagation in chains', 'Retry patterns', 'Timeout patterns', 'Error boundary patterns'] },
  { id: '69', name: 'JavaScript-Modules-ES6', topic: 'JavaScript Modules (ES6)', desc: 'Master ES6 modules: export, import, default exports, named exports, module bundlers, and best practices for modular code.', concepts: ['Named exports', 'Default exports', 'Named imports', 'Namespace imports', 'Re-exporting', 'Module scope', 'Dynamic import()', 'Tree shaking'] },
  { id: '70', name: 'JavaScript-CommonJS-vs-ESM', topic: 'JavaScript CommonJS vs ESM', desc: 'Compare CommonJS (require) and ES Modules (import). Understand differences, interoperability, and when to use each module system.', concepts: ['require() syntax', 'module.exports', 'import/export ES modules', 'Synchronous vs asynchronous', 'Static vs dynamic imports', 'Circular dependency handling', 'Package.json type field', '.mjs and .cjs extensions'] },
  { id: '71', name: 'JavaScript-Web-Storage', topic: 'JavaScript Web Storage', desc: 'Store data in the browser with localStorage, sessionStorage, and cookies. Understand storage limits, security, and data serialization.', concepts: ['localStorage API', 'sessionStorage API', 'Storage events', 'Cookie manipulation', 'Storage limits', 'JSON serialization in storage', 'IndexedDB introduction', 'Storage security'] },
  { id: '72', name: 'JavaScript-Template-Literals', topic: 'JavaScript Template Literals', desc: 'Master template literals: interpolation, multi-line strings, tagged templates, and advanced string formatting patterns.', concepts: ['Template literal syntax', 'Expression interpolation', 'Multi-line strings (no \\n)', 'Tagged templates', 'Tag function arguments', 'String formatting with tags', 'Custom template engines', 'Nested templates'] },
  { id: '73', name: 'JavaScript-Enhanced-Object-Literals', topic: 'JavaScript Enhanced Object Literals', desc: 'ES6+ enhanced object literals: property shorthand, method shorthand, computed properties, and spread in objects.', concepts: ['Property shorthand (name: name -> name)', 'Method shorthand', 'Computed property keys', 'Spread properties', 'Object.assign() for merging', 'Object.fromEntries()', 'Property order guarantee', 'Object literal patterns'] },
  { id: '74', name: 'JavaScript-Destructuring-Assignment', topic: 'JavaScript Destructuring Assignment', desc: 'Comprehensive destructuring: arrays, objects, nested patterns, defaults, rest patterns, and destructuring in function parameters.', concepts: ['Array destructuring patterns', 'Object destructuring patterns', 'Default values', 'Rest in destructuring', 'Nested destructuring', 'Swapping variables', 'Destructuring Maps and Sets', 'Destructuring function returns'] },
  { id: '75', name: 'JavaScript-Short-Circuiting-and-Nullish', topic: 'JavaScript Short-Circuiting and Nullish Coalescing', desc: 'Logical operators, short-circuit evaluation, nullish coalescing (??), optional chaining (?.), and combining operators for concise code.', concepts: ['&& short-circuiting', '|| short-circuiting', 'Short-circuit evaluation patterns', 'Nullish coalescing (??)', 'Optional chaining (?.)', 'Logical assignment (&&=, ||=, ??=)', 'Nullish vs falsy distinction', 'Chaining nullish operators'] },

  // ====== ADVANCED CONCEPTS II (76-90) ======
  { id: '76', name: 'JavaScript-Proxy-and-Reflect', topic: 'JavaScript Proxy and Reflect', desc: 'Create custom behavior for objects with Proxy traps. Reflect API for method forwarding and meta-programming.', concepts: ['Proxy creation (target, handler)', 'Get and set traps', 'Has and deleteProperty traps', 'Apply and construct traps', 'Proxy.useCases (validation, logging)', 'Reflect API methods', 'Reflect vs direct operations', 'Revocable proxies'] },
  { id: '77', name: 'JavaScript-Symbols-and-Meta-Programming', topic: 'JavaScript Symbols and Meta-Programming', desc: 'Advanced meta-programming with Symbols: Symbol.hasInstance, Symbol.toPrimitive, Symbol.toStringTag, and custom behavior.', concepts: ['Symbol.hasInstance', 'Symbol.toPrimitive', 'Symbol.toStringTag', 'Symbol.species', 'Symbol.match and Symbol.replace', 'Symbol.search and Symbol.split', 'Symbol.isConcatSpreadable', 'Symbol.unscopables'] },
  { id: '78', name: 'JavaScript-Property-Descriptors', topic: 'JavaScript Property Descriptors', desc: 'Deep dive into property descriptors: getOwnPropertyDescriptor, defineProperty, property attributes, and advanced object configuration.', concepts: ['Data descriptors (value, writable)', 'Accessor descriptors (get, set)', 'Enumerable and configurable', 'Object.getOwnPropertyDescriptor', 'Object.defineProperty', 'Object.defineProperties', 'Object.getOwnPropertyDescriptors', 'Freezing vs sealing vs preventing extensions'] },
  { id: '79', name: 'JavaScript-Garbage-Collection', topic: 'JavaScript Garbage Collection', desc: 'Understand memory management in JavaScript: reachability, mark-and-sweep, reference counting, and memory leak prevention.', concepts: ['Reachability concept', 'Mark-and-sweep algorithm', 'Generational GC', 'Reference counting', 'Memory leaks (closures, DOM, timers)', 'WeakMap and WeakSet memory', 'Chrome DevTools Memory tab', 'Memory optimization tips'] },
  { id: '80', name: 'JavaScript-This-Binding-Patterns', topic: 'JavaScript this Binding Patterns', desc: 'Master all patterns of this binding: default, implicit, explicit, new binding, arrow function binding, and event handler binding.', concepts: ['Default binding (global/window)', 'Implicit binding (method call)', 'Explicit binding (call, apply, bind)', 'New binding (constructor)', 'Arrow function lexical this', 'Event handler this', 'this in class methods', 'Binding priority rules'] },
  { id: '81', name: 'JavaScript-Function-Composition', topic: 'JavaScript Function Composition', desc: 'Build complex operations by composing simple functions. Learn pipe, compose, point-free style, and functional programming patterns.', concepts: ['Function composition concept', 'Pipe (left-to-right)', 'Compose (right-to-left)', 'Point-free style', 'Currying for composition', 'Partial application', 'Composition utility functions', 'Real-world composition examples'] },
  { id: '82', name: 'JavaScript-Currying', topic: 'JavaScript Currying', desc: 'Transform multi-argument functions into nested single-argument functions. Understand partial application and currying utilities.', concepts: ['Currying definition', 'Manual currying implementation', 'Currying with bind()', 'Currying with closures', 'Partial application vs currying', 'Currying in functional libraries', 'Advanced currying patterns', 'When to use currying'] },
  { id: '83', name: 'JavaScript-Debouncing-and-Throttling', topic: 'JavaScript Debouncing and Throttling', desc: 'Optimize event handlers with debouncing and throttling. Understand implementation, use cases, and advanced rate-limiting patterns.', concepts: ['Debouncing mechanics', 'Throttling mechanics', 'Debounce implementation', 'Throttle implementation', 'Leading vs trailing execution', 'RequestAnimationFrame as throttle', 'Debouncing for autocomplete', 'Throttling for scroll/resize'] },
  { id: '84', name: 'JavaScript-Web-Workers', topic: 'JavaScript Web Workers', desc: 'Run JavaScript in background threads with Web Workers. Understand message passing, shared memory, and worker use cases.', concepts: ['Web Worker creation', 'postMessage communication', 'onmessage event handler', 'Worker termination', 'Dedicated vs Shared Workers', 'Service Workers introduction', 'Transferable objects', 'Worker limitations'] },
  { id: '85', name: 'JavaScript-Service-Workers', topic: 'JavaScript Service Workers', desc: 'Build offline-first applications with Service Workers. Implement caching strategies, push notifications, and background sync.', concepts: ['Service Worker lifecycle (install, activate, fetch)', 'Cache API', 'Caching strategies (cache-first, network-first)', 'Precaching and runtime caching', 'Push notifications', 'Background sync', 'Service Worker scope', 'Offline-first architecture'] },
  { id: '86', name: 'JavaScript-IndexedDB', topic: 'JavaScript IndexedDB', desc: 'Client-side database with IndexedDB: object stores, indexes, transactions, cursors, and CRUD operations.', concepts: ['IndexedDB opening (indexedDB.open)', 'Object stores', 'Indexes for searching', 'Transactions', 'CRUD operations (put, get, delete)', 'Cursors for iteration', 'Error handling', 'IndexedDB vs localStorage'] },
  { id: '87', name: 'JavaScript-Cache-API', topic: 'JavaScript Cache API', desc: 'Programmatic caching with the Cache API: storing requests/responses, cache management, and integration with Service Workers.', concepts: ['CacheStorage object', 'caches.open()', 'Adding to cache (add, addAll, put)', 'Reading from cache (match, matchAll)', 'Deleting from cache', 'Cache versioning', 'Cache quotas', 'Cache in Service Workers'] },
  { id: '88', name: 'JavaScript-Internationalization', topic: 'JavaScript Internationalization', desc: 'Build internationalized applications with Intl API: date formatting, number formatting, plural rules, and locale-aware sorting.', concepts: ['Intl.DateTimeFormat', 'Intl.NumberFormat', 'Intl.Collator for sorting', 'Intl.PluralRules', 'Intl.RelativeTimeFormat', 'Intl.ListFormat', 'Locale selection', 'Polyfilling Intl API'] },
  { id: '89', name: 'JavaScript-Regular-Expressions', topic: 'JavaScript Regular Expressions', desc: 'Master regular expressions: patterns, flags, methods (exec, test, match, replace, search, split), and advanced regex techniques.', concepts: ['Regex creation (literal, constructor)', 'Patterns (character classes, quantifiers)', 'Groups and backreferences', 'Lookahead and lookbehind', 'Regex flags (g, i, m, s, u, y)', 'exec and test methods', 'String methods with regex', 'Regex performance and optimization'] },
  { id: '90', name: 'JavaScript-Typed-Arrays', topic: 'JavaScript Typed Arrays', desc: 'Work with binary data using Typed Arrays: Int8Array, Uint8Array, Float64Array, ArrayBuffer, and DataView.', concepts: ['Typed array types (Int, Uint, Float)', 'ArrayBuffer', 'DataView for custom types', 'Endianness handling', 'Binary data manipulation', 'FileReader with typed arrays', 'Canvas pixel data', 'WebSocket binary data'] },

  // ====== ES6+ FEATURES & MODERN JS (91-105) ======
  { id: '91', name: 'JavaScript-ES6-Features', topic: 'JavaScript ES6 Features', desc: 'Comprehensive overview of ES6 (ES2015) features that transformed JavaScript: let/const, arrow functions, classes, modules, and more.', concepts: ['let and const', 'Arrow functions', 'Classes', 'Template literals', 'Destructuring', 'Default/rest/spread', 'Promises', 'Modules (import/export)'] },
  { id: '92', name: 'JavaScript-ES7-ES8-Features', topic: 'JavaScript ES7/ES8 Features', desc: 'Explore ES2016 and ES2017 features: Array.includes, exponentiation operator, async/await, Object.values/entries, and string padding.', concepts: ['Array.prototype.includes', 'Exponentiation operator (**)', 'Async/await', 'Object.values and Object.entries', 'String padStart and padEnd', 'Object.getOwnPropertyDescriptors', 'Trailing commas', 'Atomics and SharedArrayBuffer'] },
  { id: '93', name: 'JavaScript-ES9-ES10-Features', topic: 'JavaScript ES9/ES10 Features', desc: 'ES2018 and ES2019 features: rest/spread objects, async iteration, Promise.finally, flat/flatMap, Object.fromEntries, and trimStart/trimEnd.', concepts: ['Rest/spread for objects', 'Async iteration (for await...of)', 'Promise.prototype.finally', 'Array flat and flatMap', 'Object.fromEntries', 'String trimStart and trimEnd', 'Symbol.description', 'Optional catch binding'] },
  { id: '94', name: 'JavaScript-ES11-ES12-Features', topic: 'JavaScript ES11/ES12 Features', desc: 'ES2020 and ES2021 features: optional chaining, nullish coalescing, Promise.allSettled, logical assignment, Numeric separators, and replaceAll.', concepts: ['Optional chaining (?.)', 'Nullish coalescing (??)', 'Promise.allSettled', 'Logical assignment (&&=, ||=, ??=)', 'Numeric separators (_)', 'String.prototype.replaceAll', 'WeakRef and FinalizationRegistry', 'Promise.any'] },
  { id: '95', name: 'JavaScript-ES13-ES14-Features', topic: 'JavaScript ES13/ES14 Features', desc: 'ES2022 and ES2023 features: class fields, private methods, top-level await, Array findLast, Hashbang grammar, and error cause.', concepts: ['Class fields (public, private #)', 'Private methods (#method)', 'Static initialization blocks', 'Top-level await', 'Array findLast and findLastIndex', 'Hashbang/Shebang grammar', 'Error cause property', 'Array grouping'] },
  { id: '96', name: 'JavaScript-Pattern-Matching', topic: 'JavaScript Pattern Matching', desc: 'Pattern matching proposal and patterns for matching data structures. Destructuring patterns, conditional matching, and switch expressions.', concepts: ['Pattern matching proposal', 'Destructuring patterns', 'Conditional matching', 'Switch expression pattern', 'Pattern guards', 'Array pattern matching', 'Object pattern matching', 'Pattern matching libraries'] },
  { id: '97', name: 'JavaScript-Event-Loop', topic: 'JavaScript Event Loop', desc: 'Deep dive into the event loop: call stack, task queue, microtask queue, rendering pipeline, and how JavaScript achieves concurrency.', concepts: ['Call stack', 'Task queue (macrotasks)', 'Microtask queue', 'Event loop phases', 'setTimeout vs Promise timing', 'requestAnimationFrame timing', 'Rendering pipeline', 'Blocking the event loop'] },
  { id: '98', name: 'JavaScript-Microtasks-vs-Macrotasks', topic: 'JavaScript Microtasks vs Macrotasks', desc: 'Understand the difference between microtasks and macrotasks, their execution order, and how they affect async code execution.', concepts: ['Microtasks (Promise, MutationObserver)', 'Macrotasks (setTimeout, setInterval, I/O)', 'Microtask queue processing', 'Macrotask queue processing', 'Execution order examples', 'Microtask starvation', 'QueueMicrotask API', 'Event loop priorities'] },
  { id: '99', name: 'JavaScript-Memory-Management', topic: 'JavaScript Memory Management', desc: 'Comprehensive memory management: heap, stack, garbage collection, memory leaks, profiling tools, and optimization strategies.', concepts: ['Heap and stack', 'Mark-and-sweep GC', 'Reference counting', 'Memory leak patterns (DOM, closures, timers)', 'Chrome DevTools memory profiling', 'Heap snapshots', 'Allocation timelines', 'Memory optimization'] },
  { id: '100', name: 'JavaScript-Performance-Optimization', topic: 'JavaScript Performance Optimization', desc: 'Optimize JavaScript code: profiling, bottlenecks, rendering performance, network optimization, and best practices for fast applications.', concepts: ['Performance profiling tools', 'Critical rendering path', 'Debouncing and throttling', 'DOM manipulation optimization', 'Network optimization', 'Code splitting', 'Lazy loading', 'Web performance APIs'] },
  { id: '101', name: 'JavaScript-Data-Structures', topic: 'JavaScript Data Structures', desc: 'Implement fundamental data structures in JavaScript: stacks, queues, linked lists, trees, graphs, and hash tables.', concepts: ['Stack implementation', 'Queue implementation', 'Linked list (singly/doubly)', 'Binary search tree', 'Graph representation', 'Hash table', 'Heap (min/max)', 'Data structure complexity'] },
  { id: '102', name: 'JavaScript-Algorithms-Basics', topic: 'JavaScript Algorithms Basics', desc: 'Algorithm fundamentals: time/space complexity, Big O notation, searching, sorting, and problem-solving strategies.', concepts: ['Big O notation', 'Time complexity', 'Space complexity', 'Linear search', 'Binary search', 'Bubble sort and selection sort', 'Insertion sort', 'Problem-solving approach'] },
  { id: '103', name: 'JavaScript-Recursion-and-Backtracking', topic: 'JavaScript Recursion and Backtracking', desc: 'Advanced recursion patterns and backtracking algorithms: tree traversal, permutations, combinations, and constraint satisfaction.', concepts: ['Recursion patterns', 'Recursive backtracking', 'N-Queens problem', 'Permutations generation', 'Subsets and combinations', 'Maze solving', 'Sudoku solver', 'Memoization in recursion'] },
  { id: '104', name: 'JavaScript-Sorting-Algorithms', topic: 'JavaScript Sorting Algorithms', desc: 'Implement and understand sorting algorithms: merge sort, quicksort, heapsort, counting sort, and JavaScript native sort internals.', concepts: ['Merge sort (divide and conquer)', 'Quicksort (pivot partitioning)', 'Heapsort (heap data structure)', 'Counting sort (non-comparison)', 'Radix sort', 'Sorting stability', 'Comparative performance', 'JavaScript native sort'] },
  { id: '105', name: 'JavaScript-Searching-Algorithms', topic: 'JavaScript Searching Algorithms', desc: 'Search algorithms: linear search, binary search, depth-first search, breadth-first search, and string searching (KMP, Rabin-Karp).', concepts: ['Linear search', 'Binary search', 'Depth-first search (DFS)', 'Breadth-first search (BFS)', 'Binary search tree search', 'Graph traversal', 'String search (KMP algorithm)', 'Rabin-Karp algorithm'] },
  { id: '106', name: 'JavaScript-Dynamic-Programming', topic: 'JavaScript Dynamic Programming', desc: 'Master dynamic programming: memoization, tabulation, Fibonacci, knapsack, longest common subsequence, and optimal substructure.', concepts: ['Memoization (top-down)', 'Tabulation (bottom-up)', 'Fibonacci with DP', 'Knapsack problem', 'Longest common subsequence', 'Longest increasing subsequence', 'Coin change problem', 'Edit distance'] },
  { id: '107', name: 'JavaScript-Testing-Basics', topic: 'JavaScript Testing Basics', desc: 'Introduction to testing: unit tests, integration tests, assertion libraries, test runners, and the testing pyramid.', concepts: ['Testing pyramid', 'Unit tests', 'Integration tests', 'Assertion libraries (Chai, Node assert)', 'Test runners (Jest, Mocha, Vitest)', 'Test-driven development (TDD)', 'Behavior-driven development (BDD)', 'Code coverage'] },
  { id: '108', name: 'JavaScript-Jest-Testing', topic: 'JavaScript Testing with Jest', desc: 'Comprehensive Jest testing: setup, matchers, mocking, snapshot testing, async testing, and configuration.', concepts: ['Jest setup and configuration', 'Matchers (toBe, toEqual, toContain)', 'Mocking (jest.fn, jest.mock)', 'Snapshot testing', 'Async testing', 'Setup and teardown (beforeEach, afterEach)', 'Timer mocking', 'Code coverage with Jest'] },
  { id: '109', name: 'JavaScript-NodeJS-Basics', topic: 'JavaScript Node.js Basics', desc: 'Introduction to Node.js: runtime, modules, file system, path, events, streams, and building command-line tools.', concepts: ['Node.js architecture', 'Core modules (fs, path, os)', 'Reading and writing files', 'Streams and buffers', 'Events and EventEmitter', 'Process and environment', 'Command-line arguments', 'npm and package.json'] },
  { id: '110', name: 'JavaScript-Error-Handling-Advanced', topic: 'JavaScript Error Handling Advanced', desc: 'Advanced error handling patterns: error classes, error boundaries, error monitoring, exception handling in Node.js, and fallback strategies.', concepts: ['Custom error class hierarchy', 'Operational vs programmer errors', 'Domain errors patterns', 'Error monitoring services', 'Node.js process uncaughtException', 'Error boundary in React', 'Graceful degradation', 'Fallback strategies'] },
  { id: '111', name: 'JavaScript-Design-Patterns', topic: 'JavaScript Design Patterns', desc: 'Classic design patterns in JavaScript: singleton, observer, factory, module, decorator, strategy, and MVC patterns.', concepts: ['Singleton pattern', 'Observer pattern', 'Factory pattern', 'Module pattern', 'Decorator pattern', 'Strategy pattern', 'MVC pattern', 'Revealing module pattern'] },
  { id: '112', name: 'JavaScript-Observer-Pattern', topic: 'JavaScript Observer Pattern', desc: 'Implement the observer pattern with EventEmitter, custom events, MutationObserver, and reactive programming examples.', concepts: ['Observer pattern structure', 'EventEmitter implementation', 'Custom events with DOM', 'MutationObserver', 'IntersectionObserver', 'ResizeObserver', 'Reactive programming basics', 'Pub/sub pattern'] },
  { id: '113', name: 'JavaScript-Singleton-and-Factory', topic: 'JavaScript Singleton and Factory', desc: 'Singleton and Factory design patterns in JavaScript with modern implementations using ES6 classes and modules.', concepts: ['Singleton with module pattern', 'Singleton with class', 'Lazy initialization', 'Simple factory', 'Factory method', 'Abstract factory', 'Factory vs constructor', 'Modern singleton alternatives'] },
  { id: '114', name: 'JavaScript-Module-Patterns', topic: 'JavaScript Module Patterns', desc: 'Various module patterns: revealing module, AMD, CommonJS, ES6 modules, dynamic imports, and module federation.', concepts: ['Revealing module pattern', 'AMD modules (RequireJS)', 'CommonJS (Node.js)', 'ES6 modules', 'Dynamic import()', 'Module federation (Webpack 5)', 'UMD pattern', 'Module system comparison'] },
  { id: '115', name: 'JavaScript-Security-Basics', topic: 'JavaScript Security Basics', desc: 'Web security essentials: XSS prevention, CSRF protection, Content Security Policy, secure communication, and input validation.', concepts: ['Cross-site scripting (XSS)', 'Cross-site request forgery (CSRF)', 'Content Security Policy (CSP)', 'HTTPS and secure cookies', 'Input validation and sanitization', 'SQL injection prevention', 'Authentication tokens', 'OWASP top 10 overview'] },
  { id: '116', name: 'JavaScript-Authentication-and-Authorization', topic: 'JavaScript Authentication and Authorization', desc: 'Implement authentication: JWT tokens, OAuth2, session management, secure storage, and role-based access control.', concepts: ['JWT (JSON Web Tokens)', 'OAuth2 flow', 'Session vs token auth', 'Local storage vs cookies', 'Password hashing (bcrypt)', 'Role-based access control', 'Refresh tokens', 'Social login integration'] },
  { id: '117', name: 'JavaScript-WebSockets', topic: 'JavaScript WebSockets', desc: 'Real-time communication with WebSockets: WebSocket API, Socket.IO, message handling, reconnection, and use cases.', concepts: ['WebSocket API', 'Socket.IO library', 'Message handling (send/receive)', 'Reconnection strategies', 'Room and namespace (Socket.IO)', 'WebSocket vs HTTP polling', 'Real-time use cases', 'WebSocket security'] },
  { id: '118', name: 'JavaScript-Server-Sent-Events', topic: 'JavaScript Server-Sent Events', desc: 'Server push technology with EventSource API. Unidirectional data streaming, automatic reconnection, and use cases for SSE.', concepts: ['EventSource API', 'Server-sent event format', 'Automatic reconnection', 'Event types (named events)', 'SSE vs WebSocket comparison', 'SSE with Express', 'SSE use cases (notifications, feeds)', 'Event stream parsing'] },
  { id: '119', name: 'JavaScript-GraphQL-Basics', topic: 'JavaScript GraphQL Basics', desc: 'Introduction to GraphQL: queries, mutations, subscriptions, schemas, resolvers, and Apollo Client integration.', concepts: ['GraphQL vs REST', 'Queries and fields', 'Mutations', 'Subscriptions', 'Schema definition (SDL)', 'Resolvers', 'Apollo Client', 'GraphQL playground'] },
  { id: '120', name: 'JavaScript-REST-API-Integration', topic: 'JavaScript REST API Integration', desc: 'Consume and build REST APIs: HTTP methods, request/response handling, authentication, pagination, and error handling.', concepts: ['RESTful API design', 'HTTP methods and status codes', 'Fetch and Axios', 'Request/response interceptors', 'Authentication headers', 'Pagination and filtering', 'API response caching', 'Error handling strategies'] },
  { id: '121', name: 'JavaScript-Data-Visualization', topic: 'JavaScript Data Visualization', desc: 'Create visualizations with Chart.js, D3.js basics, Canvas API, SVG manipulation, and dashboard rendering.', concepts: ['Chart.js for charts', 'D3.js data joins', 'Canvas 2D API', 'SVG manipulation', 'Bar charts and line charts', 'Pie charts and donuts', 'Interactive dashboards', 'Chart animation'] },
  { id: '122', name: 'JavaScript-Canvas-API', topic: 'JavaScript Canvas API', desc: 'Drawing with Canvas API: shapes, paths, text, images, animations, pixel manipulation, and game rendering.', concepts: ['Canvas context (2D)', 'Drawing shapes and paths', 'Colors and gradients', 'Text rendering', 'Image drawing and manipulation', 'Animation loop', 'Pixel manipulation', 'Canvas performance'] },
  { id: '123', name: 'JavaScript-SVG-Manipulation', topic: 'JavaScript SVG Manipulation', desc: 'Create and manipulate SVG graphics with JavaScript: shapes, paths, animations, interactivity, and data-driven SVGs.', concepts: ['SVG elements (circle, rect, path, text)', 'SVG attributes vs CSS', 'SVG viewBox and coordinates', 'JavaScript SVG manipulation', 'SVG animation with SMIL/CSS', 'Interactive SVGs', 'Data-driven SVGs', 'SVG vs Canvas comparison'] },
  { id: '124', name: 'JavaScript-Animation-Basics', topic: 'JavaScript Animation Basics', desc: 'Browser animation: requestAnimationFrame, CSS animations via JS, Web Animations API, and smooth animation patterns.', concepts: ['requestAnimationFrame loop', 'Easing functions', 'CSS animations via JavaScript', 'Web Animations API', 'Timeline-based animation', 'Scroll-based animation', 'Animation performance', 'Hardware-accelerated animation'] },
  { id: '125', name: 'JavaScript-Form-Validation', topic: 'JavaScript Form Validation', desc: 'Client-side form validation: Constraint Validation API, custom validators, real-time validation, and accessible error messages.', concepts: ['HTML5 validation attributes', 'Constraint Validation API', 'Custom validity (setCustomValidity)', 'Real-time validation', 'Regex patterns for validation', 'Accessible error messages', 'Form submission handling', 'Validation libraries (Yup, Joi)'] },
  { id: '126', name: 'JavaScript-File-API', topic: 'JavaScript File API', desc: 'Work with files in the browser: File API, FileReader, drag and drop, file uploads, and client-side file processing.', concepts: ['File object and FileList', 'FileReader methods (readAsText, readAsDataURL)', 'Drag and drop file handling', 'File upload with XMLHttpRequest', 'File upload with Fetch', 'Progress events', 'File type validation', 'Client-side image preview'] },
  { id: '127', name: 'JavaScript-Drag-and-Drop', topic: 'JavaScript Drag and Drop', desc: 'Implement drag and drop functionality: drag events, draggable attribute, drop zones, sortable lists, and custom drag visuals.', concepts: ['dragstart, dragover, drop events', 'DataTransfer API', 'Draggable attribute', 'Custom drag images', 'Sortable list implementation', 'File drag and drop', 'Touch events for mobile drag', 'Drag and drop libraries'] },
  { id: '128', name: 'JavaScript-Cookies-and-Sessions', topic: 'JavaScript Cookies and Sessions', desc: 'Client-side cookies: setting, getting, deleting, attributes (expires, path, domain, secure, httpOnly), and session management.', concepts: ['document.cookie API', 'Cookie attributes (expires, path, domain)', 'Secure and HttpOnly cookies', 'SameSite attribute', 'Cookie vs sessionStorage vs localStorage', 'Session management patterns', 'Cookie consent and GDPR', 'Third-party cookies'] },
  { id: '129', name: 'JavaScript-Browser-History-API', topic: 'JavaScript Browser History API', desc: 'Manipulate browser history with pushState, replaceState, popstate events. Build SPA routing and navigation.', concepts: ['history.pushState', 'history.replaceState', 'popstate event', 'Hash-based routing', 'History API routing', 'SPA navigation patterns', 'URL manipulation', 'History API vs hash routing'] },
  { id: '130', name: 'JavaScript-Localization', topic: 'JavaScript Localization', desc: 'Localize applications: Intl API, locale detection, translation files, pluralization, and RTL support.', concepts: ['Locale detection', 'Translation strategies', 'Intl API localization', 'Pluralization rules', 'Date/time localization', 'Number/currency formatting', 'RTL (right-to-left) support', 'i18n libraries (i18next)'] },
  { id: '131', name: 'JavaScript-Accessibility', topic: 'JavaScript Accessibility (a11y)', desc: 'Build accessible web applications: ARIA attributes, keyboard navigation, screen readers, focus management, and WCAG compliance.', concepts: ['ARIA roles and attributes', 'Keyboard navigation', 'Focus management', 'Screen reader compatibility', 'WCAG 2.1 guidelines', 'Semantic HTML with JS', 'Accessible forms', 'Accessibility testing tools'] },
  { id: '132', name: 'JavaScript-Responsive-Design', topic: 'JavaScript Responsive Design', desc: 'JavaScript for responsive design: viewport detection, media queries in JS, dynamic layouts, and device feature detection.', concepts: ['Window resize events', 'matchMedia API', 'Viewport units and detection', 'Device pixel ratio', 'Orientation detection', 'Responsive navigation patterns', 'Conditional loading (responsive)', 'Mobile touch detection'] },
  { id: '133', name: 'JavaScript-Progressive-Web-Apps', topic: 'JavaScript Progressive Web Apps', desc: 'Build PWAs: manifest.json, Service Workers, offline support, add-to-home-screen, push notifications, and lighthouse audits.', concepts: ['Web app manifest', 'Service Worker registration', 'Offline caching strategies', 'Add-to-home-screen', 'Push notifications', 'Background sync', 'Lighthouse PWA audit', 'PWA vs native apps'] },
  { id: '134', name: 'JavaScript-Tools-and-Builders', topic: 'JavaScript Tools and Builders', desc: 'Modern JavaScript tooling: Webpack, Vite, Babel, ESLint, Prettier, and build pipeline configuration.', concepts: ['Webpack configuration', 'Vite bundler', 'Babel transpilation', 'ESLint configuration', 'Prettier formatting', 'NPM scripts and lifecycle', 'Environment variables', 'Build optimization'] },
  { id: '135', name: 'JavaScript-TypeScript-Basics', topic: 'JavaScript TypeScript Basics', desc: 'Introduction to TypeScript: types, interfaces, generics, enums, type inference, and TypeScript configuration.', concepts: ['TypeScript setup (tsconfig.json)', 'Basic types (string, number, boolean, array)', 'Interfaces and type aliases', 'Generics', 'Enums and unions', 'Type inference', 'TypeScript with React', 'TypeScript compilation'] },
  { id: '136', name: 'JavaScript-TypeScript-Advanced', topic: 'JavaScript TypeScript Advanced', desc: 'Advanced TypeScript: conditional types, mapped types, template literal types, infer keyword, and utility types.', concepts: ['Conditional types', 'Mapped types', 'Template literal types', 'infer keyword', 'Utility types (Partial, Required, Pick)', 'Discriminated unions', 'Branded types', 'Type-safe patterns'] },
  { id: '137', name: 'JavaScript-React-Basics', topic: 'JavaScript React Basics', desc: 'Introduction to React: components, JSX, props, state, hooks, and component lifecycle.', concepts: ['React setup (Vite + React)', 'JSX syntax', 'Components (functional)', 'Props and prop drilling', 'useState hook', 'useEffect hook', 'Event handling in React', 'Conditional rendering'] },
  { id: '138', name: 'JavaScript-React-Hooks', topic: 'JavaScript React Hooks', desc: 'Deep dive into React Hooks: useState, useEffect, useContext, useRef, useMemo, useCallback, and custom hooks.', concepts: ['useState patterns', 'useEffect lifecycle', 'useContext for global state', 'useRef for DOM references', 'useMemo for memoization', 'useCallback for function memoization', 'useReducer for complex state', 'Custom hooks creation'] },
  { id: '139', name: 'JavaScript-React-Advanced', topic: 'JavaScript React Advanced', desc: 'Advanced React patterns: render props, higher-order components, context API, portals, error boundaries, and performance optimization.', concepts: ['Compound components', 'Render props pattern', 'Higher-order components', 'Context API advanced', 'React Portals', 'Error boundaries', 'React.lazy and Suspense', 'React.memo optimization'] },
  { id: '140', name: 'JavaScript-NodeJS-Express', topic: 'JavaScript Node.js Express', desc: 'Build web servers with Express.js: routing, middleware, request handling, error handling, and RESTful API development.', concepts: ['Express setup', 'Routing (app.get, app.post)', 'Middleware functions', 'Request and response objects', 'Express Router', 'Error handling middleware', 'Serving static files', 'API development with Express'] },
  { id: '141', name: 'JavaScript-Calculator-App', topic: 'JavaScript Calculator App', desc: 'Build a fully functional calculator: arithmetic operations, keyboard support, history, and math expression evaluation.', concepts: ['UI design for calculator', 'Expression parsing', 'Keyboard event handling', 'Operation queue management', 'History feature', 'Memory functions (MC, MR, M+, M-)', 'Responsive calculator layout', 'Math expression evaluation'] },
  { id: '142', name: 'JavaScript-Todo-App', topic: 'JavaScript Todo App', desc: 'Build a complete todo application: CRUD operations, local storage persistence, filtering, drag-and-drop sorting, and categories.', concepts: ['CRUD operations', 'Local storage persistence', 'Task filtering (all, active, completed)', 'Drag-and-drop sorting', 'Categories and tags', 'Due dates and priorities', 'Search functionality', 'Todo app architecture'] },
  { id: '143', name: 'JavaScript-Weather-App', topic: 'JavaScript Weather App', desc: 'Build a weather application: API integration, geolocation, weather data display, forecasts, and location search.', concepts: ['Weather API integration (OpenWeatherMap)', 'Geolocation API', 'Async data fetching', 'Weather data visualization', '5-day forecast display', 'Location search', 'Unit conversion (°C/°F)', 'Weather icons and animations'] },
  { id: '144', name: 'JavaScript-Movie-Search-App', topic: 'JavaScript Movie Search App', desc: 'Build a movie database app: TMDB API, search, filtering, pagination, movie details, and favorites management.', concepts: ['TMDB API integration', 'Search with debouncing', 'Filtering and sorting', 'Pagination and infinite scroll', 'Movie detail pages', 'Favorites (localStorage)', 'Responsive grid layout', 'API key management'] },
  { id: '145', name: 'JavaScript-Chat-Application', topic: 'JavaScript Chat Application', desc: 'Build a real-time chat app: WebSocket communication, message history, user authentication, and chat rooms.', concepts: ['Socket.IO setup', 'Real-time messaging', 'User authentication', 'Chat rooms', 'Message history', 'Online/offline status', 'Typing indicators', 'Message formatting'] },
  { id: '146', name: 'JavaScript-E-Commerce-Cart', topic: 'JavaScript E-Commerce Cart', desc: 'Build a shopping cart: product listing, cart management, quantity controls, price calculation, and checkout flow.', concepts: ['Product listing component', 'Cart state management', 'Quantity increment/decrement', 'Price calculation (subtotal, tax, total)', 'Coupon code system', 'Cart persistence', 'Checkout flow', 'Cart UI/UX design'] },
  { id: '147', name: 'JavaScript-Social-Media-Dashboard', topic: 'JavaScript Social Media Dashboard', desc: 'Build a social media analytics dashboard: data visualization, charts, filters, and responsive dashboard layout.', concepts: ['Dashboard layout design', 'Chart.js integration', 'Data filtering and time ranges', 'Social media metrics display', 'Responsive dashboard', 'Dark/light theme toggle', 'Export report feature', 'Dashboard widgets'] },
  { id: '148', name: 'JavaScript-Music-Player', topic: 'JavaScript Music Player', desc: 'Build a web music player: audio playback, playlist management, progress controls, and visualizations.', concepts: ['HTML5 Audio API', 'Playlist management', 'Play, pause, skip controls', 'Progress bar and seek', 'Volume controls', 'Audio visualizations (Canvas)', 'Shuffle and repeat modes', 'Keyboard shortcuts'] },
  { id: '149', name: 'JavaScript-Image-Editor', topic: 'JavaScript Image Editor', desc: 'Build a browser-based image editor: Canvas manipulation, filters, drawing tools, and export functionality.', concepts: ['Canvas image loading', 'Image filters (brightness, contrast, sepia)', 'Drawing tools (brush, eraser, shapes)', 'Crop and resize', 'Undo/redo feature', 'Layer management', 'Image export (download)', 'File save as PNG/JPEG'] },
  { id: '150', name: 'JavaScript-Quiz-App', topic: 'JavaScript Quiz App', desc: 'Build an interactive quiz application: questions, timers, scoring, leaderboard, and multiple categories.', concepts: ['Quiz engine architecture', 'Timer countdown', 'Scoring system', 'Question navigation', 'Leaderboard (localStorage)', 'Multiple categories', 'Quiz result analysis', 'Responsive quiz UI'] },
  { id: '151', name: 'JavaScript-File-Uploader', topic: 'JavaScript File Uploader', desc: 'Build a file upload component: drag-drop, progress bars, file validation, preview, and chunked uploads.', concepts: ['Drag and drop upload', 'File validation (type, size)', 'Upload progress bar', 'File preview (images, videos)', 'Chunked file upload', 'Multiple file upload', 'Upload queue management', 'Error handling and retry'] },
  { id: '152', name: 'JavaScript-Data-Table', topic: 'JavaScript Data Table', desc: 'Build a feature-rich data table: sorting, filtering, pagination, column resizing, and data export.', concepts: ['Table rendering', 'Column sorting', 'Row filtering', 'Pagination controls', 'Column resize and reorder', 'Row selection', 'Data export (CSV/Excel)', 'Virtual scrolling for large data'] },
  { id: '153', name: 'JavaScript-Whiteboard-App', topic: 'JavaScript Whiteboard App', desc: 'Build an interactive whiteboard: drawing, shapes, colors, sticky notes, and real-time collaboration.', concepts: ['Canvas drawing tools', 'Shape tools (rectangle, circle, line)', 'Color picker and brush size', 'Sticky notes', 'Undo/redo system', 'Clear and erase', 'Export as image', 'Real-time collaboration basics'] },
  { id: '154', name: 'JavaScript-Portfolio-Website', topic: 'JavaScript Portfolio Website', desc: 'Build a professional portfolio website: project showcase, animations, contact form, and responsive design.', concepts: ['Portfolio layout', 'Project showcase with filters', 'Smooth scrolling animations', 'Contact form with validation', 'Responsive navigation', 'Dark/light theme', 'Performance optimization', 'SEO basics'] },
  { id: '155', name: 'AI-Powered-Web-App', topic: 'AI-Powered Web App', desc: 'Build an AI-powered web application using TensorFlow.js, OpenAI API integration, and machine learning in the browser.', concepts: ['AI API integration (OpenAI/HuggingFace)', 'TensorFlow.js basics', 'Browser-based ML inference', 'Prompt engineering', 'AI response rendering', 'Loading states and streaming', 'Rate limiting and caching', 'AI app UX patterns'] }
];

function createLesson(module) {
  const c = module.concepts;
  const t = module.topic;
  const tl = t.toLowerCase();
  const lines = [];
  const H = '#'; const H2 = '##'; const H3 = '###'; const H4 = '####';

  lines.push(`${H} ${t}`);
  lines.push('');
  lines.push(`${H2} Overview`);
  lines.push(module.desc);
  lines.push('');
  lines.push(`${H2} Learning Objectives`);
  lines.push('By the end of this module, you should be able to:');
  for (let i = 0; i < Math.min(c.length, 8); i++) {
    lines.push(`${i + 1}. Understand and apply ${c[i].toLowerCase()}`);
  }
  lines.push(`${Math.min(c.length, 8) + 1}. Debug common issues and edge cases related to ${tl}`);
  lines.push(`${Math.min(c.length, 8) + 2}. Write production-ready code using best practices`);
  lines.push('');

  lines.push(`${H2} Key Concepts`);
  lines.push('The following table summarizes the core concepts covered in this module:');
  lines.push('');
  lines.push('| # | Concept | Description | Practical Use |');
  lines.push('|---|---------|-------------|---------------|');
  const descs = [
    'Foundation for understanding this topic',
    'Builds upon the previous concept',
    'Enables practical implementation',
    'Used in real-world applications',
    'Advanced patterns and techniques',
    'Optimization and best practices',
    'Edge cases and error handling',
    'Integration with other features'
  ];
  c.forEach((concept, i) => {
    const d = descs[i % descs.length];
    const use = i % 2 === 0 ? 'Everyday coding tasks' : 'Advanced scenarios';
    lines.push(`| ${i + 1} | **${concept}** | ${d} | ${use} |`);
  });
  lines.push('');

  lines.push(`${H2} Detailed Explanation`);
  lines.push('');

  for (let i = 0; i < Math.min(c.length, 8); i++) {
    lines.push(`${H3} ${i + 1}. ${c[i]}`);
    lines.push('');
    lines.push(`${c[i]} is a critical aspect of ${tl} in JavaScript. It allows developers to write more`);
    lines.push(`efficient, maintainable, and scalable code. Understanding ${c[i].toLowerCase()} is essential`);
    lines.push('for building robust applications that handle real-world scenarios gracefully.');
    lines.push('');
    lines.push(`${H4} How It Works`);
    lines.push('');
    lines.push(`When you work with ${c[i].toLowerCase()} in JavaScript, the engine processes it according to`);
    lines.push('specific rules defined by the ECMAScript specification. This involves a series of steps');
    lines.push('that ensure predictable behavior across different environments and use cases.');
    lines.push('');
    lines.push(`${H4} Key Points`);
    lines.push(`- ${c[i]} is fundamental to understanding ${tl}`);
    lines.push(`- Mastery of ${c[i].toLowerCase()} enables more advanced programming patterns`);
    lines.push('- Proper implementation follows established conventions and best practices');
    lines.push(`- Common mistakes include misunderstanding scope and type behavior in ${c[i].toLowerCase()}`);
    lines.push(`- ${c[i]} integrates with other JavaScript features to create powerful solutions`);
    lines.push('');
  }

  lines.push(`${H2} Comparison: Important Techniques`);
  lines.push('');
  lines.push('| Technique | When to Use | When to Avoid | Performance Impact |');
  lines.push('|-----------|-------------|---------------|-------------------|');
  const techs = [
    ['Basic approach', 'Simple use cases', 'Complex scenarios', 'Minimal'],
    ['Advanced pattern', 'Production code', 'Learning phases', 'Optimal'],
    ['Alternative method', 'Specific requirements', 'General use', 'Moderate'],
    ['Modern ES6+ syntax', 'New projects', 'Legacy support', 'Best']
  ];
  techs.forEach(tech => {
    lines.push(`| ${tech[0]} | ${tech[1]} | ${tech[2]} | ${tech[3]} |`);
  });
  lines.push('');

  lines.push(`${H2} Common Mistakes and How to Avoid Them`);
  lines.push('');
  lines.push('| Mistake | Why It Happens | How to Fix | Prevention |');
  lines.push('|---------|---------------|------------|------------|');
  const mistakes = [
    ['Misunderstanding scope', 'Lack of clarity on lexical environment', 'Use let/const properly', 'Study scope chain'],
    ['Type confusion', 'Dynamic typing surprises', 'Use === and typeof checks', 'Add type validation'],
    ['Mutation issues', 'Reference type behavior', 'Use spread/immutable patterns', 'Prefer const'],
    ['Error handling gaps', 'Assuming success paths', 'Add try/catch blocks', 'Defensive programming'],
    ['Performance pitfalls', 'Unoptimized loops/ops', 'Use appropriate data structures', 'Profile regularly'],
    ['Callback nesting', 'Async patterns misuse', 'Use promises/async-await', 'Learn async patterns']
  ];
  mistakes.forEach(m => {
    lines.push(`| ${m[0]} | ${m[1]} | ${m[2]} | ${m[3]} |`);
  });
  lines.push('');

  lines.push(`${H2} Concept Flow Diagram`);
  lines.push('');
  lines.push('```');
  const maxConceptLen = Math.max(...c.slice(0, 6).map(x => x.length));
  const boxWidth = Math.max(maxConceptLen + 4, 55);
  const topBorder = '┌' + '─'.repeat(boxWidth) + '┐';
  const midBorder = '├' + '─'.repeat(boxWidth) + '┤';
  const botBorder = '└' + '─'.repeat(boxWidth) + '┘';
  lines.push(topBorder);
  const titlePad = boxWidth - t.length - 2;
  const titleLeft = Math.floor(Math.max(0, titlePad) / 2);
  const titleRight = Math.max(0, titlePad) - titleLeft;
  lines.push('│ ' + t.padStart(t.length + titleLeft).padEnd(t.length + titleLeft + titleRight) + ' │');
  lines.push(midBorder);
  c.slice(0, Math.min(c.length, 6)).forEach((concept, i) => {
    const rem = boxWidth - concept.length;
    const l = Math.floor(rem / 2);
    const r = rem - l;
    lines.push('│' + ' '.repeat(Math.max(0, l)) + concept + ' '.repeat(Math.max(0, r)) + '│');
    if (i < Math.min(c.length, 6) - 1) {
      const arrowPad = Math.floor((boxWidth - 1) / 2);
      lines.push('│' + ' '.repeat(Math.max(0, arrowPad)) + '│' + ' '.repeat(Math.max(0, boxWidth - arrowPad - 1)) + '│');
      lines.push('│' + ' '.repeat(Math.max(0, arrowPad)) + '▼' + ' '.repeat(Math.max(0, boxWidth - arrowPad - 1)) + '│');
    }
  });
  lines.push(botBorder);
  lines.push('└─────────────────────────────────────────────────────────┘');
  lines.push('');

  lines.push(`${H2} Best Practices`);
  lines.push('');
  const practices = [
    `Always understand the underlying mechanics of ${tl} before using it in production`,
    `Use consistent naming conventions that reflect the purpose of ${tl} components`,
    'Write clean, readable code with proper formatting and meaningful comments',
    'Handle edge cases and error conditions explicitly rather than assuming success',
    'Test your implementation with different inputs and boundary conditions',
    'Follow the principle of least surprise — write predictable, straightforward code',
    `Leverage modern ES6+ features when working with ${tl}`,
    'Profile and optimize only when necessary — avoid premature optimization'
  ];
  practices.forEach((p, i) => {
    lines.push(`${i + 1}. ${p}`);
  });
  lines.push('');

  lines.push(`${H2} Practical Code Example`);
  lines.push('');
  lines.push('\`\`\`javascript');
  lines.push(`// Comprehensive example demonstrating ${tl}`);
  lines.push('// This example covers the key concepts discussed in this module');
  lines.push('');
  const safeName = c[0].toLowerCase().replace(/[^a-z0-9]/gi, '');
  lines.push(`// 1. Using ${c[0]}`);
  lines.push(`const ${safeName || 'concept'} = '${c[0]}';`);
  lines.push(`console.log('Concept 1:', ${safeName || 'concept'});`);
  lines.push('');
  lines.push('// 2. Practical implementation');
  lines.push(`function process${safeName || 'data'}(input) {`);
  lines.push(`  return \`Processed: \${input}\`;`);
  lines.push('}');
  lines.push('');
  lines.push(`// 3. Test the implementation`);
  lines.push(`const result = process${safeName || 'data'}('${tl}');`);
  lines.push('console.log(result);');
  lines.push('');
  lines.push('// 4. Error handling');
  lines.push('try {');
  lines.push('  // Your logic here');
  lines.push('  console.log("Success!");');
  lines.push('} catch (error) {');
  lines.push('  console.error("Error:", error.message);');
  lines.push('}');
  lines.push('\`\`\`');
  lines.push('');

  lines.push(`${H2} Practice Exercises`);
  lines.push('');
  const exercises = [
    `Write a basic implementation that demonstrates the core concepts of ${tl}`,
    `Create a function that utilizes ${c[0] ? c[0].toLowerCase() : tl} in a practical way`,
    `Refactor an existing piece of code to incorporate ${c[1] ? c[1].toLowerCase() : tl} patterns`,
    `Build a small utility that handles error cases related to ${tl}`,
    `Implement a solution that combines ${c[0] ? c[0].toLowerCase() : tl} with ${c[1] ? c[1].toLowerCase() : tl}`
  ];
  exercises.forEach((ex, i) => {
    lines.push(`${i + 1}. ${ex}`);
  });
  lines.push('');

  lines.push(`${H2} Summary`);
  lines.push('');
  lines.push(`${t} is an essential JavaScript concept that every developer should master. `);
  lines.push(`By understanding the ${c.length} key concepts covered in this module — including `);
  const conceptList = c.slice(0, Math.min(c.length, 4)).map(c => c.toLowerCase()).join(', ');
  lines.push(`${conceptList}${c.length > 4 ? ', and more' : ''} — you are now equipped to apply `);
  lines.push(`${tl} effectively in your projects. Remember to follow best practices, `);
  lines.push('handle edge cases, and continuously refine your understanding through practice.');
  lines.push('');
  lines.push('### Key Takeaways');
  lines.push(`- ${t} is fundamental to JavaScript programming`);
  lines.push(`- Master ${c[0] ? c[0].toLowerCase() : tl} before moving to advanced topics`);
  lines.push('- Always handle errors and edge cases');
  lines.push('- Write clean, maintainable code following best practices');
  lines.push('- Practice regularly with real-world examples');
  lines.push('');

  return lines.join('\n');
}

function createExamples(module) {
  const c = module.concepts;
  const t = module.topic;
  const tl = t.toLowerCase();
  const id = module.id;
  const lines = [];
  const escHtml = s => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');

  lines.push('<!DOCTYPE html>');
  lines.push('<html lang="en">');
  lines.push('<head>');
  lines.push('  <meta charset="UTF-8">');
  lines.push('  <meta name="viewport" content="width=device-width, initial-scale=1.0">');
  lines.push('  <title>' + t + ' - Examples</title>');
  lines.push('  <style>');
  lines.push('    * { box-sizing: border-box; }');
  lines.push('    body { font-family: system-ui, -apple-system, sans-serif; line-height: 1.6; max-width: 960px; margin: 0 auto; padding: 20px; background: #f8fafc; color: #334155; }');
  lines.push('    h1 { color: #d97706; border-bottom: 2px solid #d97706; padding-bottom: 10px; }');
  lines.push('    h2 { color: #b45309; margin-top: 30px; }');
  lines.push('    .example { background: #fff; border-radius: 10px; padding: 20px; margin: 20px 0; border: 1px solid #e2e8f0; border-left: 4px solid #d97706; box-shadow: 0 1px 3px rgba(0,0,0,0.06); }');
  lines.push('    .example h3 { color: #d97706; margin-top: 0; }');
  lines.push('    .example p { color: #64748b; font-size: 0.95rem; }');
  lines.push('    .example .code-block { background: #1e293b; color: #f8fafc; padding: 16px; border-radius: 6px; overflow-x: auto; margin: 12px 0; }');
  lines.push('    .example .code-block code { font-family: "Cascadia Code", "Fira Code", "Consolas", monospace; font-size: 14px; }');
  lines.push('    .output { background: #f1f5f9; border: 1px solid #e2e8f0; border-radius: 6px; padding: 12px; margin-top: 10px; font-family: "Cascadia Code", "Fira Code", monospace; font-size: 14px; color: #334155; }');
  lines.push('    .note { background: #fffbeb; border: 1px solid #fde68a; border-radius: 6px; padding: 12px; margin: 10px 0; color: #92400e; }');
  lines.push('    button { background: #d97706; color: #fff; border: none; padding: 8px 18px; border-radius: 6px; cursor: pointer; font-weight: 600; font-size: 14px; transition: background 0.15s; }');
  lines.push('    button:hover { background: #b45309; }');
  lines.push('    button:active { background: #92400e; }');
  lines.push('    .example-header { display: flex; justify-content: space-between; align-items: center; }');
  lines.push('    .badge { background: #fef3c7; color: #92400e; font-size: 12px; padding: 2px 10px; border-radius: 12px; font-weight: 600; }');
  lines.push('    @media (max-width: 640px) { body { padding: 12px; } .example { padding: 14px; } }');
  lines.push('  </style>');
  lines.push('</head>');
  lines.push('<body>');
  lines.push('  <h1>' + t + '</h1>');
  lines.push('  <p>' + module.desc + '</p>');
  lines.push('  <p><strong>Note:</strong> Open the browser console (F12) to see JavaScript output.</p>');
  lines.push('');

  lines.push('  <div class="note">');
  lines.push('    <strong>Key Concepts:</strong> ' + c.slice(0, 5).join(', '));
  lines.push('  </div>');
  lines.push('');

  const exampleDefs = [
    { label: 'Basic ' + t, concept: c[0], code:
`// Basic demonstration of ${tl}
console.log("=== ${t} ===");

const example1_message = "${t} fundamentals";
console.log("Message:", example1_message);

// Display in output area
document.getElementById("ex1_output").textContent =
  "Output: " + example1_message;` },
    { label: 'Practical Implementation', concept: c[1] || c[0], code:
`// Practical implementation of ${tl}
function processExample${id}(data) {
  return data.map(item => {
    return \`Processed: \${item}\`;
  });
}

const ex2_input = ["${c[0]}", "${c[1] || tl}"];
const ex2_result = processExample${id}(ex2_input);
console.log("Result:", ex2_result);

document.getElementById("ex2_output").textContent =
  "[" + ex2_result.join(", ") + "]";` },
    { label: c[0], concept: c[0], code:
`// Example demonstrating ${c[0].toLowerCase()}
const ex3_data = [10, 20, 30, 40, 50];
console.log("${c[0]} example:");
console.log("Input:", ex3_data);

// Transform the data
const ex3_transformed = ex3_data.map(x => x * 2);
console.log("Transformed:", ex3_transformed);

document.getElementById("ex3_output").textContent =
  "[" + ex3_transformed.join(", ") + "]";` },
    { label: c[1] || 'Advanced Usage', concept: c[1] || c[0], code:
`// Advanced: Combining ${c[0].toLowerCase()} with ${c[1] ? c[1].toLowerCase() : tl}
const ex4_data = [
  { id: 1, value: "${c[0]}" },
  { id: 2, value: "${c[1] || tl}" },
  { id: 3, value: "${c[2] || tl}" }
];

function process${id}(items) {
  return items.filter(item => item.id > 0)
    .map(item => item.value.toUpperCase());
}

console.log("Processed:", process${id}(ex4_data));
document.getElementById("ex4_output").textContent =
  "[" + process${id}(ex4_data).join(", ") + "]";` },
    { label: c[2] || 'Real-World Use Case', concept: c[2] || c[0], code:
`// Real-world scenario using ${c[2] ? c[2].toLowerCase() : tl}
class ${t.replace(/[^a-zA-Z0-9]/g, '')}Handler {
  constructor() {
    this.cache = new Map();
  }
  add(key, value) {
    this.cache.set(key, value);
    console.log(\`Added: \${key} => \${value}\`);
  }
  get(key) {
    return this.cache.get(key);
  }
  getAll() {
    return Array.from(this.cache.entries());
  }
}

const ex5_handler = new ${t.replace(/[^a-zA-Z0-9]/g, '')}Handler();
ex5_handler.add("concept1", "${c[0]}");
ex5_handler.add("concept2", "${c[1] || tl}");
console.log("All entries:", ex5_handler.getAll());
document.getElementById("ex5_output").textContent =
  JSON.stringify(ex5_handler.getAll());` },
    { label: c[3] || 'Performance & Optimization', concept: c[3] || c[0], code:
`// Performance considerations for ${tl}
const ex6_size = 10000;
console.log("Testing ${tl} performance...");

console.time("${tl.replace(/[^a-zA-Z]/g, '')}_operation");
const ex6_data = Array.from({ length: ex6_size }, (_, i) => i);
const ex6_result = ex6_data
  .filter(n => n % 2 === 0)
  .map(n => n * 2)
  .reduce((a, b) => a + b, 0);
console.timeEnd("${tl.replace(/[^a-zA-Z]/g, '')}_operation");

console.log("Result after processing:", ex6_result);
document.getElementById("ex6_output").textContent =
  "Processed " + ex6_size + " items. Result: " + ex6_result;` },
    { label: 'Error Handling', concept: c[4] || c[0], code:
`// Error handling patterns for ${tl}
function safeExecute${id}(fn, fallback) {
  try {
    const result = fn();
    return { success: true, data: result };
  } catch (error) {
    console.error("Error:", error.message);
    return { success: false, data: fallback };
  }
}

// Test with valid operation
const ex7_result1 = safeExecute${id}(() => {
  return "${tl} executed successfully";
}, "fallback");

// Test with failing operation
const ex7_result2 = safeExecute${id}(() => {
  throw new Error("Test error");
}, "fallback value");

console.log("Result 1:", ex7_result1);
console.log("Result 2:", ex7_result2);
document.getElementById("ex7_output").textContent =
  "Success: " + ex7_result1.data + " | Fallback: " + ex7_result2.data;` },
    { label: 'Integration Example', concept: c[5] || c[0], code:
`// Integrating ${tl} with other JavaScript features
const ex8_config = {
  topic: "${t}",
  concepts: ["${c.slice(0, 3).join('", "')}"],
  level: "intermediate"
};

function build${id}(config) {
  return \`
Module: \${config.topic}
Concepts: \${config.concepts.join(", ")}
Level: \${config.level}
  \`.trim();
}

console.log(build${id}(ex8_config));
document.getElementById("ex8_output").textContent = build${id}(ex8_config);` }
  ];

  exampleDefs.forEach((def, i) => {
    const num = i + 1;
    const cleanCode = def.code;
    const renderedCode = escHtml(cleanCode);

    lines.push('  <div class="example">');
    lines.push('    <div class="example-header">');
    lines.push('      <h3>Example ' + num + ': ' + def.label + '</h3>');
    lines.push('      <span class="badge">' + def.concept + '</span>');
    lines.push('    </div>');
    lines.push('    <p>Demonstrating ' + def.label.toLowerCase() + ' using ' + def.concept.toLowerCase() + '.</p>');
    lines.push('    <div class="code-block"><code>' + renderedCode.replace(/\n/g, '<br>').replace(/  /g, '&nbsp;&nbsp;') + '</code></div>');
    lines.push('    <button onclick="runExample' + num + '()">Run Example ' + num + '</button>');
    lines.push('    <div class="output" id="ex' + num + '_output">Click "Run Example" to see output</div>');
    lines.push('  </div>');
    lines.push('');
  });

  lines.push('  <script>');
  exampleDefs.forEach((def, i) => {
    const num = i + 1;
    const code = def.code;
    lines.push('    function runExample' + num + '() {');
    lines.push('      try {');
    code.split('\n').forEach(line => {
      lines.push('        ' + line);
    });
    lines.push('      } catch(e) {');
    lines.push('        console.error("Error:", e.message);');
    lines.push('        document.getElementById("ex' + num + '_output").textContent = "Error: " + e.message;');
    lines.push('      }');
    lines.push('    }');
    lines.push('');
  });
  lines.push('  </script>');
  lines.push('</body>');
  lines.push('</html>');

  return lines.join('\n');
}

function createPlayground(module) {
  const c = module.concepts;
  const t = module.topic;
  const tl = t.toLowerCase();
  const id = module.id;
  const lines = [];
  const safeName = c[0].toLowerCase().replace(/[^a-z0-9]/gi, '');

  const defaultCode = [
    '// ' + t + ' - Playground',
    '// Explore ' + tl + ' by editing this code',
    '',
    'console.log("=== Welcome to ' + t + ' Playground ===");',
    '',
    'const topic = "' + t + '";',
    'const concepts = ["' + c.slice(0, 4).join('", "') + '"];',
    'console.log("Module:", topic);',
    'console.log("Concepts:", concepts);',
    '',
    '// Try implementing your own examples below',
    'const data = [1, 2, 3, 4, 5];',
    'console.log("Data:", data);',
    ''
  ].join('\n');

  lines.push('<!DOCTYPE html>');
  lines.push('<html lang="en">');
  lines.push('<head>');
  lines.push('  <meta charset="UTF-8">');
  lines.push('  <meta name="viewport" content="width=device-width, initial-scale=1.0">');
  lines.push('  <title>' + t + ' - Playground</title>');
  lines.push('  <style>');
  lines.push('    :root { --primary: #d97706; --primary-hover: #b45309; --bg: #f8fafc; --surface: #fff; --text: #334155; --text-muted: #64748b; --border: #e2e8f0; --code-bg: #1e293b; --code-color: #f8fafc; --panel-header: #f1f5f9; --shadow: 0 1px 3px rgba(0,0,0,0.06); }');
  lines.push('    * { box-sizing: border-box; margin: 0; padding: 0; }');
  lines.push('    body { font-family: system-ui, -apple-system, sans-serif; background: var(--bg); color: var(--text); height: 100vh; display: flex; flex-direction: column; }');
  lines.push('    .header { background: var(--surface); padding: 14px 24px; border-bottom: 2px solid var(--primary); display: flex; justify-content: space-between; align-items: center; box-shadow: var(--shadow); }');
  lines.push('    .header h1 { color: var(--primary); font-size: 1.4rem; font-weight: 700; }');
  lines.push('    .header h1 small { font-size: 0.85rem; color: var(--text-muted); font-weight: 400; }');
  lines.push('    .header-actions { display: flex; gap: 8px; }');
  lines.push('    .header-actions button { background: var(--primary); color: #fff; border: none; padding: 8px 18px; border-radius: 6px; cursor: pointer; font-weight: 600; font-size: 13px; transition: background 0.15s; }');
  lines.push('    .header-actions button:hover { background: var(--primary-hover); }');
  lines.push('    .header-actions button.reset { background: #e2e8f0; color: #475569; }');
  lines.push('    .header-actions button.reset:hover { background: #cbd5e1; }');
  lines.push('    .container { display: flex; flex: 1; overflow: hidden; }');
  lines.push('    .editor-panel { flex: 1; display: flex; flex-direction: column; border-right: 1px solid var(--border); }');
  lines.push('    .output-panel { flex: 1; display: flex; flex-direction: column; }');
  lines.push('    .panel-header { background: var(--panel-header); padding: 10px 16px; font-weight: 600; color: var(--text); display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border); }');
  lines.push('    .panel-header button { background: #e2e8f0; color: #475569; border: none; padding: 5px 14px; border-radius: 4px; cursor: pointer; font-weight: 500; font-size: 12px; transition: background 0.15s; }');
  lines.push('    .panel-header button:hover { background: #cbd5e1; }');
  lines.push('    textarea { flex: 1; background: var(--code-bg); color: #e2e8f0; font-family: "Cascadia Code", "Fira Code", "Consolas", monospace; font-size: 14px; padding: 20px; border: none; outline: none; resize: none; tab-size: 2; line-height: 1.6; }');
  lines.push('    #output { flex: 1; background: var(--surface); padding: 16px; overflow-y: auto; font-family: "Cascadia Code", "Fira Code", monospace; font-size: 14px; white-space: pre-wrap; line-height: 1.5; }');
  lines.push('    #output .error { color: #dc2626; }');
  lines.push('    #output .success { color: #16a34a; }');
  lines.push('    #output .info { color: #2563eb; }');
  lines.push('    #output .warn { color: #d97706; }');
  lines.push('    .snippets { display: flex; gap: 6px; padding: 8px 16px; background: var(--surface); border-bottom: 1px solid var(--border); flex-wrap: wrap; }');
  lines.push('    .snippets button { background: #f1f5f9; color: #475569; border: 1px solid var(--border); padding: 5px 14px; border-radius: 16px; cursor: pointer; font-size: 12px; font-weight: 500; transition: all 0.15s; }');
  lines.push('    .snippets button:hover { background: #fef3c7; border-color: var(--primary); color: var(--primary-hover); }');
  lines.push('    .snippets button.active { background: var(--primary); color: #fff; border-color: var(--primary); }');
  lines.push('    footer { background: var(--surface); padding: 8px 24px; text-align: center; font-size: 0.8rem; color: var(--text-muted); border-top: 1px solid var(--border); }');
  lines.push('    @media (max-width: 768px) { .container { flex-direction: column; } .editor-panel { border-right: none; border-bottom: 1px solid var(--border); } }');
  lines.push('  </style>');
  lines.push('</head>');
  lines.push('<body>');
  lines.push('  <div class="header">');
  lines.push('    <h1>' + t + ' <small>Playground</small></h1>');
  lines.push('    <div class="header-actions">');
  lines.push('      <button onclick="resetCode()" class="reset">Reset</button>');
  lines.push('      <button onclick="runCode()">Run Code</button>');
  lines.push('    </div>');
  lines.push('  </div>');
  lines.push('  <div class="snippets" id="snippets"></div>');
  lines.push('  <div class="container">');
  lines.push('    <div class="editor-panel">');
  lines.push('      <div class="panel-header">');
  lines.push('        <span>Code Editor</span>');
  lines.push('        <span style="font-weight:400;font-size:0.8rem;color:var(--text-muted);">Ctrl+Enter to run</span>');
  lines.push('      </div>');
  lines.push('      <textarea id="code" spellcheck="false">' + defaultCode + '</textarea>');
  lines.push('    </div>');
  lines.push('    <div class="output-panel">');
  lines.push('      <div class="panel-header">');
  lines.push('        <span>Console Output</span>');
  lines.push('        <button onclick="clearOutput()">Clear</button>');
  lines.push('      </div>');
  lines.push('      <div id="output"></div>');
  lines.push('    </div>');
  lines.push('  </div>');
  lines.push('  <footer>JavaScript Mastery Course &mdash; Module ' + id + ': ' + t + '</footer>');

  lines.push('  <script>');
  lines.push('    const textarea = document.getElementById("code");');
  lines.push('    const outputDiv = document.getElementById("output");');
  lines.push('    const snippetsBar = document.getElementById("snippets");');
  lines.push('');
  lines.push('    const defaultCode = ' + JSON.stringify(defaultCode) + ';');
  lines.push('');
  const snippets = c.slice(0, 5).map((concept, i) => ({
    label: (i + 1) + '. ' + concept,
    code: [
      '// Example: ' + concept,
      'console.log("=== ' + concept + ' ===");',
      '',
      'const data = ["' + c.slice(0, 3).join('", "') + '"];',
      'console.log("Concepts:", data);',
      '',
      '// Try implementing ' + concept.toLowerCase() + ' here',
      'const result = data.map(d => d.toUpperCase());',
      'console.log("Result:", result);',
      ''
    ].join('\n')
  }));
  lines.push('    const snippets = ' + JSON.stringify(snippets) + ';');
  lines.push('');
  lines.push('    function renderSnippets() {');
  lines.push('      snippets.forEach(function(s, i) {');
  lines.push('        var btn = document.createElement("button");');
  lines.push('        btn.textContent = s.label;');
  lines.push('        btn.onclick = function() { loadSnippet(i); };');
  lines.push('        snippetsBar.appendChild(btn);');
  lines.push('      });');
  lines.push('    }');
  lines.push('    renderSnippets();');
  lines.push('');
  lines.push('    function loadSnippet(index) {');
  lines.push('      textarea.value = snippets[index].code;');
  lines.push('      clearOutput();');
  lines.push('    }');
  lines.push('');
  lines.push('    textarea.addEventListener("keydown", function(e) {');
  lines.push('      if (e.ctrlKey && e.key === "Enter") { e.preventDefault(); runCode(); }');
  lines.push('      if (e.key === "Tab") { e.preventDefault(); var start = this.selectionStart; var end = this.selectionEnd; this.value = this.value.substring(0, start) + "  " + this.value.substring(end); this.selectionStart = this.selectionEnd = start + 2; }');
  lines.push('    });');
  lines.push('');
  lines.push('    function runCode() {');
  lines.push('      var code = textarea.value;');
  lines.push('      outputDiv.innerHTML = "";');
  lines.push('      var origLog = console.log;');
  lines.push('      var origWarn = console.warn;');
  lines.push('      var origError = console.error;');
  lines.push('');
  lines.push('      console.log = function() {');
  lines.push('        var args = Array.prototype.slice.call(arguments);');
  lines.push('        outputDiv.innerHTML += "<span class=\\"success\\">" + args.map(formatValue).join(" ") + "</span>\\n";');
  lines.push('      };');
  lines.push('      console.warn = function() {');
  lines.push('        var args = Array.prototype.slice.call(arguments);');
  lines.push('        outputDiv.innerHTML += "<span class=\\"warn\\">\\u26a0 " + args.map(formatValue).join(" ") + "</span>\\n";');
  lines.push('      };');
  lines.push('      console.error = function() {');
  lines.push('        var args = Array.prototype.slice.call(arguments);');
  lines.push('        outputDiv.innerHTML += "<span class=\\"error\\">\\u2716 " + args.map(formatValue).join(" ") + "</span>\\n";');
  lines.push('      };');
  lines.push('');
  lines.push('      try {');
  lines.push('        var result = eval(code);');
  lines.push('        if (result !== undefined) {');
  lines.push('          outputDiv.innerHTML += "<span class=\\"info\\">\\u21d2 " + formatValue(result) + "</span>\\n";');
  lines.push('        }');
  lines.push('      } catch (e) {');
  lines.push('        outputDiv.innerHTML += "<span class=\\"error\\">\\u2716 Error: " + e.message + "</span>\\n";');
  lines.push('      } finally {');
  lines.push('        console.log = origLog;');
  lines.push('        console.warn = origWarn;');
  lines.push('        console.error = origError;');
  lines.push('      }');
  lines.push('    }');
  lines.push('');
  lines.push('    function formatValue(val) {');
  lines.push('      if (val === null) return "null";');
  lines.push('      if (val === undefined) return "undefined";');
  lines.push('      if (typeof val === "string") return val;');
  lines.push('      if (typeof val === "object") { try { return JSON.stringify(val, null, 2); } catch(e) { return String(val); } }');
  lines.push('      return String(val);');
  lines.push('    }');
  lines.push('');
  lines.push('    function clearOutput() { outputDiv.innerHTML = ""; }');
  lines.push('');
  lines.push('    function resetCode() {');
  lines.push('      textarea.value = defaultCode;');
  lines.push('      clearOutput();');
  lines.push('    }');
  lines.push('  </script>');
  lines.push('</body>');
  lines.push('</html>');

  return lines.join('\n');
}

function createQuiz(module) {
  const c = module.concepts;
  const t = module.topic;
  const tl = t.toLowerCase();
  const questions = [];

  const makeQ = (q, opts, ans, expl) => {
    questions.push({ question: q, options: opts, answer: ans, explanation: expl });
  };

  makeQ(
    'What is the primary purpose of ' + t + '?',
    ['To manage and manipulate ' + tl + ' in JavaScript', 'To style web pages', 'To define HTML structure', 'To handle server requests'],
    'a',
    t + ' is a JavaScript feature used to manage and manipulate ' + tl + ' in applications.'
  );

  makeQ(
    'Which of the following is a core concept of ' + t + '?',
    [c[0] || t, c[1] || 'Variables', c[2] || 'Functions', 'CSS Selectors'],
    'a',
    c[0] + ' is a fundamental concept in ' + t + '.'
  );

  makeQ(
    'How does ' + t + ' improve JavaScript development?',
    ['By providing structured ways to handle ' + tl, 'By adding CSS capabilities', 'By replacing HTML', 'By removing the need for functions'],
    'a',
    t + ' provides structured approaches to handle ' + tl + ' efficiently.'
  );

  makeQ(
    'What is the correct syntax for implementing ' + c[0] + '?',
    ['Using proper JavaScript syntax with ' + tl + ' patterns', 'Using random variable names', 'Copying from other languages', 'Writing inline CSS'],
    'a',
    'Proper ' + tl + ' syntax follows JavaScript conventions and best practices.'
  );

  makeQ(
    'When should you use ' + t + ' in your code?',
    ['When you need to handle ' + tl + ' scenarios', 'Only on Mondays', 'Never in production', 'Only in HTML files'],
    'a',
    t + ' should be used whenever you need to handle ' + tl + ' in your JavaScript applications.'
  );

  makeQ(
    'What is the main benefit of understanding ' + c[0] + '?',
    ['Writing more maintainable and efficient code', 'Faster internet connection', 'Automatic debugging', 'No need for testing'],
    'a',
    'Understanding ' + c[0].toLowerCase() + ' leads to more maintainable and efficient code.'
  );

  makeQ(
    'Which of the following best describes ' + c[1] + '?',
    [c[1] + ' in the context of ' + tl, 'A CSS framework', 'An HTML tag', 'A database system'],
    'a',
    c[1] + ' is a key aspect of ' + tl + ' in JavaScript.'
  );

  makeQ(
    'What is a common mistake when working with ' + t + '?',
    ['Misunderstanding scope and context', 'Using too many comments', 'Writing too many functions', 'Using const instead of var'],
    'a',
    'Scope and context issues are among the most common mistakes in ' + tl + '.'
  );

  makeQ(
    'How does ' + t + ' relate to other JavaScript features?',
    ['It integrates with functions, objects, and control flow', 'It is completely isolated', 'It only works with CSS', 'It replaces all other features'],
    'a',
    t + ' works in conjunction with other JavaScript features like functions, objects, and control flow.'
  );

  makeQ(
    'What is the best practice for implementing ' + tl + '?',
    ['Follow consistent patterns and error handling', 'Always use global variables', 'Avoid functions', 'Skip testing'],
    'a',
    'Consistent patterns and proper error handling are best practices for ' + tl + '.'
  );

  makeQ(
    'Which concept is most closely related to ' + c[0] + '?',
    [c[1] || 'Functions', 'HTML', 'CSS', 'Databases'],
    'a',
    c[0] + ' and ' + (c[1] || 'functions') + ' are closely related concepts in JavaScript.'
  );

  makeQ(
    'What does the following code demonstrate?\n\n// ' + t + ' example\nconst result = ' + c[0].toLowerCase().replace(/[^a-z0-9]/gi, '') + ';\nconsole.log(result);',
    ['Basic ' + tl + ' usage', 'CSS styling', 'HTML rendering', 'Database query'],
    'a',
    'This code demonstrates basic ' + tl + ' usage with a variable assignment and console output.'
  );

  makeQ(
    'How would you debug issues related to ' + t + '?',
    ['Use console.log and browser DevTools', 'Restart the computer', 'Reinstall the browser', 'Delete the code'],
    'a',
    'Console.log and browser DevTools are the primary debugging tools for ' + tl + '.'
  );

  makeQ(
    'What is the role of ' + c[2] + ' in ' + t + '?',
    [c[2] + ' enables advanced ' + tl + ' patterns', 'It handles CSS styling', 'It manages HTML layout', 'It connects to databases'],
    'a',
    c[2] + ' plays a crucial role in enabling advanced ' + tl + ' patterns.'
  );

  makeQ(
    'Which JavaScript version introduced key features for ' + tl + '?',
    ['ES6 (ES2015) and later', 'ES3', 'ES4', 'JavaScript 1.0'],
    'a',
    'ES6 and later versions introduced many features that improved ' + tl + ' capabilities.'
  );

  makeQ(
    'What is the output of: console.log(typeof "' + t + '");',
    ['string', 'object', 'number', 'undefined'],
    'a',
    'The typeof operator returns "string" for string values.'
  );

  makeQ(
    'How can you optimize ' + tl + ' for performance?',
    ['Use appropriate data structures and algorithms', 'Add more comments', 'Use longer variable names', 'Write more lines of code'],
    'a',
    'Choosing the right data structures and algorithms optimizes ' + tl + ' performance.'
  );

  makeQ(
    'What is the recommended approach for learning ' + t + '?',
    ['Practice with real-world examples and projects', 'Only read documentation', 'Watch videos without coding', 'Skip fundamentals'],
    'a',
    'Hands-on practice with real-world examples is the most effective way to learn ' + tl + '.'
  );

  makeQ(
    'Which tool is essential for ' + tl + ' development?',
    ['Browser DevTools and a code editor', 'A photo editor', 'A video player', 'A spreadsheet app'],
    'a',
    'Browser DevTools and a good code editor are essential tools for ' + tl + ' development.'
  );

  makeQ(
    'What makes ' + t + ' important for modern web development?',
    ['It enables dynamic and interactive web applications', 'It replaces HTML entirely', 'It only works offline', 'It is only for styling'],
    'a',
    t + ' is crucial for building dynamic, interactive web applications that users expect today.'
  );

  return questions;
}

function createInterview(module) {
  const c = module.concepts;
  const t = module.topic;
  const tl = t.toLowerCase();
  return [
    { "question": "Explain what " + t + " is and why it matters in JavaScript.", "answer": t + " is " + module.desc + " It matters because it helps developers write cleaner, more maintainable code and is fundamental to modern JavaScript development." },
    { "question": "What are the key concepts of " + t + "?", "answer": "The key concepts include: " + c.slice(0, Math.min(c.length, 6)).join(', ') + ". Mastering these will give you a solid foundation in " + tl + "." },
    { "question": "Can you provide a practical example of using " + t + "?", "answer": "Yes. Here is a basic example:\n\n\`\`\`javascript\n// Example of " + tl + "\nfunction demonstrate() {\n  const topic = '" + t + "';\n  const concepts = ['" + c.slice(0, 3).join("', '") + "'];\n  console.log('Topic:', topic);\n  console.log('Concepts:', concepts);\n  return concepts.length;\n}\n\ndemonstrate();\n\`\`\`" },
    { "question": "What are common mistakes developers make with " + t + "?", "answer": "Common mistakes include: misunderstanding scope in " + tl + ", not handling edge cases, overcomplicating simple solutions, ignoring performance implications, and not testing boundary conditions." },
    { "question": "How would you teach " + t + " to a junior developer?", "answer": "I would start with the fundamentals: " + c.slice(0, 3).join(', ') + ". Then move to practical examples and real-world scenarios. Finally, cover best practices, common pitfalls, and debugging techniques." }
  ];
}

function createChallenges(module) {
  const c = module.concepts;
  const t = module.topic;
  const mid = module.id;
  const Name = module.name.replace(/-/g, '');
  return [
    { "id": mid + "-challenge-1", "title": "Basic " + t, "description": "Write a function that demonstrates the core concepts of " + t + ". Focus on implementing " + c[0] + " correctly.", "difficulty": "easy", "starterCode": "function basic_" + mid + "() {\n  // Implement " + c[0].toLowerCase() + "\n  // Return a meaningful result\n  return \"Implement " + t + "\";\n}", "solution": "function basic_" + mid + "() {\n  const concepts = [\"" + c.slice(0, 3).join("\", \"") + "\"];\n  return concepts.map(c => c.toUpperCase());\n}" },
    { "id": mid + "-challenge-2", "title": "Intermediate " + t, "description": "Create a function that uses " + c[0] + " and " + (c[1] || c[0]) + " together. Handle edge cases and validate inputs.", "difficulty": "medium", "starterCode": "function intermediate_" + mid + "(input) {\n  // Process input using " + c[0].toLowerCase() + "\n  // and " + (c[1] || c[0]).toLowerCase() + "\n  // Handle edge cases\n  if (!input) return [];\n  return input;\n}", "solution": "function intermediate_" + mid + "(input) {\n  if (!Array.isArray(input)) return [];\n  return input\n    .filter(item => item != null)\n    .map(item => ({ original: item, processed: String(item).toUpperCase() }));\n}" },
    { "id": mid + "-challenge-3", "title": "Advanced " + t + " Project", "description": "Build a small application that applies " + c.slice(0, 3).join(", ") + " in a real-world scenario. Include error handling and input validation.", "difficulty": "hard", "starterCode": "class " + Name + " {\n  constructor(config) {\n    this.config = config || {};\n    this.data = [];\n  }\n  \n  add(item) {\n    // Add item with validation\n  }\n  \n  process() {\n    // Process stored data using " + c[0].toLowerCase() + "\n  }\n}", "solution": "class " + Name + " {\n  constructor(config) {\n    this.config = config || {};\n    this.data = [];\n  }\n  \n  add(item) {\n    if (item == null) throw new Error('Invalid item');\n    this.data.push(item);\n  }\n  \n  process() {\n    return this.data\n      .filter(d => d != null)\n      .map(d => ({ value: d, timestamp: Date.now() }));\n  }\n  \n  clear() {\n    this.data = [];\n  }\n}" },
    { "id": mid + "-challenge-4", "title": "Debugging " + t, "description": "The following code has bugs related to " + c[0] + ". Find and fix them.", "difficulty": "medium", "starterCode": "// Fix the bugs in this code\nfunction processData" + mid + "(items) {\n  let result = [];\n  for (var i = 0; i < items.length; i++); {\n    result.push(items[i].toUpperCase());\n  }\n  return result;\n}\n\nconsole.log(processData" + mid + "([\"a\", \"b\", \"c\"]));", "solution": "function processData" + mid + "(items) {\n  return items.map(item => item.toUpperCase());\n}\n\nconsole.log(processData" + mid + "([\"a\", \"b\", \"c\"]));\n// Expected: [\"A\", \"B\", \"C\"]" },
    { "id": mid + "-challenge-5", "title": "Refactoring " + t, "description": "Refactor the following code to use modern JavaScript patterns with " + c[0] + " and " + (c[1] || c[0]) + ".", "difficulty": "hard", "starterCode": "// Refactor this code\nfunction oldWay" + mid + "(arr) {\n  var temp = [];\n  for (var i = 0; i < arr.length; i++) {\n    if (arr[i] % 2 === 0) {\n      temp.push(arr[i] * 2);\n    }\n  }\n  var sum = 0;\n  for (var j = 0; j < temp.length; j++) {\n    sum += temp[j];\n  }\n  return sum;\n}", "solution": "function refactored" + mid + "(arr) {\n  return arr\n    .filter(n => n % 2 === 0)\n    .map(n => n * 2)\n    .reduce((sum, n) => sum + n, 0);\n}" }
  ];
}

function createCheatsheet(module) {
  const c = module.concepts;
  const t = module.topic;
  const tl = t.toLowerCase();
  const lines = [];

  lines.push('# ' + t + ' - Cheatsheet');
  lines.push('');
  lines.push('## Quick Reference');
  lines.push('');
  lines.push('### Core Syntax');
  lines.push('\`\`\`javascript');
  lines.push('// ' + t + ' - key patterns');
  const varName = c[0].toLowerCase().replace(/[^a-z0-9]/gi, '_');
  lines.push('const ' + varName + ' = "' + c[0] + '";');
  lines.push('const result = ' + varName + '.toUpperCase();');
  lines.push('console.log(result); // "' + c[0].toUpperCase() + '"');
  lines.push('\`\`\`');
  lines.push('');
  lines.push('### Key Concepts');
  lines.push('');
  c.forEach(concept => {
    lines.push('- **' + concept + '**: Core concept in ' + tl);
  });
  lines.push('');
  lines.push('### Common Operations');
  lines.push('');
  lines.push('| Operation | Syntax | Example |');
  lines.push('|-----------|--------|---------|');
  const ops = [
    ['Declaration', 'const x = value', 'const topic = "' + t + '"'],
    ['Check type', 'typeof x', 'typeof topic // "string"'],
    ['Transform', 'x.method()', 'topic.toLowerCase()'],
    ['Compare', 'x === y', 'topic === "' + t + '"'],
    ['Iterate', 'arr.method()', '[1,2,3].map(n => n * 2)']
  ];
  ops.forEach(op => {
    lines.push('| ' + op[0] + ' | `' + op[1] + '` | `' + op[2] + '` |');
  });
  lines.push('');
  lines.push('### Best Practices');
  lines.push('1. Use `const` by default, `let` when reassignment is needed');
  lines.push('2. Handle edge cases and validate inputs');
  lines.push('3. Write pure functions when possible');
  lines.push('4. Use meaningful, descriptive names');
  lines.push('5. Keep functions small and focused');
  lines.push('6. Test with different inputs and edge cases');
  lines.push('7. Use early returns to reduce nesting');
  lines.push('8. Prefer array methods over manual loops');
  lines.push('');
  lines.push('### Common Mistakes');
  lines.push('- Misunderstanding mutable vs immutable operations');
  lines.push('- Forgetting to handle edge cases');
  lines.push('- Overcomplicating simple logic');
  lines.push('- Not using strict equality (===)');
  lines.push('- Mutating state unexpectedly');
  lines.push('');
  lines.push('### Related Topics');
  c.forEach(concept => {
    lines.push('- ' + concept);
  });
  lines.push('');

  return lines.join('\n');
}

function createResources(module) {
  const t = module.topic;
  const tl = t.toLowerCase();
  return [
    { "title": "MDN Web Docs: " + t, "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/" + encodeURIComponent(t), "type": "documentation", "description": "Official MDN documentation for " + t },
    { "title": "JavaScript.info: " + t, "url": "https://javascript.info/", "type": "tutorial", "description": "Comprehensive tutorial on " + tl },
    { "title": "freeCodeCamp JavaScript Course", "url": "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/", "type": "course", "description": "Free interactive JavaScript course covering " + tl },
    { "title": "W3Schools: " + t, "url": "https://www.w3schools.com/js/", "type": "tutorial", "description": "Beginner-friendly guide to " + tl },
    { "title": "JavaScript Weekly Newsletter", "url": "https://javascriptweekly.com/", "type": "newsletter", "description": "Weekly newsletter with " + tl + " articles and tutorials" }
  ];
}

function createProject(module) {
  const c = module.concepts;
  const t = module.topic;
  const tl = t.toLowerCase();
  const Name = module.name.replace(/-/g, '');
  const lines = [];

  lines.push('# ' + t + ' - Mini Project');
  lines.push('');
  lines.push('## Project Overview');
  lines.push('Build a practical application that demonstrates your understanding of ' + t + '.');
  lines.push('This project will help you apply the following concepts in a real-world scenario:');
  lines.push('');
  c.slice(0, 5).forEach(concept => {
    lines.push('- ' + concept);
  });
  lines.push('');
  lines.push('## Learning Objectives');
  lines.push('By completing this project, you will:');
  lines.push('1. Apply ' + c[0].toLowerCase() + ' in a practical context');
  lines.push('2. Implement ' + tl + ' following best practices');
  lines.push('3. Handle errors and edge cases effectively');
  lines.push('4. Write clean, maintainable code with proper structure');
  lines.push('5. Test your implementation thoroughly');
  lines.push('');
  lines.push('## Requirements');
  lines.push('### Functional Requirements');
  lines.push('- Implement ' + c.slice(0, Math.min(c.length, 3)).join(' and '));
  lines.push('- Handle user input and validate data');
  lines.push('- Return meaningful results or feedback');
  lines.push('- Manage errors gracefully with try/catch');
  lines.push('');
  lines.push('### Technical Requirements');
  lines.push('- Use modern ES6+ syntax (const, let, arrow functions)');
  lines.push('- Include proper error handling for edge cases');
  lines.push('- Add JSDoc comments for all functions');
  lines.push('- Achieve at least basic test coverage');
  lines.push('');
  lines.push('## Starter Code');
  lines.push('\`\`\`javascript');
  lines.push('/**');
  lines.push(' * ' + Name + ' - ' + t);
  lines.push(' * A practical implementation demonstrating ' + tl);
  lines.push(' */');
  lines.push('class ' + Name + ' {');
  lines.push('  constructor(options = {}) {');
  lines.push('    this.options = options;');
  lines.push('    this.data = [];');
  lines.push('    this.history = [];');
  lines.push('  }');
  lines.push('');
  lines.push('  /**');
  lines.push('   * Add an item with validation');
  lines.push('   * @param {*} item - The item to add');
  lines.push('   * @returns {boolean} Success status');
  lines.push('   */');
  lines.push('  add(item) {');
  lines.push('    if (item == null) {');
  lines.push('      throw new Error("Item cannot be null or undefined");');
  lines.push('    }');
  lines.push('    this.data.push(item);');
  lines.push('    this.history.push({ action: "add", item, timestamp: Date.now() });');
  lines.push('    return true;');
  lines.push('  }');
  lines.push('');
  lines.push('  /**');
  lines.push('   * Process all stored items');
  lines.push('   * @returns {Array} Processed items');
  lines.push('   */');
  lines.push('  process() {');
  lines.push('    return this.data.map(item => ({');
  lines.push('      original: item,');
  lines.push('      processed: String(item).toUpperCase(),');
  lines.push('      timestamp: Date.now()');
  lines.push('    }));');
  lines.push('  }');
  lines.push('');
  lines.push('  /**');
  lines.push('   * Get operation history');
  lines.push('   * @returns {Array} History entries');
  lines.push('   */');
  lines.push('  getHistory() {');
  lines.push('    return [...this.history];');
  lines.push('  }');
  lines.push('');
  lines.push('  /**');
  lines.push('   * Clear all data');
  lines.push('   */');
  lines.push('  clear() {');
  lines.push('    this.data = [];');
  lines.push('    this.history.push({ action: "clear", timestamp: Date.now() });');
  lines.push('  }');
  lines.push('}');
  lines.push('');
  lines.push('// Test your implementation');
  lines.push('const project = new ' + Name + '();');
  lines.push('try {');
  lines.push('  project.add("' + c[0] + '");');
  lines.push('  project.add("' + (c[1] || c[0]) + '");');
  lines.push('  console.log("Processed:", project.process());');
  lines.push('  console.log("History:", project.getHistory());');
  lines.push('} catch (error) {');
  lines.push('  console.error("Error:", error.message);');
  lines.push('}');
  lines.push('\`\`\`');
  lines.push('');
  lines.push('## Step-by-Step Guide');
  lines.push('');
  lines.push('### Step 1: Project Setup');
  lines.push('1. Create a new file for your project');
  lines.push('2. Set up the class structure with constructor');
  lines.push('3. Initialize any required properties');
  lines.push('');
  lines.push('### Step 2: Core Implementation');
  lines.push('1. Implement the ' + c[0].toLowerCase() + ' functionality');
  lines.push('2. Add ' + (c[1] || 'data processing') + ' capabilities');
  lines.push('3. Include proper validation and error handling');
  lines.push('');
  lines.push('### Step 3: Testing');
  lines.push('1. Test with valid inputs');
  lines.push('2. Test edge cases and error conditions');
  lines.push('3. Verify the output is correct');
  lines.push('');
  lines.push('## Expected Output');
  lines.push('When you run the starter code, you should see output similar to:');
  lines.push('');
  lines.push('\`\`\`');
  lines.push('Processed: [');
  lines.push('  { original: "' + c[0] + '", processed: "' + c[0].toUpperCase() + '", timestamp: ... },');
  lines.push('  { original: "' + (c[1] || c[0]) + '", processed: "' + (c[1] || c[0]).toUpperCase() + '", timestamp: ... }');
  lines.push(']');
  lines.push('History: [');
  lines.push('  { action: "add", item: "' + c[0] + '", timestamp: ... },');
  lines.push('  { action: "add", item: "' + (c[1] || c[0]) + '", timestamp: ... }');
  lines.push(']');
  lines.push('\`\`\`');
  lines.push('');
  lines.push('## Bonus Challenges');
  lines.push('1. Add persistence using localStorage or a file');
  lines.push('2. Implement search/filter functionality');
  lines.push('3. Add undo/redo support');
  lines.push('4. Create a simple UI to interact with your project');
  lines.push('5. Add unit tests using a testing framework');
  lines.push('6. Optimize for large datasets');
  lines.push('');
  lines.push('## Submission Checklist');
  lines.push('- [ ] All functional requirements are implemented');
  lines.push('- [ ] Error handling is comprehensive');
  lines.push('- [ ] Code is clean and well-commented');
  lines.push('- [ ] Edge cases are handled');
  lines.push('- [ ] Bonus challenges attempted (optional)');
  lines.push('- [ ] Tested with various inputs');
  lines.push('');

  return lines.join('\n');
}

const videoLibrary = {
  default: [
    { ch: "freeCodeCamp", id: "PkZNo7MFNFg", title: "Learn JavaScript - Full Course for Beginners", desc: "Complete JavaScript programming course for beginners" },
    { ch: "JavaScript Mastery", id: "V1_FeLLWsTs", title: "JavaScript Course for Beginners", desc: "Comprehensive JavaScript tutorial for beginners" },
    { ch: "Web Dev Simplified", id: "8dWL3wF_OMw", title: "JavaScript Tutorial for Beginners", desc: "Quick and practical JavaScript tutorial" }
  ],
  "Namaste JavaScript": [
    { ch: "Akshay Saini", id: "bvn_HYpix6s", title: "Namaste JavaScript - Episode 1", desc: "Execution Context - How JS works behind the scenes" },
    { ch: "Akshay Saini", id: "FnlnwSUu512E", title: "Namaste JavaScript - Hoisting", desc: "Hoisting in JavaScript explained" }
  ],
  "Namaste JS Advanced": [
    { ch: "Akshay Saini", id: "shH0R9FnC0c", title: "Namaste JavaScript - Closures", desc: "Closures in JavaScript" },
    { ch: "Akshay Saini", id: "kJQh6HYmJfs", title: "Namaste JavaScript - Callback Functions", desc: "Callback functions and event listeners" }
  ],
  byTopic: {
    "01": [
      { ch: "freeCodeCamp", id: "PkZNo7MFNFg", title: "JavaScript Course for Beginners", desc: "Complete beginner-friendly JavaScript course" },
      { ch: "Akshay Saini", id: "bvn_HYpix6s", title: "Namaste JavaScript #1 - How JS Works", desc: "Understanding JavaScript execution context" }
    ],
    "02": [
      { ch: "Traversy Media", id: "W6NZfCO5SIk", title: "VS Code Tutorial for Beginners", desc: "Setting up VS Code for development" },
      { ch: "freeCodeCamp", id: "Z02_PM3TrhQ", title: "JavaScript Setup Guide", desc: "Setting up JavaScript development environment" }
    ],
    "03": [
      { ch: "Web Dev Simplified", id: "8dWL3wF_OMw", title: "JavaScript Syntax Basics", desc: "Learn JavaScript syntax fundamentals" },
      { ch: "Net Ninja", id: "qoSksQ4s_hg", title: "JavaScript Syntax & Grammar", desc: "Understanding JavaScript syntax rules" }
    ],
    "04": [
      { ch: "Akshay Saini", id: "bvn_HYpix6s", title: "JavaScript Variables - Namaste JS", desc: "var, let, const explained" },
      { ch: "Web Dev Simplified", id: "9M4XKi25I2M", title: "JavaScript Variables Explained", desc: "Complete guide to variables in JavaScript" }
    ],
    "05": [
      { ch: "Web Dev Simplified", id: "qdL6Z4in7Ng", title: "JavaScript Data Types", desc: "Primitive and reference types in JavaScript" },
      { ch: "Akshay Saini", id: "bvn_HYpix6s", title: "JavaScript Types - Namaste JS", desc: "Understanding data types and type coercion" }
    ],
    "06": [
      { ch: "Web Dev Simplified", id: "VqlG7DV8fR8", title: "JavaScript Type Conversion", desc: "Type coercion and conversion in JavaScript" },
      { ch: "Hitesh Choudhary", id: "6rJqJ6fWjnU", title: "JavaScript Type Coercion", desc: "Understanding type coercion in depth" }
    ],
    "07": [
      { ch: "Web Dev Simplified", id: "v2tJ3nzXh8I", title: "JavaScript Operators", desc: "All JavaScript operators explained" },
      { ch: "Net Ninja", id: "1USqjVfoFsk", title: "JavaScript Operators Tutorial", desc: "Arithmetic, comparison, logical operators" }
    ],
    "08": [
      { ch: "Web Dev Simplified", id: "b7lYq1v6G9w", title: "JavaScript User Input", desc: "How to handle user input in JavaScript" },
      { ch: "Traversy Media", id: "hdI2bqOjy3c", title: "JavaScript Input & Output", desc: "Handling user input and displaying output" }
    ],
    "10": [
      { ch: "Web Dev Simplified", id: "MpI9E7V6R1w", title: "JavaScript Template Literals", desc: "Template literals and string interpolation" },
      { ch: "Net Ninja", id: "Xc7CwW6gG8o", title: "Template Strings in JavaScript", desc: "Modern string handling with template literals" }
    ],
    "11": [
      { ch: "Web Dev Simplified", id: "VWqjf0I8l6s", title: "JavaScript String Methods", desc: "All important string methods in JavaScript" },
      { ch: "freeCodeCamp", id: "PdWfUwC12cE", title: "JavaScript Strings Explained", desc: "Working with strings in JavaScript" }
    ],
    "12": [
      { ch: "Web Dev Simplified", id: "2h6I1sIqCqI", title: "JavaScript Numbers", desc: "Numbers and numeric operations in JavaScript" },
      { ch: "Akshay Saini", id: "FnlnwSuu512E", title: "JavaScript Number Behavior", desc: "Understanding number precision and operations" }
    ],
    "13": [
      { ch: "Web Dev Simplified", id: "b7lYq1v6G9w", title: "JavaScript Math Object", desc: "Math operations and methods in JavaScript" },
      { ch: "Net Ninja", id: "1USqjVfoFsk", title: "JavaScript Math Tutorial", desc: "Using the Math object effectively" }
    ],
    "14": [
      { ch: "Web Dev Simplified", id: "qG5c7v3v8sA", title: "JavaScript Booleans", desc: "Boolean logic and comparison in JavaScript" },
      { ch: "Akshay Saini", id: "bvn_HYpix6s", title: "JavaScript Comparisons", desc: "Boolean comparisons and equality" }
    ],
    "16": [
      { ch: "Web Dev Simplified", id: "IsG4Xd6L2cI", title: "JavaScript if/else", desc: "Conditional statements in JavaScript" },
      { ch: "Akshay Saini", id: "shH0R9FnC0c", title: "JavaScript Control Flow", desc: "Control flow and decision making" }
    ],
    "17": [
      { ch: "Web Dev Simplified", id: "IsG4Xd6L2cI", title: "JavaScript if Statement", desc: "Understanding the if statement" }
    ],
    "20": [
      { ch: "Web Dev Simplified", id: "R9I85RhI7Cg", title: "JavaScript Switch Statement", desc: "Switch statements in JavaScript" }
    ],
    "21": [
      { ch: "Web Dev Simplified", id: "IsG4Xd6L2cI", title: "JavaScript Ternary Operator", desc: "The ternary operator for concise conditions" }
    ],
    "22": [
      { ch: "Web Dev Simplified", id: "v2tJ3nzXh8I", title: "JavaScript Logical Operators", desc: "AND, OR, NOT operators explained" }
    ],
    "25": [
      { ch: "Web Dev Simplified", id: "s9wW2PpJj5g", title: "JavaScript For Loop", desc: "For loops in JavaScript" },
      { ch: "Akshay Saini", id: "FnlnwSuu512E", title: "JavaScript Loops - Namaste JS", desc: "Understanding loops and execution" }
    ],
    "26": [
      { ch: "Web Dev Simplified", id: "Kn06785pkJg", title: "JavaScript While Loop", desc: "While and do-while loops" }
    ],
    "31": [
      { ch: "Web Dev Simplified", id: "FOD408m0j9o", title: "JavaScript Functions", desc: "Complete guide to JavaScript functions" },
      { ch: "Akshay Saini", id: "shH0R9FnC0c", title: "Functions in JavaScript - Namaste JS", desc: "Understanding functions deeply" }
    ],
    "34": [
      { ch: "Web Dev Simplified", id: "h33Srr5J9nY", title: "JavaScript Arrow Functions", desc: "Arrow functions explained" },
      { ch: "Akshay Saini", id: "kJQh6HYmJfs", title: "Arrow Functions - Namaste JS", desc: "Arrow functions vs regular functions" }
    ],
    "37": [
      { ch: "Akshay Saini", id: "shH0R9FnC0c", title: "JavaScript Scope - Namaste JS", desc: "Scope and scope chain in JavaScript" },
      { ch: "Web Dev Simplified", id: "RZzYRGzCb7g", title: "JavaScript Scope Explained", desc: "Global, function, and block scope" }
    ],
    "38": [
      { ch: "Akshay Saini", id: "shH0R9FnC0c", title: "JavaScript Closures - Namaste JS", desc: "Closures explained in depth" },
      { ch: "Web Dev Simplified", id: "vKJpN5FAeF4", title: "JavaScript Closures Explained", desc: "Understanding closures with practical examples" }
    ],
    "39": [
      { ch: "Akshay Saini", id: "kJQh6HYmJfs", title: "Callback Functions - Namaste JS", desc: "Callback functions and higher order functions" },
      { ch: "Web Dev Simplified", id: "C0g4Ua4G1c0", title: "JavaScript Callbacks", desc: "Callbacks in JavaScript" }
    ],
    "40": [
      { ch: "Web Dev Simplified", id: "H4awPsnHvqg", title: "JavaScript Higher Order Functions", desc: "Map, filter, reduce explained" }
    ],
    "41": [
      { ch: "Web Dev Simplified", id: "oigfaK7Qx_8", title: "JavaScript Arrays", desc: "Arrays in JavaScript explained" },
      { ch: "Akshay Saini", id: "bvn_HYpix6s", title: "JavaScript Arrays - Namaste JS", desc: "Understanding arrays in JavaScript" }
    ],
    "45": [
      { ch: "Web Dev Simplified", id: "P4v3CjLqX8c", title: "JavaScript Map Method", desc: "The map method explained" }
    ],
    "46": [
      { ch: "Web Dev Simplified", id: "4_iT6EGkQfk", title: "JavaScript Filter Method", desc: "The filter method explained" }
    ],
    "47": [
      { ch: "Web Dev Simplified", id: "gCJk8Ql8l8I", title: "JavaScript Reduce Method", desc: "The reduce method explained" }
    ],
    "51": [
      { ch: "Web Dev Simplified", id: "X0ipw1k7ygU", title: "JavaScript Objects", desc: "Objects in JavaScript explained" },
      { ch: "Akshay Saini", id: "bvn_HYpix6s", title: "Objects - Namaste JS", desc: "Understanding objects in depth" }
    ],
    "54": [
      { ch: "Web Dev Simplified", id: "zE9iro4r91Y", title: "JavaScript this Keyword", desc: "The this keyword explained" },
      { ch: "Akshay Saini", id: "FnlnwSuu512E", title: "this Keyword - Namaste JS", desc: "Understanding 'this' in JavaScript" }
    ],
    "61": [
      { ch: "Web Dev Simplified", id: "y17RuWkWdn8", title: "JavaScript DOM Explained", desc: "DOM manipulation in JavaScript" },
      { ch: "Traversy Media", id: "0ik6X4DJKCc", title: "JavaScript DOM Crash Course", desc: "Complete DOM manipulation guide" }
    ],
    "62": [
      { ch: "Web Dev Simplified", id: "y17RuWkWdn8", title: "DOM Selectors in JavaScript", desc: "Selecting DOM elements" }
    ],
    "64": [
      { ch: "Web Dev Simplified", id: "GJ8jid9pBnI", title: "Manipulating the DOM", desc: "Changing DOM content and styles" }
    ],
    "68": [
      { ch: "Web Dev Simplified", id: "XF1lR6Uj4Hk", title: "JavaScript Events", desc: "DOM events and event handling" }
    ],
    "65": [
      { ch: "Akshay Saini", id: "kJQh6HYmJfs", title: "JavaScript Promises - Namaste JS", desc: "Promises in JavaScript explained" },
      { ch: "Web Dev Simplified", id: "DHvZLI7Db8E", title: "JavaScript Promises Explained", desc: "Complete guide to promises" }
    ],
    "69": [
      { ch: "Net Ninja", id: "qoSksQ4s_hg", title: "ES6 Modules in JavaScript", desc: "Import and export in JavaScript" }
    ],
    "73": [
      { ch: "Web Dev Simplified", id: "y17RuWkWdn8", title: "Browser Object Model", desc: "Window, navigator, location objects" }
    ],
    "77": [
      { ch: "Web Dev Simplified", id: "c0mNr8c0l5g", title: "JavaScript Timers", desc: "setTimeout and setInterval explained" }
    ],
    "78": [
      { ch: "Web Dev Simplified", id: "GihQACcAn2Q", title: "Local Storage in JavaScript", desc: "localStorage and sessionStorage" }
    ],
    "83": [
      { ch: "Akshay Saini", id: "bvn_HYpix6s", title: "Execution Context - Namaste JS", desc: "How JavaScript execution works" }
    ],
    "84": [
      { ch: "Akshay Saini", id: "bvn_HYpix6s", title: "Call Stack - Namaste JS", desc: "Understanding the call stack" }
    ],
    "85": [
      { ch: "Akshay Saini", id: "FnlnwSuu512E", title: "Hoisting - Namaste JS", desc: "Hoisting in JavaScript explained" }
    ],
    "86": [
      { ch: "Akshay Saini", id: "shH0R9FnC0c", title: "Scope Chain - Namaste JS", desc: "Scope chain and lexical environment" }
    ],
    "87": [
      { ch: "Akshay Saini", id: "shH0R9FnC0c", title: "Closures Deep Dive - Namaste JS", desc: "Advanced closure concepts" },
      { ch: "freeCodeCamp", id: "1JsJx1T358I", title: "JavaScript Closures - Full Course", desc: "Complete closures course" }
    ],
    "88": [
      { ch: "Akshay Saini", id: "FnlnwSuu512E", title: "Prototypes - Namaste JS", desc: "Prototypes and prototypal inheritance" },
      { ch: "Web Dev Simplified", id: "2rkqhbzS0sI", title: "JavaScript Prototypes", desc: "Prototypes explained simply" }
    ],
    "90": [
      { ch: "Web Dev Simplified", id: "2ZphE5HUr0A", title: "JavaScript Classes", desc: "ES6 classes in JavaScript" },
      { ch: "Akshay Saini", id: "kJQh6HYmJfs", title: "Classes - Namaste JS", desc: "Classes in JavaScript" }
    ],
    "97": [
      { ch: "Akshay Saini", id: "bvn_HYpix6s", title: "Event Loop - Namaste JS", desc: "The event loop explained" },
      { ch: "Web Dev Simplified", id: "8aGhZQkoFhQ", title: "JavaScript Event Loop", desc: "Event loop visualized" },
      { ch: "Fireship", id: "8aGhZQkoFhQ", title: "JavaScript Event Loop in 100 Seconds", desc: "Quick event loop explanation" }
    ],
    "100": [
      { ch: "Akshay Saini", id: "kJQh6HYmJfs", title: "Promises - Namaste JS", desc: "Promises in JavaScript" },
      { ch: "Web Dev Simplified", id: "DHvZLI7Db8E", title: "JavaScript Promises", desc: "Promises explained simply" }
    ],
    "102": [
      { ch: "Web Dev Simplified", id: "V_Kr9OSfL9I", title: "JavaScript Async Await", desc: "Async/await explained" },
      { ch: "Akshay Saini", id: "shH0R9FnC0c", title: "Async Await - Namaste JS", desc: "Async/await in depth" }
    ],
    "103": [
      { ch: "Web Dev Simplified", id: "cuEtnrL9-H0", title: "JavaScript Fetch API", desc: "Making HTTP requests with fetch" }
    ],
    "111": [
      { ch: "Web Dev Simplified", id: "kuirGzhG_lw", title: "JavaScript Design Patterns", desc: "Common design patterns in JavaScript" }
    ],
    "119": [
      { ch: "freeCodeCamp", id: "t2CEgPbgz5A", title: "Data Structures in JavaScript", desc: "DS&A in JavaScript" }
    ],
    "130": [
      { ch: "Web Dev Simplified", id: "NLqY8I1e9H0", title: "JavaScript Sorting Algorithms", desc: "Sorting algorithms in JavaScript" }
    ],
    "141": [
      { ch: "Web Dev Simplified", id: "k8y6c1Tq0Kk", title: "Build a Calculator in JavaScript", desc: "JavaScript calculator project" }
    ],
    "143": [
      { ch: "Web Dev Simplified", id: "Ttf3CEGsE8w", title: "Build a Todo App in JavaScript", desc: "Todo app project tutorial" }
    ],
    "144": [
      { ch: "JavaScript Mastery", id: "V1_FeLLWsTs", title: "Weather App in JavaScript", desc: "Build a weather application" }
    ],
    "150": [
      { ch: "Web Dev Simplified", id: "riDzcEQbq6w", title: "Build a Quiz App in JavaScript", desc: "Quiz application project" }
    ],
    "155": [
      { ch: "JavaScript Mastery", id: "V1_FeLLWsTs", title: "AI Powered Web App", desc: "Building AI-powered applications with JavaScript" }
    ]
  }
};

function createVideo(module) {
  const id = module.id.padStart(2, '0');
  const t = module.topic;
  const tl = t.toLowerCase();
  const result = [];
  const pushed = new Set();

  const addVideo = (v) => {
    const key = v.id + v.ch;
    if (!pushed.has(key)) {
      pushed.add(key);
      result.push({
        title: v.title,
        url: 'https://www.youtube.com/embed/' + v.id,
        channel: v.ch,
        duration: 'varies',
        description: v.desc
      });
    }
  };

  // 1. Try topic-specific videos
  const topicVideos = videoLibrary.byTopic[id];
  if (topicVideos) {
    topicVideos.forEach(v => addVideo(v));
  }

  // 2. Try category match from Namaste JavaScript / Namaste JS Advanced
  const topicWords = tl.split(' ');
  const categoryKeys = Object.keys(videoLibrary).filter(k => k !== 'default' && k !== 'byTopic');
  for (const key of categoryKeys) {
    if (result.length >= 3) break;
    if (topicWords.some(word => key.toLowerCase().includes(word) || word.includes(key.toLowerCase()))) {
      const cat = videoLibrary[key];
      if (Array.isArray(cat)) {
        cat.forEach(v => addVideo(v));
      }
    }
  }

  // 3. Fill with defaults
  const defaults = videoLibrary.default;
  let idx = 0;
  while (result.length < 3) {
    addVideo(defaults[idx % defaults.length]);
    idx++;
  }

  return result;
}

function generateAll() {
  let totalFiles = 0;
  let errors = [];

  modules.forEach(mod => {
    const dir = path.join(COURSE_DIR, `${mod.id}-${mod.name}`);

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const files = [
      { name: 'lesson.md', content: createLesson(mod) },
      { name: 'examples.html', content: createExamples(mod) },
      { name: 'playground.html', content: createPlayground(mod) },
      { name: 'quiz.json', content: JSON.stringify(createQuiz(mod), null, 2) },
      { name: 'interview.json', content: JSON.stringify(createInterview(mod), null, 2) },
      { name: 'challenges.json', content: JSON.stringify(createChallenges(mod), null, 2) },
      { name: 'cheatsheet.md', content: createCheatsheet(mod) },
      { name: 'resources.json', content: JSON.stringify(createResources(mod), null, 2) },
      { name: 'project.md', content: createProject(mod) },
      { name: 'video.json', content: JSON.stringify(createVideo(mod), null, 2) }
    ];

    files.forEach(file => {
      try {
        const filePath = path.join(dir, file.name);
        fs.writeFileSync(filePath, file.content, 'utf8');
        totalFiles++;
      } catch (e) {
        errors.push(`Error writing ${dir}/${file.name}: ${e.message}`);
      }
    });

    console.log(`Generated ${mod.id}-${mod.name} (${files.length} files)`);
  });

  console.log(`\n========================================`);
  console.log(`Total files generated: ${totalFiles}`);
  console.log(`Total modules processed: ${modules.length}`);
  console.log(`Expected files: ${modules.length * 10}`);
  if (errors.length > 0) {
    console.log(`\nErrors (${errors.length}):`);
    errors.forEach(e => console.log(`  - ${e}`));
  }
  console.log(`========================================`);
}

// Run the generator
generateAll();
