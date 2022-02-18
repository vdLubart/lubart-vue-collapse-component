# A Vue component to collapse panels

Simple collapse component implemented.

## Installation

Current package can be installed only from the local
 Sinopia server. Before start installation make sure that server is running:

```bash
$ sinopia
```

To install the component run:

```bash
$ npm lubart-vue-collapse-component --save
```

Next, you must register the component in the app.js (or similar) file.
The most common use case is to do that globally.

```bash
//in your app.js or similar file
import Vue from 'vue';
import { CollapseComponent } from 'lubart-vue-collapse-component';

Vue.component('collapse-component', CollapseComponent);
```

Alternatively component can be registered as follows:
```bash
//in your app.js or similar file
import Vue from 'vue';
import CollapseComponent from 'lubart-vue-collapse-component';

CollapseComponent.register(Vue);
```

Component uses by default FontAwesome 5 icon, so `@fortawesome/fontawesome-free` package should be installed 
separately. Nevertheless, you can use any other icon library and specify needed icon class as a property, so
FontAwesome is not absolutely needed and can be replaced by other library or even omitted.

## Usage

Just add following code to the `.blade` (or any other view-file) to implement collapse component on the page:

```html
<collapse-component header="Your Custom Title">
    @include('forms.questionary')
</collapse-component>
``` 

Put inside the tag any content you want to collapse.

### Properties

Component has just two properties:

- `header` - specify custom text in the header
- `icon` - specify set of classes for icon on the right. The default value is `fas fa-chevron-down` from the 
FontAwesome 5 set, so it should be also installed. In general you can work with any library, icon in the component
represented by `<i class=""></i>` tag. 