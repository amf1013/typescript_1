function register() {
    // registering a new user

    let forenames: string | undefined = getInputValue('forenames');
    logInformation(forenames);
    let surname: string | undefined = getInputValue('surname');
    logInformation(surname);
    let nickname: string | undefined = getInputValue('nickname');
    logInformation(nickname);
    let emailAddress: string | undefined = getInputValue('emailAddress');
    logInformation(emailAddress);
    var password: string | undefined = getInputValue('password');
    logInformation(password);
    let confirmPassword: string | undefined = getInputValue('confirmPassword');
    if(password === confirmPassword && confirmPassword !== undefined) {
        console.log(`Validated: ${confirmPassword}`)
    }
    else {
        console.error("Invalid data Entry");
    }
    let terms: string | undefined = getInputValue('terms');
    logInformation(terms);
}

function logInformation(elementValue: string | undefined): void {
    if(elementValue != undefined) {
        console.log(`Valdiated: ${elementValue}`);
    }
    else {
        console.error("Invalid data entry.");
    }
}

function getInputValue(elementID: string): string | undefined {
    // selecting the correct element to ensure the correct validation has occured
    const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);
    switch(elementID) {
        case elementID = 'forenames': {
            if(inputElement.value.length >= 1) {
                return inputElement.value;
            }
            else {
                return undefined;
            }
        }
        case elementID = 'surname': {
            if(inputElement.value.length >= 2) {
                return inputElement.value;
            }
            else {
                return undefined;
            }
        }
        case elementID = 'emailAddress': {
            const symbolIndex: number | undefined = inputElement.value.indexOf('@');
            if(symbolIndex === null) {
                return undefined;
            }
            else {
                const firstSection: string | undefined = inputElement.value.substring(0, symbolIndex);
                if(firstSection.length >= 4) {
                    return inputElement.value;
                }
                else {
                    return undefined;
                }
            }
        }
        case elementID = 'password': {
            if(inputElement.value.length >= 4) {
                var firstPassword = inputElement.value;
                return inputElement.value;
            }
            else {
                return undefined;
            }
        }
        case elementID = 'confirmPassword': {
            if(inputElement.value === '') {
                return undefined;
            }
            else {
                return inputElement.value;
            }
        }
        case elementID = 'terms' : {
            if(String(inputElement.value) === 'on') {
                const agreementAccepted = "Terms and conditions accepted."
                return agreementAccepted;
            }
            else {
                return undefined;
            }
        }
        default: {
            return inputElement.value;
        }
    }
}

function arrayMethods() {
    // different arrays and methods
    console.log("Array Methods:");

    // Array method 1
    console.log("Array 1:");
    const array1 = [89, 5, 56, 102, 7];
    function largerThan50(array: number) {
        return array > 50;
    }
    console.log(array1.filter(largerThan50));

    // Array method 2
    console.log("Array 2");
    const array2 = ["John", "Sarah", "Beth", "Adam", "Peter"];
    array2.splice(2, 2, "Cindy", "Zoe");
    console.log(array2);

    //Array method 3
    console.log("Array 3");
    const array3 = ["John", "Sarah", "Beth", "Adam", "Peter"];
    array3.splice(3, 1)
    console.log(array3);

    //Array method 4
    console.log("Array 4");
    const array4 = [89, 5, 56, 102, 7];
    array4.pop();
    console.log(array4);

    //Array method 5
    console.log("Array 5");
    const array5 = [89, 5, 56, 102, 7];
    array5.push(78);
    console.log(array5);

    //Array method 6
    console.log("Array 6");
    const array6 = [89, 5, 56, 102, 7];
    console.log(array6.indexOf(5));

    //Array method 7
    console.log("Array 7");
    const array7 = ["John", "Sarah", "Beth", "Adam", "Peter"];
    console.log(array7.slice(1, 4));

    //Array method 8
    console.log("Array 8");
    const array8 = [89, 5, 56, 102, 7];
    array8.unshift(14, 67);
    console.log(array8);

    //Array method 9
    console.log("Array 9");
    const intArray = [1, 2, 3];
    const letterArray = ["a", "b", "c"];
    let tempArray = intArray.map(String);
    console.log(tempArray.concat(letterArray));

}

document.getElementById('register')!.addEventListener('click', register);
document.getElementById('arrayMethods')!.addEventListener('click', arrayMethods);