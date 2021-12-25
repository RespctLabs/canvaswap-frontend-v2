sed -i 's/0x5CF874C2f969a53b75d18e9e719c65120000dD5E/0xe1662823d8044254409eB682fE34d35792677228/g' src/config/constants/index.ts #Router Address
sed -i 's/0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73/0xC538c0661C661571032798F40c1859a9255924D9/g' node_modules/@pancakeswap/sdk/dist/constants.d.ts
sed -i 's/0x00fb7f630766e6a796048ea87d01acd3068e8ff67d078148a3fa3f4a84f69bd5/0x148fcbc4533fccb7edad9d1a2ee78bae51efde862020bba525848fd153de376c/g' node_modules/@pancakeswap/sdk/dist/constants.d.ts
sed -i 's/0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73/0xC538c0661C661571032798F40c1859a9255924D9/g' node_modules/@pancakeswap/sdk/dist/sdk.cjs.development.js
sed -i 's/0x00fb7f630766e6a796048ea87d01acd3068e8ff67d078148a3fa3f4a84f69bd5/0x148fcbc4533fccb7edad9d1a2ee78bae51efde862020bba525848fd153de376c/g' node_modules/@pancakeswap/sdk/dist/sdk.cjs.development.js
sed -i 's/0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73/0xC538c0661C661571032798F40c1859a9255924D9/g' node_modules/@pancakeswap/sdk/dist/sdk.cjs.production.min.js
sed -i 's/0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73/0xC538c0661C661571032798F40c1859a9255924D9/g' node_modules/@pancakeswap/sdk/dist/sdk.esm.js
sed -i 's/0x00fb7f630766e6a796048ea87d01acd3068e8ff67d078148a3fa3f4a84f69bd5/0x148fcbc4533fccb7edad9d1a2ee78bae51efde862020bba525848fd153de376c/g' node_modules/@pancakeswap/sdk/dist/sdk.esm.js
sed -i 's/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/0xBBdd6633Db277810e9066abA0A16aF602a0F156a/g' node_modules/@pancakeswap/sdk/dist/sdk.esm.js
sed -i 's/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/0xBBdd6633Db277810e9066abA0A16aF602a0F156a/g' node_modules/@pancakeswap/sdk/dist/sdk.cjs.development.js
sed -i 's/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/0xBBdd6633Db277810e9066abA0A16aF602a0F156a/g' node_modules/@pancakeswap/sdk/dist/sdk.cjs.production.min.js
sed -i 's/0xaE8E19eFB41e7b96815649A6a60785e1fbA84C1e/0xBBdd6633Db277810e9066abA0A16aF602a0F156a/g' node_modules/@pancakeswap/sdk/dist/sdk.esm.js
sed -i 's/0xaE8E19eFB41e7b96815649A6a60785e1fbA84C1e/0xBBdd6633Db277810e9066abA0A16aF602a0F156a/g' node_modules/@pancakeswap/sdk/dist/sdk.cjs.development.js
sed -i 's/0xaE8E19eFB41e7b96815649A6a60785e1fbA84C1e/0xBBdd6633Db277810e9066abA0A16aF602a0F156a/g' node_modules/@pancakeswap/sdk/dist/sdk.cjs.production.min.js
sed -i 's/0x5Fe5cC0122403f06abE2A75DBba1860Edb762985/0xC538c0661C661571032798F40c1859a9255924D9/g' src/state/swap/hooks.ts
sed -i 's/0x3E2b14680108E8C5C45C3ab5Bc04E01397af14cB/0x4B556A2A032511718b1C569a1a53dDbCB3B703af/g' src/state/swap/hooks.ts
sed -i 's/0x5CF874C2f969a53b75d18e9e719c65120000dD5E/0xe1662823d8044254409eB682fE34d35792677228/g' src/state/swap/hooks.ts
cp -r ../canvaswap-swap-sdk-v2/dist/ ./node_modules/@pancakeswap/sdk/dist/
echo "------------------------------------------------------Done------------------------------------------------------"
