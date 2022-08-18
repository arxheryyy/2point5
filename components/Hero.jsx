const Hero = () => {
	return (
		<div
			className="hero min-h-screen"
			style={{ backgroundImage: "url(/Hero.jpg)" }}
		>
			<div className="hero-overlay bg-opacity-60"></div>
			<div className="hero-content text-center text-neutral-content">
				<div className="max-w-md">
					<h1 className="mb-5 text-5xl font-bold">2 point 5</h1>
					<p className="mb-5">Bridging the gap between discord and web3.</p>
					<button className="btn btn-primary">Find out more</button>
				</div>
			</div>
		</div>
	);
};
export default Hero;
