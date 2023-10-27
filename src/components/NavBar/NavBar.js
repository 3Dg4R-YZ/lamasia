import React from 'react'
import { InfucionesLogo } from '../../assets/InfucionesLogo'
import { PicaderasLogo } from '../../assets/PicaderasLogo'
import { BebidasLogo } from '../../assets/BebidasLogo'
import './NavBar.css'

export const NavBar = ({ main, setMain }) => {
	const logos = [<InfucionesLogo />, <PicaderasLogo />, <BebidasLogo />, null]
	return (
		<nav className="wrapper">
			<div className="menu">
				{logos.map((logo, i) => (
					<React.Fragment key={i}>
						<div
							className="menu__separator"
							style={{ '--j': 1, '--i': 3 * i + 1 }}
						></div>
						<div
							className="menu__separator"
							style={{ '--j': 3, '--i': 3 * i + 1 }}
						></div>
						{logo && (
							<div
								className={main === i ? 'menu__option active' : 'menu__option'}
								style={{ '--i': 3 * i + 2 }}
								onClick={() => setMain(i)}
							>
								{logo}
							</div>
						)}
					</React.Fragment>
				))}
			</div>
		</nav>
	)
}
