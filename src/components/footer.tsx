import "../css/footer.css";
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

function Footer() {
	return (
		<div className="footer">
			<div className="footer-grid">
				<ul className="flex">
					<li className="main-info">&nbsp;&nbsp;follow us</li>
					<li>
						<a href="https://github.com/alhamdu-e">
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<FaInstagram /> instagram
						</a>
					</li>
					<li>
						<a href="https://github.com/alhamdu-e">
							&nbsp;&nbsp;
							<FaLinkedin /> LinkedIn
						</a>
					</li>
					<li>
						<a href="https://github.com/alhamdu-e">
							<FaTwitter /> twitter
						</a>
					</li>
					<li>
						<a href="https://github.com/alhamdu-e">
							<FaGithub /> github
						</a>
					</li>
				</ul>

				<ul className="flex">
					<li className="main-info">contact</li>

					<li>
						<a href="https://github.com/alhamdu-e">
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;movieradar.com{" "}
						</a>
					</li>
					<li>
						{" "}
						<a href="https://github.com/alhamdu-e">+2514675906</a>
					</li>
					<li>
						{" "}
						<a href="https://github.com/alhamdu-e">+2511890634</a>
					</li>
					<li>
						{" "}
						<a href="https://github.com/alhamdu-e">+2512785606</a>
					</li>
				</ul>

				<ul className="flex">
					<li className="main-info">company</li>
					<li>
						<a href="https://github.com/alhamdu-e">&nbsp;&nbsp;services </a>
					</li>
					<li>
						<a href="https://github.com/alhamdu-e">&nbsp;contact</a>
					</li>
					<li>
						<a href="https://github.com/alhamdu-e">about</a>
					</li>
					<li>
						<a href="https://github.com/alhamdu-e">home </a>
					</li>
				</ul>

				<ul className="flex">
					<li className="main-info">service</li>
					<li>
						<a href="https://github.com/alhamdu-e">
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ratings
							and Reviews{" "}
						</a>
					</li>
					<li>
						<a href="https://github.com/alhamdu-e">Movie Search </a>
					</li>
					<li>
						<a href="https://github.com/alhamdu-e">Movie Details</a>
					</li>
					<li>
						<a href="https://github.com/alhamdu-e">
							Trailers&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						</a>
					</li>
				</ul>
			</div>
			<p className="copyright">
				Copyright &copy; <span className="year">2023</span> by MovieRadar.All
				right reserved
			</p>
		</div>
	);
}
export default Footer;
