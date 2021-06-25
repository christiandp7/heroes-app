import React, { useMemo } from 'react'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom'
// import { heroes } from '../../data/heroes'
import { useForm } from '../../hooks/useForm'
import HeroCard from '../heroes/HeroCard'
import { getHeroesByName } from '../../selectors/getHeroesByName'

const SearchScreen = ({ history }) => {
	const location = useLocation()
	const { q = '' } = queryString.parse(location.search)
	const [formValues, handleInputChange] = useForm({
		searchText: q,
	})

	const { searchText } = formValues

	// const heroesFiltered = getHeroesByName(searchText)
	const heroesFiltered = useMemo(() => getHeroesByName(q), [q])

	const hadleSearch = e => {
		e.preventDefault()
		history.push(`?q=${searchText}`)
	}

	return (
		<>
			<h1>Seach Screen</h1>
			<hr />
			<div className="row">
				<div className="col-5">
					<h4>Seach Form</h4>
					<hr />
					<form onSubmit={hadleSearch}>
						<input
							type="text"
							placeholder="Find your Hero"
							className="form-control"
							name="searchText"
							autoComplete="off"
							value={searchText}
							onChange={handleInputChange}
						/>
						<button
							type="submit"
							className="btn btn-block btn-outline-primary mt-2">
							Search...
						</button>
					</form>
				</div>
				<div className="col-7">
					<h4>Results</h4>
					<hr />
					{q === '' && <div className="alert alert-info">Search a Hero</div>}
					{q !== '' && heroesFiltered.length === 0 && (
						<div className="alert alert-danger">
							There is not a Hero with "{q}"
						</div>
					)}
					<div className="row no-gutters">
						{heroesFiltered.map(hero => (
							<HeroCard key={hero.id} {...hero} />
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export default SearchScreen
