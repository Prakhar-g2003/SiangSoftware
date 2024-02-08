const express = require('express');
const router = express.Router();
const {db} = require('../firebase/fireConfig')
const { collection, doc, getDoc, addDoc, getDocs, updateDoc, arrayUnion } = require('firebase/firestore');

const feedCollection = collection(db, 'feed');

router.get('/full-feed', async(req, res) => {
    const dataArray = [];
    const alldocs = await getDocs(feedCollection);
    alldocs.forEach((doc) => {
        dataArray.push(doc.data());
    });
    // console.log(dataArray);
    res.send(dataArray);
})

router.post('/add-feed', async(req, res) => {
    // console.log(req.body.ques_id);
    const docRef = doc(db, 'feed', req.body.ques_id);
    var docSnap = await getDoc(docRef);
    // console.log(docSnap.data());
    const obj = {
        ans_info: req.body.comment,
        ans_user: req.body.ans_user
    }
    // console.log(obj);
    // docSnap.data().answers.push(obj);
    await updateDoc(docRef, {
        answers: arrayUnion(obj)
    });
    console.log(req.body);
    // console.log(docSnap.data());
    res.json({hello: "hello"});
})

module.exports = router;