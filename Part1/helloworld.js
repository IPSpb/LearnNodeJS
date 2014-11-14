// Загрузка модуля http
var http = require('http');

// Создание http-сервера
http.createServer(function (req, res) {

    // заголовок контента
    res.writeHead(200, {'content-type': 'text/plain'});

    // Запись сообщение и завершение сигнальной связи
    res.end("Hello, World!\n");
}).listen(8124);

console.log('Server running on 8124');
