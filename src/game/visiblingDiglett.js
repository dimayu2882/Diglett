import gsap from 'gsap'

export const visiblingDiglett = (item, index) => {
	const diglett = item.children.find(child => child.label === 'diglett')
	
	gsap.to(diglett.scale, {
		y: .5,
		duration: 0.8,
		ease: "power3.inOut",
		delay: index
	})
	
	diglett.isVisible = true
}
