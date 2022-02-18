import CollapseComponent from './components/CollapseComponent';

export default {
    register(Vue) {
        Vue.component('collapse-component', CollapseComponent);
    }
};

export { CollapseComponent };