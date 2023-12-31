import React, { createContext, useContext, useState, ReactNode } from "react";
interface MovieSearchResult {
	id: number;
	title: string;
	poster_path: string;
	vote_average: number;
	backdrop_path: string;
	release_date: string;
	overview: string;
}

interface MovieContextValue {
	selectedMovieTitle: String | null;
	selectedMovieOverview: String | null;
	selectedMovieYear: String | null;
	selectedMovieBackdrop: String | null;
	selectedMovieId: Number | null;
	selectMovie: (
		id: Number,
		title: string,
		path: string,
		yera: string,
		overvieww: string
	) => void;
	movieResults: MovieSearchResult[]; // Add a field for movie search results
	setMovieResults: React.Dispatch<React.SetStateAction<MovieSearchResult[]>>; // Add a setter function for movie search results
}

const MovieContext = createContext<MovieContextValue | undefined>(undefined);

export function useMovieContext(): MovieContextValue {
	const context = useContext(MovieContext);
	if (context === undefined) {
		throw new Error("useMovieContext must be used within a MovieProvider");
	}
	return context;
}

interface MovieProviderProps {
	children: ReactNode;
}

export function MovieProvider({ children }: MovieProviderProps): JSX.Element {
	const [selectedMovieId, setSelectedMovieId] = useState<Number | null>(null);
	const [selectedMovieTitle, setSelectedMovieTitle] = useState<String | null>(
		null
	);
	const [selectedMovieBackdrop, setselectedMovieBadop] =
		useState<String | null>(null);
	const [selectedMovieYear, setselectedMovieYear] = useState<String | null>(
		null
	);
	const [selectedMovieOverview, setselectedMovieOverview] =
		useState<String | null>(null);

	const [movieResults, setMovieResults] = useState<MovieSearchResult[]>([]); // Initialize movie search results as an empty array

	const selectMovie = (
		id: Number,
		title: string,
		path: string,
		year: string,
		overvieww: string
	) => {
		setSelectedMovieId(id);
		setSelectedMovieTitle(title);
		setselectedMovieBadop(path);
		setselectedMovieYear(year);
		setselectedMovieOverview(overvieww);
	};

	const contextValue: MovieContextValue = {
		selectedMovieId,
		selectedMovieBackdrop,
		selectedMovieTitle,
		selectedMovieYear,
		selectedMovieOverview,
		selectMovie,
		movieResults, // Include movie search results in the context value
		setMovieResults, // Include the setter function for movie search results
	};

	return (
		<MovieContext.Provider value={contextValue}>
			{children}
		</MovieContext.Provider>
	);
}
