export class Verify {
    constructor(data, mode = 'default') {
        this.result = false;
        this.mode = mode;
        this.data = data;
        this.msg = {
            name: '', // 姓名
            email: '', // email
            classify: '', // 問題分類
            subject: '', // 主旨
            description: '', // 問題說明
        };
        // this.isEmpty = this.isEmpty.bind(this);
    }

    checkInputType = (inputText, symbol = false) => {
        const emojiRegexText = require('emoji-regex');
        const emjRT = emojiRegexText(); // emoji 包含不是表情符號的表情符號
        const keyBoardRegex = specialWord();

        const fullWidthDigitandHalfDigit = /[\uFE30-\uFFA0]|[~!@#$%^&*()_+=\-`\[\]{}';:".,<>/?\|]/; // 有包含全形符號(含數字&英文) + 半形符號
        const fullDigitNoSymbol = /[\uFF10-\uFF19]|[\uFF41-\uFF5A]|[\uFF21-\uFF3A]/; // only全形英文&數字
        const otherKeyBoardRegex = /[\u32A3|\u02CD|\u33D2|\u33D1|\u222B|\u33D5|\u339C|\u339D|\u339E|\u33CE|\u33A1|\u338E|\u338F|\u33C4]/


        let flag = true;
        // let inputText = inputValue.trim();  覺得傳出來的值，直接去掉頭尾空白
        // Q: 那solomo 的trim()要怎麼加?
        // console.log('text', inputText);
        if (emjRT.test(inputText)) flag = false;
        if (symbol) {
            // 表示品牌類別
            if (fullDigitNoSymbol.test(inputText)) flag = false;
        } else {
            // 表示basic類別
            if (fullWidthDigitandHalfDigit.test(inputText)) flag = false;
            if (keyBoardRegex.test(inputText)) flag = false;
            if (otherKeyBoardRegex.test(inputText)) flag = false;
        }

        return flag;
    };

    isEmpty = str => {
        return !!str;
    };
    checkEmail = (strEmail = '') => {
        const regExp = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        // console.log('textEMAIL', strEmail);
        const Istype = regExp.test(strEmail);
        if (!strEmail) return '請填寫e-mail';
        if (!Istype) return 'e-mail格式錯誤!';
        return '';
    };
    checkPsword = value => {
        if (!value) return '請輸入密碼';
        if (value.length < 8) return '密碼不得小於8碼';
        return '';
    };
    doubleCheckPsword = (value, value2) => {
        if (value !== value2) return '密碼不一致';
        return '';
    };
    checkNumber(str = '', msg = '請輸入正確的數字') {
        const reg = /\D/gi;
        if (!str) return msg;
        return str.match(reg) ? msg : '';
    }
    showData() {
        console.log(this.data);
        return this.data;
    }
    getGeneralCheckResult = () => {
        const p = this.data;
        const msg = this.msg;
        // if (this.mode === 'default') {
        // // 姓名
        //     if (!p.name) msg.name = '請填寫姓名';
        //     // Email
        //     msg.email = this.checkEmail(this.data.email);
        // }
        if (this.mode !== 'withoutIdentity') {
            // 姓名
            if (!p.name) msg.name = '請填寫姓名';
            // Email
            msg.email = this.checkEmail(this.data.email);
        }
        if (this.mode !== 'noClassify') {
            // 問題分類：若下拉清單有項目，預設第一個選項 value=1
            if (!p.classify) msg.classify = '請選擇分類';
        }
        // 主旨
        if (!p.subject) msg.subject = '請填寫主旨';
        // 問題說明
        if (!p.description) msg.description = '請填寫問題說明';
        this.result = Object.values(this.msg).reduce((obj, item) => !!(obj || item), false);
        // if (!this.result) console.log('一切正常');
        return {
            status: !this.result,
            msg: this.msg
        };
    };
    agreeMemberTerm(value, value2) {
        if (value !== true) return '請勾選會員條款';
        return '';
    }
}