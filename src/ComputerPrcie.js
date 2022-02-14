import {
  Create,
  Datagrid,
  Edit,
  List,
  SimpleForm,
  TextField,
  TextInput,
} from 'react-admin'

export const ComputerPriceList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="price" />
      <TextField source="speces" />
    </Datagrid>
  </List>
)

export const ComputerPriceEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="price" />
      <TextInput source="speces" />
    </SimpleForm>
  </Edit>
)

export const ComputerPriceCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="price" />
      <TextInput source="speces" />
    </SimpleForm>
  </Create>
)
