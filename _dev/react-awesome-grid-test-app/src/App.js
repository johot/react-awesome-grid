import React, { Component } from 'react';
import './App.css';
import { Grid, Row, Column } from 'react-awesome-grid'
import { colors } from 'material-design-palette';

class App extends Component {
  render() {

    return (
      <div className="App" style={{
        fontFamily: 'Roboto', fontSize: '20px', color: 'white'
      }}>

        <Grid height="500px">
          <Row height="3*" >
            <Column width="auto" verticalContentAlignment="bottom" backgroundColor={colors.teal100} >Col auto, bottom left</Column>
            <Column>
              <Row height="1*" horizontalContentAlignment="right" backgroundColor={colors.teal200}>Row 1*, upper right</Row>
              <Row height="2*" backgroundColor={colors.teal300}>Row 2*, upper left</Row>
            </Column>
            <Column>
              <Column width="100px" backgroundColor={colors.teal400}>Col 100px</Column>
              <Column width="2*" backgroundColor={colors.teal500} horizontalContentAlignment="center" verticalContentAlignment="bottom" >Col 2*, bottom center</Column>
              <Column width="1*" backgroundColor={colors.teal600}>Col 1*</Column>
            </Column>
          </Row>
          <Row height="3*" horizontalContentAlignment="right" verticalContentAlignment="bottom" backgroundColor={colors.teal700}>Row 3* bottom right</Row>
          <Row height="5*" horizontalContentAlignment="center" verticalContentAlignment="center" backgroundColor={colors.teal800}>Row 5* centered</Row>
          <Row height="50px" horizontalContentAlignment="left" verticalContentAlignment="center" backgroundColor={colors.teal900}>Row 50px left centered</Row>
        </Grid>


      </div >
    );
  }
}

export default App;
