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

        <link rel="stylesheet" href="css/adventures.css">

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
            <h2 id="main-h2">Adventures List</h2>

            <div id="trip-wrapper">

                <div class="respo">
                    <div class="trip">
                        <div class="img"><img src="img/scenicfloat-300x225.jpg" alt="Scenic Float Trip" title="Scenic Float Trip"></div>
                        <div class="profile"><h4><b>1/2 Scenic Float Trip</b></h4>
                        <p>Short on time, but still want a taste of life along the river? Rafts (or scows) depart from right outside our office and float a very gentle stretch of the Salmon River. You will spend about 2 hours on the water (depends on river flow) and cover at least a 5-6 mile stretch of the scenic Salmon River.</p>
                        <P><b>Price per Adult:</b> $39.00</P>
                        <P><b>Price per Youth:</b> $39.00 for ages 16 and younger</P>
                        <p><b><a href="1venture.php">Read More...</a></b></p>
                        </div>
                    </div>
                </div>

                <div class="respo">
                    <div class="trip">
                        <div class="img"><img src="img/1drafting-300x225.jpg" alt="Whitewater Rafting" title="Whitewater Rafting"></div><div class="profile">
                        <h4><b>1-Day Salmon River Whitewater Rafting Trip</b></h4>
                        <p>Paddle Raft, Oar Boat or Kayak the “River of No Return” 13-mile tour. Family fun rapids guided by experienced guides for all skill levels and ages. A full day of whitewater, riverside lunch and shuttle. </p>
                        <P><b>Price per Adult:</b> $108.50</P>
                        <P><b>Price per Youth:</b> $98.00 for ages 16 and younger</P>
                        <p><b><a href="2venture.php">Read More...</a></b></p>
                        </div>
                    </div>
                </div>

                <div class="respo">
                    <div class="trip">
                        <div class="img"><img src="img/2d1nrafting-300x225.jpg" alt="Whitewater Rafting" title="Whitewater Rafting"></div><div class="profile">
                        <h4><b>2-Day / 1-Night Salmon River Whitewater Rafting Trip</b></h4>
                        <p>Journey through approximately 28 miles on the Main Salmon River. All camping gear, meals/beverages and transportation to/from the river is included.</p>
                        <P><b>Price per Adult:</b> $385.00</P>
                        <P><b>Price per Youth:</b> $299.00 for ages 16 and younger</P>
                        <P><b>Discount for groups 8+:</b> $25.00 off per person</P>
                        <p><b><a href="3venture.php">Read More...</a></b></p>
                        </div>
                    </div>
                </div>

            </div>
        </main>
        </div>
        <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/footer.php'; ?>
    </body>
</html>




