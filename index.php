<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Головна Сторінка</title>
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="./js/libs/superslides-0.6.2/dist/stylesheets/superslides.css">
    <script src="./js/jquery-2.2.4.js"></script>
    <script src="./js/libs/superslides-0.6.2/dist/jquery.superslides.js"></script>
    <script src="./js/libs/html5shiv.js"></script>
    <script src="https://www.youtube.com/iframe_api"></script>


</head>
<body>
    <?php include('./elements/header.php') ?>
    <section id="main-banner">
        <div id="slides">
            <ul class="slides-container">

                <li>
                    <img src="./img/fon_1.jpg"  alt="">
                    <div class="slider-content">
                        <p class="blue-text"> <b>Робити</b> добро легше, ніж <b>бути</b> добрим</p>
                        <p class="author blue-text">
                            Ж. Вольфрам
                        </p>

                        <div class="donate">
                            <a href="#">DONATE</a>
                        </div>
                    </div>
                </li>
                <li>
                    <img src="./img/fon_2.jpg"  alt="">
                    <div class="slider-content white-text">
                        <p> Ми підтримуємо...</p>
                        <div class="donate white-text">
                            <a href="#current-programs" id="to-current-programs">Деталі</a>
                        </div>
                    </div>
                </li>
                <li>
                    <img src="./img/fon_3.jpg"  alt="">
                    <div class="slider-content white-text">
                        <p>ОСТАННІ НОВИНИ...</p>
                        <div class="donate">
                            <a href="#news" id="toNews">Деталі</a>
                        </div>
                    </div>
                </li>
                <li>
                    <div id="video-placeholder"></div>
                </li>



            </ul>
            <nav class="slides-navigation">
                <a href="#" class="next"></a>
                <a href="#" class="prev"></a>
            </nav>

        </div>
    </section>
    <section id="activity">
        <div class="wrapper">
            <article id="fund_mission">
                <p>	<span class="headings">Місія фонду </span> полягає у 
                    розвитку громадянського суспільства, підтримці та підвищенні соціальних благ населення України. </p>

                <a href="about-mission.php">Детальніше Про Місію Фонду</a>
            </article>
            <div class="activity-fond">
                <p class="block-header">
                    ДІЯЛЬНІСТЬ
                </p>
                <div class="activity-rectangle rect1">
                    <div class="box-text">
              <span>
                <span class="text-add">Розвиток</span>
                соціального потенціалу регіонів України
              </span>
                    </div>
                    <div class="box-details">
                        <a href="#">ДЕТАЛІ...</a>
                    </div>
                </div>
                <div class="activity-rectangle rect2">
                    <div class="box-text">
              <span>
                <span class="text-add">Підтримка </span>
                проблемних регіонів України та вимушених переселенців з Донбасу та Криму</span>
                    </div>
                    <div class="box-details">
                        <a href="#">ДЕТАЛІ...</a>
                    </div>
                </div>
                <div class="activity-rectangle rect3">
                    <div class="box-text">
              <span>
                <span class="text-add">Сприяння </span>
                розвитку та підтримка соціально незахищених верств населення України
              </span>
                    </div>
                    <div class="box-details">
                        <a href="#">ДЕТАЛІ...</a>
                    </div>
                </div>
                <div class="activity-rectangle rect4">
                    <div class="box-text">
              <span>
                <span class="text-add">Допомога </span>
                учасникам та ветеранам АТО і їхнім сім’ям </span>

                    </div>
                    <div class="box-details">
                        <a href="#">ДЕТАЛІ...</a>
                    </div>
                </div>
                <div class="clear-activity"></div>

            </div>
        </div>
                <div class="hidden-details" id="hidden-details-rect1"><p>Соціальний потенціал регіону бачимо як можливість громади
                    забезпечувати найбільш сприятливі умови для населення. Надати можливість особистості задовольняти власні
                    потреби та досягати успіхів – це перший крок до якісного та безпечного життя. Ми ставимо перед собою
                    завдання акумулювати ресурси для підтримки ініціатив на конкурсній основі.</p></div>
                <div class="hidden-details" id="hidden-details-rect2"><p>Лозунг “Україна – єдина” не має залишатися лише словами на
                    плакатах. Усі українці відчувають наслідки кризи. Проте люди, які втратили свій дім та свободу, потребують
                    сьогодні допомоги чи не найбільше. Крім того одним із напрямків нашої є діяльності є також підтримка українців,
                    які наразі залишаються на окупованих територіях.</p>
                </div>
                <div class="hidden-details" id="hidden-details-rect3"><p>Нестабільне економічне становище у країні призвело до того,
                    що за межею бідності опиняється все більше українців. Акумулюючи кошти на гуманітарну допомогу, Фонд берез
                    за мету допомогу соціально незахищеним верствам населення.</p>
                </div>
                <div class="hidden-details" id="hidden-details-rect4"><p>Війна у країні триває, а тому потреба у підтримці тих,
                    хто боронить незалежність України досі є надзвичайно актуальною. Нам потрібно працювати над розвитком
                    цілого спектру напрямків від підготовки військових, підтримки їх в зоні бойових дій та їхніх сімей у тилу
                    до реабілітації та адаптації їх до життя після війни.</p></div>
    </section>

    <section class="about-us"><a id="about-us-anchor"></a>
        <div class="wrapper">
            <article class="about-us-article">
                <p class="about-us-title">Про Фонд</p>
                <p class="about-us-text">	Благодійна діяльність в ширшому значенні це дія по наданню безпосередньо чи обслуговуванню благодійної
                    допомоги благодійника, як соціально значуща функція, реалізована через впорядкований та визначений
                    законодавством вид діяльності — тому не є синонімом благодійництва і схожа лише за призначенням.
                    Благодійна діяльність часто реалізується через організації такого спрямування (фонди, спілки, школи,
                    лікарні, інтернати, заклади тощо), що є посередником між благодійниками та безпосередніми набувачами
                    такої благодійності. Наприклад комп'ютер наданий школі чи ВНЗу є благодійністю для фахівців та учнів
                    чи студентів доступ та користування котрим надається організовано саме довірена особа чи організація
                    набувач пожертвуваного ресурсу, тобто — благодійна діяльність є надання та обслуговування самого акту
                    і ресурсу благодійності для набувача цієї благодійності (пожертви).</p>


                <blockquote>
                    <p class="phrase-text">
                        <b>"Благодійність</b> приходить з розкритими
                        долонями , її призначення - <b>віддавати"</b>
                        <cite>Перл Бак</cite>
                        <img src="./img/director.png" alt="author photo">
                    </p>
                </blockquote>
            </article>
        </div>
    </section>
    <section class="current-programs" id="current-programs">
        <div class="wrapper">
            <h2 class="block-header">
                ДІЮЧІ ПРОГРАМИ
            </h2>
            <div class="current-programs-box-wrapper">
                <div class="box box1">
                    <div class="box-text">
                        <span class="">РЕГІОНАЛЬНА ДОПОМОГА</span>
                    </div>
                    <div class="box-details programs-box">
                        <a href="#">ДЕТАЛІ...</a>
                    </div>
                </div>
                <div class="box box1">
                    <div class="box-text">
                        <span class="">РЕГІОНАЛЬНА ДОПОМОГА</span>
                    </div>
                    <div class="box-details programs-box">
                        <a href="#">ДЕТАЛІ...</a>
                    </div>
                </div>
                <div class="rect-vert">
                    <div class="box-text">
                        <span class="">РЕГІОНАЛЬНА ДОПОМОГА</span>
                    </div>
                    <div class="box-details programs-box">
                        <a href="#">ДЕТАЛІ...</a>
                    </div>
                </div>
                <div class="box box1">
                    <div class="box-text">
                        <span class="">РЕГІОНАЛЬНА ДОПОМОГА</span>
                    </div>
                    <div class="box-details programs-box">
                        <a href="#">ДЕТАЛІ...</a>
                    </div>
                </div>
                <div class="box box1">
                    <div class="box-text">
                        <span class="">РЕГІОНАЛЬНА ДОПОМОГА</span>
                    </div>
                    <div class="box-details programs-box">
                        <a href="#">ДЕТАЛІ...</a>
                    </div>
                </div>
            </div>


        </div>
    </section>
    <section id="news" class="news">
        <p class="news-title">Новини</p>
        <img src="./img/america.png">
        <div class="wrapper">

            <p>  День незалежності вважається днем народження Сполучених Штатів як вільної і незалежної країни. Більшість американців називають це свято просто за його датою - «Четверте липня».</p>
            <p>    Свято нагадує про те, що 4 липня 1776 було підписано Декларацію незалежності. У той час жителі 13 британських колоній, які розташовувалися уздовж східного узбережжя сьогоднішньої території Сполучених Штатів, вели війну з англійським королем і парламентом, оскільки вважали, що ті поводяться з ними несправедливо. Війна почалась у 1775 році. </p>
            <p>    Протягом своєї історії Сполучені Штати Америки є прикладом демократичного суспільства, заснованого на верховенстві закону і повної поваги до прав людини, осередком цивілізаційного вибору сучасності, гарантом миру, безпеки й стабільності світового ладу. </p>
            <p>    Останні події в Україні продемонстрували міцне партнерство між нашими держави у відстоюванні демократії та свободи, що є дуже важливим для Українського народу. </p>
            <p>    Ми переконані, що партнерські відносини з Сполученими Штатами Америки й надалі будуть зміцнюватись та сприятимуть взаємовигідному соціально-політичному, торгово-економічну та благодійному співробітництву для обох держав.  </p>
            <p>   Від імені нашого Благодійного Фонду «Стрічка Надії» щиро вітаємо Сполучені Штати Америки з нагоди Дня Незалежності та бажаємо процвітання та мирного неба! </p>

        </div>
    </section>
    <section class="write-us">
        <h3 class="write-us-header">НАПИШІТЬ НАМ</h3>
        <div class="feedback-link">
            <a href="#" id="go">НАПИСАТИ</a>
        </div>
        <!--Modal window-->

            <div id="modal_form">
                <h3>Зв'яжіться з нами</h3>
                <input type="text" class="modal_form_input modal_name">
                <input type="email" class="modal_form_input modal_email">
                <input type="text" class="modal_form_input modal_phone">
                <textarea name="" id="" cols="30" rows="10" class="modal_form_input modal_message"></textarea>
                <input type="submit" class="modal_form_submit" value="Надіслати">
            </div>
            <div id="overlay"></div>

        <!--end of modal window-->
    </section>
    <?php include('./elements/footer.php')?>
    <script type="text/javascript" src="js/main.js"></script>
</body>
</html>