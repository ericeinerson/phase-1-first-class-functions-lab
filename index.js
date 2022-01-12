// Code your solution in this file!
const returnFirstTwoDrivers = (arrayOfDrivers) => {
    return arrayOfDrivers.slice(0,2);
};

//returns last two drivers in the array, not destructive
const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
        return (fare) =>    {
        console.log(multiplier);
        console.log(fare);
        return fare * multiplier;
    };
};
console.log(createFareMultiplier());

const fareDoubler = createFareMultiplier(2);
//fareDoubler(10)

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers,selectDriversFunction){
    console.log(selectDriversFunction);
    return (selectDriversFunction(arrayOfDrivers));
}