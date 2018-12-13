
import React, { Component } from 'react';
import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux';
import * as actions from './../actions';
import { getWeatherCities } from './../reducers';
import PropTypes from 'prop-types';
import LocationList from '../components/LocationList';

class LocationListContainer extends Component {

    componentDidMount() {
        this.props.setWeather(this.props.cities);
    }
       

    handleSelectedLocation = city => {
  
          this.props.setSelectedCity(city);
      }

    render() {
        return (
            
            <LocationList cities={this.props.citiesWeather} 
               onSelectedLocation={this.handleSelectedLocation} />
               
        );
    }
}

LocationListContainer.propTypes = {

    setSelectedCity: PropTypes.func.isRequired,
    setWeather: PropTypes.func.isRequired,
    cities:  PropTypes.array.isRequired,
    citiesWeather: PropTypes.array,

};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

/*
const mapDispatchToProps = dispatch => ({

    setCity: value => dispatch(setSelectedCity(value)),
    setWeather: cities => dispatch(setWeather(cities)) 
});
*/
const mapStateToProps = state => ({citiesWeather: getWeatherCities(state)});

export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer);