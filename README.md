# Email pdf submission form using React, Node.js, Axios, and Sendgrid

This is a simple form that can be used to submit data, create a pdf of the data, and send that information in an email to the multiple emails that were listed on the form submission using sendgrid.

The form sends the data to the server which formats it, creates a blog and sends back to the client to download the pdf.

The form also sends the data to the Sendgrid api to send an email with the content.

### Prerequisites

To send emails, you need to create a personal Sendgrid account.
Also, include an email for the 'from' field in the email.

### Running The Project

``` 
---TO RUN SERVER---
In root folder:
node server.js

---TO RUN CLIENT---
cd client
npm start
```

### License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details