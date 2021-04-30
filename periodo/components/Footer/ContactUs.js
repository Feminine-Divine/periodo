import emailjs from "emailjs-com";
import React from 'react';
import {TextField} from '@material-ui/core';
import {Card, CardHeader, CardContent} from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import InputAdornment from '@material-ui/core/InputAdornment';
import SubjectIcon from '@material-ui/icons/Subject';
import PersonIcon from '@material-ui/icons/Person';
import { TextareaAutosize } from '@material-ui/core';
import {Paper, Grid} from '@material-ui/core';


export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();
     
        // NOTE: make sure to make your own setup and also make .env configurations!

    emailjs.sendForm(
        process.env.NEXT_PUBLIC_CONTACT_FORM_SERVICE_ID, 
        process.env.NEXT_PUBLIC_CONTACT_FORM_TEMPLATE_ID, 
        e.target,
        process.env.NEXT_PUBLIC_CONTACT_FORM_USER_ID
        )
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return(
        <div>
            <Paper style={{alignItems:"center", margin:"0 19%", background:"#960435"}}>
        <Card style={{backgroundColor: '#960435',
                      color: 'white'}}>
          <CardHeader title="Talk with us (beta)"/>
        </Card>
        <CardContent>
            <form onSubmit={sendEmail}>
                        <Grid item md={12} sm={12} xs={12} lg={12}>
                            <TextField
                            margin="dense"
                            variant="filled"
                            name="name"
                            label="Name"
                            color="secondary"
                            autoComplete="off"
                            style={{width:"100%", background:"#fad2e3"}}
                            required
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
                            label="Email"
                            variant="filled"
                            color="secondary"
                            name="email"
                            autoComplete="off"
                            required
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
                            InputProps={{
                                endAdornment: (
                                <InputAdornment position="end">
                                    <SubjectIcon />
                                </InputAdornment>
                                ),
                            }}
                            />
                        </Grid>
                        <Grid style={{alignItems:"center"}} item md={12} sm={12} xs={12} lg={12}>
                            <TextareaAutosize
                                rowsMax={4}
                                aria-label="maximum height"
                                variant="filled"
                                name="message"
                                placeholder="Message"
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
                        <div>
                            <input type="submit" value="Send Message" 
                            style={{background:"black", color:"white", padding:"10px", border:"2px black solid", borderRadius:"10px", marginTop:"10px" }}>
                            </input>
                        </div>
                </form>
                </CardContent>
                </Paper>
        </div>
    )
}