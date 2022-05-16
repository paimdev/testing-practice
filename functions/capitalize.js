const capitalize = string => {
    const start = string.slice(0, 1).toUpperCase();
    const finish = string.slice(1, string.length);
    return start + finish;
};

export default capitalize;
