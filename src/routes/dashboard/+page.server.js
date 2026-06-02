import { SUPABASE_URL, SUPABASE_ANON_KEY } from '$env/static/private'

// fetch user info
export async function load() {

    // for now manuel id
    const userId = 10

    const userResponse = await fetch(SUPABASE_URL + '/rest/v1/user?id=eq.' + userId + '&select=name,lastname,start_weight,start_bodyfat,start_waist,resting_heart_rate,created_at', {
        headers: {
            'apikey': SUPABASE_ANON_KEY,
            'Authorization': SUPABASE_ANON_KEY,
        }
    })

    const userData = await userResponse.json()
    console.log(userData)

    // --------------------------

    // fetch chart data
    const user = userData[0]

    const pictureResponse = await fetch(SUPABASE_URL + '/rest/v1/picture?user_id=eq.' + userId + '&select=weight,waist,body_fat,heart_rate&order=created_at.desc&limit=7', {
        headers: {
            'apikey': SUPABASE_ANON_KEY,
            'Authorization': SUPABASE_ANON_KEY,
        }
    })

    const pictureData = await pictureResponse.json()
    const pictures = pictureData

    // create array for values
    const weights = pictures.map(picture => picture.weight)
    const waists = pictures.map(picture => picture.waist)
    const bodyfats = pictures.map(picture => picture.body_fat)
    const heartrates = pictures.map(picture => picture.heart_rate)


    return { user, pictures, weights, waists, bodyfats, heartrates }

}