export default {
    USERNAME_REGEXP :/^1(3[0-9]|4[57]|5[0-35-9]|7[0135678]|8[0-9])\d{8}$/,
    PASSWORD_REGEXP: /^(?![\d]+$)(?![a-zA-Z]+$)(?![!#$%^&*]+$)[\da-zA-Z!#$%^&*]{8,20}$/,
    SMS_REGEXP:/[^\\0]+/
}

