<template>
    <v-card class="my-2">
        <v-card-text>
            <i>({{ message.id }})</i>
            {{ message.text }}
        </v-card-text>
        <media v-if="message.link" :message="message"></media>
        <v-card-actions>
            <v-btn value="Edit" @click="edit" small rounded>Edit</v-btn>
            <v-btn icon @click="del" small rounded>
                <v-icon>mdi-delete</v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>

</template>

<script>
    import {mapActions} from 'vuex'
    import Media from "../media/Media.vue";
    export default {
        props: ['message', 'editMessage'],
        components: {Media},
        methods: {
            ...mapActions(['removeMessageAction']),
            edit() {
                this.editMessage(this.message);
            },
            del() {
                this.removeMessageAction(this.message);
            }
        }
    }
</script>

<style>
</style>