const modules = {
    appstore: {
        save: 'Guardar',
        reset: 'Restablecer',
        noMapkit:
            '¡Este módulo no funciona con el tipo de mapa "Mapkit" debido a las limitaciones de Mapkit!',
        dev: 'Este módulo aún se encuentra en desarrollo. ¡Activarlo puede provocar funciones incompletas y defectuosas!',
        closeWarning: {
            title: 'Cambios no guardados',
            text: 'Hizo cambios en la AppStore que aún no se han guardado. Reinícielos o guárdelos para cerrar la AppStore.',
            close: 'Cerrar mensaje',
        },
    },
    settings: {
        name: 'Ajustes',
        save: 'Guardar',
        discard: 'Descartar cambios',
        reset: 'Restablecer',
        export: 'Exportar',
        import: 'Importar',
        resetWarning: {
            title: 'Restablecer la configuración',
            text: '¿Realmente desea restablecer la configuración a sus valores predeterminados? ¡Esto no se puede deshacer!',
            close: 'Cancelar',
            total: 'Todos los ajustes',
            module: 'Sólo de éste módulo',
        },
        resetWarningSetting: {
            title: 'Restablecer ajustes',
            text: '¿Quiere restablecer esta configuración <b>{setting}</b> del modulo <b>{module}</b> a su valor predeterminado?',
            close: 'Cancelar',
            reset: 'Restablecer',
        },
        closeWarning: {
            title: 'Cambios no guardados',
            text: 'Ha realizado cambios en la configuración que aún no se han guardado. Restablecerlos, descartarlos o guardarlos para cerrar la configuración.',
            close: 'Cerrar mensaje',
        },
        changeList: {
            true: 'On',
            false: 'Off',
        },
    },
} as Record<string, Record<string, unknown>>;

