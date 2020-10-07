Vue.component("tabs", {

// The anchor tag above gives space to the tabs
// :class="{ 'is-active' : tab.selected} means that we are binding the class to a class is active if(:) the tab is selected
// @click="selectTab(tab) means that when we click it we are selecting a new tab and pass through the current tab

    template: `
        <div>
            <div class="tabs is-centered">
                <ul>
                    <li v-for="tab in tabs" :class="{ 'is-active' : tab.isActive}">
                        <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
                    </li>
                </ul>
            </div>

            <div class="tabs-details">
                <slot></slot>        
            </div>
        </div>
    `,

    data() {
        return { tabs: [] }; //makes it clear what data our component-tabs in this case-or instance exposes to, this explicit the method bellow
    },

    created() {
        this.tabs = this.$children; //easy way to target every tab we created from the tabs element
    },

    methods: {
        selectTab(selectedTab) { //this method filters to all of the childrens and update their isActive property iquals to either true or false if the current tab is iqual to the one clicked
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name == selectedTab.name);
            });
        }
    }
});


Vue.component("tab", {
    // only want to dislpay this content if the current tab is selected/active, This allows that each text cont is in the corresponding tab
    template: `
        <div v-show="isActive"><slot></slot></div>
    `,

    props: {
        name: {required: true}, //Because every tab created requires a name
        selected: { default: false } //If we do not get anything at all assumes selected is false
    },

    data() {

        return {
            isActive: false
        }

    },

    computed: {
        href() {
            return "#" + this.name.toLowerCase().replace(/ /g, '-'); //link to an id , so the # is used, then replace all the space with '-' . Return the path as a syntax like: about-us

        }
    },

    mounted() {
        this.isActive = this.selected;
    }

});

new Vue ({
    el: "#root"
});