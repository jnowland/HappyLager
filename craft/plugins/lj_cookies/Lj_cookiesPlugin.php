<?php
namespace Craft;

class Lj_cookiesPlugin extends BasePlugin
{
    function getName()
    {
        return Craft::t('LJ Cookies');
    }

    function getVersion()
    {
        return '1.0';
    }

    function getDeveloper()
    {
        return 'Lewis Jenkins';
    }

    function getDeveloperUrl()
    {
        return 'http://lewisjenkins.co.uk';
    }
}