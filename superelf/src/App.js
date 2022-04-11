import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { PlayerList } from './components/PlayerList'
import { PositionList } from "./components/PositionList";
import { ClubList } from "./components/ClubList";

const dataProvider = jsonServerProvider('http://localhost:8080/api');
const App = () => (
      <Admin dataProvider={dataProvider}>
          <Resource name="clubs" list={ClubList} />
          <Resource name="players" list={PlayerList} />
          <Resource name="positions" list={PositionList} />
      </Admin>
  );

export default App;
