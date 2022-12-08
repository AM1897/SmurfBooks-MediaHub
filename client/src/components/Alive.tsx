import AliveService from '../utils/api/service/AliveService'
import { useEffect, useState } from 'react'
import css from './Alive.module.css'

const Alive = () => {
	const [text, setText] = useState<string>('No connection to backend!')
	const [connected, setConnected] = useState<boolean>(false)
	
	const alive = () => {
		console.log(AliveService.apiConnectionStatus())
		AliveService.apiConnectionStatus()
			.then(response => {
				console.log(response.data)
				setText(response.data)
				setConnected(true)
			})
			.catch(error => {
				console.error(error.message)
			})
	}
	
	useEffect(() => {
		alive()
	}, [])
	
	return (
		<article>
			<p className={ connected ? css.green : css.red }>{ text }</p>
		</article>
	)
}

export default Alive