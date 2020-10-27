import { Building } from 'typings/Building';

const moduleRootFiles = require.context('../', true, MODULE_ROOT_I18N_FILES);
const furtherFiles = require.context('./nl_NL/', true, /.*(\/index)?\.js(on)?/);
const modules = {
    appstore: {
        save: 'Opslaan',
        reset: 'Reset',
        noMapkit:
            'Deze module werkt niet met de Mapkit kaart door de beperkingen van Mapkit!',
        dev:
            'Deze module is nog in ontwikkeling. Activeren kan leiden tot incomplete en niet werkende functies!',
        closeWarning: {
            title: 'Niet opgeslagen wijzigingen',
            text:
                'Je hebt aanpassingen gedaan in de AppStore die je nog niet hebt opgeslagen. Reset of sla de aanpassingen op om de AppStore te sluiten.',
            close: 'Sluit melding',
        },
    },
    settings: {
        name: 'Instellingen',
        save: 'Opslaan',
        discard: 'Negeer wijzigingen',
        reset: 'Reset',
        export: 'Exporteer',
        import: 'Importeer',
        resetWarning: {
            title: 'Reset de instellingen',
            text:
                'Weet je zeker dat je de instellingen wilt reseten naar de standaard waarden? Dit kan niet ongedaan gemaakt worden!',
            close: 'Annuleren',
            total: 'Alle instellingen',
            module: 'Alleen van deze module',
        },
        closeWarning: {
            title: 'Niet opgeslagen wijzigingen',
            text:
                'Je hebt aanpassingen gedaan die je nog niet hebt opgeslagen. Reset of sla de aanpassingen op om de instellingen te sluiten',
            close: 'Sluit melding',
        },
        changeList: {
            true: 'Aan',
            false: 'Uit',
        },
    },
} as { [moduleId: string]: { [key: string]: unknown } };
moduleRootFiles
    .keys()
    .forEach(key => (modules[key.split('/')[2]] = moduleRootFiles(key)));

const t = {} as { [key: string]: unknown };


furtherFiles
    .keys()
    .forEach(
        key => (t[key.split('/')[1].replace(/\..*$/, '')] = furtherFiles(key))
    );

