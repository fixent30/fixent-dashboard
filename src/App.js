import { Admin, Resource } from 'react-admin'
import {
  FirebaseDataProvider,
  FirebaseAuthProvider,
} from 'react-admin-firebase'
import {
  ComputerPriceList,
  ComputerPriceEdit,
  ComputerPriceCreate,
} from './ComputerPrcie'
import { LaptopCreate, LaptopEdit, LaptopList } from './LaptopPrices'
import {
  ProductCreate,
  ProductEdit,
  ProductList,
  ProductShow,
} from './Products'
import { config } from './utils/firebase'

const App = () => {
  const options = {}
  const dataProvider = FirebaseDataProvider(config, options)
  const authProvider = FirebaseAuthProvider(config)
  return (
    <Admin authProvider={authProvider} dataProvider={dataProvider}>
      <Resource
        name="Products"
        list={ProductList}
        // show={ProductShow}
        create={ProductCreate}
        edit={ProductEdit}
      />
      <Resource
        name="computerPrices"
        list={ComputerPriceList}
        edit={ComputerPriceEdit}
        create={ComputerPriceCreate}
      />
      <Resource
        name="laptopPrices"
        list={LaptopList}
        edit={LaptopEdit}
        create={LaptopCreate}
      />
    </Admin>
  )
}

export default App
