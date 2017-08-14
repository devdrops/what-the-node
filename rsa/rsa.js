var ursa = require('ursa');

var message = 'wtfbbqomfglolwutyologtfortfmlolwthsoab';

console.log('ORIGINAL', message);

var privateKey = ursa.generatePrivateKey(1024, 65537);
var buffer = new Buffer(message);

var result = privateKey.encrypt(buffer);
var encrypted = result.toString('hex');

console.log('ENCRYPTED, MOTHERF****ER!', encrypted);

var encryptedBuffer = new Buffer(encrypted, 'hex');
var result = privateKey.decrypt(encryptedBuffer);
var decrypted = result.toString();

console.log('DECRYPTED, MOTHERF****ER!', decrypted);

console.log('AND... ARE THEY EQUALS??', (decrypted === message));

