import React from 'react';
import { List, Datagrid, TextField, EditButton, TextInput, ReferenceInput, SelectInput, SimpleForm, useRecordContext, Edit, Create } from 'react-admin';

export const ClubList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="clubName" />
            <TextField source="competition.competitionName" label="Competition name" />
            <EditButton />
        </Datagrid>
    </List>
);

export const ClubCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="clubName" />
            <ReferenceInput source="competition.id" reference="competitions" label="Competition">
                <SelectInput optionText="competitionName" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);

const ClubName = () => {
    const record = useRecordContext();
    return <span> Editing: {record ? `${record.clubName}` : '' }</span>;
};

export const ClubEdit = props => (
    <Edit {...props} title={ <ClubName /> }>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="clubName" />
            <ReferenceInput source="competition.id" reference="competitions" label="Competition">
                <SelectInput optionText="competitionName" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);