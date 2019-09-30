<template>
    <div class="modal-plugin">
        <a-modal
            :title="title"
            v-model="visible"
            cancelText="取消"
            okText="确认"
            @cancel="_cancel($event)"
            @ok="_confirm($event)"
        >
            <p>{{ content }}</p>
        </a-modal>
    </div>
</template>

<script>

    export default {
        
        name: 'Modal',

        data() {
            return {
                visible: false,
                title: '',
                content: ''
            }
        },

        methods: {

            _cancel(e) {
                this.$modal.cancel()
            },
            
            _confirm(e) {
                this.$modal.confirm()
                this.visible = false
            }

        }

    }

</script>

