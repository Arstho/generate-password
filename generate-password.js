function generatePassword(length, LevelOfDiff, amount) {
    let newPassword = '';
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const digits = '0123456789';
    const symbols = '!#$%&()*+,-./:;<=>?@[]^_{|}~';
    let arrPass = []
    for (let j = 0; j < amount; j++) {
        for (let i = 0; i < length; i++) {
            if (LevelOfDiff === 'easy') {
                const randomSymbol = alphabet[Math.floor(Math.random() * alphabet.length)];
                newPassword += randomSymbol;
            } else if (LevelOfDiff === 'medium') {
                let mediumPass = digits + alphabet;
                const randomSymbol = mediumPass[Math.floor(Math.random() * mediumPass.length)];
                newPassword += randomSymbol;
            } else if (LevelOfDiff === 'hard') {
                let hardPass = alphabet + digits + symbols;
                const randomSymbol = hardPass[Math.floor(Math.random() * hardPass.length)];
                newPassword += randomSymbol;
            }
        }
        arrPass.push(newPassword.slice(0, length));
        newPassword = '';
    }
    const uniquePass = [...new Set(arrPass)];
    if (uniquePass.length !== arrPass.length) {
        return generatePassword()
    }
    console.log(arrPass);
    return arrPass;
}

generatePassword(4, 'hard', 4);