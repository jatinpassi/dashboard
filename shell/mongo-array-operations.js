//  Inserting in array

db.user.updateOne({
    "_id": ObjectId("602ec28e47fb770c68be8848")
}, {
        $push: {
        "phone_number": {
                $each: [1234777, 23464, 34554, 545644, 56743, 78942, 232324321],
                $slice: -10,
                $sort:-1
        }
        }
})

// Using arrays as sets
db.user.updateOne({
    "_id": ObjectId("602ec28e47fb770c68be8848")
}, {
    $addToSet: {
        "phone_number": "9583986759"
    }
})

// Removing elements from array
// 1) stack
db.user.updateOne({
        "_id": ObjectId("602ec28e47fb770c68be8848")
    },
    {
        $pop: {
            "phone_number": 1
        }
    }
)
// 2) Queue
db.user.updateOne({
        "_id": ObjectId("602ec28e47fb770c68be8848")
    },
    {
        $pop: {
            "phone_number": -1
        }
    }
)
// 3) any position
db.user.updateOne({
        "_id": ObjectId("602ec28e47fb770c68be8848")
    },
    {
        $pull: {
            "phone_number": {
                $in: [2344]
            }
        }
    }
)
// or
db.user.updateOne({
    "_id": ObjectId("602ec28e47fb770c68be8848")
},
{
    $pull: {
        "phone_number": 2344
    }
}
)


// Updating array using position operator
db.user.updateOne({
        "phone_number.data": 9090989765
    }, {
        $set: { "phone_number.$.data": 90 } //Here $ is position operator
    }
)

// Updating array using array filter
db.blog.updateOne(
    {"post" : post_id },
    {
        $set: {
            "comments.$[elem].hidden": true
        }
    },
    {
        arrayFilters: [{
            "elem.votes": {
                $lte: -5
            }
        }]
    }
)
