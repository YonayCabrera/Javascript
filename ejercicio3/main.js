var usersEmails = [];
$("#submitButton").click(function () {
    var user = {
        nombre: $('#nombre').val(),
        edad: $('#edad').val(),
        correo: $('#correo').val()
    }
    var html = getHtml(user, user.nombre, user.edad, user.correo);
    if (validationOfUsers(user).valid == true) {
        $("#formulario").append(html);
        clearForm();
    }
});

function removeClassInToInput() {
    $('#nombre,#edad,#correo').removeClass('is-invalid');
}

function addClassInToInputName() {
    $('#nombre').addClass('is-invalid');
}

function addClassInToInputAge() {
    $('#edad').addClass('is-invalid');
}

function addClassInToInputEmail() {
    $('#correo').addClass('is-invalid');
}

function clearForm() {
    $('#nombre,#edad,#correo').val('');
}

function validationOfUsers(user) {
    removeClassInToInput();
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
            {
                code: 'email_repeated',
                text: 'El email esta repetido.'
            }
        ]
    };
    if (validUser(user, callback)) {
        usersEmails.push(user.correo)
        callback.valid = true;
        return callback;
    }
    return callback;
}

function validUser(user, callback) {
    var emailLength = user.correo.length;
    var nameLength = user.nombre.length;

    if (user.correo.indexOf("@") == -1) {
        addClassInToInputEmail();
        alert(callback.errors[1].text);
        return false;
    }
    else if (user.correo.indexOf("@") != -1) {
        var RegExpression = /^[\w\s]*$/;
        var email = user.correo.split("@");
        if (nameLength < 5) {
            addClassInToInputName();
            alert(callback.errors[3].text);
            return false;
        } if (nameLength > 60) {
            addClassInToInputName();
            alert(callback.errors[4].text);
            return false;
        } if (emailLength < 7) {
            addClassInToInputEmail();
            alert(callback.errors[0].text);
            return false;

        } if (emailLength > 60) {
            addClassInToInputEmail();
            alert(callback.errors[2].text);
            return false;

        } if (email[0].length <= 0) {
            addClassInToInputEmail();
            alert(callback.errors[9].text);
            return false;

        } if (email[1].length <= 0) {
            addClassInToInputEmail();
            alert(callback.errors[8].text);
            return false;
        } if (usersEmails.find(email=> email==user.correo)) {
            addClassInToInputEmail();
            alert(callback.errors[10].text);
            return false;
        } if (user.edad < 5) {
            addClassInToInputAge();
            alert(callback.errors[6].text);
            return false;
        } if (user.edad > 150) {
            addClassInToInputAge();
            alert(callback.errors[7].text);
            return false;
        }
    }
    return true;
}

function getHtml(usuario, nombre, edad, email) {
    var hola = "holaaa";
    return '<div class="input-group col-md-2 mb-3">' +
        '<div class="input-group-prepend">' +
        '<span class="input-group-text">Nombre</span>' +
        '</div>' +
        '<input type="text" id="secondaryName" class="form-control" placeholder = ' + nombre + ' aria-describedby="inputGroup-sizing-default" disabled>' +
        '</div>' +
        '<div class="input-group col-md-2 mb-3">' +
        '<div class="input-group-prepend">' +
        '<span class="input-group-text">Correo</span>' +
        '</div>' +
        '<input type="text" id="' + email + '" class="form-control" placeholder = ' + email + ' aria-describedby="inputGroup-sizing-default" disabled>' +
        '</div>' +

        '<div class="input-group col-md-2 mb-3">' +
        '<div class="input-group-prepend">' +
        '<span class="input-group-text">Edad</span>' +
        '</div>' +
        '<input type="text" id="secondaryAge" class="form-control" placeholder = ' + edad + ' aria-describedby="inputGroup-sizing-default" disabled>' +
        '</div>' +
        '<button onclick="removeForm(' + usuario + ')" class="btn btn-primary" type="submit">Remove form</button>';
}

function removeForm(usuario) {
    // console.log(usuario.correo);
    console.log("entra");
}