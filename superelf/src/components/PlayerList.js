import React from 'react';
import { List, Datagrid, TextField, ReferenceField } from 'react-admin';

export const PlayerList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <ReferenceField source="position.id" reference="positions">
                <TextField source="positionName" title={"position"}/>
            </ReferenceField>
            <ReferenceField source="club.id" reference="clubs">
                <TextField source="clubName" />
            </ReferenceField>
        </Datagrid>
    </List>
);
