import React from 'react';
import ReactDOM from 'react-dom';
import './pin.css';


const Pin = () =>{
    return (
        <section id="pin-number">
            <form action="" method="post">
                <input type="text" name="pin-number" id="pin" placeholder="Pin Number"/>
                <button type="submit">Submit Pin</button>
            </form>
        </section>
    );
}

export default Pin;