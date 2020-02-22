import {
    SAVE_LISTID
} from './mutations-type'

export default {
    [SAVE_LISTID](state, listId) {
        state.listId = listId
    },
}