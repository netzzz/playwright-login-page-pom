import * as CryptoJS from 'crypto-js';

const passphrase = process.env.SECRET_KEY;

export function encryptData(data: string): string {
  const salt = CryptoJS.lib.WordArray.random(128 / 8);
  const iv = CryptoJS.lib.WordArray.random(128 / 8);

  const key = CryptoJS.PBKDF2(passphrase, salt, {
    keySize: 256 / 32,
    iterations: 1000,
  });

  const encrypted = CryptoJS.AES.encrypt(data, key, {
    iv: iv,
  });

  const result = CryptoJS.enc.Base64.stringify(
    salt.concat(iv).concat(encrypted.ciphertext)
  );

  return result;
}

export function decryptData(encryptedData: string): string {
  const rawData = CryptoJS.enc.Base64.parse(encryptedData);

  const salt = CryptoJS.lib.WordArray.create(rawData.words.slice(0, 4)); // 128-bit salt
  const iv = CryptoJS.lib.WordArray.create(rawData.words.slice(4, 8)); // 128-bit IV
  const ciphertext = CryptoJS.lib.WordArray.create(rawData.words.slice(8));

  const key = CryptoJS.PBKDF2(passphrase, salt, {
    keySize: 256 / 32,
    iterations: 1000,
  });

  const decrypted = CryptoJS.AES.decrypt(
    { ciphertext: ciphertext } as any,
    key,
    { iv: iv }
  );

  return decrypted.toString(CryptoJS.enc.Utf8);
}