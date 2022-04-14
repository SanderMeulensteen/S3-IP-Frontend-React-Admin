import * as React from "react";
import { Admin, Resource, fetchUtils, ListGuesser, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { ClubList, ClubEdit, ClubCreate } from "./components/Club";
import { CompetitionList } from "./components/Competition";
import { FormationList, FormationEdit, FormationCreate } from "./components/Formation";
import { PlayerList, PlayerEdit, PlayerCreate } from './components/Player'
import { PositionList } from "./components/Position";


// App
const fetchJson = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    // add your own headers here
    options.headers.set('Access-Control-Allow-Origin', '*');
    return fetchUtils.fetchJson(url, options);
}

const dataProvider = jsonServerProvider('http://localhost:8080/api', fetchJson);

const App = () => (
      <Admin dataProvider={dataProvider}>
          <Resource name="clubs" list={ClubList} edit={ClubEdit} create={ClubCreate} />
          <Resource name="competitions" list={CompetitionList} /* edit={EditGuesser} */ />
          <Resource name="formations" list={FormationList} edit={FormationEdit} create={FormationCreate} />
          <Resource name="players" list={PlayerList} edit={PlayerEdit} create={PlayerCreate} />
          <Resource name="positions" list={PositionList} /* edit={EditGuesser} */ />
      </Admin>
  );

export default App;