function accum(text) {
    let repeat = 0;
    let output = [];

    for(let i = 0; i< text.length; i++) {
        let letra = text[i];
        if ((letra >= "a" && letra <= "z") || (letra >= "A" && letra <= "Z")) {
            output.push(`${letra.toUpperCase()}${letra.toLowerCase().repeat(repeat)}`) ;
            repeat++;
        }
    }

    return output.join('-');
}