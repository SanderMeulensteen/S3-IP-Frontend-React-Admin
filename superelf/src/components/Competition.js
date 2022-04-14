import React from 'react';
import { List, Datagrid, TextField, EditButton } from 'react-admin';

export const CompetitionList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="competitionName" />
            <EditButton />
        </Datagrid>
    </List>
);