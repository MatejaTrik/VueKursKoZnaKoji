new Vue({
    el: '#app',
    data: {
        title: 'Becoming a vue ninja',
        name: 'Ryu',
        name2: 'Mateja',
        wage: 10,
        showName: true,
        showAge: true,
        coords: {
            x:0,
            y:0,
        },
        items: ['mushrooms', 'green', 'red', 'banana', 'star'],
        ninjas: [
            {name: 'Crystal', age: 25, belt: 'black'},
            {name: 'Beli', age: 35, belt: 'white'},
            {name: 'Crveni', age: 45, belt: 'red'},
            {name: 'Plavi', age: 55, belt: 'blue'},
        ]
        
    },
    methods: {
        changeWage(amount) {
            this.wage += amount;
        },
        logEvent(e) {
            console.log(e)
        },
        logCords(e) {
            this.coords.x = e.offsetX;
            this.coords.y = e.offsetY;
        },
        updateName(e) {
            //console.log(e.target.value)
            this.name = e.target.value
        },
        logMessage() {
            console.log('Hello World')
        },
        toggleName() {
            this.showName = !this.showName
        },
        toggleAge() {
            this.showAge = !this.showAge
        }
    },
})

