#                                             Using React useState with an object

Data in state should be treated as immutable - the values should not be mutated directly, but instead be replaced with a new one. The corresponding set method is then called with a new object in order for the change to occur.

This may not seem immediately obvious with objects, since properties of an object can technically be updated. However, when you try to handle the change this way with React, it might not update your UI as you’d expect.

This is because re-renders in React are triggered whenever a change in state is detected. React’s virtual dom looks for a new reference and checks if it is the same as the old one. In this scenario, a re-render is not triggered because while the value of the object changes, its identity is still the same.

You have several options to properly update data stored as objects in React state. Your implementation will depend on the complexity of the component you are creating.

# Create and Pass a New Object

Both these solutions create a brand new object that is being passed to replace the current state, instead of directly mutating the existing state. Directly manipulating user.name does not work because it does not trigger a re-render.

Use the Spread Operator

You’re likely using an object because you have multiple pieces of data you want to store and use within state. In the below example, you may only want to manipulate one input at a time in a re-render. The spread operator facilitates this by unpacking existing properties of an object. Any consequent values are updated.


# Why Won’t Object.assign() Update State?

The Object.assign() method takes 2 arguments - a target and at least one source and returns the target after copying the sources’ properties. Object.assign() won’t trigger a re-render unless the target provided is a brand new object. When the target is the original object, it still has the same identity, similar to updating a property directly. At this point, the syntax gets clunkier too, so it is likely easier to read without this additional method.


# When Should an Object Be Used in State?

Following basic programming principles, break down state into “atoms” and use simpler values (primitives) when possible.

When values in a component are unrelated, it’s also helpful to separate instances of useState to visually signal your intentions. A user altering their name or age probably will not affect one another and therefore it makes more sense to be stored in 2 separate instances of useState. This helps simplify the component logic so that it is easier to read the overall logic as well. 

When you have three or more values you need to keep track of, your app can yield better runtime performance with a single object state than numerous instances useState. This approach may be better for something like a form with many inputs. When you have something like a controlled form component with many inputs that will all get saved or updated to one API, it may make visual sense to store these data in one object since they will reuse the same logic.

However, keep in mind that the runtime is still largely efficient, so if there is no problem, it may not be worth optimizing for this. When you have multiple state setters called one after the other in a single synchronous method, React will process them in one tick and run only one re-render.
