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
        <link rel="stylesheet" href="css/contact.css">

        <!-- icons for social -->
        <link rel="stylesheet" href="css/font-awesome.css">

        <!-- google jquery library -->
        <script src="//ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

        <!-- the jquery script below is responsible for the dropdown effect of the navigational menu -->
        <script src="js/jquery.js">
        </script>

        <!-- the jquery script below is responsible for the responsiveness of the video -->
        <script src="js/jquery.fitvids.js"></script>
        <script>
            $(document).ready(function(){
                // Target your .container, .wrapper, .post, etc.
                $(".container").fitVids();
            });
        </script>

    </head>
    <body>
        <div id="site-wrap" class="site-wrap">
            <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/header.php'; ?>
            <main>
                <div title="Message in the bottle" id="top-contact">
                </div>
                <div id="head-contact">
                <h2>Contact Us</h2>
                <p>Salmon River Adventure Staff is here to provide you with more information, and answer any question you may have.</p><p> Use the contact information below or send us a message through the form at the bottom of the page.</p>
                </div>
                <div id="info-contact">
                <div>
                <p><b>General Contact</b></p>
                <p>Toll-Free: 888-986-0023</p>
                <p>Phone: 541-488-0078</p>
                <p>Fax: 541-488-0056</p>
                <p>Email: office@salmonriver.com</p>
                </div>
                <div>
                <p><b>Reservations Info</b></p>
                <p>Toll-Free: 800-839-0001</p>
                <p>Email: info@salmonriver.com</p>
                </div>
                </div>
                <div id="map-contact">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.4359566165685!2d-116.31799578481979!3d45.42071254436571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54a6c569b5b4cae5%3A0x3118ef58524f3a4!2s1000+Main+St!5e0!3m2!1sit!2sus!4v1491027876383" width="800" height="380" frameborder="0" style="border:0" allowfullscreen></iframe>
                </div>
                <div id="form-contact">
                    <h2>Have a question?</h2>
                    <fieldset>
                    <label><span>First Name</span><input class="forms" name="" type="text" value="" title="Please provide your first name" pattern="[a-zA-Z -._]{3,99}" required></label>
                    <label><span>Last Name</span><input class="forms" name="" type="text" value="" title="Please provide your last name" pattern="[a-zA-Z -._]{3,99}" required></label>
                    <label><span>Email</span><input class="forms" name="" type="email" value="" title="Please provide a valid email address" required></label>
                    <label><span>Message</span><textarea></textarea></label>
                    <input type="submit" value="Send Message" class="submitBtn">
                    </fieldset>
                </div>

                <div id="videoheading">
                <h2>About the Website</h2>
                </div>
                <div class="container">
                    <div id="video">
                        <iframe width="853" height="480" src="https://www.youtube.com/embed/IquL55oR1Gs" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>

            </main>
        </div>
        <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/footer.php'; ?>
    </body>
</html>
