import Footer from "./footer";
import { BiSolidUserPlus } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "../css/login.css";
function Signup() {
	return (
		<div className="login">
			<Link to={"/"}>
				<div className="logo-cont logo-lin">
					<img src="./images/logo6.png" alt="logo" className="logo" />{" "}
					<span>movieradar</span>
				</div>
			</Link>
			<div className="form-cont">
				<BiSolidUserPlus className="icon" />
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
							Register
						</button>
					</div>
					<div>
						<a href="https://github.com/alhamdu-e" className="forget">
							Read terms and condition
						</a>
						<h5>
							Don't have an account?
							<Link to={"/login"} className="create">
								Login
							</Link>
						</h5>
					</div>
				</form>
			</div>
			<Footer></Footer>
		</div>
	);
}
export default Signup;
