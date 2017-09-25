# React Awesome Grid
_Awesome grid and layout components for React. Based on flexbox, inspired by the syntax of the XAML Grid. Making advanced, or simple, layouts have never been easier._

## Why?
Flexbox is great, but the syntax is not. Was it `direction: row` or `direction: column` I should use? Did `justify-content` or `align-items` center my content vertically?

Coming from a background working with XAML, and especially the XAML Grid component, we know how easy it _could be_.

This is an attempt of making a flexbox grid component inspired by the syntax of the XAML Grid.

## Usage
React Awesome Grid contains four different components that should be used together:
* `<Grid>`
* `<Row>`
* `<Column>`
* `<Align>`

A `<Grid>` will contain `<Row>` and `<Column>` components. The `<Align>` component makes it really easy to align content (for example to the right, left, bottom, top, centered and so on, in any combination).

https://developer.xamarin.com/guides/xamarin-forms/user-interface/layouts/grid/

### Rows and Columns
Rows will lay out content from top to bottom and have a `height` property. Columns will be layed out from left to right and have a `height` property. The `height` and `width` property can use three different type of units:

* Auto (`auto`) - the height/width will automatically size to the content of the row/column.
* Proportional (`*`) - fill the available space proportional to other row/columns also using the star unit. This is like working with percentages but better since we don't have to make sure the sum is 100%. Three columns using `1*`, `1*`, `2*` for example is the same as `25*`, `25*`, `50*` which in percent would be 25%, 25%, 50%. Two rows using `1*`, `1*` would give us two equally sized rows (50% each).
* Absolute - use absolute (pixel, em, rem etc) values (eg. `20`, `20px` or `20rem`).

### Sample usage

#### Two columns (33% + 67%)
```html
<Grid>
    <Column width="1*">First column (33% width)</Column>
    <Column width="2*">Second column (67% width)</Column>
</Grid>
```

## More samples



```html
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
```

`Instructions coming soon`
