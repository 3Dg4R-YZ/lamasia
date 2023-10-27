import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import './Modal.css'

export const Modal = ({ isOpen }) => {
	const { dispatch } = useContext(AuthContext)
	if (!isOpen) return null
	const { title, content, action, handleSubmit } = isOpen
	return (
		<div className="modal">
			{/* <div className="preview"></div> */}
			<button
				className="bckModal"
				onClick={() => dispatch({ type: 'close' })}
			></button>
			<div className="newForm fadeInDown">
				<button
					className="closeModal"
					onClick={() => dispatch({ type: 'close' })}
				>
					X
				</button>
				<h3 className="newProductForm__title">{title}</h3>
				<form action={action} method="post" onSubmit={handleSubmit}>
					{content}
					<button>Guardar</button>
				</form>
			</div>
		</div>
	)
}
