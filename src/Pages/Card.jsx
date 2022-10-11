import React from "react";
import ReactDOM from "react-dom";
import "./card.scss"
import Nbar from '../Components/Nav.jsx'

// import 'bootstrap/dist/css/bootstrap.min.css';


function Cards() {
  return (
    <>
      <Nbar />
      <br></br>
      <div className="wrapper">
        <Card
          img="https://media.istockphoto.com/photos/spring-tulips-picture-id531195010?k=20&m=531195010&s=612x612&w=0&h=11E4qELEgrWSMtpUPqBbj9Ejot-21lb02ifLw3Rj5Ig="
          title="Tulip"
          description="Plants that bloom in early spring. There are about 4,000 varieties of tulip."
        />

        <Card
          img="https://media.istockphoto.com/photos/orange-tree-picture-id155353449"
          title="Orange"
          description="Fear Risotto no more! This simple recipe is perfect for family dinners."
        />

        <Card
          img="https://media.istockphoto.com/photos/bouquet-of-roses-picture-id183378174?k=20&m=183378174&s=612x612&w=0&h=hm7K40jE7cDGJ7Puo6bmTMwXAijl-MdDAKCj-pDItis="
          title="Rose"
          description="Baked Cod with Vegetables. 30 minute meal!"
        />

        <Card
          img="https://media.istockphoto.com/photos/apple-groves-sunshine-at-japan-picture-id670941496?k=20&m=670941496&s=612x612&w=0&h=-UhHtjyf8XzFUOe7ccIt7qyLiG2XTu7o6d7ITBgxDlE="
          title="Apple"
          description="Baked Cod with Vegetables. 30 minute meal!"
        />

        <Card
          img="https://media.istockphoto.com/photos/closeup-organic-broccoli-cluster-growing-in-field-picture-id1403740206?k=20&m=1403740206&s=612x612&w=0&h=xq-3I2rme9FyhPrrwAxCHrWfBeLiOyc8fYml4np4dOs="
          title="Broccoli"
          description="Baked Cod with Vegetables. 30 minute meal!"
        />

        <Card
          img="https://media.istockphoto.com/photos/homegrown-fresh-harvest-of-orange-garden-carrots-picture-id1138757396?k=20&m=1138757396&s=612x612&w=0&h=euudn3vAMkTAhcXghXsbSZZndZBJCl4nxSIbQlOllOs="
          title="Carrot"
          description="Baked Cod with Vegetables. 30 minute meal!"
        />

        <Card
          img="https://media.istockphoto.com/photos/bonsai-jade-plant-in-a-clay-pot-picture-id1289371505?k=20&m=1289371505&s=612x612&w=0&h=uBT-4uyo-d13TEW4QtednIOYnhf5J2hkxn69itppZpk="
          title="Zade"
          description="Baked Cod with Vegetables. 30 minute meal!"
        />

        <Card
          img="https://media.istockphoto.com/photos/flower-show-pittsburgh-pa-picture-id1364125939?k=20&m=1364125939&s=612x612&w=0&h=XY5807t-WIC4lq1pTbghHyrp2qV0jf8to_KshscownA="
          title="Crotons"
          description="Baked Cod with Vegetables. 30 minute meal!"
        />
      </div>
    </>
  );
}

function Card(props) {
  return (
    <>

      <div className="card">
        <div className="card__body">
          <img src={props.img} class="card__image" />
          <h2 className="card__title">{props.title}</h2>
          <p className="card__description">{props.description}</p>
        </div>
        <button className="card__btn">For More Info</button>
      </div>
    </>
  );
}

ReactDOM.render(<Cards />, document.getElementById("root"));
export default Cards;

