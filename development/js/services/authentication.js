sme.factory('Authentication',function  ($firebase,$firebaseAuth,FIREBASE_URL) {
	var ref = new Firebase('https://servicingme.firebaseio.com');
	var ref = new Firebase(FIREBASE_URL);
  	var auth = $firebaseAuth(ref);
	var myObject = {

    login: function(user) {
      var ref = new Firebase(FIREBASE_URL);
      var auth = $firebaseAuth(ref);
      return auth.$authWithPassword({
        email: user.email,
        password: user.password
      });
  	}
    }//login
	return myObject;
});