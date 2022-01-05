import React from 'react';
import {EBOARD, ACTIVEHOUSE} from '../../constants';
import "./_activehousemobile.scss";

const ActiveHouseMobile = () => {

    const eboardContent = <div className="bros">
        {Object.entries(EBOARD).map(([pos, bro], i) => (
            <div className="entry">
                <div className='title pos'>{pos}</div>
                {/** change that line when trying to actually add all of the active house: */}
                <img src={bro == 'x119bolin' ? require(`../../assets/${bro}.jpg`) : require(`../../assets/sample_prof.jpg`)} alt="CST"/>
                <div className='title bro'>{ACTIVEHOUSE[bro].name}</div>
                <div className='info'>{ACTIVEHOUSE[bro].chair.map((chair, i) => i > 0 ? `, ${chair}` : chair)}</div>
                <div className='info'>{ACTIVEHOUSE[bro].year}</div>
                <div className='info'>{ACTIVEHOUSE[bro].crossed}</div>
            </div>
        ))}
    </div>

    const cabinet = <div className="bros">
        {Object.entries(ACTIVEHOUSE).map(([bro, {name, chair, year, crossed}], i) => (
            !(Object.values(EBOARD).includes(bro)) &&
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
        <div className='ActiveHouseMobile'>
            <h2>Executive Board</h2>
            {eboardContent}
            <h2>Active House</h2>
            {cabinet}
        </div>
    );
}

export default ActiveHouseMobile;
