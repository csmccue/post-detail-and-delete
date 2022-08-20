// import
// auth related (checkAuth, signOutUser)
import { getProfiles } from '../fetch-utils.js';
import { renderUser } from '../render-utils.js';

const userListEl = document.getElementById('user-list');

async function loadUsers() {
    const data = await getProfiles();
    if (data) {
        for (let user of data) {
            const userDiv = renderUser(user);
            userListEl.append(userDiv);
        }
    } 
    else {
        userListEl.textContent = 'No Users';
    }
}
loadUsers();
