const path=require('path')

const express=require("express")
const bodyParser=require("body-parser")

const app=express()
//app.use-path paths callback callbacks

const adminRout=require('./routs/admin')
const shopadmin=require('./routs/shop')
app.use(bodyParser.urlencoded({extended:false})) //config option extended:false
// app.use('/', (req,res,next)=>{
//   // res.send("<h1>this is always run</h1>")
//   next()
// })

app.use('/admin',adminRout)  //add segment as a filter 
  app.use(shopadmin)


  app.use((req,res,next)=>{
    res.status(404).sendfile(path.join(__dirname,"View","404.html"))
  })
app.listen(3000)


// const express = require("express");
// const app = express();
// const fs = require("fs");
// const bodyParser = require("body-parser");
// const login = require("./routs/login");
// const cookieParser = require("cookie-parser");
// app.use(cookieParser());

// // set up middleware to parse request body
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(login);
// //app.js

// // ...

// // Read messages from file

// let messages = [];
// const messagesFilePath = './messages.txt';
// // messages variable as an empty array and then check if the messages.txt file exists using fs.existsSync.
// try {
//   if (fs.existsSync(messagesFilePath)) {
//     // If the file exists, it reads the contents of the file synchronously using fs.readFileSync, parses the JSON content, and assigns it to the messages variable.
//     console.log('File exists');
//     const fileContents = fs.readFileSync(messagesFilePath, 'utf-8');
//     console.log('File content:', fileContents);

//     messages = JSON.parse(fileContents);
//   } else {
//     // If the file doesn't exist, it logs a message indicating that the file doesn't exist.
//     console.log('File does not exist');
//   }
// } catch (err) {
//   console.error('Error:', err);
// }


// // Route handler to display messages
// app.get("/messages", (req, res) => {
//   const username = req.cookies.username;
//   // const messagesForUser = messages.filter((m) => m.username !== username);
//   // console.log(messagesForUser)
//   res.send(`
//     <h1>Messages</h1>
//     <ul style="list-style-type:none;">
//       ${messages
//         .map((m) => `<li>${m.username}: ${m.message}</li>`)
//         .join("")
//       }
//     </ul>
//     <form action="/send" method="POST">
//       <input type="text" name="message" placeholder="Type your message here">
//       <button type="submit">Send</button>
//     </form>
//   `);
// });

// // Route handler to handle sending messages
// app.post('/send', (req, res) => {
//   const username = req.cookies.username;
//   const message = req.body.message;
//   messages.push({ username, message });
//   //After updating the messages array, the code writes the updated array to the file using fs.writeFileSync:

//   fs.writeFileSync(messagesFilePath, JSON.stringify(messages));
//     //The code then reads the contents of the file again to update the messages variable:

//   // writes the updated array to a file, reloads the messages array from the file, and redirects the user to the '/messages' page.
//   const fileContents = fs.readFileSync(messagesFilePath, 'utf-8');
//   messages = JSON.parse(fileContents);
//   res.redirect('/messages');
// });

// // Middleware to set username cookie if not already set
// app.use((req, res, next) => {
//   const username = req.cookies.username;
//   if (!username) {
//     res.cookie('username', 'Guest');
//   }
//   next();
// });

// // 404 error handler
// app.use((req, res, next) => {
//   res.status(404).send("<h1>404, Page not found</h1>");
// });

// app.listen(3000);
