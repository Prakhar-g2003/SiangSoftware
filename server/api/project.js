const express = require('express');
const router = express.Router();
const {db, storage} = require('../firebase/fireConfig');
const { collection, doc, getDoc, addDoc, getDocs, updateDoc, serverTimestamp, arrayUnion } = require('firebase/firestore');
const {
    ref,
    getDownloadURL,
    uploadBytesResumable,
  } = require("firebase/storage");
const uploadImage = require('../middleware/image_upload');

const ProjectsCollection = collection(db, 'projects');

router.post('/addproject', uploadImage, async(req, res) => {
    const data = req.body;
    // console.log(data);
    const wordsArray = data.techstacks.split(", ");
    data.techstacks = wordsArray;
    var response = await addDoc(ProjectsCollection, data);
    const docRef = doc(db, 'projects', response.id);

    const timestamp = Date.now();
    let fileURL="https://static-00.iconduck.com/assets.00/avatar-default-icon-2048x2048-h6w375ur.png";
    // if (req.file) {
    //     console.log(req.file);
    //     const fileName = `${req.file.originalname.split(".")[0]}_${timestamp}.${req.file.originalname.split(".")[1]
    //     }`;
    //     const fileRef = ref(storage, fileName);

    //     try {
    //     const fileSnapshot = await uploadBytesResumable(
    //         fileRef,
    //         req.file.buffer,
    //         {
    //         contentType: req.file.mimetype, 
    //         }
    //     );
    //     fileURL = await getDownloadURL(fileSnapshot.ref);
    //     }
    //     catch(err){
    //         res.status(500).json({message: "Error uploading file"});
    //     }
    // }
    // console.log(fileURL);
    
    await updateDoc(docRef, {
        id: response.id,
        reviews: [],
        timestamp: serverTimestamp()
    });




    const docSnap = await getDoc(docRef);
    var user_id = docSnap.data().userId;

    const docRef2 = doc(db, 'users', user_id);
    const docSnap2 = await getDoc(docRef2);

    var contri = docSnap2.data().contributions;

    await updateDoc(docRef2, {
        contributions: contri+10
    })

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