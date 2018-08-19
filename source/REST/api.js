import { MAIN_URL, TOKEN } from "./config";
export const api = {
    async fetchPosts () {
        const response = await fetch(MAIN_URL, {
            method: 'GET',
        });
        if (response.status != 200) {
            throw new Error("Posts were not loaded!");
        }
        const {data:posts} = await response.json();
        return posts;
    }
};
