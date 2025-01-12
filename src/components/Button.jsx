/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
function Button({id, rightIcon, title, lefIcon, containerClass}) {
    return (
        <button id={id} className={`group relative z-10 w-fit 
        cursor-pointer overflow-hidden rounded-full 
        px-7 py-3 text-black ${containerClass?containerClass:''}`}>
            {lefIcon}
            <span className="relative inline-flex overflow-hidden
            font-general text-xs uppercase">
                <div>
                    {title}
                </div>
            </span>
            {rightIcon}
        </button>
  )
}

export default Button