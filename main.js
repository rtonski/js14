function fun(a, b) {
    if (a == 20) {
        return true;
    } else if (b == 20) {
        return true;
    } else if (a + b <= 20) {
        return true;
    } else {
        return false;
    }

}

console.log(fun(22, 21));