// Questions that will be asked
const Questions = [
    {
        question:
            "Jag gillar att arbeta i mindre grupper - Jag gillar att arbeta i stora grupper",
        idx: 0,
        answer: [
            { text: "1" },
            { text: "2" },
            { text: "3" },
            { text: "4" },
            { text: "5" },
        ],
    },
    {
        question:
            "Jag är inte intresserad av att ha kontakt med företag - Jag är intresserad av att ha kontakt med företag",
        idx: 1,
        answer: [
            { text: "1" },
            { text: "2" },
            { text: "3" },
            { text: "4" },
            { text: "5" },
        ],
    },
    {
        question:
            "Jag önskar att inte behöva vara service minded- Jag älskar att vara serviceminded",
        idx: 2,
        answer: [
            { text: "1" },
            { text: "2" },
            { text: "3" },
            { text: "4" },
            { text: "5" },
        ],
    },
    {
        question:
            "Jag tycker det är bekvämt när någon säger till mig vad jag ska göra - Jag gillar att ta iniativ",
        idx: 3,
        answer: [
            { text: "1" },
            { text: "2" },
            { text: "3" },
            { text: "4" },
            { text: "5" },
        ],
    },
    {
        question: "Jag har ett särskilt intresse att",
        idx: 4,
        answer: [
            { text: "Fota" },
            { text: "Filma" },
            { text: "Arbeta med el och teknik" },
            { text: "Inreda" },
            { text: "Testa appar" },
            { text: "Arbeta fysiskt" },
        ],
    },
];

