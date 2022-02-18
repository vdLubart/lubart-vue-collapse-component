<template>
    <div class="collapse-component">
        <div class="collapse-component__header" @click="toggle">
            <div class="collapse-component__header__title">{{ header }}</div>
            <div class="collapse-component__header__icon"><i :class="iconClass"></i></div>
        </div>

        <div class="collapse-component__body" :class="{ 'hold-up' : !collapsed }">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CollapseComponent",

        props: {
            header: {type: String},
            icon: {type: String, default: "fas fa-chevron-down"}
        },

        data() {
            return {
                collapsed: true,
                iconClass: this.icon
            }
        },

        methods:{
            toggle(){
                this.collapsed = !this.collapsed;

                if(!this.collapsed){
                    this.iconClass += " rotated";
                }
                else{
                    this.iconClass = this.icon;
                }
            }
        }
    }
</script>

<style scoped>

    .collapse-component{
        margin-bottom: 20px;
    }

    .collapse-component__body{
        border: 1px solid lightgrey;
        border-top: 0;
        padding: 0px 10px;
        max-height: 0;
        overflow: hidden;
        transition: max-height .5s ease-in-out, padding .5s ease-in-out;
    }

    .collapse-component__body.hold-up{
        max-height: 99em;
        padding: 10px;
        transition: max-height 1s ease-in-out, padding 1s ease-in-out;
    }

    .collapse-component__header{
        border: 1px solid lightgrey;
        padding: 10px;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
    }

    .collapse-component__header__title{
        font-weight: bold;
    }

    .collapse-component__header__icon i{
        transition: all .5s linear;
    }

    .collapse-component__header__icon i.rotated{
        transform:rotate(180deg);
    }

</style>