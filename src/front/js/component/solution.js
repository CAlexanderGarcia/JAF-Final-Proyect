import React from "react";

const Solution = () => {
	return (
		<div className="solution">
			<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
				<div className="carousel-inner solution_item">
					<div className="carousel-item active">
						<img src="" className="d-block w-100" alt="..." />
						<p>hola</p>
					</div>
					<div className="carousel-item">
						<img src="..." className="d-block w-100" alt="..." />
						<p>como</p>
					</div>
					<div className="carousel-item">
						<img src="..." className="d-block w-100" alt="..." />
						<p>estas</p>
					</div>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleControls"
					data-bs-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true" />
					<span className="visually-hidden">
						<i className="fas fa-angle-double-left" />
					</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleControls"
					data-bs-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true" />
					<span className="visually-hidden">
						<i className="fas fa-angle-double-right" />
					</span>
				</button>
			</div>
		</div>
	);
};

export default Solution;
