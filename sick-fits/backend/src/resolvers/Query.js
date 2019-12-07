const Query = {
    dogs(parent, args, ctx, info) {
        return [{name: 'Lassy'}, {name: 'Callie'}];
    },
};

module.exports = Query;
