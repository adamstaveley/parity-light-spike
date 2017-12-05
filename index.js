const Web3 = require('web3');

const web3 = new Web3(new Web3.providers.WebsocketProvider('http://192.168.1.6:8586'));

const contractAddress = '0x1faa66E073E5045011FC780E668981Db7363B06b';

const eventContract = new web3.eth.Contract(require('./contracts/event.json'), contractAddress);

console.log('Started listening for events:\n');

web3.eth.personal.unlockAccount('0xc2fd6016fC02B1e090af9d67f24F0538b0E01124', 'light')
    .then(() => eventContract.methods.start().call({from: '0xc2fd6016fC02B1e090af9d67f24F0538b0E01124', gas: 22000}))
    .then(console.log)
    .catch(console.error);


eventContract.events.Start({fromBlock: 0})
    .on('data', console.log)
    .on('changed', console.log)
    .on('error', console.log);

// eventContract.getPastEvents('Start', {}, console.log);

// eventContract.events.allEvents({
//     fromBlock: 0,
//     toBlock: 'latest'
//     }, (err, event) => {
//         console.log(err, event)
// });



// web3.eth.getBalance('0xc2fd6016fC02B1e090af9d67f24F0538b0E01124').then(console.log);