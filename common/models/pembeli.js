'use strict';

module.exports = function(Pembeli) {

    //remote methods

    Pembeli.remoteMethod(
        'getPembayaran',
        {
            description: 'get pembayaran' ,
            accepts: [
                { arg: 'pembayaran', type: 'string'}
            ],
            returns:{
                arg: 'res', type:'object', root: true
            },
            http: { path: '/getPembayaran', verb: 'get' }
        }
    );
    // function getNameLike -> get name with firstname param
    Pembeli.getPembayaran = function(pembayaran, callback){
        new Promise(function(resolve, reject){
            // query filter variable
            var filter ={
                where: {
                    pembayaran : {
                        like : pembayaran
                    }
                }
            }
    Pembeli.find(filter, function(err, result){
        if(err) reject (err)
        if(result === null){
            err = new Error ("pembayaran tidak bisa dilanjutkan")
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
    

    Pembeli.remoteMethod(
        'getRefund',
        {
            description: 'get refund' ,
            accepts: [
                { arg: 'refund', type: 'string'}
            ],
            returns:{
                arg: 'res', type:'object', root: true
            },
            http: { path: '/getRefund', verb: 'get' }
        }
    );
    // function getNameLike -> get name with firstname param
    Pembeli.getRefund = function(refund, callback){
        new Promise(function(resolve, reject){
     // query filter variable
            var filter ={
                where: {
                    refund : {
                        like : refund
                    }
                }
            }
    Pembeli.find(filter, function(err, result){
        if(err) reject (err)
        if(result === null){
            err = new Error ("Refund tidak bisa dilanjutkan")
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
