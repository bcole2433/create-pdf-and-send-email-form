const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const pdf = require("html-pdf");
const pdfTemplate = require("./documents");
const sgMail = require("@sendgrid/mail");

//[INSERT SENDGRID API KEY - YOU NEED TO STORE THIS IN A .ENV FILE TO AVOID CORS ISSUES]
const SENDGRID_API_KEY = 'SEND GRID API OR GET FROM process.env.SENDGRID_API_KEY';
sgMail.setApiKey(SENDGRID_API_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route to check if connected
app.get("/express_backend", (req, res) => {
  res.send({ express: "EXPRESS BACKEND IS CONNECTED TO REACT" });
});

app.post("/create-pdf", (req, res) => {
  pdf.create(pdfTemplate(req.body), {}).toFile("Company_NameStartForm.pdf", err => {
    if (err) {
      return console.log("error");
    }
    app.post("/send");
    //could do a async /await on the client side also 
    res.send(Promise.resolve());
  });


});

app.get("/fetch-pdf", (req, res) => {
  res.sendFile(`${__dirname}/Company_NameStartForm.pdf`);
});

app.post("/send-email", (req, res) => {
  console.log(req.body)
  let emailData = req.body;
  const msg = {
    to: emailData.to,
    from: emailData.from,
    subject: emailData.subject,
    html: pdfTemplate(emailData.content),
  };
  sgMail.send(msg, function(error, response) {
    if (error) {
      console.log(error);
    } else {
      res.send({ express: "Email was sent" });
      res.send(Promise.resolve());
      console.log("Success | " + response);
    }
  });
});

