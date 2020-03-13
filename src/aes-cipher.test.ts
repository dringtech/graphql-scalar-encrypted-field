import AesCipher from './aes-cipher';
import { randomBytes } from 'crypto';

let aes: AesCipher;

const plaintext = 'My test string';

describe('passphrase encryption', () => {
  beforeEach(() => {
    aes = new AesCipher({ key: '1234' });
  });

  it('should encrypt a string', () => {
    expect(aes.encrypt(plaintext)).not.toBe(plaintext);
  });
  
  it('should decrypt an encrypted string successfuly', () => {
    const aes = new AesCipher({ key: '1234' });
    const cipherText = aes.encrypt(plaintext);
    expect(aes.decrypt(cipherText)).toBe(plaintext);
  })
})

describe('key/iv encryption', () => {
  beforeEach(() => {
    const key = randomBytes(32).toString('hex');
    const iv = randomBytes(16).toString('hex');
    aes = new AesCipher({ key, iv });
  })

  it('should encrypt a string', () => {
    expect(aes.encrypt(plaintext)).not.toBe(plaintext);
  });
  
  it('should decrypt an encrypted string successfuly', () => {
    const cipherText = aes.encrypt(plaintext);
    expect(aes.decrypt(cipherText)).toBe(plaintext);
  })
})
