interface TopicBubbleProps {
  text:string
  color:string
}

function TopicBubble({text, color}: TopicBubbleProps) {
  return (
    <figure
      className="rounded-full px-4 py-2 text-white"
      style={{ backgroundColor: color }}
    >
      {text}
    </figure>
  )
}

export default TopicBubble