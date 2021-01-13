import React from 'react';

const ActiveHouse = ({ eboard, positions }) => {

    const eboardContent = <div className="bros">
        {Object.entries(eboard).map(([pos, bro], i) => (
            <div className="entry">
                <div className='title pos'>{pos}</div>
                <img src={bro == 'x119bolin' ? require(`../../assets/${bro}.jpg`) : require(`../../assets/sample_prof.jpg`)} alt="CST"/>
                <div className='title bro'>{positions[bro].name}</div>
                <div className='info'>{positions[bro].chair.map((chair, i) => i > 0 ? `, ${chair}` : chair)}</div>
                <div className='info'>{positions[bro].year}</div>
                <div className='info'>{positions[bro].crossed}</div>
            </div>
        ))}
    </div>

    const cabinet = <div className="bros">
        {Object.entries(positions).map(([bro, {name, chair, year, crossed}], i) => (
            !(Object.values(eboard).includes(bro)) &&
            <div className="entry">
                <img src={require('../../assets/sample_prof.jpg')} alt="CST"/>
                <div className='title bro'>{name}</div>
                <div className='info'>{chair.map((chair, i) => i > 0 ? `, ${chair}` : chair)}</div>
                <div className='info'>{year}</div>
                <div className='info'>{crossed}</div>
            </div>
        ))}
    </div>
    return (
        <div className='ActiveHouse'>
            <h2>Executive Board</h2>
            {eboardContent}
            <h2>Active House</h2>
            {cabinet}
        </div>
    );
}

export default ActiveHouse;
