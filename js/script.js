var feed = new Instafeed({
    get: 'user',
    userId: '2242907265',
    accessToken: '2242907265.5a4266b.999f81975caa49708e4de857382d0ce2'
  });
feed.run();

$(document).ready(function(){
    $('.social-feed-container').socialfeed({
        // INSTAGRAM
        instagram:{
            accounts: ['@teslamotors','#teslamotors'],  //Array: Specify a list of accounts from which to pull posts
            limit: 2,                                    //Integer: max number of posts to load
            access_token: '2242907265.5a4266b.999f81975caa49708e4de857382d0ce2' //String: Instagram access token
        },

        // GENERAL SETTINGS
        length:400                                      //Integer: For posts with text longer than this length, show an ellipsis.
    });
});
