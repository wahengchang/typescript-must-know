let a: number = 12;
let b: number = 17;
 
export const showProduct = (first: number, second: number): void  => {
    console.log("The product is: " +  first * second);
    return first * second
}

module.exports = {showProduct}