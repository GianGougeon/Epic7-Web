const elementAndRoles = [
    {
        name: "fire",
        img: "https://static.wikia.nocookie.net/epic-seven/images/5/5e/Fire_icon.png",
    },
    {
        name: "ice",
        img: "https://static.wikia.nocookie.net/epic-seven/images/7/77/Ice.png",
    },
    {
        name: "light",
        img: "https://static.wikia.nocookie.net/epic-seven/images/a/a6/Light.png",
    },
    {
        name: "dark",
        img: "https://static.wikia.nocookie.net/epic-seven/images/0/0e/Dark.png",
    },
    {
        name: "wind",
        img: "https://static.wikia.nocookie.net/epic-seven/images/1/1e/Earth.png",
    },
    {
        name: "warrior",
        img: "https://static.wikia.nocookie.net/epic-seven/images/9/97/Warrior.png",
    },
    {
        name: "mage",
        img: "https://static.wikia.nocookie.net/epic-seven/images/2/20/Mage.png",
    },
    {
        name: "assassin",
        img: "https://static.wikia.nocookie.net/epic-seven/images/f/fc/Thief.png",
    },
    {
        name: "ranger",
        img: "https://static.wikia.nocookie.net/epic-seven/images/e/e9/Ranger.png",
    },
    {
        name: "manauser",
        img: "https://static.wikia.nocookie.net/epic-seven/images/3/3f/Soulweaver.png",
    },
    {
        name: "knight",
        img: "https://static.wikia.nocookie.net/epic-seven/images/6/6b/Knight.png",
    },
    {
        name: "star",
        img: "https://static.wikia.nocookie.net/epic-seven/images/2/2e/Star.png",
    },
];

