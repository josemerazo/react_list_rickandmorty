import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';

function DeckRickAndMorty() {
    const [data, setData] = useState([]);
    useEffect(() => {

        fetchData();
    }, []);
    const fetchData = () => {
        axios.get("https://rickandmortyapi.com/api/character")
            .then(response => {
                setData(response.data.results);
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }
    return (
        <div>
            <h1>DeckRickAndMorty</h1>
            <ul>

                {
                    data.map((item, index) => (
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.image} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                    {item.species}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))
                }
            </ul>
        </div>
    );
}
export default DeckRickAndMorty;