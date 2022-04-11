import React from 'react';
import { List, Datagrid, TextField, ReferenceField } from 'react-admin';

export const PlayerList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="position.positionName" label="Position" />
            <TextField source="club.clubName" label="Club" />
        </Datagrid>
    </List>
);
