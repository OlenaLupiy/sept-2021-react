import {Route, Routes, Navigate} from 'react-router-dom'
import {Layout} from "./сomponents";
import {GenresPage, MovieDetailsPage, MoviesPage, NotFoundPage} from "./pages";

export default function App() {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Navigate to={'movies'}/>}/>
                    <Route path={'movies'} element={<MoviesPage/>}/>
                    <Route path={'movies/:id'} element={<MovieDetailsPage/>}/>
                    <Route path={'genres'} element={<GenresPage/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </div>
    )
}