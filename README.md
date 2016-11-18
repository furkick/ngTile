# ngTile

Take a look at the [demo site](https://furkick.github.io/ngTile/) to see examples with detailed markup, 
script and options.

<p align="center">
    <img src="https://s14.postimg.org/j8uvd3etd/ng_Tile.png" />
</p>

# Dependancies

The following dependacies are **required** for the package to function:

- [AngularJS](http://angularjs.org) **v1.2.x**
- [Bootstrap](https://jquery.com/) **v3.x**
- [Font Awesome](http://fontawesome.io/) **v4.x (Optional)**

# Installation

### npm

The easiest way to install is via **npm**

```npm install --save ngTile```

### Manually

Download the files from `dist/`. 

Then add the sources to your code and adjust the paths as required.

```html
<script src="resources/js/ngTile.min.js"></script>
<link href="resources/css/ngTile.min.css" rel="stylesheet" />
```

# Usage

### AngularJS Setup

To import the plugin to angular simply declare the ngTile module in your Angular app.

```
angular.module("myApp", ["ngTile"])
```

### Directive Use

There are two types of tiles to use: ```<single-tile /> & <tiles />```.

#### ```<single-tile />``` Setup:

The single tile will require being set up using the following attributes and will only render a single tile:

##### Attributes

- ```icon``` use this to set the icon for the tile. Note that my examples use Font Awesome tiles but you may use another source (although another source hasn't been tested so the results may vary).
- ```stat``` use this to set the statistic to be displayed in the tile.
- ```title``` use this to set the title to be displayed in the tile.
- ```tile-type``` use this to set the type of tile to be created, tile types are described below.
- ```link``` use this to specify a href for the tile. This is optional.
- ```target``` use this to specify the link target. This is optional 

##### Markup
```html
<div class="row"> 
    <div class="col-lg-3">
        <single-tile icon="fa fa-users" stat="146" title="Users" tile-type="tile-lg-rect" link="ViewStats/2016-10-10" target="_self"/>
    </div>
</div>
```

#### ```<tile />``` Setup:

The repeated tiles will require being set up using the following attribute and object:

##### Attribute

- ```tile-params``` use this to specify the object with the tiles properties. You may call this whatever you desire.

##### Object Properties

* **data** You will **need** to use the naming convention specfied below.
    * **icon**: Set the required icon class.
    * **stat**: Provide a value for the statistic.
    * **title**: Provide a title for the statistic.
    * **link**: Provide a link for the tiles. (Optional)
    * **target**: Provide a target for the link. (Optional)
* **colSize** The repeated tiles need to be contained within a row, so a column needs to be specified.
* **tileType** Specify the type of tiles you want repeated. Tile types are described below.
* **colors** Use this property to **overwrite** the provided color pallet. For example use one color to set the repeater tiles to one color.

#### Markup & Example Object
```html
<div class="row">
    <tiles tile-params="tileSettings" />
</div>
```
```html
$scope.tileSettings = {
        data: [{
                    icon: 'fa fa-search',
                    stat: '365',
                    title: 'Days',
                    link: "https://www.google.co.uk",
                    target: "_blank"
                },
                {
                    icon: 'fa fa-twitter',
                    stat: '15987',
                    title: 'Twitter Users'
                }],
        colSize: "col-lg-6",
        tileType: "tile-md-square",
        colors: ["#663399", "#2c3e50", "#95a5a6", "#26C281"]
    };
```
### Tile Types

There are currently **9** different types to choose from of **3** different shapes: **Square**, **Rectangle** and **Circle**

* Square
    * ```tile-lg-square```, ```tile-md-square```, ```tile-sm-square```
* Rectangle
    * ```tile-lg-rect```, ```tile-md-rect```, ```tile-sm-rect```
* Circle
    * ```tile-lg-circle```, ```tile-md-circle```, ```tile-sm-circle```
    
**Note:** To see examples of all the different tile types please visit the examples page

### Default Colors

The default colors are shown below:

<p align="center">
    <img src="https://s16.postimg.org/934litz79/Colors.png" />
</p>

# Issues

Please check if the issue currently exists before submitting a new issue, otherwise open issue in github. Please can you add a link to a Plunker, JSFiddle, or equivalent.

# Contributing

You are more than welcome to contribute to the repo.

# Author

Christoper Halfpenny [@furkick](https://github.com/furkick)

# Licence

ngTile is copyright 2016 Christopher Halfpenny and contributors. It is licensed under the BSD 3 license. See the included LICENSE file for more details.
