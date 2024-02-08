const express = require('express');
const router = express.Router();
const {db} = require('../firebase/fireConfig')
const { collection, doc, getDoc, addDoc, getDocs, updateDoc, serverTimestamp } = require('firebase/firestore');

const collabsCollection = collection(db, 'collabs');

router.post('/collab-req', async(req, res) => {
    const data = req.body;
    // console.log(data);
    var response = await addDoc(collabsCollection, data);
    const docRef = doc(db, 'collabs', response.id);

    await updateDoc(docRef, {
        collab_id: response.id,
        timestamp: serverTimestamp()
    });
    res.json({});
})

router.post('/get-collabs', async(req, res) => {
    const id = req.body.user_id;
    const dataArray = [];
    const alldocs = await getDocs(collabsCollection);
    alldocs.forEach((doc) => {
        if(doc.data().receiver_id === id){
            dataArray.push(doc.data());
        }
    });
    // console.log(dataArray);
    console.log(dataArray);
    res.send(dataArray);
    // console.log(data);
})
module.exports = router;