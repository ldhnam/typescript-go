//// [tests/cases/compiler/unusedTypeParametersWithUnderscore.ts] ////

//// [unusedTypeParametersWithUnderscore.ts]
function f<_T, U>() { }

type T<_T, U> = { };

interface I<_T, U> { };

class C<_T, U> {
    public m<_V, W>() { }
};

let l = <_T, U>() => { };


//// [unusedTypeParametersWithUnderscore.js]
function f() { }
;
class C {
    m() { }
}
;
let l = () => { };
