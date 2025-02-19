const { commonjs, es2021, es2025 } = require("globals");

module.exports={
    env:{
        node:true,
        commonjs: true,
        es2025: true,
    },
    extends:['eslint:recommended','prettier'],
};