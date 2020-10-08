Vue.component ("coupon", {

    template:
        '<input placeholder="Enter your coupon code" @blur="onCouponApplied">',

    methods: {
        onCouponApplied() {
            this.$emit("applied"); // going to emit an event. It is called 'applied' because it was what we named it in the HTML
        }
    }
});

// Root view instance, always at the bottom (our route view instance is out PARENT!!!)
new Vue ({
    el: "#root",

    data: {
        couponApplied: false // How we determine if we display a form, or a message, etc
    },

    methods: {
        onCouponApplied() {
            this.couponApplied = true;
        }
    }
});