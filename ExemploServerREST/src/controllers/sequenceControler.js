exports.post = (req, res, next) => {
    res.status(201).send('Route POST');
};

exports.put = (req, res, next) => {
    console.log(req.body);
    let id = req.body.id;
    res.status(201).send(`Route PUT with ID: ${id}`);
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Route DELETE with ID: ${id}`);
};

exports.get = (req, res, next) => {
    res.status(200).send('Route GET');
};

exports.getById = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Route GET with ID: ${id}`);
};