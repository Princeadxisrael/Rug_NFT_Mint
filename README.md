
# NFT Mint With Metaplex, Umi 

Within this project, we generated an NFT image and minted an NFT using the Metaplex NFT protocol standard


## Acknowledgements

 - [Turbin3](https://turbin3.com)
 - [WBA](https://https://solana.web3builders.dev/)
 - [Solana cookbook](https://solanacookbook.com)
 - [Metaplex](https://developers.metaplex.com/)
 


## Documentation

The files created in this projects include
```bash
nft_image.ts
nft_metadata.ts
nft_mint.ts
```


## Deployment
run:
generate a new typescript project by running

```bash
  yarn init -y
```

Install all required dependencies
```bash
yarn add @types/node typescript @solana/web3.js bs58 @metaplex-foundation/umi-bundle-defaults @metaplex-foundation/umi @metaplex-foundation/umi-uploader-irys
yarn add -D ts-node
touch nft_image.ts
touch nft_metadata.ts
touch nft_mint.ts
```
Also ensure to create a tsconfig file with the following:
```bash
yarn tsc --init --rootDir ./ --outDir ./dist --esModuleInterop --lib ES2019 --module commonjs --resolveJsonModule true --noImplicitAny true
```

Add the following scripts to package.json, make the neccesary adjustments depending on your project structure:
```bash
"nft_image": "ts-node ./nft_image.ts",
"nft_metadata": "ts-node ./nft_metadata.ts",
"nft_mint": "ts-node ./nft_mint.ts"

```

To generate an nft image, execute:
```bash
    yarn nft_image
```
To generate an nft_metadata, execute:
```bash
  yarn nft_metadata
```
To mint an nft_mint, execute:
```bash
  yarn nft_mint
```

A succesful transaction should generate a url to the explorer [link](Succesfully Minted! Check out your TX here:
https://explorer.solana.com/tx/4FDFwT9QKnKqrL5VnYB4mN2PwJq1d2sknbmsorFrqTg9YjJzQ6cSGDm2e32Pn7gX8dE9We4qACG1DZfq3YWsrGFN?cluster=devnet)
Mint Address:HhmN5fdiF86q7vtjG2yJC5e7WWUBoXstSY2SknsCoDr7


## Authors

- [@princeadxisrael](https://www.github.com/princeadxisrael)

