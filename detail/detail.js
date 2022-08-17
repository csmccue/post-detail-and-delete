import { getPost } from '../fetch-utils.js';
import { renderDetails } from '../render-utils.js';

//console.log('we are inside the detail.js stuff');

const params = new URLSearchParams(window.location.search);
const postItDetailContainer = document.getElementById('post-it-details');

async function loadData() {
    const data = await getPost(params.get('id'));
    console.log(data);
    const postDiv = renderDetails(data);
    postItDetailContainer.append(postDiv);
}
loadData();
