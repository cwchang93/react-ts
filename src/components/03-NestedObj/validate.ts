export const checkEmpty = (str: string): string => {
    if (str === '') {
        return '名稱不能空白'
    } else {
        return ''
    }
};


export const checkNumber = (str: string = '', msg: string = '請輸入正確的數字'): string => {
    const reg = /\D/gi;
    if (!str) return msg;
    return str.match(reg) ? msg : '';
}

export const checkEmail = (strEmail: string = ''): string => {
    const regExp = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    // console.log('textEMAIL', strEmail);
    const Istype = regExp.test(strEmail);
    if (!strEmail) return '請填寫e-mail';
    if (!Istype) return 'e-mail格式錯誤!';
    return '';
};

