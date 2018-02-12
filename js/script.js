var feed = new Instafeed({
    get: 'user',
    userId: '2242907265',
    accessToken: '2242907265.5a4266b.999f81975caa49708e4de857382d0ce2'
  });
feed.run();

$('.social-feed-container').socialfeed({

    // INSTAGRAM
    instagram:{
        accounts: ['@teslamotors','#teslamotors'],  //Array: Specify a list of accounts from which to pull posts
        limit: 2,                                   //Integer: max number of posts to load
        access_token: '2242907265.5a4266b.999f81975caa49708e4de857382d0ce2' //String: Instagram access token
    },

    // GENERAL SETTINGS
    length:400,                                     //Integer: For posts with text longer than this length, show an ellipsis.
    show_media:true,                                //Boolean: if false, doesn't display any post images
    update_period: 5000,                            //Integer: Number of seconds before social-feed will attempt to load new posts.
    template_html:                                  //String: HTML used for each post. This overrides the 'template' filename option
    '<article class="twitter-post"> \
    <h4>{{=it.author_name}}</h4><p>{{=it.text}}  \
    <a href="{{=it.link}}" target="_blank">read more</a> \
    </p> \
    </article>',
    callback: function() {                          //Function: This is a callback function which is evoked when all the posts are collected and displayed
        console.log("All posts collected!");
    }
});
