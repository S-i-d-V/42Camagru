<?php
$dbconn = pg_connect('host=web-pgsql port=5432 dbname=foobar user=foobar password=foobar')
    or die('Could not connect');
     
echo '<pre>' . var_export(pg_version($dbconn), true) . '</pre>';

pg_close($dbconn);
?>