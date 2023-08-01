const path = require('path');

exports.getHomePage = (req,res)=>{
    res.sendFile(path.join(__dirname, '..', 'views', 'homepage.html'));
}
exports.getChatPage = (req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','chat.html'))
}