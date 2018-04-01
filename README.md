# React Awesome Grid

_Awesome grid-layout components for React, based on flexbox. Making layouts in React have never been easier._

## Installation

`npm install react-awesome-grid --save`

## Background

Flexbox is great, but the syntax is not. Was it `direction: row` or `direction: column` I should use? Did `justify-content` or `align-items` center my content vertically?

Coming from a background working with XAML (created by Microsoft and used in Xamarin, UWP and WPF), and especially the XAML Grid component, we know how easy it _could be_.

This is an attempt of making a flexbox-based grid component that is just as or even easier to use.

## Usage

React Awesome Grid contains three different components that should be used together:

* `<Grid>`
* `<Row>`
* `<Column>`

A `<Grid>` will contain `<Row>` and `<Column>` components. These can be nested together to create more advanced layouts.

### Rows and columns

#### Width and height

Rows will lay out content from top to bottom and have a `height` property. Columns will be layed out from left to right and have a `width` property. The `height` and `width` property can use three different type of units:

* Auto (`auto`) - the height/width will automatically size to the content of the row/column.
* Proportional (`*`) - fill the available space proportional to other row/columns also using the star unit. This is like working with percentages but better since we don't have to make sure the sum is 100%. Three columns using `1*`, `1*`, `2*` for example is the same as `25*`, `25*`, `50*` which in percent would be 25%, 25%, 50%. Two rows using `1*`, `1*` would give us two equally sized rows (50% each).
* Absolute - use absolute (pixel, em, rem etc) values (eg. `20`, `20px` or `20rem`).

#### Content alignment

The content inside rows and columns can also be aligned by using the `verticalContentAlignment` and `horizontalAlignment` properties. The following alignments are available:

Horizontal content alignment:

* `left`
* `center`
* `right`
* `space-around`
* `space-between`

Vertical content alignment:

* `bottom`
* `center`
* `top`
* `space-around`
* `space-between`

## Examples

### Importing components

```js
import { Grid, Column, Row } from "react-awesome-grid";
```

### Even distribution

#### Three rows height: 1*, 1*, 1\* (33% each)

<div style="display: flex; flex-direction: column; height: 400px; width: 500px;"><div style="display: flex; flex-direction: row; background-color: rgb(178, 223, 219); flex-grow: 1; flex-basis: 0px; overflow: hidden;">Row #1</div><div style="display: flex; flex-direction: row; background-color: rgb(128, 203, 196); flex-grow: 1; flex-basis: 0px; overflow: hidden;">Row #2</div><div style="display: flex; flex-direction: row; background-color: rgb(77, 182, 172); flex-grow: 1; flex-basis: 0px; overflow: hidden;">Row #3</div></div>

```jsx
<Grid>
  <Row height="1*">Row #1</Row>
  <Row height="1*">Row #2</Row>
  <Row height="1*">Row #3</Row>
</Grid>
```

#### Two columns width: 1*, 1* (50% each)

<div style="display: flex; flex-direction: row; height: 400px; width: 500px;"><div style="display: flex; flex-direction: column; background-color: rgb(248, 187, 208); flex-grow: 1; flex-basis: 0px; overflow: hidden;">Col #1</div><div style="display: flex; flex-direction: column; background-color: rgb(244, 143, 177); flex-grow: 1; flex-basis: 0px; overflow: hidden;">Col #2</div></div>

```jsx
<Grid>
  <Column>Col #1</Column>
  <Column>Col #2</Column>
</Grid>
```

### Variable height

#### Three rows height: 1*, 2*, auto, 100px

<div style="display: flex; flex-direction: column; height: 400px; width: 500px;"><div style="display: flex; flex-direction: row; background-color: rgb(225, 190, 231); flex-grow: 1; flex-basis: 0px; overflow: hidden;">A row</div><div style="display: flex; flex-direction: row; background-color: rgb(206, 147, 216); flex-grow: 2; flex-basis: 0px; overflow: hidden;">A row twice as high as the first</div><div style="display: flex; flex-direction: row; background-color: rgb(186, 104, 200); flex-basis: auto; overflow: hidden;">Auto sizing height<br>to this row</div><div style="display: flex; flex-direction: row; background-color: rgb(171, 71, 188); flex-basis: 100px; overflow: hidden;">100 pixel high row</div></div>

```jsx
<Grid>
  <Row height="1*">A row</Row>
  <Row height="2*">A row twice as high as the first</Row>
  <Row height="auto">
    Auto sizing height<br />to this row
  </Row>
  <Row height="100px">100 pixel high row</Row>
</Grid>
```

### Variable width

#### Three columns width: 2*, 3*, auto, 50px

<div style="display: flex; flex-direction: row; height: 400px; width: 500px;"><div style="display: flex; flex-direction: column; background-color: rgb(187, 222, 251); flex-grow: 2; flex-basis: 0px; overflow: hidden;">A column</div><div style="display: flex; flex-direction: column; background-color: rgb(144, 202, 249); flex-grow: 3; flex-basis: 0px; overflow: hidden;">A column 1.5 times wider than the first</div><div style="display: flex; flex-direction: column; background-color: rgb(100, 181, 246); flex-basis: auto; overflow: hidden;">Auto sizing width<br> to this column</div><div style="display: flex; flex-direction: column; background-color: rgb(66, 165, 245); flex-basis: 50px; overflow: hidden;">50 pixel wide column</div></div>

