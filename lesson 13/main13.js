// Any Vue instance-new Vue();-has the habikity to listen and emit events
window.Event = new Vue(); // Shared event instance: Makes any component fire an event and listening to other events

Vue.component ("coupon", {

    template:
        '<input placeholder="Enter your coupon code" @blur="onCouponApplied">',

    methods: {
        onCouponApplied() {
            Event.$emit("applied"); // going to emit an event
        }
    }
});

new Vue ({
    el: "#root",

    data: {
        couponApplied: false
    },

    created() {
        // $on is syntax to listen to an event
        Event.$on("applied", () => alert("Handling it!")); // when the 'applied' event is fired, then respond
    }
});