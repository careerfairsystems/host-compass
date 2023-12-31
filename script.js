// questions that will be asked
const questions = [
    {
        question_SWE:
            "Jag gillar att arbeta i mindre grupper - Jag gillar att arbeta i stora grupper",
        question_ENG:
            "I like to work in small groups - I like to work in large groups",
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
        question_SWE:
            "Jag är inte intresserad av att ha kontakt med företag - Jag är intresserad av att ha kontakt med företag",
        question_ENG:
            "I am not interested in having contact with companies - I am interested in having contact with companies",
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
        question_SWE:
            "Jag önskar att inte behöva vara service minded - Jag älskar att vara serviceminded",
        question_ENG:
            "I don't want to be service minded - I love being service minded",
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
        question_SWE:
            "Jag tycker det är bekvämt när någon säger till mig vad jag ska göra - Jag gillar att ta iniativ",
        question_ENG:
            "I find it comfortable when someone tells me what to do - I like to take initiative",
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
        question_SWE: "Jag har ett särskilt intresse att",
        question_ENG: "I have a particular interest in",
        idx: 4,
        answer: [
            { text: "Fota" },
            { text: "Filma" },
            { text: "Arbeta med el och teknik" },
            { text: "Inreda" },
            { text: "Testa appar" },
            { text: "Arbeta fysiskt" },
            { text: "Inget av ovanstående" },
        ],
    },
];

