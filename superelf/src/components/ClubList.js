import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

export const ClubList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="clubName" />
            <TextField source="competition.competitionName" />
        </Datagrid>
    </List>
);