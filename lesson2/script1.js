let a = +prompt("Введите а");
let b = +prompt("Введите b");
if((a>=0) && (b>=0)) {
    alert(a-b)
}
if((a<0) && (b<0)) {
    alert(a*b);
}
if((a>=0 && b<0) || (a<0 && b<=0)){
    alert(a+b)
}