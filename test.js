function Someasynctask(callback) {
    console.log('beginning of task')
    setTimeout(function () {
        console.log('end of task')
        callback()
    }, 4000)
}

let sometaskpromise = function () {
    return new Promise(function (resolve, reject) {
        Someasynctask(resolve)
    })
}
sometaskpromise().then(function () {
    console.log('after task completion')
})


