// show dbs
// use <db-names>
// db
// db.<collection>.<command>(find, insert, update,size(array) etc, ...)
// db.product.update({ _id: '1231' }, { $set: { stockQuantity: 100 } })
// db.product.findOne()._id
// db.product.findOne()._id.getTimestamp()
// db.product.findOne()._id.valueOf()
// db.product.findOne()._id.str()


// dataTypes:
// Boolean
// Null
// Number (Integer, Double)
// String
// BigInt
// Object, Array
// Symbol
// Date
// Object ID

//queryData
// db.<collection>.find(query)
// {key:value}
// {key:$ne:value} not equal
// {key:$gt:value} lớn hơn
// {key:$gte:value} lớn hơn hoặc =
// {key:$lt:value} nhỏ hơn
// {key:$lte:value} nhỏ hơn hoặc =
// {key:$in:value} nằm trong
// {key:$nin:value} không nằm trongtrong
// db.product.find({age:{$in[35,40]}}) tuổi từ 35 đến 40
// db.product.find({age:{$gte:25}}) tuổi = 25
// db.use.find({email:/\.edu$\/}) email kết thúc edu

//$and và $or
// db.collection.find({
//     key1:value1,
//     key2:value2
// })
// db.collection.find({ genderr:'male', age:{$gt:35} })
// })

// db.collection.find({ $or:[condition1, condition2] })
