import React from 'react';
import styled from 'styled-components';



function Header() {
    return (
        <Container fluid>
        <UserAvatar>
        
        <img src="/images/PhonIcon.jpg" alt="" />
        </UserAvatar>
        <h1>Contacts</h1>
        <hr></hr>
        </Container>
    )
}

export default Header


const Container = styled.div  `
  display: flex;
  height: 100px;
  width: 100%;
  justify-content: center;
  border: 10px;
  padding: 25px;
  /* border: 1px solid #8D8D8E;
  background-color: #eec0c6;
  background-image: linear-gradient(315deg, #eec0c6 0%, #7ee8fa 74%);
   */

  h1{
  color: white;
  margin-top: 10px;
}
 
`

const UserAvatar = styled.div`
width: 66px;
height: 66px;

margin-right: 8px;



img {
   width: 100%;
   border-radius: 50px;
   

}
`