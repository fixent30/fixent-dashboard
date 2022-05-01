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
  SelectField,
  ImageInput,
  ImageField,
} from "react-admin";

const MyEditButton = (props) => <EditButton {...props} />;
const MyDeleteButton = (props) => <DeleteButton {...props} />;

export const LaptopList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="name" />
      <TextField source="price" />
      <TextField source="speces" />
      <ImageField source="pictures.src" title="pictures.title" />
      <MyEditButton />
      <MyDeleteButton />
    </Datagrid>
  </List>
);

export const LaptopCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="price" />
      <TextInput source="speces" />
      <ImageInput source="pictures" label="Related pictures" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Create>
);

export const LaptopEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="price" />
      <TextInput source="speces" />
      <ImageInput source="pictures" label="Related pictures" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Edit>
);
