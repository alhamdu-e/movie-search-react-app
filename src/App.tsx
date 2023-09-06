import Header from "./components/header";
import Feature from "./components/feature";
import How from "./components/howitworks";
import Movie from "./components/searchmovie";
import { MovieProvider } from "./components/movecontext";
import MovieDetail from "./components/moviedetails";

import { useState, useEffect, useRef } from "react";
import { HashRouter as Routes, Route } from "react-router-dom";

interface Movie {
	id: Number;
	title: string;
	poster_path: string;
	vote_average: Number;
	release_date: String;
}

function App() {
	const howitworks = useRef<HTMLDivElement | null>(null);
	const moviee = useRef<HTMLDivElement | null>(null);

	const [feature, setFeature] = useState<Movie[]>([]);
	useEffect(() => {
		fetch(
			"https://api.themoviedb.org/3/movie/popular?api_key=3200199c2fcf2132eb0515137cf44f9d"
		)
			.then((response) => response.json())
			.then((data) => {
				const movies = data.results; // Assuming 'results' is the key containing the movie list
				setFeature(movies);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div>
			<MovieProvider>
				<Routes>
					<Route path="/moviedetails" element={<MovieDetail />}></Route>
					<Route path="/searchmovies" element={<Movie />}></Route>
					<Route
						path="*"
						element={
							<div>
								<Header howitworks={howitworks} movie={moviee}></Header>
								<div className="feature-container" ref={moviee}>
									{feature
										.filter((movie) => {
											return movie.title.length < 29;
										})
										.slice(0, 15)
										.map((movie) => (
											<Feature
												id={movie.id}
												title={movie.title}
												rating={movie.vote_average}
												year={movie.release_date}
												image={movie.poster_path}
											/>
										))}
								</div>
								<How howitworks={howitworks} />
							</div>
						}></Route>
				</Routes>
			</MovieProvider>
		</div>
	);
}

export default App;
