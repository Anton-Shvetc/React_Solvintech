import React, { useEffect, useState } from "react";
import { cardsApi } from "../../api/api";
import { useDispatch } from "react-redux";
import { incrementItems, setCards, setLoader } from "../../store/reducer";
import { useAppSelector } from "../../store";
import Loader from "../../components/Loader/Loader";
import "./Home.css";
import Modal from "../Modal/Modal";

const Home = () => {
  const dispatch = useDispatch();
  const cards = useAppSelector((state) => state.cards.cards);
  const displayedItems = useAppSelector((state) => state.cards.displayedItems);
  const loader = useAppSelector((state) => state.cards.loader);

  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  const handleClose = () => {
    setSelectedItem(null);
  };

  useEffect(() => {
    dispatch(setLoader(true));
    cardsApi
      .getCards()
      .then((data) => {
        dispatch(setCards(data.data));
      })
      .catch((err) => console.log(err))
      .finally(() => dispatch(setLoader(false)));
  }, [dispatch]);

  return (
    <div className="wrapper">
      {loader && <Loader />}
      <div className="container">
        {cards.slice(0, displayedItems).map((item) => (
          <div
            className="card"
            key={item._id}
            onClick={() => handleClick(item)}
          >
            <div className="card__img">
              <img src={item.picture} alt="Аватар" />
            </div>

            <div className="card__info">
              <p>
                name: <span>{item.name}</span>{" "}
              </p>
              <p>
                email:{" "}
                <span>
                  {" "}
                  <a href={`mailto:${item.email}`}>{item.email}</a>{" "}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
      {displayedItems < cards.length && (
        <button
          className={"more-btn"}
          onClick={() => dispatch(incrementItems())}
        >
          Load more...
        </button>
      )}
      {selectedItem && <Modal handleClose={handleClose} {...selectedItem} />}
    </div>
  );
};

export default Home;
