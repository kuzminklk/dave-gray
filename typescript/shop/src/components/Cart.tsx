

import { useCart } from "../context/CartContext.tsx"
import { REDUCER_ACTION_ENUM } from "../context/CartContext.tsx"


export function Cart() {

	const { dispatch } = useCart()

	return (
		<main>
			<button onClick={ () => { dispatch({type: REDUCER_ACTION_ENUM.SUBMIT }) }}>
				Confirm
			</button>
		</main>
	)
}