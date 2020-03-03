

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'
import 'firebase/storage';
import 'firebase/messaging';
// eslint-disable-next-line
let ninjasubs_test = {
    apiKey: "AIzaSyBITwvEtuVCOpfe5bFGV-Swo4qt8oOVbFk",
    authDomain: "ninjasubs-test.firebaseapp.com",
    databaseURL: "https://ninjasubs-test.firebaseio.com",
    projectId: "ninjasubs-test",
    storageBucket: "ninjasubs-test.appspot.com",
    messagingSenderId: "981066403004",
    appId: "1:981066403004:web:ba53ac0169e01f915914b9",
    measurementId: "G-465MW8WWZP"
}
// eslint-disable-next-line
let ninjaSubs_taipei = {
    apiKey: "AIzaSyBd0MJSCCN1nUdzYoCpzYopaU9uCaet-AA",
    authDomain: "ninjasubs-taipei.firebaseapp.com",
    databaseURL: "https://ninjasubs-taipei.firebaseio.com",
    projectId: "ninjasubs-taipei",
    storageBucket: "ninjasubs-taipei.appspot.com",
    messagingSenderId: "504240713231",
    appId: "1:504240713231:web:60f91e943b7bcf79f77d7a",
    measurementId: "G-KEX87QTP3Z"
}

export default firebase.initializeApp(ninjaSubs_taipei)