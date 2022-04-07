import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import UserCard from "./UserCard";
import axios from "axios";

const UserList = () => {
    const [user, setUser] = useState();
    const [err, setErr] = useState(null);
    useEffect(() => {
        // function fetchData() {
        //     fetch("https://jsonplaceholder.typicode.com/users")
        //         .then((res) => res.json())
        //         .then((res) => setUser(res))
        //         .catch((err) => setErr(err));
        // }
        // fetchData();
        // function fetchData() {
        //     axios
        //         .get("https://jsonplaceholder.typicode.com/users")
        //         .then((res) => setUser(res.data))
        //         .catch((err) => setErr(err));
        // }
        // fetchData();
        const fetchData = async () => {
            try {
                const { data } = await axios.get(
                    "https://jsonplaceholder.typicode.com/users"
                );
                setUser(data);
            } catch (error) {
                setErr(error);
            }
        };
        fetchData();
    }, []);

    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                margin:"6%", 
            }}
        >
            {err ? (
                <h2>error</h2>
            ) : (
                user && user.map((el, i) => <UserCard el={el} key={i} />)
            )}
        </div>
    );
};

export default UserList;
