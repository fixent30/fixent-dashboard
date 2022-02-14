import {
  Create,
  Datagrid,
  DeleteButton,
  Edit,
  EditButton,
  ImageField,
  ImageInput,
  List,
  ReferenceInput,
  Show,
  SimpleForm,
  SimpleShowLayout,
  TextField,
  TextInput,
} from 'react-admin'

const MyEditButton = (props) => <EditButton {...props} />
const MyDeleteButton = (props) => <DeleteButton {...props} />

export const ProductList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="name" />
      <ImageField source="img" />
      <TextField source="price" />
      <TextField source="warrenty" />
      <MyEditButton />
      <MyDeleteButton />
    </Datagrid>
  </List>
)

export const ProductCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <ImageInput source="img" />
      <TextInput source="price" />
      <TextInput source="warrenty" />
    </SimpleForm>
  </Create>
)

export const ProductEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="img" />
      <TextInput source="price" />
      <TextInput source="warrenty" />
    </SimpleForm>
  </Edit>
)