```jsx
<Grid>
  <Column width="2*">A column</Column>
  <Column width="3*">A column 1.5 times wider than the first</Column>
  <Column width="auto">
    Auto sizing width<br />to this column
  </Column>
  <Column width="50px">50 pixel wide column</Column>
</Grid>
```

### Combining rows and columns

#### Rows with inner columns

<div style="display: flex; flex-direction: column; height: 400px; width: 500px;"><div style="display: flex; flex-direction: row; background-color: rgb(255, 224, 178); flex-grow: 1; flex-basis: 0px; overflow: hidden;">Row</div><div style="display: flex; flex-direction: row; flex-grow: 1; flex-basis: 0px; overflow: hidden;"><div style="display: flex; flex-direction: column; background-color: rgb(255, 204, 128); flex-grow: 1; flex-basis: 0px; overflow: hidden;">Inner column #1</div><div style="display: flex; flex-direction: column; background-color: rgb(255, 183, 77); flex-grow: 1; flex-basis: 0px; overflow: hidden;">Inner column #2</div></div></div>

```jsx
<Grid>
  <Row height="1*">Row</Row>
  <Row height="1*">
    <Column width="1*">Inner column #1</Column>
    <Column width="1*">Inner column #2</Column>
  </Row>
</Grid>
```

#### Columns with inner rows

<div style="display: flex; flex-direction: row; height: 400px; width: 500px;"><div style="display: flex; flex-direction: column; background-color: rgb(240, 244, 195); flex-grow: 1; flex-basis: 0px; overflow: hidden;">Column</div><div style="display: flex; flex-direction: column; flex-grow: 1; flex-basis: 0px; overflow: hidden;"><div style="display: flex; flex-direction: row; background-color: rgb(230, 238, 156); flex-grow: 1; flex-basis: 0px; overflow: hidden;">Inner row #1</div><div style="display: flex; flex-direction: row; background-color: rgb(220, 231, 117); flex-grow: 1; flex-basis: 0px; overflow: hidden;">Inner row #2</div></div></div>

```jsx
<Grid>
  <Column width="1*">Column</Column>
  <Column width="1*">
    <Row height="1*">Inner row #1</Row>
    <Row height="1*">Inner row #2</Row>
  </Column>
</Grid>
```

### Content alignment

#### Horizontal content alignment

<div style="display: flex; flex-direction: column; height: 200px; width: 500px;"><div style="display: flex; flex-direction: row; background-color: rgb(255, 249, 196); flex-grow: 1; flex-basis: 0px; overflow: hidden; justify-content: flex-start;">Left</div><div style="display: flex; flex-direction: row; background-color: rgb(255, 245, 157); flex-grow: 1; flex-basis: 0px; overflow: hidden; justify-content: center;">Center</div><div style="display: flex; flex-direction: row; background-color: rgb(255, 241, 118); flex-grow: 1; flex-basis: 0px; overflow: hidden; justify-content: flex-end;">Right</div><div style="display: flex; flex-direction: row; background-color: rgb(255, 238, 88); flex-grow: 1; flex-basis: 0px; overflow: hidden; justify-content: space-around;"><span>Space around</span><span>Space around</span><span>Space around</span></div><div style="display: flex; flex-direction: row; background-color: rgb(255, 235, 59); flex-grow: 1; flex-basis: 0px; overflow: hidden; justify-content: space-between;"><span>Space between</span><span>Space between</span><span>Space between</span></div></div>

```jsx
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
```

> Note: Horizontal content alignment with `space-around` or `space-between` only works in a `<Row />`

#### Vertical content alignment

<div style="display: flex; flex-direction: row; height: 200px; width: 500px;"><div style="display: flex; flex-direction: column; background-color: rgb(255, 205, 210); flex-grow: 1; flex-basis: 0px; overflow: hidden; justify-content: flex-start;">Top</div><div style="display: flex; flex-direction: column; background-color: rgb(239, 154, 154); flex-grow: 1; flex-basis: 0px; overflow: hidden; justify-content: center;">Center</div><div style="display: flex; flex-direction: column; background-color: rgb(229, 115, 115); flex-grow: 1; flex-basis: 0px; overflow: hidden; justify-content: flex-end;">Bottom</div><div style="display: flex; flex-direction: column; background-color: rgb(239, 83, 80); flex-grow: 1; flex-basis: 0px; overflow: hidden; justify-content: space-around;"><span>Space around</span><span>Space around</span><span>Space around</span></div><div style="display: flex; flex-direction: column; background-color: rgb(244, 67, 54); flex-grow: 1; flex-basis: 0px; overflow: hidden; justify-content: space-between;"><span>Space between</span><span>Space between</span><span>Space between</span></div></div>

```jsx
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
```

> Note: Vertical content alignment with `space-around` or `space-between` only works in a `<Column />`
