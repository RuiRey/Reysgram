import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';
import Author from './components/Author';
import SignUp from './components/SignUp';
import Login from './components/Login';

function Router() {
	return (
		<BrowserRouter>
			<Switch>
				{/*Switch tag will try the first Route, if it doesn't match,
							it's will try the second Route... If there are no Routes were match,
							it will go to fall back to that not found Route*/}
				<Route exact path="/" component={PhotoGrid}></Route>
				 <Route exact path="/home/:userId" component={Author}></Route>
				{/*use 'exact' because our first route is going to be exactly 
							on the forward slash'/' */}
				 <Route path="/view/:authorUid/:postId" component={Single}></Route>

				{/*<Route path="/:author" component={Author}></Route> */}

				<Route path="/signup" component={SignUp}></Route>
				<Route path="/login" component={Login}></Route>
			</Switch>
		</BrowserRouter>
	)
}

export default Router;