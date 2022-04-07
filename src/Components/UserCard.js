import React from "react";
import { Button, Card } from "react-bootstrap";

const UserCard = ({ el }) => {
    return (
        <div
            style={{
                width: "18rem",
                margin: "3%",
                justifiyContent: "space-around",
            }}
        >
            <Card
                style={{
                    width: "18rem",
                    display: "flex",
                    backgroundColor: "burlywood",
                }}
            >
                {" "}
                <Card.Body>
                    <Card.Title>{el.name}</Card.Title>
                    <Card.Text>{el.username}</Card.Text>
                    <Card.Text>{el.website}</Card.Text>
                    <Button style={{backgroundColor:"brown", border:"none"}}>Click Me!!</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default UserCard;
