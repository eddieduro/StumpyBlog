import Ember from 'ember';

export function limitedPost(params, hash) {
  console.log()
  var count = 0;
  var postArray = [];
  for(var i = 0; i < 6; i++){
    count = count + 1;
    postArray.push(params[0].content[i]);
  }
  hash = {postArray.slice(0,6)};
  console.log(hash);
  // if(params.length < 5){
  //   console.log('yo');
  // }
}

export default Ember.Helper.helper(limitedPost);
