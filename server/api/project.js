const express = require('express');
const router = express.Router();
const {db} = require('../firebase/fireConfig')
const { collection, doc, getDoc, addDoc, getDocs, updateDoc, serverTimestamp } = require('firebase/firestore');

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
        reviews: 4,
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

module.exports = router;