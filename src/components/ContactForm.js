import React from 'react';
import styled from 'styled-components';
import { useEffect, useState } from "react";
import App from '../App';
import db from './Firebase';

function ContactForm(props) {

    const [contacts, setcontacts] = useState([]);

  const getContacts = () => {
    db.collection("contacts").onSnapshot((snapshot) => {
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


  const addContact = () => {
    var firstname = React.findDOMNode(this.refs.firstName).value;
    var lastname = React.findDOMNode(this.refs.lastName).value;
    var Phone = React.findDOMNode(this.refs.phone).value;
    if(firstname) {  
      db.collection('contacts').add({   
         firstName: firstname,
         lastName: lastname,
         phone: Phone
      
  })}
  }
    return (
        <FormDiv>
       <form> 
         <input type="text" value = {contacts.firstName} placeholder="First Name"/>
         <input type="text" value = {contacts.lastName} placeholder="Last Name"/>
         <input type="tel"  value = {contacts.phone} placeholder="ex: (111) 111-1111" /> <br></br>
         <ButtonDiv>
          <input onClick={addContact} type="submit"/>
         </ButtonDiv>
       </form>
       </FormDiv>
    )
}

export default ContactForm

const FormDiv = styled.div`
 display: flex;
 justify-content: space-around;
 form{
     display: flex;
     justify-content: space-between;
     input{
         padding: 5px;
         display: flex;
     justify-content: space-between;
     }
 }
`
const ButtonDiv = styled.div`
 input{ border-radius: 5px;
         margin-left: 10px;
        background-color: #0cbaba;
        color: #ffffff;
        cursor: pointer;
 }
`
