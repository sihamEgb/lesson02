var isPolyndrom = function(s){
	while(s.length >= 2)
	{
		if(s.charAt(0) != s.charAt(s.length-1))
			return false;
		s = s.substr(1,s.length-2);
	}
	if(s.length ==0)
		return true;
	if(s.length ==1)
		return true;

};
//console.log(isPolyndrom('ab'));
//console.log(isPolyndrom('a a'));
//console.log(isPolyndrom('aba'));
//console.log(isPolyndrom('bbb'));
//console.log(isPolyndrom('abab'));