// Host role followed by index of the question followed by the points for this specific role from choice 1-5
// Also contains a description for the role what it means to do in this role
const role_scoring = [
    {
        Banquet: {
            0: [1, 1, 2, 3, 4],
            1: [5, 4, 3, 2, 1],
            2: [5, 4, 3, 2, 1],
            3: [1, 2, 3, 4, 5],
            4: [0, 0, 0, 0, 0, 0, 0],
            Description_SWE:
                "Som Banquet Host på ARKAD är du del i det lag som organiserar den stora Banketten i AF-Borgen. Du hjälper till och förbereder inför sittningen och på Bankettdagen ser du till så att allt blir redo i lokalen för när Banketten drar igång. När allt är ordnat och gäster börjar anlända får du möjlighet att byta till finare kläder och delta i middagen och det följande släppet. Att vara Banquet Host passar perfekt för de som är villiga att lägga lite mer kraft på att göra en bra kväll utmärkt.\n\nDu behöver vara tillgänglig under mässan, samt några tillfällen dessförinnan när ni planerar arbetet.",
            Description_ENG:
                "As a Banquet Host of ARKAD you will be a part of the team that organises the grand Banquet in AF-Borgen. You will help out with preparations before the banquet and on the day of the banquet to set up at the venue and make sure that everything is ready for when the banquet starts! When everything is in order and guests start arriving, you will have the option to change into a nice outfit and join the dinner and the following after party. Being a Banquet Host perfectly suits those that are willing to put in some effort to help make a good evening even more splendid.\n\nYou will need to be available during the fair, as well as some time in the days before for planning.",
        },
        Company: {
            0: [5, 4, 3, 2, 1],
            1: [1, 3, 5, 6, 7],
            2: [1, 2, 3, 4, 5],
            3: [1, 2, 3, 4, 5],
            4: [0, 0, 0, 0, 0, 0, 0],
            Description_SWE:
                "Som Company Host kommer du att bli tilldelad två företag som du kommer att assistera inför och under mässan. Din huvudsakliga uppgift är att hjälpa företaget och vara dess informationskälla. Som Company Host får du en god möjlighet att knyta kontakter med företagen på mässan. Jobbet som Company Host är perfekt för den som vill komma i kontakt med företag och testa på ett professionellt arbetssätt.\n\nNågra veckor innan mässan ska du kontakta företaget och följa upp deras registrering och förbereda dem för den kommande mässan. Dagen innan mässan möter du upp ditt företag och visar dem var de ska stå, för att sedan vara behjälplig under hela mässan.\n\nSom Company Host förväntas du vara tillgänglig under båda mässdagarna för att svara på frågor och stötta företagen. Du behöver också vara tillgänglig den 10 oktober för en utbildning hur man ska förhålla sig till företagen och vad som förväntas av dig som Company Host.",
            Description_ENG:
                "As a Company Host, you will be assigned two companies that you will be responsible for during the fair. Your foremost assignment is to help and serve the company representatives with the information they need. As a company host you will get a unique opportunity to network with the companies you are assigned. Being a Company Host is ideal for those who want to get in contact with companies and experience working in a professional way.\n\nA couple of weeks before the fair your task is to make contact with your company to follow up on their registration and prepare them for the upcoming fair. The day before the fair, you will help the company find their booth space and prepare their booth, and then be available if the company needs any help.\n\nAs a company host, you are expected to be available during both days of the fair to answer questions and support the companies. You also have to be available on the 10th of October for information about how to interact with the company and what is expected of you.",
        },
        Event: {
            0: [2, 2, 2, 3, 4],
            1: [1, 2, 3, 4, 5],
            2: [1, 1, 2, 3, 4],
            3: [5, 4, 3, 2, 2],
            4: [0, 0, 0, 0, 0, 0, 0],
            Description_SWE:
                "Vill du vara med och organisera större företagsevent? Sök Eventvärd! Du kommer hjälpa företagsrepresentanter och dina medvärdar att leverera event veckan innan och under ARKAD. Detta innebär bland annat att du förbereder lokaler inför eventen, att du välkomnar gäster, lagar/serverar mat och ser till att besökare och företaget blir nöjda med eventet.\n\nEventvärdar representerar ARKAD mot studenter och företagsrepresentanter. Du kommer få kontakter med företag och ett utlopp för din samarbetsförmåga.\n\nSom Eventvärd behöver du primärt vara tillgänglig att jobba skift några vardagar mellan 6 november–10 november samt 13-15 november.",
            Description_ENG:
                "Would you like organising bigger events? Apply as Event Host! You will help company representatives and your co-hosts in creating events the weeks before and during ARKAD. This includes preparing the venues before the events, welcoming all guests and participants, make/serve food and making sure that visitors and the company are happy with the event. \n\nEvent Hosts represent ARKAD towards students and company representatives. You will get an outlet for your team working skills and connections to companies.\n\nAs Event Host you will primarily need to be available on weekdays between the 6th and 10th of November as well as the 13th to 15th.",
        },
        Film: {
            0: [5, 4, 3, 2, 1],
            1: [5, 4, 3, 2, 1],
            2: [5, 4, 3, 2, 1],
            3: [2, 2, 2, 3, 3],
            4: [0, 5, 0, 0, 0, 0, 0],
            Description_SWE:
                "Som Film Host kommer du, tillsammans med de andra Film Hosts och Film Koordinatorerna, att dokumentera mässan. Ni är ansvariga för att skapa kortare klipp att publicera på sociala medier under upptakten till samt under mässan. Du kommer också samla video av våra events och mässan för att kunna skapa ARKADs Aftermovie, som tackar företag och deltagande. Att vara en Film Host passar de som är sociala och kreativa. Att ha tidigare erfarenhet av videografi är meriterande.\n\nDu behöver vara tillgänglig några tider i veckorna innan ARKAD, samt under mässan och några tillfällen därefter. ",
            Description_ENG:
                "As a Film Host you will, together with the other Film Hosts and the Film Coordinators, document the fair. You are responsible for creating short clips presented on social media in the lead-up to as well as during the fair. You will also collect video of events and the fair and to produce the ARKAD Aftermovie, thanking the companies and participants. Being a Film Host suits those that are social and creative. Having some prior experience with videography is meritorious.\n\nYou will need to be available some times in the week leading up to ARKAD, as well as during the fair and a few occasions afterwards.",
        },
        Info_Desk: {
            0: [1, 2, 3, 4, 5],
            1: [1, 1, 1, 2, 3],
            2: [1, 2, 3, 4, 5],
            3: [5, 4, 3, 2, 1],
            4: [0, 0, 0, 0, 0, 0, 0],
            Description_SWE:
                "Är du hjälpsam och har lätt att hålla koll på information? Som Info Desk Host står du i en av informationsdiskarna i entrén till våra mässlokaler. Din främsta uppgift är att se till så företagsrepresentanter och studenter får svar på alla frågor som uppstår. Vi söker dig som är serviceinriktad och kan möta utmaningar med ett leende. Före mässan arbetar du med att förbereda infodiskarna så att all information och allt material finns tillgängligt när det gäller. Under mässan arbetar du i skift tillsammans med andra värdar i en av infodiskarna.\n\nDu behöver vara tillgänglig helgen innan mässan, samt för att arbeta några pass under mässdagarna.",
            Description_ENG:
                "Do you enjoy helping others and have a knack for remembering information? As an Info Desk Host, you are standing in one of the information desks at the entrance to our venues. From there you help both company representatives and students with all types of questions that may arise. As an Info Desk Host, you are service oriented and respond to all questions with a smile on your face. Apart from during the fair, the Info Desk Hosts work before the fair to prepare the Info Desks to ensure that all information that should be there is available. During the fair you will work in one of the info desks with other hosts.\n\nYou need to be available the weekend before the fair, as well as to work shifts during the fair.",
        },
        Interior: {
            0: [1, 2, 3, 2, 1],
            1: [5, 4, 3, 2, 1],
            2: [5, 4, 3, 2, 1],
            3: [1, 2, 3, 4, 5],
            4: [0, 0, 0, 5, 0, 0, 0],
            Description_SWE:
                "Är du intresserad av att dekorera och tycker det är kul med inredningsdesign? Som Interior Host har du i uppgift att hjälpa till att få mässan att vara estetiskt tilltalande samtidigt som den ger ett professionellt intryck. Större delen av arbetet görs före mässan, med huvuduppgiften att dekorera husen inför mässan. Under själva mässan hjälper du som Interior Host till när det behövs och ser till så att dekoren och husen ser bra ut. Efter mässan hjälper du till att städa undan dekoren.\n\nDu behöver vara tillgänglig att planera veckan innan ARKAD samt på plats på campus under helgen innan mässan då vi dekorerar!",
            Description_ENG:
                "Are you interested in decorations and interior design? As an Interior Host, you will be part of the creative process to make ARKAD an aesthetically pleasing and professional fair. Most of the work is done prior to the fair, with the primary goal to decorate the houses for the fair. During the fair you will make sure that the premises look good and help out when needed and after the fair, you will help take down the decorations.\n\nYou need to be available for planning the week prior to ARKAD as well as on-campus during the weekend before the fair when we decorate!",
        },
        Logistics: {
            0: [3, 4, 3, 2, 1],
            1: [5, 4, 3, 2, 1],
            2: [5, 4, 3, 2, 1],
            3: [1, 2, 3, 4, 5],
            4: [0, 0, 0, 0, 0, 5, 0],
            Description_SWE:
                "Som Logistics Host kommer du tillsammans med logistikgruppen se till så att allt funkar som det ska under mässdagarna. Ni står för samordning, organisation och transport av företagens gods. I er grupp kommer ni också koordinera flödet av bilar som ska lasta av grejer innan mässan. Då det är många bilar som kommer lasta av grejer gäller det att vara strukturerad. Vi söker dig som har en positiv inställning, vill lära dig nya saker, och tycker om att ha koll på grejer.\n\nDu behöver vara tillgänglig från helgen innan mässan fram tills sista mässdagen.",
            Description_ENG:
                "As Logistics Host you will, together with the logistics group, make sure that everything works during the fair. You are responsible for coordination, organisation, and transportation of the attending companies’ freight. We want you with a positive attitude, who wants to learn new things, and likes keeping track of stuff. You get to forge links with companies as well as get to know all other students in the group.\n\nYou need to be available from the weekend before the fair until the last fair day.",
        },
        Lounge: {
            0: [1, 2, 3, 4, 5],
            1: [1, 1, 1, 2, 3],
            2: [1, 2, 3, 4, 5],
            3: [5, 4, 3, 2, 1],
            4: [0, 0, 0, 0, 0, 0, 0],
            Description_SWE:
                "Som Lounge Host förbereder du och tar hand om loungerna runt ARKAD tillsammans med dina medvärdar. Att vara en bra Lounge-värd handlar om att vara serviceminded och att ha ett leende på läpparna. Du arbetar mestadels under mässan och arbetet handlar mest om att hålla det rent och fräscht och se till att mat och dryck alltid är tillgängliga. Du kommer, tillsammans med dina medvärdar, att ställas inför små och stora hinder som kräver snabba lösningar.\n\nUnder mässan får du dessutom en god chans att samtala med företagsrepresentanter och andra värdar i en avslappnad miljö. Sök till Lounge Host om du vill bidra till ARKAD genom att skapa den optimala loungen.\n\nDu behöver vara tillgänglig den 13-15 november.",
            Description_ENG:
                "As a Lounge Host, you will prepare and take care of the lounges at ARKAD together with your fellow hosts. Being a good Lounge Host is about being service minded and always having a big smile on your face. You will mostly work during the exhibition and your assignments will mostly consist of keeping the lounge fresh and making sure food and beverages are available at all times. You will face big and small problems, which you will solve together with your co-hosts.\n\nWhen you work in the lounge you will also have the opportunity to talk with company representatives and other ARKAD hosts. If you want to contribute to ARKAD through creating the optimal lounge, apply for Lounge Host!\n\nYou need to be available from November 13th to 15th.",
        },
        Lunch: {
            0: [1, 2, 3, 4, 5],
            1: [1, 1, 1, 2, 3],
            2: [1, 2, 3, 4, 5],
            3: [5, 4, 3, 2, 1],
            4: [0, 0, 0, 0, 0, 0, 0],
            Description_SWE:
                "Som Lunch Host jobbar du huvudsakligen med att ta hand om gästerna, duka, servera mat och se till att lunchområdet är fint och välkomnande under hela lunchen. Lunch Hosts är också ansvariga för entrén till lunchen och se till att gästerna kommer under sin tilldelade tid.\n\nDu jobbar främst under mässans två dagar men trots det kommer det att finnas tid att besöka mässan på eftermiddagen. Då alla mässans deltagare kommer till lunchen får du som Lunch Host chans att träffa många nya människor, både studenter och företagsrepresentanter.\n\nDu behöver vara tillgänglig under mässdagarna.",
            Description_ENG:
                "As a Lunch Host, you work in the lunch hall taking care of the guests, serving food, setting the tables and ensuring that the premises are kept nice and welcoming during the whole lunch. Lunch Hosts are also responsible for the entrance to the lunch hall and to ensure that guests arrive during the time they have been assigned. As a Lunch Host you work mainly during the fair, but you will be given time to visit the fair in the afternoon. Since all fair participants will visit the lunch, you as a Lunch Host will be able to meet a lot of new people, both students and company representatives.\n\nYou need to be available during the fair days.",
        },
        PSN: {
            0: [3, 4, 3, 2, 1],
            1: [5, 4, 3, 2, 1],
            2: [5, 4, 3, 2, 1],
            3: [1, 2, 3, 4, 5],
            4: [0, 0, 5, 0, 0, 0, 0],
            Description_SWE:
                "Som Power Supply & Network Host kommer du att vara en del i arbetet med allt som rör el och nätverk under mässan. Du kommer inför mässan vara delaktig i planeringen kring hur all el och nätverk skall förläggas, samt även att hjälpa till att montera allting. Under mässan så kommer du, tillsammans med andra värdar, arbeta under ett pass per dag med uppgift att lösa eventuella problem som kan uppstå.\n\nNär mässan är slut så kommer du hjälpa till att återställa lokalerna till ordinarie skick genom att packa ihop allt kablage som tidigare blivit utplacerade.\n\nDu behöver vara tillgänglig 11–12 november, när företagen anländer kvällen innan mässan, samt för att jobba några pass under mässdagarna.",
            Description_ENG:
                "As a Power Supply & Network Host, you will be working with the arrangement of everything regarding electricity and networks during the fair. Before the fair, you will participate in the planning of how the electricity and network of the fair will be routed. You will also help with the actual setup of everything regarding this. During the fair, you will be working with another host during one session per day with the aim to solve various problems that might arise.\n\nAfter the fair you will help restore the rooms to their original setup by packing all the cables you have previously placed.\n\nYou need to be available during the 11th–12th November, the evening before the fair, and for a few shifts during the fair days.",
        },
        Photo: {
            0: [5, 4, 3, 2, 1],
            1: [5, 4, 3, 2, 1],
            2: [5, 4, 3, 2, 1],
            3: [2, 2, 2, 3, 3],
            4: [5, 0, 0, 0, 0, 0, 0],
            Description_SWE:
                "Som Photo Host är din uppgift att dokumentera allt kring ARKAD. Till exempel events, lunchföreläsningar, Banketten och mässområdet. Tillsammans med PR-gruppen väljs sedan bilder ut att användas i framställningen av årets och framtida ARKAD. Som Photo Host passar du perfekt som är kreativ, effektiv, och har ett öga för bildkomposition. Det är positivt om du har tidigare erfarenhet av fotografering.\n\nDina arbetstider kommer främst vara veckan före och under mässan",
            Description_ENG:
                "As Photo Host your task is to document everything around ARKAD. For example events, lunch lectures, the Banquet and the fair. Together with the PR-group, pictures will be chosen to be used in the presentation of this year’s and future ARKADs. As Photo Host you are creative, effective, and have an eye for the composition of images. Previous experience with photography is a plus.\n\nYour work is mostly during the week before and during the fair.",
        },
        Student_Sessions: {
            0: [5, 4, 3, 2, 1],
            1: [1, 2, 3, 4, 5],
            2: [1, 2, 3, 4, 5],
            3: [1, 2, 2, 2, 3],
            4: [0, 0, 0, 0, 0, 0, 0],
            Description_SWE:
                "Student Sessions är ARKADs kontaktsamtal mellan företag och studenter. Vi behöver dig som är en hjälpsam och social person som Student Sessions Host. Du kommer ingå i det värdlag som inför mässan ordnar rummen kontaktsamtalen sker i. Under ARKAD jobbar du direkt med företagsrepresentanter och studenter så att alla kan få ut så mycket som möjligt från kontaktsamtalen genom att hjälpa deltagande och komma med information och assistans när det behövs.\n\nSom Student Sessions Host behöver du vara tillgänglig för att ordna rummen under helgen innan mässan, samt under mässan. ",
            Description_ENG:
                "Student Sessions is ARKADs platform for longer discussions between companies and students. We need you who are social and helpful as Student Sessions Host. You will be part of the host team that before the fair prepares the rooms for the sessions. During ARKAD you will work directly with students and company representatives to ensure meetings go as smoothly as possible by assisting participants and providing information when needed.\n\nAs Student Sessions Host you need to be available to set the rooms up the weekend before the fair, and during the fair.",
        },
        Wardrobe: {
            0: [5, 4, 3, 2, 1],
            1: [1, 1, 1, 2, 3],
            2: [1, 1, 2, 3, 4],
            3: [6, 5, 4, 2, 1],
            4: [0, 0, 0, 0, 0, 0, 0],
            Description_SWE:
                "Som Wardrobe Host, tillsammans med andra Wardrobe Hosts, håller du koll på en av våra garderober där företagsrepresentanter kan lämna och hämta sina ytterkläder. Din huvudsakliga uppgift är hantering av garderobsbiljetter. Ni arbetar främst under öppningen och stängningen av mässan då det är som mest folk i rörelse. Ni får välkomna alla företag till ARKAD och är de första personerna de träffar under mässan. Eftersom ni mestadels jobbar under öppning och stängning kommer du ha tid att utforska ARKAD under dagen. För denna posten behöver du vara serviceminded för att se till så företagen får ett bra första intryck på mässan.\n\nDu behöver vara tillgänglig för att jobba några skift under mässdagarna.",
            Description_ENG:
                "As a Wardrobe Host, you, together with the other Wardrobe Host, will manage one of our wardrobes where companies will leave and then retrieve their outerwear. Your main task is to handle coat tickets. You will mainly work during the opening and closing of the fair when it’s the most busy. This means you will be welcoming all companies to ARKAD and will be the first people they meet during the fair. Since you are mostly working at opening and closing, you will be able to enjoy ARKAD yourself during the day. For this position you have to be service-minded to make sure that the companies get a great first impression of the fair.\n\nYou will need to be available to work some shifts during the fair days.",
        },
        QA: {
            0: [4, 4, 3, 2, 1],
            1: [4, 4, 3, 2, 1],
            2: [4, 4, 3, 2, 1],
            3: [1, 2, 3, 4, 4],
            4: [0, 0, 0, 0, 5, 0, 0],
            Description_SWE: "Är du bra på att hitta buggar? Som QA Host kommer du att hjälpa IT-teamet att förbättra appen genom att testa och hitta funktionalitet som inte fungerar som den ska. Detta är en post som inte kräver så mycket arbete men som kommer underlätta arbetet mycket för IT-teamet.\n\nSom QA host förväntas du avsluta ditt jobb två veckor innan mässan och kommer därför behöva vara tillgänglig en kort period innan dess.",
            Description_ENG: "Are you good at finding bugs? As a QA Host you will help the IT team improve the app by testing it and finding features that don’t work as intended. This is a post that does not require a lot of work but will make the IT teams work a lot easier.\n\nAs a QA-host you are expected to finish your work two weeks before the fair and therefore will have to be available for a short period before that.",
        },
    },
];

