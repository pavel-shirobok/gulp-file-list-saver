var path = require('path');
var through = require('through2');
var fs = require('fs');

module.exports = function (resolveRelativeTo, target, saveContent) {
    var root = path.resolve(resolveRelativeTo);

    saveContent = !!saveContent;

    var list = [];
    return through.obj(
        function(file, enc, cb){
            list.push({
                path : file.path.substr(root.length + 1),
                content : saveContent?file.contents.toString():null
            });
            cb(null, file);
        },
        function(done) {
            fs.writeFile(
                path.resolve(target),
                JSON.stringify(list, null, 4),
                'utf-8',
                done
            );
        }
    )
};