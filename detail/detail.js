import { checkAuth, getPost, deletePostById } from '../fetch-utils.js';
import { renderDetails } from '../render-utils.js';

const params = new URLSearchParams(window.location.search);
const postItDetailContainer = document.getElementById('post-it-details');

// const returnHomeLink = document.getElementById('return-home-link');
// returnHomeLink.addEventListener('click', returnHome);

async function loadData() {
    const data = await getPost(params.get('id'));
    const postDiv = renderDetails(data);
    postItDetailContainer.append(postDiv);


    const user = checkAuth();
    
    // console.log(user.id);
    // console.log(data.user_id);

    const returnHomeButtonEl = document.createElement('button');
    returnHomeButtonEl.textContent = 'RETURN HOME';

    returnHomeButtonEl.addEventListener('click', async () => {
        location.replace(`../`);
    });



    if (user.id === data.user_id) {
        const deleteButtonEl = document.createElement('button');
       // deleteButtonEl.classList.add('delete-button');
        deleteButtonEl.textContent = 'DELETE THIS';
        
        deleteButtonEl.addEventListener('click', async () => {
            await deletePostById(data.id);
            location.replace(`../`);
        });



        postItDetailContainer.append(deleteButtonEl);
    
    }
    postItDetailContainer.append(returnHomeButtonEl);
}


// async function returnHome() {
//     const returnHomeButtonEl = document.createElement('button');
//     returnHomeButtonEl.textContent = 'GO BACK TO BULLETIN';
//     location.replace(`../`);
// }
loadData();
