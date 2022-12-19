const { MongoClient, ServerApiVersion } = require("mongodb")
const uri =
    "mongodb+srv://atlaspartners:GPsm6gIxzf4rFq0b@cluster0.a4tkngb.mongodb.net/?retryWrites=true&w=majority"

export const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1
})
