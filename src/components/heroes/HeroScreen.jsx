import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById'

const HeroScreen = ({ history }) => {
	const { heroId } = useParams()
	const hero = useMemo(() => getHeroById(heroId), [heroId])
	// const hero = getHeroById(heroId)

	if (!hero) {
		return <Redirect to="/" />
	}

	const { superhero, publisher, alter_ego, first_appearance, characters } =
		hero[0]

	const handleGoBack = () => {
		if (history.length <= 2) {
			history.push('/')
		}
		history.goBack()
	}

	return (
		<div className="row">
			<div className="col-4">
				<img
					className="img-thumbnail animate__animated animate__fadeInLeft"
					src={`../assets/heroes/${heroId}.jpg`}
					alt={superhero}
				/>
			</div>
			<div className="col-8">
				<h3 className="text-center">{superhero}</h3>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<b>Alter Ego:</b> {alter_ego}
					</li>
					<li className="list-group-item">
						<b>Publisher:</b> {publisher}
					</li>
					<li className="list-group-item">
						<b>First Appearance:</b> {first_appearance}
					</li>
				</ul>
				<h5>Characters:</h5>
				<p>{characters}</p>
				<button
					type="button"
					className="btn btn-outline-primary"
					onClick={handleGoBack}>
					Return
				</button>
			</div>
		</div>
	)
}

export default HeroScreen
