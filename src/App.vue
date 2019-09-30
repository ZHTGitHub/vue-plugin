<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <h1>基于vue开发一个全局Modal对话框插件</h1>
        <a-button type="primary" @click="_open()">open modal</a-button>
    </div>
</template>

<script>

    export default {

        name: 'app',

        methods: {
            _open() {
                this.$modal({
                    visible: true,
                    title: '这里是标题',
                    content: '这里是内容...',
                    cancel() {
                        console.warn('cancel callback')
                    },
                    confirm() {
                        console.warn('confirm callback')
                    }
                })
            }
        }
    }

</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
