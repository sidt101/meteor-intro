<<<<<<< HEAD
Template.postsList.helpers({
  posts: function() {
  return Posts.find();
  }
=======
var postsData = [
{
title: 'Introducing Telescope',
url: 'http://sachagreif.com/introducing-telescope/'
},
{
title: 'Meteor',
url: 'http://meteor.com'
},
{
title: 'The Meteor Book',
url: 'http://themeteorbook.com'
}
];
Template.postsList.helpers({
posts: postsData
>>>>>>> a22c8678d9aadc68308ceb2945e3aaa199fed56d
});