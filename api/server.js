// SUNUCUYU BU DOSYAYA KURUN
const express = require("express");
const User = require("./users/model");

const server = express();
server.use(express.json());

server.post("/api/users",(req,res)=>{
    let user = req.body.user;
    if (!user.name||!user.bio){
        res
        .status(400)
        .json({message:"Lütfen kullanici icin bir name ve bio sağlayın"});
    }else{
   user
   .insert(user)
   .then((newUser)=>{
        res
        .status(201)
        .json(newUser);
       })
       .catch((err)=>{
        res
        .status(500)
        .json({message:"Veritabanına kaydedilirken bir hata oluştu"});
       });
    }

});
server.get("/api/users",(req,res)=>{
    User
    .find()
    .then((users)=>{
        res
        .status(201)
        .json({users:users})
    })
    .catch((err)=>{
     res
     .status(500)
     .json({message:"Kullanıcı bilgileri alınamadı"})
    });
});
module.exports = {}; // SERVERINIZI EXPORT EDİN {}
