import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';

import posts from './posts';
import comments from './comments';

const rootReducer = combineReducers({
    posts,
    comments,
    firebase: firebaseReducer
});
                                                        //the changing of the URL

export default rootReducer;