'use strict';

module.exports = function(Komuditas) {

    Komuditas.remoteMethod(
        'getKategori',
        {
            description: 'get kategori' ,
            accepts: [
                { arg: 'kategori', type: 'string'}
            ],
            returns:{
                arg: 'res', type:'object', root: true
            },
            http: { path: '/getKategori', verb: 'get' }
        }
    );
    // function getNameLike -> get name with firstname param
    Komuditas.getKategori = function(kategori, callback){
        new Promise(function(resolve, reject){
            // query filter variable
            var filter ={
                where: {
                kategori : {
                like : kategori
                    }
                }
            }
    Komuditas.find(filter, function(err, result){
        if(err) reject (err)
        if(result === null){
            err = new Error ("pemilihan kategori tidak bisa dilanjutkan")
            err.statusCode = 404
            reject (err)
        }
        resolve(result)
    })
    }).then(function(res){
        if (!res) callback (err)
        return callback (null, res)
        }).catch(function(err){
        callback(err);
    });
    }
    

    Komuditas.remoteMethod(
        'getHarga',
        {
            description: 'get harga' ,
            accepts: [
                { arg: 'harga', type: 'string'}
            ],
            returns:{
                arg: 'res', type:'object', root: true
            },
            http: { path: '/getHarga', verb: 'get' }
        }
    );
    // function getNameLike -> get name with firstname param
    Komuditas.getHarga = function(harga, callback){
        new Promise(function(resolve, reject){
            // query filter variable
            var filter ={
                where: {
                harga : {
                like : harga
                    }
                }
            }
    Komuditas.find(filter, function(err, result){
            if(err) reject (err)
            if(result === null){
                err = new Error ("maaf harga nya kemahalan")
                err.statusCode = 404
                reject (err)
        }
            resolve(result)
    })
    }).then(function(res){
        if (!res) callback (err)
        return callback (null, res)
        }).catch(function(err){
        callback(err);
    });
    }
};
