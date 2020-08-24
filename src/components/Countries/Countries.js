import React from 'react';
import classes from './Countries.module.css'
import Aux from '../../hoc/AuxComponent/AuxComponent'
import DropdownForCountries from "./DropdownForCountries";

const Countries = () => (
    <Aux>

        <div className={classes.Countries}>
            <h2>WYBIERZ KRAJ Z LISTY LUB KLIKNIJ NA MAPIE</h2>
            <div className={classes.MainChooseContainer}>
                <div className={classes.ChooseContinent}>
                    <h3>Najpierw wybierz kontynent</h3>
                    {/*<DropdownForCountries/>*/}
                    <form>
                        <select>
                            <option>wybierz...</option>
                            {/*    I tak dalej*/}
                        </select>
                    </form>
                </div>
                <div className={classes.ChooseCounty}>
                    {/*WIDOCZNOŚĆ TEGO DIVA JEST UZALEXNIONA OD WYBORU JAKIEGOKOLWIEK KONTYNENTU*/}
                    <h3>Teraz możesz wybrać kraj</h3>
                    <DropdownForCountries/>
                </div>
            </div>
        </div>

        <div className={classes.MainMap}>
            MAPA SVG
        </div>
    </Aux>
)

export default Countries;
