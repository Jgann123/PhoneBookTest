import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./Header";
import FormHeader from "./FormHeader";
import "./Phonebook.css";
import db from "./Firebase";
import { ContactsOutlined } from "@material-ui/icons";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import ContactForm from './ContactForm';

function Phonebook(props) {
  console.log(props);



  return (
    <div class="header">
      <Header />
      <PhonebookContainer>
        <FormHeader />
        <FormContainer>
          <AddUserDiv>
            <h2>Add Contact</h2>
            <img src="/images/User_3-512.png" alt="" />
          </AddUserDiv>
         <ContactForm/>

          <hr></hr>
          <ContactList>
            {props.contacts.map((item) => (
              <Contacts>
                <AssignmentIndIcon />
                <FirstName>{item.firstName}</FirstName>
                <LastName>{item.lastName}</LastName>
                <Phone>{item.phone}</Phone>
                <DeleteForeverOutlinedIcon />
              </Contacts>
            ))}
          </ContactList>
        </FormContainer>
      </PhonebookContainer>
    </div>
  );
}

export default Phonebook;

const PhonebookContainer = styled.div`
  height: 1000px;
  width: 60%;
  margin-left: 20%;
  margin-right: 15%;
  margin-top: 75px;

  border-radius: 10px 100px 0px 0px;
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

const ContactList = styled.div``;

const AddUserDiv = styled.div`
  img {
    width: 66px;
    height: 66px;
  }
  cursor: pointer;
`;

const Contacts = styled.div`
  height: 38px;
  width: 850px;
  display: flex;
  padding: 10px;
  

  :hover {
    box-shadow: 10px 10px 8px #888888;
  }
  display: flex;
  justify-content: space-around;
`;
const FirstName = styled.div`
  margin-left: 50px;
`;

const LastName = styled.div``;

const Phone = styled.div`
  margin-left: 25px;
  align-items: center;
  padding-right: 100px;
`;
