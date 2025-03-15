const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0,2);
};



    const returnLastTwoDrivers = (drivers) => {
        return drivers.slice(2,4);
    };




    const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
    
    const createFareMultiplier = (multiplier) => {
    return (fare) => fare * multiplier;

    };

    const fareDoubler = createFareMultiplier(2);
    const fareTripler = createFareMultiplier(3);

    const selectDifferentDrivers = (drivers, driverSelector) => {
        return driverSelector(drivers);
    };

    console.log(returnFirstTwoDrivers(['Tom', 'Jerry', 'Powerpuffgirls', 'Ricky'])); 
    console.log(returnLastTwoDrivers(['Tom', 'Jerry', 'Powerpuffgirls', 'Ricky']));
    console.log(fareDoubler(10));
    console.log(fareTripler(10));
    console.log(selectDifferentDrivers(['Tom','Jerry','Powerpuffgirls','Ricky'], returnFirstTwoDrivers));
    console.log(selectDifferentDrivers(['Tom','Jerry','Powerpuffgirls','Ricky'], returnLastTwoDrivers));