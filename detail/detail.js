import { getPost } from '../fetch-utils.js';
import { renderDetails } from '../render-utils.js';

//console.log('we are inside the detail.js stuff');

const params = new URLSearchParams(window.location.search);
const postItDetailContainer = document.getElementById('dog-detail-container');

async function loadData() {
    const data = await getPost(params.get('id'));
    //console.log(data); // defined!
    const dogDiv = renderDetails(data);
    postItDetailContainer.append(dogDiv);
}
loadData();
// NEED NEW FETCH FOR 
// on load
// get the id from URL
// use the id to fetch the dog
// render and append this dog's details to the container
