import './App.css';
import { Routes, Route  } from 'react-router-dom';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Counter from './components/Counter';
import Effect1 from './components/13-09/Effect1';
import Effect2 from './components/13-09/Effect2';
import Effect3 from './components/13-09/Effect3';
import Effect4 from './components/13-09/Effect4';
import Params from './components/params';
import SingleProduct from './components/singleproduct';
import Counterse from './components/counterse';
import Mapping from './components/mapping';
import Ternary from './components/13-09/Ternary';
import DynamicStyles from './components/13-09/DynamicStyles';
import ClassComponent from './components/29/ClassComponent';
import PageNotFound from './components/29/PageNotFound';
import Products from './components/Products';
import Login2 from './components/30-09/Login2';
import AddProduct from './components/13-09/AddProduct';
import ChildrenProp from './components/ChildrenProp';
import Register2 from './components/Register2';
import UseMemo from './components/UseMemo';
import Todos from './components/Todos';
import UseCallback from './components/UseCallback';
import UseReducer from './components/08-10/UseReducer';
import TestReducer from './components/08-10/TestReducer';
import CustomHookLS from './components/13-10/CustomHookLS';
import CustomHook from './components/13-10/CustomHook';
import { NewTodo } from './components/NewTodo';
import NewTodo2 from './components/NewTodo2';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/profile' element={<Profile />} />
        <Route exact path='/counter' element={<Counter />} />
        <Route exact path='/effect1' element={<Effect1 />} />
        <Route exact path='/effect2' element={<Effect2 />} />
        <Route exact path='/effect3' element={<Effect3 />} />
        <Route exact path='/effect4' element={<Effect4 />} />
        <Route exact path='/params' element={<Params />} />
        <Route exact path='/singleproduct' element={<SingleProduct />} />
        <Route exact path='/counterese' element={<Counterse />} />
        <Route exact path='/mapping' element={<Mapping names={['shifa','xyz','abc','pqr']}/>} />
        <Route exact path='/ternary' element={<Ternary />} />
        <Route exact path='/dynamicstyles' element={<DynamicStyles />} />
        <Route exact path='/PageNotFound' element={<PageNotFound />} />
        <Route exact path='/classcomponent' element={<ClassComponent />} />
        <Route exact path='/Products' element={<Products />} />
        <Route exact path='/login2' element={<Login2 />} />
        <Route exact path='/addproduct' element={<AddProduct />} />
        <Route exact path='/childrenprop' element={<ChildrenProp />} />
        <Route exact path='/register2' element={<Register2 />} />
        <Route exact path='/memo' element={<UseMemo />} />
        <Route exact path='/todo' element={<Todos/>}/>
        <Route exact path='/usecallback' element={<UseCallback/>}/>
        
        <Route exact path='/use-reducer' element={<UseReducer />} />
        <Route exact path='/test-reducer' element={<TestReducer />} />
        {/* <Route exact path='/globalcontext' element={<GlobalContext />} /> */}
        <Route exact path='/custom-hook' element={<CustomHook />} />
        <Route exact path='/nt' element={<NewTodo />} />

        <Route exact path='/custom-hook-ls' element={<CustomHookLS />} />
        <Route exact path='/nt2' element={<NewTodo2/>}/>



      
      </Routes>
    </div>
  );
}

export default App;
