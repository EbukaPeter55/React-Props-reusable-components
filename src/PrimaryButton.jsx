export default function PrimaryButton({width,
    height,
    backgroundColor,
    color,
    border,
    borderColor,
    fontSize,
    buttonText,
    fontWeight,
    margin}) {
      return (
          <button style={{width, height, backgroundColor, color, border, borderColor, fontSize, fontWeight,
          margin}}>
             {buttonText}
          </button>
      )
  }