export class Animation {
    static flip(card, dt) {
        card.pointerEvents = false;
        let timeline = gsap.timeline();
        timeline.to(card, { duration: dt * 0.5, scaleX: 0 })
        timeline.call(() => {
            card.children[0].path = "./img/trucxanh" + card.value + ".jpg";
            card.children[1].active = false;
            card.poinerEvents = true;
        })
        timeline.to(card, {
            duration: dt * 0.5, scaleX: 1
        })

    }
    static flipBack(card) {
        card.pointerEvents = false;
        let timeline = gsap.timeline();
        timeline.to(card, {
            delay: 1.5, duration: 0.5,
            scaleX: 0
        })
        timeline.call(() => {
            card.children[0].path = "./img/cover.jpg";
            card.children[1].active = true;
            card.pointerEvents = true;
        })
        timeline.to(card, {
            duration: 0.5,
            scaleX: 1
        })



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
            width: 150, height: 150,
            onComplete: () => {

            }
        })

    }

    static changeScore(game, number) {
        var Cont = { val: game.score }, NewVal = game.score + number;

        TweenLite.to(Cont, 1, {
            delay: 1,
            val: NewVal, roundProps: { val: 50 }, onUpdate: function () {
                game.score = Cont.val;
            }
        });
    }
    static createCard(card, dt) {
        let timeline = gsap.timeline();
        timeline.to(card, { delay: (20 - card.index) * dt, duration: dt, opacity: 1 })
        timeline.to(card, { duration: 0.1, opacity: 0 })
        timeline.to(card, { delay: (card.index) * dt, duration: 0.0, opacity: 1 })
        return dt;
    }
    static moveCard(card, delay, dt, stepWidth, stepHeight) {
        card.zIndex = 22;
        let timeline = gsap.timeline();
        let timeline2 = gsap.timeline();
        let timeline3 = gsap.timeline();
        setTimeout(function () {
            card.zIndex = card.index;
        }, (card.index + 22) * delay * 1000)
        timeline.to(card, {
            delay: (card.index + 21) * delay, duration: dt,
            x: 150 + stepWidth * ((card.index - 1) % 5),
            y: 40 + stepHeight * Math.floor((card.index - 1) / 5),
            ease: "back.out(3)"
        });

        setTimeout(() => {
            card.zIndex = 0;
            card.pointerEvents = true;
        }, 45 * delay * 1000);
    }

}