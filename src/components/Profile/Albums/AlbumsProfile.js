import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import classes from './AlbumsProfile.module.css';
import * as actions from '../../../store/actions';
import AddPhotoForm from "../../Forms/AddPhotoForm";
import Spinner from '../../UI/Spinner/Spinner';

const AlbumsProfile = props => {

    const {onFetchAlbums} = props;

    useEffect(() => {
        onFetchAlbums();
    }, [onFetchAlbums]);

    let albums = <Spinner/>

    if (!props.loading) {
        albums = props.articles.map(alb => (
            <li>
                {alb.albums}
            </li>
            )
        )
    }

    return (
        <div className={classes.Albums}>
            {/*<h3>MOJE ALBUMY</h3><a href="/test">(dodaj)</a>*/}
            <AddPhotoForm/>
            <div>
                <ul>
                    {albums}
                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        albums: state.albums.albums,
        loading: state.albums.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchAlbums: () => dispatch(actions.fetchAlbums())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumsProfile);
