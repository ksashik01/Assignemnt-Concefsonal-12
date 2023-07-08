import React, { useEffect, useState } from 'react'


const Rooms = () => {

    const [rooms, setRooms] =useState([])

    useEffect(() =>{
       fetch ("./rooms.json")
       .then (res => res.json())
       .then (data => setRooms(data))
       .catch(err => console.log(err))


    },[] )

    return 
        <div>

<h1>{rooms.length}</h1>

        </div>
  
};

export default Rooms;