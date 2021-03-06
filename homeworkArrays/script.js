function firstTask() {
    let animal = {
        name: 'Cat',
        weight: 5,
        age: 4,
        speed: 5,
        getInfo: function () {
            console.log(this);
        },
        setName: function (newName) {
            this.name = newName;
        },
        calclTimeToThousand: function () {
            let daysAmount = Math.ceil((1000 / this.speed) / 12);
            return daysAmount;
        },
    }
    animal.getInfo();
    animal.setName('Devil');
    console.log(`${animal.name} пройде 1000 км за ${animal.calclTimeToThousand()} днів`);
}

function secondTask() {
    let figure = {
        widthX: 4,
        widthY: 4,
        isSI: false,
        setName: function (newName) {
            this.name = newName;
        },
        getArea: function () {
            let area;
            if ('widthZ' in thirdTask) {
                area = (2 * (this.widthX * this.widthY + this.widthY * this.widthZ + this.widthX * this.widthZ));
            } else {
                area = (this.widthX * this.widthY);
            }
            return area;
        },
        getPerimeter: function () {
            let perimeter;
            if ('widthZ' in thirdTask) {
                perimeter = 4 * this.widthX + 4 * this.widthY + 4 * this.widthZ;
            } else {
                perimeter = 2 * (this.widthX + this.widthY);
            }
            return perimeter;
        },
        setWidthZ: function (width) {
            if (Number.isNaN(width)) {
                return;
            }
            this.widthZ = width;
        },
        setSI: function (useSI) {
            if (this.isSI === useSI) {
                return;
            }
            if (useSI === true) {
                this.widthX /= 100;
                this.widthY /= 100;
                if ('widthZ' in thirdTask) {
                    this.widthZ /= 100;
                }
                this.isSI = true;
            } else if (useSI === false) {
                this.widthX *= 100;
                this.widthY *= 100;
                if ('widthZ' in thirdTask) {
                    this.widthZ *= 100;
                }
                this.isSI = false;
            }
        },
    }

    console.log(figure);
    console.log(`Периметр фігури - ${figure.getPerimeter()}, площа - ${figure.getArea()}`);
    figure.setWidthZ(4);
    console.log(`Периметр фігури - ${figure.getPerimeter()}, площа - ${figure.getArea()}`);
    figure.setName('parallelepiped');
    figure.setSI(true);
    console.log(figure);

}

function thirdTask() {
    let toBuy = {
        tomato: {
            count: 5,
            price: 50,
            buy: true,
            outOfstore: false,
        },
        bread: {
            count: 1,
            price: 20,
            buy: true,
            outOfstore: false,
        },
        butter: {
            count: 2,
            price: 40,
            buy: false,
            outOfstore: false,
        },
        cookies: {
            count: 5,
            price: 15,
            buy: false,
            outOfstore: false,
        },
        buckwheat: {
            count: 10,
            price: 60,
            buy: false,
            outOfstore: false,
        },
        toiletPaper: {
            count: 10,
            price: 15,
            buy: true,
            outOfstore: true,
        },
    }

    console.log(`список покупок доступних в наявності:
    ${showToBuyList(showAvailableToBuy(toBuy))}`);
    console.log(`список покупок не доступних в наявності:
    ${showToBuyList(showUnavailableToBuy(toBuy))}`);
    console.log(`список зроблених покупок:
    ${showToBuyList(showBought(toBuy))}`);
    setItemBought(toBuy, 'butter');
    console.log(`Ви витратили - ${calcTotalSpent(toBuy)} грн`);
    console.log(toBuy);
    increaseItemCount(toBuy, 'butter', 2);
    decreaseItemCount(toBuy, 'cookies', 3);
    console.log(toBuy);
}

function setItemBought(toBuy, item) {
    toBuy[item].buy = true;
}
function calcTotalSpent(toBuy) {
    let totalSpent = 0;
    for (const key in toBuy) {
        if (toBuy.hasOwnProperty(key) && toBuy[key].buy) {
            totalSpent += toBuy[key].price * toBuy[key].count;
        }
    }
    return totalSpent;
}
function increaseItemCount(toBuy, item, count) {
    toBuy[item].count += count;
}
function decreaseItemCount(toBuy, item, count) {
    if ((toBuy[item].count - count) > 0) {
        toBuy[item].count -= count;
    } else {
        toBuy[item].count = 0;
    }
}
function showAvailableToBuy(toBuy) {
    let toBuyAvailable = {};
    for (const key in toBuy) {
        if (toBuy.hasOwnProperty(key) && !toBuy[key].outOfstore) {
            toBuyAvailable[key] = toBuy[key];
        }
    }
    return toBuyAvailable;
}
function showUnavailableToBuy(toBuy) {
    let toBuyUnavailable = {};
    for (const key in toBuy) {
        if (toBuy.hasOwnProperty(key) && toBuy[key].outOfstore) {
            toBuyUnavailable[key] = toBuy[key];
        }
    }
    return toBuyUnavailable;
}
function showBought(toBuy) {
    let toBuyUnavailable = {};
    for (const key in toBuy) {
        if (toBuy.hasOwnProperty(key) && toBuy[key].buy) {
            toBuyUnavailable[key] = toBuy[key];
        }
    }
    return toBuyUnavailable;
}
function showToBuyList(toBuy) {
    return Object.keys(toBuy);
}

function fourthTask() {
    let employees = [
        {
            name: "Yura",
            age: 55,
            hobby: ["films", "games", "hiking"],
            type: "Admin",
        },
        {
            name: "Tanya",
            age: 26,
            hobby: ["films", "Photography", "games", "manga"],
            type: "Employee",
        },
        {
            name: "Stephan",
            age: 23,
            hobby: ["films", "games", "cycling", "IoT"],
            type: "Employee",
        },
        {
            name: "Taras",
            age: 19,
            hobby: ["video editing", "games", "cycling", "rapping"],
            type: "Employee",
        },
    ];
    console.log(`Список адмінів
    ${showEmployees(getAdmins(employees))}`);
    console.log(`Унікальні хоббі:
    ${getUniqueHobbies(employees)}`);
    console.log(`Середній вік працівників:
    ${calcAverageAge(employees)}`);
    console.log(`унікальні хоббі працівників:
    ${getUniqueHobbies(employees)}`);
}

function calcAverageAge(employees) {
    let averageAge = employees.reduce((ageAmount, employee) => (ageAmount + employee.age), ageAmount = 0) / employees.length;
    return averageAge;
}

function showEmployees(employeeList) {
    let employeesNames = employeeList.map(employee => employee.name);
    return employeesNames;
}

function showHobbies(employeeList) {
    let employeesHobbies = employeeList.map(employee => employee.hobby);
    return employeesHobbies;
}

function getAdmins(employeeList) {
    let adminList = employeeList.filter(employee => employee.type == 'Admin');
    return adminList;
}

function getUniqueHobbies(employeeList) {
    let uniqueHobbiesList = [];
    let hobbiesList = getHobbies(employeeList);

    uniqueHobbiesList = hobbiesList.filter(checkIsUnique);
    
    return uniqueHobbiesList;
}
function checkIsUnique(element, indexOfElement, array) {
    let elementCount = 0;
    for (let index = 0; index < array.length; index++) {
        if (elementCount > 1) {
            return false;
        }
        if (array[index] == element) {
            elementCount += 1;
        }
    }
    return true;

}
function getHobbies(employeeList) {
    let hobbiesList = [];
    let hobbies = [];
    hobbiesList = employeeList.map(employee => employee.hobby);
    hobbies = hobbiesList.flat(1);
    return hobbies;
}