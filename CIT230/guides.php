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
        <link rel="stylesheet" href="css/guides.css">

        <!-- icons for social -->
        <link rel="stylesheet" href="css/font-awesome.css">

        <!-- google jquery library -->
        <script src="//ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

        <!-- the jquery script below is responsible for the dropdown effect of the navigational menu -->
        <script src="js/jquery.js"></script>
    </head>
    <body>
        <div id="site-wrap" class="site-wrap">
            <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/header.php'; ?>
            <main>
                <h2 id="main-h2">Meet our River Guides</h2>

                <div id="guides-wrapper">

                    <div class="resp">
                        <div class="guides">
                            <img src="img/riverguide-1_300x256.jpg" alt="River Guide Chester Palmers" title="River Guide Chester Palmers"><div class="profile"><h4><b>Chester Palmers</b></h4><p>Chester has been working on the Salmon River for 7 years. His superior whitewater boating and kayaking skills make him one of the best guides on the Salmon River. Chester is an Eagle Scout and an excellent wilderness chef. He spends his winters training a soccer team and recently graduated from BYU-Idaho.
                            </p></div>
                        </div>
                    </div>

                    <div class="resp">
                        <div class="guides">
                            <img src="img/riverguide-2_300x256.jpg" alt="River Guide Captain America" title="River Guide Captain America"><div class="profile">
                            <h4><b>Captain America</b></h4><p>Eventually he grew tired of the SHIELD and decided to devote himself to an activity equally exciting like being an Avenger. That's why he got an international certification as a River Guide and now works for Salmon River Adventure. He is a master of origami and a fan of thai food. With Captain on board, fun is 100% guaranteed.
                            </p>
                            </div>
                        </div>
                    </div>

                    <div class="resp">
                        <div class="guides">
                            <img src="img/riverguide-3_300x256.jpg" alt="River Guide Garret Peddleton" title="River Guide Garret Peddleton"><div class="profile">
                            <h4><b>Garret Peddleton</b></h4><p>Garret started rafting and kayaking at the age of 18 and knew right away that this was the life for him.  With a superior level of professionalism, expertise and humor, both guests and guides have been enjoying his company for many years. When off the river, you can always find Garrett accompanied by his faithful doshund dog, Nacho.
                            </p>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
        <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/footer.php'; ?>
    </body>
</html>
