import Footer from "./footer";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";

import "../css/login.css";
function Login() {
	return (
		<div className="login">
			<div className="logo-cont logo-lin">
				<img src="./images/logo6.png" alt="logo" className="logo" />{" "}
				<span>movieradar</span>
			</div>

			<div className="form-cont">
				<FaUserCircle className="icon" />
				<form className="form">
					<div>
						<AiOutlineMail className="in-icon" />{" "}
						<input
							type="email"
							placeholder="email"
							name="email"
							className="input"
						/>
					</div>
					<div>
						<RiLockPasswordLine className="in-icon" />{" "}
						<input
							type="password"
							name="password"
							placeholder="password"
							className="input"
						/>
					</div>
					<div>
						{" "}
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<button type="submit" className="login-btn">
							Login
						</button>
					</div>
					<div>
						<a href="forget1.html" className="forget">
							foreget password?
						</a>
						<h5>
							Don't have an account?
							<Link to={"/signup"} className="create">
								create new
							</Link>
						</h5>
					</div>
				</form>
			</div>
			<Footer></Footer>
		</div>
	);
}
export default Login;
