import { useNavigate } from 'react-router-dom';
import api from '../helpers/AxiosConfig';
import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from './Context/AuthContext';


function Login() {
    const [userData, setUserData] = useState({ email: "", password: "" });
    const router = useNavigate();
    const { Login, state } = useContext(AuthContext)
    // console.log(userData,"userdata")

    const handleChange = (event) => {
        // console.log(event.target.value, "value", event.target.name, "name")
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    const sendDataToBackend = async (event) => {
        event.preventDefault();
        // alert("Data submitted to backend..")
        if (userData.email && userData.password) {
            if (userData.password.length >= 8) {
                try {
                    const response = await api.post("/auth/login", { userData });
                    // const response = { data: { success: true } };
                    if (response.data.success) {
                        localStorage.setItem("my-token", JSON.stringify(response.data.token))
                        Login(response.data.user);
                        // console.log(response.data, "response data")
                        toast.success("Login successfully done....")
                        setUserData({ email: "", password: "" })
                        router("/addproduct")
                    } else {
                        throw new Error("Something went wrong..")
                    }
                } catch (error) {
                    toast.error(error?.response.data.message)
                    console.log(error, "error here")
                }
            } else {
                alert("Password must be 8 digit.")
            }
        } else {
            alert("Please fill the all values..")
        }
    }
    const styles = {

    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop:'50px',
        height: '100vh',
      },
      box: {
        width: '300px',
        padding: '20px',
        backgroundColor: '#ffffff',
        borderRadius: '10px',
        boxShadow: '10px 14px 18px 10px rgba(0, 0, 0, 0.1)',
      },
      heading: {
        fontFamily: 'Arial, sans-serif',
        fontSize: '1.5em',
        color: '#3498db',
        marginBottom: '20px',
      },
      form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      label: {
        marginBottom: '5px',
        color: '#555',
      },
      input: {
        width: '100%',
        padding: '10px',
        marginBottom: '15px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        boxSizing: 'border-box',
      },
      submitButton: {
        backgroundColor: '#3498db',
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
        cursor: 'pointer',
      },
    };
    

    return (
        <div style={styles.container}>
        <div style={styles.box}>
          <h1 style={styles.heading}>Login</h1>
          <form onSubmit={sendDataToBackend} style={styles.form}>
            <label style={styles.label}>Email :</label>
            <input name='email' type='email' onChange={handleChange} style={styles.input} />
            <label style={styles.label}>Password :</label>
            <input name='password' type='password' onChange={handleChange} style={styles.input} />
            <input type='submit' value="Login here" style={styles.submitButton} />
          </form>
        </div>
      </div>
    );
  };

export default Login;