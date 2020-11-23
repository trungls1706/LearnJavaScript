const envConfig = {
    development: {
        DOMAIN_BUYER: "https://coupletx.com",
        DOMAIN_CONFIG: "themeid=1000462881&view=mobilejson",
        DOMAIN_NOTIFI: "https://mobilenotificationsexpo-onapp.sku.vn/mobilenotificationsexpo",
        SHOPNOTIFI: "coupletx111.sku.vn",
    },

    production: {
        DOMAIN_BUYER: "https://coupletx.com",
        DOMAIN_CONFIG: "themeid=1000462881&view=mobilejson",
        DOMAIN_NOTIFI: "https://mobilenotificationsexpo.onapp.haravan.com/mobilenotificationsexpo",
        SHOPNOTIFI: "coupletx.myharavan.com",
        SHOP: "coupletx.com",
    }
};

let aa ='production'
let bb ='development'

const COUPLETX = {
    ...envConfig[aa],
    VERSION_APP: 2,
    MULTIPASS_SECRET: '6a2c2265960e4d6ab3680802062d9ed3',
    TOKEN_LOYALTY: 'a287955b1e02780e815383448a79aa04329c6d356b87df80e606b76d31ab38f8' 
};

const COUPLETX2 = {
    ...envConfig[bb],
    VERSION_APP: 2,
    MULTIPASS_SECRET: '6a2c2265960e4d6ab3680802062d9ed3',
    TOKEN_LOYALTY: 'a287955b1e02780e815383448a79aa04329c6d356b87df80e606b76d31ab38f8' 
};



console.log(COUPLETX)
console.log(COUPLETX2)