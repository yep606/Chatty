var messageApi = Vue.resource('/message{/id}');

Vue.component('message-row', {
    props: ['message'],
    template: '<div><i>({{message.id}}) </i>{{message.text}}</div>'
});

Vue.component('messages-list', {
    props: ['messages'],
    template: '<div>' +
        '<message-row v-for="mess in messages" v-bind:key="mess.id" :message="mess" />' +
        '</div>',
    created: function () {
        messageApi.get().then(result =>
            result.json().then(data =>
                data.forEach(message => this.messages.push(message))
            )
        )
    }
});

var app = new Vue({
    el: '#app',
    template: '<messages-list :messages="messages" />',
    data: {
        messages: []
    }
});