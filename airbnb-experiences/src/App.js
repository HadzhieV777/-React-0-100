import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/Card";
import coursesData from "./data";

export default function App() {
  const courses = coursesData.map((course) => {
    return (
      <Card
        key={course._id}
        course={course}
        // Spread is also an option, but this will change props data, we don't need to declare course in our card
        // {...course}
      />
    );
  });
  return (
    <div className="App">
      <Header />
      <Hero />
      <section className="cards-list">{courses}</section>
    </div>
  );
}

// Props are arguments passed into React components.
// Props are passed to components via HTML attributes.
// * props stands for properties.
// React Props are like function arguments in JavaScript and attributes in HTML.
// To send props into a component, use the same syntax as HTML attributes
