import React from 'react';
import classes from "./TravelPlansProfile.module.css";

const TravelPlans = () => (
    <div className={classes.TravelPlans}>
        <h3>MOJE PLANY PODRÓŻY</h3><a href="/addTravelPlan">(dodaj)</a>
        <div>
            <ul>
                <li>Plan 1</li>
                <li>Plan 2</li>
                <li>Plan 3</li>
            </ul>
        </div>
    </div>
)

export default TravelPlans;