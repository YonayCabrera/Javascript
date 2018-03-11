

////////////////////////////////////////
/////////// Zona ejercicio 1 ///////////
////////////////////////////////////////


function ejercicio01(email) {
    console.log(email);
    if (email === "yunior.developer@hotmail.com") {
        return true;
    } else if (email === "miguel@mrbug.es") {
        return true;
    } else if (email === "imanol@mercadona.com") {
        return true;
    }
    return false;
}



////////////////////////////////////////
//////// Final zona ejercicio 1 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 2 ///////////
////////////////////////////////////////


function ejercicio02(email) {
    var numberOfM = 0;
    lengthOfEmail = email.length;
    for (var i = 0; i < lengthOfEmail; i++) {
        if (email[i] == "M") numberOfM++;
    }
    if (lengthOfEmail > 0 && numberOfM > 0) {
        return "el correo [" + email + "] tiene [" + lengthOfEmail +
            "] caractes y en mayúsculas se quedaría así [" + email.toUpperCase() + "].Ademas [si] contiene [" + numberOfM + "] M";

    }
    if (lengthOfEmail > 0) {
        return "el correo [" + email + "] tiene [" + lengthOfEmail +
            "] caractes y en mayúsculas se quedaría así [" + email.toUpperCase() + "]. Ademas [no] contiene [ninguna] M";

    }
    return "el correo no tiene ningun caracter"
}



////////////////////////////////////////
//////// Final zona ejercicio 2 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 3 ///////////
////////////////////////////////////////


function ejercicio03(email) {
    console.log(email);
    var donthaveNumber = "no";
    var haveNumber = "yes";
    lengthOfEmail = email.length;
    arroba = email.indexOf("@");
    var numbers = countNumbers(email);

    if (lengthOfEmail > 0 && numbers > 0) {
        return whenEmailHaveCharacters(haveNumber, email, arroba, numbers);
    } else if (lengthOfEmail > 0 && numbers == 0) {
        return whenEmailHaveCharacters(donthaveNumber, email, arroba, numbers);
    }
    return "el correo [no] tiene [ninguna] caracter"
}

function whenEmailHaveCharacters(request, email, arroba, numbers) {
    return "el correo [" + email + "] pertenece al dominio [" + email.substring(arroba) + "] y tiene [" +
        email.substring(0, arroba).length + "] caracteres sin contar el dominion ni el @.Ademas, el correo [" + request + "]" +
        "contiene [" + numbers + "] números";
}

function countNumbers(email) {
    lengthOfEmail = email.length;
    numbers = 0;
    for (var i = 0; i < lengthOfEmail; i++) {
        if (email[i] == [0] || email[i] == [1] || email[i] == [2] || email[i] == [3] || email[i] == [4] ||
            email[i] == [8] || email[i] == [7] || email[i] == [6] || email[i] == [5] || email[i] == [9]) {
            numbers++;
        }
    }
    return numbers;
}



////////////////////////////////////////
//////// Final zona ejercicio 3 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 4 ///////////
////////////////////////////////////////


function ejercicio04(user) {
    console.log(user);
    if (user.edad >= 18) {
        return "El usuario " + user.nombre + "es mayor de edad." +
            "Por lo tanto, le he creado un usuario con el correo " + user.correo;
    }
    return "El usuario " + user.nombre + "no es mayor de edad.";
}



////////////////////////////////////////
//////// Final zona ejercicio 4 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 5 ///////////
////////////////////////////////////////


function ejercicio05(user) {
    console.log(user);
    if (user.nombre.toLowerCase() === "yunior") {
        return "La persona introducida es Yunior";
    } else if (user.nombre.toLowerCase() != "yunior" || user.edad === "24" || user.correo === "yunior.developer@hotmail.com") {
        return "La persona introducida podría ser Yunior.Ya que tiene el mismo correo" +
            user.correo + "/la misma edad " + user.edad + "/el mismo nombre " + user.nombre + "]";
    } else if (user.nombre.toLowerCase() != "yunior" || user.edad === "24") {
        return "La persona introducida no es Yunior";
    }
    return "";
}



////////////////////////////////////////
//////// Final zona ejercicio 5 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 6 ///////////
////////////////////////////////////////


function ejercicio06(user) {
    var callback = {
        valid: false,
        errors: [
            {
                code: 'email_invalid_min_length',
                text: 'El correo debe contener más de 7 caracteres.'
            },
            {
                code: 'email_need_@',
                text: 'El correo debe contener @.'
            },
            {
                code: 'email_invalid_max_length',
                text: 'El email debe contener un maximo de 60 caracteres.'
            },
            {
                code: 'name_invalid_min_length',
                text: 'El nombre debe contener más de 5 caracteres.'
            },
            {
                code: 'name_invalid_max_length',
                text: 'El nombre debe contener un maximo de 60 caracteres.'
            },
            {
                code: 'name_invalid_sintaxis',
                text: 'El nombre debe contener letras y espacios solamente.'
            },
            {
                code: 'age_invalid_min_number',
                text: 'La edad debe ser superior a 5.'
            },
            {
                code: 'age_invalid_max_number',
                text: 'La edad debe ser inferior a 150.'
            },
            {
                code: 'email_contain_right_character',
                text: 'El email debe tener contenido por la derecha.'
            },
            {
                code: 'email_contain_left_character',
                text: 'El email debe tener contenido por la izquierda.'
            },
        ]
    };
    if (validUser(user, callback)) {
        callback.valid = true;
        return callback;
    }
    return callback;
}

function validUser(user, callback) {
    var emailLength = user.correo.length;
    var nameLength = user.nombre.length;
    if (user.correo.indexOf("@") == -1) {
        alert(callback.errors[1].text);
        return false;
    }
    else if (user.correo.indexOf("@") != -1) {
        var RegExpression = /^[\w\s]*$/;
        var email = user.correo.split("@");
        if (nameLength < 5) {
            alert(callback.errors[3].text);
            return false;
        } if (nameLength > 60) {
            alert(callback.errors[4].text);
            return false;
        } if (emailLength < 7) {
            alert(callback.errors[0].text);
            return false;

        } if (emailLength > 60) {
            alert(callback.errors[2].text);
            return false;

        } if (email[0].length <= 0) {
            alert(callback.errors[9].text);
            return false;

        } if (email[1].length <= 0) {
            alert(callback.errors[8].text);
            return false;
        } if (user.edad < 5) {
            alert(callback.errors[6].text);
            return false;
        } if (user.edad > 150) {
            alert(callback.errors[7].text);
            return false;
        }
    }
    return true;
}

////////////////////////////////////////
//////// Final zona ejercicio 6 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 7 ///////////
////////////////////////////////////////


function ejercicio07(users) {
    console.log(users);
    var number = [];
    var numbersOfItems = 0;
    var usersStored = [];

    _.forEach(users, (element, id) => {
        if (ejercicio06(element).valid) {
            numbersOfItems++;
            number.push(id + 1);
            usersStored.push(element);
        }
    });
    var callback = {
        items_inserted: numbersOfItems,
        ids: number,
        with_errors: [
            {
                text: 'no son válidos'
            }
        ],
        users_stored: usersStored
    };
    return callback;
}



////////////////////////////////////////
//////// Final zona ejercicio 7 ////////
////////////////////////////////////////
