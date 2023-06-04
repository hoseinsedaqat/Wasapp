import { inbox_message } from '@/data/inboxMessage';
import { defineStore } from 'pinia';
import moment from 'moment';

export const chats = defineStore('chats', {
    state:() => ({
        add_message: '',
        inbox_message,
    }),
    getters:{
        get_inboxMessage: (state) => state.inbox_message
    },
    actions:{
        send_message(id:string){
            this.inbox_message.forEach(userData => {
                if(id === userData.userId){
                    userData.chats.push({
                        end: this.add_message,
                        end_time: moment().format("h:mm")
                    })
                }
            })
            this.add_message = ""
        },
    }
})