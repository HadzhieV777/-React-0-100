### Forms

HTML form elements work a bit differently from other DOM elements in React, because form elements naturally keep some internal state.

### Controlled Components
```
In HTML, form elements such as <input>, <textarea>, and <select> typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with setState(). 
  We can combine the two by making the React state be the ```single source of truth```. Then the React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a controlled component.```
  
### The textarea Tag

In HTML, a <textarea> element defines its text by its children.

In React, a <textarea> uses a value attribute instead. This way, a form using a <textarea> can be written very similarly to a form that uses a single-line input.

### The select Tag

In HTML, <select> creates a drop-down list. React, instead of using this selected attribute, uses a value attribute on the root select tag. This is more convenient in a controlled component because you only need to update it in one place.

### Note

You can pass an array into the value attribute, allowing you to select multiple options in a select tag.
