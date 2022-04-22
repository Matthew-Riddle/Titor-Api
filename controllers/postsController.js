var database = {
    brett: {
        profilePic: "maybe an object with an id for the repo and an id for the particular image",

        posts: [
            {
                id: 1,
                value: "Hey there guys"
            },
            {
                id: 2,
                value: "testing 22222"
            },
            {
                id: 3,
                value: "asdfasdfasdfasdfasdfasdfasdfasdffffffffff"
            },
            {
                id: 4,
                value: "yeah we have data... so"
            }
        ]
    },
    fumie: {
        profilePic: "maybe an object with an id for the repo and an id for the particular image",
        
        posts: [
            {
                id: 1,
                value: "asdffffas"
            },
            {
                id: 2,
                value: "mmmhm"
            },
            {
                id: 3,
                value: "Some stuff i got from a place"
            },
            {
                id: 4,
                value: "exclasdaf;laksdjf !"
            }
        ]
    }
}
module.exports = {
    
    getPosts: function(req, res, next) {
        console.log("WE GOT HIT")
        res.status(202)
        res.send(database)
        next()
    }
    
}