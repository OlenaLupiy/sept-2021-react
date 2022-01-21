import {Routes, Route, Navigate} from 'react-router-dom';

import {Layout} from './components';
import {
    NotFoundPage,
    PostCommentsPage,
    PostDetailsPage,
    PostsPage,
    UserDetailsPage,
    UserPostsPage,
    UsersPage
} from "./pages";

export default function App() {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Navigate to={'users'}/>}/>

                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<UserDetailsPage/>}>
                            <Route path={'posts'} element={<UserPostsPage/>}/>
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