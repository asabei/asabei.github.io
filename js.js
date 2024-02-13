/* Это объявление переменной, мы наши кнопку по тегу */
const button = document.querySelector('button');
const button1 = document.querySelector('button1');
const button2 = document.querySelector('button2');

button.addEventListener('click', function() {
	alert('Родился 5 ноября 1987 года в г.Дрезден, Германия. \nВ 2009 году окончил Томский Политехнический Университет, \nфакультет "Автоматики и вычислительной техники" по специальности \n"Автоматизация систем управления"')
})

/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button1.addEventListener('click', function() {
	alert('С 2010 г. по 2012 г. КДВ начальник инженерной службы, \nC 2012 г. по 2017 г. СИБАГРО главный механик, \nC 2017 г. по 2022 г. ТЭМЗ начальник цеха, \nC 2022 г. по н.в. QA Engineer')
})
button2.addEventListener('click', function() {
	alert('Postman, Charles, Яндекс трекер, Notion, Swagger, Qase.io, Kibana, Sentry, Metabase, Dbeaver, SOAP UI, Devtools')
})
