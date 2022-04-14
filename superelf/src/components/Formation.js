import React from 'react';
import { List, Datagrid, TextField, NumberInput ,EditButton, TextInput, SimpleForm, useRecordContext, Edit, Create } from 'react-admin';

export const FormationList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="formationName" label="Formation" />
            <EditButton />
        </Datagrid>
    </List>
);

export const FormationCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="formationName" />
            <NumberInput source="defenders" />
            <NumberInput source="midfielders" />
            <NumberInput source="forwards" />
        </SimpleForm>
    </Create>
);

const FormationName = () => {
    const record = useRecordContext();
    return <span> Editing: {record ? `${record.formationName}` : '' }</span>;
};

export const FormationEdit = props => (
    <Edit {...props} title={ <FormationName /> }>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="formationName" />
            <NumberInput source="defenders" />
            <NumberInput source="midfielders" />
            <NumberInput source="forwards" />
        </SimpleForm>
    </Edit>
);
