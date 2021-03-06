import React, { useContext, useEffect } from 'react';
// State
import store from 'state';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import {
    Typography, Card, Button,
    CardContent
} from "@material-ui/core";

import bg from 'assets/img/bg.jpg'

import { boxShadow, card, defaultFont } from 'assets/jss/material-kit-react';

const useStyles = makeStyles({
    container: {
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        padding: 0,
        backgroundColor: 'slategray',
        backgroundImage: `url('${bg}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    },
    card: {
        ...boxShadow,
        ...card,
        maxWidth: 350,
        width: '95%'
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        ...boxShadow,
        ...defaultFont,
        fontWeight: "400",
        position: 'fixed',
        bottom: 0,
        right: 0,
        padding: 12,
        backgroundColor: '#f0f8ff26',
        borderRadius: 8
    },
    header: {
        paddingTop: 12
    }
})

export default function CreateProfile() {
    const classes = useStyles();
    const { state, methods, fb, constants, hist } = useContext(store);
    const { feedback, updateProfileData } = methods;

    const createNewUserProfile = userPath => () => {
        let data = constants.newUser(state.user);
        userPath === "substitute"
            ? data = { ...data, ...constants.newSubData }
            : data = { ...data, ...constants.newEmployerData };

        if (state.user.uid !== undefined) {
            fb.users.doc(state.user.uid).update({ ...data })
                .then(() => {
                    hist.push('/profile-page')
                })
                .catch(err => {
                    feedback('error', err.message)
                });
        }
    }

    useEffect(() => {
        if (!state.user.emailVerified) {
            fb.handleVerification(state.user, feedback);
            updateProfileData({ emailSent: true })
        }
        // eslint-disable-next-line
    }, [])

    return (
        <div className={classes.container}>
            <Card className={classes.card}>
                <Typography
                    component='header'
                    variant='h4'
                    className={classes.header}
                    align='center'>
                    Choose your path
                </Typography>
                <CardContent className={classes.content} >
                    <Button
                        variant='outlined'
                        onClick={createNewUserProfile('substitute')}
                        children={`Substitute`} />

                    <Typography
                        variant='subtitle1'
                        className='p-2'
                        align='center'>
                        or
                    </Typography>

                    <Button
                        variant='outlined'
                        onClick={createNewUserProfile('employer')}
                        children={`Employer`} />
                </CardContent>
            </Card>


            <div className={classes.footer}>
                Photo by{" "}
                <a
                    href="https://unsplash.com/@alschim"
                    className="text-light"
                    target="_blank"
                    rel="noopener noreferrer">
                    Alexander Schimmeck
                </a>
                {" "}on{" "}
                <a href='https://unsplash.com/'
                    className="text-light"
                    target="_blank"
                    rel="noopener noreferrer">
                    Unsplash
                </a>
            </div>
        </div>
    )
}