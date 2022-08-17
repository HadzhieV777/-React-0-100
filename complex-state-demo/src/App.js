import React from "react";
import Star from "./Star";

export default function App() {
  const [contact, setContact] = React.useState({
    firstName: "Gosho",
    lastName: "Zvqra",
    phone: "+359 878 336 222",
    email: "gocithebeast@abv.bg",
    isFavorite: true,
  });

  function toggleFavorites() {
    setContact((prevContact) => {
      return {
        ...contact,
        isFavorite: !prevContact.isFavorite,
      };
    });
  }

  return (
    <main>
      <div className="card">
        <div className="banner">
          <div className="avatar"></div>
        </div>
        <h3>
          {/* handleClick is a custom propery(eventHandler), because our Star component is not a DOM element but custom React component */}
          <Star isFiled={contact.isFavorite} handleClick={toggleFavorites} />
          {contact.firstName} {contact.lastName}
        </h3>
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
        <a href="#">{contact.phone}</a>
        <ul>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <div className="fa fa-twitter"></div>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            <div className="fa fa-linkedin"></div>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <div className="fa fa-instagram"></div>
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <div className="fa fa-facebook"></div>
          </a>
        </ul>
      </div>
    </main>
  );
}
// style="font-size:16px"

// 06: 38: 04
