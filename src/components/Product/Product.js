import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { EditProductForm } from '../admin/EditProductForm'
import { DeleteProductForm } from '../admin/DeleteProductForm'
import { InformacionLogo } from '../../assets/InformacionLogo'
import { EditarLogo } from '../../assets/EditarLogo'
import { EliminarLogo } from '../../assets/EliminarLogo'
import './Product.css'

export const Product = ({ product, clase, i, maxIndex }) => {
	const [info, setInfo] = useState(false)
	const { name, description, price } = product
	const image = i < 7 ? `${i + 1}.jpg` : `placeholder.jpg`
	const { admin, dispatch } = useContext(AuthContext)

	const editModal = {
		type: 'openModal',
		title: 'Editar Producto',
		payload: (
			<EditProductForm
				product={product}
				i={i}
				image={image}
				maxIndex={maxIndex}
			/>
		),
	}

	return (
		<li className={`${clase}s__${clase}`}>
			<img
				className={`${clase}__img`}
				src={`./assets/${image}`}
				alt={name}
				loading="lazy"
			/>
			{!info ? (
				<h3 className={`${clase}__title fadeIn`}>{name}</h3>
			) : (
				<p className={`${clase}__body fadeIn`}>{description}</p>
			)}
			<span className={`${clase}__price`}>${price}</span>
			{description && (
				<>
					<span className="doblez" onClick={() => setInfo(!info)}></span>
					<button className="product__info" onClick={() => setInfo(!info)}>
						<InformacionLogo />
					</button>
				</>
			)}
			{admin && (
				<>
					<span className={`${clase}__index`}>{i + 1}</span>
					<div className={`${clase}__btns`}>
						<button className="edit__btn" onClick={() => dispatch(editModal)}>
							<EditarLogo />
						</button>
						<button
							className="delete__btn"
							onClick={() =>
								dispatch({
									type: 'openModal',
									title: 'Eliminar Producto',

									payload: (
										<DeleteProductForm product={product} i={i} image={image} />
									),
								})
							}
						>
							<EliminarLogo />
						</button>
					</div>
				</>
			)}
		</li>
	)
}
