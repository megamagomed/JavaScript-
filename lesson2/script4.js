function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            alert(arg1 + arg2);
            break;
        case '-':
            alert(arg1 - arg2);
            break;
        case '*':
            alert(arg1 * arg2);
            break;
        case '/':
            alert(arg1 / arg2);
            break;
    }
}
mathOperation(1,2,'+');
mathOperation(1,2,'*');