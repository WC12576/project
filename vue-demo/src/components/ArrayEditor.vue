<template>
    <div>
        <h2>{{title}}</h2>
        <el-form>
            <div class="wrapper" v-for="(item,index) in items" v-bind:key="index">
                <el-form-item v-bind:label="labels[key]" v-for="key in keys" v-bind:key="key">
                    <el-input v-model="item[key]"></el-input>
                </el-form-item>
                <i class="el-icon-delete2" v-on:click="removeHistory(index)"></i>
                <hr>
            </div>
        </el-form>
        <el-button class="addWorkHistory" type="primary" v-on:click="addHistory">添加经历</el-button>
    </div>
</template>

<script>
export default {
    props: ['items', 'labels', 'title'],
    computed: {
        keys() {
            return Object.keys(this.items[0])
        }
    },
    methods: {
        addHistory() {
            const empty = {}
            this.keys.map((key) => { empty[key] = '' })
            this.items.push(empty)
        },
        removeHistory(index) {
            if(this.items.length > 1 ){
                this.items.splice(index, 1)
            }

        }
    }
}
</script>
