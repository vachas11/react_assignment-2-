import React, { useState, useEffect } from "react";
import axios from "axios";
import index from "../style/index.css"
import {Card} from "react-bootstrap";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, [])

    const loadUsers = async () => {
        try {
            const res = await axios.get("https://reqres.in/api/users/");
            //console.log(res.data.data);
            setUsers(res.data.data);
        }
        catch (error) {
            console.log(error);
        }
    }



    return (
        <div className="container"  >
            {

                users.map((user, index) => (
                    <div className="row" >
                   <div className="col-md" > 
                   <Card className="align" >
                     <Card.Img variant="top" src={user.avatar} />
                      <Card.Body>
                     <Card.Title>{user.first_name}</Card.Title>
                     <Card.Title>{user.last_name}</Card.Title>
                      <Card.Text className="mail">{user.email} </Card.Text>
                     
                        </Card.Body>
                           </Card>
                   </div> 
               </div>
                ))

            }
                    </div>

                )


}

export default Users

