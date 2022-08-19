import { saveProfile, getProfile, getUser } from '../fetch-utils.js';
import { renderProfile } from '../render-utils.js';

const form = document.getElementById('update-form');
const usernameEl = document.getElementById('username');
const bioEl = document.getElementById('bio');

const user = getUser();
// const updateProfileButtonEl = document.getElementById('update-profile-button');

async function updateProfile() {
    const profile = await getProfile(user.id);
    console.log(profile);
    if (profile) {
        usernameEl.value = profile.user_name;
        bioEl.value = profile.bio;
    }
    // renderProfile(profile);
}

form.addEventListener('submit', async (e) => { 
    e.preventDefault();
    const data = new FormData(form);
    const username = data.get('username');
    const bio = data.get('bio');

    await saveProfile({ 
        id: user.id, 
        user_name: username,
        bio: bio,
    });
    form.reset();
    updateProfile();
});

updateProfile();