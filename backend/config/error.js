class CustomError extends Error {
    constructor(
        statusCode, messageError
    ) {
        super(messageError)
    }

    badRequest(messageError) {
        return new CustomError(400, messageError)
    }

    notfound(messageError) {
        return new CustomError(404, messageError)
    }

    internalServer(messageError) {
        return new CustomError(500, messageError)
    }
}

export default CustomError;
