import "../css/movi-seach.css";
import Footer from "./footer";
import { useState } from "react";
import "../css/navagiation.css";
import { BiSearchAlt2 } from "react-icons/bi";

import { Link } from "react-router-dom";
import { useMovieContext } from "./movecontext";
import "../css/feature.css";

function Movie() {
	const [movieTitle, setmovieTitle] = useState("");
	const { selectMovie, movieResults, setMovieResults } = useMovieContext();

	const [totalPage, setTotalPages] = useState(0);
	const [currentPages, setCurrentPages] = useState(1);
	const [displayPagination, setDisplayPaginatinn] = useState(false);
	const [catValue, setCatValue] = useState("");
	const [booll, setbool] = useState(false);

	const getMovieTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
		setmovieTitle(event.target.value);
	};

	const serachMovie = () => {
		setbool(true);
		setCurrentPages(1);
		if (movieTitle !== "") {
			setDisplayPaginatinn(true);
		}
		if (movieTitle === "") {
			setDisplayPaginatinn(false);
		}
		fetchMovie(currentPages);
	};

	const nextPages = () => {
		if (currentPages < totalPage) {
			const next = currentPages + 1;
			setCurrentPages(next);
			if (booll) {
				fetchMovie(next);
			}
			if (!booll) {
				fetch(
					"https://api.themoviedb.org/3/discover/movie?api_key=3200199c2fcf2132eb0515137cf44f9d&with_genres=" +
						catValue +
						"&page=" +
						next
				)
					.then((response) => response.json())
					.then((data) => {
						setMovieResults(data.results);
						setTotalPages(data.total_pages);
					});
			}
		}
	};
	const previosPages = () => {
		if (currentPages > 1) {
			const prev = currentPages - 1;
			setCurrentPages(prev);
			if (booll) {
				fetchMovie(prev);
			}
			if (!booll) {
				fetch(
					"https://api.themoviedb.org/3/discover/movie?api_key=3200199c2fcf2132eb0515137cf44f9d&with_genres=" +
						catValue +
						"&page=" +
						prev
				)
					.then((response) => response.json())
					.then((data) => {
						setMovieResults(data.results);
						setTotalPages(data.total_pages);
					});
			}
		}
	};
	const fetchMovie = (page: Number) => {
		fetch(
			"https://api.themoviedb.org/3/search/movie?query=" +
				movieTitle +
				"&api_key=3200199c2fcf2132eb0515137cf44f9d&page=" +
				page
		)
			.then((response) => response.json())
			.then((data) => {
				setMovieResults(data.results);
				setTotalPages(data.total_pages);
			});
	};
	const fetchMovieByCatagories = (catagories: String) => {
		console.log(catagories);
		if (catagories !== "") {
			fetch(
				"https://api.themoviedb.org/3/discover/movie?api_key=3200199c2fcf2132eb0515137cf44f9d&with_genres=" +
					catagories +
					"&page=" +
					currentPages
			)
				.then((response) => response.json())
				.then((data) => {
					setMovieResults(data.results);
					setTotalPages(data.total_pages);
				});
		}
		if (catagories === "") {
			setDisplayPaginatinn(false);
			setMovieResults([]);
		}
	};

	return (
		<div className="movie-search">
			<div className="serach-nav">
				<div className="logo-cont logo-link">
					<span>movieradar</span>
				</div>
				<div>
					<input
						type="text"
						className="search-text"
						autoFocus
						placeholder="Search "
						onChange={getMovieTitle}
					/>

					<button className="btn-serach" onClick={serachMovie}>
						<BiSearchAlt2 />
					</button>
				</div>
				<div className="catagoris-container">
					<select
						className="select"
						onChange={(e) => {
							setbool(false);
							setCurrentPages(1);
							setDisplayPaginatinn(true);
							setCatValue(e.target.value);
							fetchMovieByCatagories(e.target.value);
						}}>
						<option value=""> Catagories</option>
						<option value="28">Action</option>
						<option value="12">Adventure</option>
						<option value="16">Animation</option>
						<option value="27">Horor</option>
						<option value="10402">Music</option>
						<option value="10752">war</option>
						<option value="10749">Romance</option>
					</select>
				</div>
			</div>
			{displayPagination && (
				<div className="pagination">
					<button className="btn-pagination next" onClick={previosPages}>
						Prve
					</button>
					<button
						className={`btn-pagination ${currentPages === 1 ? "active" : ""}`}>
						{1}
					</button>
					<button
						className={`btn-pagination ${currentPages === 2 ? "active" : ""}`}>
						{2}
					</button>
					<button
						className={`btn-pagination ${currentPages === 3 ? "active" : ""}`}>
						{3}
					</button>
					<button
						className={`btn-pagination ${
							currentPages > 3 ? "active" : ""
						}`}>{`${currentPages > 3 ? `${currentPages}` : "4"}`}</button>
					<button className="btn-pagination next" onClick={nextPages}>
						Next
					</button>
				</div>
			)}
			<div className="feature-container feature-conta">
				{movieResults
					.filter((Movie) => {
						if (Movie.poster_path) {
							return true;
						}
					})
					.map((movie) => {
						let date = "";
						let bool = false;
						if (!movie.release_date) {
							date = "04/06/1978";
							bool = true;
						}

						let year, da, mn, yr;
						if (movie.release_date) {
							year = movie.release_date.split("-");
							[yr, mn, da] = year;
						}

						return (
							<Link
								to={"/moviedetails"}
								onClick={() =>
									selectMovie(
										movie.id,
										movie.title,
										movie.poster_path,
										movie.release_date,
										movie.overview
									)
								}>
								<div className="movie">
									<img
										src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
										className="feature-img search-img"
										alt=""
									/>
									<h2 className="feature-title serach-title">{movie.title}</h2>
									<h2 className="feature-rating serache-rating">
										<span className="star">&#9733;&#9733;&#9733; </span>{" "}
										{movie.vote_average.toFixed(1)}
									</h2>
									<span className="feature-released-year">
										{`${bool ? `${date}` : `${da}/${mn}/${yr}`}`}
									</span>
								</div>
							</Link>
						);
					})}
			</div>
			<h1 className="motivater">
				{`${
					!displayPagination
						? "Get Ready for a Cinematic Adventure – Search by Title Now"
						: "Discover movies like never before. Thanks for choosing us!"
				}`}
			</h1>

			<div className="footer-cont">
				<Footer></Footer>
			</div>
		</div>
	);
}
export default Movie;
