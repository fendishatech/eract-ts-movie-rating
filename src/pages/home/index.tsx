import { useState } from "react"
import { Button, ButtonGroup } from "semantic-ui-react"
import ColumnDisplay from "./column-display";
import { DisplayType } from "./interfaces";
import { fetchMovies, fetchTvShows } from "./query";
import { useQuery } from "@tanstack/react-query";


const Home = () => {
    const [displayType, setDisplayType] = useState<DisplayType>(DisplayType.Movies);

    const { data: moviesData, isLoading: isMoviesLoading } = useQuery({
        queryKey: ['movies'],
        queryFn: fetchMovies,

    });
    const { data: tvShowsData, isLoading: isTvShowsLoading } = useQuery({
        queryKey: ['movies'],
        queryFn: fetchTvShows,

    });
    return (
        <div style={{ marginTop: 50, height: "auto" }}>
            <ButtonGroup>
                <Button color={displayType === DisplayType.Movies ? 'blue' : undefined} onClick={() => setDisplayType(DisplayType.Movies)}>Movies</Button>
                <Button color={displayType === DisplayType.TvShows ? 'blue' : undefined} onClick={() => setDisplayType(DisplayType.TvShows)}>TvShows</Button>
            </ButtonGroup>
            {
                isMoviesLoading || isTvShowsLoading ?
                    <div>Loading ...</div> :
                    (
                        <div style={{ marginTop: 50 }}>
                            {
                                displayType === DisplayType.Movies ?
                                    <ColumnDisplay data={moviesData.results} displayType={DisplayType.Movies} /> :
                                    <ColumnDisplay data={tvShowsData.results} displayType={DisplayType.TvShows} />}
                        </div>
                    )
            }
        </div>
    )
}

export default Home