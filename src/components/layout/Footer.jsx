function Footer() {
	const footerYear = new Date().getFullYear()

	return (
		<footer className='footer p-10 bg-gray-700 text-primary-content footer-center'>
			<div>
				<svg height='100' width='100'>
					<circle
						cx='50'
						cy='50'
						r='40'
						stroke='black'
						stroke-width='3'
						fill='white'
					/>
					Sorry, your browser does not support inline SVG.
				</svg>
				<p>Copyright &copy; {footerYear} All rights reserved</p>
			</div>
		</footer>
	)
}

export default Footer
