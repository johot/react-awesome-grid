import * as React from "react";
import "./App.css";
import { Grid, Column, Row } from "./library/index";
import * as colors from "./colors";
const ReactMarkdown = require("react-markdown");

//https://material.io/guidelines/style/color.html#color-color-palette

class App extends React.Component {
  render() {
    return (
      <div className="markdown-body" style={{ margin: 30 }}>
        <h1>React Awesome Grid - Test Bench</h1>
        <h2>Even distribution</h2>
        <h3>Three rows height: 1*, 1*, 1* (33% each)</h3>
        <Grid style={{ width: "500px", height: "400px" }}>
          <Row style={{ backgroundColor: colors.teal100 }} height="1*">
            Row #1
          </Row>
          <Row style={{ backgroundColor: colors.teal200 }} height="1*">
            Row #2
          </Row>
          <Row style={{ backgroundColor: colors.teal300 }} height="1*">
            Row #3
          </Row>
        </Grid>
        <Code
          markdown={`
\`\`\`
<Grid>
  <Row height="1*">Row #1</Row>
  <Row height="1*">Row #2</Row>
  <Row height="1*">Row #3</Row>
</Grid>
\`\`\`
`}
        />
        <h3>Two columns width: 1*, 1* (50% each)</h3>
        <Grid style={{ width: "500px", height: "400px" }}>
          <Column style={{ backgroundColor: colors.pink100 }}>Col #1</Column>
          <Column style={{ backgroundColor: colors.pink200 }}>Col #2</Column>
        </Grid>
        <Code
          markdown={`
\`\`\`
<Grid>
  <Column>Col #1</Column>
  <Column>Col #2</Column>
</Grid>
\`\`\`
`}
        />
        <h2>Variable height</h2>
        <h3>Three rows height: 1*, 2*, auto, 100px</h3>
        <Grid style={{ width: "500px", height: "400px" }}>
          <Row height="1*" style={{ backgroundColor: colors.purple100 }}>
            A row
          </Row>
          <Row height="2*" style={{ backgroundColor: colors.purple200 }}>
            A row twice as high as the first
          </Row>
          <Row height="auto" style={{ backgroundColor: colors.purple300 }}>
            Auto sizing height
            <br />
            to this row
          </Row>
          <Row height="100px" style={{ backgroundColor: colors.purple400 }}>
            100 pixel high row
          </Row>
        </Grid>
        <Code
          markdown={`
\`\`\`
<Grid>
  <Row height="1*">A row</Row>
  <Row height="2*">A row twice as high as the first</Row>
  <Row height="auto">
    Auto sizing height<br />to this row
  </Row>
  <Row height="100px">100 pixel high row</Row>
</Grid>
\`\`\`
`}
        />
        <h2>Variable width</h2>
        <h3>Three columns width: 2*, 3*, auto, 50px</h3>
        <Grid style={{ width: "500px", height: "400px" }}>
          <Column width="2*" style={{ backgroundColor: colors.blue100 }}>
            A column
          </Column>
          <Column width="3*" style={{ backgroundColor: colors.blue200 }}>
            A column 1.5 times wider than the first
          </Column>
          <Column width="auto" style={{ backgroundColor: colors.blue300 }}>
            Auto sizing width
            <br /> to this column
          </Column>
          <Column width="50px" style={{ backgroundColor: colors.blue400 }}>
            50 pixel wide column
          </Column>
        </Grid>
        <Code
          markdown={`
\`\`\`
<Grid>
  <Column width="2*">A column</Column>
  <Column width="3*">A column 1.5 times wider than the first</Column>
  <Column width="auto">
    Auto sizing width<br />to this column
  </Column>
  <Column width="50px">50 pixel wide column</Column>
</Grid>
\`\`\`
`}
        />
        <h2>Combining rows and columns</h2>
        <h3>Rows with inner columns</h3>
        <Grid style={{ width: "500px", height: "400px" }}>
          <Row style={{ backgroundColor: colors.orange100 }} height="1*">
            Row
          </Row>
          <Row height="1*">
            <Column style={{ backgroundColor: colors.orange200 }} width="1*">
              Inner column #1
            </Column>
            <Column style={{ backgroundColor: colors.orange300 }} width="1*">
              Inner column #2
            </Column>
          </Row>
        </Grid>
        <Code
          markdown={`
\`\`\`
<Grid>
  <Row height="1*">Row</Row>
  <Row height="1*">
    <Column width="1*">Inner column #1</Column>
    <Column width="1*">Inner column #2</Column>
  </Row>
</Grid>
\`\`\`
`}
        />
        <h3>Columns with inner rows</h3>
        <Grid style={{ width: "500px", height: "400px" }}>
          <Column style={{ backgroundColor: colors.lime100 }} width="1*">
            Column
          </Column>
          <Column width="1*">
            <Row height="1*" style={{ backgroundColor: colors.lime200 }}>
              Inner row #1
            </Row>
            <Row height="1*" style={{ backgroundColor: colors.lime300 }}>
              Inner row #2
            </Row>
          </Column>
        </Grid>
        <Code
          markdown={`
\`\`\`
<Grid>
  <Column width="1*">Column</Column>
  <Column width="1*">
    <Row height="1*">Inner row #1</Row>
    <Row height="1*">Inner row #2</Row>
  </Column>
</Grid>
\`\`\`
`}
        />
        <h2>Content alignment</h2>
        <h3>Horizontal content alignment</h3>
        <Grid style={{ width: "500px", height: "200px" }}>
          <Row height="1*" horizontalContentAlignment="left" style={{ backgroundColor: colors.yellow100 }}>
            Left
          </Row>
          <Row height="1*" horizontalContentAlignment="center" style={{ backgroundColor: colors.yellow200 }}>
            Center
          </Row>
          <Row height="1*" horizontalContentAlignment="right" style={{ backgroundColor: colors.yellow300 }}>
            Right
          </Row>
          <Row height="1*" horizontalContentAlignment="space-around" style={{ backgroundColor: colors.yellow400 }}>
            <span>Space around</span>
            <span>Space around</span>
            <span>Space around</span>
          </Row>
          <Row height="1*" horizontalContentAlignment="space-between" style={{ backgroundColor: colors.yellow500 }}>
            <span>Space between</span>
            <span>Space between</span>
            <span>Space between</span>
          </Row>
        </Grid>
        <Code
          markdown={`
\`\`\`
<Grid>
  <Row height="1*" horizontalContentAlignment="left">
    Left
  </Row>
  <Row height="1*" horizontalContentAlignment="center">
    Center
  </Row>
  <Row height="1*" horizontalContentAlignment="right">
    Right
  </Row>
  <Row height="1*" horizontalContentAlignment="space-around">
    <span>Space around</span>
    <span>Space around</span>
    <span>Space around</span>
  </Row>
  <Row height="1*" horizontalContentAlignment="space-between">
    <span>Space between</span>
    <span>Space between</span>
    <span>Space between</span>
  </Row>
</Grid>
\`\`\`
`}
        />
        <Code
          markdown={`
          > Note: Horizontal content alignment with \`space-around\` or \`space-between\` only works in a \`<Row />\`
`}
        />
        <h3>Vertical content alignment</h3>
        <Grid style={{ width: "500px", height: "200px" }}>
          <Column width="1*" verticalContentAlignment="top" style={{ backgroundColor: colors.red100 }}>
            Top
          </Column>
          <Column width="1*" verticalContentAlignment="center" style={{ backgroundColor: colors.red200 }}>
            Center
          </Column>
          <Column width="1*" verticalContentAlignment="bottom" style={{ backgroundColor: colors.red300 }}>
            Bottom
          </Column>
          <Column width="1*" verticalContentAlignment="space-around" style={{ backgroundColor: colors.red400 }}>
            <span>Space around</span>
            <span>Space around</span>
            <span>Space around</span>
          </Column>
          <Column width="1*" verticalContentAlignment="space-between" style={{ backgroundColor: colors.red500 }}>
            <span>Space between</span>
            <span>Space between</span>
            <span>Space between</span>
          </Column>
        </Grid>
        <Code
          markdown={`
\`\`\`
<Grid>
  <Column width="1*" verticalContentAlignment="top">
    Top
  </Column>
  <Column width="1*" verticalContentAlignment="center">
    Center
  </Column>
  <Column width="1*" verticalContentAlignment="bottom">
    Bottom
  </Column>
  <Column width="1*" verticalContentAlignment="space-around">
    <span>Space around</span>
    <span>Space around</span>
    <span>Space around</span>
  </Column>
  <Column width="1*" verticalContentAlignment="space-between">
    <span>Space between</span>
    <span>Space between</span>
    <span>Space between</span>
  </Column>
</Grid>
\`\`\`
`}
        />
        <Code
          markdown={`
          > Note: Vertical content alignment with \`space-around\` or \`space-between\` only works in a \`<Column />\`
`}
        />
      </div>
    );
  }
}

interface CodeProps {
  markdown: string;
}

const Code = (props: CodeProps) => {
  return (
    <div
      style={{
        marginTop: 10
      }}
    >
      <ReactMarkdown source={props.markdown.trim()} />
    </div>
  );
};

export default App;
