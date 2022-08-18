import { checkAuth, getPost, deletePostById } from '../fetch-utils.js';
import { renderDetails } from '../render-utils.js';
//import { displayPosts } from '/app.js';

//console.log('we are inside the detail.js stuff');

const params = new URLSearchParams(window.location.search);
const postItDetailContainer = document.getElementById('post-it-details');

async function loadData() {
    const data = await getPost(params.get('id'));
    const postDiv = renderDetails(data);
    postItDetailContainer.append(postDiv);


    const user = checkAuth();
    
    // console.log(user.id);
    // console.log(data.user_id);

    if (user.id === data.user_id) {
        const deleteButtonEl = document.createElement('button');
       // deleteButtonEl.classList.add('delete-button');
        deleteButtonEl.textContent = 'DELETE THIS';
        
        deleteButtonEl.addEventListener('click', async () => {
            await deletePostById(data.id);
            location.replace(`../`);
         //   displayPosts();
        });
        postItDetailContainer.append(deleteButtonEl);
    }
}
loadData();
