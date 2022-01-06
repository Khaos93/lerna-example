import './Bracket.css';
import React, { useState } from 'react';
function Bracket(props) {

    const {
        data
    } = props

    return (

        <div className='container'>
            <div className='tournament-bracket tournament-bracket--rounded'>{
                data.groups.map(group =>
                    <div className={`tournament-bracket__round tournament-bracket__round--quarterfinals--${group.name}`} >
                        <h3 className='tournament-bracket__round-title'>Quarter</h3>
                        <ul className='tournament-bracket__list'>{
                            group.rounds.fixtures.map(fixture =>
                                fixture.competitors.map(competitor =>
                                    <li className='tournament-bracket__item'>
                                        <div className='tournament-bracket__match'>
                                            {competitor.name}
                                        </div>
                                    </li>
                                )
                            )
                        }</ul>


                    </div>
                )
            }</div>
        </div>





    )
}

export default Bracket;