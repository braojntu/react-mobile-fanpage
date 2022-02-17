import {useState} from "react";
import "./styles.css";

export default function Fanpage() {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [brands, setBrands] = useState([
    {
      brand: "Samsung",
      model: "Galaxy SIII",
    },
    {
      brand: "Apple",
      model: "5s",
    },
    {
      brand: "Google",
      model: "Pixel 5",
    },
    {
      brand: "Sony",
      model: "X5",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setBrands([{brand: brand, model: model}, ...brands]);
    setBrand("");
    setModel("");
  };

//   console.log(brands);
//   console.log(brand);
//   console.log(model);

  return (
    <>
      <div className="cont-add-mobile">
        <input
          onChange={(e) => setModel(e.target.value)}
          placeholder="Phone Model Name"
        />
        <input
          onChange={(e) => setBrand(e.target.value)}
          placeholder="Company Name"
        />
        <button onClick={handleSubmit} type="submit">
          Add Mobile
        </button>
      </div>
      <div className="mobile-card">
        {brands.map((data, index) => (
            <div>
              <LikeCounter key={index} brand={data.brand} model={data.model} />
            </div>
          ))}
      </div>
    </>
  );
}

function LikeCounter(props) {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  return (
    <div className="mobile-card-items">
      <h2 className="model">{props.model}</h2>
      <h4 className="brand"> By {props.brand}</h4>
      <button onClick={() => setLike(like + 1)}>👍 {like}</button>
      <button onClick={() => setDislike(dislike + 1)}>👎 {dislike}</button>
    </div>
  );
}
