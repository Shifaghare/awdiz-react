import { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { MyContext } from "./Context/GlobalContext";
import { AuthContext } from "./Context/AuthContext";

function Homepage() {

    const { state, Logout } = useContext(AuthContext);

    const router = useNavigate();

    function routerToLogin() {
        router("/login")
    }
    
// const {state} = useContext(AuthContext)
    return (
        <div>
            <h1>Homepage for Awdiz</h1>
            <h1>User : {state?.user?.name}</h1>
            {/* <h1>Counter : {state.counter}</h1>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
            <button onClick={() => dispatch({ type: "RESET" })}>Reset</button> */}

            <button onClick={routerToLogin}>Go to Login</button>
            <button onClick={Logout} >Logout</button>
            <button onClick={() => router('/register')}>Go to Register</button><br/><br/>
            <button onClick={() => router('/profile')}>profile</button><br/><br/>
            <button onClick={() => router('/Effect1')}>Effect1</button>
            <button onClick={() => router('/Effect2')}>Effect2</button>
            <button onClick={() => router('/Effect3')}>Effect3</button>
            <button onClick={() => router('/Effect4')}>Effect4</button><br/><br/>
            <button onClick={() => router('/counter')}>Counter</button>
            <button onClick={() => router('/counterese')}>Counterse</button> <br/><br/>
            <button onClick={() => router('/params')}>params</button>
            <button onClick={() => router('/singleproduct')}>singleProduct</button><br/><br/>
            
            <button onClick={() => router('/mapping')}>Mapping</button>
            <button onClick={() => router('/ternary')}>Ternary</button><br/><br/>
            <button onClick={() => router('/dynamicstyles')}>dynamicstyles</button>
            <button onClick={() => router('/PageNotFound')}>PageNotFound</button>
            <button onClick={() => router('/Classcomponent')}>ClassComponent</button>
            <button onClick={() => router('/login2')}>Login2</button><br/>
            <button onClick={() => router('/Products')}>Products</button>
            <button onClick={() => router('/addproduct')}>Addproduct</button>
            <button onClick={() => router('/childrenprop')}>Children Prop</button><br/>
            <button onClick={()=> router('/register2')}>register2</button>
            <button onClick={()=> router('/memo')}>memo</button>
            <button onClick={()=> router('/todo')}>todo</button>
            <button onClick={()=> router('/usecallback')}>Callback</button>
            <button onClick={()=> router('/globalcontext')}>GlobalContext</button>


        </div>
    )
}

export default Homepage;