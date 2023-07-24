import { getPostById,getAllPosts} from "./posts.actions";
import {PostsActionTypes} from "./actionTypes";


describe('Posts actions', () => {
    test('getPostById', () => {
        expect(getPostById('1')).toEqual( {
            payload:  {
                request:  {
                    method: "get",
                    url: "/posts/1",
                 },
            },
            type: PostsActionTypes.GET_POST_BY_ID,
    });
    });

    test('getAllPosts', () => {
        expect(getAllPosts()).toEqual(   {
            payload:  {
                request:  {
                    method: "get",
                    url: "/posts",
                },
            },
            type: PostsActionTypes.GET_ALL_POSTS}
        );
    });
});