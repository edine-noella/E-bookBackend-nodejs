const express = require('express')
const { AddUser, getAllUsers, getUserById, getUserByUsername, UpdateUser, deleteUser,signinUser } = require('../controllers/user.controller')
const router = express.Router({mergeParams:true})

router.post('/api/v1/users',AddUser)
router.get('/api/v1/users',getAllUsers)
router.get('/api/v1/users/:userId',getUserById)
router.get('/api/v1/users/name/:username',getUserByUsername) //not working
router.put('/api/v1/users/:userId',UpdateUser) //not being updated
router.delete('/api/v1/users/:userId',deleteUser)
//signin user
router.post('/api/v1/users/signin',signinUser)
module.exports = router 