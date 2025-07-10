import { encryptData, decryptData } from './encryption';

describe('encryptData & decryptData', () => {
  const testData = 'Hello World!';

  it('should encrypt and then decrypt to original value', () => {
    const encrypted = encryptData(testData);
    const decrypted = decryptData(encrypted);

    expect(decrypted).toBe(testData);
  });

  it('should return different encrypted strings for the same input', () => {
    const encrypted1 = encryptData(testData);
    const encrypted2 = encryptData(testData);

    expect(encrypted1).not.toBe(encrypted2); // Because of random salt and IV
  });
})