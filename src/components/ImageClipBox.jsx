/* eslint-disable react/prop-types */
function ImageClipBox({src, clipClass}) {
  return (
    <div className={clipClass}>
        <img src={src} />
    </div>
  )
}

export default ImageClipBox