// Host role followed by index of the question followed by the points for this specific role from choice 1-5
// Also contains a description for the role what it means to do in this role
const Scoring = [
    {
        Banquet: {
            0: [1, 1, 2, 3, 4],
            1: [5, 4, 3, 2, 1],
            2: [5, 4, 3, 2, 1],
            3: [1, 2, 3, 4, 5],
            4: [0, 0, 0, 0, 0, 0],
            Description:
                "As a Banquet Host of ARKAD you will be a part of the team that organizes the grand Banquet in AF-Borgen. You will help out with preparations before the banquet and on the day of the banquet to set up at the venue and make sure that everything is ready for when the banquet starts! When everything is in order and guests start arriving, you will have the option to change into a nice outfit and join the dinner and the following after party. \n\nBeing a Banquet Host perfectly suits those that are willing to put in some effort to help make a good evening even more splendid! You will need to be available the whole of the 14th of November, as well as some time in the days before for planning.",
        },
        Company: {
            0: [5, 4, 3, 2, 1],
            1: [1, 3, 5, 6, 7],
            2: [1, 2, 3, 4, 5],
            3: [1, 2, 3, 4, 5],
            4: [0, 0, 0, 0, 0, 0],
            Description:
                "Som Company Host kommer du att bli tilldelad två företag som du kommer att assistera inför och under mässan. Din huvudsakliga uppgift är att hjälpa företaget och vara dess informationskälla. Som Company Host får du en god möjlighet att knyta kontakter med företagen på mässan. Jobbet som Company Host är perfekt för den som vill komma i kontakt med företag och testa på ett professionellt arbetssätt. \n\nNågra veckor innan mässan ska du kontakta företaget och följa upp deras registrering och förbereda dem för den kommande mässan. Du förväntas hjälpa till att förbereda mässlokalerna under helgen innan ARKAD. Dagen innan mässan möter du upp ditt företag och visar dem var de ska stå, för att sedan vara behjälplig under hela mässan. När mässan är slut hjälper alla i ARKAD till med att städa och ställa i ordning allt i husen. \n\nSom Company Host förväntas du vara tillgänglig under båda mässdagarna för att svara på frågor och stötta företagen.",
        },
        Event: {
            0: [2, 2, 2, 3, 4],
            1: [1, 2, 3, 4, 5],
            2: [1, 1, 2, 3, 4],
            3: [5, 4, 3, 2, 2],
            4: [0, 0, 0, 0, 0, 0],
            Description:
                "Vill du vara med och organisera större event? Sök Eventvärd! Du kommer hjälpa företagsrepresentanter och dina medvärdar att leverera event veckan innan och under ARKAD. Detta innebär bland annat att du förbereder lokaler inför eventen, att du välkomnar gäster, och att du städar efteråt. Eventvärdar representerar ARKAD mot studenter och företagsrepresentanter. Du kommer få kontakter med företag och ett utlopp för din samarbetsförmåga. \n\nSom Eventvärd behöver du primärt vara tillgänglig att jobba skift några vardagar mellan 6 november–110 november samt 14-15 november.",
        },
        Film: {
            0: [5, 4, 3, 2, 1],
            1: [5, 4, 3, 2, 1],
            2: [5, 4, 3, 2, 1],
            3: [2, 2, 2, 3, 3],
            4: [0, 5, 0, 0, 0, 0],
            Description:
                "Du kommer, tillsammans med de andra Film Hosts och Filmkoordinatorerna, dokumentera mässan. Ni är ansvariga för att skapa kortare klipp att publicera på sociala medier under upptakten till samt under mässan. Du kommer också samla video av våra events och mässan för att kunna skapa ARKADs Aftermovie, som tackar företag och deltagande. Att vara en Film Host passar de som är sociala och kreativa. Att ha tidigare erfarenhet av videografi är meriterande. \n\nDu behöver vara tillgänglig några tider i veckorna innan ARKAD, samt under mässan och några tillfällen därefter.",
        },
        Info_Desk: {
            0: [1, 2, 3, 4, 5],
            1: [1, 1, 1, 2, 3],
            2: [1, 2, 3, 4, 5],
            3: [5, 4, 3, 2, 1],
            4: [0, 0, 0, 0, 0, 0],
            Description:
                "Är du hjälpsam och har lätt att hålla koll på information? Som Info Desk Host står du i en av informationsdiskarna i entrén till våra mässlokaler. Din främsta uppgift är att se till så företagsrepresentanter och studenter får svar på alla frågor som uppstår. Vi söker du som är serviceinriktad och kan möta utmaningar med ett leende.  Före mässan arbetar du med att förbereda infodiskarna så att all information och allt material finns tillgängligt när det väl gäller. Under mässan arbetar du i skift tillsammans med andra värdar i en av infodiskarna.\n\nDu behöver vara tillgänglig helgen innan mässan, samt för att arbeta några pass under mässdagarna.  ",
        },
        Interior: {
            0: [1, 2, 3, 2, 1],
            1: [5, 4, 3, 2, 1],
            2: [5, 4, 3, 2, 1],
            3: [1, 2, 3, 4, 5],
            4: [0, 0, 0, 5, 0, 0],
            Description:
                "Är du intresserad av att dekorera och tycker det är kul med inredningsdesign? Som Interior Host har du i uppgift att hjälpa till att få mässan att vara estetiskt tilltalande samtidigt som den ger ett professionellt intryck. Större delen av arbetet görs före mässan, med huvuduppgiften att dekorera husen inför mässan. Under själva mässan hjälper du som Interior Host till när det behövs och ser till så att dekoren och husen ser bra ut. Efter mässan hjälper du till att städa undan dekoren.\n\nDu behöver vara tillgänglig att planera veckan innan ARKAD samt på plats på campus under helgen innan mässan då vi dekorerar!",
        },
        Logistics: {
            0: [3, 4, 3, 2, 1],
            1: [5, 4, 3, 2, 1],
            2: [5, 4, 3, 2, 1],
            3: [1, 2, 3, 4, 5],
            4: [0, 0, 0, 0, 0, 5],
            Description:
                "Som Logistics Host kommer du tillsammans med logistikgruppen se till så att allt funkar som det ska under mässdagarna. Ni står för samordning, organisation och transport av företagens gods. Vi söker dig som har en positiv inställning, vill lära dig nya saker, och tycker om att ha koll på grejer. Om du gillar kommunikation och samarbete är den här värdplatsen för dig! Du får knyta kontakter med företag samt att lära känna alla andra studenter i gruppen.\n\nDu behöver vara tillgänglig helgen innan mässan fram tills sista mässdagen.",
        },
        Lounge: {
            0: [1, 2, 3, 4, 5],
            1: [1, 1, 1, 2, 3],
            2: [1, 2, 3, 4, 5],
            3: [5, 4, 3, 2, 1],
            4: [0, 0, 0, 0, 0, 0],
            Description:
                "Som Lounge Host förbereder du och tar hand om loungerna runt ARKAD tillsammans med dina medvärdar. Att vara en bra Lounge-värd handlar om att vara serviceminded och att ha ett leende på läpparna. Du arbetar mestadels under mässan och arbetet handlar mest om att hålla det rent och fräscht och se till att mat och dryck alltid är tillgängliga. Du kommer, tillsammans med dina medvärdar, att ställas inför små och stora hinder som kräver snabba lösningar. Under mässan får du dessutom en god chans att samtala med företagsrepresentanter och andra värdar i en avslappnad miljö. Sök till Lounge Host om du vill bidra till detta fantastiska evenemang genom att skapa den optimala loungen.\n\nDu behöver vara tillgänglig under mässdagarna.",
        },
        Lunch: {
            0: [1, 2, 3, 4, 5],
            1: [1, 1, 1, 2, 3],
            2: [1, 2, 3, 4, 5],
            3: [5, 4, 3, 2, 1],
            4: [0, 0, 0, 0, 0, 0],
            Description:
                "Som Lunch Host jobbar du huvudsakligen med att ta hand om gästerna, duka, servera mat och se till att lunchområdet är fint och välkomnande under hela lunchen. Luch Hosts är också ansvariga för entrén till lunchen och se till att gästerna kommer under sin tilldelade tid. Du jobbar främst under mässans två dagar men trots det kommer tid finnas till att besöka mässan på eftermiddagen. Då alla mässans deltagare kommer till lunchen får du som Lunch Host chans att träffa många nya människor, både studenter och företagsrepresentanter.\n\nDu behöver vara tillgänglig under mässdagarna.",
        },
        PSN: {
            0: [3, 4, 3, 2, 1],
            1: [5, 4, 3, 2, 1],
            2: [5, 4, 3, 2, 1],
            3: [1, 2, 3, 4, 5],
            4: [0, 0, 5, 0, 0, 0],
            Description:
                "Som Network and Connection Host kommer du att vara en del i arbetet med allt som rör el och nätverk under mässan. Du kommer inför mässan vara delaktig i planeringen kring hur all el och nätverk skall förläggas, samt även att hjälpa till att montera allting. Under mässan så kommer du, tillsammans med andra värdar, arbeta under ett pass per dag med uppgift att lösa eventuella problem som kan uppstå. När mässan är slut så kommer du hjälpa till att återställa lokalerna till ordinarie skick genom att packa ihop allt kablage som tidigare blivit utplacerat. Ditt bidrag till ARKAD kommer vara oersättligt och uppskattat!\n\nDu behöver vara tillgänglig 10–11 november, när företagen anländer kvällen innan mässan, samt för att jobba några pass under mässdagarna.",
        },
        Photo: {
            0: [5, 4, 3, 2, 1],
            1: [5, 4, 3, 2, 1],
            2: [5, 4, 3, 2, 1],
            3: [2, 2, 2, 3, 3],
            4: [5, 0, 0, 0, 0, 0],
            Description:
                "Som Photo Host är din uppgift att dokumentera allt kring ARKAD; events, lunchföreläsningar, Banketten, mässområdet. Tillsammans med PR-gruppen väljs sedan bilder ut att användas i framställningen av årets och framtida ARKAD. Som Photo Host passar du perfekt som är kreativ, effektiv, och har ett öga för bildkomposition. Det är positivt om du har tidigare erfarenhet av fotografering.\n\nDina arbetstider kommer främst vara vecka 45, eventveckan, och under mässan.",
        },
        Student_Sessions: {
            0: [5, 4, 3, 2, 1],
            1: [1, 2, 3, 4, 5],
            2: [1, 2, 3, 4, 5],
            3: [1, 2, 2, 2, 3],
            4: [0, 0, 0, 0, 0, 0],
            Description:
                "Student Sessions är ARKADs kontaktsamtal mellan företag och studenter. Vi behöver dig som är en hjälpsam och social person som Student Sessions Host! Du kommer ingå i det värdlag som inför mässan ordnar rummen kontaktsamtalen sker i; under ARKAD jobbar du direkt med företagsrepresentanter och studenter så att alla kan få ut så mycket som möjligt från kontaktsamtalen genom att hjälpa deltagande och komma med information och assistans när det behövs. \n\nSom Student Sessions Host behöver du vara tillgänglig från den att ordna rummen under helgen 12–13 november, samt under mässan 15–16 november.",
        },
        Wardrobe: {
            0: [5, 4, 3, 2, 1],
            1: [1, 1, 1, 2, 3],
            2: [1, 1, 2, 3, 4],
            3: [6, 5, 4, 2, 1],
            4: [0, 0, 0, 0, 0, 0],
            Description:
                "Som Wardrobe Host, tillsammans med andra Wardrobe Hosts, håller du koll på en av våra garderober där företagsrepresentanter kan lämna och hämta sina ytterkläder. Din huvudsakliga uppgift är hantering av garderobsbiljetter. Ni arbetar främst under öppningen och stängningen av mässan då det är som mest folk i rörelse. Ni får välkomna alla företag till ARKAD och är de första personerna de träffar under mässan. Eftersom ni mestadels jobbar under öppning och stängning kommer du ha tid att utforska ARKAD under dagen. För denna posten behöver du vara serviceminded för att se till så företagen får ett bra första intryck på mässan.\n\nDu behöver vara tillgänglig för att jobba några skift under mässdagarna, 15e-16e november.",
        },
        QA: {
            0: [4, 4, 3, 2, 1],
            1: [4, 4, 3, 2, 1],
            2: [4, 4, 3, 2, 1],
            3: [1, 2, 3, 4, 4],
            4: [0, 0, 0, 0, 5, 0],
            Description: "Beep boop",
        },
    },
];

