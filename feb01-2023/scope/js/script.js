var globalVar = 10;
let globalLet = 20;
const globalConst = 30;
console.log("let in global scope",globalLet);
console.log("Var in global scope",globalVar);
console.log("Const in global scope",globalConst);

function scope(){
    let functionLet = 100;
    var functionVar = 200;
    const functionConst = 300;
    console.log("Let inside function", functionLet);
    console.log("var inside function", functionVar);
    console.log("const inside function", functionConst);
}
// console.log("Let outside function", functionLet);
//     console.log("var outside function", functionVar);
//     console.log("const outside function", functionConst);

{
    var blockVar=1000;
    let blockLet = 2000;
    const blockConst = 3000;

    console.log("global scope var called outside the block",globalVar);
    // console.log("var inside function", functionVar);

    console.log("Let inside block", blockVar);
    console.log("var inside block", blockLet);
    console.log("const inside block", blockConst);

    var globalVar=1000;
    console.log("Var redeclared ",globalVar);

}
console.log("redeclared var called outside the block ",globalVar);
