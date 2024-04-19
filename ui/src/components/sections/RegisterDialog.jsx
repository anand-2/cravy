import React,{useState} from 'react'
import "./LoginDialog.css"
import Button from '@mui/material/Button';
import { Grid,Container,OutlinedInput,FormGroup,InputAdornment,Alert,Snackbar } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import axios from "axios";

function RegisterDialog() {

    const locations = ["Delhi", "Bangalore", "Chennai", "Mumbai"]
    const [errorMessage, setErrorMessage] = useState("")
    const [successMessage, setSuccessMessage] = useState("")
    const [user, setUser] = useState({
        username: "",
        email: "",
        phone_num: "",
        password: "",
        location: "Bangalore",
    })

    const resetAlerts = () => {
        setErrorMessage("");
        setSuccessMessage("")
    }
    const handleChangeName = event => {
        setUser(
            {
                ...user,
                username: event.target.value
            })
    }
    const handleChangeEmail = event => {
        setUser(
            {
                ...user,
                email: event.target.value
            })
    }
    const handleChangePhoneNo = event => {
        setUser(
            {
                ...user,
                phone_num: event.target.value
            })
    }
    const handleChangePass = event => {
        setUser(
            {
                ...user,
                password: event.target.value
            })
    }
    const handleChangeLocation = selected_item => {
        setUser(
            {
                ...user,
                location: selected_item
            })
    }


    const onRegister = event => {

        resetAlerts()
        axios.post("/api/users/register", user)
            .then((res) => {
                let data = res.data
                if (data.error) {
                    setErrorMessage(data.message)
                }
                else {
                    setSuccessMessage(data.message)
                }
            }).catch((error) => {
                setErrorMessage(JSON.stringify(error))
            })




    }
    let locationDropdownItems = locations.map(item => { return <></>
        // return <Dropdown.Item key={item} onClick={e => handleChangeLocation(item)}>{item}</Dropdown.Item>
    })


    
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
      };
    
    

  return (
    <div>
    <Container className="Design">

        <Grid container>
            <Grid item  >

                <h3 style={{ textAlign: "center" }}>Register</h3>
           
               <Snackbar open={errorMessage!== '' || successMessage!== ''} autoHideDuration={6000} >
                    <Alert
                        severity={errorMessage === '' ? 'success' : 'error'}                        
                        variant="filled"
                        sx={{ width: '100%' }}
                    >
                        {errorMessage} {successMessage}
                    </Alert>
                    </Snackbar>
                <FormGroup className="formDialog"  >
                    <OutlinedInput  startAdornment={<InputAdornment position="start"><PersonOutlineIcon fontSize='15px'/> </InputAdornment>} style={{borderRadius:'20px'}}  size="small" onChange={handleChangeName} type="name" placeholder="Username" />
                </FormGroup>

                <FormGroup className='formDialog'>
                    <OutlinedInput  startAdornment={<InputAdornment position="start"><LockOutlinedIcon fontSize='15px'/> </InputAdornment>} style={{borderRadius:'20px'}}  size="small" onChange={handleChangePass} type="password" placeholder="Password" />
                </FormGroup>

                <FormGroup className="formDialog" >
                    <OutlinedInput  startAdornment={<InputAdornment position="start"><MailOutlineIcon fontSize='15px'/> </InputAdornment>} style={{borderRadius:'20px'}}  size="small" onChange={handleChangeEmail} type="email" placeholder="Email" />
                </FormGroup>

                {/* <Grid container><Grid item md="3">
                
                <DropdownButton className="dropdown-basic-button " variant="secondary" title={user.location}>
                    {locationDropdownItems}
                </DropdownButton>   
                </Grid></Grid> */}


                <FormGroup className="formDialog" >
                    <OutlinedInput  startAdornment={<InputAdornment position="start"><PhoneIcon fontSize='15px'/> </InputAdornment>} style={{borderRadius:'20px'}}  size="small" onChange={handleChangePhoneNo} type="text" pattern="\d*" placeholder="Phone Number" maxLength="10" />
                </FormGroup>

                <Grid container justifyContent='center'>
                    <Grid item style={{ textAlign: "right" }}>
                         <Button  onClick={onRegister} style={{
                                    borderRadius: 15,
                                    marginTop:'1rem', 
                                    width:'auto'
                                                                   
                                }} variant="contained" size="large" color="primary" >
                            Create Account
                        </Button>

                        <br />
                    </Grid>
                    
                </Grid>





            </Grid>

        </Grid>


    </Container>

</div>
  )
}

export default RegisterDialog