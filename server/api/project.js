const express = require('express');
const router = express.Router();
const {db} = require('../firebase/fireConfig')
const { collection, doc, getDoc, addDoc, getDocs, updateDoc, serverTimestamp, arrayUnion } = require('firebase/firestore');

const ProjectsCollection = collection(db, 'projects');

router.post('/addproject', async(req, res) => {
    const data = req.body;
    // console.log(data);
    const wordsArray = data.techstacks.split(", ");
    data.techstacks = wordsArray;
    var response = await addDoc(ProjectsCollection, data);
    const docRef = doc(db, 'projects', response.id);
    
    await updateDoc(docRef, {
        id: response.id,
        reviews: [],
        timestamp: serverTimestamp()
    });
    // console.log(data);
    res.send("success");
})

router.post('/showproject', async(req, res) => {
    const id = req.body.id;
    const docRef = doc(db, 'projects', id);

    const docSnap = await getDoc(docRef);

    res.send(docSnap.data());
})

router.get('/projects', async(req, res) => {
    const dataArray = [];
    const alldocs = await getDocs(ProjectsCollection);
    alldocs.forEach((doc) => {
        dataArray.push(doc.data());
    });
    // console.log(dataArray);
    res.send(dataArray);
})

router.post('/my-projects', async(req, res) => {
    const id = req.body.user_id;
    const dataArray = [];
    const alldocs = await getDocs(ProjectsCollection);
    alldocs.forEach((doc) => {
        if(doc.data().userId === id){
            dataArray.push(doc.data());
        }
    });

    // console.log(dataArray);
    res.send(dataArray);
})

router.post('/add-review', async(req, res) => {
    console.log(req.body);
    const docRef = doc(db, 'projects', req.body.proj_id);

    // const docSnap = await getDoc(docRef);
    // console.log(docSnap.data());
    const obj = {
        ans_info: req.body.ans_info,
        ans_user: req.body.ans_user
    }
    // console.log(req.body);

    // console.log(docRef.data());
    
    await updateDoc(docRef, {
        reviews: arrayUnion(obj)
    });
    res.json({success: "true"});
})

module.exports = router;