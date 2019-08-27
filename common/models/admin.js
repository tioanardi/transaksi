'use strict';

module.exports = function(Admin) {

    //remote methods

    Admin.remoteMethod(
        'getMenerimaPembayaran',
        {
            description: 'get menerimapembayaran' ,
            accepts: [
                { arg: 'menerimapembayaran', type: 'string'}
            ],
            returns:{
                arg: 'res', type:'object', root: true
            },
            http: { path: '/getMenerimaPembayaran', verb: 'get' }
        }
    );
    // function getNameLike -> get name with firstname param
    Admin.getMenerimaPembayaran = function(menerimapembayaran, callback){
        new Promise(function(resolve, reject){
            // query filter variable
            var filter ={
                where: {
                menerimapembayaran : {
                like : menerimapembayaran
                    }
                }
            }
            Admin.find(filter, function(err, result){
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


    Admin.remoteMethod(
        'getMenerimaRefund',
        {
            description: 'get menerimarefund' ,
            accepts: [
                { arg: 'menerimarefund', type: 'string'}
            ],
            returns:{
                arg: 'res', type:'object', root: true
            },
            http: { path: '/getRefund', verb: 'get' }
        }
    );
    // function getNameLike -> get name with firstname param
    Admin.getMenerimaRefund = function(menerimarefund, callback){
        new Promise(function(resolve, reject){
     // query filter variable
            var filter ={
            where: {
            menerimarefund : {
            like : menerimarefund
            }
        }
    }
    Admin.find(filter, function(err, result){
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
