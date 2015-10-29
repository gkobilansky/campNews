var jqxhr = $.get("http://www.freecodecamp.com/news/hot");



jqxhr.success(function () {

    var posts = jqxhr.responseJSON;
    console.log(posts[0].headline);

    posts.forEach(function (element) {

        $(".media-list").append(
            '<li class="media"><a class="pull-left" href="' + element.link + '"><img class="media-object" data-src="holder.js/64x64" src="' + element.image + '" alt="' + element.heading + '" style="width: 64px; height: 64px;"></a><div class="media-body"><h4 class="media-heading">' + element.headline + '</h4></div>' + element.metaDescription + '</li>'

        )
    });
});