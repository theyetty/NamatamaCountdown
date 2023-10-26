document.addEventListener("DOMContentLoaded", function () {
    const targetUTCDate = new Date();
    targetUTCDate.setUTCFullYear(2023);
    targetUTCDate.setUTCMonth(9);
    targetUTCDate.setUTCDate(26);
    targetUTCDate.setUTCHours(9, 0, 0, 0);

    const targetLocalDate = new Date(targetUTCDate.getTime());

    function updateCountdown() {
        const now = new Date();
        const timeDiff = targetLocalDate - now;

        if (timeDiff <= 0) {
            document.getElementById('countdown').innerText = "It's time to reach The Finals.";
            confetti({
                particleCount: 50,
                spread: 100,
                origin: { y: 0.6, x: 0.5 },
                zIndex: 0
            });

            confetti({
                particleCount: 100,
                angle: 120,
                spread: 200,
                origin: { x: 1 },
                zIndex: 0
            });

            confetti({
                particleCount: 100,
                angle: 50,
                spread: 200,
                origin: { x: 0 },
                zIndex: 0
            });

            return;
        }

        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        updateUnit('hours', hours);
        updateUnit('minutes', minutes);
        updateUnit('seconds', seconds);
    }

    function updateUnit(unit, value) {
        const element = document.getElementById(unit);
        if (element && element.innerText !== value.toString()) {
            element.classList.add('changed');
            setTimeout(() => {
                element.innerText = value;
                element.classList.remove('changed');
            }, 400);
        }
    }

    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    document.getElementById('timezone').innerText = `${timeZone}`;

    document.getElementById('countdown').innerHTML = '<span id="hours"></span> hours <span id="minutes"></span> minutes and <span id="seconds"></span> seconds';

    updateCountdown();
    setInterval(updateCountdown, 1000);
});
