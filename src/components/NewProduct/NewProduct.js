import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { NewProductForm } from '../admin/NewProductForm'
import { PlusLogo } from '../../assets/PlusLogo'
import './NewProduct.css'

export const NewProduct = ({ clase, actualIndex }) => {
	const { admin, dispatch } = useContext(AuthContext)
	if (!admin) return null
	return (
		<>
			<li
				className={`${clase}s__${clase} newProduct`}
				onClick={() =>
					dispatch({
						type: 'openModal',
						title: 'Nuevo Producto',
						payload: <NewProductForm actualIndex={actualIndex} />,
					})
				}
			>
				<PlusLogo />
				<h2 className={`newProduct__title`}>Nuevo Producto</h2>
				<span className={`${clase}__price`}>&nbsp;</span>
			</li>
		</>
	)
}
