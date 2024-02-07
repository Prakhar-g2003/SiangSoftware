const express = require('express');
const router = express.Router();
const {db} = require('../firebase/fireConfig')
const { collection, doc, getDoc, addDoc, getDocs } = require('firebase/firestore');

const collabsCollection = collection(db, 'collabs');

router.post('/collab-req', async(req, res) => {
    const data = req.body;
    console.log(data);
    await addDoc(collabsCollection, data);
    res.json({});
})

module.exports = router;