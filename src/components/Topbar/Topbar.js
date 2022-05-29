import '../List/Form.css'
import React from 'react'
import TopBar from "@duik/top-bar";
import Button from '@duik/button';
import TopBarSection from "@duik/top-bar-section";
import TopBarTitle from "@duik/top-bar-title";
import {useNavigate } from "react-router-dom";
import { db } from "../../Firebase/Config";
import { ref, onValue, orderByChild, query, startAt,equalTo } from "firebase/database";
import { useState, useEffect } from "react";
import "@duik/it/dist/styles.css";
import { useUserAuth } from '../../Context/userAuthContext';

<link href="https://fonts.googleapis.com/css?family=Roboto+Mono|Roboto:300,400,500&display=swap" rel="stylesheet"></link>

function Topbar() {
  const{user,logOut} = useUserAuth();
  console.log(user);
   const useremail=user.email;
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const handleLogOut=async()=>{
    try{
      await logOut();
      navigate("/");
    }catch(error){
      console.log(error.message);
    }
  };
  useEffect(() => {
    const dbRef = query(
      ref(db, 'User/'),
      orderByChild("email"),
      equalTo(useremail)
    );
    onValue(dbRef, (snapshot) => {
      if (snapshot.val() != null) {
        setData({ ...snapshot.val() });
      } else {
        setData({});
      }
    });
    return () => {
      setData({});
    };
  }, []);
  
  
  return (
    <div>
      <TopBar>
        <TopBarSection>
          <TopBarTitle>
            <h1 style={{ color: "rgb(22,98,207)" }}>Aspire</h1>
          </TopBarTitle>
        </TopBarSection>
        <TopBarSection>
          {Object.keys(data).map((row, index) => {
        return (
          <>
            <h3>
              Welcome, <span style={{fontWeight:"bold"}}>{data[row].name}</span>
            </h3>
          </>
        );
      })}
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