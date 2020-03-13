import AES from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8';
import hex from 'crypto-js/enc-hex';

export default class AesCipher {
  private key: string;
  private config: { iv?: string };

  constructor(config: { key: string, iv?: string }) {
    this.config = {};
    if (config.iv) {
      this.key = hex.parse(config.key);
      this.config.iv = hex.parse(config.iv);
    } else {
      this.key = config.key;
    }
  }

  encrypt(value: string): string {
    return AES.encrypt(value, this.key, this.config).toString();
  }
  
  decrypt(value: string): string {
    return AES.decrypt(value, this.key, this.config).toString(Utf8);
  }  
}
