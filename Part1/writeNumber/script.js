/**
 * Записывает последовательность чисел, а затем контент файла
 */

var http = require('http'),
    fs = require('fs');

// запись чисел
function writeNumbers(res) {
    var counter = 0;

    // глобальное приращение значения, запись для клиента
    for (var i = 0; i < 100; i++) {
        counter++;
        res.write(counter.toString() + '\n');
    }
}

// создание http-сервера
http.createServer(function (req, res) {

    var query = require('url').parse(req.url).query;
    var app = require('querystring').parse(query).file + '.txt';

    // заголовок контента
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // Запись чисел
    writeNumbers(res);

    // Установка таймера на открытие файла и чтение его контента
    setTimeout(function () {

        console.log('opening ' + app);
        // открытие файла и чтение его контента
        fs.readFile(app, 'utf8', function (err, data) {
            if (err)
                res.write('Не возможно открыть файл');
            else
                res.write(data);
            // ответ дан
            res.end();
        });
    }, 2000);

}).listen(8124);
console.log('Server running on 8124');
