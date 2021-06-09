

let i = 2;

check: while (i <= 100) {
    let b = 2;
    while (b < i) {

        if (i % b == 0) {
            i++;
            continue check;
        }
        b++

    }
    console.log(i++)

}