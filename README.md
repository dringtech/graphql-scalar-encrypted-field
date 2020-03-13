# graphql-scalar-encrypted-field

An encrypted field scalar for graphql. Used as a custom type, this will
encrypt strings at a field-level in data. Can pass a passphrase or a
key and iv object.

## Usage

Regular Node imports:

```
const { EncryptedStringType } = require('graphql-scalar-encrypted-field');
```

or TypeScript:

```
import EncryptedStringType from 'graphql-scalar-encrypted-field';
```

Then trick out your resolvers...
```
const resolverMap = {
  Query: {
    ...
  },
  EncryptedString: new EncryptedStringType({ key: "Secret Passphrase" }),
}
```

add the `resolverMap` as defined in the framework you are using.

It is possible to instantiate with:

* A secret passphrase (`{ key: 'Secret Passphrase' }`)
* A key and iv pair (`{ key: <hex encoded AES key>, iv: <hex encoded iv>}`)
