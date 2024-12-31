const express = require('express')
const { PORT } = require('./config/serverConfig.js')

const setupAndStartServer = async () => {
 // make a express object

 const app = express();

 app.listen(PORT , ()=>{
  console.log(`Server started at ${PORT}`);
 })

}

setupAndStartServer();