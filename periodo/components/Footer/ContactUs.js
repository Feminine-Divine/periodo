import React from "react";
import { TextField, Button, Container } from "@material-ui/core";
import { Card, CardHeader, CardContent } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import InputAdornment from "@material-ui/core/InputAdornment";
import PersonIcon from "@material-ui/icons/Person";
import { TextareaAutosize } from "@material-ui/core";
import { Paper, Grid } from "@material-ui/core";
import { Row, Col } from "reactstrap";
import styles from "./ContactUs.module.css";
import 'font-awesome/css/font-awesome.min.css';

function ContactUs() {
  return (

    <div className={styles.contactus_body}>
        <div className={styles.form_wrapper}>
            <div className={styles.form_container}>
                <div className={styles.title_container}>
                    <h2>Talk to us <span id={styles.touch}>Beta</span></h2>
                    <h3>Contact us</h3>
                </div>
                <form>
                    <div className={styles.row_clearfix}>
                        <div className={styles.col_half}>
                            <label className={styles.input_label}>First name</label>
                            <div className={styles.input_field}> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                                <input className={styles.inputN} type="text" name="first_name" placeholder="John" required />
                            </div>
                        </div>
                        <div className={styles.col_half}>
                            <label className={styles.input_label}>Last name</label>
                            <div className={styles.input_field}> <span><i aria-hidden="true" class="fa fa-user"></i></span>
                                <input className={styles.inputN}  type="text" name="last_name" placeholder="Doe" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.row_clearfix}>
                        <div className={styles.col_half}>
                            <label className={styles.input_label}>Email</label>
                            <div className={styles.input_field}> <span><i aria-hidden="true" class="fa fa-envelope"></i></span>
                                <input className={styles.inputN}  type="email" name="email" placeholder="johndoe@gmail.com" required />
                            </div>
                        </div>
                        <div className={styles.col_half}>
                            <label className={styles.input_label}>Phone</label>
                            <div className={styles.input_field}> <span><i aria-hidden="true" class="fa fa-phone"></i></span>
                                <input className={styles.inputN}  type="tel" name="phone" placeholder="Phone no" pattern="[0-9]{10}" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.row_clearfix}>
                        <div>
                        <label className={styles.input_label}>Comments</label>
                            <div className={styles.textarea_field}> <span><i aria-hidden="true" class="fa fa-comment"></i></span>
                                <input type ="text" className={styles.inputtextarea}  name="comments"/>
                            </div>
                        </div>
                    </div>
                    <input className={styles.inputN} type="submit" value="Submit" />
                </form>
            </div>
        </div>
        </div>
  );
}
export default ContactUs;
