import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LocationListContainer from './containers/LocationListContainer';
import Paper from 'material-ui/Paper';
import AppBarComponent from './components/AppBarComponent';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';



const cities = [
  'Caracas,ve',
  'Santiago,cl',
  'Barcelona,es',
  'Buenos Aires,ar',
  
];


class App extends Component {

  render() {

    return (

      <MuiThemeProvider>

              


      <Grid>

          <Row>

            <Col xs={12}>
                <AppBarComponent />
            </Col>

          </Row>
        
        <Row>
              <Col xs={12} md={6}>
              <LocationListContainer cities={cities} />
              </Col>

              <Col xs={12} md={6}>

                <Paper zDepth={4}>
                <div className='detail'>

                    <ForecastExtendedContainer />
                    
                </div>
                </Paper>

                  
              </Col>
        </Row>

      </Grid>

      </MuiThemeProvider>
    );
  }
}



export default App;

 