const SUPABASE_URL = 'https://hblfwxkzbpedcnqbkubv.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhibGZ3eGt6YnBlZGNucWJrdWJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjA2NjkxNDUsImV4cCI6MTk3NjI0NTE0NX0.p3bj3QjwMYYomNqr7_cSg9sHXTOO2GUa8AZaT17dxkc';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* Auth related functions */

export function getUser() {
    return client.auth.user();
}

export function checkAuth() {
    const user = getUser();
    if (!user) location.replace(`/auth/?redirectUrl=${encodeURIComponent(location)}`);
    return user;
}

export async function signUpUser(email, password) {
    return await client.auth.signUp({ email, password });
}

export async function signInUser(email, password) {
    return await client.auth.signIn({ email, password });
}

export async function signOutUser() {
    return await client.auth.signOut();
}

/* Helper for logging errors */

function checkError({ data, error }) {
    // eslint-disable-next-line no-console
    return error ? console.error(error) : data;
}

/* Categories */

export async function getCategories() {
    const response = await client.from('categories').select('*');
    return checkError(response);
}

/* Posts */

export async function getPosts() {
    const response = await client.from('posts').select(`
        *,
        category:categories(*)
    `);
    return checkError(response);
}

export async function createPost(post) {
    return await client.from('posts').insert(post);
}

export async function getPost(id) {
    const response = await client.from('posts').select(`
    *,
    category:categories(*)
`).match({ id }).single();
    return response.data; 
}

export async function deletePostById(id) {
    const response = await client.from('posts').delete().match({ id });
    return response.data;
}

// export function checkAuth() {
//     const user = checkAuth();
//     return user;

// }