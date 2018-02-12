var feed = new Instafeed({
    get: 'user',
    userId: '2242907265',
    accessToken: '2242907265.5a4266b.999f81975caa49708e4de857382d0ce2'
  });
feed.run();

$(document).ready(function() {

    var updateFeed = function() {
        $('.social-feed-container').socialfeed({
            /* Twitter
            twitter: {
                accounts: '@chrisOneOut',
                limit: 2,
                consumer_key: 'qzRXgkI7enflNJH1lWFvujT2P', // make sure to have your app read-only
                consumer_secret: '8e7E7gHuTwyDHw9lGQFO73FcUwz9YozT37lEvZulMq8FXaPl8O', // make sure to have your app read-only
            },*/
            // INSTAGRAM
            instagram: {
                accounts: '@chrisOneOut',
                limit: 2,
                client_id: '999f81975caa49708e4de857382d0ce2',
                access_token: '2242907265.5a4266b.999f81975caa49708e4de857382d0ce2'
            },
            // GENERAL SETTINGS
            length: 200,
            show_media: true,
            // Moderation function - if returns false, template will have class hidden
            moderation: function(content) {
                return (content.text) ? content.text.indexOf('fuck') == -1 : true;
            },
            //update_period: 5000,
            // When all the posts are collected and displayed - this function is evoked
            callback: function() {
                console.log('all posts are collected');
            }
        });
    };
});
