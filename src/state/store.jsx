// Services
import React, { useState, createContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import * as constants from '../constants';
import * as fb from '../constants/firebase/constants';
import * as filters from '../constants/filters';

// Components
import { createFeedback } from '../components/feedback';

const GlobalState = createContext();
export const GlobalStatePovider = (props) => {
  // *******************************************************
  // ********************* State ***************************
  // *******************************************************

  // Router history
  const hist = useHistory();

  // Hanndle Auth / new user state
  const [loading, setLoading] = useState(false);
  const [logged, setLogged] = useState(true);
  const [createUserProfile, setCreateUserProfile] = useState(false);

  // Get auth user data / firestore profileData
  const [user, setUser] = useState(false);
  const [profileData, setProfileData] = useState(false);

  // Get data from DB
  const [noticeboardQuery, setNoticeboardQuery] = useState(false);
  const [availableSubs, setAvailableSubs] = useState(false);
  const [inbox, setInbox] = useState(false);

  // Search current array
  const [searchList, setSearchList] = useState([]);
  const [currentList, setCurrentList] = useState([]);

  // Set active post. This is used for employers to edit a post.
  const [post_to_edit, set_post_to_edit] = useState(false);

  // Chat
  const [selectedChat, setSelectedChat] = useState(false);

  // Modals
  const [modals, setModals] = useState({
    LoginForm: false,
    ChangeAvatar: false,
    CreatePost: false,
    BlockedUsers: false,
    ChangeEmail: false,
    ChangePassword: false
  });


  // *******************************************************
  // ******************** Methods **************************
  // *******************************************************

  // Check user email verification
  const isUserVerfied = () => {
    let currentUser = fb.auth.currentUser;
    if (!currentUser.emailVerified) {
      feedback('error', 'Unverified users cannot use this feature');
      return false;
    }
    return true
  }

  // Modals
  const handleModals = (modal, value) => {
    setModals({ ...modals, [modal]: value });
  };

  // Methods for user feedback
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const feedback = (variant, message) => {
    createFeedback(variant, message, enqueueSnackbar, closeSnackbar, hist)
  };

  // Functions for gathering user data
  const handleAuthState = () => {
    fb.handleAuthState(setUser, setLoading, setLogged)
  };
  const handleProfileData = () => {
    fb.handleProfileData(user.uid, setProfileData, setLoading, setCreateUserProfile);
  };
  const updateProfileData = (data) => {
    fb.updateProfileData(user, profileData, data);
  };
  const queryNoticeboard = () => {
    fb.queryNoticeboard(setNoticeboardQuery);
  };
  const queryAvailableSubs = () => {
    fb.queryAvailableSubs(setAvailableSubs);
  };
  const handleInbox = () => {
    fb.handleInbox(user, setInbox);
  };

  // User actions
  const deleteUser = () => {
    fb.deleteUser(user, profileData, feedback);
  };
  const searchInbox = (chatee) => {
    fb.searchInbox(inbox, profileData, chatee, hist, setSelectedChat, handleModals);
  }
  const deleteChatroom = (id) => {
    fb.deleteChatroom(id, setSelectedChat, hist);
  };

  // Search content
  const search = (value) => {
    if (value === '') {
      setSearchList(currentList)
      return;
    }
    if (currentList[0] !== undefined && currentList[0].user1 !== undefined) {
      setSearchList(currentList.filter(item =>
        item.user1.name.toLowerCase().includes(value.toLowerCase())
        || item.user2.name.toLowerCase().includes(value.toLowerCase())
      ))
      return;
    }
    setSearchList(currentList.filter(item => item.name.toLowerCase().includes(value.toLowerCase())));
  }

  const state = {
    loading, logged, user, modals, profileData, noticeboardQuery,
    availableSubs, inbox, createUserProfile, post_to_edit, selectedChat,
    searchList, currentList
  };
  const setState = {
    setLoading, setLogged, setUser, setCreateUserProfile,
    setProfileData, setAvailableSubs, setNoticeboardQuery,
    setInbox, set_post_to_edit, setSelectedChat,
    setSearchList, setCurrentList
  };
  const methods = {
    feedback, handleModals, handleAuthState, handleProfileData,
    queryNoticeboard, queryAvailableSubs, handleInbox,
    updateProfileData, deleteUser, searchInbox, deleteChatroom,
    search, isUserVerfied
  };

  // Create provider
  return (
    <GlobalState.Provider
      value={{
        state, setState, methods, fb,
        constants, filters, hist
      }}>
      {props.children}
    </GlobalState.Provider>)
}
export default GlobalState
