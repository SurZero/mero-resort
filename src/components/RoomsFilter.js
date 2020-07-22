import React, { useContext } from "react";
import { RoomContext } from "../RoomContext";
import Titile from "./Title";

const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

export default function RoomsFilter({ rooms }) {
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = useContext(RoomContext);

  // get unique types
  let types = getUnique(rooms, "type");

  // and all types
  types = ["all", ...types];

  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  return (
    <section className="filter-container">
      <Titile title="search rooms" />
      <form className="filter-form">
        {/*Select Type*/}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/*End of Select Type*/}

        {/* guests Type*/}
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        {/*End of guests Type*/}

        {/*room price*/}
        <div className="form-group">
          <label htmlFor="price">Room Price ${price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/*End of room price*/}

        {/*room size*/}
        <div className="form-group">
          <label htmlFor="size">Room Size</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        {/*End of room size*/}

        {/* extras*/}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              onChange={handleChange}
              checked={breakfast}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              onChange={handleChange}
              checked={pets}
            />
            <label htmlFor="pets">pets</label>
          </div>
        </div>
        {/**end of extras*/}
      </form>
    </section>
  );
}
