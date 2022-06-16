import React from "react";
import { Input, Menu } from "semantic-ui-react";

const Filter = ({ setFilter, filterBy }) => (
  <>
    <Menu secondary>
      <Menu.Item
        active={filterBy === "all"}
        onClick={setFilter.bind(this, "all")}
      >
        Сначала популярные
      </Menu.Item>
      <Menu.Item
        active={filterBy === "price_high"}
        onClick={setFilter.bind(this, "price_high")}
      >
        Сначала дорогие
      </Menu.Item>
      <Menu.Item
        active={filterBy === "price_low"}
        onClick={setFilter.bind(this, "price_low")}
      >
        Сначала дешевые
      </Menu.Item>
      <Menu.Item
        active={filterBy === "author"}
        onClick={setFilter.bind(this, "author")}
      >
        По автору
      </Menu.Item>
    </Menu>
  </>
);

export default Filter;
