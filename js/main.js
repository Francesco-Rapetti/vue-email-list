const { createApp } = Vue;

createApp({
    data() {
        return {
            mails: [],
        }
    },

    methods: {
    
    },

    mounted() {
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then( r => {
                this.mails.push(r.data.response);
            })
        }
    }
}).mount('#app')