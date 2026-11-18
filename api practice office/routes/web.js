const express = require('express');
const { studentDisplay, studentCreate, studentView, studentUpdate, studentDelete} = require('../controllers/studentController')
const { hrDisplay, hrCreate, hrView, hrUpdate, hrDelete} = require('../controllers/hrController')
const route = express.Router()

//locaklhost:3000/api/studentDisplay
route.get('/studentDisplay', studentDisplay)
route.post('/studentCreate', studentCreate)
route.get('/studentView/:id', studentView)
route.put('/studentUpdate/:id', studentUpdate)
route.delete('/studentDelete/:id', studentDelete)



//locaklhost:3000/api/studentDisplay
route.get('/hrDisplay', hrDisplay)
route.post('/hrCreate', hrCreate)
route.get('/hrView/:id', hrView)
route.put('/hrUpdate/:id', hrUpdate)
route.delete('/hrDelete/:id', hrDelete)








module.exports = route;