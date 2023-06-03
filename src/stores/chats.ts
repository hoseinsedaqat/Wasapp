import { inbox_message } from '@/data/inboxMessage';
import { defineStore } from 'pinia';

export const chats = defineStore('chats', {
    state:() => ({
        inbox_message,
    }),
    getters:{
        get_inboxMessage: (state) => state.inbox_message
    },
    actions:{}
})