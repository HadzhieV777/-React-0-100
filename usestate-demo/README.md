# Using the Effect Hook

 - Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.
 - The Effect Hook lets you perform side effects in function components.
 
 ** Unlike componentDidMount or componentDidUpdate, effects scheduled with useEffect don’t block the browser from updating the screen. This makes your app feel more responsive. The majority of effects don’t need to happen synchronously. In the uncommon cases where they do (such as measuring the layout), there is a separate useLayoutEffect Hook with an API identical to useEffect.

# React useState Hook
- The React useState Hook allows us to track state in a function component. 
- State generally refers to data or properties that need to be tracking in an application.


# Initialize useState

We initialize our state by calling useState in our function component.
useState accepts an initial state and returns two values:
    - The current state.
    - A function that updates the state.
