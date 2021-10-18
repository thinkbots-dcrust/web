import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import styled from "styled-components";

import { Homepage } from "pages";
import { NavBar } from "containers";

export default function App() {
	return (
		<Router>
			<MainWrapper>
				<Switch>
					<NavBar />
					<Redirect exact from="/" to="/home" />
					<Route exact path="/home">
						<Homepage />
					</Route>
					<Route>404</Route>
				</Switch>
			</MainWrapper>
		</Router>
	);
}

const MainWrapper = styled.div`
	overflow-x: hidden;
	height: 100vh;
`;
