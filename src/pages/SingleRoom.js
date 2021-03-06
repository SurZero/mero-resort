import React, {useContext} from 'react'
import {RoomContext} from '../RoomContext'
import defaultBg from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import StyledHero from '../components/StyledHero'

import {Link} from 'react-router-dom'

export default function SingleRoom(props){
	// console.log(props.match.params.slug)
	// let [slug, setSlug] =  useState(props.match.params.slug)
	// let [bg, setDefaultbg] =  useState(defaultBg)

	let {getRoom} = useContext(RoomContext)

	const room = getRoom(props.match.params.slug)

	if (!room) {
		return(
		 <div className="error">
		 	<h3>No such room could be found!...</h3>
		 	<Link to='/rooms' className="btn-primary">
		 		back to rooms
		 	</Link>
		 </div>
		)
	}

	const {name, description, capacity, size, price, extras, breakfast, pets, images} = room
	const [mainImg, ...defaultImg] = images // to get all the images except mainBg image
	return(
		<>
			<StyledHero img={images[0] || defaultBg}>
				<Banner title={`${name} room`}>
					<Link to="/rooms" className="btn-primary">
						back to rooms
					</Link>
				</Banner>
			</StyledHero>
			<section className="single-room">
				<div className="single-room-images">
					{defaultImg.map((item, index) => {
						return <img key={index} src={item} alt={name}/>
					})}
				</div>
				<div className="single-room-info">
					<article className="desc">
						<h3>details</h3>
						<p>{description}</p>
					</article>
					<article className="info">
						<h3 className="info">info</h3>
						<h6>price : ${price}</h6>
						<h6>size : ${size}</h6>
						<h6>
							max capacity : {
								capacity > 1 ? `${capacity} people` : `${capacity} person`
							}
						</h6>
						<h6>
							{pets? "pets allowed": "no pets allowed"}
						</h6>
						<h6>
							{breakfast && "free breakfast included" }
						</h6>
					</article>
				</div>
			</section>

			<section className="room-extras">
				<h6>extras</h6>
				<ul className="extras">
					{extras.map((item, index) => {
						return <li key={index}>- {item}</li>
					})}
				</ul>
			</section>
		</>
	)
}