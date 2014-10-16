var express = require('express'),
    bear = require('./routes/bears');
 
var app = express();
 
app.configure(function () {
    app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());
});
 
app.get('/bears', bear.findAll);
app.get('/bears/:id', bear.findById);
app.post('/bears', bear.addBear);
app.put('/bears/:id', bear.updateBear);
app.delete('/bears/:id', bear.deleteBear);
 
app.listen(3000);
console.log('Listening on port 3000...');