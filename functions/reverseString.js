const reverseString = string => {
    const stringArr = string.split('');
    const reversedString = stringArr.reverse().join("");
    return reversedString;
};

export default reverseString;
