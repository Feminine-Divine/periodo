import React, { useState } from 'react';
import {TextField, Button, Container} from '@material-ui/core';
import {Card, CardHeader, CardContent} from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import InputAdornment from '@material-ui/core/InputAdornment';
import PersonIcon from '@material-ui/icons/Person';
import { TextareaAutosize } from '@material-ui/core';
import {Paper, Grid} from '@material-ui/core';
import { Row, Col } from "reactstrap";
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


function ContactUs () {

    const { register, handleSubmit, reset } = useForm();
    
    const toastifySuccess = () => {
        toast('Form sent!', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          className: 'submit-feedback success',
          toastId: 'notifyToast'
        });
      };
    
      const onSubmit = async (data) => {
        // Send form email
        try {
          const templateParams = {
            name: data.name,
            email: data.email,
            subject: data.subject,
            message: data.message
          };
          
          await emailjs.send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            templateParams,
            process.env.REACT_APP_USER_ID
          );

    
          reset();
          toastifySuccess();
        } catch (e) {
          console.log(e);
        }
      };


    return (
        <Paper style={{alignItems:"center", margin:"0 19%", background:"#960435"}}>
        <Card style={{backgroundColor: '#960435',
                      color: 'white'}}>
          <CardHeader title="Talk with us (beta)"/>
        </Card>
        <CardContent>
        <div>
            <Grid container spacing={2}  lg={12}>
              <Grid item md={12} sm={12} xs={12} lg={12}>
                <TextField
                  margin="dense"
                  variant="filled"
                  name="name"
                  label="name"
                  color="secondary"
                  autoComplete="off"
                  style={{width:"100%", background:"#fad2e3"}}
                  required
                  ref={register({
                    required: { value: true, message: 'Please enter your name' },
                    maxLength: {
                      value: 30,
                      message: 'Please use <= 30 characters'
                    }
                  })}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <PersonIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid style={{alignItems:"center"}} item md={12} sm={12} xs={12} lg={12}>
                <TextField
                  margin="dense"
                  name="email"
                  label="email"
                  variant="filled"
                  color="secondary"
                  name="email"
                  autoComplete="off"
                  required
                  ref={register({
                    required: true,
                    pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                  })}
                  style={{width: '100%', background:"#fad2e3"}}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item md={12} sm={12} xs={12} lg={12}>
                <TextField
                  margin="dense"
                  variant="filled"
                  name="subject"
                  label="subject"
                  color="secondary"
                  autoComplete="off"
                  style={{width:"100%", background:"#fad2e3"}}
                  required
                  ref={register({
                    required: { value: true, message: 'Please enter your name' },
                    maxLength: {
                      value: 30,
                      message: 'Please use <= 30 characters'
                    }
                  })}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <PersonIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid style={{alignItems:"center"}} item md={12} sm={12} xs={12} lg={12}>
                {/*<TextField
                  margin="dense"
                  label="Email"
                  variant="filled"
                  color="secondary"
                  name="email"
                  required
                  style={{width: '95%', background:"#fad2e3"}}
                /> */}
                <TextareaAutosize
                    rowsMax={4}
                    name="message"
                    aria-label="maximum height"
                    placeholder="message"
                    ref={register({
                        required: true
                      })}
                    style={{width: '100%', 
                            background:"#e9b8cc", 
                            maxHeight:"90px", 
                            minHeight:"90px", 
                            overflowY: "scroll",
                            fontSize:"17px",
                            outline: "none",
                            padding:"10px",
                            marginTop:"10px"
                        }}
                />
              </Grid>
              <br/>
              <br/>
              <Container>
              <Row>
                  <Col >
                  <Button
                    variant="contained"
                    color="secondary"
                    type='submit'
                    onclick={handleSubmit(onSubmit)}
                    style={{background:"black", margin:"10px 0px 0px -10px"}}>
                    Submit
                  </Button>
                  </Col>
                </Row>
                </Container>
            </Grid>
            <ToastContainer />
            </div>
        </CardContent>
        </Paper>
    ) ;
};

export default ContactUs;