const PositionScore = [
    {
        Banquet: 0,
        Company: 0,
        Event: 0,
        Film: 0,
        Info_Desk: 0,
        Interior: 0,
        Logistics: 0,
        Lounge: 0,
        Lunch: 0,
        PSN: 0,
        Photo: 0,
        Student_Sessions: 0,
        Wardrobe: 0,
        QA: 0,
    },
];

let currQuestion = 0;
let score = 0;

function loadQues() {
    const question = document.getElementById("ques");
    const opt = document.getElementById("opt");

    question.textContent = Questions[currQuestion].question;
    opt.innerHTML = "";

    for (let i = 0; i < Questions[currQuestion].answer.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");

        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;

        choiceLabel.textContent = Questions[currQuestion].answer[i].text;

        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
    }
}

loadQues();

function loadScore() {
    const topThreePosts = document.getElementById("score");
    const obj = PositionScore[0]; // Assuming there is only one object in the list
    const topThree = Object.keys(PositionScore[0])
        .map((key, index) => [key, Object.values(PositionScore[0])[index]])
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3)
        .map((pair) => pair[0]);

    const forbiddenName = {
        Info_Desk: "Info Desk",
        Student_Sessions: "Student Sessions",
    };

    const threeKeys = Object.values(topThree);

    for (let i = 0; i < topThree.length; i++) {
        const key = topThree[i];
        if (forbiddenName.hasOwnProperty(key)) {
            topThree[i] = forbiddenName[key];
        }
    }

    console.log(topThree, threeKeys);

    let threeRolesWithdescription = [];
    for (let i = 0; i < threeKeys.length; i++) {
        const key = threeKeys[i];
        console.log(key);
        if (key in Scoring[0]) {
            threeRolesWithdescription[i] = [
                topThree[i],
                Scoring[0][key]["Description"],
            ];
        }
    }

    topThreePosts.textContent = `Värdkompassen tror att du kommer passa bäst med rolen som:\n\n
                                ${threeRolesWithdescription[0][0]}\n${threeRolesWithdescription[0][1]}\n\n
                                ${threeRolesWithdescription[1][0]}\n${threeRolesWithdescription[1][1]}\n\n
                                ${threeRolesWithdescription[2][0]}\n${threeRolesWithdescription[2][1]}`;
}

function nextQuestion() {
    if (currQuestion < Questions.length - 1) {
        currQuestion++;
        loadQues();
    } else {
        document.getElementById("opt").remove();
        document.getElementById("ques").remove();
        document.getElementById("btn").remove();
        loadScore();
    }
}

function checkAns() {
    const selectedAns = parseInt(
        document.querySelector('input[name="answer"]:checked').value
    );

    const idx = currQuestion;
    for (const key in Scoring[0]) {
        const roleScoring = Scoring[0][key][idx][selectedAns];
        PositionScore[0][key] += roleScoring;
    }

    console.log(PositionScore);

    nextQuestion();
}
