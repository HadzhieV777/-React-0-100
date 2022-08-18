Dynamic Styling With ReactJS

Every interaction carried out on a web page is considered as an event in javascript. React as a library helps in managing these events, the application state, and updates with much and better performance.

How do you get your styles to be dynamic?

1. Inline Styles

- This works for most cases, but if we have large number of inline styles, we could consolidate our styles into one object.

2. Styles object in our render function

- This is good, and can work well if you want to use something like React Native’s or Aphrodite’s StyleSheet.create to create your styles object.

- But what about performance? If you’re honestly worried about having to create a new styles object on each render, then the next solution is for you. But for most cases, you won’t need to do the next method.

3. If you experience performance issues, only re-render when your the size prop is the only thing that changes

- React provides a Lifecycle method called shouldComponentUpdate to let the component know whether or not it’s worth it to attempt a re-render of the component. If shouldComponentUpdate returns true (which it does by default if you don’t define the shouldComponentUpdate function), then it will re-render whenever its parent re-renders.

- We can take advantage of this lifecycle method to short-circuit the rendering process by returning false when none of the component props or state has changed.
