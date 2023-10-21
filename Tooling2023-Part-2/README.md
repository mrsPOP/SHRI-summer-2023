# ШРИ: Тулинг 2023 часть 2
## Использование Chrome DevTools - анализ открытия сайта.
### 1) на вкладке Network

1.1) записать и сохранить в HAR архив профиль загрузки ресурсов при открытии страницы: https://github.com/mrsPOP/Tooling2023-Part-2/blob/main/www.gd.ru.har

1.2) найти неоптимальные места:

1.2.1) дублирование ресурсов

 ![image](https://github.com/mrsPOP/Tooling2023-Part-2/assets/104379022/395eebc2-95cf-4342-8819-8cf8ed051644)

1.2.2) лишний размер ресурса

Повторное подключение набора шрифтов +нет сжатия: 
![image](https://github.com/mrsPOP/Tooling2023-Part-2/assets/104379022/a3d47e75-3dee-4f5d-9522-fade33f3837f)

1.2.3) медленно загружающиеся ресурсы

 ![image](https://github.com/mrsPOP/Tooling2023-Part-2/assets/104379022/fca1980e-8678-44f3-82ff-4949f2d3ddd3)
 ![image](https://github.com/mrsPOP/Tooling2023-Part-2/assets/104379022/5d5d8959-0005-49d7-842a-f6058f02ea54)

1.2.4) ресурсы, блокирующие загрузку

![image](https://github.com/mrsPOP/Tooling2023-Part-2/assets/104379022/ac1b4726-4359-48af-aaf7-aa84170dd1cc)


### 2) на вкладке Performance

2.1) записать и сохранить в файл профиль загрузки страницы: https://github.com/mrsPOP/Tooling2023-Part-2/blob/main/www.gd.ru.har

2.2) измерить время в миллисекундах от начала навигации до событий First Paint (FP), First Contentful Paint (FCP), Largest Contentful Paint (LCP), DOM Content Loaded (DCL), Load

•	First Paint: 765.4 ms
•	First Contentful Paint: 765.4 ms
•	Largest Contentful Paint: 981.8 ms
•	DOM Content Loaded: 1135.0 ms
•	Load: 4227.6 ms

![image](https://github.com/mrsPOP/Tooling2023-Part-2/assets/104379022/bcc4b4fa-25e4-4cc0-915f-da5375b2eb8b)

2.3) определить, на каком DOM-элементе происходит LCP

![image](https://github.com/mrsPOP/Tooling2023-Part-2/assets/104379022/1cb515a8-6d49-4bcc-8ae7-eae1c25a5e1f)
![image](https://github.com/mrsPOP/Tooling2023-Part-2/assets/104379022/3497f91d-80fb-45ad-b583-88ba7829f24a)

 
2.4) измерить, сколько времени в миллисекундах тратится на разные этапы обработки документа (Loading, Scripting, Rendering, Painting)

•	Loading: 27 мс
•	Scripting: 813 мс
•	Rendering: 252 мс
•	Painting: 16 мс

![image](https://github.com/mrsPOP/Tooling2023-Part-2/assets/104379022/5af60c45-7290-4539-9662-db26877eb0aa)


### 3) на вкладке Coverage

3.1) сохранить скриншот вкладки после загрузки страницы

![image](https://github.com/mrsPOP/Tooling2023-Part-2/assets/104379022/6864b176-bc19-4ed8-ad1f-bc6fa406e866)

3.2) измерить в килобайтах объём неиспользованного CSS в ходе загрузки страницы

![image](https://github.com/mrsPOP/Tooling2023-Part-2/assets/104379022/8ef6bd64-94ce-4fca-8d07-c83cb1c078f1)
объём неиспользованного CSS: 593 Kb
 
3.3) измерить в килобайтах объём неиспользованного JS в ходе загрузки страницы

![image](https://github.com/mrsPOP/Tooling2023-Part-2/assets/104379022/a03bcde0-9584-468a-a8c8-99b52b814d80)
объём неиспользованного JS: 1.4 MB = 14336 Kb

