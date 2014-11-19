/**
* Простое приложение для вызова нового Node - приложения 2000 раз
*/
var http = require('http');

// требуемый url-адрес плюс путь и нужные нам параметры
var options = {
    host: 'localhost',
    port: 8124,
    path: '/?file=secondary',
    method: 'GET'
};
var processPublicTimeline = function (response) {
    // готово? хорошо, запись данных в файл
    console.log('запрос окончен');
};
for (var i = 0; i < 2000; i++) {
    // совершение запроса с последующим его завершением
    // для закрытия соединения
    http.request(options, processPublicTimeline).end();
}