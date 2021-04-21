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
            x: `${card.x - 25}`, y: `${card.y - 25}`
        })
        timeline2.to(card.children[0], {
            delay: 1.5, duration: 1,
            width: 150, height: 150
        })

    }
}