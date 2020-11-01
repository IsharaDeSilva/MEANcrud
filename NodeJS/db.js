const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ishara:ishara@cluster0.lrhjf.mongodb.net/crudDB?retryWrites=true&w=majority', 
{
    useUnifiedTopology: true,
    useNewUrlParser: true
},
    (err) =>{
    if(!err)
        console.log('mongodb connection succeeded yeahhh');
    else
        console.log('error in db connection: '+JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;
