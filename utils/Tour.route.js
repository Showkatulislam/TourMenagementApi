const express = require('express');
const ViewCounter = require('../middlewar/middlewar');
const { getTour, addTour, getATour, updateATour } = require('./tour.controllers');

const router=express.Router();

router.route('/:id')
.get(ViewCounter,getATour)
.patch(updateATour)

router.route('/')
.get(getTour)
.post(addTour)



module.exports=router
