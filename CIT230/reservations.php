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
        <link rel="stylesheet" href="css/reservations.css">

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
                <h2 id="main-h2">Book Your Adventure</h2>

                <div id="trip-wrapper">

                    <div class="resp">
                        <div class="trip">
                            <img src="img/scenicfloat-300x225.jpg" alt="Scenic Float Trip" title="Scenic Float Trip">
                            <div class="profile"><h4><b>1/2 Scenic Float Trip</b></h4>
                            <p><b>Length:</b> 6-mile</p>
                            <p><b>Level:</b> all skill levels and ages</p>
                            <P><b>Price per Adult:</b> $39.00</P>
                            <P><b>Price per Youth:</b> $39.00 for ages 16 and younger</P>
                            <p><b>Services:</b> About 2 hours on the water (depends on river flow) covering at least a 5-6 mile stretch of the scenic Salmon River.</p>
                            </div>
                        </div>
                    </div>

                    <div class="resp">
                        <div class="trip">
                            <img src="img/1drafting-300x225.jpg" alt="Whitewater Rafting Trip" title="Whitewater Rafting Trip"><div class="profile">
                            <h4><b>1-Day Salmon River Whitewater Rafting Trip</b></h4>
                            <p><b>Length:</b> 13-mile</p>
                            <p><b>Level:</b> all skill levels and ages</p>
                            <P><b>Price per Adult:</b> $108.50</P>
                            <P><b>Price per Youth:</b> $98.00 for ages 16 and younger</P>
                            <p><b>Services:</b> A full day of whitewater, riverside lunch and shuttle.</p>
                            </div>
                        </div>
                    </div>

                    <div class="resp">
                        <div class="trip">
                            <img src="img/2d1nrafting-300x225.jpg" alt="Whitewater Rafting Trip" title="Whitewater Rafting Trip"><div class="profile">
                            <h4><b>2-Day / 1-Night Salmon River Whitewater Rafting Trip</b></h4>
                            <p><b>Length:</b> 28-mile</p>
                            <p><b>Level:</b> all skill levels and ages</p>
                            <P><b>Price per Adult:</b> $385.00</P>
                            <P><b>Price per Youth:</b> $299.00 for ages 16 and younger</P>
                            <p><b>Services:</b> All camping gear, meals/beverages and transportation to/from the river is included.</p>
                            </div>
                        </div>
                    </div>

                </div>




                <div id="form-contact">
                    <h2>Reserve Your Trip</h2>
                    <fieldset>
                        <label><span>Full Name</span><input class="forms" name="" type="text" value="" title="Please provide your full name" pattern="[a-zA-Z -._]{3,99}" required></label>
                        <label><span>Email</span><input class="forms" name="" type="email" value="" title="Please provide a valid email address" required></label>
                        <label><span>Phone</span><input class="forms" name="" type="text" value="" title="Please provide your phone number" pattern="[0-9]{10,20}" required></label>
                        <label><span>Select Adventure</span><input name="favChar" class="forms" type="text" list="characters">
                            <datalist id="characters">
                                <option value="1/2 Scenic Float Trip"></option>
                                <option value="1-Day Salmon River Whitewater Rafting Trip"></option>
                                <option value="2-Day / 1-Night Salmon River Whitewater Rafting Trip"></option>
                            </datalist>
                        </label>
                        <label><span>Start Date</span><input class="forms" name="date" type="date"></label>
                        <label><span>Comments</span><textarea></textarea></label>
                        <input type="submit" value="Book Now" class="submitBtn">
                    </fieldset>
                </div>
            </main>
        </div>
        <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/footer.php'; ?>
    </body>
</html>
