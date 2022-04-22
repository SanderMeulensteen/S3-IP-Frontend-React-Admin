import React from 'react';
import { List, Datagrid, TextField, EditButton, Edit, Create, TextInput, SimpleForm } from 'react-admin';

export const PositionList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="positionName" />
            <EditButton />
        </Datagrid>
    </List>
);

export const PositionEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="positionName" />
        </SimpleForm>
    </Edit>
);

export const PositionCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="positionName" />
        </SimpleForm>
    </Create>
);