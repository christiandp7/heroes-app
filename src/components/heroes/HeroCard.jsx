import React from 'react'
import { Link } from 'react-router-dom'

const HeroCard = ({
	id,
	superhero,
	publisher,
	alter_ego,
	first_appearance,
	characters,
}) => {
	return (
		<div class="col-sm-6 col-md-6">
			<div className="card">
				<div className="row no-gutters">
					<div className="col-sm-12 col-md-4">
						<img
							src={`assets/heroes/${id}.jpg`}
							className="img-fluid rounded-start"
							alt={superhero}
						/>
					</div>
					<div className="col-sm-12 col-md-8">
						<div className="card-body">
							<h5 class="card-title">{superhero}</h5>
							<p className="card-text">{alter_ego}</p>
							{alter_ego !== characters && (
								<p className="card-text">{characters}</p>
							)}
							<p className="card-text">
								<small className="text-muted">{first_appearance}</small>
							</p>
							<Link to={`./hero/${id}`} className="btn btn-primary">
								Mas...
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeroCard
