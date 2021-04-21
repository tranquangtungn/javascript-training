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
    }
    static moveCard(card) {
        card.zIndex = 22;
        let timeline = gsap.timeline();
        let timeline2 = gsap.timeline();
        let timeline3 = gsap.timeline();
        setTimeout(function () {
            card.zIndex = card.index;
        }, card.index * 300 + 22 * 300)
        timeline.to(card, {
            delay: card.index * 0.3 + 21 * 0.3, duration: 0.5,
            x: 130 + 101 * ((card.index - 1) % 5) + 50,
            y: 40 + 101 * Math.floor((card.index - 1) / 5) - 50,
            height: 120, width: 120,

        });
        timeline.to(card, {
            x: 130 + 101 * ((card.index - 1) % 5),
            y: 40 + 101 * Math.floor((card.index - 1) / 5),
            height: 100, width: 100,
        })
        timeline2.to(card.children[0], {
            delay: card.index * 0.3 + 21 * 0.3, duration: 0.5,
            width: 120, height: 120
        })
        timeline2.to(card.children[0], {
            width: 100, height: 100
        })
        timeline3.to(card.children[1], {
            delay: card.index * 0.3 + 21 * 0.3, duration: 0.5,
            x: 50, y: 50
        })
        timeline3.to(card.children[1], {
            x: 40, y: 40
        })

    }

}