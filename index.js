const distanceFromHqInBlocks = (blocks) => {
    if (blocks >= 42) {
        return blocks - 42;
    } else {
        return 42 - blocks;
    }
};

const distanceFromHqInFeet = (blocks) => {
    let feet = distanceFromHqInBlocks(blocks);
    return feet * 264;
};

const distanceTravelledInFeet = (sBlock, eBlock) => {
    if (sBlock < eBlock) {
        return (eBlock - sBlock) * 264;
    } else {
        return (sBlock - eBlock) * 264;
    }

};

const calculatesFarePrice = (sBlock, eBlock) => {
    let ride = distanceTravelledInFeet(sBlock, eBlock);

    if (ride <= 400) {
        return 0;
    } else if (ride <= 2000) {
        return (ride - 400) * 0.02;
    } else if (ride <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}