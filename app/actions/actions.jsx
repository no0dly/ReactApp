export var addUsers = (users) => {
    return {
        type: 'ADD_USERS',
        users
    }
}

export var toggleModal = () => {
    return {
        type: 'TOGGLE_MODAL'
    }
}

export var addNews = (title, description) => {
    return {
        type: 'ADD_NEWS',
        title,
        description
    }
}

export var addInitNews = (initNews) => {
    return {
        type: 'ADD_INITIAL_NEWS',
        initNews
    }
}

export var removeNews = (id) => {
    return {
        type: 'REMOVE_NEWS',
        id
    }
}

export var editNews = (id) => {
    return {
        type: 'EDIT_NEWS',
        id
    }
}

export var saveNews = (id, newTitle, newDescription) => {
    return {
        type: 'SAVE_NEWS',
        id,
        title: newTitle,
        description: newDescription
    }
}

export var searchNews = (searchText) => {
    return {
        type: 'SEARCH_NEWS',
        searchText
    }
}
