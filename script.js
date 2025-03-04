document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");

    sections.forEach(section => {
        const audioBtn = section.querySelector(".audio-btn");
        const audioSrc = section.dataset.audio;
        const textElements = section.querySelectorAll("p[data-start][data-end]");

        if (!audioSrc || !audioBtn) return; // Ensure audio exists

        let audio = new Audio(audioSrc);
        let playing = false;

        audioBtn.addEventListener("click", () => {
            if (!playing) {
                audio.play();
                playing = true;
                audioBtn.innerText = "⏸️";

                // Reset all text highlights before playback
                textElements.forEach(text => text.classList.remove("highlight"));

                // Monitor audio playback and highlight text dynamically
                audio.addEventListener("timeupdate", () => {
                    let currentTime = audio.currentTime;

                    textElements.forEach(text => {
                        const startTime = parseFloat(text.dataset.start);
                        const endTime = parseFloat(text.dataset.end);

                        if (currentTime >= startTime && currentTime <= endTime) {
                            text.classList.add("highlight");
                        } else {
                            text.classList.remove("highlight");
                        }
                    });
                });

                // When audio ends, reset everything
                audio.addEventListener("ended", () => {
                    playing = false;
                    audioBtn.innerText = "🔊";
                    textElements.forEach(text => text.classList.remove("highlight"));
                });

            } else {
                audio.pause();
                playing = false;
                audioBtn.innerText = "🔊";
            }
        });
    });
});

















