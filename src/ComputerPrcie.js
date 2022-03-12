import {
  Create,
  Datagrid,
  DeleteButton,
  Edit,
  EditButton,
  List,
  SimpleForm,
  TextField,
  TextInput,
} from 'react-admin'

const MyEditButton = (props) => <EditButton {...props} />
const MyDeleteButton = (props) => <DeleteButton {...props} />

export const ComputerPriceList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="price" />
      <TextField source="speces" />
      <MyEditButton />
      <MyDeleteButton />
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
