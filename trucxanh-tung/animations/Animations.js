export class Animation {
    static flip(card) {
        card.pointerEvents = false;
        let timeline = gsap.timeline();
        timeline.to(card, { duration: 0.5, scaleX: 0 })
        timeline.to(card, { duration: 0.5, scaleX: 1 })
        setTimeout(function () {
            card.children[0].path = "./img/trucxanh" + card.value + ".jpg";
            card.children[1].active = false;
            card.poinerEvents = true;
        }, 500);
    }
    static flipBack(card) {
        card.pointerEvents = false;
        let timeline = gsap.timeline();
        timeline.to(card, {
            delay: 1.5, duration: 0.5,
            scaleX: 0
        })
        timeline.to(card, {
            duration: 0.5,
            scaleX: 1
        })
        setTimeout(function () {
            card.children[0].path = "./img/cover.jpg";
            card.children[1].active = true;
            card.pointerEvents = true;
        }, 1500);

    }
    static increaseSize(card) {
        card.zIndex++;
        card.pointerEvents = false;
        let timeline = gsap.timeline();
        let timeline2 = gsap.timeline();
        timeline.to(card, {
            delay: 1.5, duration: 1,
            width: 150, height: 150,
            x: card.x - 25, y: card.y - 25
        })
        timeline2.to(card.children[0], {
            delay: 1.5, duration: 1,
            width: 150, height: 150
        })
    }
    static createCard(card, dt) {
        let timeline = gsap.timeline();
        timeline.to(card, { delay: (20 - card.index) * dt, duration: dt, opacity: 1 })
        timeline.to(card, { duration: 0.1, opacity: 0 })
        timeline.to(card, { delay: (card.index) * dt, duration: 0.0, opacity: 1 })
        return dt;
    }
    static moveCard(card, delay, dt) {
        card.zIndex = 22;
        let timeline = gsap.timeline();
        let timeline2 = gsap.timeline();
        let timeline3 = gsap.timeline();
        setTimeout(function () {
            card.zIndex = card.index;
        }, (card.index + 22) * delay * 1000)
        timeline.to(card, {
            delay: (card.index + 21) * delay, duration: dt,
            x: 150 + 100 * ((card.index - 1) % 5) + 50,
            y: 40 + 100 * Math.floor((card.index - 1) / 5) - 50,
            width: card.width * 1.2, height: card.height * 1.2
        });
        timeline.to(card, {
            x: 150 + 100 * ((card.index - 1) % 5),
            y: 40 + 100 * Math.floor((card.index - 1) / 5),
            width: card.width, height: card.height
        })
        timeline2.to(card.children[0], {
            delay: (card.index + 21) * delay, duration: dt,
            width: card.width * 1.2, height: card.height * 1.2
        })
        timeline2.to(card.children[0], {
            width: card.width, height: card.height
        })
        timeline3.to(card.children[1], {
            delay: (card.index + 21) * delay, duration: dt,
            x: card.width * 1.2 / 2 - 10, y: card.height * 1.2 / 2 - 10
        })
        timeline3.to(card.children[1], {
            x: card.height / 2 - 10, y: card.width / 2 - 10
        })
        setTimeout(() => {
            card.zIndex = 0;
            card.pointerEvents = true;
        }, 44 * delay * 1000);
    }

}