document.addEventListener("DOMContentLoaded", function () {
    const translations = {
        "en": { // English translations
            "Era una nena llavors.": "I was a little girl then.",
            "Agafava gairebé tots els dies el tramvia i els meus horaris sempre eren els mateixos.": "I took the tram almost every day, and my schedule was always the same.",
            "El trajecte acostumava a ser de trenta minuts,": "The journey usually lasted thirty minutes,",
            "tot i que depenia una mica del nombre de gent que pujava a cada parada.": "although it depended a bit on how many people got on at each stop.",
            "Aquell era el primer any que m’havien donat permís per anar-hi sola.": "That was the first year I was allowed to go alone.",
            "Diria que aquesta llibertat em feia sentir més alta i gairebé adulta.": "I would say that this freedom made me feel taller and almost like an adult.",
            "Al començament em passava el que durava el viatge mirant a terra.": "At first, I spent the entire journey looking down at the ground.",
            "A mesura que van anar avançant les setmanes, però,": "As the weeks went by, however,",
            "vaig decidir jugar a un joc amb mi mateixa": "I decided to play a game with myself",
            "perquè aquells trenta minuts no se’m fessin tan llargs.": "so that those thirty minutes wouldn’t feel so long.",
            "Era un joc fàcil i silenciós en què només hi intervenia la meva imaginació.": "It was an easy and silent game in which only my imagination was involved.",
            "Tant d’anada com de tornada seleccionava un viatger i li construïa una identitat:": "Both on the way there and back, I selected a traveler and built them an identity:",
            "nom, professió, història personal...": "name, profession, personal history...",
            "No podria dir per què em fixava en una persona i no en una altra.": "I couldn't say why I focused on one person and not another.",
            "No crec que fos una qüestió d’afinitat,": "I don’t think it was a matter of affinity,",
            "sinó més aviat d’on s’aturava la meva mirada.": "but rather of where my gaze stopped.",
            "Tampoc tenia preferències.": "I didn’t have preferences either.",
            "Vull dir que em podia fixar en algú de setanta anys o en algú de deu,": "I mean, I could focus on someone seventy years old or someone ten,",
            "en una noia acabada de sortir de la perruqueria o en un home que, evidentment, estava arribant tard.": "on a girl who had just left the hairdresser or on a man who, obviously, was arriving late.",
        },

        "fr": { // French translations
            "Era una nena llavors.": "J'étais une petite fille à l'époque.",
            "Agafava gairebé tots els dies el tramvia i els meus horaris sempre eren els mateixos.": "Je prenais le tram presque tous les jours, et mon emploi du temps était toujours le même.",
            "El trajecte acostumava a ser de trenta minuts,": "Le trajet durait habituellement trente minutes,",
            "tot i que depenia una mica del nombre de gent que pujava a cada parada.": "bien que cela dépende un peu du nombre de personnes qui montaient à chaque arrêt.",
            "Aquell era el primer any que m’havien donat permís per anar-hi sola.": "C'était la première année où j'avais la permission d'y aller seule.",
            "Diria que aquesta llibertat em feia sentir més alta i gairebé adulta.": "Je dirais que cette liberté me faisait me sentir plus grande et presque adulte.",
            "Al començament em passava el que durava el viatge mirant a terra.": "Au début, je passais tout le trajet à regarder le sol.",
            "A mesura que van anar avançant les setmanes, però,": "Au fil des semaines, cependant,",
            "vaig decidir jugar a un joc amb mi mateixa": "j'ai décidé de jouer à un jeu avec moi-même",
            "perquè aquells trenta minuts no se’m fessin tan llargs.": "pour que ces trente minutes ne me paraissent pas si longues.",
            "Era un joc fàcil i silenciós en què només hi intervenia la meva imaginació.": "C'était un jeu facile et silencieux dans lequel seule mon imagination intervenait.",
            "Tant d’anada com de tornada seleccionava un viatger i li construïa una identitat:": "À l'aller comme au retour, je choisissais un voyageur et lui créais une identité :",
            "nom, professió, història personal...": "nom, profession, histoire personnelle...",
            "No podria dir per què em fixava en una persona i no en una altra.": "Je ne pourrais pas dire pourquoi je me fixais sur une personne et pas sur une autre.",
            "No crec que fos una qüestió d’afinitat,": "Je ne crois pas que c'était une question d'affinité,",
            "sinó més aviat d’on s’aturava la meva mirada.": "mais plutôt d'où s'arrêtait mon regard.",
            "Tampoc tenia preferències.": "Je n'avais pas de préférences non plus.",
            "Vull dir que em podia fixar en algú de setanta anys o en algú de deu,": "Je veux dire que je pouvais me fixer sur quelqu'un de soixante-dix ans ou sur quelqu'un de dix,",
            "en una noia acabada de sortir de la perruqueria o en un home que, evidentment, estava arribant tard.": "sur une fille qui venait de sortir de chez le coiffeur ou sur un homme qui, évidemment, était en retard.",
        },

        "ar": { // Arabic translations
            "Era una nena llavors.": "كنتُ فتاةً صغيرةً آنذاك.",
            "Agafava gairebé tots els dies el tramvia i els meus horaris sempre eren els mateixos.": "كنتُ أركب الترامَ تقريباً كلَّ يومٍ، وكان جدولي الزمنيُّ دائماً هو نفسه.",
            "El trajecte acostumava a ser de trenta minuts,": "كانت الرحلةُ تستغرقُ عادةً ثلاثينَ دقيقةً،",
            "tot i que depenia una mica del nombre de gent que pujava a cada parada.": "رغمَ أنها كانت تعتمدُ إلى حدٍّ ما على عددِ الأشخاصِ الذين يصعدون عند كلِّ محطةٍ.",
            "Aquell era el primer any que m’havien donat permís per anar-hi sola.": "كانت هذه أولَ سنةٍ يُسمحُ لي فيها بالذهابِ بمفردي.",
            "Diria que aquesta llibertat em feia sentir més alta i gairebé adulta.": "أودُّ أن أقولَ إن هذه الحريةَ جعلتني أشعرُ بأنني أطولُ وكأنني بالغةٌ تقريباً.",
            "Al començament em passava el que durava el viatge mirant a terra.": "في البداية، كنتُ أقضي الرحلةَ بأكملها وأنا أنظرُ إلى الأرضِ.",
            "A mesura que van anar avançant les setmanes, però,": "مع مرورِ الأسابيعِ، ومع ذلك،",
            "vaig decidir jugar a un joc amb mi mateixa": "قررتُ أن ألعبَ لعبةً مع نفسي",
            "perquè aquells trenta minuts no se’m fessin tan llargs.": "حتى لا تبدو تلك الثلاثونَ دقيقةً طويلةً جداً.",
            "Era un joc fàcil i silenciós en què només hi intervenia la meva imaginació.": "كانت لعبةً سهلةً وصامتةً حيثُ كانت مخيلتي فقط هي المتدخلة.",
            "Tant d’anada com de tornada seleccionava un viatger i li construïa una identitat:": "سواءً في الذهابِ أو العودةِ، كنتُ أختارُ مسافراً وأبني له هويةً:",
            "nom, professió, història personal...": "اسمٌ، مهنة، قصة شخصية...",
            "No podria dir per què em fixava en una persona i no en una altra.": "لا أستطيعُ أن أقولَ لماذا كنتُ أركزُ على شخصٍ معينٍ وليس آخر.",
            "No crec que fos una qüestió d’afinitat,": "لا أعتقدُ أنه كان مسألةَ تقاربٍ،",
            "sinó més aviat d’on s’aturava la meva mirada.": "بل بالأحرى على المكانِ الذي توقفت فيه نظرتي.",
            "Tampoc tenia preferències.": "لم تكن لديَّ تفضيلاتٌ أيضاً.",
            "Vull dir que em podia fixar en algú de setanta anys o en algú de deu,": "أعني أنني كنتُ أركزُ على شخصٍ يبلغُ من العمرِ سبعينَ عاماً أو شخصٍ يبلغُ العاشرةَ،",
            "en una noia acabada de sortir de la perruqueria o en un home que, evidentment, estava arribant tard.": "على فتاةٍ خرجت لتوِّها من صالونِ التجميلِ أو على رجلٍ كان، من الواضحِ، أنه كان يصلُ متأخراً."
        }
    };

   const languageSelector = document.getElementById("languageSelector");

    function updateTranslations(language) {
        document.querySelectorAll(".text-box p, .text-box2 p").forEach(paragraph => {
            const originalText = paragraph.dataset.originalText;
            paragraph.dataset.translation = translations[language][originalText] || "Translation unavailable";
        });
    }

    function wrapSentencesWithTranslation(container) {
        container.querySelectorAll("p").forEach(element => {
            element.dataset.originalText = element.innerText;
        });
    }
    // Listen for language selection change
    languageSelector.addEventListener("change", (e) => {
        const selectedLanguage = e.target.value;
        updateTranslations(selectedLanguage);
    });



    // Create tooltip for translations
    const tooltip = document.createElement("div");
    tooltip.classList.add("tooltip");
    document.body.appendChild(tooltip);

    document.addEventListener("mouseover", (e) => {
        if (e.target.tagName === "P") {
            tooltip.innerText = e.target.dataset.translation;
            tooltip.style.display = "block";
        }
    });

    document.addEventListener("mousemove", (e) => {
        if (tooltip.style.display === "block") {
            tooltip.style.left = e.pageX + 10 + "px";
            tooltip.style.top = e.pageY + 10 + "px";
        }
    });

    document.addEventListener("mouseout", (e) => {
        if (e.target.tagName === "P") {
            tooltip.style.display = "none";
        }
    });

    // Initialize sentence-based translations
    [".text-box", ".text-box2"].forEach(selector => {
        const container = document.querySelector(selector);
        if (container) {
            wrapSentencesWithTranslation(container);
            updateTranslations("en"); // Default to English
        }
    });

    languageSelector.addEventListener("change", (e) => {
        const selectedLanguage = e.target.value;
        updateTranslations(selectedLanguage);
    });
});









