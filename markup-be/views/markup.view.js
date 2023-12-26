exports.post = (req, res) => {
    if (req.body.markup) {
        res.status(201).send({
            status: 'success',
            message: {
                'html': req.body.markup
            }
        })
    } else {
        res.status(400).send({
            status: "error",
            message: 'Markup text is not found'
        });
    }
}

