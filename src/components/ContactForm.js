import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import App from "../App";
import db from "./Firebase";
import { Form } from "react-bootstrap";
import "./ContactsForm.css";

function ContactForm(props) {
  const [contact, setcontacts] = useState([]);

  const getContacts = () => {
    db.collection("contact").onSnapshot((snapshot) => {
      setcontacts(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            firstName: doc.data().firstName,
            lastName: doc.data().lastName,
            phone: doc.data().phone,
          };
        })
      );
    });
  };

  useEffect(() => {
    getContacts();
  }, []);

  const addContacts = () => {
    const userFirstName = document.getElementById('First Name').value
    const userLastName = document.getElementById('Last Name').value
    const userPhone = document.getElementById('Phone').value
     if(userFirstName && userLastName && userPhone) {db.collection('contact').add({
      firstName: userFirstName,
      lastName: userLastName,
      phone: userPhone
    })
    .then(function(docRef){
      console.log(docRef.id);
    })}
  }


  
  return (
    <Container fluid>
      <Form.Group controlId="formContacts">
        <Form.Label>First Name:</Form.Label>
        <Form.Group>
        <Form.Control
        id="First Name"
          value={contact.firstName}
          type="text"
          placeholder="First Name"
          ref={contact.firstName}
        />
        </Form.Group>
        <Form.Group>

        <Form.Label>Last Name:</Form.Label>
        <Form.Control
        id= "Last Name"
          value={contact.lastName}
          type="text"
          placeholder="Last Name"
          ref = {contact.lastName}
        />
        </Form.Group>
        <Form.Group>

        <Form.Label>Phone:</Form.Label>
        <Form.Control id = "Phone" value={contact.phone} type="tel" placeholder="Phone" ref = {contact.phone} />
        </Form.Group>
        <br></br>
        <Form.Group>
        <Form.Group>
        <ButtonDiv>
          <Form.Control onClick={addContacts} type="submit"></Form.Control>
        </ButtonDiv>
        </Form.Group>
      </Form.Group>
      </Form.Group>
    </Container>
  );
}

export default ContactForm;

const Container = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-around;
  padding: 5px;
  

  form {
    display: flex;
    justify-content: space-around;
    padding: 5px;

    input {
      padding: 5px;
      display: flex;
      justify-content: space-between;
    }
  }
`;

const ButtonDiv = styled.div`
  input {
    margin-top: 5px;
    border-radius: 5px;

    background-color: #0cbaba;
    color: #ffffff;
    cursor: pointer;
  }
`

const Button = styled.div``