export default {
    modules,
    ...t,
    error: {
        title: 'LSS Manager: Error',
        msg:
            'Als deze foutmelding regelmatig optreedt, neem dan contact op met het LSSM team!',
    },
    warnings: {
        version: {
            title: 'Verkeerde LSS Manager versie',
            text:
                'Beste gebruiker, helaas moeten we vaststellen dat je niet de laatste versie van LSS Manager gebruikt. De nieuwste versie is {version}, maar je gebruikt {curver}. Herlaad het spel zonder cache (met Ctrl + F5, op Apple apparaten command + R), dit zou de fout moeten oplossen. Als de fout blijft bestaand, meld het dan aan het LSS Manager team! Als je de verkeerde versie gebruikt, kunnen we niet de volledige functionaliteit garanderen van de LSS-Manager.',
            close: 'Sluit melding en herlaad het spel (aanbevolen)',
            abort: 'Sluit melding zonder te herladen',
        },
    },
    globalSettings: {
        name: 'Algemene instellingen',
        labelInMenu: {
            title: 'Label in plaats van afbeelding in menu',
            description:
                'Laat een simpel label zien in het menu in plaats van het LSSM logo',
        },
    },
    vehicles: [
        {
            caption: 'SI-2',
            color: '#cc0000',
            minPersonnel: 1,
            maxPersonnel: 2,
            credits: 5_000,
            coins: 25,
        },
        {
            caption: 'TS 8/9',
            color: '#990000',
            minPersonnel: 1,
            maxPersonnel: 9,
            credits: 5_000,
            coins: 25,
        },
        {
            caption: 'Autoladder',
            color: '#791515',
            minPersonnel: 1,
            maxPersonnel: 3,
            credits: 10_000,
            coins: 30,
            special: 'Benodigd vanaf 3 brandweerposten.',
        },
        {
            caption: 'DA - Officier van Dienst',
            color: '#a51212',
            minPersonnel: 1,
            maxPersonnel: 1,
            credits: 10_000,
            coins: 25,
            special: 'Benodigd vanaf 6 brandweerposten.',
        },
        {
            caption: 'Hulpverleningsvoertuig',
            color: '#aa2222',
            minPersonnel: 1,
            maxPersonnel: 3,
            credits: 12_180,
            coins: 25,
            special: 'Benodigd vanaf 4 brandweerposten.',
        },
        {
            caption: 'Adembeschermingsvoertuig',
            color: '#8b1818',
            minPersonnel: 1,
            maxPersonnel: 3,
            credits: 11_680,
            coins: 25,
            special: 'Benodigd vanaf 5 brandweerposten.',
        },
        {
            caption: 'TST 8/9',
            color: '#880000',
            minPersonnel: 1,
            maxPersonnel: 9,
            credits: 5_000,
            coins: 25,
        },
        {
            caption: 'TST 6/7',
            color: '#9c1c1c',
            minPersonnel: 1,
            maxPersonnel: 7,
            credits: 5_000,
            coins: 25,
        },
        {
            caption: 'TST 4/5',
            color: '#d92626',
            minPersonnel: 1,
            maxPersonnel: 5,
            credits: 5_000,
            coins: 25,
        },
        {
            caption: 'TS 4/5',
            color: '#bb0000',
            minPersonnel: 1,
            maxPersonnel: 5,
            credits: 5_000,
            coins: 25,
        },
        {
            caption: 'Slangenwagen',
            color: '#882222',
            minPersonnel: 1,
            maxPersonnel: 9,
            credits: 17_300,
            coins: 25,
            special: 'Benodigd vanaf 7 brandweerposten.',
        },
        {
            caption: 'Verkenningseenheid Brandweer',
            color: '#662222',
            minPersonnel: 1,
            maxPersonnel: 4,
            credits: 18_300,
            coins: 25,
            schooling: 'Brandweer - Verkenningseenheid Brandweer',
            shownSchooling: 'VEB',
            special: 'Benodigd vanaf 10 brandweerposten.',
        },
        {
            caption: 'TST-NB 8/9',
            color: '#770000',
            minPersonnel: 1,
            maxPersonnel: 9,
            credits: 5_000,
            coins: 25,
        },
        {
            caption: '',
            color: '',
            minPersonnel: '',
            maxPersonnel: '',
            credits: '',
            coins: '',
        },
        {
            caption: 'TST-NB 6/7',
            color: '#aa0000',
            minPersonnel: 1,
            maxPersonnel: 7,
            credits: 5_000,
            coins: 25,
        },
        {
            caption: 'TST-NB 4/5',
            color: '#d02525',
            minPersonnel: 1,
            maxPersonnel: 5,
            credits: 5_000,
            coins: 25,
        },
        {
            caption: 'Ambulance',
            color: '#f59f00',
            minPersonnel: 1,
            maxPersonnel: 2,
            credits: 5_000,
            coins: 25,
        },
        {
            caption: 'TS 6/7',
            color: '#ad1f1f',
            minPersonnel: 1,
            maxPersonnel: 7,
            credits: 5_000,
            coins: 25,
        },
        {
            caption: 'Hoogwerker',
            color: '#992222',
            minPersonnel: 1,
            maxPersonnel: 3,
            credits: 10_000,
            coins: 30,
            special: 'Benodigd vanaf 3 brandweerposten.',
        },
        {
            caption: 'DA - Hoofdofficier van Dienst',
            color: '#b81414',
            minPersonnel: 1,
            maxPersonnel: 1,
            credits: 25_500,
            coins: 25,
            schooling: 'Brandweer - Hoofd Officier van Dienst - Brandweer',
            shownSchooling: 'HOvD-B',
            special: 'Benodigd vanaf 13 brandweerposten.',
        },
        {
            caption: 'DA',
            color: '#ca1616',
            minPersonnel: 1,
            maxPersonnel: 4,
            credits: 2_000,
            coins: 10,
        },
        {
            caption: 'DB Klein',
            color: '#cc2222',
            minPersonnel: 1,
            maxPersonnel: 9,
            credits: 2_500,
            coins: 12,
        },
        {
            caption: 'DA Noodhulp',
            color: '#001bcc',
            minPersonnel: 1,
            maxPersonnel: 2,
            credits: 5_000,
            coins: 25,
        },
        {
            caption: 'Lifeliner',
            color: '#e09200',
            minPersonnel: 1,
            maxPersonnel: 4,
            credits: 500_000,
            coins: 30,
            schooling: 'Ambulance - MMT-Bemanningslid',
            shownSchooling: 'MMT-Bemanningslid',
            special: 'Per 25 gebouwen (alle gebouwen) kan één Lifeliner gekocht worden',
        },
        {
            caption: 'DA - Adviseur Gevaarlijke stoffen',
            color: '#e61919',
            minPersonnel: 1,
            maxPersonnel: 2,
            credits: 19_200,
            coins: 25,
            schooling: 'Brandweer - Adviseur Gevaarlijke Stoffen',
            shownSchooling: 'AGS',
            special: 'Benodigd vanaf 11 brandweerposten.',
        },
        {
            caption: 'DB Noodhulp',
            color: '#142ab8',
            minPersonnel: 1,
            maxPersonnel: 2,
            credits: 6_000,
            coins: 25,
        },
        {
            caption: 'Haakarmvoertuig',
            color: '#bb2222',
            minPersonnel: 1,
            maxPersonnel: 3,
            credits: 5_000,
            coins: 12,
            schooling: 'Brandweer - Brandweerchauffeur-zwaar',
            shownSchooling: 'Brandweerchauffeur-zwaar',
        },
        {
            caption: 'Adembeschermingshaakarmbak',
            color: '#552222',
            minPersonnel: 0,
            maxPersonnel: 0,
            credits: 6_000,
            coins: 12,
            special: 'Haakarmvoertuig benodigd',
        },
        {
            caption: 'Politiehelikopter',
            color: '#3131e8',
            minPersonnel: 1,
            maxPersonnel: 3,
            credits: 300_000,
            coins: 30,
            schooling: 'Politie - Politiehelikopter',
            shownSchooling: 'Politiehelikopter',
        },
        {
            caption: 'Watertankhaakarmbak',
            color: '#332222',
            minPersonnel: 0,
            maxPersonnel: 0,
            credits: 6_000,
            coins: 12,
            special: 'Haakarmvoertuig benodigd',
        },
        {
            caption: 'Zorgambulance',
            color: '#ffb61a',
            minPersonnel: 1,
            maxPersonnel: 2,
            credits: 5_000,
            coins: 25,
        },
        {
            caption: 'Commandovoertuig',
            color: '#dc1818',
            minPersonnel: 1,
            maxPersonnel: 3,
            credits: 27_500,
            coins: 25,
            schooling: 'Brandweer - Brandweerchauffeur-zwaar',
            shownSchooling: 'Brandweerchauffeur-zwaar',
            special: 'Benodigd vanaf 14 brandweerposten.',
        },
        {
            caption: 'Commandohaakarmbak',
            color: '#442222',
            minPersonnel: 0,
            maxPersonnel: 0,
            credits: 6_000,
            coins: 12,
            special: 'Haakarmvoertuig benodigd',
        },
        {
            caption: 'Waterongevallenvoertuig',
            color: '#bf2222',
            minPersonnel: 4,
            maxPersonnel: 6,
            credits: 10_000,
            coins: 25,
            schooling: 'Brandweer - Duiker/Duikploegleider',
            shownSchooling: 'Duiker/Duikploegleider',
        },
        {
            caption: 'Watertankwagen',
            color: '#772222',
            minPersonnel: 1,
            maxPersonnel: 3,
            credits: 17_000,
            coins: 25,
            special: 'Benodigd vanaf 7 brandweerposten.',
        },
        {
            caption: 'Officier van Dienst - Politie',
            color: '#0006b9',
            minPersonnel: 1,
            maxPersonnel: 1,
            credits: 10_000,
            coins: 25,
            schooling: 'Politie - Officier van Dienst - Politie',
            shownSchooling: 'Officier van Dienst - Politie',
        },
        {
            caption: 'Waterongevallenaanhanger',
            color: '#288f28',
            minPersonnel: 0,
            maxPersonnel: 0,
            credits: 9_000,
            coins: 12,
            special: 'TS, TST, TST-NB, SI-2, WO, HV, DA/DB benodigd',
        },
        {
            caption: 'MMT-Auto',
            color: '#c47f00',
            minPersonnel: 1,
            maxPersonnel: 4,
            credits: 30_000,
            coins: 12,
            schooling: 'Ambulance - MMT-Bemanningslid',
            shownSchooling: 'MMT-Bemanningslid',
            special: 'Per 10 Ambulanceposten (Standplaatsen, VWS-posten en uitbreidingen) kan één MMT-Auto gekocht worden',
        },
        {
            caption: 'Officier van Dienst - Geneeskunde',
            color: '#b07914',
            minPersonnel: 1,
            maxPersonnel: 1,
            credits: 25_000,
            coins: 25,
            schooling: 'Ambulance - Officier van Dienst Geneeskunde',
            shownSchooling: 'Officier van Dienst Geneeskunde',
            special: 'Benodigd vanaf de 8 gebouwen en/of uitbreiding',
        },
        {
            caption: 'ME Commandovoertuig',
            color: '#000080',
            minPersonnel: 2,
            maxPersonnel: 4,
            credits: 10_000,
            coins: 25,
            schooling: 'Politie - Mobiele Eenheid',
            shownSchooling: 'Mobiele Eenheid',
        },
        {
            caption: 'ME Flexbus',
            color: '#000073',
            minPersonnel: 4,
            maxPersonnel: 8,
            credits: 10_000,
            coins: 25,
            schooling: 'Politie - Mobiele Eenheid',
            shownSchooling: 'Mobiele Eenheid',
        },
        {
            caption: 'Crashtender (8x8)',
            color: '#ad0e0e',
            minPersonnel: 2,
            maxPersonnel: 3,
            credits: 60_000,
            coins: 25,
            schooling: 'Brandweer - Vliegtuigbrandbestrijding',
            shownSchooling: 'Vliegtuigbrandbestrijding',
        },
        {
            caption: 'Crashtender (6x6)',
            color: '#9c0b0b',
            minPersonnel: 2,
            maxPersonnel: 3,
            credits: 40_000,
            coins: 25,
            schooling: 'Brandweer - Vliegtuigbrandbestrijding',
            shownSchooling: 'Vliegtuigbrandbestrijding',
        },
        {
            caption: 'Crashtender (4x4)',
            color: '#f04242',
            minPersonnel: 2,
            maxPersonnel: 3,
            credits: 15_000,
            coins: 25,
            schooling: 'Brandweer - Vliegtuigbrandbestrijding',
            shownSchooling: 'Vliegtuigbrandbestrijding',
        },
        {
            caption: 'Airport Fire Officer / On Scene Commander',
            color: '#8b0707',
            minPersonnel: 1,
            maxPersonnel: 2,
            credits: 12_000,
            coins: 25,
            schooling: 'Brandweer - Airport Fire Officer / On Scene Commander',
            shownSchooling: 'Airport Fire Officer / On Scene Commander',
        },
        {
            caption: 'Dompelpomphaakarmbak',
            color: '#681212',
            minPersonnel: 0,
            maxPersonnel: 0,
            credits: 6_000,
            coins: 12,
            special: 'Haakarmvoertuig benodigd',
        },
        {
            caption: 'DM Noodhulp',
            color: '#0008e7',
            minPersonnel: 1,
            maxPersonnel: 1,
            credits: 2_500,
            coins: 18,
        },
        {
            caption: 'DA Hondengeleider',
            color: '#0d0d73',
            minPersonnel: 1,
            maxPersonnel: 2,
            credits: 8_000,
            coins: 25,
            schooling: 'Politie - Hondengeleider',
            shownSchooling: 'Hondengeleider',
        },
        {
            caption: 'DB Hondengeleider',
            color: '#000090',
            minPersonnel: 1,
            maxPersonnel: 2,
            credits: 10_000,
            coins: 25,
            schooling: 'Politie - Hondengeleider',
            shownSchooling: 'Hondengeleider',
        },
        {
            caption: 'PM-OR | Materieelvoertuig - Oppervlakteredding',
            color: '#450c0c',
            minPersonnel: 4,
            maxPersonnel: 9,
            credits: 10_000,
            coins: 25,
            schooling: 'Brandweer - Oppervlakteredder',
            shownSchooling: 'Oppervlakteredder',
        },
        {
            caption: 'TS-OR | Tankautospuit - Oppervlakteredding',
            color: '#220000',
            minPersonnel: 4,
            maxPersonnel: 9,
            credits: 10_000,
            coins: 25,
            schooling: 'Brandweer - Oppervlakteredder',
            shownSchooling: 'Oppervlakteredder',
        },
        {
            caption: 'HulpverleningsHaakarmbak',
            color: '#440000',
            minPersonnel: 0,
            maxPersonnel: 0,
            credits: 6_000,
            coins: 12,
            special: 'Haakarmvoertuig benodigd',
        },
        {
            caption: 'Rapid Responder',
            color: '#b16b00',
            minPersonnel: 1,
            maxPersonnel: 1,
            credits: 2_500,
            coins: 18,
        },
        {
            caption: 'AT-Commandant',
            color: '#0000e1',
            minPersonnel: 1,
            maxPersonnel: 2,
            credits: 10_000,
            coins: 25,
            schooling: 'Politie - Operator AT',
            shownSchooling: 'Operator AT',
        },
        {
            caption: 'AT-Operator',
            color: '#0000b4',
            minPersonnel: 2,
            maxPersonnel: 4,
            credits: 10_000,
            coins: 25,
            schooling: 'Politie - Operator AT',
            shownSchooling: 'Operator AT',
        },
        {
            caption: 'AT-Materiaalwagen',
            color: '#1a1aff',
            minPersonnel: 1,
            maxPersonnel: 2,
            credits: 15_000,
            coins: 25,
            schooling: 'Politie - Operator AT',
            shownSchooling: 'Operator AT',
        },
        {
            caption: 'DA Voorlichter',
            color: '#570f0f',
            minPersonnel: 1,
            maxPersonnel: 1,
            credits: 15_000,
            coins: 25,
            schooling: 'Brandweer - Voorlichter',
            shownSchooling: 'Voorlichter',
            special: 'Benodigd vanaf 14 brandweerposten.',
        },
        {
            caption: 'DA Officier van Dienst - Geneeskundig / Rapid Responder',
            color: '#dd8600',
            minPersonnel: 1,
            maxPersonnel: 1,
            credits: 25_000,
            coins: 25,
            schooling: 'Ambulance - Officier van Dienst Geneeskunde',
            shownSchooling: 'Officier van Dienst Geneeskunde',
            special: 'Per 10 Ambulanceposten (Standplaatsen, VWS-posten en uitbreidingen) kan één OVDG-RR gekocht worden',
        },
    ],
    buildings: [
        {
            caption: 'Brandweer kazerne',
            color: '#bb0000',
            coins: 30,
            credits: 100_000,
            extensions: [
                {
                    caption: 'Ambulance standplaats',
                    credits: 100_000,
                    coins: 20,
                    duration: '7 Dagen',
                },
                {
                    caption: 'Waterongevallenbestrijding',
                    credits: 400_000,
                    coins: 25,
                    duration: '7 Dagen',
                },
                {
                    caption: 'Vliegtuigbrandbestrijding',
                    credits: 400_000,
                    coins: 25,
                    duration: '7 Dagen',
                    maxExtensionsFunction: (buildingsByType: {
                        [type: number]: Building[];
                    }): number =>
                        Math.floor(
                            (buildingsByType[0]?.length ?? 0) /
                            10
                        ),
                },
                ...new Array(9).fill({
                    caption: 'Haakarmbak parkeerplaats',
                    credits: 100_000,
                    coins: 20,
                    duration: '7 Dagen',
                }),
            ],
            levelcost: ['1. 10.000', '2. 50.000', '3.-24. 100.000'],
            maxBuildings: '4.000',
            maxLevel: 24,
            special:
                'Vanaf de 25e brandweerkazerne stijgen de kosten voor de bouw van een nieuwe brandweerkazerne volgens de volgende formule: <code>100.000+200.000*LOG<sub>2</sub>(Aantal brandweerposten − 22)</code>. De Coins prijs blijft gelijk!',
            startPersonnel: 10,
            startVehicles: ['SI-2', 'TS 8/9', 'TST 8/9', 'TST 6/7', 'TST 4/5', 'TS 4/5', 'TST-NB 8/9', 'TST-NB 6/7', 'TST-NB 4/5', 'TS 6/7'],
            maxBuildingsFunction: (): number => 4_000,
        },
        {
            caption: 'Meldkamer',
            color: '#24c3ae',
            coins: 0,
            credits: 0,
            extensions: [],
            levelcost: [],
            maxBuildings: 'Elke 25 gebouwen mag je 1 meldkamer bouwen',
            maxLevel: 0,
            special: 'De meldkamer is het administratief centrum. Hier kan je diverse instellingen bewerken.',
            startPersonnel: 0,
            startVehicles: [],
            maxBuildingsFunction: (buildingsAmountTotal: number): number =>
                Math.floor(buildingsAmountTotal / 25) + 1,
        },
        {
            caption: 'Ziekenhuis',
            color: '#bbe944',
            coins: 35,
            credits: 200_000,
            extensions: [
                {
                    caption: 'Interne Geneeskunde',
                    credits: 10_000,
                    coins: 10,
                    duration: '7 Dagen',
                },
                {
                    caption: 'Algemene Heelkunde',
                    credits: 10_000,
                    coins: 10,
                    duration: '7 Dagen',
                },
                {
                    caption: 'Gynaecologie',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 Dagen',
                },
                {
                    caption: 'Urologie',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 Dagen',
                },
                {
                    caption: 'Traumatologie',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 Dagen',
                },
                {
                    caption: 'Neurologie',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 Dagen',
                },
                {
                    caption: 'Neurochirurgie',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 Dagen',
                },
                {
                    caption: 'Cardiologie',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 Dagen',
                },
                {
                    caption: 'Cardiochirurgie',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 Dagen',
                },
            ],
            levelcost: ['1.-20. 19.000 Credits / 11 Coins'],
            maxBuildings: 'Geen limiet',
            maxLevel: 20,
            special:
                'Penningmeesters en Admins kunnen de Team ziekenhuizen met behulp van de credits van de Teamkas uitbreiden.',
            startPersonnel: 0,
            startVehicles: [],
        },
        {
            caption: 'Ambulancestandplaats',
            color: '#ffa500',
            coins: 35,
            credits: 200_000,
            extensions: [],
            levelcost: ['1. 10.000', '2. 50.000', '3.-19. 100.000'],
            maxBuildings: 'Geen limiet',
            maxLevel: 19,
            special: '',
            startPersonnel: 3,
            startVehicles: ['Ambulance'],
        },
        {
            caption: 'Brandweer academie',
            color: '#992222',
            coins: 50,
            credits: 500_000,
            extensions: new Array(3).fill({
                caption: 'Extra klaslokaal',
                credits: 400_000,
                coins: 40,
                duration: '7 Dagen',
            }),
            levelcost: [],
            maxBuildings: 'Geen limiet',
            maxLevel: 0,
            special:
                'Penningmeesters en Admins kunnen de Team Brandweeracademie met behulp van de credits van de Teamkas uitbreiden.',
            startPersonnel: 0,
            startVehicles: [],
        },
        {
            caption: 'Politie opkomstbureau',
            color: '#007700',
            coins: 35,
            credits: 100_000,
            extensions: [
                ...new Array(10).fill({
                    caption: 'Gevangeniscel',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 Dagen',
                }),
            ],
            levelcost: ['1. 10.000', '2. 50.000', '3.-39. 100.000'],
            maxBuildings: '1.500',
            maxLevel: 19,
            special:
                'Vanaf het 25e opkomstbureau stijgen de kosten voor de bouw van een nieuw opkomstbureau volgens de volgende formule: <code>100.000+200.000*LOG<sub>2</sub>(Aantal opkomstbureaus − 22)</code>. De Coins prijs blijft gelijk!',
            startPersonnel: 2,
            startVehicles: ['DA Noodhulp'],
            maxBuildingsFunction: (): number => 1_500,
        },
        {
            caption: 'MMT Standplaats',
            color: '#ffd500',
            coins: 50,
            credits: 800_000,
            extensions: [],
            levelcost: ['1. 10.000', '2. 50.000', '3. 100.000'],
            maxBuildings: 'Maximaal 1 gebouw per 10 ambulance gebouwen',
            maxLevel: 3,
            special: '',
            startPersonnel: 3,
            startVehicles: [],
        },
        {
            caption: 'Universiteit Geneeskunde',
            color: '#ffc400',
            coins: 50,
            credits: 500_000,
            extensions: new Array(3).fill({
                caption: 'Extra klaslokaal',
                credits: 400_000,
                coins: 40,
                duration: '7 Dagen',
            }),
            levelcost: [],
            maxBuildings: 'Geen limiet',
            maxLevel: 0,
            special:
                'Penningmeesters en Admins kunnen de Team Universiteiten geneeskunde met behulp van de credits van de Teamkas uitbreiden.',
            startPersonnel: 0,
            startVehicles: [],
        },
        {
            caption: 'Politie academie',
            color: '#225522',
            coins: 50,
            credits: 500_000,
            extensions: new Array(3).fill({
                caption: 'Extra klaslokaal',
                credits: 400_000,
                coins: 40,
                duration: '7 Dagen',
            }),
            levelcost: [],
            maxBuildings: 'Geen limiet',
            maxLevel: 0,
            special:
                'Penningmeesters en Admins kunnen de Team Politieacademie met behulp van de credits van de Teamkas uitbreiden.',
            startPersonnel: 0,
            startVehicles: [],
        },
        {
            caption: 'Politiehelikopter standplaats',
            color: '#e7ad2f',
            coins: 50,
            credits: 1_000_000,
            extensions: [],
            levelcost: [],
            maxBuildings: 'Zie bijzonderheden',
            maxLevel: 0,
            special:
                'Tot het 125ste gebouw (van alle soorten) kunnen maximaal 4 landingsplaatsen worden gebouwd. Dan groeit het aantal met 1 per 25 gebouwen (vanaf 125).',
            startPersonnel: 0,
            startVehicles: [],
            maxBuildingsFunction: (buildingsAmountTotal: number): number =>
                buildingsAmountTotal < 125
                    ? 4
                    : Math.floor(buildingsAmountTotal / 25),
        },
        {
            caption: 'Uitgangsstelling (UGS)',
            color: '#404040',
            coins: 0,
            credits: 0,
            extensions: [],
            levelcost: [],
            maxBuildings: 1,
            maxLevel: 0,
            special:
                'Je kan zo veel voertuigen als je wilt sturen naar een UGS, teamleden kunnen de UGS ook gebruiken om voertuigen. Een UGS blijft 24 uur bestaan, maar je kan het elk moment weer reseten naar 24 uur.',
            startPersonnel: 0,
            startVehicles: [],
            maxBuildingsFunction: (): number => 1,
        },
        {
            caption: 'Politie Hoofdbureau',
            color: '#663300',
            coins: 50,
            credits: 400_000,
            extensions: [
                {
                    caption: '2e OvD-P',
                    credits: 40_000,
                    coins: 5,
                    duration: '3 Dagen',
                },
                {
                    caption: 'Mobiele Eenheid, Sectie',
                    credits: 100_000,
                    coins: 20,
                    duration: '5 Dagen',
                },
                {
                    caption: 'Levende Have',
                    credits: 100_000,
                    coins: 20,
                    duration: '7 Dagen',
                },
                {
                    caption: 'Arrestatieteam',
                    credits: 200_000,
                    coins: 20,
                    duration: '5 Dagen',
                },
            ],
            levelcost: [],
            maxBuildings: 'Geen limiet',
            maxLevel: 0,
            special: '',
            startPersonnel: 10,
            startVehicles: ['Officier van Dienst - Politie'],
        },
        {
            caption: 'Cellencomplex',
            color: '#800000',
            coins: 'x',
            credits: 100_000,
            extensions: new Array(10).fill({
                caption: 'Gevangeniscel',
                credits: 25_000,
                coins: 5,
                duration: '7 Dagen',
            }),
            levelcost: [],
            maxBuildings: 'Geen limiet',
            maxLevel: 0,
            special:
                "Penningmeesters en Admins kunnen de Team cellencomplex met behulp van de credits van de Teamkas uitbreiden.",
            startPersonnel: 0,
            startVehicles: [],
        },
        {
            caption: 'Ambulance VWS-post',
            color: '#eeb611',
            coins: 25,
            credits: 100_000,
            extensions: [],
            levelcost: [
                '1. 10.000',
                'Upgraden naar normale post: 100.000',
            ],
            maxBuildings: 'Geen limiet',
            maxLevel: 1,
            special: '',
            startPersonnel: 3,
            startVehicles: ['Ambulance'],
        },
    ],
    buildingCategories: {
        Brandweer: {
            buildings: [0, 4],
            color: '#ff2d2d',
        },
        Ambulance: {
            buildings: [2, 3, 6, 7, 13],
            color: '#ffa500',
        },
        Politie: {
            buildings: [5, 8, 9, 11],
            color: '#00ac00',
        },
        Algemeen: {
            buildings: [1, 10],
            color: '#02a18c',
        },
    },
    vehicleCategories: {
        Brandweer: {
            vehicles: {
                'Tankautospuiten': [0, 1, 6, 7, 8, 9, 12, 14, 15, 17],
                'Overige voertuigen': [2, 3, 4, 5, 10, 11, 18, 19, 20, 21, 24, 31, 34, 56],
                'Waterongevallen': [33, 36, 49, 50],
                'Vliegtuigbrandbestrijding': [41, 42, 43, 44],
                'Haakarmbakken': [26, 27, 29, 32, 45, 51],
            },
            color: '#ff2d2d',
        },
        Ambulance: {
            vehicles: {
                'Ambulances': [16, 30, 38, 52, 57],
                'MMT voertuigen': [23, 37],
            },
            color: '#ffa500',
        },
        Politie: {
            vehicles: {
                'Noodhulp': [22, 25, 46],
                'Mobiele Eenheid': [39, 40],
                'Hondengeleider': [47, 48],
                'Politiehelikopter': [28],
                'Officier van Dienst - Politie': [35],
                'Arrestatieteam': [53, 54, 55],
            },
            color: '#00ac00',
        },
    },
    small_buildings: {
        3: 13,
    },
    vehicleBuildings: [0, 3, 5, 6, 9, 11, 13],
    cellBuildings: [5],
    cellExtensions: [
        '5_0',
        '5_1',
        '5_2',
        '5_3',
        '5_4',
        '5_5',
        '5_6',
        '5_7',
        '5_8',
        '5_9',
    ],
    bedBuildings: [2],
    schoolBuildings: [4, 7, 8],
    dispatchCenterBuildings: [1],
    schoolings: {
        'Brandweer': [
            {
                caption: 'Verkenningseenheid Brandweer',
                duration: '3 Dagen',
            },
            {
                caption: 'Hoofd Officier van Dienst - Brandweer',
                duration: '7 Dagen',
            },
            {
                caption: 'Adviseur Gevaarlijke Stoffen',
                duration: '6 Dagen',
            },
            {
                caption: 'Brandweerchauffeur-zwaar',
                duration: '2 Dagen',
            },
            {
                caption: 'Duiker / Duikploegleider',
                duration: '7 Dagen',
            },
            {
                caption: 'Vliegtuigbrandbestrijding',
                duration: '7 Dagen',
            },
            {
                caption: 'Airport Fire Officer / On Scene Commander',
                duration: '7 Dagen',
            },
            {
                caption: "Oppervlakteredder",
                duration: '7 Dagen',
            },
            {
                caption: "Voorlichter",
                duration: '5 Dagen',
            },
        ],
        'Politie': [
            {
                caption: 'Politiehelikopter',
                duration: '7 Dagen',
            },
            {
                caption: 'Officier van Dienst - Politie',
                duration: '7 Dagen',
            },
            {
                caption: 'Mobiele Eenheid',
                duration: '4 Dagen',
            },
            {
                caption: 'Hondengeleider',
                duration: '7 Dagen',
            },
            {
                caption: 'Operator AT',
                duration: '10 Dagen',
            },
        ],
        'Ambulance': [
            {
                caption: 'MMT-Bemanningslid',
                duration: '7 Dagen',
            },
            {
                caption: 'Officier van Dienst - Geneeskunde',
                duration: '10 Dagen',
            },
        ],
    },
    amount: 'Aantal',
    search: 'Zoeken',
    alliance: 'Team',
    premiumNotice:
        'Deze functie breidt een premium functie van het spel uit en is daarom alleen beschikbaar voor spelers met een premium spelaccount!',
    credits: 'Credits',
    close: 'Sluiten',
    fullscreen: {
        expand: 'Gebruik full-screen modus',
        compress: 'Schakel full-screen modus uit',
    },
    hideTitle: 'Titel weergeven | Titel verbergen',
    vehicle: 'Voertuigen | Voertuig | Voertuigen',
    building: 'Gebouwen',
    station: 'Posten | Post | Posten',
    distance: 'Afstand | Afstanden',
    vehicleType: 'Voertuig type',
    fmsReal2Show: {
        1: 4,
        2: 5,
        3: 1,
        4: 2,
        5: 7,
        6: 6,
        7: 3,
        9: 9,
    },
    buildingIcons: [
        'fire',
        'rss',
        'hospital',
        'ambulance',
        'graduation-cap',
        'shield-alt',
        'helicopter',
        'graduation-cap',
        'graduation-cap',
        'helicopter',
        'warehouse',
        'shield-alt',
        'boarder-all',
        'ambulance',
    ],
    pois: [
        'Park',
        'Meer',
        'Ziekenhuis',
        'Bos',
        'Bushalte',
        'Tramhalte',
        'Station',
        'Centraal Station',
        'Rangeeremplacement',
        'Buurtsuper',
        'Supermarkt',
        'Tankstation',
        'School',
        'Museum',
        'Winkelcentrum',
        'Garagebedrijf',
        'Snelweg oprit / afrit',
        'Kerstmarkt',
        'Magazijn',
        'Café/Club',
        'Stadion',
        'Boerderij',
        'Kantoorgebouw',
        'Zwembad',
        'Spoorwegovergang',
        'Theater',
        'Marktplein',
        'Rivier',
        'Sloot',
        'Vliegveld (klein): Start-/Landingsbaan',
        'Vliegveld (klein): Hangaar',
        'Vliegveld (klein): Vliegtuig parkeerplaats',
        'Vliegveld (groot): Start-/Landingsbaan',
        'Vliegveld (groot): Terminal',
        'Vliegveld (groot): Platform / Gate',
        'Vliegveld (groot): Parkeergarage',
        'Parkeergarage',
        'Verzorgingshuis',
        'Manege',
        'Hotel',
        'Restaurant',
        'Bankkantoor',
        'Sporthal',
        'Camping',
        'Gevangenis',
        'Asielzoekerscentrum',
        'Afvalverwerker',
        'Kerkgebouw',
        'Bouwmarkt',
        'Transformatorhuisje',
        'Industrieterrein',
        'Bedrijventerrein',
        'Haventerrein',
        'Bouwterrein',
        'Silo',
        'Huisartsenpraktijk',
        'Sportveld',
        'Jachthaven',
        'Frietkraam',
        'Verzorgingsplaats (Snelweg)',
        'Zendmast',
    ],
    only_alliance_missions: [41, 43, 59, 145, 234, 346, 347],
    transfer_missions: [137],
};
