import { saveProfile, getProfile, getUser } from '../fetch-utils.js';

const form = document.getElementById('update-form');
const usernameEl = document.getElementById('username');
const bioEl = document.getElementById('bio');
const avatarEl = document.getElementById('avatar');

const user = getUser();
// const updateProfileButtonEl = document.getElementById('update-profile-button');

async function updateProfile() {
    const profile = await getProfile(user.id);
    if (profile) {
        usernameEl.value = profile.user_name;
        avatarEl.value = profile.avatar_url;
        bioEl.value = profile.bio;
    }
    console.log(profile);
}

form.addEventListener('submit', async (e) => { 
    e.preventDefault();
    const data = new FormData(form);
    const username = data.get('username');
    const avatar = data.get('avatar');
    const bio = data.get('bio');

    await saveProfile({ 
        id: user.id, 
        user_name: username,
        avatar_url: avatar,
        bio: bio,
    });
    form.reset();
    updateProfile();
});
updateProfile();