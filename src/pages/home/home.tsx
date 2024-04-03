import { Carousel } from "./carousel";
import { MovieList } from "./movie-list/movie-list";

export default function Home() {
    return (
        <div>
            <Carousel />
            <MovieList/>
        </div>
    );
}
