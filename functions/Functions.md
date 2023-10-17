# JavaScript Functions

## Table Of Contents

- [Definition](#definition)
- [Parameters & Arguments](#parameters-&-arguments)
- [Function Types](#function-types)

### Definition

Une fonction permet de définir un bloc de code réexécutable, ce qui évite de réécrire le même algorithme lorsqu'on a besoin de la même logique ailleurs dans le programme.

Pour exécuter une fonction, il faut l'appeler via sa référence/nom avec une paire de parenthèses. Cela exécute le bloc de code correspondant à cette fonction (défini entre les accolades de la fonction).

Prenons pour exemple une déclaration de fonction simple :
Les parenthèses après le nom de la fonction sont obligatoires !

```js
function _fn() {
	console.log('Je suis le code exécuté par la fonction');
}

_fn() // On appelle la fonction pour exécuter le code défini dans son bloc { ... }.
```

Les parenthèses sont obligatoires pour appeler la fonction, sinon il s'agit juste d'une référence sans exécution.

### Parameters & Arguments

Une fonction permet non seulement d'éviter la répétition, mais aussi de réaliser un traitement générique. C'est-à-dire, d'exécuter une même suite d'instructions pour des valeurs différentes en entrée (input).

Les paramètres sont des variables internes à la fonction, à définir entre les parenthèses. Ce sont des termes génériques accessibles uniquement à l'intérieur de la fonction, et qui vont représenter les arguments qui lui sont passés en entrée (input), lors de son appel. Les paramètres permettent donc de définir une donnée générique dont dépend l'exécution correcte de la fonction.

Quant aux arguments, ils désignent les valeurs réelles passées en entrée à la fonction lors de son appel (entre les parenthèses). Ils doivent obligatoirement respecter l'ordre dans lequel les paramètres sont définis, afin de garder la correspondance à l'intérieur de la fonction.

**Prenons pour exemple une fonction chargée de transformer des noms en majuscules :**

```js
function toUpperCase(firstname, lastname) {
	return firstname.toUpperCase() + ' ' + lastname.toUpperCase();

	// Alternative en template literal:
	// return `${firstname.toUpperCase()} ${lastname.toUpperCase()}`;
}
```

⚠️ **Le keyword `return` est nécessaire pour renvoyer le résultat au programme et l'exploiter par la suite en dehors de la fonction** ⚠️

**On peut stocker le résultat de l'appel de la fonction dans une variable :**

```js
let user1 = toUpperCase('nikola', 'tesla');
let user2 = toUpperCase('francis', 'ngannou');

console.log(user1); // NIKOLA TESLA
console.log(user2); // FRANCIS NGANNOU
```

### Function Types

Exhaustive list of the technical differences between function declarations, function expressions, and arrow functions:

**Function Declarations:**
- Declared using the `function` keyword.
- Can be named or anonymous.
- Have their own `this` context (references the context of the containing block).
- Have their own `arguments` object (access the arguments given at function call).
- Can be used as constructors (advanced).
- Hoisted to the top of their containing scope (advanced — cf. [Hoisting](https://developer.mozilla.org/fr/docs/Glossary/Hoisting)).

**Function Expressions:**
- Defined using the `function` keyword, with or without a name.
- Have their own `this` context.
- Have their own `arguments` object.
- Can be used as constructors (advanced).
- Hoisted differently depending on whether they have a name (advanced).

**Arrow Functions:**

- Defined using a concise `=>` syntax.
- Are always anonymous.
- The return keyword is implicit, if the function has no block (single line, no curly braces)
- Inherit `this` from their containing lexical scope (meaning they will always reference the scope one level above their own (n+1).
- Do not have their own `arguments` object.
- Not hoisted.
- Cannot be used as constructors.
