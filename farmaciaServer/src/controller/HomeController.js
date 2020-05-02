class HomeController {
    constructor() { }

    index(request, response) {
        return response.json({
            message: "hello"
        })
    }
}

module.exports = new HomeController()