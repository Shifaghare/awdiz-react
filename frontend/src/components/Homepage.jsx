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
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '200px',
          },
          box: {
            width: '300px',
            padding: '20px',
            backgroundColor: '#ffffff',
            marginTop:'50px',
            borderRadius: '50px',
            boxShadow: '5px 14px 18px 10px rgba(0, 0, 0, 0.1)',
          },
          heading: {
            fontFamily: 'Arial, sans-serif',
            fontSize: '1.5em',
            color: '#3498db',
            marginBottom: '20px',
          },
        
        button: {
            background: 'linear-gradient(to right, #ff6b6b, #556270)', // Gradient background
            border: '2px solid #ff6b6b', // Neon red border color
            color: 'white',
            padding: '15px 32px',
            textAlign: 'center',
            textDecoration: 'none',
            display: 'inline-block',
            fontSize: '16px',
            margin: '4px 2px',
            cursor: 'pointer',
            borderRadius: '5px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            transition: 'background-color 0.3s, border-color 0.3s', // Added border-color to the transition
            animation: 'pulse 2s infinite', // Pulsating glow effect
          },
          
        
          // CSS Keyframes for pulsating glow effect
          '@keyframes pulse': {
            '0%': {
              boxShadow: '0 0 10px rgba(255, 107, 107, 0.8), 0 0 20px rgba(255, 107, 107, 0.6)',
            },
            '50%': {
              boxShadow: '0 0 20px rgba(255, 107, 107, 0.6), 0 0 30px rgba(255, 107, 107, 0.4)',
            },
            '100%': {
              boxShadow: '0 0 10px rgba(255, 107, 107, 0.8), 0 0 20px rgba(255, 107, 107, 0.6)',
            },
          },
        };
      
      
    
    return (
        <div>
    <div style={styles.container}>
      <div style={styles.box}>
        <h1 style={styles.heading}>User: {state?.user?.name}</h1>
      <button style={styles.button} onClick={routerToLogin}>Login</button>
      <button style={styles.button} onClick={Logout}>Logout</button><br />
      <button style={styles.button} onClick={() => router('/register')}>Register Here</button><br /><br />
        
      </div>
    </div>




            

            
            
            
            {/* <h1>Homepage for Awdiz</h1> */}
            {/* <h1>Counter : {state.counter}</h1>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
            <button onClick={() => dispatch({ type: "RESET" })}>Reset</button> */}
            {/* <button onClick={() => router('/profile')}>profile</button><br/><br/>
            <button onClick={() => router('/Effect1')}>Effect1</button>
            <button onClick={() => router('/Effect2')}>Effect2</button>
            <button onClick={() => router('/Effect3')}>Effect3</button>
            <button onClick={() => router('/Effect4')}>Effect4</button><br/><br/>
            <button onClick={() => router('/counter')}>Counter</button>
            <button onClick={() => router('/counterese')}>Counterse</button> <br/><br/>
            <button onClick={() => router('/params')}>params</button>
            <button onClick={() => router('/singleproduct')}>singleProduct</button><br/><br/> */}
            
            {/* <button onClick={() => router('/mapping')}>Mapping</button> */}
            {/* <button onClick={() => router('/ternary')}>Ternary</button><br/><br/>
            <button onClick={() => router('/dynamicstyles')}>dynamicstyles</button>
            <button onClick={() => router('/PageNotFound')}>PageNotFound</button>
            <button onClick={() => router('/Classcomponent')}>ClassComponent</button>
            <button onClick={() => router('/login2')}>Login2</button><br/> */}
            {/* <button onClick={() => router('/Products')}>Products</button>
            <button onClick={() => router('/addproduct')}>Addproduct</button> */}
            {/* <button onClick={() => router('/childrenprop')}>Children Prop</button><br/>
            <button onClick={()=> router('/register2')}>register2</button>
            <button onClick={()=> router('/memo')}>memo</button>
            <button onClick={()=> router('/todo')}>todo</button>
            <button onClick={()=> router('/usecallback')}>Callback</button>
            <button onClick={()=> router('/globalcontext')}>GlobalContext</button> */}


        </div>
    )
}

export default Homepage;