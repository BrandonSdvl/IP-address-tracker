export const isValidIP = (str) => {
    let parts = str.split('.');
    if (parts.length !== 4) {
        return false;
    }
    for (let i in parts) {
        if (!/^\d+$/g.test(parts[i])
            || +parts[i] > 255
            || +parts[i] < 0
            || /^[0][0-9]{1,2}/.test(parts[i]))
            return false;
    }
    return true
}