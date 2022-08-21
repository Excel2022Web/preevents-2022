import React from 'react';

import './Card.css';


import { FaRegCalendarAlt } from 'react-icons/fa';
import { IoIosTimer } from "react-icons/io";
import { MdGroups } from 'react-icons/md';
import { BiCoinStack } from 'react-icons/bi'


function Card() {
  return (
    <div className='card__outer'>
      <div className='event__card'>
       <div className='eventcard__image'>
        <img src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg" alt=" " />
       </div>
       <div className='eventcard__desc'>
        <div className='eventcard__title'>
          <h2 className='desc__title'>Embrace</h2> 
          <div className='desc__badge'>
            <p>Ended</p>
          </div>
        </div>
        <p className='eventcard__para'>Embrace is a fundraising initiative organized by Excel 2021,in associative with CRY to ensure the welfare of the children protected under CRY and their service</p>
        <div className='eventcard__tags'>
          <div className='event__tag'>
            <p>Social initiative</p>
          </div>
          <div className='event__tag'>
            <p>Fundraiser</p>
          </div>
        </div>
       </div>
       <div className='eventcard__details'>
        <div className='event__detail'>
           <FaRegCalendarAlt className='detail__icon' />
           <p>04/12/2021-31/12/2021</p>
        </div>
        <div className='event__detail'>
           <IoIosTimer className='detail__icon' />
           <p>long</p>
        </div>
        <div className='event__detail'>
           <MdGroups className='detail__icon' />
           <p>Individual</p>
        </div>
        <div className='event__detail'>
           <BiCoinStack className='detail__icon' />
           <p>nil in prices</p>
        </div>
       </div>
    </div>
    </div>
    
  )
}

export default Card
