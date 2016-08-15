<html>
    <meta charset="utf-8">
<head>
<script src="http://code.jquery.com/jquery-latest.js"></script>
<script>
$(document).ready(function(){
        $("button").click(function () {
                $("p").toggle();
                if($(this).html() == 'Показать') $(this).html('Скрыть');
                else $(this).html('Показать');
        });
});
</script>
</head>
<body>
  <button>Показать</button>
  <p style="display: none">Good Bye</p>
</body>
</html>