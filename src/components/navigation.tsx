import { Link } from "react-router-dom";
import "../css/navagiation.css";
type FormProps = {
	howitworks: React.RefObject<HTMLDivElement>;
	movie: React.RefObject<HTMLDivElement>;
};
function Nav({ howitworks, movie }: FormProps) {
	const howwork = () => {
		if (howitworks.current) {
			window.scrollTo({
				top: howitworks.current.offsetTop,
				behavior: "smooth",
			});
		}
	};
	const featuer = () => {
		if (movie.current) {
			window.scrollTo({
				top: movie.current.offsetTop,
				behavior: "smooth",
			});
		}
	};
	return (
		<div className="nav-container">
			<div className="logo-cont">
				<img src="./images/logo6.png" alt="logo" className="logo" />{" "}
				<span>movieradar</span>
			</div>

			<nav>
				<ul className="nav-list">
					<li>
						<a href="#" onClick={featuer}>
							popular movie
						</a>
					</li>
					<li>
						<a href="#" onClick={howwork}>
							how it works
						</a>
					</li>

					<li>
						<Link to={"/searchmovies"} className="tryit">
							{" "}
							try for free
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Nav;
