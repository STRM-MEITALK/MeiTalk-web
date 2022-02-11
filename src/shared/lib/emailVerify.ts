import CryptoJS from 'crypto-js';

const emailVerify = (token: string) => {
  const key = CryptoJS.enc.Utf8.parse(process.env.REACT_APP_MAIL_KEY || '');

  const decrypted = CryptoJS.AES.decrypt(token, key, {
    keySize: 128 / 8,
    iv: key,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });

  const mail = decrypted.toString(CryptoJS.enc.Utf8);

  sessionStorage.setItem('mailId', mail);
};
export default emailVerify;
