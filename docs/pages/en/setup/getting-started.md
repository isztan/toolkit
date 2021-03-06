# Getting Started #

Before you dive into Toolkit, there are some important concepts and conventions that will be necessary to learn.
Let's quickly setup a new project with Toolkit and discuss these concepts along the way.

### Downloading Toolkit ###

Of course the first thing we need to do is acquire the Toolkit files. Let's begin by cloning the repository.

```bash
[sudo] git clone git@github.com:titon/toolkit.git
```

Besides git, there are multiple ways to download Toolkit.
[Jump to the installation documentation for more approaches.](installing.html)

### Project Structure ###

After Toolkit has been downloaded, let's open the folder and review the file structure within.

```
toolkit/
├── css/
├── demo/
├── dist/
├── docs/
├── js/
├── lib/
└── scss/
```

The Toolkit repository is grouped logically into folders depending on the type of file or its purpose.

* The `css` and `demo` folders contain files that are used for testing components locally (requires PHP).
* The `dist` folder contains files for use in production environments.
* The `docs` folder contains documentation for using Toolkit (you're reading it).
* The `js`, `scss` and `lib` folders contain source files for Sass and JavaScript which can be used for direct integration into projects.

#### Distribution Files ####

Files found in the `dist` folder are compressed, minified, and compiled source files ready for production.
These files are also available through [Bower](http://bower.io).

```
toolkit/dist/
├── jquery/
|   ├── toolkit.min.js
|   └── toolkit-*.min.js
├── mootools/
|   ├── toolkit.min.js
|   └── toolkit-*.min.js
├── toolkit.min.css
├── toolkit-jquery.min.js
└── toolkit-mootools.min.js
```

The folder structure is a bit confusing, but trust us, it makes sense.

The files found in the root of the `dist` folder contain the compiled source code for *all* components.
Simply include the files in your application to gain all of Toolkit's functionality.

The files found in the `jquery` and `mootools` folders contain source code for individual components.
This allows for the inclusion of components on a case by case basis.
When using this approach, the `{vendor}/toolkit.min.js` file is required before any component.

<div class="notice is-info">
    There are no individual CSS files for components, only JavaScript.
    The <code>toolkit.min.css</code> will still need to be included.
</div>

#### Source Files ####

Source files are found in the `js`, `scss`, and `lib` folders.
This is where all development and engineering is focused.
These files will later be processed for distribution.

```
toolkit/
├── js/
|   └── jquery|mootools/
|       ├── components/
|       ├── Component.js
|       └── Toolkit.js
├── lib/
|   └── titon-toolkit.rb
└── scss/
    ├── toolkit/
    |   ├── components/
    |   ├── effects/
    |   ├── layout/
    |   ├── mixins/
    |   ├── themes/
    |   └── _common.scss
    ├── normalize.scss
    └── toolkit.scss
```

Files are organized into folders that represent specific functionality.

* The `components` folder contains source files for individual components.
* The `effects` folder contains effects that improve components with new aesthetics.
* The `layout` folder contains styles that alter built-in HTML tags, like forms and text.
* The `mixins` folder contains mixins and functions for use in Sass files.
* The `themes` folder contains custom themes built around Toolkit components.

<div class="notice is-info">
    The <code>lib</code> folder is required by Compass extensions and serves no other purpose.
</div>

### Boilerplate Template ###

Now that we have our assets, let's create the HTML template.
We'll go ahead and use a lightweight version of the [HTML5 Boilerplate](http://html5boilerplate.com/) as a foundation.

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Titon Toolkit</title>
        <link href="css/toolkit.min.css" rel="stylesheet">
        <link href="css/style.min.css" rel="stylesheet">
        <script src="js/jquery.min.js"></script>
        <script src="js/toolkit-jquery.min.js"></script>
    </head>
    <body>
    </body>
</html>
```

You'll notice that we placed `toolkit.min.css` before `style.min.css`. This allows for helper classes and component styles to be inherited first.
Placing project specific styles after Toolkit allows customization and themeing of components.

Let's test our JavaScript components by placing the following code within the `<body>` tags.

```html
<button type="button" class="button" data-tooltip="This messages displays on hover.">Click Me!</button>

<script>
    $(function() {
        $('[data-tooltip]').tooltip();
    });
</script>
```

Now comes the fun part, testing the code. Open up the previously created HTML file and hover your mouse over the button in the page.
If all goes well, you shall see a contextual tooltip appear relative to the button. Pretty awesome right?

<div class="callout is-warning">
    If no styles have been defined yet, the button and tooltip component will use default styles, which look rather boring.
</div>

Getting started with Toolkit was extremely easy, and we can guarantee working in and integrating it is just as easy.