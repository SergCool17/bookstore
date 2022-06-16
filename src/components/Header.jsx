import React from "react";
import { Button, Dropdown, Grid, Input, Menu } from "semantic-ui-react";

const Header = ({ searchQuery, setSearchQuery }) => (
  <>
    <Menu>
      <Menu.Item style={{ flexGrow: 2 }}>
        <Input
          transparent
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
          placeholder="Поиск книг, авторов"
        />

        <Button type="submit" primary>
          Поиск
        </Button>
      </Menu.Item>
    </Menu>
    <Menu widths={6}>
      <Dropdown item text="Каталог">
        <Dropdown.Menu>
          <Dropdown.Item>Фантастика</Dropdown.Item>
          <Dropdown.Item>Детективы</Dropdown.Item>
          <Dropdown.Item>Приключения</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Menu.Item link>Новинки</Menu.Item>
      <Menu.Item link>Бестселлеры</Menu.Item>
      <Menu.Item link>Акции</Menu.Item>
      <Menu.Item link>Подборки</Menu.Item>
      <Menu.Item link>Рейтинги</Menu.Item>
    </Menu>
  </>
);

export default Header;
