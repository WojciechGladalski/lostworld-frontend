import React, {useEffect} from 'react';
import {connect} from "react-redux";
import classes from "./TravelPlansProfile.module.css";
import * as actions from '../../../store/actions';
import Button from 'react-bootstrap/Button'
import Spinner from '../../UI/Spinner/Spinner';

const TravelPlans = props => {
    const {onFetchTravelPlans} = props;

    useEffect(() => {
        onFetchTravelPlans()
    }, [onFetchTravelPlans]);

    let plans = <Spinner/>

    if (!props.loading) {
        plans = props.travelPlans.map(plans => (
            <li>
                {/*DO USTALENIA Z WOJTKIEM JAK SIĘ NAZYWA TO POLE W JSONIE*/}
                {plans.travelPlans}
            </li>
        ))
    }
    return (
        <div className={classes.TravelPlans}>
            <h3>MOJE PLANY PODRÓŻY</h3>
            <Button style={{marginBottom: '5px'}} type="button" variant="secondary">Dodaj</Button>
            <div>
                <ul>
                    {plans}
                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        travelPlans: state.travelPlans.travelPlans,
        loading: state.travelPlans.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchTravelPlans: () => dispatch(actions.fetchTravelPlans())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TravelPlans);
