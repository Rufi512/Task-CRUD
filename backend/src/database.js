import mongoose from 'mongoose'

var URI = 'mongodb://localhost/taskslist' 

mongoose.connect((URI), { //Pasamos la direccion de la base de datos a conectar
   useNewUrlParser: true,
   useUnifiedTopology: true,
   useFindAndModify:true,
   useCreateIndex:true
})


  .then(db => console.log('DB is connected on:',db.connection.host))
  .catch(err => console.log(err))
