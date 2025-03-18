//// [tests/cases/compiler/doNotEmitDetachedCommentsAtStartOfLambdaFunction.ts] ////

//// [doNotEmitDetachedCommentsAtStartOfLambdaFunction.ts]
() => {
    // Single line comment

    return 0;
}

() => {
    /*
        multi-line comment
    */

    return 0;
}

() => {
    // Single line comment with more than one blank line


    return 0;
}

() => {
    /*
        multi-line comment with more than one blank line
    */


    return 0;
}


//// [doNotEmitDetachedCommentsAtStartOfLambdaFunction.js]
() => {
    return 0;
};
() => {
    return 0;
};
() => {
    return 0;
};
() => {
    return 0;
};
