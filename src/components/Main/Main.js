import React, { useMemo } from 'react'
import { products } from '../../data/products'
import { Category } from '../Category/Category'
import { NewCategory } from '../NewCategory/NewCategory'
import './Main.css'

export const Main = ({ main }) => {
	const data = !!localStorage.getItem('masia-data')
		? localStorage.getItem('masia-data')
		: products
	const categories = data[main]
	const categoriesMemo = useMemo(
		() =>
			categories.map((category, i) => (
				<Category category={category} i={i} key={Math.random()} />
			)),
		[categories]
	)
	return (
		<article>
			{categoriesMemo}
			<NewCategory />
		</article>
	)
}
