'use strict';

module.exports = function(Transaksi) {


    Transaksi.remoteMethod(
        'getIdentitas',
        {
            description: 'get identitas' ,
            accepts: [
                { arg: 'identitas', type: 'string'}
            ],
            returns:{
                arg: 'res', type:'object', root: true
            },
            http: { path: '/getIdentitas', verb: 'get' }
        }
    );
    // function getNameLike -> get name with firstname param
    Transaksi.getIdentitas = function(identitas, callback){
        new Promise(function(resolve, reject){
            // query filter variable
            var filter ={
                where: {
                    identitas : {
                        like : identitas
                    }
                }
            }
    Transaksi.find(filter, function(err, result){
        if(err) reject (err)
        if(result === null){
            err = new Error ("identitas tidak bisa ditemukan")
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

     Transaksi.remoteMethod(
        'getIdentitas',
        {
            description: 'get identitas' ,
            accepts: [
                { arg: 'identitas', type: 'string'}
            ],
            returns:{
                arg: 'res', type:'object', root: true
            },
            http: { path: '/getIdentitas', verb: 'get' }
        }
    );
    // function getNameLike -> get name with firstname param
    Transaksi.getIdentitas = function(identitas, callback){
        new Promise(function(resolve, reject){
            // query filter variable
            var filter ={
                where: {
                    identitas : {
                        like : identitas
                    }
                }
            }
    Transaksi.find(filter, function(err, result){
        if(err) reject (err)
        if(result === null){
            err = new Error ("identitas tidak bisa ditemukan")
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

    Transaksi.remoteMethod(
        'getIdentitas',
        {
            description: 'get identitas' ,
            accepts: [
                { arg: 'identitas', type: 'string'}
            ],
            returns:{
                arg: 'res', type:'object', root: true
            },
            http: { path: '/getIdentitas', verb: 'get' }
        }
    );
    // function getNameLike -> get name with firstname param
    Transaksi.getIdentitas = function(identitas, callback){
        new Promise(function(resolve, reject){
            // query filter variable
            var filter ={
                where: {
                    identitas : {
                        like : identitas
                    }
                }
            }
    Transaksi.find(filter, function(err, result){
        if(err) reject (err)
        if(result === null){
            err = new Error ("identitas tidak bisa ditemukan")
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

    Transaksi.remoteMethod(
        'getIdentitas',
        {
            description: 'get identitas' ,
            accepts: [
                { arg: 'identitas', type: 'string'}
            ],
            returns:{
                arg: 'res', type:'object', root: true
            },
            http: { path: '/getIdentitas', verb: 'get' }
        }
    );
    // function getNameLike -> get name with firstname param
    Transaksi.getIdentitas = function(identitas, callback){
        new Promise(function(resolve, reject){
            // query filter variable
            var filter ={
                where: {
                identitas : {
                like : identitas
                    }
                }
            }
    Transaksi.find(filter, function(err, result){
        if(err) reject (err)
        if(result === null){
            err = new Error ("identitas tidak bisa ditemukan")
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

     Transaksi.remoteMethod(
        'getJumlah',
        {
            description: 'get jumlah' ,
            accepts: [
                { arg: 'jumlah', type: 'string'}
            ],
            returns:{
                arg: 'res', type:'object', root: true
            },
            http: { path: '/getJumlah', verb: 'get' }
        }
    );
    // function getNameLike -> get name with firstname param
    Transaksi.getJumlah = function(jumlah, callback){
        new Promise(function(resolve, reject){
            // query filter variable
            var filter ={
                where: {
                jumlah : {
                like : jumlah
                    }
                }
            }
    Transaksi.find(filter, function(err, result){
        if(err) reject (err)
        if(result === null){
            err = new Error ("jumlah terlalu banyak dan tidak bisa di lanjutkan")
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

    Transaksi.remoteMethod(
        'getIdentitas',
        {
            description: 'get identitas' ,
            accepts: [
                { arg: 'identitas', type: 'string'}
            ],
            returns:{
                arg: 'res', type:'object', root: true
            },
            http: { path: '/getIdentitas', verb: 'get' }
        }
    );
    // function getNameLike -> get name with firstname param
    Transaksi.getIdentitas = function(identitas, callback){
        new Promise(function(resolve, reject){
            // query filter variable
            var filter ={
                where: {
                identitas : {
                like : identitas
                    }
                }
            }
    Transaksi.find(filter, function(err, result){
        if(err) reject (err)
        if(result === null){
            err = new Error ("identitas tidak bisa ditemukan")
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
    };
}
