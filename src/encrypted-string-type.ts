import { GraphQLScalarType, ValueNode } from 'graphql';
import AesCipher from './aes-cipher';

interface EncryptedStringConfig {
  name?: string
  key: string
  iv?: string
}

export class EncryptedStringType extends GraphQLScalarType {
  constructor(config: EncryptedStringConfig) {
    const { name = 'EncryptedString' } = config;
    const cipher = new AesCipher({ key: config.key, iv: config.iv });

    super({
      name,
      description: 'Field-level encrypted string',
      serialize(value) { return cipher.decrypt(value); },
      parseValue(value) { return cipher.encrypt(value); },
      parseLiteral(ast: ValueNode) {
        if (ast.kind === 'StringValue') return cipher.encrypt(ast.value);
        return null;
      },
    });
  }
}
