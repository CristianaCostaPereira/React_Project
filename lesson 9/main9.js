Vue.component("message", {    
    template: `
        <article class="message" v-show="isVisible">

        <div class="message-header">
          {{ title }}
          <button type="button" class="delete" @click="isVisible = false"></button>
        </div>
        
        <div class="message-body">
            {{ body }}
        </div>

      </article>
    `,

    props: ["title", "body"],

    data() {

        return {
            isVisible: true
        };

    },

//We can do this way or in-line, like seen in the @click
//     methods: {
//         hideModal() {
//             this.isVisible = false;
//         }
    
//     }
});

new Vue({
    el: '#root'
});