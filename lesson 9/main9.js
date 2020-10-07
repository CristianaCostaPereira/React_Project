Vue.component("message", {

    props: ["title", "body"],

    data() {

        return {
            isVisible: true
        };

    },

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
//  We can do this way or in-line
//     method: {
//         hideModal() {
//             this.isVisible = false;
//         }
    
//     }
});


new Vue({
    el: '#root'
});