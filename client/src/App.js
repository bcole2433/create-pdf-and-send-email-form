import React, { Component } from "react";
import axios from "axios";
import { saveAs } from "file-saver";
import Nav from "./Components/Nav";
import StartForm from "./Components/Form";
import { Container } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      item: {
        id: "",
        email: "",
        personCompleting: "",
        accountName: "",
        address: "",
        customerEmail: "",
        walkthroughDate: new Date(),
        startDate: new Date(),
        franchisee: "",
        franchiseeEmail: "",
      }
    };
  }

  componentDidMount() {
    // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }

  // Fetches GET route from express server
  callBackendAPI = async () => {
    const response = await fetch("/express_backend");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  handleSubmit = e => {
    e.preventDefault();
    this.createPDF();
    this.createAndSendEmail();
  };

  //manually reset form
  resetForm = () => {
    this.setState({
      item: {
        id: "",
        email: "",
        personCompleting: "",
        accountName: "",
        address: "",
        customerEmail: "",
        walkthroughDate: new Date(),
        startDate: new Date(),
        franchisee: "",
        franchiseeEmail: "",
      }
    });
  };

  handleInputChange = (e) => {
    e.preventDefault();
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      item: { ...this.state.item, [name]: value }
    });
  };

  onWalkDateChange = (date) => {
    this.setState({
      item: { ...this.state.item, walkthroughDate: date }
    });
  };

  onStartDateChange = (date) => {
    this.setState({
      item: { ...this.state.item, startDate: date }
    });
  };

  createPDF = () => {
    axios
      .post("/create-pdf", this.state.item)
      .then(() => axios.get("/fetch-pdf", { responseType: "blob" }))
      .then(res => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });
        saveAs(pdfBlob, this.state.item.accountName + "StratusStartForm.pdf");
        alert("You submitted the form!");
        this.resetForm()
      });
  };

  createAndSendEmail = () => {
    const content = {...this.state.item };
    console.log("creating email for " + content.personCompleting + ", " + content.email);

    //INSERT THE EMAIL YOU WANT TO SEND FROM OR (RECOMMENDED) ADD IT TO A .ENV FILE
    const from = "[INSERT EMAIL HERE OR process.env.email]";
    const toField = [from, content.email, content.franchiseeEmail];
    const acc = content.accountName;
    const emailData = {
      from: from,
      to: toField,
      subject: "New Start Form submission for " + acc,
      content: content,
    };

    axios
      .post("/send-email", emailData)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  render() {
    return (
      <React.Fragment>
        <Nav />
        <br />
        <Container>
          <h1>Company_Name New Account Start Form</h1>
          <br />
          <StartForm
            item={this.state.item}
            handleInputChange={this.handleInputChange}
            onWalkDateChange={this.onWalkDateChange}
            onStartDateChange={this.onStartDateChange}
            handleSubmit={this.handleSubmit}
          />
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
