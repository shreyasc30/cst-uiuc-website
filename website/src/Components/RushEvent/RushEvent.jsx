import React from 'react';

const RushEvent = ({ title, date, time, location, desc }) => {
    return (
        <div className='RushEvent'>
            <div className="title">
                {title}
            </div>
            <div className="date-time">
                {date} || {time}
            </div>
            <div className="location">
                @{location}
            </div>
            <div className="desc">
                {desc}
            </div>
        </div>
    );
}

export default RushEvent;
