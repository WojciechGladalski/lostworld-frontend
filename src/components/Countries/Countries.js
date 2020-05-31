import React from 'react';
import classes from 'Countries.module.css'
import Aux from '../../hoc/AuxComponent/AuxComponent'
import DropdownForCountries from "./DropdownForCountries";

const Countries = () => (
    <Aux>
        <DropdownForCountries/>

        <h1>WYBIERZ KRAJ Z LISTY LUB KLIKNIJ NA MAPIE</h1>
        <div className={classes.MainChooseContainer}>
            <div className={classes.ChooseContinent}>
                <h3>Najpierw wybierz kontynent</h3>
                <form>
                    <select>
                        <option>Azja</option>
                    {/*    I tak dalej*/}
                    </select>
                </form>
            </div>
            <div className={classes.ChooseCounty}>
                {/*WIDOCZNOŚĆ TEGO DIVA JEST UZALEXNIONA OD WYBORU JAKIEGOKOLWIEK KONTYNENTU*/}
                <h3>Teraz możesz wybrać kraj</h3>
                <form>
                    <select>
                        <option>Afganistan</option>
                    {/*    I tak dalej*/}
                    </select>
                </form>
            </div>
        </div>

        <div className={classes.MainMap}>
            MAPA SVG
        </div>
    </Aux>
)

export default Countries;