import { SUPABASE_URL, SUPABASE_ANON_KEY } from '$env/static/private'

// fetch user info
export async function load() {

    const userId = 10

    const userResponse = await fetch(SUPABASE_URL + '/rest/v1/user?id=eq.' + userId + '&select=name,lastname,start_weight,start_bodyfat,start_waist,resting_heart_rate,created_at', {
        headers: {
            'apikey': SUPABASE_ANON_KEY,
            'Authorization': SUPABASE_ANON_KEY,
        }
    })

    const userData = await userResponse.json()
    console.log(userData)
