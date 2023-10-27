import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { NewCategoryForm } from '../admin/NewCategoryForm'
import { PlusLogo } from '../../assets/PlusLogo'
import './NewCategory.css'

export const NewCategory = () => {
	const { admin, dispatch } = useContext(AuthContext)
	if (!admin) return null
	return (
		<section
			className="newSection"
			onClick={() => {
				dispatch({
					type: 'openModal',
					title: 'Nueva Categoria',
					payload: <NewCategoryForm />,
				})
			}}
		>
			<h2 className="newSection__title">Nueva Seccion</h2>
			<div className="newSection__body">
				<PlusLogo />
			</div>
		</section>
	)
}
