import React from 'react';

export default function List() {
    const fruits = ["maçã", "laranja", "banana", "manga"];
    const filteredFruits = fruits.filter(fruit => fruit === "maçã");

    return (
        <div>
            <p>Fruits: {fruits.join(', ')}</p>
            <hr />
            <ul>

            {
                filteredFruits.length > 0 ? (
                    filteredFruits.map((fruit,index) => (
                        <li key={index}>
                        {fruit}
                        </li>
                    )
                    )
                ) : (<h1>n achei nada nao doido</h1>)
            }












                {/* {fruits.length > 0 ? (
                    filteredFruits.map((fruta, index) => (
                        <li key={index}>{fruta}</li>
                    ))
                ) : (
                    <h1>No fruits found!</h1>
                )} */}
            </ul>
        </div>
    );
}
