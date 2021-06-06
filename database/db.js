import mongoose from 'mongoose'

export const ConnectionDb = _ => (
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then(_ => {console.log("Database Connected...")})
    .catch(err => console.log(err))
)

