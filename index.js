// Code your solution in this file!
const hqBlock = 42;

function distanceFromHqInBlocks(block){
    return Math.abs(block - hqBlock);
    
}

function distanceFromHqInFeet(block){
    const blocks = distanceFromHqInBlocks(block);
    return blocks * 264;
}

function distanceTravelledInFeet(start, destination){
    const blocksTravelled = Math.abs(start - destination);

    return blocksTravelled * 264
}

function calculatesFarePrice(start, destination){
    const distanceInFeet = distanceTravelledInFeet(start, destination)
    if (distanceInFeet <= 400){
        return 0;
    }else if (distanceInFeet > 400 && distanceInFeet <= 2000){
        return (distanceInFeet - 400) * 0.02;
    }else if(distanceInFeet > 2000 && distanceInFeet <= 2500){
        return 25;
    }else {
        return 'cannot travel that far';
    }
}