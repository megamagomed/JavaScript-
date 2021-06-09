let cart = [1, 5, 7, 123, 55]
function countBasketPrice(sum) {
    let c = 0
    for (let i = 0; i < sum.length; i++) {
        c = c + sum[i];
    }
    return c;
}
console.log(countBasketPrice(cart));