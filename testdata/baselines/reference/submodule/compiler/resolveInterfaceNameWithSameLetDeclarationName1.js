//// [tests/cases/compiler/resolveInterfaceNameWithSameLetDeclarationName1.ts] ////

//// [resolveInterfaceNameWithSameLetDeclarationName1.ts]
interface bar { }
let bar: bar;


//// [resolveInterfaceNameWithSameLetDeclarationName1.js]
let bar;
