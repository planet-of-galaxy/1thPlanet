const $img = $('<img>', {
  id: 'background-img',
  src: 'Themes/废弃都市/picture.webp'
});
$('body').prepend($img);

const $video = $('<video>', {
  id: 'background-media',
  loop: true,
  css: { display: 'none' }
});
$video[0].muted = true;

// 先绑定事件，再设置 src，确保不错过 canplaythrough
$video.on('canplaythrough', () => {
  $img.remove();
  $video.css('display', 'block');
});

$('body').prepend($video);
$video[0].src = 'Themes/废弃都市/video.mp4';
$video[0].play();