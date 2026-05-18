// 先加载背景图片，立即显示
const img = document.createElement('img');
img.id = 'background-media';
img.src = 'Themes/浮梦午憩/picture.webp';
document.body.prepend(img);

// 异步加载视频，初始隐藏
const video = document.createElement('video');
video.id = 'background-media';
video.src = 'Themes/浮梦午憩/video.mp4';
video.autoplay = true;
video.loop = true;
video.muted = true;
video.style.display = 'none';

// 视频加载完成后，替换图片为视频
video.oncanplaythrough = () => {
  img.remove();
  video.style.display = 'block';
  document.body.prepend(video);
};

document.body.appendChild(video);