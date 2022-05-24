import React from 'react'
import TopBar from "@duik/top-bar";
import Button from '@duik/button';
import TopBarSection from "@duik/top-bar-section";
import TopBarTitle from "@duik/top-bar-title";
import {useNavigate } from "react-router-dom";


import "@duik/it/dist/styles.css";
import { useUserAuth } from '../../Context/userAuthContext';

<link href="https://fonts.googleapis.com/css?family=Roboto+Mono|Roboto:300,400,500&display=swap" rel="stylesheet"></link>

function Topbar() {
  const{user,logOut} = useUserAuth();
  console.log(user);
  const navigate = useNavigate();
  const handleLogOut=async()=>{
    try{
      await logOut();
      navigate("/");
    }catch(error){
      console.log(error.message);
    }
  };
  
  return (
    <div>
      <TopBar>
        <TopBarSection>
          <TopBarTitle>
            <h1 style={{ color: "rgb(22,98,207)" }}>Aspire</h1>
          </TopBarTitle>
        </TopBarSection>
        <TopBarSection>
          <h3>Welcome &nbsp; </h3>
          {user && user.email}
        </TopBarSection>
        <TopBarSection>
          <Button primary onClick={handleLogOut}>
            Logout
          </Button>
        </TopBarSection>
      </TopBar>
    </div>
  );
}

export default Topbar