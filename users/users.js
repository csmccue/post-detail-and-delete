// import
// auth related (checkAuth, signOutUser)
import { getProfiles } from '../fetch-utils.js';
import { renderUser } from '../render-utils.js';

const userListEl = document.getElementById('user-list');
console.log(userListEl);

async function loadUsers() {
    const data = await getProfiles();
    console.log(data);
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
