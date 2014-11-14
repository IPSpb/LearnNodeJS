/**
 * Асинхронное открытие файла  helloworld.js и чтение его контента
 */

// загрузка модуля http, fs
var http = require('http');
var fs = require('fs');

// создание http сервера
http.createServer(function (req, res) {
    // открытие helloworld.js и чтение контента
    fs.readFile('helloworld.js', 'utf8', function (err, data) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        if (err)
            res.write('Не возможно открыть файл для чтения');
        else
            // при отсутствии ошибки вывод файла на экран клиента
            res.write(data);
        res.end();
    });
}).listen(8124, function () {
    console.log('Связан с портом 8124');
});
console.log('Server running on 8124/');
