const express = require('express');
const router = express.Router();
const {db} = require('../firebase/fireConfig')
const { collection, doc, getDoc, addDoc, getDocs } = require('firebase/firestore');

const usersCollection = collection(db, 'projects');

router.post('/addproject', async(req, res) => {
    const data = req.body;
    const docRef = await addDoc(usersCollection, data);
})

router.post('/projects', async(req, res) => {
    const dataArray = [];
    const alldocs = await getDocs(usersCollection);
    alldocs.forEach((doc) => {
        dataArray.push(doc.data());
    });
    console.log(dataArray);
    res.send(dataArray);
})

module.exports = router;