/*
const canvas = document.createElement("canvas");
canvas.id = "cursorCanvas";
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

// Ensure canvas covers the full screen
function setupCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener("resize", setupCanvas);

// Mouse Movement Variables
let mouseMoved = false;
const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

const params = {
    pointsNumber: 40,
    widthFactor: 0.3,
    spring: 0.4,
    friction: 0.5
};

// Create cursor trail array
const trail = new Array(params.pointsNumber).fill(null).map(() => ({
    x: pointer.x,
    y: pointer.y,
    dx: 0,
    dy: 0
}));

// Define Catalan colors
const catalanColors = ["#ffcc00", "#ffcc00"]; // Red & Yellow

// Mouse Move Event
window.addEventListener("mousemove", (e) => {
    mouseMoved = true;
    pointer.x = e.clientX;
    pointer.y = e.clientY;
});

// Touch Move Event (For Mobile)
window.addEventListener("touchmove", (e) => {
    mouseMoved = true;
    pointer.x = e.touches[0].clientX;
    pointer.y = e.touches[0].clientY;
});

// Animation Loop
function update(t) {
    if (!mouseMoved) {
        pointer.x = (.5 + .3 * Math.cos(.002 * t) * Math.sin(.005 * t)) * window.innerWidth;
        pointer.y = (.5 + .2 * Math.cos(.005 * t) + .1 * Math.cos(.01 * t)) * window.innerHeight;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    trail.forEach((p, index) => {
        const prev = index === 0 ? pointer : trail[index - 1];
        const spring = index === 0 ? 0.4 * params.spring : params.spring;
        p.dx += (prev.x - p.x) * spring;
        p.dy += (prev.y - p.y) * spring;
        p.dx *= params.friction;
        p.dy *= params.friction;
        p.x += p.dx;
        p.y += p.dy;
    });

    // Draw the cursor trail with alternating colors
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(trail[0].x, trail[0].y);

    for (let i = 1; i < trail.length - 1; i++) {
        const xc = (trail[i].x + trail[i + 1].x) / 2;
        const yc = (trail[i].y + trail[i + 1].y) / 2;
        ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);

        // Alternate colors between red & yellow
        ctx.strokeStyle = catalanColors[i % 2]; // Switch color every segment
        ctx.lineWidth = params.widthFactor * (params.pointsNumber - i);
        ctx.stroke();
    }

    ctx.lineTo(trail[trail.length - 1].x, trail[trail.length - 1].y);
    ctx.stroke();

    window.requestAnimationFrame(update);
}

// Start Animation
setupCanvas();
update(0);


*/















