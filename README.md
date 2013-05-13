Brunch Foundation
=============

Simple javascript backbone.js skeleton built on top of [brunch](http://brunch.io) that includes essentials and provides some guidance at creating maintainable apps.

### Included tech

* Javascript - because you should know JS before learning anything that compiles
into it, and by using brunch you can incorporate `CoffeeScript`, `LiveScript` or anything, really, when you feel comfortable.
* [Backbone](http://backbonejs.org/) - why we're all here
* [Lo-Dash](http://lodash.com) - An alternative to Underscore.js, delivering consistency, customization, performance, and extra features.
* [jQuery](http://jquery.com/) - For that low level dom manipulation
* [Handlebars](http://handlebarsjs.com) - sensible default thats faster than underscore, wildly used and understood
* [Sass](http://sass-lang.com/) with [compass](http://compass-style.org/) - dynamic stylesheet language, comparable with LESS and Stylus
* [LayoutManager](https://github.com/tbranyen/backbone.layoutmanager) - because you need something to help backbone wrangle those views
* [Foundation](https://github.com/zurb/foundation) cuz we don't know how do write our own css.

## Install

- Install [node.js](http://nodejs.org)
- Install Brunch: `sudo npm install -g brunch`
- Install SASS and Compass: `gem install compass`
- Install Foundation CSS: `gem install zurb-foundation`
- Run `brunch new <project name> -s github://talentriot/brunch-foundation` to download the skeleton into your project folder.
- `$ cd <project name>`
- Run `npm install` to install any node dependencies listed in `package.json`.

## Compiling

- To build your project run `brunch build`.
- To continually watch your project folder changes and auto-compile, use `brunch watch`.
- If you want to start a simple server, run `brunch watch --server`
- If you want to build a minified version (for production release), run `brunch build -o`

See more info on the [official brunch docs](http://brunch.readthedocs.org/en/latest/)

## Unit Testing

The [Mocha](http://visionmedia.github.com/mocha/) test-suite is included by default.  Files located in `tests` that end with `_test.js` (or .coffee) are automatically packaged.

To run tests in the browser, navigate to `public/test/index.html`.  Test-related code is automatically recompiled during `brunch build` and `brunch watch`, and will automatically refresh the test page.
To set up and get started on using a specific testing interface, take a look at the following guides:

* [TDD](https://gist.github.com/4361378)
* [BDD](https://gist.github.com/4361398)
* [QUnit](https://gist.github.com/4361413)

## License
Brunch Foundation is distributed under the MIT license. All 3rd party libraries and components are distributed under their respective license terms.

```
Copyright (C) 2013 TalentRiot

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit
persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
