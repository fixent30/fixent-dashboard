import {
  Create,
  Datagrid,
  List,
  SimpleForm,
  TextField,
  TextInput,
  EditButton,
  Edit,
  DeleteButton,
} from 'react-admin'

const MyEditButton = (props) => <EditButton {...props} />
const MyDeleteButton = (props) => <DeleteButton {...props} />

export const LaptopList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="name" />
      <TextField source="price" />
      <TextField source="speces" />
      <MyEditButton />
      <MyDeleteButton />
    </Datagrid>
  </List>
)

export const LaptopCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="price" />
      <TextInput source="speces" />
    </SimpleForm>
  </Create>
)

export const LaptopEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="price" />
      <TextInput source="speces" />
    </SimpleForm>
  </Edit>
)
