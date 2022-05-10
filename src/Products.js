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
  SelectInput,
  SelectField,
  TextInput,
  NumberInput,
  NumberField,
} from "react-admin";

const MyEditButton = (props) => <EditButton {...props} />;
const MyDeleteButton = (props) => <DeleteButton {...props} />;

export const ProductList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="name" />
      <ImageField source="pictures.src" title="pictures.title" />
      <TextField source="price" />
      <NumberField source="discount" />
      <TextField source="warrenty" />
      <SelectField
        source="tag"
        choices={[
          {
            id: "Ram",
            name: "Ram",
          },
          {
            id: "SSD",
            name: "SSD",
          },
          {
            id: "Mouse",
            name: "Mouse",
          },
          {
            id: "Monitor",
            name: "Monitor",
          },
          {
            id: "MotherBoard",
            name: "MotherBorard",
          },
          {
            id: "Cabinet",
            name: "Cabinet",
          },
          {
            id: "Processor",
            name: "Processor",
          },
          {
            id: "Smps",
            name: "smps",
          },
          {
            id: "Used",
            name: "Used",
          },
        ]}
      />
      <MyEditButton />
      <MyDeleteButton />
    </Datagrid>
  </List>
);

export const ProductCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <ImageInput source="pictures" label="Related pictures" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>
      <TextInput source="price" />
      <NumberInput source="discount" />
      <TextInput source="warrenty" />
      <SelectInput
        source="tag"
        choices={[
          {
            id: "Ram",
            name: "Ram",
          },
          {
            id: "SSD",
            name: "SSD",
          },
          {
            id: "Mouse",
            name: "Mouse",
          },
          {
            id: "Monitor",
            name: "Monitor",
          },
          {
            id: "MotherBoard",
            name: "MotherBorard",
          },
          {
            id: "Cabinet",
            name: "Cabinet",
          },
          {
            id: "Processor",
            name: "Processor",
          },
          {
            id: "Smps",
            name: "smps",
          },
          {
            id: "Used",
            name: "Used",
          },
        ]}
      />
    </SimpleForm>
  </Create>
);

export const ProductEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <ImageInput source="pictures" label="Related pictures" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>
      <TextInput source="price" />
      <NumberInput source="discount" />
      <TextInput source="warrenty" />
      <SelectInput
        source="tag"
        choices={[
          {
            id: "Ram",
            name: "Ram",
          },
          {
            id: "SSD",
            name: "SSD",
          },
          {
            id: "Mouse",
            name: "Mouse",
          },
          {
            id: "Monitor",
            name: "Monitor",
          },
          {
            id: "MotherBoard",
            name: "MotherBorard",
          },
          {
            id: "Cabinet",
            name: "Cabinet",
          },
          {
            id: "Processor",
            name: "Processor",
          },
          {
            id: "Smps",
            name: "smps",
          },
          {
            id: "Used",
            name: "Used",
          },
        ]}
      />
    </SimpleForm>
  </Edit>
);
