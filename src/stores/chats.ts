import { inbox_message } from '@/data/inboxMessage';

import { useToast } from 'vue-toastification';

import { defineStore } from 'pinia';

import moment from 'moment';

const toast = useToast();

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
            if(this.add_message === "" || this.add_message.trim() === ""){
                toast.error('Please Enter Something 💀')
            }else{
                this.inbox_message.forEach(userData => {
                    if(id === userData.userId){
                        userData.chats.push({
                            end: this.add_message,
                            end_time: moment().format("h:mm a")
                        })
                    }
            })
            // add to utils
            document.querySelector('#chat aside:nth-child(2)')?.scrollTo(0,9999)
            }
            this.add_message = ""
        },
    }
})