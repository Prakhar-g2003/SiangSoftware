const express = require('express')
const storeuser = require('./api/storeuser');
const user = require('./api/user');
const projects = require('./api/project');
const courses = require('./api/courses');
const port = 3001;
const app = express();
const cors = require('cors')

app.use(cors());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})

// Initialize Firebase
// const app1 = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app1);

app.use(express.json());
app.use('/api', storeuser);
app.use('/api', user);
app.use('/api', projects);
app.use('/api', courses);

app.get('/', (req, res) => {
  res.send('Welcome to my server!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});