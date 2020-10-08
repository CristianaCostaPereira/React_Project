// This file does the same as main13.js.
// it's a simple alternative to $ syntax.
// Change the path in the HTML to see its funcionality!


window.Event = new class { // Makes any component fire an event and listening to other events
    constructor() {
        this.vue = new Vue();
    }

    //API
    fire(event, data = null) { // going to fire and event name an pass through data that is not required
        this.vue.$emit(event, data);
    }

    listen(event, callback) { // listen for an event an trigger a callbackfunction
        this.vue.$on(event, callback);
    }
}; 

Vue.component ("coupon", {

    template:
        '<input placeholder="Enter your coupon code" @blur="onCouponApplied">',

    methods: {
        onCouponApplied() {
            Event.fire("applied"); // going to emit an event
        }
    }
});

// Any Vue instance has the habikity to listen and emit events
new Vue ({
    el: "#root",

    data: {
        couponApplied: false
    },

    created() {
        // $on is syntax to listen to an event
        Event.listen("applied", () => alert("Handling it!")); // when the 'applied' event is fired, then respond
    }
});