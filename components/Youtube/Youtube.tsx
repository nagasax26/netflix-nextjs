interface YoutubeProps {
    videoId: string
    width?: string
    height?: string
    autoplay?: boolean
    fullScreen?: boolean
    className?: string
  }
  
  function Youtube({
    videoId,
    width,
    height,
    autoplay,
    fullScreen,
    className,
  }: YoutubeProps) {
    const src = `https://www.youtube.com/embed/${videoId}?frameborder=0&modestbranding=0&rel=0&controls=0&autoplay=${
      autoplay ? 1 : 0
    }`
    return (
      <iframe
        className={className}
        width={width}
        height={height}
        allow="autoplay"
        allowFullScreen={fullScreen}
        src={src}
      ></iframe>
    )
  }
  
  Youtube.deafultProps = {
    autoplay: false,
    fullScreen: false,
    className: '',
  }
  
  export default Youtube
  