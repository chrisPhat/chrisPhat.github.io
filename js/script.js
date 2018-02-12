var feed = new Instafeed({
    get: 'user',
    userId: '2242907265',
    accessToken: '2242907265.5a4266b.999f81975caa49708e4de857382d0ce2'
  });
feed.run();

$(document).ready(function() {
  $('#tweecool').tweecool({
  //settings
  username : 'chrisOneOut',
  limit : 5
  });
});