export default {
    modules,
    vehicles: {
        0: {
            caption: 'Camión BUP',
            color: '#cc0000',
            coins: 25,
            credits: 5000,
            minPersonnel: 1,
            maxPersonnel: 6,
            wtank: 3000,
            ftank: 500,
            possibleBuildings: [0, 18],
        },
        1: {
            caption: 'Camión BUL',
            color: '#bb0000',
            coins: 25,
            credits: 5000,
            minPersonnel: 1,
            maxPersonnel: 3,
            wtank: 1500,
            ftank: 250,
            possibleBuildings: [0, 18],
        },
        2: {
            caption: 'Camión AE',
            color: '#d92626',
            coins: 30,
            credits: 10_000,
            minPersonnel: 1,
            maxPersonnel: 3,
            possibleBuildings: [0, 18],
            special: 'Necesario cuando hayas construido 3 parques de bomberos',
        },
        3: {
            caption: 'Vehículo UMC',
            color: '#d02525',
            coins: 25,
            credits: 10_000,
            minPersonnel: 1,
            maxPersonnel: 3,
            possibleBuildings: [0, 18],
            special: 'Necesario cuando hayas construido 6 parques de bomberos',
        },
        4: {
            caption: 'FUV',
            color: '#ad1f1f',
            coins: 25,
            credits: 12_180,
            minPersonnel: 1,
            maxPersonnel: 4,
            possibleBuildings: [0, 18],
            special: 'Necesario cuando hayas construido 4 parques de bomberos',
        },
        5: {
            caption: 'Ambulancia',
            color: '#9c6d1c',
            coins: 25,
            credits: 5000,
            minPersonnel: 1,
            maxPersonnel: 2,
            possibleBuildings: [0, 2, 20],
        },
        6: {
            caption: 'Camión BNP',
            color: '#aa0000',
            coins: 25,
            credits: 17_300,
            minPersonnel: 1,
            maxPersonnel: 3,
            wtank: 6000,
            possibleBuildings: [0, 18],
            special: 'Necesario cuando hayas construido 7 parques de bomberos',
        },
        7: {
            caption: 'Camión TPP',
            color: '#990000',
            coins: 25,
            credits: 19_200,
            minPersonnel: 1,
            maxPersonnel: 3,
            possibleBuildings: [0, 18],
            schooling: {
                'Parque de bomberos': {
                    Hazmat: {
                        all: true,
                    },
                },
            },
            special: 'Necesario cuando hayas construido 11 parques de bomberos',
        },
        8: {
            caption: 'Coche Patrulla',
            color: '#880000',
            coins: 25,
            credits: 5000,
            minPersonnel: 1,
            maxPersonnel: 2,
            possibleBuildings: [6, 19],
        },
        9: {
            caption: 'HEMS',
            color: '#770000',
            coins: 30,
            credits: 300_000,
            minPersonnel: 1,
            maxPersonnel: 1,
            possibleBuildings: [5],
        },
        10: {
            caption: 'Vehículo aéreo',
            color: '#488b18',
            coins: 25,
            credits: 11_680,
            minPersonnel: 1,
            maxPersonnel: 3,
            possibleBuildings: [0, 18],
            special: 'Necesario cuando hayas construido 5 parques de bomberos',
        },
        11: {
            caption: 'Vehículo de mando móvil',
            color: '#e68319',
            coins: 25,
            credits: 25_500,
            minPersonnel: 1,
            maxPersonnel: 6,
            possibleBuildings: [0, 18],
            schooling: {
                'Parque de bomberos': {
                    ['Mando móvil']: {
                        all: true,
                    },
                },
            },
            special: 'Necesario cuando hayas construido 13 parques de bomberos',
        },
        12: {
            caption: 'Vehículo de rescate',
            color: '#791515',
            coins: 25,
            credits: 19_000,
            minPersonnel: 1,
            maxPersonnel: 6,
            wtank: 3000,
            ftank: 500,
            possibleBuildings: [0, 18],
        },
        13: {
            caption: 'Helicóptero de Policía',
            color: '#dc1818',
            coins: 30,
            credits: 300_000,
            minPersonnel: 1,
            maxPersonnel: 3,
            possibleBuildings: [13],
            schooling: {
                ['Policía']: {
                    ['Piloto de Helicóptero']: {
                        all: true,
                    },
                },
            },
        },
        14: {
            caption: 'Unidad Antidisturbios',
            color: '#70ca16',
            coins: 25,
            credits: 10_000,
            minPersonnel: 6,
            maxPersonnel: 6,
            possibleBuildings: [6, 19],
            schooling: {
                ['Policía']: {
                    'Fuerzas Especiales': {
                        all: true,
                    },
                },
            },
            special:
                'Necesario cuando hayas construido 8 comisarías de policía',
        },
        15: {
            caption: 'Unidad GEO',
            color: '#b88f14',
            coins: 23,
            credits: 7000,
            minPersonnel: 2,
            maxPersonnel: 4,
            possibleBuildings: [6, 19],
            schooling: {
                ['Policía']: {
                    'Fuerzas Especiales': {
                        all: true,
                    },
                },
            },
            special:
                'Necesario cuando hayas construido 8 comisarías de policía',
        },
        16: {
            caption: 'Unidad Canina',
            color: '#68a512',
            coins: 25,
            credits: 7000,
            minPersonnel: 1,
            maxPersonnel: 2,
            possibleBuildings: [6, 19],
            schooling: {
                ['Policía']: {
                    ['Guía Canino']: {
                        all: true,
                    },
                },
            },
            special:
                'Necesario cuando hayas construido 6 comisarías de policía',
        },
        17: {
            caption: 'Moto de Policía',
            color: '#cc2222',
            coins: 18,
            credits: 2500,
            minPersonnel: 1,
            maxPersonnel: 1,
            possibleBuildings: [6, 19],
            schooling: {
                ['Policía']: {
                    Motorista: {
                        all: true,
                    },
                },
            },
        },
        18: {
            caption: 'VIR',
            color: '#770000',
            coins: 20,
            credits: 4000,
            minPersonnel: 2,
            maxPersonnel: 2,
            possibleBuildings: [0, 2, 20],
        },
        19: {
            caption: 'Unidad logística de AMV',
            color: '#770000',
            coins: 25,
            credits: 20_000,
            minPersonnel: 2,
            maxPersonnel: 3,
            possibleBuildings: [2, 20],
            special:
                'Necesario cuando hayas construido 6 estaciones de rescate',
        },
        20: {
            caption: 'Médico de cabecera',
            color: '#770000',
            coins: 20,
            credits: 4000,
            minPersonnel: 1,
            maxPersonnel: 1,
            possibleBuildings: [2],
            schooling: {
                Rescate: {
                    ['Formación en cuidados intensivos']: {
                        all: true,
                    },
                },
            },
        },
        21: {
            caption: 'Motocicleta de intervención rápida',
            color: '#770000',
            coins: 15,
            credits: 12_000,
            minPersonnel: 1,
            maxPersonnel: 1,
            possibleBuildings: [2, 20],
            schooling: {
                Rescate: {
                    ['Motocicleta de intervención rápida']: {
                        all: true,
                    },
                },
            },
        },
        22: {
            caption: 'Ambulancia SVB',
            color: '#770000',
            coins: 12,
            credits: 5000,
            minPersonnel: 2,
            maxPersonnel: 2,
            possibleBuildings: [0, 2, 20],
        },
        23: {
            caption: 'Vehículo de extinción por espuma',
            color: '#791515',
            coins: 15,
            credits: 35_000,
            minPersonnel: 2,
            maxPersonnel: 3,
            ftank: 3000,
            possibleBuildings: [0],
        },
        24: {
            caption: 'Remolque con bomba accionada por motor',
            color: '#791515',
            coins: 10,
            credits: 10_000,
            minPersonnel: 0,
            maxPersonnel: 0,
            possibleBuildings: [0],
            special:
                'Se necesita un vehículo de remolque (Camión BUP, Camión BUL, Camión BNP, Vehículo de extinción por espuma)',
        },
    },
    buildingCategories: {
        'Parques de bomberos': {
            buildings: [0, 1, 18],
            color: '#ff2d2d',
        },
        'Parques de ambulancias': {
            buildings: [2, 3, 5, 20],
            color: '#ffa500',
        },
        ['Parques de policías']: {
            buildings: [6, 8, 13, 16, 19],
            color: '#00ac00',
        },
        'Otros': {
            buildings: [4, 7, 14, 21, 22],
            color: '#02a18c',
        },
    },
    vehicleCategories: {
        Bomberos: {
            vehicles: {
                'Camiones de bomberos': [0, 1, 12],
                ['Vehículos especiales']: [2, 3, 4, 6, 7, 10, 11, 23, 24],
            },
            color: '#ff2d2d',
        },
        ['Vehículos de ambulancias']: {
            vehicles: {
                Ambulancias: [5, 18, 19, 20, 21, 22],
                HEMS: [9],
            },
            color: '#ffa500',
        },
        ['Vehículos de policías']: {
            vehicles: {
                'Coche patrulla': [8],
                ['Moto de policía']: [17],
                ['Helicóptero de policía']: [13],
                'Vehiculos especiales': [14, 15, 16],
            },
            color: '#00ac00',
        },
    },
    small_buildings: {
        0: 18,
        2: 20,
        6: 19,
    },
    schoolings: {
        'Parque de bomberos': [
            {
                caption: 'Hazmat',
                duration: '3 Días',
                staffList: 'Hazmat',
            },
            {
                caption: 'Mando móvil',
                duration: '5 Días',
                staffList: 'Mando móvil',
            },
            {
                caption: 'Formación CBA',
                duration: '3 Días',
            },
            {
                caption: 'Rescate acuático rápido',
                duration: '4 Días',
            },
            {
                caption: 'Navegación en océano',
                duration: '5 Días',
            },
        ],
        ['Policía']: [
            {
                caption: 'Piloto de Helicóptero',
                duration: '7 Días',
                staffList: 'Piloto de Helicóptero',
            },
            {
                caption: 'Fuerzas Especiales',
                duration: '5 Días',
                staffList: 'Fuerzas Especiales',
            },
            {
                caption: 'Guía Canino',
                duration: '5 Días',
                staffList: 'Guía Canino',
            },
            {
                caption: 'Motorista',
                duration: '3 Días',
                staffList: 'Motorista',
            },
        ],
        'Rescate': [
            {
                caption: 'Formación en cuidados intensivos',
                duration: '5 Días',
                staffList: 'Formación en cuidados intensivos',
            },
            {
                caption: 'Motocicleta de intervención rápida',
                duration: '3 Días',
                staffList: 'Motocicleta de intervención rápida',
            },
        ],
    },
    amount: 'Cantidad',
    search: 'Buscar',
    mapSearch: 'Búsqueda de ubicación',
    alliance: 'Alianza',
    premiumNotice:
        '¡Esta función amplía una función premium del juego y, por lo tanto, solo está disponible para jugadores con una cuenta premium del juego Centro de Mando!',
    credits: 'Créditos',
    coins: 'Monedas',
    close: 'Cerrar',
    fullscreen: {
        expand: 'Activar el modo pantalla completa',
        compress: 'Desactivar el modo pantalla completa',
    },
    hideTitle: 'Mostrar título | Ocultar título',
    vehicle: 'Coches | Coche | Coches',
    building: 'Edificios',
    station: 'Estaciones | Estación | Estaciones',
    distance: 'Distancia | Distancias',
    vehicleType: 'Tipo de vehículo',
    noOptions: 'Lo sentimos, no hay opciones que coincidan.',
    fmsReal2Show: {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        9: 9,
    },
    pois: [
        'Parque',
        'Lago',
        'Hospital',
        'Bosque',
        'Parada de autobús',
        'Parada de tranvía',
        'Parada de tren (cercanías)',
        'Parada de tren (cercanías y larga distancia)',
        'Estación de mercanías',
        'Supermercado (pequeño)',
        'Supermercado (grande)',
        'Gasolinera',
        'Escuela',
        'Museo',
        'Centro comercial',
        'Taller',
        'Salida de autopista',
        'Mercado navideño',
        'Depósito',
        'Discoteca',
        'Estadio',
        'Granja',
        'Edificio de oficinas',
        'Piscina',
        'Paso a nivel',
        'Cine',
        'Feria',
        'Río',
        'Aeropuerto pequeño (pista)',
        'Aeropuerto grande (pista)',
        'Terminal de aeropuerto',
        'Banco',
        'Almacén',
        'Puente',
        'Restaurante de comida rápida',
        'Puerto de mercancías',
        'Centro de reciclaje',
        'Rascacielos',
        'Cubierta de yate',
        'Puerto deportivo',
        'Paso de peatones',
        'Túnel',
        'Almacén frigorífico',
        'Central eléctrica',
        'Fábrica',
        'Chatarrería',
        'Estación de metro',
        'Almacén químico pequeño',
        'Almacén químico grande',
        'Hotel',
        'Bar',
        'Vertedero',
        'Aparcamiento',
        'Granero',
        'Intersección con semáforos',
        'Taller de carpintería',
        'Restaurante',
        'Centro de la ciudad',
        'Montaña',
        'Muelle',
        'Zona de juegos',
        'Pista de carreras de tierra',
        'Residencia',
        'Central Nuclear',
        'Acantilado',
        'Aserradero',
        'Refinería petrolera',
        'Iglesia',
    ],
    only_alliance_missions: [57, 74],
    transfer_missions: [],
    ranks: {
        missionchief: {
            0: 'Novato',
            200: 'Bombero',
            10_000: 'Bombero sénior',
            100_000: 'Operador de vehículos antiincendios',
            1_000_000: 'Teniente',
            5_000_000: 'Capitán',
            20_000_000: 'Capitán de personal',
            50_000_000: 'Jefe de batallón',
            1_000_000_000: 'Jefe de división',
            2_000_000_000: 'Subjefe',
            5_000_000_000: 'Jefe de bomberos',
        },
    },
};
