const caesarCipher = string => {
    const asciiArr = string.split("").map(item => item = item.charCodeAt(0));
    const shiftedAsciiArr = asciiArr.map(item => item >= 97 && item < 122 ?
         item = item + 1 : item === 122 ?
        (item % 122) + 97 : item >= 65 && item < 90 ?
        item = item + 1 : item === 90 ?
        (item % 90) + 65 : item
    );
    const shiftedStr = shiftedAsciiArr.map(item => item = String.fromCharCode(item)).join("");
    return shiftedStr;
}

export default caesarCipher;
