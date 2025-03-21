//// [tests/cases/compiler/collisionThisExpressionAndLocalVarInAccessors.ts] ////

//// [collisionThisExpressionAndLocalVarInAccessors.ts]
class class1 {
    get a(): number {
        var x2 = {
            doStuff: (callback) => () => {
                var _this = 2;
                return callback(this);
            }
        }

        return 10;
    }
    set a(val: number) {
        var x2 = {
            doStuff: (callback) => () => {
                var _this = 2;
                return callback(this);
            }
        }

    }
}

class class2 {
    get a(): number {
        var _this = 2;
        var x2 = {
            doStuff: (callback) => () => {
                return callback(this);
            }
        }

        return 10;
    }
    set a(val: number) {
        var _this = 2;
        var x2 = {
            doStuff: (callback) => () => {
                return callback(this);
            }
        }

    }
}

//// [collisionThisExpressionAndLocalVarInAccessors.js]
class class1 {
    get a() {
        var x2 = {
            doStuff: (callback) => () => {
                var _this = 2;
                return callback(this);
            }
        };
        return 10;
    }
    set a(val) {
        var x2 = {
            doStuff: (callback) => () => {
                var _this = 2;
                return callback(this);
            }
        };
    }
}
class class2 {
    get a() {
        var _this = 2;
        var x2 = {
            doStuff: (callback) => () => {
                return callback(this);
            }
        };
        return 10;
    }
    set a(val) {
        var _this = 2;
        var x2 = {
            doStuff: (callback) => () => {
                return callback(this);
            }
        };
    }
}
