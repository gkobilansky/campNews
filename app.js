$(document).ready(function () {

    var jqxhr = $.get("http://www.freecodecamp.com/news/hot");

    jqxhr.success(function () {

        var posts = jqxhr.responseJSON;

        posts.forEach(function (element) {

            var date = new Date(element.timePosted).toGMTString().slice(0, -13);
            var storyPic = element.image;
            if (!storyPic) {
                storyPic = "http://placehold.it/120x120?text=FreeCodeCamp.com";
            };

            var html = '<li class="media"><a class="pull-left" href="' + element.link + '">';
            html += '<img class="media-object" src="' + storyPic + '" alt="' + element.heading + '" style="width: 120px; height: 120px;"></a>';
            html += '<div class="media-body"><a href="' + element.link + '"><h4 class="media-heading">' + element.headline + '</h4></a></div>';
            html += '<span class="glyphicon glyphicon-fire"></span> ' + element.upVotes.length;
            html += '<p>' + date + '</p>';
            html += '<p>' + element.metaDescription + '</p>';
            html += '<a class="btn btn-info btn-sm pull-right" href="http://freecodecamp.com/' + element.author.username + '">@' + element.author.username + '</a></li>';

            $(".media-list").append(html);
        });
    });


    // menu

    $('.nav li').click(function () {
        $('.nav li.active').removeClass('active');
        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
    });

});