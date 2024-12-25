function makeid(l) {
	let ans="";
	let charlist="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

	for(let i=1;i<=l;i++){
		ans=ans+charlist.charAt(
			Math.floor(Math.random()*charlist.length)
		)
	}
	return ans;
  // write your code here
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
