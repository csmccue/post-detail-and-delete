//import { deletePostById } from './fetch-utils.js';

export function renderCategoryOptions(categories) {
    // document fragment is a "bag" for elements
    const fragment = document.createDocumentFragment();

    for (const category of categories) {
        const option = document.createElement('option');
        option.value = category.id;
        option.textContent = `${category.emoji} ${category.name}`;
        fragment.append(option);
    }

    return fragment;
}

export function renderPosts(posts) {
    const fragment = document.createDocumentFragment();

    for (const post of posts) {
        const a = document.createElement('a');
        a.href = `./detail/?id=${post.id}`;
        
        const li = document.createElement('li');
        li.classList.add('post-it');

        const titleEl = document.createElement('h2');
        titleEl.textContent = post.title;

        const categoryEl = document.createElement('span');
        //categoryEl.classList.add('category');
        categoryEl.title = post.category.name;
        // here i grab category name but it doesnt show up in final
        categoryEl.textContent = post.category.emoji;

        const descriptionEl = document.createElement('p');
       // descriptionEl.classList.add('description');
        descriptionEl.textContent = post.description;

        const contactEl = document.createElement('p');
        contactEl.textContent = post.contact;

        li.append(titleEl, categoryEl, descriptionEl, contactEl);
        // no category title and no contact info in final post it
        fragment.append(a);
        a.append(li);
    }

    return fragment;
}

export function renderDetails(post) {
    const div = document.createElement('div');
    div.classList.add('post-it');
    const titleEl = document.createElement('h3');
    const descriptionEl = document.createElement('description');  
    descriptionEl.classList.add('description');
        //not showing description css
    const categoryEl = document.createElement('h4');
    categoryEl.classList.add('category');
        //not showing category-detail css

    titleEl.textContent = `${post.title}`;
    descriptionEl.textContent = `${post.description}`;
    categoryEl.textContent = `${post.category.emoji}`;

    div.append(categoryEl, titleEl, descriptionEl);
    return div;
}

export function renderProfile(profile) {
    const div = document.createElement('div');
    const profileNameEl = document.createElement('p');
    const profileAvatarEl = document.createElement('p');
    const profileBioEl = document.createElement('p');

    profileNameEl.textContent = profile.username;
    profileAvatarEl.textContent = profile.avatar;
    profileBioEl.textContent = profile.bio;

    div.append(profileNameEl, profileAvatarEl, profileBioEl);
    return div;
}

export function renderUser(id) {
    const div = document.createElement('div');
    div.classList.add('user-class');
    const userNameEl = document.createElement('p');
    const userAvatarEl = document.createElement('p');
    const userBioEl = document.createElement('p');
    userNameEl.textContent = 'Username: ' + id.user_name;
    if (id.user_name === '') {
        userNameEl.textContent = 'No Username';
    }
    userAvatarEl.textContent = 'Avatar: ' + id.avatar_url;
    if (id.avatar_url === '') {
        userAvatarEl.textContent = 'No Avatar';
    }
    userBioEl.textContent = 'Bio: ' + id.bio;
    if (id.bio === '') {
        userNameEl.textContent = 'No Bio';
    }
    div.append(userNameEl, userAvatarEl, userBioEl);
    return div;

}