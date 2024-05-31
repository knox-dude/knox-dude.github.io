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
      <p className="mx-auto">{text}</p>
    </figure>
  )
}

export default TopicBubble