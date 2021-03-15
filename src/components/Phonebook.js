import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./Header";
import FormHeader from "./FormHeader";
import "./Phonebook.css";
import db from "./Firebase";
import { ContactsOutlined } from "@material-ui/icons";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import ContactForm from "./ContactForm";
import Image from "react-bootstrap/Image";

function Phonebook(props) {
  const [contacts, setcontacts] = useState([]);

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



  const removeContact = () => {
  
    db.collection("contact")
      .doc("JCjST1yMqS86vfCZKMwu")
      .delete()
      .then(() => {
        console.log("twas deleted");
      });
  };

  return (
    <div class="header">
      <Header />

      <Container fluid>
        <FormHeader />

        <FormContainer>
          <AddUserDiv>
            <h2>Add Contact</h2>
          </AddUserDiv>
          <ContactForm fluid />
          <hr></hr>
          <ContactList id="contactlist">
            {props.contacts.map((item) => (
              <Contacts id="Contacts">
                <ContactIconeContainer>
                  <AssignmentIndIcon />
                </ContactIconeContainer>
                <FirstName id="firstname">{item.firstName}</FirstName>
                <LastName id="lastname">{item.lastName}</LastName>
                <Phone id="iphone">{item.phone}</Phone>
                <DeleteIcon onClick={removeContact}>
                  <DeleteForeverOutlinedIcon />
                </DeleteIcon>
              </Contacts>
            ))}
          </ContactList>
        </FormContainer>
      </Container>
    </div>
  );
}

export default Phonebook;

const Container = styled.div`
  height: 1500px;
  width: 75%;
  margin-left: 14%;

  margin-top: 75px;

  border-radius: 100px 100px 0px 0px;
  box-shadow: 10px 10px 8px #888888;
  display: flex;
  background-color: white;
  img {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-left: 370px;
  }
`;

const FormContainer = styled.div`
  margin-left: 5%;
  margin-top: 25px;
  width: 90%;

  h2 {
    display: flex;
    justify-content: center;
    margin-bottom: 25px;
    color: #0cbaba;
    margin-top: 5px;
    align-items: center;
  }
  button {
    display: flex;
    align-items: center;
    border-radius: 5px;
    margin-left: 350px;
  }
`;

const ContactList = styled.div`
  height: 60px;
`;

const AddUserDiv = styled.div`
  img {
    display: flex;
    justify-content: flex-start;
    width: 66px;
    height: 66px;
    align-items: center;
    margin-left: 470px;
  }
  cursor: pointer;
`;

const Contacts = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  padding: 2px;
  font-size: 2vw;
  color: gray;
  padding-bottom: -500;
  border-bottom: solid #d3d3d3 1px;

  :hover {
    box-shadow: 10px 10px 8px #888888;
  }
  display: flex;
  justify-content: space-around;
`;
const FirstName = styled.div`
  margin-left: 25px;
`;

const LastName = styled.div``;

const Phone = styled.div`
  margin-left: 25px;
  align-items: center;
  padding-right: 100px;
`;

const FormDiv = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 5px;

  form {
    display: flex;
    justify-content: space-between;
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
    border-radius: 5px;
    margin-left: 10px;
    background-color: #0cbaba;
    color: #ffffff;
    cursor: pointer;
  }
`;

const ContactIconeContainer = styled.div`
  height: 500px;
  color: green;
`;

const DeleteIcon = styled.div`
  height: 200px;
  color: red;
  cursor: pointer;
`;
