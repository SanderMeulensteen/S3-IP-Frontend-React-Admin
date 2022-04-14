import React from 'react';
import { List, Datagrid, TextField, EditButton, TextInput, ReferenceInput, SelectInput, SimpleForm, useRecordContext, Edit, Create } from 'react-admin';

export const PlayerList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="position.positionName" label="Position" />
            <TextField source="club.clubName" label="Club" />
            <EditButton />
        </Datagrid>
    </List>
);

export const PlayerCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <ReferenceInput source="position.id" reference="positions" label="Position" >
                <SelectInput optionText="positionName" />
            </ReferenceInput>
            <ReferenceInput source="club.id" reference="clubs" label="Club">
                <SelectInput optionText="clubName" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);

const PlayerName = () => {
    const record = useRecordContext();
    return <span> Editing: {record ? `${record.name}` : '' }</span>;
};

export const PlayerEdit = props => (
    <Edit {...props} title={ <PlayerName /> } >
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <ReferenceInput source="position.id" reference="positions" label="Position" >
                <SelectInput optionText="positionName" />
            </ReferenceInput>
            <ReferenceInput source="club.id" reference="clubs" label="Club">
                <SelectInput optionText="clubName" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);