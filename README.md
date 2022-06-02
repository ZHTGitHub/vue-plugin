# 基于vue开发一个全局Modal对话框插件

### How to use
```
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
```
