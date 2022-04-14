import React from 'react';
import { List, Datagrid, TextField, EditButton } from 'react-admin';

export const PositionList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="positionName" />
            <EditButton />
        </Datagrid>
    </List>
);