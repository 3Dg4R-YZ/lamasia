import React, { useMemo } from 'react'
import { Product } from '../Product/Product'
import { NewProduct } from '../NewProduct/NewProduct'
import './Category.css'

export const Category = ({ category, i }) => {
	const { section, products } = category
	const maxIndex = products.length + 1
	const clase = section === 'Agregos' ? 'add' : 'product'

	const productsMemo = useMemo(
		() =>
			products.map((product, i) => (
				<Product
					product={product}
					clase={clase}
					key={Math.random()}
					i={i}
					maxIndex={maxIndex}
				/>
			)),
		[products, maxIndex, clase]
	)
	return (
		<section>
			<h2 className="section__title fadeIn">{section}</h2>
			<ul className={`section__${clase}s fadeIn`}>
				{productsMemo}
				<NewProduct clase={clase} maxIndex={maxIndex} />
			</ul>
		</section>
	)
}
