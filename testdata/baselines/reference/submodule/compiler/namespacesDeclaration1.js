//// [tests/cases/compiler/namespacesDeclaration1.ts] ////

//// [namespacesDeclaration1.ts]
module M {
   export namespace N {
      export module M2 {
         export interface I {}
      }
   }
}

//// [namespacesDeclaration1.js]
