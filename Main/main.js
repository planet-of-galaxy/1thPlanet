// 先加载背景图片，立即显示
const $img = $('<img>', {
  id: 'background-media',
  src: 'Themes/废弃都市/picture.webp'
});
$('body').prepend($img);

// 异步加载视频，初始隐藏
const $video = $('<video>', {
  id: 'background-media',
  src: 'Themes/废弃都市/video.mp4',
  autoplay: true,
  loop: true,
  muted: true,
  css: { display: 'none' }
});

// 视频加载完成后，替换图片为视频
$video.on('canplaythrough', () => {
  $img.remove();
  $video.css('display', 'block');
  $('body').prepend($video);
});

$('body').append($video);