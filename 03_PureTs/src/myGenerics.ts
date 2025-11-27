/*Generics in TypeScript let you create reusable, flexible, type-safe components.
They allow a function/class/type to work with any type, but still keep full type checking.*/
function identity(value:any):any{
    return value
}
//Using any loses type safety (you can pass anything, get anything).

function wrap<T>(value:T):T{
    return value
}
//Now whatever type you pass, you get the same type back.

const n = wrap(10);       // T = number
const s = wrap("hello");  // T = string

function getSearchProducts<T>(products:Array<T>):T|undefined{
    const myindex = 2
    return products[myindex]
}

const getSearchProductsnew = <T>(products: T[]):T|undefined => {
    const myindex = 2
    return products[myindex]
} 