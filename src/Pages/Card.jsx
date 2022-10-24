import "./card.scss"
import Nbar from '../Components/Nav.jsx'
import { Users } from './Users.js';
import { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function Cards() {
  const [query, setQuery] = useState("");
  return (
    <>
      <Nbar />

      <form className="d-flex" action="https://www.google.com/search/" style={{ margin: "50px 25% 50px 25%", maxWidth: 400, align: "center" }} >
        <Form.Control
          type="search"
          name="q"
          id="search"
          placeholder="search..."
          className="me-2"
          aria-label="Search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button variant="outline-success">Search</Button>
      </form>
      {/* <input type="text" placeholder="Search.." className="search" onChange={(e) => setQuery(e.target.value)} /> */}
      <div className="wrapper">
        {Users.filter((user) =>
          user.title.toLowerCase().includes(query)
        ).map((user) => (
          
            <div className="card">
              <div className="card__body">
                <img src={user.img} alt="a" className="card__image" />
                <h2 className="card__title">{user.title}</h2>
                <p className="card__description">{user.description}</p>
              </div>
              <button className="card__btn">For More Info</button>
            </div>
          
        ))}
      </div>
    </>
  );
}

export default Cards;
