$(function () {
    let user = localStorage.getItem('_user')
    let level = localStorage.getItem('_level')
    if (user == null && level == null) {
        $('#app').html(templateWelcome())
    } else {
        console.table(user)
    }


    // Save Username & Start Game
    $('#btnSaveUsername').each(function () {
        $(this).on('click', function () {
            let usernameField = $('#fieldUsername').val();
            console.log(usernameField)
            if (usernameField != null) {
                localStorage.setItem('_user', usernameField)
                localStorage.setItem('_level', 0)
                location.reload()
            }
        })
    })

})

function templateWelcome() {
    let template = `<div class="container" id="welcome">
    <div class="card shadow-sm w-75 m-auto round-50">
        <div class="card-body">
            <div class="text-center">
                <h1>Welcome To</h1>
            </div>
            <div class="text-center">
                <h2>Simple Puzzle Game</h2>
            </div>
            <div class="text-center mt-5">
                <div class="form-group w-75 mr-auto ml-auto">
                    <input type="text" class="form-control" placeholder="Input your name..." name="username" id="fieldUsername" required>
                </div>
                <div class="form-group w-25 m-auto">
                    <button class="btn btn-primary btn-block" id="btnSaveUsername">Start Game</button>
                </div>
            </div>
        </div>
    </div>
</div>`
    return template;
}