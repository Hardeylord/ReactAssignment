const sizeMap={
  md:{
    height:30,
    width:60
  },
  lg:{
    height:60,
    width:90
  },
  xl:{
    height:120,
    width:150
  }
}

function Button({color, size, title}) {
  return(
    <button style={{
      backgroundColor:color,
      height:sizeMap[size].height,
      width:sizeMap[size].width
    }}>
      {title}
    </button>
  )
}

export default Button