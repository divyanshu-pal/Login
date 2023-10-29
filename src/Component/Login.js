import React, { useState } from 'react';
import styled from 'styled-components';
import myimage from '../img/ii.png'

const LoginContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  height: 100vh;
  place-content: center;


  @media (max-width: 1360px) {
    
    gap:30px;
    grid-template-columns: 1fr;
    height: auto;
  }
`;

const LoginForm = styled.form`

    display:flex;
    justify-content:center;
    align-items:center;
    border: 1px solid #ccc;
  background-color: #fff;
    height: 80vh;
    width:80%;
    margin:auto;
    box-shadow: 5px 5px 15px #888


    
`;

const Log = styled.div`

    display: flex;
     flex-direction: column;
     justify-content: center;
     color:#04072F;
  

    width: 80%    
    
`;

const H2 = styled.h2`
   
   text-align:center;
`;

const Input = styled.input`
  margin: 0.5rem 0;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Immg = styled.img`
display: flex;
width:400px;
height:400px;


`;

const Img = styled.div`
   display:flex;
   justify-content: center;
align-items:center;
background-color:white;
border-radius:2px;

`;



const Button = styled.button`
  width: 80%;
  
  margin-top:50px;
  margin-bottom:20px;
  margin-left:70px;
  padding: 0.5rem;
   background: #1575A7;
;
  color: #FFFFFF;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const StyledLabel = styled.label`
  font-size: 16px;
  font-weight:500;
  margin-bottom: 1px;
  text-align: left;
`;

const StyledLabe = styled.label`
  font-size: 16px;
  font-weight:500;
  margin-bottom: 1px;
  text-align:center;
`;

const Checkbox = styled.input`
    
     margin-left:0px;
     pointer-events:none;

`;

const CheckboxLabel =styled.label`
   font-weight:500;
   cursor:pointer;
   text-align: left;
   
`;
const CheckboxLabel1 =styled.label`
   
   font-weight:500;
   cursor:pointer;
   

   
`;
const Check = styled.div`
   display:flex;
   flex-direction:row;
   
`;

const Fle = styled.div`
    display:flex;
    flex-direction:row;
  
    justify-content:space-between;
`;

const Span = styled.span`
   text-decoration: underline;
   color:#F78719;
`;


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
   
  };

  return (
    <>
    <LoginContainer>

         <Img>
         <Immg src={myimage}></Immg>
         </Img>
                <LoginForm>
                       
                   <Log>
                   <H2>Login</H2>
                    <StyledLabel>Login Id</StyledLabel>
                    <Input
                    type="text"
                    placeholder="Enter Login Id"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                    <StyledLabel>Password</StyledLabel>
                    <Input
                    
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <Fle>

                    <Check>
                    <Checkbox type="checkbox" id="check"/>
                    
                    <CheckboxLabel>Remember me</CheckboxLabel>
                    
                    </Check>
                    <CheckboxLabel1><Span>Change Password</Span></CheckboxLabel1>
                   
                    </Fle>
                    
                    <Check>
                    <Checkbox type="checkbox" id="check"/>
                    <CheckboxLabel>Agree to <Span>Terms & condition</Span></CheckboxLabel>
                    </Check>
                    
                    <Button onClick={handleLogin}>Login</Button>
                    <StyledLabe>Don't have an account? <Span>Register Here</Span></StyledLabe>
                    </Log>
                </LoginForm>



      </LoginContainer>
    </>
  );
};

export default Login;
