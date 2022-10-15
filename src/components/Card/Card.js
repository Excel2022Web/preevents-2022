import React from "react";

import "./Card.css";

import { FaRegCalendarAlt } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";
import { MdGroups } from "react-icons/md";
import { BiCoinStack } from "react-icons/bi";

function Card({
  name,
  description,
  tags,
  teamSize,
  startDate,
  deadline,
  fees,
  endDate,
  length,
  img,
}) {
  return (
    <div className="card__outer">
      <div className="event__card">
        <div className="eventcard__image">
          <img src={img} alt=" " />
        </div>
        <div className="eventcard__desc">
          <div className="eventcard__title">
            <h2 className="desc__title">{name}</h2>
            <div className="desc__badge">
              <p>Ended</p>
            </div>
          </div>
          <p className="eventcard__para">{description}</p>
          <div className="eventcard__tags">
            {tags.map((itm) => {
              return (
                <div className="event__tag">
                  <p>{itm}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="eventcard__details">
          <div className="event__detail">
            <FaRegCalendarAlt className="detail__icon" />
            <p>
              {startDate}-{endDate}
            </p>
          </div>
          <div className="event__detail">
            <IoIosTimer className="detail__icon" />
            <p>{length}</p>
          </div>
          <div className="event__detail">
            <MdGroups className="detail__icon" />
            <p>{teamSize}</p>
          </div>
          <div className="event__detail">
            <BiCoinStack className="detail__icon" />
            <p>{fees}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
