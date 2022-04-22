import React from 'react';
import { List, Datagrid, TextField, EditButton, Create, Edit, TextInput, SimpleForm } from 'react-admin';

export const CompetitionList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="competitionName" />
            <EditButton />
        </Datagrid>
    </List>
);

export const CompetitionEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="competitionName" />
        </SimpleForm>
    </Edit>
);

export const CompetitionCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="competitionName" />
        </SimpleForm>
    </Create>
);