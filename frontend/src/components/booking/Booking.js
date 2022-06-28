import './Booking.css'
import Navbar from '../navbar/Navbar';
import Searchroom from '../searchroom/Searchroom.js';
import SearchResult from '../searchresult/SearchResult';
import Footer from "../Footer/Footer"
import NewCart from "../NewCart/Cart"
import {useState} from "react";

const Booking = () =>
{

    return(
        <div>
            <Navbar/>
            <Searchroom/>
            <SearchResult/>
            <Footer/>
        </div>
    );

}

export default Booking;