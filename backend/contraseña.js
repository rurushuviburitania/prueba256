const password = '123456+-*/';
const encodedPassword = encodeURIComponent(password).replace(/[-!*]/g, (match) => {
    return '%' + match.charCodeAt(0).toString(16).toUpperCase();
});
console.log(encodedPassword);