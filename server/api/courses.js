const express = require('express');
const router = express.Router();
const {db} = require('../firebase/fireConfig')
const { collection, doc, getDoc, addDoc, getDocs } = require('firebase/firestore');

const usersCollection = collection(db, 'courses');

router.post('/addcourse', async(req, res) => {
    const data = req.body;
    const docRef = await addDoc(usersCollection, dataFromFrontend);
    const data_id = {
        id: docRef.id
    }
})
router.get('/courses', async(req, res) => {
    const dataArray = [];
    const alldocs = await getDocs(usersCollection);
    alldocs.forEach((doc) => {

        dataArray.push(doc.data());
    });
    // console.log(dataArray);
    res.send(dataArray);
})
module.exports = router;