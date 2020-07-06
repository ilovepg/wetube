const express = require('express') //node module을 어딘가에서 가져오는 것이다. (include같은..)
const app = express()

const PORT = 4000;

function handleListening(){
    console.log(`Listening on: http://localhost:${PORT}`);
}
function handleHome(req,res){
    res.send('Hello from Home!');
}
function handleProfile(req,res){
    res.send('You are on my profile');
}

app.get("/profile",handleProfile);
app.get("/",handleHome); // '/' URL에 GET방식으로 접근하면 handleHome 호출
app.listen(PORT,handleListening); //4000번 포트 리스닝