<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title id="title">Salmon River Adventure</title>
    <style>
        @import url('https://fonts.googleapis.com/css?family=Kreon:300|Walter+Turncoat');
    </style>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <!-- style sheets -->
    <link rel="stylesheet" href="css/style.css">

    <!-- icons for social -->
    <link rel="stylesheet" href="css/font-awesome.css">

    <!-- google jquery library -->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

    <!-- jquery script path -->
    <script src="js/jquery.js"></script>

</head>
<body>
    <div id="site-wrap" class="site-wrap">
        <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/header.php'; ?>
    <main>
    <div id="top-image" title="Salmon River Landscape">
        <p>...not the usual adventure...</p>
    </div>
    <div id="intro">
        <h1>Who Are We</h1>
        <p>Salmon River Adventure is a company located in Riggins, Idaho and offers world-class, whitewater rafting experiences on the Salmon River in the middle of the Idaho wilderness. The owner-operated company offers day and overnight trips for groups and individuals using state-of-the-art equipment and complies with all U.S. Forest Service regulations.
        </p>
    </div>
    <div class="slide">
        <h1>Gallery</h1>
        <div id='flex-wrapper'>

        <div class="responsive">
            <div class="gallery">
                <img src="img/pic6_slide.jpg" alt="Rafting on the Salmon River" title="Rafting on the Salmon River" width="600" height="400">
                <div class="desc">Working together</div>
            </div>
        </div>

        <div class="responsive">
            <div class="gallery">
                <img src="img/pic5_slide.jpg" alt="Salmon River camp at sunset" title="Rafting on the Salmon River" width="600" height="400">
                <div class="desc">Exciting water adventure</div>
            </div>
        </div>

        <div class="responsive">
            <div class="gallery">
                    <img src="img/pic7_slide.jpg" alt="Rafting on the Salmon River" width="600" height="400">
                <div class="desc">Go with the flow</div>
            </div>
        </div>

        <div class="responsive">
            <div class="gallery">
                <img src="img/pic3_slide.jpg" alt="A breathtaking landscape of Salmon River" title="A breathtaking landscape of Salmon River" width="600" height="400">
                <div class="desc">Be surrounded by nature</div>
            </div>
        </div>

        <div class="responsive">
            <div class="gallery">
                <img src="img/pic1_slide.jpg" alt="Salmon River camp at sunset" title="Salmon River camp at sunset" width="600" height="400">
                <div class="desc">Enjoy the sunset</div>
            </div>
        </div>

        <div class="responsive">
            <div class="gallery">
                <img src="img/pic2_slide.jpg" alt="Salmon River creek" title="Salmon River creek" width="600" height="400">
                <div class="desc">Peaceful river creek</div>
            </div>
        </div>
        </div>
    </div>
    <div id="weather">
        <h2 id="cityDisplay"></h2>
        <ul>
            <li id="currentTemp"></li>
            <li id="summary"></li>
            <li id="add2"></li>
        </ul>
        <div id="wu">
        <p>Weather Center 2010 - 2017</p>
        <img src="img/wulogo_rev.png" alt="Weatherunderground logo" title="All weather data provided by WeatherUnderground.com">
        </div>
    </div>

    </main>
    </div>
    <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/footer.php'; ?>
</body>
</html>





















