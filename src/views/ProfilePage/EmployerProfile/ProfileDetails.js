import React from "react";
// @material-ui/core components
import { InputAdornment, Tooltip, Typography } from "@material-ui/core";
// @material-ui/icons
import {
    Email, AccountBox, People, Phone,
    Map, PinDrop
} from "@material-ui/icons";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput";
// Custom components
import DistrictSelect from './DistrictSelect'
// Styles
import useStyles from '../styles';

export default function ProfilePage({ props }) {
    const { formData, handleData } = props;
    const classes = useStyles();

    return (
        <React.Fragment>
            <Typography
                className={classes.detailsTitle}
                align='center'
                variant='h6'>
                Profile details
            </Typography>
            <GridContainer className='mt-4 mb-3'>
                {/* Name */}
                <GridItem xs={12} sm={6}>
                    <CustomInput
                        formControlProps={{
                            fullWidth: true,
                        }}
                        labelText='School Name'
                        id='username'
                        inputProps={{
                            type: 'text',
                            value: formData ? formData.name : '',
                            onChange: (e) => handleData('name', e.target.value),
                            endAdornment: (
                                <InputAdornment position="end">
                                    <AccountBox className={classes.inputIconsColor} />
                                </InputAdornment>
                            )
                        }} />
                </GridItem>
                {/* Email */}
                <GridItem xs={12} sm={6}>
                    <CustomInput
                        formControlProps={{
                            fullWidth: true,
                        }}
                        labelText='Email'
                        id='email'
                        inputProps={{
                            type: 'email',
                            value: formData ? formData.email : '',
                            onChange: (e) => handleData('email', e.target.value),
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Email className={classes.inputIconsColor} />
                                </InputAdornment>
                            )
                        }} />
                </GridItem>
                {/* Contact person */}
                <GridItem xs={12} sm={6}>
                    <CustomInput
                        formControlProps={{
                            fullWidth: true,
                            error: formData.contact === '' ? true : false
                        }}
                        labelText='Contact Person'
                        id='contact'
                        inputProps={{
                            type: 'text',
                            value: formData ? formData.contact : '',
                            onChange: (e) => handleData('contact', e.target.value),
                            endAdornment: (
                                <InputAdornment position="end">
                                    <People className={classes.inputIconsColor} />
                                </InputAdornment>
                            )
                        }} />
                </GridItem>
                {/* Phone */}
                <GridItem xs={12} sm={6}>
                    <CustomInput
                        formControlProps={{
                            fullWidth: true,
                            error: formData.phone === '' ? true : false
                        }}
                        labelText='Phone'
                        id='phone'
                        inputProps={{
                            type: 'tel',
                            value: formData ? formData.phone : '',
                            onChange: (e) => handleData('phone', e.target.value),
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Phone className={classes.inputIconsColor} />
                                </InputAdornment>
                            )
                        }} />
                </GridItem>
                {/* District */}
                <GridItem xs={12} sm={6}>
                    <DistrictSelect
                        endAdornment={
                            <InputAdornment position="end">
                                <Map className={classes.inputIconsColor} />
                            </InputAdornment>
                        }
                        value={!formData ? '' : formData.location}
                        handleData={handleData} />
                </GridItem>
                {/* Address */}
                <GridItem xs={12} sm={6}>
                    <CustomInput
                        formControlProps={{
                            fullWidth: true,
                            error: formData.address === '' ? true : false
                        }}
                        labelText='Street Address'
                        id='address'
                        inputProps={{
                            type: 'text',
                            placeholder: 'Click icon to open Google Maps',
                            value: formData ? formData.address : '',
                            onChange: (e) => handleData('address', e.target.value),
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Tooltip title='Google Maps'>
                                        <a target="_blank"
                                            href='https://www.google.com/maps'
                                            rel='noopener noreferrer'>
                                            <PinDrop className={classes.inputIconsColor} />
                                        </a>
                                    </Tooltip>

                                </InputAdornment>
                            )
                        }} />
                </GridItem>
            </GridContainer>
        </React.Fragment>
    );
}
