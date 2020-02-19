import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Available Internationally</h2>
          <h5 className={classes.description}>
            NinjaSubs is available in countries all around the world.
          </h5>
          <br />          
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Private Chat"
              description="Chat messages are protected by strict security rules created for Google Firebase Cloud Firestore"
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Verified Users"
              description="Only verified users can create content. Email verification will be sent to a new user within a  minute
               ( connetion depending ) after registering."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Content Filters"
              description="Both employers and subtitutes can filter noticeboards and personal activities lists in custom ways."
              icon={Fingerprint}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Always free</h2>
          <h6 className={classes.description}>
            Since Google offers all their database services for free, and all of the design elements are also free,
            thanks to MaterialUI and CreativeTim, NinjaSubs will always be a free service without any advertising. 
          </h6>
          <br />          
        </GridItem>
      </GridContainer>    
    </div>
  );
}