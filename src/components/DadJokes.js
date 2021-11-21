import React, { useEffect, useState } from 'react'
//import axios


//get baseURL
const baseURL = ''
const API_KEY = ''

function DadJokes() {
//setup Loading

//setup data state



// add async GET function
    const getDadJokes = async () => {
  
        try {
 
            // console.log('dad joke data', data[0]);
        } catch (error) {
            throw new Error('GET Error', error)
        }
    }

    //call in useEffect
    useEffect(() => {
   
    }, [])
    
    //Check state
    setTimeout(() => {
  
    }, 300)


    return (
        <div>
            {/* render joke */}
            <h1></h1>
        </div>
    )
}

export default DadJokes
