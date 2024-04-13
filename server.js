const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', function (req, res) {
    res.json({
        "hey": "khubsurat"
    });
});

app.post('/api/console', function(Req, res) {
    return res.json({
        vikas: 'avisek'
    })
});

app.get('*', (req,res) =>{
    res.json({
        "hey": "huha",
        "bye": "pondy"
    });
});

app.listen(process.env.PORT || 8080, () => {
    console.log('Inside the server realml')
});

// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.json({
//     "hey": "NodeJs"
//   })
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })