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
