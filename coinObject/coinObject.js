const coin = {
    state: 0,

    flip: function () {
        this.state = Math.round(Math.random() * 1);
        return this;
    },

    toString: function () {
        if (this.state) {
            return 'Tails';
        }
        return 'Heads';
    },

    toHTML: function () {
        const image = document.createElement("img");
        image.alt = "Heads/Tails"
        image.style.width = '100px';
        image.style.height = '100px';

        if (this.state) {
            image.src = "./assets/img/cara.jpeg"
            return image;
        }

        image.src = "./assets/img/coroa.jpeg"
        return image;
    }
};