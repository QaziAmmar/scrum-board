import React, { useEffect, useState } from 'react';
import { UserCSS } from "./style";
import { db } from '../../firebase'
import { ref, set, query, onValue, orderByKey, remove } from 'firebase/database';
import { uid } from 'uid';
import { size } from 'lodash';

const Users = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showError, setError] = useState("");
    const [users, setUsers] = useState([]);



    const handleOnChangeName = (e) => {
        setName(e.target.value);
    }
    const handleOnChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleOnChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const resetFields = () => {
        setEmail("")
        setPassword("")
        setName("")
    }

    function isValidate() {
        if (name === "" || email === "" || password === "") {
            return false
        } else {
            return true
        }
    }

    const handleAddUser = (e) => {
        const uuid = uid();

        if (isValidate()) {

            set(ref(db, `/Users/${uuid}`), {
                id: uuid,
                name: name,
                email: email,
                password: password,
                img: " ",
                createdAt: Date(),
            })
            resetFields()

        } else {
            setError("Please input valid data")
            console.log("validation error")
        }
    }

    const fetchUser = () => {

        console.log("Fetching all Users");

        var withdrawRef = query(ref(db, `/Users/`), orderByKey());
        onValue(withdrawRef, snapshot => {
            const data = snapshot.val();
            if (data !== null) {
                setUsers([])
                Object.values(data).map(user => {
                    setUsers(oldArray => [...oldArray, user])
                })
            }
        });
    }

    const handleUserUpdate = (user) => {
        remove(ref(db, `/Users/${user.id}`));
    }

    const handledeleteUser = (user) => {
        remove(ref(db, `/Users/${user.id}`));
    }

    useEffect(() => {

        fetchUser();

    }, []);


    return (
        <UserCSS>


            <div className='column'>
                <div className='flex-half' >

                    <table className="customers">
                        <thead>
                            <tr>
                                <th>Sr.</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <div className='column'>
                                            <button className='del-btn' onClick={() => {(handleUserUpdate(user))}}>Edit</button>
                                            <button className='del-btn' onClick={() => {handledeleteUser(user)}}>Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>


                    </table>

                    <div>

                    </div>


                </div>

                <div className="flex-half">

                    <div className='form'>
                        <div className="row">
                            <span>Name: </span>
                            <input type="text" value={name} onChange={handleOnChangeName} />
                        </div>

                        <div className="row">
                            <span>Email: </span>
                            <input className='title' type="text" value={email} onChange={handleOnChangeEmail} />
                        </div>

                        <div className="row">
                            <span>Password: </span>
                            <input className='title' type="password" value={password} onChange={handleOnChangePassword} />
                        </div>

                        <div className='flex-right'>
                            <button className="glow-on-hover" onClick={(e) => { handleAddUser(e) }} >Add New User</button>
                        </div>
                    </div>


                </div>

            </div>


        </UserCSS>
    )
}

export default Users