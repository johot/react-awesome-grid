import * as React from "react";
import "./App.css";
import { Grid, Column } from "./library/index";
import Row from "./library/row";

class App extends React.Component {
  render() {
    return (
      <div style={{ margin: 30 }}>
        <h2>Even distribution</h2>
        <h3>Three rows height: 1*, 1*, 1* (33% each)</h3>
        <Grid style={{ backgroundColor: "red", width: "500px", height: "600px" }}>
          <Row style={{ backgroundColor: "orange" }} />
          <Row style={{ backgroundColor: "pink" }} />
          <Row style={{ backgroundColor: "orange" }} />
        </Grid>
        <h3>Two columns width: 1*, 1* (50% each)</h3>
        <Grid style={{ backgroundColor: "red", width: "500px", height: "600px" }}>
          <Column style={{ backgroundColor: "purple" }} />
          <Column style={{ backgroundColor: "blue" }} />
        </Grid>
        <h2>Variable width/height</h2>
        <h3>Three rows height: 1*, 2*, auto, 100px</h3>
        <Grid style={{ backgroundColor: "red", width: "500px", height: "600px" }}>
          <Row height="1*" style={{ backgroundColor: "orange" }} />
          <Row height="2*" style={{ backgroundColor: "pink" }} />
          <Row height="auto" style={{ backgroundColor: "orange" }}>
            Auto sizing<br /> to this text
          </Row>
          <Row height="100px" style={{ backgroundColor: "pink" }} />
        </Grid>
        <h3>Three columns width: 2*, 3*, auto, 50px</h3>
        <Grid style={{ backgroundColor: "red", width: "500px", height: "600px" }}>
          <Column width="2*" style={{ backgroundColor: "orange" }} />
          <Column width="3*" style={{ backgroundColor: "pink" }} />
          <Column width="auto" style={{ backgroundColor: "orange" }}>
            Auto sizing<br /> to this text
          </Column>
          <Column width="50px" style={{ backgroundColor: "pink" }} />
        </Grid>
        <h2>Combining rows and columns</h2>
        <h3>Rows with inner columns</h3>
        <Grid style={{ backgroundColor: "red", width: "500px", height: "600px" }}>
          <Row style={{ backgroundColor: "orange" }} />
          <Row>
            <Column style={{ backgroundColor: "blue" }} />
            <Column style={{ backgroundColor: "purple" }} />
          </Row>
        </Grid>
        <h3>Columns with inner rows</h3>
        <Grid style={{ backgroundColor: "red", width: "500px", height: "600px" }}>
          <Column style={{ backgroundColor: "blue" }} />
          <Column style={{ backgroundColor: "blue" }}>
            <Row horizontalContentAlignment="center" style={{ backgroundColor: "orange" }} />
            <Row horizontalContentAlignment="right" style={{ backgroundColor: "yellow" }} />
          </Column>
        </Grid>
        <h2>Content alignment</h2>
        <h3>Horizontal content alignment</h3>
        <Grid style={{ backgroundColor: "red", width: "500px", height: "600px" }}>
          <Column>
            <Column horizontalContentAlignment="left" style={{ backgroundColor: "blue" }}>
              Left
            </Column>
            <Column horizontalContentAlignment="center" style={{ backgroundColor: "pink" }}>
              Center
            </Column>
            <Column horizontalContentAlignment="right" style={{ backgroundColor: "blue" }}>
              Right
            </Column>
          </Column>
          <Column>
            <Row horizontalContentAlignment="left" style={{ backgroundColor: "pink" }}>
              Left
            </Row>
            <Row horizontalContentAlignment="center" style={{ backgroundColor: "blue" }}>
              Center
            </Row>
            <Row horizontalContentAlignment="right" style={{ backgroundColor: "pink" }}>
              Right
            </Row>
          </Column>
        </Grid>
        <h3>Vertical content alignment</h3>
        <Grid style={{ backgroundColor: "red", width: "500px", height: "600px" }}>
          <Column>
            <Column verticalContentAlignment="top" style={{ backgroundColor: "blue" }}>
              Top
            </Column>
            <Column verticalContentAlignment="center" style={{ backgroundColor: "pink" }}>
              Center
            </Column>
            <Column verticalContentAlignment="bottom" style={{ backgroundColor: "blue" }}>
              Bottom
            </Column>
          </Column>
          <Column>
            <Row verticalContentAlignment="top" style={{ backgroundColor: "pink" }}>
              Top
            </Row>
            <Row verticalContentAlignment="center" style={{ backgroundColor: "blue" }}>
              Center
            </Row>
            <Row verticalContentAlignment="bottom" style={{ backgroundColor: "pink" }}>
              Bottom
            </Row>
          </Column>
        </Grid>
        <h2>Space-around and space-between support</h2>
        Explain...
        <h3>Row only: Horizontal content alignment space-around, space-between</h3>
        <Grid style={{ backgroundColor: "red", width: "500px", height: "200px" }}>
          <Row horizontalContentAlignment="space-around" style={{ backgroundColor: "pink" }}>
            <span>Space around</span>
            <span>Space around</span>
            <span>Space around</span>
          </Row>
          <Row horizontalContentAlignment="space-between" style={{ backgroundColor: "red" }}>
            <span>Space between</span>
            <span>Space between</span>
            <span>Space between</span>
          </Row>
        </Grid>
        <h3>Column only: Vertical content alignment space-around, space-between</h3>
        <Grid style={{ backgroundColor: "red", width: "500px", height: "200px" }}>
          <Column verticalContentAlignment="space-around" style={{ backgroundColor: "pink" }}>
            <span>Space around</span>
            <span>Space around</span>
            <span>Space around</span>
          </Column>
          <Column verticalContentAlignment="space-between" style={{ backgroundColor: "red" }}>
            <span>Space between</span>
            <span>Space between</span>
            <span>Space between</span>
          </Column>
        </Grid>
      </div>
    );
  }
}

export default App;