const sets = [
    {
        name: "Velocidad",
        img: "https://static.smilegatemegaport.com/event/live/epic7/guide/wearingStatus/images/sets/set_speed.png",
        setPiece: 4,
    },
    {
        name: "Golpe",
        img: "https://static.smilegatemegaport.com/event/live/epic7/guide/wearingStatus/images/sets/set_acc.png",
        setPiece: 2,
    },
    {
        name: "Critico",
        img: "https://static.smilegatemegaport.com/event/live/epic7/guide/wearingStatus/images/sets/set_cri.png",
        setPiece: 2,
    },
    {
        name: "Ataque",
        img: "https://static.smilegatemegaport.com/event/live/epic7/guide/wearingStatus/images/sets/set_att.png",
        setPiece: 4,
    },
    {
        name: "Vida",
        img: "https://static.smilegatemegaport.com/event/live/epic7/guide/wearingStatus/images/sets/set_max_hp.png",
        setPiece: 2,
    },
    {
        name: "Defensa",
        img: "https://static.smilegatemegaport.com/event/live/epic7/guide/wearingStatus/images/sets/set_def.png",
        setPiece: 2,
    },
    {
        name: "Resistencia",
        img: "https://static.smilegatemegaport.com/event/live/epic7/guide/wearingStatus/images/sets/set_res.png",
        setPiece: 2,
    },
    {
        name: "Destruccion",
        img: "https://static.smilegatemegaport.com/event/live/epic7/guide/wearingStatus/images/sets/set_cri_dmg.png",
        setPiece: 4,
    },
    {
        name: "Robo vital",
        img: "https://static.smilegatemegaport.com/event/live/epic7/guide/wearingStatus/images/sets/set_vampire.png",
        setPiece: 4,
    },
    {
        name: "Contraataque",
        img: "https://static.smilegatemegaport.com/event/live/epic7/guide/wearingStatus/images/sets/set_counter.png",
        setPiece: 4,
    },
    {
        name: "Unidad",
        img: "https://static.smilegatemegaport.com/event/live/epic7/guide/wearingStatus/images/sets/set_coop.png",
        setPiece: 2,
    },
    {
        name: "Inmunidad",
        img: "https://static.smilegatemegaport.com/event/live/epic7/guide/wearingStatus/images/sets/set_immune.png",
        setPiece: 2,
    },
    {
        name: "Furia",
        img: "https://static.smilegatemegaport.com/event/live/epic7/guide/wearingStatus/images/sets/set_rage.png",
        setPiece: 4,
    },
    {
        name: "Venganza",
        img: "https://static.smilegatemegaport.com/event/live/epic7/guide/wearingStatus/images/sets/set_revenge.png",
        setPiece: 4,
    },
];
const setStats = {
    collar: [
        {
            name: "Prob. Crítico",
            img: "https://cdn.discordapp.com/attachments/955717990937137153/1030619812839313478/unknown.png",
        },
        {
            name: "Prob. Daño Crítico",
            img: "https://cdn.discordapp.com/attachments/955717990937137153/1030619812839313478/unknown.png",
        },
        {
            name: "Vida",
            img: "https://cdn.discordapp.com/attachments/955717990937137153/1030619812839313478/unknown.png",
        },
        {
            name: "Vida%",
            img: "https://cdn.discordapp.com/attachments/955717990937137153/1030619812839313478/unknown.png",
        },
        {
            name: "Ataque",
            img: "https://cdn.discordapp.com/attachments/955717990937137153/1030619812839313478/unknown.png",
        },
        {
            name: "Ataque%",
            img: "https://cdn.discordapp.com/attachments/955717990937137153/1030619812839313478/unknown.png",
        },
        {
            name: "Defensa",
            img: "https://cdn.discordapp.com/attachments/955717990937137153/1030619812839313478/unknown.png",
        },
        {
            name: "Defensa%",
            img: "https://cdn.discordapp.com/attachments/955717990937137153/1030619812839313478/unknown.png",
        },
    ],
    anillo: [
        {
            name: "Ataque",
            img: "https://cdn.discordapp.com/attachments/955717990937137153/1030619839578001438/unknown.png",
        },
        {
            name: "Ataque%",
            img: "https://cdn.discordapp.com/attachments/955717990937137153/1030619839578001438/unknown.png",
        },
        {
            name: "Vida",
            img: "https://cdn.discordapp.com/attachments/955717990937137153/1030619839578001438/unknown.png",
        },
        {
            name: "Vida%",
            img: "https://cdn.discordapp.com/attachments/955717990937137153/1030619839578001438/unknown.png",
        },
        {
            name: "Defensa",
            img: "https://cdn.discordapp.com/attachments/955717990937137153/1030619839578001438/unknown.png",
        },
        {
            name: "Defensa%",
            img: "https://cdn.discordapp.com/attachments/955717990937137153/1030619839578001438/unknown.png",
        },
        {
            name: "Resistencia de efectos%",
            img: "https://cdn.discordapp.com/attachments/955717990937137153/1030619839578001438/unknown.png",
        },
    ],
    botas: [
        {
            name: "Velocidad",
            img: "https://cdn.discordapp.com/attachments/955717990937137153/1030619862151741510/unknown.png",
        },
        {
            name: "Ataque",
            img: "https://cdn.discordapp.com/attachments/955717990937137153/1030619862151741510/unknown.png",
        },
        {
            name: "Ataque%",
            img: "https://cdn.discordapp.com/attachments/955717990937137153/1030619862151741510/unknown.png",
        },
        {
            name: "Vida",
            img: "https://cdn.discordapp.com/attachments/955717990937137153/1030619862151741510/unknown.png",
        },
        {
            name: "Vida%",
            img: "https://cdn.discordapp.com/attachments/955717990937137153/1030619862151741510/unknown.png",
        },
        {
            name: "Defensa%",
            img: "https://cdn.discordapp.com/attachments/955717990937137153/1030619862151741510/unknown.png",
        },
        {
            name: "Defensa",
            img: "https://cdn.discordapp.com/attachments/955717990937137153/1030619862151741510/unknown.png",
        },
    ],
};
export { elementAndRoles, sets, setStats };
