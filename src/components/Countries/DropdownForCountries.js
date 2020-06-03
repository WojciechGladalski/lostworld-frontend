import React, {useState} from 'react';
import {connect} from 'react-redux';
import Dropdown from 'react-bootstrap/Dropdown'
import FormControl from 'react-bootstrap/FormControl'
import * as actions from '../../store/actions/index';
// import DropdownButton from 'react-bootstrap/DropdownButton'

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
        href=""
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
    >
        {children}
        &#x25bc;
    </a>
));

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
        const [value, setValue] = useState('');

        return (
            <div
                ref={ref}
                style={style}
                className={className}
                aria-labelledby={labeledBy}
            >
                <FormControl
                    autoFocus
                    className="mx-3 my-2 w-auto"
                    placeholder="Zacznij pisać..."
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />
                <ul className="list-unstyled">
                    {React.Children.toArray(children).filter(
                        (child) =>
                            !value || child.props.children.toLowerCase().startsWith(value),
                    )}
                </ul>
            </div>
        );
    },
);

const DropdownForCountries = (props) => {
    return (
        <Dropdown>
            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                Wybierz
            </Dropdown.Toggle>

            <Dropdown.Menu as={CustomMenu}>
                <Dropdown.Item eventKey="1">Polska</Dropdown.Item>
                <Dropdown.Item eventKey="2">Afganistan</Dropdown.Item>
                <Dropdown.Item eventKey="3">Chorwacja</Dropdown.Item>
                <Dropdown.Item eventKey="1">Szwecja</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

const mapStateToProps = state => {
    return {
        countries: state.countries.countries
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchCountries: (countries) => dispatch(actions.fetchCountries(countries))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DropdownForCountries);
