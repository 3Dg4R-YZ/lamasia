import React from 'react'
import { InstagramLogo } from '../../assets/InstagramLogo'
import './Header.css'

export const Header = () => {
	return (
		<header id="inicio">
			<figure>
				<img className="logo" src="./assets/logo.webp" alt="Logo de La Masia" />
			</figure>
			<h1>La Masia</h1>
			<a
				href="https://www.instagram.com/la_masia24h"
				target="_blank"
				rel="noreferrer"
				className="instagram"
			>
				<InstagramLogo />
			</a>
		</header>
	)
}
