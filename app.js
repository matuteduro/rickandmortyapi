const express = require('express')
const app = express()
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false}))
app.use(express.json())

const characterRoutes = require('./routes/characters');
const apicharactersRoutes = require('./routes/api/charactersRouter')


app.use('/', characterRoutes);

app.use('/api', apicharactersRoutes)

app.listen('3300', () => console.log('Servidor corriendo en el puerto 3300'));


