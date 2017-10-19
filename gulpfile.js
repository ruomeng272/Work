/**
 * Created by Baixue on 2017/10/13.
 */


var fs = require("fs"),
    url = require("url"),
    path = require("path");

var gulp = require("gulp"),
    webserver = require("gulp-webserver");

gulp.task("server", function () {
    gulp.src("./")//json数据所在位置
        .pipe(webserver({
            port: "8090",
            host: "localhost",
            livereload: true,
            directoryListing: {
                path: "./",
                enable: true
            },
            middleware: function (req, res, next) {
                var Ourl = url.parse(req.url);
                var file = path.join(__dirname, "Data", Ourl.query + ".json");
                fs.exists(file, function (exists) {
                    if (!exists) {
                        res.writeHead(404, {
                            "Content-type": "text/json,charset=utf8"
                        });
                        res.end("Request is invalid");
                    }
                    fs.readFile(file, function (err, data) {
                        if (err) console.error(err);

                        res.writeHead(200, {
                            "content-type": "text/json,charset=utf8",
                            "Access-Control-Allow-Origin":"http://localhost:63342"
                        });
                        res.end(data.toString());
                    })
                })
            }
        }))
});
