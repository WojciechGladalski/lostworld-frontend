import React from 'react';
import Aux from '../../hoc/AuxComponent/AuxComponent';

const profile = props => (
    <Aux>
        <nav>
            <div>Zdjęcie profilowe</div>
            <div>Motto</div>
            <div>Informacje o użytkowniku</div>
            <div>Box ze znajomymi</div>
        </nav>
        <div>Menu profilowe</div>
        <div>Moje plany podróży</div>
        <div>Odwiedzone kraje (mapa)</div>
        <div>Moje albumy</div>
        <div>Moje artykuły</div>
        <div>Obserwowani użytkownicy</div>
    </Aux>

);

export default profile;