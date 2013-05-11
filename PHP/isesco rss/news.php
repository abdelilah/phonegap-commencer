<?php
$rss = file_get_contents('http://isesco.org.ma/index.php?format=feed&lang=fr');
$xml = simplexml_load_string($rss);
$news = array();
foreach($xml->channel->item as $item)
{
	$news[] = array(
						'title' => (string)$item->title,
						'img' => 'http://placehold.it/50x50',
						'link' => (string)$item->link,
						'description' => (string)$item->description,
					);
}
echo json_encode($news);