import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Navbar from '../components/ui/Navbar'
import MarvelScreen from '../components/marvel/MarvelScreen'
import DcScreen from '../components/dc/DcScreen'
import HeroScreen from '../components/heroes/HeroScreen'
import SearchScreen from '../components/search/SearchScreen'

const DashboardRoutes = () => {
	return (
		<div>
			<Navbar />
			<div className="container mt-4 mb-5">
				<Switch>
					<Route exact path="/marvel" component={MarvelScreen} />
					<Route exact path="/dc" component={DcScreen} />
					<Route exact path="/hero/:heroId" component={HeroScreen} />
					<Route exact path="/search" component={SearchScreen} />
					<Redirect to="/marvel" />
				</Switch>
			</div>
		</div>
	)
}

export default DashboardRoutes
