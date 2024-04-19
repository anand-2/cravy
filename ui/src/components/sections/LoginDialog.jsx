import React, { useState } from "react";
import "./LoginDialog.css";
import FormGroup from "@mui/material/FormGroup";
import FormControl from '@mui/material/FormControl';
import Button from "@mui/material/Button"
import Container from "@mui/material/Container";
import { Grid, Link, OutlinedInput,InputAdornment } from "@mui/material";
import axios from "axios";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';





function LoginDialog() {

    const [errorMessage, setErrorMessage] = useState("")
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    });


    const handleChangeEmail = event => {
        setCredentials({
            ...credentials,
            email: event.target.value
        })
    }

    const handleChangePassword = event => {
        setCredentials({
            ...credentials,
            password: window.btoa(event.target.value)
        })
    }

    const resetAlerts = () => {
        setErrorMessage("");
    }

    const onLogin = event => {
        resetAlerts();
        axios.post("https://cravy.onrender.com/users/login", credentials)
            .then((res) => {
                let data = res.data;    //Axios response
                if (data.error) {
                    setErrorMessage(data.message)
                    window.localStorage.removeItem("AUTH_TOKEN")
                }
                else {
                    //store token to browser
                    window.localStorage.setItem("AUTH_TOKEN", data.token);
                    window.location = "/"

                }

            })
            .catch((err) => {
                setErrorMessage(JSON.stringify(err))
            })
    }


    let errorAlert = <div className="alert alert-danger" role="alert">
        {errorMessage}
    </div>;

    if (errorMessage === "") {
        errorAlert = undefined;
    }


    return <div>
                <Container className="Design">

                    <Grid container>
                        <Grid item>

                            <h3>Login</h3>
                            {errorAlert}
                            <FormGroup className="formDialog" controlId="formBasicEmail">

                                <OutlinedInput   startAdornment={<InputAdornment position="start"><MailOutlineIcon fontSize="15px"/> </InputAdornment>}  style={{borderRadius:'20px'}} size="small"  onChange={handleChangeEmail} type="email" placeholder="Enter email" />

                            </FormGroup>

                            <FormGroup className="formDialog" controlId="formBasicPassword">

                                <OutlinedInput   startAdornment={<InputAdornment position="start"><LockOutlinedIcon fontSize='15px'/> </InputAdornment>} style={{borderRadius:'20px'}}  size="small" onChange={handleChangePassword} type="password" placeholder="Password" />
                            </FormGroup>
                            <Grid container gap='5rem' p='0 1.5rem 1.5rem 1.5rem'> 
                                <Grid item >
                                    <Link  underline="none"  href="/register"> Register here</Link>
                                    <br />
                                </Grid>
                                <Grid item><Link underline="none" href="/iforgot">Forgot Password?</Link></Grid>
                            </Grid>


                            <div id="loginButton">
                                <Button onClick={onLogin} style={{
                                    borderRadius: 15,
                                    marginTop:'1rem', 
                                    width:'9rem'
                                                                   
                                }} variant="contained" size="large" color="error" >
                                    Login
                                </Button>
                            </div>



                        </Grid>

                    </Grid>


                </Container>

    </div >
}


export default LoginDialog;