export const sortData = (data) => {
    const sortData = data.sort((a, b) => {
        if (a.rarity === b.rarity) {
            if (a.name < b.name) {
                return -1;
            }
            return 0;
        }
        return b.rarity - a.rarity;
    });
    return sortData;
};
