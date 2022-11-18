<template>
<div class="mx-4">

    <div v-katex:auto style="white-space: pre-line; text-align: justify; font-size: 120%">
        <img style="height: 300px; float: right;" class="mx-4" :src="require('@/assets/daantje.jpg')">
        {{`AI is lastig om te begrijpen, er zijn hele universiteiten die je leren hoe sommige dingen werken, en dan heb je niet eens alles gehad.
            Het makkelijkste is om je voor te stellen is een doos waar je aan de bovenkant een input, zoals een foto van een kat, in doet en het woord kat komt eruit. Je hebt geen idee hoe die doos die foto en het woord kat heeft gekoppeld, maar het werkt. 
            Onderzoekers hebben ooit een AI laten kijken naar veel data van vallende objecten op aarde. Het doel was de AI te laten voorspellen wat er ging gebeuren in een situatie die de AI nog nooit had gezien. De AI voorspelde perfect hoe dat object ging vallen, het antwoord was dus goed, maar toen de onderzoekers gingen kijken naar hoe de AI op dat antwoord is gekomen zagen ze dat de AI allemaal niet bestaande (of onbekende) natuurkundige constanten, eenheden en formules had gebruikt. 
            Dit voorbeeld zet je ook aan het denken over of wij wel op het “goede” natuurkundige pad zitten, omdat er kennelijk ook andere constanten zijn die wij niet kennen maar wel werken
        `}}
        <img style="height: 300px; float: left;" class="mx-4" :src="require('@/assets/neural_network.png')">
        {{`
            Maar nu wordt het een beetje wiskundig :’)

Een AI lijkt tot nu toe een doos waar je iets in doen en iets magisch komt eruit. Die magie ga ik nu uitleggen. 
Een neural network (AI) werkt met neurons, dat zijn een soort bolletjes waar iets ingaat en iets uitgaat. Die neuron krijgen dus inputs en die zet hij om in een output. 
Als meerdere neurons samen zet kunnen ze patronen in de inputs herkennen.
Als je HEEL VEEL neurons samen zet kunnen ze patronen in patronen herkennen en daar kan je wat mee. 
Maar hoe “weten” die neurons wat voor output ze moeten sturen. Dat weten ze door de inputs en outputs te veranderen. 
        `}}

        {{`
        
Stel je voor je wilt een bepaalde output van een neuron bij een bepaalde input 
Enbij  een andere combinatie van inputs een andere output:
Dus:
input 1 = $1, 1, 0$
Nodige output = 1

Input 2= $0, 1, 1$
Nodige output 2 = 0

Elke neuron geeft elke input een soort belangrijkheidsgetal, die worden “weights” genoemd.
In het voorbeeld:
Kennelijk heeft de eerste input effect op de output (input1[0] == 1 && output == 1) (input2[0] == 0 && output == 0)
Dus we geven de eerste weight een “belangrijkheid” van 1
De tweede blijkt tot nu toe geen effect te hebben op de output dus we geven hem een weight van 0
De laatste lijkt een soort omgekeerd effect te hebben op de output dus we geven hem de weight van -1
Dus de weights zijn nu: $1, 0, -1$

Ik gebruikt hier [ ] om een lijst aan te geven
Als ik lijst_naam[index] gebruikt verwijs ik naar het item op die index, item 1 is index 0

Als je nu in de neuron de $[1, 1, 0]$ input
Doet de neuron de berekening: 
$Input[0] *weights[0] + Input[1] *weights[1] + Input[2] *weights[2] $=
$ 1 * 1 + 1 * 0 + 0 * -1 = 1 $
Dus de output is 1
Als we nu de input $[0, 1, 1]$ nemen: 
$Input[0] *weights[0] + Input[1] *weights[1] + Input[2] *weights[2]$ =
$ 0 * 1 + 1 * 0 + 1 * -1 = -1 $

Bij die laatste zien we dat hij -1 geeft terwijl 0 verwachtte. Hier is een oplossing voor.
De output (en dus ook inputs voor volgende neurons) vallen alleen tussen 0 en 1
Dus we moeten alle mogelijke outputs ($-\\infty$ tot $\\infty$) tussen 0 en 1 proppen.
Hiervoor gebruiken we een “sigmoid function” `}}{{sigmoid_formula}}
    <img style="height: 300px; align: start; display: flex" class="ma-2"  :src="require('@/assets/sigmoid_function.png')"><br>
    {{`
Deze functie geeft voor alle input waardes een output tussen $-\\infty$ en $\\infty$
Dit is handig omdat je dan de uitkomst van die som van al die $weights$ een valide output geeft.

Daarnaast is er nog een probleem die we nu hebben
Stel je voor je hebt een neuron die aan (1 moet geven als output) gaat als een bepaald aantal inputs aan is (dus dan maakt het niet uit welke inputs dat zijn).
Dus: 
$input = [1, 1, 1, 0]$ en $input = [1, 1, 1, 1]$ moet geven: $0$
En 
$input = [0, 0, 1, 1]$ en $input = [1, 1, 0, 0]$ moet geven: $1$

Je ziet hier dat het niet uitmaakt welke volgorde de input staat dus de $weights$ bij elke input moeten niet uitmaken, dus de $weights$ zijn allemaal 1 of -1, dat weten we nu nog niet.
$weights = [1, 1, 1, 1]$ of $weights = [-1, -1, -1, -1]$ 

Als je nu iets input dat niet $[a, b, c, d]$, waar $a + b + c + d > 0.5$ is is de output altijd 1, en dat willen we niet altijd.
Wat er is bedacht is een $bias$, dat is een getal die bij elke neuron aan het einde van de weight berekening bij het getal wordt opgeteld.
Dus bij ons voorbeeld:
$input[0] * weight[0] + input[1] * weight[1] + input[2] * weight[2] + input[3] * weight[3] + $bias$ = output$
Met $input = [1, 1, 1, 0]$, $bias = 3$ en $weight = -1$
Geeft:
$1 * -1 + 1 * -1 + 1 * -1 + 0 * -1 + 3 = 0$
De $input = [0, 0, 1, 1]$ (en dezelfde $weights$ en $bias$)
Geeft:
$0 * - 1 + 0 * -1 + 1 * -1 + 1 * -1 + 3= 1$
En dat zijn precies de outputs die we willen.

Dit was echt de basis basis van hoe ze werken. Met deze instellingen kan je elke neuron bij elke input elke output laten geven.
Echte grote netwerken zoals die van google hebben soms wel miljoenen neurons met miljarder connecties (dus heel veel weight). Wat die weights zijn is een soort slim gokken (veel wiskunde), tot jij blij bent met de output. 
`}}
<img style="height: 300px"  :src="require('@/assets/google_ai.jpg')">

</div>

</div>

</template>

<script>


export default {
    name: 'HoeAIPage.vue',
    data(){
        return {
            sigmoid_formula: '$ f(x) = \\frac{x}{\\sqrt{1+x^{2}}} $',
        }
    }
}
</script>

<style>

</style>