<?php
namespace Craft;

class Lj_cookiesVariable
{
    function set($name = "", $value = "", $expire = "", $path = "", $domain = "", $secure = "", $httponly = "")
    {
		$expire = (int) $expire;
		setcookie($name, $value, $expire, $path, $domain, $secure, $httponly);
		$_COOKIE[$name] = $value;
    }
	
	function get($name)
	{
		if(isset($_COOKIE[$name])) :
			return $_COOKIE[$name];
		endif;
    }
}