document.addEventListener("scroll", function () {
    const section = document.querySelector(".moving-bg");
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const sectionTop = section.offsetTop;

    if (scrollPosition + windowHeight > sectionTop) {
        let moveAmount = Math.max(100 - (scrollPosition - sectionTop) * 0.2, 0);
        section.style.backgroundPosition = `${moveAmount}% center`;
    }
});







































































const audioPlayers = new Map();

function syncWords(audio, words) {
    const interval = setInterval(() => {
        const currentTime = audio.currentTime;
        words.forEach(word => {
            const start = parseFloat(word.dataset.start);
            const end = parseFloat(word.dataset.end);
            word.classList.toggle('active', currentTime >= start && currentTime < end);
        });
    }, 50);

    audio.addEventListener('ended', () => {
        clearInterval(interval);
        words.forEach(word => word.classList.remove('active'));
    });

    return interval;
}

document.querySelectorAll('.sync-audio').forEach(paragraph => {
    paragraph.addEventListener('click', () => {
        const audioSrc = paragraph.dataset.audio;

        if (!audioPlayers.has(audioSrc)) {
            const audio = new Audio(audioSrc);
            audioPlayers.set(audioSrc, { audio, interval: null });
        }

        const player = audioPlayers.get(audioSrc);
        const audio = player.audio;
        const words = paragraph.querySelectorAll('span');

        if (audio.paused) {
            audio.currentTime = 0;
            audio.play().catch(error => console.error('Playback error:', error));
            player.interval = syncWords(audio, words);
        } else {
            audio.pause();
            clearInterval(player.interval);
            player.interval = null;
            words.forEach(word => word.classList.remove('active'));
        }
    });
});

























/*


document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("mousemove", (event) => {
        document.addEventListener("mousemove", (event) => {
            const image = document.querySelector(".background");
            const cursorPos = document.getElementById("cursor-position");

            if (!image) return; // Ensure the image exists

            const rect = image.getBoundingClientRect(); // Get image position
            const xPercent = ((event.clientX - rect.left) / rect.width) * 100;
            const yPercent = ((event.clientY - rect.top) / rect.height) * 100;

            // Ensure percentages stay within bounds (0% - 100%)
            if (xPercent >= 0 && xPercent <= 100 && yPercent >= 0 && yPercent <= 100) {
                cursorPos.textContent = `${yPercent.toFixed(1)}%, ${xPercent.toFixed(1)}%`;

            }
        });
    });
});
*/
