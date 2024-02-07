const express = require('express');
const router = express.Router();
const {db} = require('../firebase/fireConfig')
const { collection, doc, getDoc, addDoc, getDocs } = require('firebase/firestore');
const jwt = require('jsonwebtoken');

const jwtSecret = "thisisajwtsecretforkritisoftwareps";

// Assuming you have a 'users' collection
const usersCollection = collection(db, 'users');

router.post('/storeuser', async (req, res) => {
    const dataFromFrontend = req.body;
    const snapshot = await getDocs(usersCollection);

    var found = false;
    var doc_id;

    snapshot.forEach((doc) => {
        const email_found = doc.data().email;
        if(dataFromFrontend.email === email_found){
            // email = email_found;
            doc_id = doc.id;
            found = true;
        }
      });
    if(!found){
        dataFromFrontend.contributions = 0;
        dataFromFrontend.branch = "";
        dataFromFrontend.course = "";
        dataFromFrontend.yearofgrad = "";
        dataFromFrontend.phone_no = "";
        dataFromFrontend.aboutme = "";
        dataFromFrontend.linkedInprofile = "";
        dataFromFrontend.instaprofile = "";
        dataFromFrontend.githubprofile = "";

        const docRef = await addDoc(usersCollection, dataFromFrontend);
        doc_id = docRef.id;
    }
    // console.log(doc_id);
    const data = {
        user:{
            id: doc_id
        }
      }
    // console.log(data);
    const token = jwt.sign(data, jwtSecret, { expiresIn: '1h' });
    // console.log('Data received:', dataFromFrontend);
    // console.log(token);
    res.json({token});
})

module.exports = router;