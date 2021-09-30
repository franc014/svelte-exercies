export async function get({ params }) {
    
    const baseEndpoint = 'https://api.edamam.com/api/recipes/v2';
    const appId = 'd0b9bc33';
    const apiKey = '29d26709fbffd2faf3f54a24d634312a';
    const res = await fetch( `${baseEndpoint}?q=${params.query}&type=public&app_id=${appId}&app_key=${apiKey}`);
    const recipes = await res.json();
    
    return {
        body: {
            recipes
        }
    }
}