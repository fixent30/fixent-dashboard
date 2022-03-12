import {
  Create,
  Datagrid,
  DeleteButton,
  Edit,
  EditButton,
  ImageField,
  ImageInput,
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
      <ImageField source="pictures.src" title="pictures.title" />
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
      <ImageInput source="pictures" label="Related pictures" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Create>
)
