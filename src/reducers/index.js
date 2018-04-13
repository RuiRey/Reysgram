import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';


const rootReducer = combineReducers({
    firebase: firebaseReducer
});
                                                        //the changing of the URL

export default rootReducer;