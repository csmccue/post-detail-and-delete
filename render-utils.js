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
        categoryEl.classList.add('category');
        categoryEl.title = post.category.name;
        categoryEl.textContent = post.category.emoji;

        const descriptionEl = document.createElement('p');
        descriptionEl.classList.add('description');
        descriptionEl.textContent = post.description;

        const contactEl = document.createElement('p');
        contactEl.textContent = post.contact;

        li.append(titleEl, categoryEl, descriptionEl, contactEl);

        fragment.append(a);
        a.append(li);
    }

    return fragment;
}

export function renderDetails(post) {
    const div = document.createElement('div');
    const titleEl = document.createElement('p');
    const descriptionEl = document.createElement('p');   
    const categoryEl = document.createElement('p');

    titleEl.textContent = `${post.title}`;
    descriptionEl.textContent = `${post.description}`;
    categoryEl.textContent = `${post.category.emoji}`;

    div.append(titleEl, descriptionEl, categoryEl);
    return div;
}