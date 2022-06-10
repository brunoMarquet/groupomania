<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="css/style.css" />
    <title>JavaScript FormData Demo</title>
</head>
<body>
    <main>
        <div id="message"></div>
        <form action="" method="post" id="subscription">
            <div>
                <label for="name">Name:</label>
                <input type="text" name="name" id="name"/>
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="email" name="email" id="email"/>
            </div>
            <div>
                <button type="submit" id="submit">Subscribe</button>
            </div>
        </form>
    </main>
    <script src="js/app.js"></script>
</body>
</html>