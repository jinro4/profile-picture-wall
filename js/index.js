// Register Handlebars Helper
Handlebars.registerHelper('times', function(n, options) {
    var accum = '';

    for(var i=0; i<n; ++i) {
        accum += options.fn(i);
    }

    return accum;
});

Handlebars.registerHelper('get', function(images) {
    return images[Math.floor(Math.random() * images.length)];
});

function createPictureWall(options) {
    var size = options.size || 40,
        rows = options.rows || 10,
        cols = options.cols || 10;

    var params = {
        rows: rows || 10,
        cols: cols || 10,
        tileSize: size + 'px',
        // form size = tile size * cols + approximate tile margin
        rowSize: (size * cols) + (cols * 5) + 'px',
        colSize: (size * rows) + (rows * 5) + 'px',
        images: options.images,
        wallpaper: options.wallpaper
    };

    if (!params.images || !params.wallpaper || typeof params.image !== 'object' || params.image.length < 1) {
        console.error('You must passing "image tile" and "wallpaper" to "createPictureWall" function.');

        return;
    }

    var source = $(options.id || '#wall').html(),
        template = Handlebars.compile(source);

    var tmpl = template(params);

    $(options.target || '#container').append(tmpl);

    return;
}
