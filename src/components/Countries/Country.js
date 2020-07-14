import React from 'react';
import Aux from '../../hoc/AuxComponent/AuxComponent'
import CountryHeader from "./CountryHeader";

const Country = () => {

    return (
        <Aux>
            <CountryHeader/>
            <nav>Lewy panel boczny</nav>
            <div>Treść główna</div>
            <nav>Prawy panel</nav>
        </Aux>
    )
}

export default Country;
