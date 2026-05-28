// 从 Themes.json 读取主题配置列表
$.getJSON('Themes/Themes.json', (themes) => {
  // 从 localStorage 读取当前主题
  const savedTheme = localStorage.getItem('selectedTheme');
  // 验证主题是否存在，不存在则使用默认主题"废弃都市"
  const theme = (savedTheme && themes.includes(savedTheme)) ? savedTheme : '废弃都市';
  // 如果没有保存过主题，保存默认主题
  if (!savedTheme) {
    localStorage.setItem('selectedTheme', theme);
  }

  // 创建背景图片元素
  const $img = $('<img>', {
    id: 'background-img',
    src: `Themes/${theme}/picture.webp`
  });
  $('body').prepend($img);

  // 创建背景视频元素
  const $video = $('<video>', {
    id: 'background-media',
    loop: true,
    css: { display: 'none' }
  });
  $video[0].muted = true;

  // 视频加载完成后移除图片，显示视频
  $video.on('canplaythrough', () => {
    $img.remove();
    $video.css('display', 'block');
  });

  // 先绑定事件，再设置 src，确保不错过 canplaythrough
  $('body').prepend($video);
  $video[0].src = `Themes/${theme}/video.mp4`;
  $video[0].play();
});