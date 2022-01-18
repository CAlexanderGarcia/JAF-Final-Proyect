import React, { useState } from "react";

const FooterFixed = () => {
	const [dropend, setDropend] = useState(false);
	return (
		<footer className="fixed-bottom mt-5">
			<div className="container-fluid d-flex bg-bluedark-investy">
				<div className="align-start d-flex">
					<div className="btn-group dropend">
						<a
							onMouseOver={() => {
								setDropend(!dropend);
							}}
							onMouseOut={() => {
								setDropend(!dropend);
							}}
							type="a"
							className="btn dropdown-toggle fs-5 text-white buttom-nsi my-2"
							data-bs-toggle="dropdown">
							<span id="span9" />
							<span id="span10" />
							<span id="span11" />
							<span id="span12" />
							Contacto
						</a>
					</div>
					<ul className={"dropdown-menu" + (dropend ? "dropend" : "")}>
						<a className="dropdown-item " href="#">
							<div className="container text-white row row-cols-4 mt-2 text-start">
								<>Teléfono:</>
								<span className="text-muted col"> (+34) 910 000 000</span>
								<>Horario de atención al cliente:</>
								<span className="text-muted col"> 24 horas, 365 dias al año.</span>
							</div>
						</a>
					</ul>
				</div>
				<div className=" container-fluid d-flex">
					<span className="encuentranos text-white">Encuéntranos en:</span>
					<span className="navbar-brand social-buttons d-flex">
						<a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
							<button
								className="navbar-toggler social-buttons__button social-button social-button--instagram"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#navbarSupportedContent"
								aria-controls="navbarSupportedContent"
								aria-expanded="false"
								aria-label="Toggle navigation">
								<i className="fab fa-instagram fs-5" />
							</button>
						</a>
						<a href="https://twitter.com/?lang=en" target="_blank" rel="noopener noreferrer">
							<button
								className="navbar-toggler social-buttons__button social-button social-button--twitter"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#navbarSupportedContent"
								aria-controls="navbarSupportedContent"
								aria-expanded="false"
								aria-label="Toggle navigation">
								<i className="fab fa-twitter fs-5" />
							</button>
						</a>
						<a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
							<button
								className="navbar-toggler social-buttons__button social-button social-button--facebook"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#navbarSupportedContent"
								aria-controls="navbarSupportedContent"
								aria-expanded="false"
								aria-label="Toggle navigation">
								<i className="fab fa-facebook fs-5" />
							</button>
						</a>
						<a href="https://mail.google.com/mail/u/0/" target="_blank" rel="noopener noreferrer">
							<button
								className="navbar-toggler social-buttons__button social-button social-button--mail"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#navbarSupportedContent"
								aria-controls="navbarSupportedContent"
								aria-expanded="false"
								aria-label="Toggle navigation">
								<i className="fas fa-envelope fs-5" />
							</button>
						</a>
						<a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
							<button
								className="navbar-toggler social-buttons__button social-button social-button--youtube"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#navbarSupportedContent"
								aria-controls="navbarSupportedContent"
								aria-expanded="false"
								aria-label="Toggle navigation">
								<i className="fab fa-youtube fs-5" />
							</button>
						</a>
						<a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
							<button
								className="navbar-toggler social-buttons__button social-button social-button--linkedin"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#navbarSupportedContent"
								aria-controls="navbarSupportedContent"
								aria-expanded="false"
								aria-label="Toggle navigation">
								<i className="fab fa-linkedin-in fs-5" />
							</button>
						</a>
					</span>
				</div>
			</div>
		</footer>
	);
};

export default FooterFixed;