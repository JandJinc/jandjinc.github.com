<template>

    <div class="pa-4">
        <v-timeline>
            <v-timeline-item
                v-for="(item, i) in timeline"
                :key="i"
                :dot-color="item.color"
                size="small"
            >
                <template v-slot:opposite>
                    <div
                    :class="`pt-1 headline font-weight-bold`"
                    :style="{color: item.color}"
                    v-text="item.year"
                    ></div>
                </template>
                <div style="background: solid; background-color: rgba(0,0,0, 0.7); border-radius: 15px; border-color: " class="pa-4">
                    <h2 :class="`mt-n1 headline font-weight-light mb-4`"
                    :style="{color: item.color}">
                    <b>{{item.title}}</b>
                    </h2>
                    <div style="font-size: 120%; color: white">
                    {{item.text}}
                    </div>
                </div>
            </v-timeline-item>
        </v-timeline>
    </div>
    
    <i>De tekst uit deze pagina is "geinspireerd" :) door: </i> <a href="https://appmaster.io/nl/blog/tijdlijn-kunstmatige-intelligentie-ai-2022-update" target="_blank">AppMaster</a> & <a href="https://www.sutori.com/en/story/tijdlijn-kunstmatige-intelligentie--YpU6g6TZ9bhRBgg2rsvNgAxV" target="_blank">Sutori</a>

    
    </template>
    
    <script>
    
    
    export default {
        name: 'GeschiedenisAIPage',
        data(){
            return {
                timeline: [
                    {
                        color: '#0078ff',
                        year: '350 v. Chr.',
                        title: 'Aristoteles en Logica',
                        text: `Aristoteles begon met logica in het vak intelligentie. Hij studeerde over denken, hij heeft toen de wereldberoemde syllogismen bedacht. Dat is het begin van het oneindig groot onderwerp. De syllogismen hebben er voor gezorgd dat we computers conclusies kunnen laten trekken. Om een computer te kunnen laten leren moet je wel er voor zorgen dat ze conclusies kunnen trekken, dat is namelijk een leermoment.`,
                    },
                    {
                        color: '#bd00ff',
                        year: '1270',
                        title: 'Ramon Llull',
                        text: `De Spaanse filosoof Ramon Llull (1232-1315) creëerde verschillende logische machines om kennis te creëren via logische procedures; hij noemde zijn apparaten mechanische wezens die fundamentele en onbetwistbare feiten konden combineren met behulp van eenvoudige logische bewerkingen de productie van alle mogelijke kennis. Gottfried Leibniz heeft de ideeën van Llull nieuw leven ingeblazen.`,
                    },
                    {
                        color: '#ff9a00',
                        year: '1650',
                        title: 'Blaise Pascal',
                        text: `Hij heeft de eerste mechanische rekenmachine ontworpen die kon optellen en aftrekken. Ook heeft hij kansrekening samen met Fermat grondgelegd. Die din gen zijn grote aspecten in computers en in de intelligentie. Nu maakt iedereen nog steeds gebruik van een rekenmachine, maar dat net wat gecompliceerder.`,
                    },
                    {
                        color: '#01ff1f',
                        year: '1943 ',
                        title: 'Walter Pitts en Warren McCulloch',
                        text: `Walter Pitts en Warren McCulloch onderzochten netwerken van geïdealiseerde kunstmatige neuronen en toonden zij aan hoe zij logische basisbewerkingen konden uitvoeren. Zij waren de eersten die beschreven wat latere onderzoekers een neuraal netwerk zouden noemen. Een jonge Marvin Minsky, toen 24 jaar oud, werd geïnspireerd door Pitts en McCulloch. In 1951 creëerde hij (samen met Dean Edmonds) de eerste neurale netwerkmachine, de SNARC. De volgende 50 jaar zou Minsky een van de belangrijkste leiders en vernieuwers van AI zijn.`,
                    },
                    {
                        color: '#e3ff00',
                        year: '1950',
                        title: 'Alan Turing',
                        text: `Alan Turing is erachter gekomen dat het mogelijk is om kunstmatige intelligentie net zo slim te maken als mensen. Hier is hij achter gekomen door de Turing machine.
Hij heeft een test ontworpen genaamd: The Turing test. Hij test hiermee of een computer ook menselijke intelligentie kan vertonen.`,
                    },
                    {
                        color: '#FF7F50',
                        year: '1956',
                        title: 'Miller en Psychologie',
                        text: `De Amerikaanse George A. Miller onderzocht psychologie, en kwam in 1956 op 'de magical number 7' theorie uit. Dit houdt in dat mensen gemiddeld niet meer dan 7 getallen achter elkaar kunnen onthouden. Volgens Miller komt dit door het korte termijn-geheugen dat niet de mogelijkheid biedt om een combinatie van min of meer 7 getallen te onthouden.`,
                    },
                    {
                        color: '#21B20C',
                        year: '1956-1974',
                        title: 'Na de Dartmouth Workshop',
                        text: `Voor de meeste mensen waren de jaren na de Dartmouth Workshop gewoonweg "verbazingwekkend": computers losten woordproblemen uit algebra op, bewezen meetkundige stellingen en leerden Engels praten. Aan het eind van de jaren zestig hadden weinigen gedacht dat dergelijk "intelligent" gedrag van machines denkbaar was. Privé en in gedrukte vorm spraken academici het grote optimisme uit dat binnen minder dan 20 jaar een volledig intelligente machine zou worden ontwikkeld. Het nieuwe gebied trok aanzienlijke financiering aan van overheidsinstellingen zoals DARPA.`,
                    },
                    {
                        color: '#B4161C',
                        year: '1974-1980',
                        title: 'De eerste AI-winter',
                        text: `In de jaren zeventig kreeg AI te maken met kritiek en financiële tegenslagen. De moeilijkheden waarmee AI-onderzoekers werden geconfronteerd, werden door hen niet onderkend. Hun hoge verwachtingen waren veel hoger gespannen dan redelijk was, en toen de beloofde voordelen uitbleven, verdween de overheidsfinanciering voor AI. Tegelijkertijd, tien jaar na Marvin Minsky's vernietigende kritiek op perceptoren, sluimerde het connectionisme (of neurale netwerken). Ondanks de negatieve kijk van het publiek op AI in de late jaren 1970, werden nieuwe ideeën verkend in logische programmering, gezond verstand redeneren, en een verscheidenheid aan andere gebieden.`,
                    },
                    {
                        color: '#F3C815',
                        year: '1980-1987',
                        title: 'AI Boom',
                        text: `Vanaf de begindagen van AI was kennis een belangrijk aandachtspunt. Expertsystemen, een vorm van AI-programma, werden in de jaren tachtig wereldwijd door bedrijven overgenomen en kennis werd de kern van het AI-onderzoek. In de jaren negentig investeerde de Japanse regering zwaar in AI met haar vijfde-generatiecomputerinitiatief. De heropleving van het connectionisme in het werk van John Hopfield en David Rumelhart begin jaren tachtig was een ander bemoedigend moment. Opnieuw was AI geslaagd.`,
                    },
                    {
                        color: '#031B3D',
                        year: '1987-1993',
                        title: 'De tweede AI-winter',
                        text: `In de jaren tachtig volgde de aandacht van het bedrijfsleven voor AI het klassieke patroon van een economische zeepbel. De crash werd veroorzaakt doordat commerciële leveranciers niet in staat waren verschillende werkbare oplossingen te produceren. Honderden bedrijven gingen failliet en veel investeerders weigerden erin te investeren. Velen geloofden dat de technologie niet levensvatbaar was, maar toch bleef het onderzoek doorgaan. Talrijke deskundigen, zoals Rodney Brooks en Hans Moravec, pleitten voor een radicaal nieuw soort AI.`,
                    },                    
                    {
                        color: '#FE007D',
                        year: '1993-2011',
                        title: 'AI',
                        text: `Het meer dan een halve eeuw oude gebied van de kunstmatige intelligentie heeft enkele van zijn meest fundamentele doelstellingen bereikt. Het wordt momenteel effectief gebruikt in de hele technologiesector, zij het enigszins stilletjes. Een deel daarvan was het resultaat van verbeterde computercapaciteit, een ander deel kwam tot stand door zich te concentreren op specifieke geïsoleerde kwesties en te streven naar de hoogste niveaus van wetenschappelijke verantwoording. En toch was de reputatie van AI in het bedrijfsleven niet zo geweldig. Binnen het vakgebied was er beperkte overeenstemming over waarom AI in de jaren zestig zijn belofte van intelligentie op menselijk niveau niet had kunnen waarmaken. AI was opgesplitst in een aantal verschillende disciplines die zich elk op een ander probleem of een andere methode richtten, maar toch de illusie wekten dat zij naar hetzelfde doel streefden.`,
                    },
                    {
                        color: '#1ABA92',
                        year: 'Nu',
                        title: 'Nu',
                        text: `Nu worden er grote stappen gemaakt in het kennen en kunnen van AI. Tegenwoordig is Nvidia een grote speler in de AI innovatie. Zij maken ook de computers die AI dingen kan laten doen die het nooit eerder heeft kunnen doen. `,
                    },
                ]
            }
        }
    }
    </script>
    
    <style>
    
    </style>