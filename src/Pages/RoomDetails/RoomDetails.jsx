import React from 'react';
import Container from '../../Component/Container';
import Header from '../../Component/Rooms/Header';

const RoomDetails = () => {
    return (
        
    <Container>
        <div className='max-screen-lg mx-auto'>
            <div className='flex flex-col gap-6'>
            <Header></Header>
            <div>RoomInfo</div>
            <div>Reservation</div>

            </div>



        </div>


    </Container>
    )
    
};

export default RoomDetails;