const current_role_score = [
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

let current_question = 0;
let score = 0;
let language = "";
let language_questions = [];

prepare();

function prepare() {
    document.getElementById("btn").style.visibility = "hidden";
}

function language_selector_english() {
    document.getElementById("swedish").remove();
    document.getElementById("english").remove();
    document.getElementById("choose_language").remove();
    document.getElementById("btn").style.visibility = "visible";
    language = "ENG";
    load_question();
}

function language_selector_swedish() {
    document.getElementById("swedish").remove();
    document.getElementById("english").remove();
    document.getElementById("choose_language").remove();
    document.getElementById("btn").style.visibility = "visible";
    language = "SWE";
    document.getElementById("compass_img").src = "logga_med_bakgrund.png";
    load_question();
}

function load_question() {
    if (questions[current_question].idx == 4) {
        interest_multiple_choice();
    } else {
        const question_1 = document.getElementById("ques1");
        const separator = document.getElementById("separator");
        const question_2 = document.getElementById("ques2");
        const opt = document.getElementById("opt");

        if (language == "SWE") {
            question_separated =
                questions[current_question].question_SWE.split(" - ");
        } else {
            question_separated =
                questions[current_question].question_ENG.split(" - ");
        }
        question_1.textContent = question_separated[0];
        separator.textContent = "-";
        question_2.textContent = question_separated[1];
        opt.innerHTML = "";

        for (let i = 0; i < questions[current_question].answer.length; i++) {
            const choice_div = document.createElement("div");
            const choice = document.createElement("input");
            const choice_label = document.createElement("label");

            choice.type = "radio";
            choice.name = "answer";
            choice.value = i;

            if (language == "ENG" && questions[current_question].idx == 4) {
                choice_label.textContent = eng_question_4[i].text;
            } else {
                choice_label.textContent =
                    questions[current_question].answer[i].text;
            }

            choice_div.appendChild(choice);
            choice_div.appendChild(choice_label);
            opt.appendChild(choice_div);
        }
    }
}

function load_score() {
    const top_three = Object.keys(current_role_score[0])
        .map((key, index) => [key, Object.values(current_role_score[0])[index]])
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3)
        .map((pair) => pair[0]);

    const forbidden_name = {
        Info_Desk: "Info Desk",
        Student_Sessions: "Student Sessions",
        PSN: "Power Supply & Network",
    };

    const three_role_keys = Object.values(top_three);

    for (let i = 0; i < top_three.length; i++) {
        const key = top_three[i];
        if (forbidden_name.hasOwnProperty(key)) {
            top_three[i] = forbidden_name[key];
        }
    }

    let three_roles_with_description = [];
    for (let i = 0; i < three_role_keys.length; i++) {
        const key = three_role_keys[i];
        if (key in role_scoring[0]) {
            if (language == "SWE") {
                three_roles_with_description[i] = [
                    top_three[i],
                    role_scoring[0][key]["Description_SWE"],
                ];
            } else {
                three_roles_with_description[i] = [
                    top_three[i],
                    role_scoring[0][key]["Description_ENG"],
                ];
            }
        }
    }

    const welcome = document.getElementById("welcome");
    const role_1 = document.getElementById("role_1");
    const description_1 = document.getElementById("description_1");
    const role_2 = document.getElementById("role_2");
    const description_2 = document.getElementById("description_2");
    const role_3 = document.getElementById("role_3");
    const description_3 = document.getElementById("description_3");

    if (language == "SWE") {
        welcome.textContent =
            "Värdkompassen tror att du kommer passa bäst med rollen som:\n\n";
    } else {
        welcome.textContent =
            "The host compass believes that you will fit best with the role of";
    }
    role_1.textContent = `${three_roles_with_description[0][0]}\n`;
    description_1.textContent = `${three_roles_with_description[0][1]}\n\n`;
    role_2.textContent = `${three_roles_with_description[1][0]}\n`;
    description_2.textContent = `${three_roles_with_description[1][1]}\n\n`;
    role_3.textContent = `${three_roles_with_description[2][0]}\n`;
    description_3.textContent = `${three_roles_with_description[2][1]}\n\n`;
}

