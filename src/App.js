import {Route, Routes} from 'react-router-dom'
import {Layout} from "./сomponents";
import {GenreMoviePage, GenrePage, MovieDetailsPage, MoviesPage, NotFoundPage} from "./pages";

export default function App() {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'movies'} element={<MoviesPage/>}>
                        <Route path={':id'} element={<MovieDetailsPage/>}/>
                    </Route>
                    <Route path={'genre'} element={<GenrePage/>}>
                        <Route path={':id'} element={<GenreMoviePage/>}/>
                    </Route>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </div>
    )
}