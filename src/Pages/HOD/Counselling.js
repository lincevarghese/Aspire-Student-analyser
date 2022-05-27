import "../../components/List/Form.css"
import React,{useState, useEffect } from 'react'
import { db } from "../../Firebase/Config";
import {ref, onValue, orderByChild,query,startAt} from "firebase/database";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function Counselling() {
    const [data,setData]=useState({});  
   	useEffect(() => { 
     const dbRef =query(ref(db, "Grade/"),orderByChild('RS'),startAt(3));
     onValue(dbRef, (snapshot) => {
       if(snapshot.val()!=null){
         setData({...snapshot.val()});
       }else{
         setData({});
       }
       });
       return()=>{
         setData({});
       }
   }, []);
  
  return (
	  <div >        
			<>
			<Table className="single_sub">
			  <thead >
				<tr>
				  {/* <th>#</th> */}
				  <th>Name</th>
				  <th>S1</th>
				  <th>S2</th>
				  <th>S3</th>
				  <th>S4</th>
				  <th>S5</th>
				  <th>Supply</th>
				</tr>
			  </thead>
			  <tbody>
				{Object.keys(data).map((row, index) => {
					return (					  
						<tr key={row}>
						<td>{data[row].Name}</td>
						<td>{data[row].S1}</td>
						<td>{data[row].S2}</td>
						<td>{data[row].S3}</td>
						<td>{data[row].S4}</td>
						<td>{data[row].S5}</td>
						<td>{data[row].RS}</td>
						{/*
                        <td>{index}</td>					  
						 <td>{row.data.Name}</td>
                          */}
						<td>
							<Link to={`/student/performance/${row}`}>
							<button>View Profile</button>
							</Link>
						</td>
						</tr>

				);				
				})}
			  </tbody>
			</Table>
		  </>                 
    </div>
  );
}

export default Counselling;