function interest_multiple_choice() {
    document.getElementById("ques2").remove();
    document.getElementById("separator").remove();
    const question = document.getElementById("ques1");
    const opt = document.getElementById("opt");

    if (language == "SWE") {
        question.textContent = questions[current_question].question_SWE;
    } else {
        question.textContent = questions[current_question].question_ENG;
    }
    opt.innerHTML = "";

    const eng_question_4 = [
        { text: "Photo" },
        { text: "Filming" },
        { text: "Working with electricity and technology" },
        { text: "Decoration" },
        { text: "Test Apps" },
        { text: "Work physically" },
        { text: "None of the above" },
    ];

    for (let i = 0; i < questions[current_question].answer.length; i++) {
        const choice_div = document.createElement("div");
        const choice = document.createElement("input");
        const choice_label = document.createElement("label");

        choice.type = "checkbox";
        choice.name = "answer";
        choice.value = i;

        if (language == "ENG" && questions[current_question].idx == 4) {
            choice_label.textContent = eng_question_4[i].text;
        } else {
            choice_label.textContent =
                questions[current_question].answer[i].text;
        }

        choice_div.appendChild(choice);
        choice_div.appendChild(choice_label);
        opt.appendChild(choice_div);
    }
}

function next_question() {
    if (current_question < questions.length - 1) {
        current_question++;
        load_question();
    } else {
        document.getElementById("opt").remove();
        document.getElementById("ques1").remove();
        document.getElementById("btn").remove();
        load_score();
    }
}

function check_answer() {
    if (questions[current_question].idx !== 4) {
        const selectedAns = parseInt(
            document.querySelector('input[name="answer"]:checked').value
        );

        const idx = current_question;
        for (const key in role_scoring[0]) {
            const role_score = role_scoring[0][key][idx][selectedAns];
            current_role_score[0][key] += role_score;
        }

        console.log(current_role_score);

        next_question();
    } else {
        const selectedAns = document.querySelectorAll(
            'input[name="answer"]:checked'
        );

        let answers = [];
        for (let i = 0; i < selectedAns.length; i++) {
            answers[i] = parseInt(selectedAns[i].value);
        }

        const idx = current_question;
        for (const key in role_scoring[0]) {
            for (let j = 0; j < answers.length; j++) {
                const role_score = role_scoring[0][key][idx][answers[j]];
                current_role_score[0][key] += role_score;
            }
        }

        console.log(current_role_score);

        next_question();
    }
}
