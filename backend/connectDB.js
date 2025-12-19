import mongoose from 'mongoose'

let connectDB = (connection)=> {
    return( mongoose.connect(connection)
    .then( ()=> {
        console.log('Successfully connected to Database!')
    })
    .catch( (error)=> {
        console.log(error)
    }))
}

export default connectDB;