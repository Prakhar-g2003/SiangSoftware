const express = require('express');
const router = express.Router();
const {db} = require('../firebase/fireConfig')
const { collection, doc, getDoc, addDoc, getDocs, updateDoc, arrayUnion, serverTimestamp } = require('firebase/firestore');

const feedCollection = collection(db, 'feed');

router.get('/full-feed', async(req, res) => {
    const dataArray = [];
    const alldocs = await getDocs(feedCollection);
    alldocs.forEach((doc) => {
        dataArray.push(doc.data());
    });
    
    res.send(dataArray);
})

router.post('/add-ans', async(req, res) => {
    const docRef = doc(db, 'feed', req.body.ques_id);
    
    const obj = {
        ans_info: req.body.comment,
        ans_user: req.body.ans_user
    }
    // console.log(req.body);

    // console.log(docRef.data());
    
    await updateDoc(docRef, {
        answers: arrayUnion(obj)
    });

    res.json({hello: "hello"});
})

router.post('/add-ques', async(req, res) => {
    // console.log(req.body);

    var response = await addDoc(feedCollection, {
        question: req.body,
        answers: [],
        ques_id: ""
    });
    const docRef = doc(db, 'feed', response.id);
    await updateDoc(docRef, {
        ques_id: response.id,
        timestamp: serverTimestamp()
    });

    res.send({question: "success"});
})

module.exports = router;