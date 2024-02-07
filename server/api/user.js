const app = require('express');
const router = app.Router();
const { jwtDecode } = require("jwt-decode");
const {db} = require('../firebase/fireConfig');
const { collection, doc, getDoc, addDoc, getDocs, updateDoc } = require('firebase/firestore');
const jwt = require('jsonwebtoken');

const jwtSecret = "thisisajwtsecretforkritisoftwareps";

router.get('/user-info', async(req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwtDecode(token);
    // console.log(decoded.user.id);
    
    if(!token){
        return res.status(403).json({message: 'No token provided'});
    }
    const docRef = doc(db, 'users', decoded.user.id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
        return res.status(404).json({message: 'user not found'});
    } 
    else{
        // console.log(docSnap.data());
        res.json({id: docSnap.id});
    }

    // console.log(token);
})

router.post('/fullinfo', async(req, res) => {
    console.log(req.body.user_id);
    const docRef = doc(db, 'users', req.body.user_id);
    const docSnap = await getDoc(docRef);
    // console.log(docSnap.data());
    res.json({name: docSnap.data().name, branch: docSnap.data().branch, course: docSnap.data().courses, yearofgrad: docSnap.data().yearofgrad, phone_no: docSnap.data().phone_no, aboutme: docSnap.data().aboutme});
})

router.post('/update_user_info', async(req, res) => {
    console.log(req.body);
    const docRef = doc(db, 'users', req.body.user_id);
    await updateDoc(docRef, req.body);
    res.json({});
})

module.exports = router;