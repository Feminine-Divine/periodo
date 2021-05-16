import React from 'react';
import styles from '../SocialIcon/SocialIconstyle.module.css';
import GitHubIcon from "@material-ui/icons/GitHub";
import MailIcon from "@material-ui/icons/Mail";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";

export default function SocialIcon() {
    return (
        <>
        <br></br>
        <div className={styles.socialIcons}>
            <a data-testid="github" href="https://github.com/Feminine-Divine/periodo"><GitHubIcon className={styles.icons} /></a>
            <a data-testid="mail" href="mailto:femininedivine591@gmail.com"><MailIcon className={styles.icons} /></a>
            <a data-testid="linkedin" href="https://www.linkedin.com/company/feminine-divine/"><LinkedInIcon className={styles.icons} /></a>
            <a data-testid="instagram" href=""><InstagramIcon className={styles.icons} /></a>
        </div>
        </>
    )
}
