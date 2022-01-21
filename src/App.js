import {Route, Routes} from 'react-router-dom'
import {Layout} from "./components";
import {UsersPage, PostsPage, PostDetailsPage, PostCommentsPage, UserDetailsPage, UserPostsPage, UserAlbumsPage, PhotosPage, NotFoundPage} from "./pages";


export default function App() {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'users'} element={<UsersPage/>}>

                        <Route path={':id'} element={<UserDetailsPage/>}>
                            <Route path={'posts'} element={<UserPostsPage/>}/>
                        </Route>
                        <Route path={':id/albums'} element={<UserAlbumsPage/>}>
                            <Route path={':albumId/photos'} element={<PhotosPage/>}/>
                        </Route>

                    </Route>
                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<PostDetailsPage/>}>
                            <Route path={'comments'} element={<PostCommentsPage/>}/>
                        </Route>
                    </Route>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>



            </Routes>

        </div>
)
}